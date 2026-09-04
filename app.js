/* ============================================================
   NEXUS//CYPHER — app.js
   1. Interactive particle field (canvas)
   2. Uplink status toggle console
   ============================================================ */
"use strict";

(() => {
  /* ---------- 1. Particle field ---------- */

  const canvas = document.getElementById("grid");
  const ctx = canvas.getContext("2d");

  const ACCENT = "0, 208, 240"; // Spectro Cyan rgb triplet
  const DENSITY = 9000;         // px² per particle
  const LINK_RADIUS = 130;      // connection distance px
  const LINK_RADIUS_SQ = LINK_RADIUS * LINK_RADIUS;

  let particles = [];
  let width = 0;
  let height = 0;
  let running = true;

  // Mouse influence: attract nearby particles; null when pointer leaves.
  const pointer = { x: -9999, y: -9999, active: false };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    spawn();
  }

  function spawn() {
    const count = Math.min(260, Math.round((width * height) / DENSITY));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.6 + 0.6,
    }));
  }

  function step() {
    for (const p of particles) {
      // Drift
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = width + 10;
      else if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      else if (p.y > height + 10) p.y = -10;

      // Mouse attraction
      if (pointer.active) {
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 22500) { // 150px radius
          const d = Math.sqrt(d2) || 1;
          const pull = (150 - d) * 0.0009;
          p.x += (dx / d) * pull * d;
          p.y += (dy / d) * pull * d;
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Links — O(n²) is fine at our density cap.
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 > LINK_RADIUS_SQ) continue;
        const alpha = (1 - d2 / LINK_RADIUS_SQ) * 0.28;
        ctx.strokeStyle = `rgba(${ACCENT}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    // Nodes — brighten those near the pointer.
    for (const p of particles) {
      const glow = pointer.active
        ? Math.max(0, 1 - Math.hypot(p.x - pointer.x, p.y - pointer.y) / 200) * 0.9
        : 0;
      ctx.fillStyle = `rgba(${ACCENT}, ${(0.35 + glow * 0.65).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r + glow * 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    if (!running) return;
    step();
    draw();
    requestAnimationFrame(loop);
  }

  function pause() {
    running = false;
    ctx.clearRect(0, 0, width, height);
  }

  function resume() {
    if (running) return;
    running = true;
    loop();
  }

  /* ---------- 2. Status toggle ---------- */

  const card = document.getElementById("status-card");
  const dot = document.getElementById("status-dot");
  const value = document.getElementById("status-value");
  const band = document.getElementById("status-band");
  const meta = document.getElementById("status-meta");
  const toggle = document.getElementById("toggle-btn");
  const integrity = document.getElementById("integrity");

  const STATES = {
    online: {
      value: "ONLINE",
      band: "SECURE",
      meta: "All systems nominal. Encrypted tunnel active across 8,400 relay nodes.",
      pressed: "true",
    },
    offline: {
      value: "OFFLINE",
      band: "LOCKED",
      meta: "Uplink suspended. Firewall raised — no inbound or outbound traffic permitted.",
      pressed: "false",
    },
  };

  let state = "online";

  function setState(next) {
    state = next;
    const s = STATES[next];

    card.dataset.state = next;
    value.textContent = s.value;
    band.textContent = s.band;
    meta.textContent = s.meta;
    toggle.setAttribute("aria-pressed", s.pressed);
    toggle.querySelector(".btn-label").textContent =
      next === "online" ? "Toggle Uplink" : "Re-establish Uplink";
  }

  function toggleUplink() {
    setState(state === "online" ? "offline" : "online");
    integrity.textContent = "VERIFIED";
    setTimeout(() => {
      integrity.textContent = "VERIFYING";
    }, 2200);
  }

  /* ---------- Wiring ---------- */

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  resize();
  if (!reduceMotion) {
    loop();

    window.addEventListener(
      "pointermove",
      (e) => {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        pointer.active = true;
      },
      { passive: true }
    );

    window.addEventListener("pointerleave", () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    });

    document.addEventListener("visibilitychange", () => {
      document.hidden ? pause() : resume();
    });
  } else {
    // Static constellation for reduced-motion users — one frame, no loop.
    draw();
  }

  window.addEventListener("resize", resize);

  toggle.addEventListener("click", toggleUplink);
  setState("online");
})();
