(function () {
  "use strict";

  const PINK_PALETTES = [
    { outer: "#ffb3c6", inner: "#ff8fab", center: "#ffe08a" },
    { outer: "#ffccd9", inner: "#fb6f92", center: "#fff3b0" },
    { outer: "#ffd6e2", inner: "#ff9ebb", center: "#ffd166" },
    { outer: "#ffa6c1", inner: "#e85d88", center: "#fff0c2" }
  ];

  function createHeroBouquetSVG() {
    const container = document.getElementById("hero-bouquet");
    if (!container) return;

    container.innerHTML = `
      <svg viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Buket bunga digital pink lembut">
        <defs>
          <linearGradient id="wrapFront" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffd9e4"/>
            <stop offset="100%" stop-color="#ffb3c6"/>
          </linearGradient>
          <linearGradient id="wrapBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fff0f5"/>
            <stop offset="100%" stop-color="#ffc2d1"/>
          </linearGradient>
          <linearGradient id="petalRose" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffd6e2"/>
            <stop offset="100%" stop-color="#fb6f92"/>
          </linearGradient>
          <linearGradient id="petalSoft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fff2f6"/>
            <stop offset="100%" stop-color="#ff9ebb"/>
          </linearGradient>
        </defs>

        <g class="bouquet-sway">
          <!-- Kertas buket belakang -->
          <polygon points="72,178 180,352 288,178 242,148 180,165 118,148" fill="url(#wrapBack)" stroke="#f7a8be" stroke-width="2"/>

          <!-- Daun eucalyptus -->
          <g fill="#8ab895" opacity="0.92">
            <ellipse cx="95" cy="148" rx="22" ry="11" transform="rotate(-38 95 148)"/>
            <ellipse cx="118" cy="112" rx="20" ry="10" transform="rotate(-24 118 112)"/>
            <ellipse cx="265" cy="148" rx="22" ry="11" transform="rotate(38 265 148)"/>
            <ellipse cx="242" cy="112" rx="20" ry="10" transform="rotate(24 242 112)"/>
            <ellipse cx="180" cy="78" rx="18" ry="10" transform="rotate(-8 180 78)"/>
          </g>

          <!-- Tangkai -->
          <g stroke="#6e9e79" stroke-width="5" stroke-linecap="round">
            <line x1="180" y1="120" x2="180" y2="270"/>
            <line x1="124" y1="145" x2="176" y2="265"/>
            <line x1="236" y1="145" x2="184" y2="265"/>
            <line x1="142" y1="108" x2="177" y2="250"/>
            <line x1="218" y1="108" x2="183" y2="250"/>
          </g>

          <!-- Bunga 1: Tengah Besar (Peony Pink) -->
          <g class="bouquet-bloom" data-bloom="0" transform="translate(180 128)">
            <circle r="38" fill="#ffb3c6"/>
            <circle cx="-18" cy="-10" r="22" fill="#ffc9d7"/>
            <circle cx="18" cy="-10" r="22" fill="#ffc9d7"/>
            <circle cx="-14" cy="16" r="21" fill="#ff9ebb"/>
            <circle cx="14" cy="16" r="21" fill="#ff9ebb"/>
            <circle cx="0" cy="-18" r="21" fill="#ffe1ea"/>
            <circle r="18" fill="url(#petalRose)"/>
            <circle r="9" fill="#ffe48f"/>
            <circle cx="-3" cy="-2" r="2.2" fill="#f5b74c"/>
            <circle cx="4" cy="2" r="2.2" fill="#f5b74c"/>
          </g>

          <!-- Bunga 2: Kiri Atas -->
          <g class="bouquet-bloom" data-bloom="1" transform="translate(125 112)">
            <circle cx="0" cy="-17" r="14" fill="url(#petalSoft)"/>
            <circle cx="16" cy="-5" r="14" fill="url(#petalSoft)"/>
            <circle cx="10" cy="14" r="14" fill="url(#petalSoft)"/>
            <circle cx="-10" cy="14" r="14" fill="url(#petalSoft)"/>
            <circle cx="-16" cy="-5" r="14" fill="url(#petalSoft)"/>
            <circle r="10" fill="#fb6f92"/>
            <circle r="5" fill="#fff0a8"/>
          </g>

          <!-- Bunga 3: Kanan Atas -->
          <g class="bouquet-bloom" data-bloom="2" transform="translate(235 112)">
            <circle cx="0" cy="-17" r="14" fill="url(#petalSoft)"/>
            <circle cx="16" cy="-5" r="14" fill="url(#petalSoft)"/>
            <circle cx="10" cy="14" r="14" fill="url(#petalSoft)"/>
            <circle cx="-10" cy="14" r="14" fill="url(#petalSoft)"/>
            <circle cx="-16" cy="-5" r="14" fill="url(#petalSoft)"/>
            <circle r="10" fill="#fb6f92"/>
            <circle r="5" fill="#fff0a8"/>
          </g>

          <!-- Bunga 4: Kiri Tengah -->
          <g class="bouquet-bloom" data-bloom="3" transform="translate(115 162)">
            <circle r="24" fill="#ffa6c1"/>
            <circle cx="-10" cy="-6" r="13" fill="#ffd6e2"/>
            <circle cx="10" cy="-6" r="13" fill="#ffd6e2"/>
            <circle cx="0" cy="10" r="13" fill="#ff8fab"/>
            <circle r="7" fill="#ffe699"/>
          </g>

          <!-- Bunga 5: Kanan Tengah -->
          <g class="bouquet-bloom" data-bloom="4" transform="translate(245 162)">
            <circle r="24" fill="#ffa6c1"/>
            <circle cx="-10" cy="-6" r="13" fill="#ffd6e2"/>
            <circle cx="10" cy="-6" r="13" fill="#ffd6e2"/>
            <circle cx="0" cy="10" r="13" fill="#ff8fab"/>
            <circle r="7" fill="#ffe699"/>
          </g>

          <!-- Bunga 6: Atas Tengah -->
          <g class="bouquet-bloom" data-bloom="5" transform="translate(180 76)">
            <path d="M0,-22 C16,-20 20,2 0,16 C-20,2 -16,-20 0,-22 Z" fill="#ff8fab"/>
            <path d="M-14,-12 C-22,2 -10,18 0,16 C-4,2 -6,-6 -14,-12 Z" fill="#ffb3c6"/>
            <path d="M14,-12 C22,2 10,18 0,16 C4,2 6,-6 14,-12 Z" fill="#ffc9d7"/>
          </g>

          <!-- Baby's breath (titik putih kecil) -->
          <g fill="#fffdf9">
            <circle cx="152" cy="96" r="4"/>
            <circle cx="208" cy="96" r="4"/>
            <circle cx="145" cy="148" r="3.5"/>
            <circle cx="215" cy="148" r="3.5"/>
            <circle cx="96" cy="134" r="3.5"/>
            <circle cx="264" cy="134" r="3.5"/>
          </g>

          <!-- Kertas pembungkus depan -->
          <polygon points="88,184 180,356 272,184 220,206 180,192 140,206" fill="url(#wrapFront)" stroke="#f79bb4" stroke-width="2"/>
          <polygon points="104,194 180,356 256,194 180,224" fill="#ffe8ef" opacity="0.72"/>

          <!-- Pita Satin Pink -->
          <g transform="translate(180 264)">
            <path d="M0,0 C-30,-18 -42,8 -10,10 Z" fill="#fb6f92"/>
            <path d="M0,0 C30,-18 42,8 10,10 Z" fill="#fb6f92"/>
            <path d="M-5,6 L-24,44 L-10,38 L-2,10 Z" fill="#e05378"/>
            <path d="M5,6 L24,44 L10,38 L2,10 Z" fill="#e05378"/>
            <circle r="8" fill="#ff9ebb" stroke="#e05378" stroke-width="2"/>
          </g>

          <!-- Kartu kecil Hari Guru di buket -->
          <g transform="translate(208 214) rotate(10)">
            <rect x="0" y="0" width="64" height="36" rx="7" fill="#fffdf9" stroke="#ff9ebb" stroke-width="1.6"/>
            <text x="32" y="15" text-anchor="middle" font-size="8.5" font-weight="700" fill="#e05378" font-family="sans-serif">HARI GURU</text>
            <text x="32" y="27" text-anchor="middle" font-size="8.5" fill="#5e3344" font-family="sans-serif">Cikgu Juli 🌸</text>
          </g>

          <!-- Kilau bintang -->
          <g fill="#ff8fab" opacity="0.85">
            <path d="M62,92 L65,100 L73,103 L65,106 L62,114 L59,106 L51,103 L59,100 Z"/>
            <path d="M296,86 L299,93 L306,96 L299,99 L296,106 L293,99 L286,96 L293,93 Z"/>
            <path d="M300,210 L302,215 L307,217 L302,219 L300,224 L298,219 L293,217 L298,215 Z"/>
          </g>
        </g>
      </svg>
    `;
  }

  /* =======================================================================
     KELOPAK BUNGA JATUH DI LATAR BELAKANG
     ======================================================================= */
  function initFallingPetals() {
    const canvas = document.getElementById("petals-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const petalCount = Math.min(28, Math.max(14, Math.floor(width / 55)));
    const petals = Array.from({ length: petalCount }, () => createPetal(true));

    function createPetal(randomY) {
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : -20,
        size: 6 + Math.random() * 8,
        speedY: 0.45 + Math.random() * 0.85,
        speedX: -0.35 + Math.random() * 0.7,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.025,
        opacity: 0.35 + Math.random() * 0.45,
        color: ["#ffc2d1", "#ffb3c6", "#ffe0ea", "#ff9ebb"][Math.floor(Math.random() * 4)]
      };
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (const p of petals) {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.012) * 0.3;
        p.angle += p.spin;

        if (p.y > height + 24) {
          Object.assign(p, createPetal(false));
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size, -p.size * 0.4, p.size * 0.9, p.size * 0.8, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.8, -p.size, -p.size * 0.4, 0, -p.size);
        ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(animate);
    }

    animate();
  }

  /* =======================================================================
     TAMAN BUNGA DIGITAL INTERAKTIF
     ======================================================================= */
  function initDigitalGarden(onBloomCallback) {
    const canvas = document.getElementById("garden-canvas");
    if (!canvas) return { bloomBurst: function () {} };

    const ctx = canvas.getContext("2d");
    const countEl = document.getElementById("flower-count");
    const promptEl = document.getElementById("garden-prompt");
    const burstBtn = document.getElementById("bloom-burst-btn");
    const clearBtn = document.getElementById("clear-garden-btn");

    const flowers = [];
    const sparkles = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let viewWidth = 0;
    let viewHeight = 0;

    function resizeCanvas() {
      const rect = canvas.parentElement.getBoundingClientRect();
      viewWidth = rect.width;
      viewHeight = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(viewWidth * dpr));
      canvas.height = Math.max(1, Math.floor(viewHeight * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function addFlower(x, y, silent) {
      const clampedX = Math.max(30, Math.min(viewWidth - 30, x));
      const clampedY = Math.max(48, Math.min(viewHeight - 75, y));
      const palette = PINK_PALETTES[Math.floor(Math.random() * PINK_PALETTES.length)];
      const kind = Math.floor(Math.random() * 4); // 0: sakura, 1: peony, 2: tulip, 3: cosmos

      flowers.push({
        x: clampedX,
        y: clampedY,
        baseX: clampedX + (Math.random() - 0.5) * 18,
        baseY: viewHeight,
        stemProgress: 0,
        bloomProgress: 0,
        scale: 0.8 + Math.random() * 0.45,
        rotation: (Math.random() - 0.5) * 0.35,
        palette,
        kind,
        swayOffset: Math.random() * Math.PI * 2
      });

      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.4;
        sparkles.push({
          x: clampedX,
          y: clampedY,
          vx: Math.cos(angle) * (0.8 + Math.random() * 1.4),
          vy: Math.sin(angle) * (0.8 + Math.random() * 1.4),
          life: 1,
          size: 2.5 + Math.random() * 2.5
        });
      }

      if (countEl) countEl.textContent = String(flowers.length);
      if (promptEl) promptEl.classList.add("is-hidden");
      if (!silent && typeof onBloomCallback === "function") {
        onBloomCallback(flowers.length);
      }
    }

    function drawFlowerHead(f, headX, headY, p) {
      const r = 22 * f.scale * p;
      if (r <= 0.5) return;

      ctx.save();
      ctx.translate(headX, headY);
      ctx.rotate(f.rotation);

      if (f.kind === 0) {
        // Sakura 5 kelopak
        for (let i = 0; i < 5; i++) {
          ctx.save();
          ctx.rotate((Math.PI * 2 * i) / 5);
          ctx.fillStyle = f.palette.outer;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-r * 0.55, -r * 0.5, -r * 0.45, -r * 1.2, 0, -r * 1.05);
          ctx.bezierCurveTo(r * 0.45, -r * 1.2, r * 0.55, -r * 0.5, 0, 0);
          ctx.fill();
          ctx.restore();
        }
        ctx.fillStyle = f.palette.inner;
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.34, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = f.palette.center;
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.18, 0, Math.PI * 2);
        ctx.fill();
      } else if (f.kind === 1) {
        // Peony berlapis
        for (let i = 0; i < 8; i++) {
          const ang = (Math.PI * 2 * i) / 8;
          ctx.fillStyle = f.palette.outer;
          ctx.beginPath();
          ctx.arc(Math.cos(ang) * r * 0.45, Math.sin(ang) * r * 0.45, r * 0.48, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 6; i++) {
          const ang = (Math.PI * 2 * i) / 6 + 0.3;
          ctx.fillStyle = f.palette.inner;
          ctx.beginPath();
          ctx.arc(Math.cos(ang) * r * 0.25, Math.sin(ang) * r * 0.25, r * 0.36, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = f.palette.center;
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
        ctx.fill();
      } else if (f.kind === 2) {
        // Tulip lembut
        ctx.fillStyle = f.palette.outer;
        ctx.beginPath();
        ctx.ellipse(-r * 0.26, -r * 0.35, r * 0.4, r * 0.68, -0.25, 0, Math.PI * 2);
        ctx.ellipse(r * 0.26, -r * 0.35, r * 0.4, r * 0.68, 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = f.palette.inner;
        ctx.beginPath();
        ctx.ellipse(0, -r * 0.42, r * 0.38, r * 0.72, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Cosmos / Daisy pink
        for (let i = 0; i < 10; i++) {
          ctx.save();
          ctx.rotate((Math.PI * 2 * i) / 10);
          ctx.fillStyle = i % 2 === 0 ? f.palette.outer : f.palette.inner;
          ctx.beginPath();
          ctx.ellipse(0, -r * 0.65, r * 0.24, r * 0.56, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
        ctx.fillStyle = f.palette.center;
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    function render(time) {
      ctx.clearRect(0, 0, viewWidth, viewHeight);

      // Rumput lembut di bagian bawah kanvas
      ctx.fillStyle = "rgba(138, 184, 149, 0.28)";
      ctx.beginPath();
      ctx.moveTo(0, viewHeight);
      ctx.quadraticCurveTo(viewWidth * 0.3, viewHeight - 36, viewWidth * 0.6, viewHeight - 16);
      ctx.quadraticCurveTo(viewWidth * 0.82, viewHeight - 4, viewWidth, viewHeight - 28);
      ctx.lineTo(viewWidth, viewHeight);
      ctx.closePath();
      ctx.fill();

      const t = time * 0.0018;

      for (const f of flowers) {
        if (f.stemProgress < 1) {
          f.stemProgress = Math.min(1, f.stemProgress + 0.045);
        } else if (f.bloomProgress < 1) {
          f.bloomProgress = Math.min(1, f.bloomProgress + 0.05);
        }

        const sway = Math.sin(t + f.swayOffset) * 5 * f.stemProgress;
        const currX = f.baseX + (f.x - f.baseX) * f.stemProgress + sway;
        const currY = f.baseY + (f.y - f.baseY) * f.stemProgress;
        const ctrlX = (f.baseX + currX) * 0.5 + (f.x > f.baseX ? -16 : 16);
        const ctrlY = (f.baseY + currY) * 0.52;

        // Tangkai
        ctx.strokeStyle = "#6f9f7b";
        ctx.lineWidth = 3.2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(f.baseX, f.baseY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, currX, currY);
        ctx.stroke();

        // Daun
        if (f.stemProgress > 0.55) {
          const leafScale = Math.min(1, (f.stemProgress - 0.55) / 0.45);
          const lx = (f.baseX + currX) * 0.5;
          const ly = (f.baseY + currY) * 0.58;
          ctx.fillStyle = "#86b591";
          ctx.save();
          ctx.translate(lx, ly);
          ctx.rotate(-0.6);
          ctx.beginPath();
          ctx.ellipse(-10 * leafScale, 0, 12 * leafScale, 5.5 * leafScale, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.rotate(1.2);
          ctx.beginPath();
          ctx.ellipse(10 * leafScale, -6, 12 * leafScale, 5.5 * leafScale, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        if (f.bloomProgress > 0) {
          // Ease out back
          const p = 1 - Math.pow(1 - f.bloomProgress, 3);
          drawFlowerHead(f, currX, currY, p);
        }
      }

      // Sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.03;
        if (s.life <= 0) {
          sparkles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = s.life;
        ctx.fillStyle = "#fb6f92";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

    canvas.addEventListener("pointerdown", function (e) {
      const rect = canvas.getBoundingClientRect();
      addFlower(e.clientX - rect.left, e.clientY - rect.top, false);
    });

    function bloomBurst(count) {
      const total = count || 7;
      for (let i = 0; i < total; i++) {
        setTimeout(function () {
          const rx = 50 + Math.random() * Math.max(80, viewWidth - 100);
          const ry = 60 + Math.random() * Math.max(80, viewHeight - 145);
          addFlower(rx, ry, i !== total - 1);
        }, i * 110);
      }
    }

    if (burstBtn) {
      burstBtn.addEventListener("click", function () {
        bloomBurst(7);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        flowers.length = 0;
        if (countEl) countEl.textContent = "0";
        if (promptEl) promptEl.classList.remove("is-hidden");
      });
    }

    return { bloomBurst };
  }

  window.HariGuruFlowers = {
    createHeroBouquetSVG,
    initFallingPetals,
    initDigitalGarden
  };
})();

