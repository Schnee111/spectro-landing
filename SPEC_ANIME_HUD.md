# SPEC: Anime Brutalist & Kinetic Pop HUD (Persona 3 Reload / TO BE HERO X Inspired)

## Objective
Overhaul the generic `spectro-landing` into a high-impact, kinetic anime-inspired interface inspired by the cutting-edge UI of **Persona 3 Reload / Persona 5 Tactical** and **TO BE HERO X** (Haoliners / Aniplex).

## Visual Identity & Archetype (Anime Kinetic Pop / Tactical Street)
- **Palette**:
  - Substrate Dark: Ink Obsidian `#0b0f14` & Deep Cyan Navy `#06131f`
  - High Impact Accent 1: Electric Cyan `#00f0ff` (Persona 3 Reload moonlit blue/cyan glow)
  - High Impact Accent 2: Hazard Neon Coral `#ff2a5f` (Anime Hero/Rival battle accent)
  - High Impact Accent 3: Acid Lime `#d4ff00` (Tactical ranking badge)
  - Base Ink Text: Clean White `#f5faff` and Muted Slate `#5a6e82`
- **Typography**:
  - Structural Display: Heavy compressed sans-serif (`Archivo Black` / `Impact` / `Space Grotesk`) with angled transforms (`skewX(-6deg)` or `skewX(-10deg)`).
  - Telemetry: Monospace (`JetBrains Mono` / `Courier`) for ranks, hero trust scores, and tactical readouts.
- **Graphic Design Language**:
  - Diagonal cut ribbons, layered polygon tags, comic halftone dots, dynamic skewed menu badges.
  - Zero generic soft rounded SaaS cards. Nuclear geometry: 0px border radius or sharp chamfered corners (`clip-path: polygon(...)`).
  - Halftone screentone texture overlay (CSS radial dot matrix).

## Interactive Components (No AI Slop Partikels):
1. **Hero Trust & Rank Gauge (TO BE HERO X Mechanic)**:
   - Live interactive Trust Value Slider / Gauge that mutates hero heroics and shifts the UI color grading and stats dynamically.
2. **Kinetic Diagonal Action Menu (Persona UI style)**:
   - Bold, angled menu items that physically shift and reveal sound-effect typographic tags on hover.
3. **Hero Dossier Roster (Character / Operative Selector)**:
   - Tactical dossier switching between 3 operatives (e.g. `HERO X // UNRANKED`, `CYPHER // RANK 03`, `SPECTRO // CORE`), updating stats and comic silhouettes in real-time.
4. **Comic SFX Kinetic Shifter**:
   - Floating interactive SFX bursts (e.g., `DON!`, `KASHIN!`, `ACTIVATE!`) on button clicks.

## Anti-Slop Constraints:
- ZERO em-dashes (`—`).
- ZERO generic web canvas particle nets.
- ZERO fake 99.99% SaaS stats.
- ZERO rounded purple AI gradients.
- Mobile responsive down to 375px with clean collapse.
