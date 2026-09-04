/* ============================================================
   TO BE HERO X // PERSONA 3 RELOAD KINETIC ANIME HUD ENGINE
   Pure Vanilla JS // Standalone // Zero Heavy Libraries
   ============================================================ */

"use strict";

(() => {
  // ==========================================================
  // 1. DATA DEFINITIONS & OPERATIVE PROFILES
  // ==========================================================

  const OPERATIVES = {
    "hero-x": {
      id: "hero-x",
      code: "HERO X // UNRANKED",
      name: "HERO X",
      title: "HERO X // UNRANKED APEX",
      class: "CLASS: APEX PROTAGONIST // INFINITE TRUST SCALER",
      rankBadge: "GLOBAL RANK: UNRANKED [CIVIC ANOMALY]",
      quote: "Belief is currency. You believe in me, and I will shatter this nightmare.",
      atk: 999,
      spd: 880,
      sync: 960,
      def: 740,
      skillName: "BELIEF CONVERGENCE : POINT-BLANK",
      skillDesc: "Channels total civic faith into a single directional kinetic release. Pierces any temporal barrier and resets enemy threat ranks to zero.",
      auraColor: "var(--accent-primary)",
      kanji: "英雄",
      voiceLine: "Trust is all the weapon I need! 突撃!",
      svg: `
        <svg viewBox="0 0 400 450" class="hero-svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-x" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="var(--accent-primary)" />
              <stop offset="100%" stop-color="var(--accent-secondary)" />
            </linearGradient>
            <pattern id="dot-x" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="var(--accent-primary)" opacity="0.4" />
            </pattern>
          </defs>
          <polygon points="40,20 360,50 320,100 10,70" fill="url(#dot-x)" />
          <polygon points="10,130 380,180 340,210 20,170" fill="var(--accent-secondary)" opacity="0.25" />
          <path d="M120,140 Q60,190 20,320 Q90,260 160,220 Z" fill="var(--accent-secondary)" opacity="0.85" />
          <path d="M160,150 Q100,280 40,430 Q120,350 190,270 Z" fill="var(--accent-secondary)" opacity="0.95" />
          <polygon points="140,160 270,145 320,360 280,440 180,450 110,380" fill="#06131f" stroke="var(--accent-primary)" stroke-width="3" />
          <polygon points="175,180 240,170 260,280 165,290" fill="url(#grad-x)" opacity="0.9" />
          <polygon points="170,120 225,85 255,120 235,160 160,155" fill="#06131f" stroke="var(--accent-primary)" stroke-width="2" />
          <polygon points="180,105 240,80 250,95 210,115" fill="var(--accent-primary)" />
          <polygon points="185,125 240,110 232,122 195,132" fill="#ffffff" filter="drop-shadow(0 0 8px var(--accent-primary))" />
          <polygon points="270,220 370,280 395,440 310,380" fill="#0b0f14" stroke="var(--accent-secondary)" stroke-width="2" />
          <line x1="280" y1="80" x2="390" y2="40" stroke="var(--accent-primary)" stroke-width="4" />
          <line x1="310" y1="110" x2="380" y2="80" stroke="var(--accent-secondary)" stroke-width="2" />
        </svg>
      `
    },
    "cypher": {
      id: "cypher",
      code: "CYPHER // RANK 03",
      name: "CYPHER",
      title: "CYPHER // RANK 03 BLADE",
      class: "CLASS: HIGH-VELOCITY EXECUTOR // SHADOW REAP",
      rankBadge: "GLOBAL RANK: NO. 03 [TOP BRACKET]",
      quote: "Calculations finished. In zero point four seconds, the target ceases to exist.",
      atk: 920,
      spd: 995,
      sync: 790,
      def: 620,
      skillName: "CHRONO-SCYTHE : PHASE CUT",
      skillDesc: "Splits local temporal threads into duplicate blade strikes. Teleports behind enemy defense matrices, inflicting guaranteed critical damage.",
      auraColor: "var(--accent-secondary)",
      kanji: "影刃",
      voiceLine: "Flicker out of sight. 滅殺!",
      svg: `
        <svg viewBox="0 0 400 450" class="hero-svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-cypher" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="var(--accent-secondary)" />
              <stop offset="100%" stop-color="#ff00a0" />
            </linearGradient>
            <pattern id="dot-c" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="var(--accent-secondary)" opacity="0.5" />
            </pattern>
          </defs>
          <polygon points="20,40 380,10 340,60 50,80" fill="url(#dot-c)" />
          <polygon points="10,200 370,120 390,160 30,240" fill="var(--accent-primary)" opacity="0.2" />
          <!-- Cypher Slim Blade Operative Silhouette -->
          <!-- Cyber Katana / Scythe Blade -->
          <polygon points="320,20 340,15 220,380 200,380" fill="#ffffff" stroke="var(--accent-secondary)" stroke-width="3" filter="drop-shadow(0 0 10px var(--accent-secondary))" />
          <polygon points="340,15 380,45 230,370" fill="var(--accent-secondary)" opacity="0.7" />
          <!-- Head / Mask with Horn Antennas -->
          <polygon points="180,110 195,50 205,100 230,70 235,115 210,145 175,140" fill="#06131f" stroke="var(--accent-secondary)" stroke-width="2" />
          <polygon points="185,115 225,115 215,125 190,125" fill="var(--accent-secondary)" filter="drop-shadow(0 0 8px var(--accent-secondary))" />
          <!-- Sleek Ninja Armor -->
          <polygon points="150,150 250,145 270,300 230,420 170,420 130,290" fill="#080e15" stroke="var(--accent-tertiary)" stroke-width="2" />
          <polygon points="175,160 225,160 240,250 160,250" fill="url(#grad-cypher)" opacity="0.85" />
          <!-- Cyber Cape Wings -->
          <polygon points="130,170 30,230 40,360 120,280" fill="#0b0f14" stroke="var(--accent-primary)" stroke-width="2" />
          <polygon points="250,170 360,240 370,390 270,300" fill="#0b0f14" stroke="var(--accent-primary)" stroke-width="2" />
          <!-- Trailing Neon Slash Rays -->
          <line x1="20" y1="120" x2="160" y2="180" stroke="var(--accent-secondary)" stroke-width="3" />
          <line x1="60" y1="380" x2="200" y2="430" stroke="var(--accent-tertiary)" stroke-width="3" />
        </svg>
      `
    },
    "spectro": {
      id: "spectro",
      code: "SPECTRO // CORE",
      name: "SPECTRO",
      title: "SPECTRO // CORE VANGUARD",
      class: "CLASS: HEAVY FORTRESS // CITADEL BULWARK",
      rankBadge: "GLOBAL RANK: NO. 07 [DEFENSE CORPS]",
      quote: "Stand behind this shield. Not a single citizen falls today.",
      atk: 780,
      spd: 610,
      sync: 940,
      def: 999,
      skillName: "AEGIS CITADEL : ABSOLUTE SPHERE",
      skillDesc: "Deploys a multi-layered hexagonal light fortress anchored by civic support. Absorbs 100% of all incoming ballistic and elemental strikes.",
      auraColor: "var(--accent-tertiary)",
      kanji: "鉄壁",
      voiceLine: "Barriers armed! None shall pass! 鉄壁展開!",
      svg: `
        <svg viewBox="0 0 400 450" class="hero-svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-spectro" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="var(--accent-tertiary)" />
              <stop offset="100%" stop-color="var(--accent-primary)" />
            </linearGradient>
            <pattern id="hex-s" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <polygon points="8,1 15,5 15,13 8,17 1,13 1,5" fill="none" stroke="var(--accent-tertiary)" stroke-width="1" opacity="0.4" />
            </pattern>
          </defs>
          <polygon points="30,30 370,50 350,120 10,90" fill="url(#hex-s)" />
          <!-- Heavy Bulwark Silhouette -->
          <!-- Giant Riot Shield -->
          <polygon points="50,110 180,80 190,410 40,390" fill="#0a121c" stroke="var(--accent-tertiary)" stroke-width="4" />
          <polygon points="70,120 160,100 170,380 60,370" fill="url(#grad-spectro)" opacity="0.6" />
          <line x1="60" y1="240" x2="175" y2="240" stroke="#ffffff" stroke-width="3" />
          <!-- Armored Torso -->
          <polygon points="170,140 330,130 340,430 180,440" fill="#080e15" stroke="var(--accent-primary)" stroke-width="3" />
          <!-- Heavy Visor Helmet -->
          <polygon points="210,90 290,90 305,140 195,140" fill="#06131f" stroke="var(--accent-tertiary)" stroke-width="3" />
          <polygon points="220,110 285,110 280,122 225,122" fill="var(--accent-tertiary)" filter="drop-shadow(0 0 10px var(--accent-tertiary))" />
          <!-- Shoulder Heavy Cannon -->
          <polygon points="290,100 370,80 385,130 310,140" fill="#06131f" stroke="var(--accent-secondary)" stroke-width="2" />
          <polygon points="365,85 390,80 395,100 370,105" fill="var(--accent-secondary)" />
          <!-- Shield Spark Shards -->
          <polygon points="40,180 15,195 35,210" fill="var(--accent-tertiary)" />
          <polygon points="30,280 5,295 25,310" fill="var(--accent-primary)" />
        </svg>
      `
    }
  };

  const COMMAND_DATA = {
    "ATTACK": {
      type: "PHYSICAL OFFENSIVE",
      name: "ATTACK // CRITICAL STRIKE",
      desc: "Unleashes a direct kinetic heavy strike fueled by real-time citizen belief. Armor piercing modifier active when trust level exceeds 50%.",
      cost: "0 SP / 15% HP",
      impact: "HEAVY SLASH",
      crit: "94.2%",
      target: "ALL ENEMIES",
      kanji: "攻撃",
      sfxTone: "impact",
      sfxWord: "DON!"
    },
    "PERSONA": {
      type: "ALMIGHTY / RESONANCE",
      name: "PERSONA // PROTOCOL AWAKEN",
      desc: "Summons the core tactical archetype into physical space. Distorts enemy perception and elevates squad trust parameters exponentially.",
      cost: "32 SP",
      impact: "ALMIGHTY RESONANCE",
      crit: "99.0%",
      target: "SINGLE APEX TARGET",
      kanji: "召喚",
      sfxTone: "activate",
      sfxWord: "PERSONA!"
    },
    "OVERDRIVE": {
      type: "FINISHER / BURST",
      name: "OVERDRIVE // MAXIMUM RUSH",
      desc: "Discharges stored kinetic momentum in a rapid-fire multi-hit cascade. High likelihood of triggering instant tactical surrender.",
      cost: "MAX GAUGE",
      impact: "EXTREME IMPACT",
      crit: "100%",
      target: "ALL SQUAD THREATS",
      kanji: "極限",
      sfxTone: "allout",
      sfxWord: "CRITICAL!"
    },
    "TACTICS": {
      type: "BATON TOUCH / SHIFT",
      name: "TACTICS // SQUAD SYNCHRONIZE",
      desc: "Passes combat initiative to a squad mate with enhanced attack priority and immediate recovery of tactical stance points.",
      cost: "FREE ACTION",
      impact: "MOMENTUM PASS",
      crit: "100%",
      target: "ACTIVE SQUAD MATE",
      kanji: "作戦",
      sfxTone: "slash",
      sfxWord: "SHIFT!"
    },
    "DEFEND": {
      type: "BULWARK GUARD",
      name: "AEGIS // FORTRESS STANCE",
      desc: "Braces against all incoming damage. Reduces enemy physical and elemental impact by 80% while restoring personal focus meters.",
      cost: "0 SP",
      impact: "DEFENSIVE MATRIX",
      crit: "GUARD ON",
      target: "SELF + ALLIES",
      kanji: "防御",
      sfxTone: "impact",
      sfxWord: "KASHIN!"
    }
  };

  // ==========================================================
  // 2. SYNTHESIZED WEB AUDIO SOUND ENGINE (NO EXTERNAL AUDIO FILES)
  // ==========================================================

  class AnimeAudioEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx && typeof window.AudioContext !== "undefined") {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    play(tone) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      switch (tone) {
        case "impact": {
          // Heavy punch thump (80Hz down to 25Hz)
          osc.type = "sine";
          osc.frequency.setValueAtTime(160, now);
          osc.frequency.exponentialRampToValueAtTime(28, now + 0.28);
          gain.gain.setValueAtTime(0.4, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
          break;
        }

        case "slash": {
          // Sharp high-pitched metallic blade cut
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(980, now);
          osc.frequency.exponentialRampToValueAtTime(240, now + 0.18);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
          break;
        }

        case "activate": {
          // Uplink ascending chime
          osc.type = "triangle";
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
          osc.frequency.setValueAtTime(1320, now + 0.15);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          osc.start(now);
          osc.stop(now + 0.35);
          break;
        }

        case "critical": {
          // P3R Critical Stride Ding
          osc.type = "square";
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
          osc.frequency.setValueAtTime(1046.5, now + 0.16); // C6
          gain.gain.setValueAtTime(0.22, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
          osc.start(now);
          osc.stop(now + 0.4);
          break;
        }

        case "allout": {
          // Full finishing explosion combo
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.exponentialRampToValueAtTime(55, now + 0.45);
          gain.gain.setValueAtTime(0.35, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.5);

          // Sub-oscillator for rumble
          const subOsc = this.ctx.createOscillator();
          const subGain = this.ctx.createGain();
          subOsc.type = "sine";
          subOsc.frequency.setValueAtTime(90, now);
          subOsc.frequency.linearRampToValueAtTime(30, now + 0.5);
          subGain.gain.setValueAtTime(0.5, now);
          subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          subOsc.connect(subGain);
          subGain.connect(this.ctx.destination);
          subOsc.start(now);
          subOsc.stop(now + 0.5);
          break;
        }

        case "click":
        default: {
          // Short crisp interface blip
          osc.type = "sine";
          osc.frequency.setValueAtTime(800, now);
          osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
          osc.start(now);
          osc.stop(now + 0.06);
          break;
        }
      }
    }
  }

  const audio = new AnimeAudioEngine();

  // ==========================================================
  // 3. COMIC SFX BURST & VISUAL IMPACT SYSTEM
  // ==========================================================

  const sfxOverlay = document.getElementById("sfx-overlay");
  const impactFlash = document.getElementById("impact-flash");
  const speedlines = document.getElementById("speedlines");

  function triggerComicSfx(englishText, kanjiText, tone = "impact", x = null, y = null) {
    // Play audio
    audio.play(tone);

    // Speedlines pulse
    if (speedlines) {
      speedlines.classList.add("active");
      clearTimeout(speedlines._timer);
      speedlines._timer = setTimeout(() => {
        speedlines.classList.remove("active");
      }, 700);
    }

    // Flash for major impacts
    if (tone === "allout" || tone === "critical") {
      triggerImpactFlash();
    }

    // Generate floating manga burst bubble
    if (!sfxOverlay) return;

    const burst = document.createElement("div");
    burst.className = "sfx-floating-burst";

    // Position calculation
    const posX = x !== null ? x : window.innerWidth * (0.35 + Math.random() * 0.3);
    const posY = y !== null ? y : window.innerHeight * (0.35 + Math.random() * 0.3);

    burst.style.left = `${posX}px`;
    burst.style.top = `${posY}px`;

    burst.innerHTML = `
      <span class="burst-kanji">${kanjiText || "ドォン!"}</span>
      <span class="burst-english">${englishText || "DON!"}</span>
    `;

    sfxOverlay.appendChild(burst);

    setTimeout(() => {
      if (burst.parentNode) {
        burst.parentNode.removeChild(burst);
      }
    }, 1100);
  }

  function triggerImpactFlash() {
    if (!impactFlash) return;
    impactFlash.classList.remove("flash-now");
    // Trigger reflow
    void impactFlash.offsetWidth;
    impactFlash.classList.add("flash-now");
  }

  // ==========================================================
  // 4. TERMINAL LOG FEED
  // ==========================================================

  const terminalBody = document.getElementById("terminal-body");

  function logTerminal(message, type = "cyan") {
    if (!terminalBody) return;
    const now = new Date();
    const timeStr = `[${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}]`;

    const line = document.createElement("div");
    line.className = "t-line";

    let tagClass = "t-cyan";
    if (type === "coral") tagClass = "t-coral";
    if (type === "lime") tagClass = "t-lime";

    line.innerHTML = `<span class="t-time">${timeStr}</span> <span class="${tagClass}">EVT:</span> ${message}`;
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // ==========================================================
  // 5. CLOCK & TELEMETRY
  // ==========================================================

  const clockDisplay = document.getElementById("clock-display");
  function updateClock() {
    if (!clockDisplay) return;
    const d = new Date();
    clockDisplay.textContent = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // ==========================================================
  // 6. COMPONENT 1: HERO TRUST & RANK GAUGE (TO BE HERO X)
  // ==========================================================

  const trustSlider = document.getElementById("trust-slider");
  const railFill = document.getElementById("rail-fill");
  const trustValDisplay = document.getElementById("trust-val-display");
  const trustPercentDisplay = document.getElementById("trust-percent-display");
  const rankLetterDisplay = document.getElementById("rank-letter-display");
  const rankTitleDisplay = document.getElementById("rank-title-display");
  const multiplierDisplay = document.getElementById("multiplier-display");
  const distortionDisplay = document.getElementById("distortion-display");
  const tierIndicator = document.getElementById("tier-indicator");
  const fbPerception = document.getElementById("fb-perception");
  const fbAttribute = document.getElementById("fb-attribute");
  const stagePowerTier = document.getElementById("stage-power-tier");
  const presetButtons = document.querySelectorAll(".preset-btn");
  const tierMarks = document.querySelectorAll(".tier-mark");

  // Quick Hero Ribbon Telemetry
  const quickSyncVal = document.getElementById("quick-sync-val");
  const quickSyncBar = document.getElementById("quick-sync-bar");
  const quickAuraVal = document.getElementById("quick-aura-val");
  const quickAuraBar = document.getElementById("quick-aura-bar");

  function getTierConfig(val) {
    if (val < 20) {
      return {
        tier: "E",
        rankLetter: "RANK E",
        rankTitle: "TITLED: STREET CIVILIAN",
        multiplier: (1.0 + (val / 20) * 0.5).toFixed(2),
        distortion: "DORMANT",
        perception: `"ORDINARY CITIZEN // UNNOTICED"`,
        attribute: "BASE COMBAT CAPABILITIES",
        tierText: "TIER-E // ZERO CIVIC AURA"
      };
    } else if (val < 40) {
      return {
        tier: "D",
        rankLetter: "RANK D",
        rankTitle: "TITLED: ROOKIE DEFENDER",
        multiplier: (1.5 + ((val - 20) / 20) * 0.8).toFixed(2),
        distortion: "MINOR FLICKER",
        perception: `"LOCAL HOPEFUL // NEIGHBORHOOD WATCH"`,
        attribute: "MINOR KINETIC ACCELERATION",
        tierText: "TIER-D // LOCAL DEFENDER"
      };
    } else if (val < 60) {
      return {
        tier: "C",
        rankLetter: "RANK C",
        rankTitle: "TITLED: STREET VIGILANTE",
        multiplier: (2.3 + ((val - 40) / 20) * 1.0).toFixed(2),
        distortion: "HARMONIC",
        perception: `"PROVEN GUARDIAN OF SECTOR 4"`,
        attribute: "BARRIER PENETRATION UNLOCKED",
        tierText: "TIER-C // COMBAT ENGAGED"
      };
    } else if (val < 80) {
      return {
        tier: "B",
        rankLetter: "RANK B",
        rankTitle: "TITLED: METROPOLITAN ENFORCER",
        multiplier: (3.3 + ((val - 60) / 20) * 1.5).toFixed(2),
        distortion: "STABLE HIGH",
        perception: `"DEFENDER OF SHINJUKU DISTRICT"`,
        attribute: "KINETIC IMPACT FORCE UNLOCKED",
        tierText: "TIER-B // HIGH RESONANCE"
      };
    } else if (val < 98) {
      return {
        tier: "A",
        rankLetter: "RANK A",
        rankTitle: "TITLED: APEX NATIONAL HERO",
        multiplier: (4.8 + ((val - 80) / 18) * 2.8).toFixed(2),
        distortion: "WARPING",
        perception: `"NATIONAL HERO // POPULAR SYMBOL"`,
        attribute: "REALITY RIFT // ALL-OUT READY",
        tierText: "TIER-A // APEX GOD STATUS"
      };
    } else {
      return {
        tier: "X",
        rankLetter: "RANK X",
        rankTitle: "TITLED: UNRANKED GOD // ANOMALY",
        multiplier: "x9.99 [OVERDRIVE]",
        distortion: "CRITICAL COLLAPSE",
        perception: `"TRANSCENDENT CIVIC ENTITY // ABSOLUTE BELIEF"`,
        attribute: "INFINITE KINETIC DOMAIN UNLEASHED",
        tierText: "TIER-X // OVERDRIVE GOD MODE"
      };
    }
  }

  function updateTrustValue(val, logChange = false) {
    val = Math.max(0, Math.min(100, parseInt(val, 10)));
    const config = getTierConfig(val);

    // Apply color grading mutation to document
    document.documentElement.setAttribute("data-trust-tier", config.tier);

    // Numerical and UI texts
    const trustNumber = (val * 10000).toLocaleString();
    if (trustValDisplay) trustValDisplay.textContent = trustNumber;
    if (trustPercentDisplay) trustPercentDisplay.textContent = `${val}%`;
    if (rankLetterDisplay) rankLetterDisplay.textContent = config.rankLetter;
    if (rankTitleDisplay) rankTitleDisplay.textContent = config.rankTitle;
    if (multiplierDisplay) multiplierDisplay.textContent = `x${config.multiplier}`;
    if (distortionDisplay) distortionDisplay.textContent = config.distortion;
    if (tierIndicator) tierIndicator.textContent = config.tierText;
    if (fbPerception) fbPerception.textContent = config.perception;
    if (fbAttribute) fbAttribute.textContent = config.attribute;
    if (stagePowerTier) stagePowerTier.textContent = `${config.tierText}`;

    // Fill indicators
    if (railFill) railFill.style.width = `${val}%`;
    if (quickSyncVal) quickSyncVal.textContent = `${(80 + (val * 0.19)).toFixed(1)}%`;
    if (quickSyncBar) quickSyncBar.style.width = `${val}%`;
    if (quickAuraVal) quickAuraVal.textContent = `${(1.0 + (val * 0.05)).toFixed(2)}x`;
    if (quickAuraBar) quickAuraBar.style.width = `${Math.min(100, val * 1.1)}%`;

    // Active tier marks
    tierMarks.forEach(tm => {
      if (tm.dataset.tier === config.tier) {
        tm.classList.add("active-tier");
      } else {
        tm.classList.remove("active-tier");
      }
    });

    // Preset button sync
    presetButtons.forEach(btn => {
      const bVal = parseInt(btn.dataset.val, 10);
      if (Math.abs(bVal - val) <= 4) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    if (logChange) {
      logTerminal(`TRUST MUTATION: ${val}% -> ${config.rankLetter} (${config.rankTitle})`, "lime");
      audio.play("click");
    }

    // Special trigger on 100%
    if (val === 100 && logChange) {
      triggerComicSfx("GOD MODE!!", "限界突破!!", "allout");
      logTerminal("CRITICAL WARNING: 100% TRUST OVERDRIVE PROTOCOL ARMED!", "coral");
    }
  }

  if (trustSlider) {
    trustSlider.addEventListener("input", (e) => {
      updateTrustValue(e.target.value, false);
    });

    trustSlider.addEventListener("change", (e) => {
      updateTrustValue(e.target.value, true);
    });
  }

  presetButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const val = parseInt(btn.dataset.val, 10);
      if (trustSlider) trustSlider.value = val;
      updateTrustValue(val, true);
      audio.play("activate");
    });
  });

  // ==========================================================
  // 7. COMPONENT 2: PERSONA 3 RELOAD DIAGONAL ACTION MENU
  // ==========================================================

  const ribbonButtons = document.querySelectorAll(".p3-ribbon-btn");
  const actionKanjiBg = document.getElementById("action-kanji-bg");
  const actionTypeDisplay = document.getElementById("action-type-display");
  const actionNameDisplay = document.getElementById("action-name-display");
  const actionDescDisplay = document.getElementById("action-desc-display");
  const actionCostDisplay = document.getElementById("action-cost-display");
  const actionImpactDisplay = document.getElementById("action-impact-display");
  const actionCritDisplay = document.getElementById("action-crit-display");
  const actionTargetDisplay = document.getElementById("action-target-display");
  const executeActionBtn = document.getElementById("execute-action-btn");

  let activeCommandKey = "ATTACK";

  function selectCommand(key, playSound = true) {
    const data = COMMAND_DATA[key];
    if (!data) return;

    activeCommandKey = key;

    ribbonButtons.forEach(btn => {
      if (btn.dataset.command === key) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update Output Readout
    if (actionKanjiBg) actionKanjiBg.textContent = data.kanji;
    if (actionTypeDisplay) actionTypeDisplay.textContent = data.type;
    if (actionNameDisplay) actionNameDisplay.textContent = data.name;
    if (actionDescDisplay) actionDescDisplay.textContent = data.desc;
    if (actionCostDisplay) actionCostDisplay.textContent = data.cost;
    if (actionImpactDisplay) actionImpactDisplay.textContent = data.impact;
    if (actionCritDisplay) actionCritDisplay.textContent = data.crit;
    if (actionTargetDisplay) actionTargetDisplay.textContent = data.target;

    if (playSound) {
      audio.play("click");
    }
  }

  ribbonButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cmd = btn.dataset.command;
      selectCommand(cmd, true);
    });

    btn.addEventListener("mouseenter", () => {
      audio.play("click");
    });

    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const cmd = btn.dataset.command;
        selectCommand(cmd, true);
      }
    });
  });

  function executeActiveCommand() {
    const data = COMMAND_DATA[activeCommandKey];
    if (!data) return;

    triggerComicSfx(data.sfxWord, data.kanji, data.sfxTone);
    logTerminal(`EXECUTED: [${data.name}] -> CRITICAL COMBAT ENGAGED`, "coral");
  }

  if (executeActionBtn) {
    executeActionBtn.addEventListener("click", () => {
      executeActiveCommand();
    });
  }

  // Global Spacebar shortcut to execute active command when focused or general
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON") {
      e.preventDefault();
      executeActiveCommand();
    }
  });

  // ==========================================================
  // 8. COMPONENT 3: HERO DOSSIER ROSTER (OPERATIVE SELECTOR)
  // ==========================================================

  const dossierTabs = document.querySelectorAll(".dossier-tab");
  const opCodeDisplay = document.getElementById("op-code-display");
  const opQuoteDisplay = document.getElementById("op-quote-display");
  const opRankPill = document.getElementById("op-rank-pill");
  const opNameDisplay = document.getElementById("op-name-display");
  const opClassDisplay = document.getElementById("op-class-display");
  const gAtkVal = document.getElementById("g-atk-val");
  const gAtkBar = document.getElementById("g-atk-bar");
  const gSpdVal = document.getElementById("g-spd-val");
  const gSpdBar = document.getElementById("g-spd-bar");
  const gSyncVal = document.getElementById("g-sync-val");
  const gSyncBar = document.getElementById("g-sync-bar");
  const gDefVal = document.getElementById("g-def-val");
  const gDefBar = document.getElementById("g-def-bar");
  const opSkillName = document.getElementById("op-skill-name");
  const opSkillDesc = document.getElementById("op-skill-desc");
  const dossierSvgContainer = document.getElementById("dossier-svg-container");
  const stageCharacterName = document.getElementById("stage-character-name");
  const stageGraphic = document.getElementById("stage-graphic");
  const deployOpBtn = document.getElementById("deploy-op-btn");
  const voiceLineBtn = document.getElementById("voice-line-btn");

  let currentOperativeId = "hero-x";

  function selectOperative(opId, playSound = true) {
    const op = OPERATIVES[opId];
    if (!op) return;

    currentOperativeId = opId;

    dossierTabs.forEach(tab => {
      if (tab.dataset.operative === opId) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    // Update Dossier Content
    if (opCodeDisplay) opCodeDisplay.textContent = op.code;
    if (opQuoteDisplay) opQuoteDisplay.textContent = `"${op.quote}"`;
    if (opRankPill) opRankPill.textContent = op.rankBadge;
    if (opNameDisplay) opNameDisplay.textContent = op.name;
    if (opClassDisplay) opClassDisplay.textContent = op.class;

    // Gauges
    if (gAtkVal) gAtkVal.textContent = op.atk;
    if (gAtkBar) gAtkBar.style.width = `${Math.min(100, (op.atk / 1000) * 100)}%`;

    if (gSpdVal) gSpdVal.textContent = op.spd;
    if (gSpdBar) gSpdBar.style.width = `${Math.min(100, (op.spd / 1000) * 100)}%`;

    if (gSyncVal) gSyncVal.textContent = op.sync;
    if (gSyncBar) gSyncBar.style.width = `${Math.min(100, (op.sync / 1000) * 100)}%`;

    if (gDefVal) gDefVal.textContent = op.def;
    if (gDefBar) gDefBar.style.width = `${Math.min(100, (op.def / 1000) * 100)}%`;

    if (opSkillName) opSkillName.textContent = op.skillName;
    if (opSkillDesc) opSkillDesc.textContent = op.skillDesc;

    // Silhouette Art in Dossier & Stage Right
    if (dossierSvgContainer) dossierSvgContainer.innerHTML = op.svg;
    if (stageGraphic) stageGraphic.innerHTML = op.svg;
    if (stageCharacterName) stageCharacterName.textContent = op.title;

    if (playSound) {
      audio.play("activate");
      triggerComicSfx("DEPLOY!", op.kanji, "activate");
    }

    logTerminal(`OPERATIVE ROSTER SHIFTED: [${op.name}] ACTIVATED`, "cyan");
  }

  dossierTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const opId = tab.dataset.operative;
      selectOperative(opId, true);
    });
  });

  if (deployOpBtn) {
    deployOpBtn.addEventListener("click", () => {
      const op = OPERATIVES[currentOperativeId];
      triggerComicSfx("SORTIE!", op.kanji, "allout");
      logTerminal(`SQUAD LEAD ASSIGNED: ${op.name} DEPLOYED TO FRONTLINE`, "lime");
    });
  }

  if (voiceLineBtn) {
    voiceLineBtn.addEventListener("click", () => {
      const op = OPERATIVES[currentOperativeId];
      triggerComicSfx("VOICE!", op.kanji, "slash");
      logTerminal(`COMMS AUDIO FEED: "${op.voiceLine}"`, "coral");
    });
  }

  // ==========================================================
  // 9. COMPONENT 4: COMIC SFX SOUNDBOARD & HEADER ACTIONS
  // ==========================================================

  const sfxTriggerCards = document.querySelectorAll(".sfx-trigger-card");

  sfxTriggerCards.forEach(card => {
    card.addEventListener("click", (e) => {
      const text = card.dataset.sfxText;
      const kanji = card.dataset.sfxKanji;
      const tone = card.dataset.sfxTone || "impact";

      const rect = card.getBoundingClientRect();
      const clickX = rect.left + rect.width / 2;
      const clickY = rect.top;

      triggerComicSfx(text, kanji, tone, clickX, clickY);
      logTerminal(`SFX TRIGGERED: ${text} (${kanji})`, "coral");
    });
  });

  // Header Audio Toggle
  const audioToggleBtn = document.getElementById("audio-toggle");
  const audioIcon = document.getElementById("audio-icon");

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", () => {
      const isEnabled = audio.toggle();
      audioToggleBtn.setAttribute("aria-pressed", isEnabled ? "true" : "false");
      if (audioIcon) {
        audioIcon.textContent = isEnabled ? "AUDIO [ON]" : "AUDIO [MUTED]";
      }
      logTerminal(`SYNTHESIZED ANIME AUDIO: ${isEnabled ? "ENABLED" : "MUTED"}`, "cyan");
    });
  }

  // Header All-Out Button
  const burstAlloutBtn = document.getElementById("burst-allout-btn");
  if (burstAlloutBtn) {
    burstAlloutBtn.addEventListener("click", () => {
      triggerComicSfx("ALL-OUT ATTACK!!", "総攻撃突撃!!", "allout");
      logTerminal("ALL-OUT ASSAULT ENGAGED: ALL ALLIES RUSH FORWARD!", "coral");
    });
  }

  // Hero Section Fast Buttons
  const engageBtn = document.getElementById("engage-btn");
  if (engageBtn) {
    engageBtn.addEventListener("click", () => {
      triggerComicSfx("TACTICAL ENGAGE!", "戦闘開始!", "allout");
      logTerminal("METROPOLITAN DEFENSE PROTOCOL 07 EXECUTED", "lime");
      const trustSec = document.getElementById("trust-system");
      if (trustSec) trustSec.scrollIntoView({ behavior: "smooth" });
    });
  }

  const sfxBurstBtn = document.getElementById("sfx-burst-btn");
  if (sfxBurstBtn) {
    sfxBurstBtn.addEventListener("click", () => {
      triggerComicSfx("DON!!", "ドォン!!", "impact");
    });
  }

  // Clear Terminal Button
  const clearLogBtn = document.getElementById("clear-log-btn");
  if (clearLogBtn && terminalBody) {
    clearLogBtn.addEventListener("click", () => {
      terminalBody.innerHTML = `
        <div class="t-line"><span class="t-time">[00:00:00]</span> <span class="t-cyan">FEED:</span> TERMINAL BUFFER RESET.</div>
      `;
      audio.play("click");
    });
  }

  // ==========================================================
  // 10. INITIALIZATION
  // ==========================================================

  // Set initial operative
  selectOperative("hero-x", false);

  // Set initial command
  selectCommand("ATTACK", false);

  // Set initial trust value to 64% (Rank B)
  updateTrustValue(64, false);

  logTerminal("SYSTEM BOOT: ALL PROTOCOLS VERIFIED AND READY.", "lime");
})();
