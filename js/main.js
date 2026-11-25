(function () {
  "use strict";

  const config = window.HARI_GURU_CONFIG || {};

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && typeof text === "string") {
      el.textContent = text;
    }
  }

  function applyConfigText() {
    setText("intro-badge", config.labelHariGuru || "Selamat Hari Guru Nasional");
    setText("intro-name", config.namaPacar || "Cikgu Juli Tersayang");
    setText("hero-label", config.labelHariGuru || "Selamat Hari Guru Nasional • 25 November");
    setText("hero-title", config.judulUtama || "Untukmu, Cikgu Juli Paling Hebat di Hatiku");
    setText("hero-subtitle", config.subJudul || "");
    setText("cert-recipient", config.namaPacar || "Cikgu Juli Tersayang");
    setText("cert-sender", config.namaPengirim || "Laud 🌊🐚🐬");
    setText("footer-names", "Untuk " + (config.namaPacar || "Cikgu Juli Tersayang"));

    if (config.surat) {
      setText("letter-greeting", config.surat.pembuka || "");
      setText("letter-closing", config.surat.penutup || "");
      setText("letter-sender", config.namaPengirim || "");

      const letterBody = document.getElementById("letter-body");
      if (letterBody && Array.isArray(config.surat.isi)) {
        letterBody.innerHTML = "";
        config.surat.isi.forEach(function (paragraph) {
          const p = document.createElement("p");
          p.textContent = paragraph;
          letterBody.appendChild(p);
        });
      }
    }

    if (config.lagu && config.lagu.judul) {
      setText("music-title", config.lagu.judul);
    }
  }

  function renderGallery() {
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;

    const photos = Array.isArray(config.foto) ? config.foto : [];
    grid.innerHTML = "";

    photos.forEach(function (item, idx) {
      const card = document.createElement("article");
      card.className = "polaroid-card reveal";

      const tape = document.createElement("div");
      tape.className = "polaroid-tape";
      tape.setAttribute("aria-hidden", "true");

      const frame = document.createElement("div");
      frame.className = "polaroid-frame";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.caption || "Kenangan " + (idx + 1);
      img.loading = "lazy";

      let loaded = false;
      img.addEventListener("load", function () {
        loaded = true;
      });

      img.addEventListener("error", function () {
        loaded = false;
        frame.innerHTML =
          '<div class="photo-placeholder">' +
          '<span>🌸</span>' +
          '<strong>Foto belum diisi</strong>' +
          '<small>Taruh file foto di:</small>' +
          '<code>' + item.src + '</code>' +
          "</div>";
      });

      frame.appendChild(img);

      const caption = document.createElement("p");
      caption.className = "polaroid-caption";
      caption.textContent = item.caption || "";

      card.appendChild(tape);
      card.appendChild(frame);
      card.appendChild(caption);

      card.addEventListener("click", function () {
        if (loaded) {
          openLightbox(item.src, item.caption);
        }
      });

      grid.appendChild(card);
    });
  }

  function openLightbox(src, caption) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    const cap = document.getElementById("lightbox-caption");
    if (!lightbox || !img || !cap) return;

    img.src = src;
    img.alt = caption || "Foto kenangan";
    cap.textContent = caption || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.getElementById("lightbox-close");
    if (!lightbox) return;

    function close() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
    }

    if (closeBtn) closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  function initMusicPlayer() {
    const audio = document.getElementById("bg-audio");
    const player = document.getElementById("music-player");
    const toggleBtn = document.getElementById("music-toggle-btn");
    const statusEl = document.getElementById("music-status");
    const progressEl = document.getElementById("music-progress-bar");
    if (!audio || !player || !toggleBtn || !statusEl) return;

    const songFile = (config.lagu && config.lagu.file) || "assets/lagu/lagu.mp3";
    const songArtist = (config.lagu && config.lagu.artis) || "Musik Latar";
    let audioMissing = false;

    audio.src = songFile;

    audio.addEventListener("error", function () {
      audioMissing = true;
      player.classList.remove("is-playing");
      statusEl.textContent = "Taruh lagu di " + songFile;
    });

    audio.addEventListener("canplay", function () {
      audioMissing = false;
      if (audio.paused) {
        statusEl.textContent = songArtist + " • Siap diputar";
      }
    });

    audio.addEventListener("play", function () {
      player.classList.add("is-playing");
      statusEl.textContent = "Sedang diputar • " + songArtist;
    });

    audio.addEventListener("pause", function () {
      player.classList.remove("is-playing");
      if (!audioMissing) {
        statusEl.textContent = "Dijeda • Ketuk untuk lanjut";
      }
    });

    audio.addEventListener("timeupdate", function () {
      if (!progressEl || !audio.duration) return;
      const pct = Math.min(100, (audio.currentTime / audio.duration) * 100);
      progressEl.style.width = pct + "%";
    });

    function playAudio() {
      if (audioMissing) {
        statusEl.textContent = "Taruh lagu di " + songFile;
        return;
      }
      const promise = audio.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(function () {
          statusEl.textContent = "Ketuk tombol musik untuk memutar";
        });
      }
    }

    toggleBtn.addEventListener("click", function () {
      if (audio.paused) {
        playAudio();
      } else {
        audio.pause();
      }
    });

    return { playAudio };
  }

  function initFlowerMessages() {
    const noteBox = document.getElementById("flower-note-text");
    const bouquet = document.getElementById("hero-bouquet");
    const messages = Array.isArray(config.pesanBunga) && config.pesanBunga.length
      ? config.pesanBunga
      : ["🌸 Selamat Hari Guru untuk Cikgu Juli Tersayang!"];

    let msgIndex = 0;

    function showNextMessage() {
      const msg = messages[msgIndex % messages.length];
      msgIndex += 1;
      if (noteBox) {
        noteBox.textContent = msg;
      }
      return msg;
    }

    if (bouquet) {
      bouquet.addEventListener("click", function () {
        const msg = showNextMessage();
        const hint = document.querySelector(".bouquet-hint");
        if (hint) {
          hint.textContent = msg;
        }
      });
    }

    return { showNextMessage };
  }

  function initRevealAnimations() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyConfigText();
    renderGallery();
    initLightbox();

    if (window.HariGuruFlowers) {
      window.HariGuruFlowers.createHeroBouquetSVG();
      window.HariGuruFlowers.initFallingPetals();
    }

    const messageController = initFlowerMessages();
    const gardenController = window.HariGuruFlowers
      ? window.HariGuruFlowers.initDigitalGarden(function () {
          messageController.showNextMessage();
        })
      : null;

    const musicController = initMusicPlayer();
    initRevealAnimations();

    const overlay = document.getElementById("intro-overlay");
    const openBtn = document.getElementById("open-gift-btn");
    if (openBtn && overlay) {
      openBtn.addEventListener("click", function () {
        overlay.classList.add("is-hidden");
        if (musicController) {
          musicController.playAudio();
        }
        if (gardenController) {
          setTimeout(function () {
            gardenController.bloomBurst(5);
          }, 500);
        }
      });
    }
  });
})();

