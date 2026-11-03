/**
 * JayrajSinh (Jay) — Portfolio Engine
 * Inspired by the bespoke architecture of therishithakor.com
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DATA: THE FOUR DOORS (CONTENT & SHOWCASES)
  // =========================================================================
  const DOORS_DATA = {
    1: {
      index: "DOOR // 01",
      domain: "Business & Finance",
      title: "Business, Finance & Strategic Analysis",
      overview: "Combining rigorous financial analysis, market research, and corporate operations with a strategic problem-solving mindset.",
      capabilities: [
        "Financial Statement Analysis",
        "Corporate & Vehicle Lending Operations",
        "Market & Industry Research",
        "Valuation & Financial Modeling",
        "Strategic Business Planning",
        "Compliance & Loan Documentation"
      ],
      showcases: [
        {
          tag: "Corporate Banking",
          title: "Bank of America | Consumer Vehicle Lending (CVL)",
          desc: "Working in Mortgage Operations at BA Continuum India (GIFT City, Gandhinagar), managing loan funding pipelines, document compliance verification, credit documentation, and institutional financial operations."
        },
        {
          tag: "Empirical Research",
          title: "Robo-Advisory vs. Traditional Financial Advisory Research",
          desc: "Authored empirical research during BBA (Hons.) Finance at PDEU investigating investor trust, fee sensitivity, algorithmic portfolio management models, and demographic advisory perception."
        },
        {
          tag: "Academic Foundation",
          title: "PDEU — Bachelor of Business Administration (Honours)",
          desc: "Graduated with 8.4 / 10 CGPA (Major: Finance, Minor: Public Administration). Rigorous coursework in corporate financial management, capital markets, valuation, and economics."
        }
      ]
    },
    2: {
      index: "DOOR // 02",
      domain: "Web & Digital Projects",
      title: "Web Platforms & Digital Product Development",
      overview: "Building clean, functional, and modern digital experiences using Claude Code and modern web tooling for businesses and products.",
      capabilities: [
        "Full-Cycle Web Development",
        "Claude Code Development Workflow",
        "B2B Web Platform Architecture",
        "UI Planning & User Flow Design",
        "Digital Product Prototyping",
        "Mobile-Responsive Layouts"
      ],
      showcases: [
        {
          tag: "Live B2B Platform",
          title: "Elwont Pharmaceuticals Web Platform",
          desc: "Structured and engineered the modern B2B platform for Elwont Pharmaceuticals. Formatted pharmaceutical product catalogs, streamlined product inquiry workflows, and implemented responsive mobile-first architecture.",
          link: "http://www.elwontpharmaceutical.com",
          linkText: "Visit Elwont Website ↗"
        },
        {
          tag: "Live Platform · NFC Redirection",
          title: "TapStars — Digital NFC Review Solution",
          desc: "Built the web routing, user redirection, and landing interfaces for contactless NFC Google Review hardware cards, seamlessly directing customers directly to Google Maps reviews in under 3 seconds.",
          image: "assets/images/tapstars-nfc-card.webp",
          link: "https://tapstars.pages.dev/",
          linkText: "Open TapStars Web ↗"
        },
        {
          tag: "Claude Code Workflow",
          title: "Personal Portfolio & Interactive Projects",
          desc: "Crafted this bespoke, performance-first web interface with smooth 3D perspective physics, custom theme pull-cord with spring recoil, and canvas scroll-driven time-tunnel visualization with zero bloated dependencies."
        }
      ]
    },
    3: {
      index: "DOOR // 03",
      domain: "Entrepreneurship & Strategy",
      title: "Entrepreneurship & Business Ventures",
      overview: "Driven by hands-on execution, venture creation, brand strategy, and bringing practical products to local markets.",
      capabilities: [
        "New Venture Development",
        "Physical-to-Digital Solutions (NFC)",
        "Brand Strategy & Positioning",
        "Local Business Growth Tactics",
        "Educational Institution Operations",
        "Marketing & Lead Generation"
      ],
      showcases: [
        {
          tag: "Hardware & NFC Venture",
          title: "TapStars — Contactless NFC Google Review Cards",
          desc: "Co-founded TapStars, delivering physical contactless NFC smart cards and QR stands powered by ABC RFID. Empowers restaurants, retail stores, and service providers to collect instant 5-star Google reviews right at checkout.",
          image: "assets/images/tapstars-nfc-card.webp",
          link: "https://tapstars.pages.dev/",
          linkText: "Explore TapStars Platform ↗"
        },
        {
          tag: "Apparel Venture · PDEU Leavers '26",
          title: "Grad Squad — Collegiate Merchandise Venture",
          desc: "Co-founded and managed a collegiate apparel venture at PDEU for Leavers '26 ('Divided by Majors — United by Lack of Attendance'). Directed brand positioning, 400 GSM custom embroidery with individual student roll numbers, social marketing, and pre-order fulfillment.",
          image: "assets/images/grad-hoodie-venture.png"
        },
        {
          tag: "EV Infrastructure Strategy",
          title: "SunFuel Electric — Brand Analyst & Kiosk Advertising",
          desc: "Conducted brand strategy and competitive market analysis in the EV infrastructure sector. Formatted presentations and media formats for brand advertising placements across public EV charging kiosks.",
          image: "assets/images/sunfuel-ev-ad.png"
        },
        {
          tag: "Education Business Initiative",
          title: "Bachpan Play School Business Development",
          desc: "Led admissions strategy, institutional digital communication channels, localized marketing campaigns, and operational workflow streamlining to support institutional growth."
        }
      ]
    },
    4: {
      index: "DOOR // 04",
      domain: "Creative & Content",
      title: "Creative Direction & Visual Storytelling",
      overview: "Passionate photographer, visual content creator, and gym enthusiast who values aesthetic clarity and creative experimentation.",
      capabilities: [
        "Street & Portrait Photography",
        "Graphic & Visual Design",
        "Canva & Creative Suites",
        "Short-Form Video Editing",
        "Brand Creative Concepts",
        "Visual Storyboarding"
      ],
      showcases: [
        {
          tag: "Brand Campaigns",
          title: "SunFuel Electric — Hotel Partner & Climate Campaigns",
          desc: "Created promotional brand campaigns including EV Friendly rollout creatives for premier hotel partners (Radisson Blu Hotel Indore, Holiday Inn Chandigarh Zirakpur), Earth Day climate awareness ('Our climate is changing. Are we?'), and festive brand graphics.",
          image: "assets/images/sunfuel-radisson.png"
        },
        {
          tag: "Print & Promotional Collateral",
          title: "Pratham Business Suite — POS Systems Collateral",
          desc: "Designed comprehensive promotional materials, sales flyers ('Transform Your Food Business'), and service suite overviews for Pratham Point Of Sale Systems tailored for restaurant, cafe, and retail businesses.",
          image: "assets/images/pratham-pos-suite.png"
        },
        {
          tag: "Photography & Storytelling",
          title: "Street & Portrait Photography",
          desc: "Passionate photography capturing real-world moments, architectural symmetry, dynamic light interplay, and authentic portraits."
        }
      ]
    }
  };

  // =========================================================================
  // 2. INTRO LOADER: 4-PILL SEQUENCE & PERCENTAGE
  // =========================================================================
  const loader = document.getElementById('loader');
  const ldCount = document.getElementById('ldCount');
  const ldBar = document.getElementById('ldBar');
  const pills = document.querySelectorAll('.ld__pill');

  let currentPercent = 0;
  const pillDelay = 220; // ms

  // Animate pills sequentially
  pills.forEach((pill, idx) => {
    setTimeout(() => {
      pill.classList.add('active');
    }, idx * pillDelay);
  });

  // Animate counter from 0 to 100
  const counterInterval = setInterval(() => {
    currentPercent += 2;
    if (currentPercent >= 100) {
      currentPercent = 100;
      clearInterval(counterInterval);

      // Trigger fly-away exit animation
      setTimeout(() => {
        loader.classList.add('exiting');
        setTimeout(() => {
          loader.classList.add('hidden');
          document.body.classList.remove('loading');
          document.body.classList.add('ready');
        }, 750);
      }, 350);
    }
    if (ldCount) ldCount.textContent = `${currentPercent}%`;
    if (ldBar) ldBar.style.width = `${currentPercent}%`;
  }, 22);

  // =========================================================================
  // 3. HANGING PULL-CORD (LIGHT/DARK SWITCHER)
  // =========================================================================
  const cordHit = document.getElementById('cordHit');
  const cord = document.getElementById('cord');
  const htmlRoot = document.documentElement;

  // Check saved theme
  const savedTheme = localStorage.getItem('jay-theme') || 'light';
  htmlRoot.setAttribute('data-mode', savedTheme);

  const toggleTheme = () => {
    cord.classList.remove('pulled');
    void cord.offsetWidth; // trigger reflow
    cord.classList.add('pulled');

    const isDark = htmlRoot.getAttribute('data-mode') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    htmlRoot.setAttribute('data-mode', nextTheme);
    localStorage.setItem('jay-theme', nextTheme);
  };

  if (cordHit) {
    cordHit.addEventListener('click', toggleTheme);
    cordHit.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  // =========================================================================
  // 4. LIVE IST (GANDHINAGAR / AHMEDABAD) CLOCK
  // =========================================================================
  const istChip = document.getElementById('istTimeChip');
  const footerClock = document.getElementById('footerTimeVal');
  const yearEl = document.getElementById('currentYear');

  const updateClock = () => {
    const now = new Date();
    // Format in IST (UTC+5:30)
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeFormatter = new Intl.DateTimeFormat('en-US', options);
    const timeStr = timeFormatter.format(now);

    if (istChip) {
      istChip.querySelector('span').textContent = `IST ${timeStr.replace(/:\d\d\s/, ' ')}`;
    }
    if (footerClock) {
      footerClock.textContent = `${timeStr} IST`;
    }
    if (yearEl) {
      yearEl.textContent = now.getFullYear();
    }
  };

  updateClock();
  setInterval(updateClock, 1000);

  // =========================================================================
  // 5. 3D TILT ON ABILITY CARD
  // =========================================================================
  const card = document.getElementById('abilityCard');
  if (card && window.matchMedia('(pointer: fine)').matches) {
    const inner = card.querySelector('.ability-card__inner');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotX = -(y / (rect.height / 2)) * 7;
      const rotY = (x / (rect.width / 2)) * 7;

      inner.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  }

  // =========================================================================
  // 6. THE FOUR DOORS MODAL / DRAWER
  // =========================================================================
  const doorModal = document.getElementById('doorModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDoorIndex = document.getElementById('modalDoorIndex');
  const modalDoorDomain = document.getElementById('modalDoorDomain');
  const modalDoorTitle = document.getElementById('modalDoorTitle');
  const modalDoorOverview = document.getElementById('modalDoorOverview');
  const modalCapabilitiesList = document.getElementById('modalCapabilitiesList');
  const modalShowcaseGrid = document.getElementById('modalShowcaseGrid');
  const modalPrevDoor = document.getElementById('modalPrevDoor');
  const modalNextDoor = document.getElementById('modalNextDoor');

  let currentActiveDoor = 1;

  const renderDoorContent = (doorId) => {
    const data = DOORS_DATA[doorId];
    if (!data) return;

    currentActiveDoor = doorId;
    modalDoorIndex.textContent = data.index;
    modalDoorDomain.textContent = data.domain;
    modalDoorTitle.textContent = data.title;
    modalDoorOverview.textContent = data.overview;

    // Render Capabilities
    modalCapabilitiesList.innerHTML = data.capabilities
      .map(item => `<li>${item}</li>`)
      .join('');

    // Render Showcases
    modalShowcaseGrid.innerHTML = data.showcases
      .map(sc => `
        <div class="showcase-item">
          <div class="showcase-header">
            <div class="showcase-item-title">${sc.title}</div>
            ${sc.tag ? `<span class="showcase-tag">${sc.tag}</span>` : ''}
          </div>
          ${sc.image ? `
            <div class="showcase-media-wrap">
              <img src="${sc.image}" alt="${sc.title}" class="showcase-media-img" loading="lazy" onerror="this.parentElement.style.display='none';" />
            </div>
          ` : ''}
          <div class="showcase-item-desc">${sc.desc}</div>
          ${sc.link ? `
            <a href="${sc.link}" target="_blank" rel="noopener noreferrer" class="showcase-link-btn">
              <span>${sc.linkText || 'View Project ↗'}</span>
            </a>
          ` : ''}
        </div>
      `)
      .join('');
  };

  const openDoorModal = (doorId) => {
    renderDoorContent(doorId);
    doorModal.classList.add('open');
    doorModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeDoorModal = () => {
    doorModal.classList.remove('open');
    doorModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Wire up door cards
  document.querySelectorAll('.door-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.door, 10);
      openDoorModal(id);
    });
  });

  // Wire up footer door buttons
  document.querySelectorAll('.footer-door-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.doorId, 10);
      openDoorModal(id);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDoorModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeDoorModal);

  if (modalPrevDoor) {
    modalPrevDoor.addEventListener('click', () => {
      const prevId = currentActiveDoor === 1 ? 4 : currentActiveDoor - 1;
      renderDoorContent(prevId);
    });
  }

  if (modalNextDoor) {
    modalNextDoor.addEventListener('click', () => {
      const nextId = currentActiveDoor === 4 ? 1 : currentActiveDoor + 1;
      renderDoorContent(nextId);
    });
  }

  // =========================================================================
  // 7. TIME-TUNNEL REVERSE CHRONOLOGICAL TIMELINE & CANVAS
  // =========================================================================
  const storyCanvas = document.getElementById('storyCanvas');
  const chapters = document.querySelectorAll('.chapter-card');
  const odoDigits = [
    document.getElementById('odoD1'),
    document.getElementById('odoD2'),
    document.getElementById('odoD3'),
    document.getElementById('odoD4')
  ];
  const chapterCount = document.getElementById('chapterCount');
  const chapterWhen = document.getElementById('chapterWhen');
  const storyProgressBar = document.getElementById('storyProgressBar');

  let activeYear = '2026';

  const setOdometerYear = (yearStr) => {
    if (yearStr === activeYear) return;
    activeYear = yearStr;
    const digits = yearStr.split('');
    digits.forEach((d, i) => {
      if (odoDigits[i]) {
        odoDigits[i].style.opacity = '0';
        odoDigits[i].style.transform = 'translateY(-12px)';
        setTimeout(() => {
          odoDigits[i].textContent = d;
          odoDigits[i].style.opacity = '1';
          odoDigits[i].style.transform = 'translateY(0)';
        }, 120);
      }
    });
  };

  // Timeline Scroll Observer
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -40% 0px',
    threshold: 0
  };

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        chapters.forEach(c => c.classList.remove('active'));
        entry.target.classList.add('active');

        const year = entry.target.dataset.year;
        const when = entry.target.dataset.when;
        const index = parseInt(entry.target.dataset.index, 10);

        setOdometerYear(year);
        if (chapterCount) chapterCount.textContent = `0${index} / 06`;
        if (chapterWhen) chapterWhen.textContent = when;
        if (storyProgressBar) storyProgressBar.style.width = `${(index / 6) * 100}%`;
      }
    });
  }, observerOptions);

  chapters.forEach(ch => timelineObserver.observe(ch));

  // Canvas Depth & Dial Particles
  if (storyCanvas) {
    const ctx = storyCanvas.getContext('2d');
    let width = 0, height = 0;

    const resizeCanvas = () => {
      width = storyCanvas.clientWidth;
      height = storyCanvas.clientHeight;
      storyCanvas.width = width * (window.devicePixelRatio || 1);
      storyCanvas.height = height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle field
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * 1000 - 500,
      y: Math.random() * 1000 - 500,
      z: Math.random() * 800 + 50,
      size: Math.random() * 2 + 1
    }));

    let scrollProgress = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = scrollY / (docHeight || 1);
    }, { passive: true });

    let animFrame;
    const renderCanvas = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = htmlRoot.getAttribute('data-mode') === 'dark';
      const pColor = isDark ? '236, 232, 229' : '92, 79, 79';

      const cx = width / 2;
      const cy = height / 2;
      const rot = scrollProgress * Math.PI * 4;

      // Draw clock tunnel circles
      for (let r = 1; r <= 4; r++) {
        const radius = (r * 120 + (scrollProgress * 200)) % 520;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${pColor}, ${(0.05 * (1 - radius / 520)).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw particles
      particles.forEach(p => {
        const rad = Math.sqrt(p.x * p.x + p.y * p.y);
        const angle = Math.atan2(p.y, p.x) + rot * 0.15;
        const curX = cx + Math.cos(angle) * (rad * 0.8);
        const curY = cy + Math.sin(angle) * (rad * 0.8);

        ctx.fillStyle = `rgba(${pColor}, 0.12)`;
        ctx.beginPath();
        ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrame = requestAnimationFrame(renderCanvas);
    };

    renderCanvas();
  }

  // =========================================================================
  // 8. PROJECT INQUIRY / CONTACT MODAL
  // =========================================================================
  const contactModal = document.getElementById('contactModal');
  const contactBackdrop = document.getElementById('contactBackdrop');
  const contactCloseBtn = document.getElementById('contactCloseBtn');
  const openContactBtns = document.querySelectorAll('.open-contact-btn');

  const openContact = () => {
    contactModal.classList.add('open');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeContact = () => {
    contactModal.classList.remove('open');
    contactModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openContactBtns.forEach(btn => btn.addEventListener('click', openContact));
  if (contactCloseBtn) contactCloseBtn.addEventListener('click', closeContact);
  if (contactBackdrop) contactBackdrop.addEventListener('click', closeContact);

  // Form Submission Handler
  window.handleInquirySubmit = (form) => {
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const interest = document.getElementById('formInterest').value;
    const message = document.getElementById('formMessage').value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name} [${interest.toUpperCase()}]`);
    const body = encodeURIComponent(
      `Hello JayrajSinh,\n\nName: ${name}\nEmail: ${email}\nArea of Interest: ${interest}\n\nMessage:\n${message}\n`
    );

    // Launch default email client with draft
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;

    const notice = document.getElementById('formSuccessNotice');
    if (notice) notice.style.display = 'block';
  };

  // Keyboard escape handler for modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDoorModal();
      closeContact();
    }
  });

  // =========================================================================
  // 9. BACK TO TOP
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 10. AUTO-FIT FULL-BLEED BANNER WORD
  // =========================================================================
  const bannerWord = document.getElementById('bannerWord');
  const fitBanner = () => {
    if (!bannerWord) return;
    const winWidth = window.innerWidth;
    const calculatedSize = Math.max(38, winWidth * 0.138);
    bannerWord.style.fontSize = `${calculatedSize.toFixed(1)}px`;
  };

  fitBanner();
  window.addEventListener('resize', fitBanner);
});
