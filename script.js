/**
 * JayrajSinh — Exact Replica of therishithakor.com
 * Bespoke Physics Engine, 3D Architectural Doors, Desk Flip Calendar & Canvas Tunnel
 */

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // =========================================================================
  // 1. INTRO LOADER SEQUENCE
  // =========================================================================
  const loader = document.getElementById('loader');
  const ldCount = document.getElementById('ldCount');
  const ldBar = document.getElementById('ldBar');
  const pills = document.querySelectorAll('.ld__pill');

  let pct = 0;
  pills.forEach((p, idx) => {
    setTimeout(() => p.classList.add('on'), 180 * idx + 100);
  });

  const timer = setInterval(() => {
    pct += 2;
    if (pct >= 100) {
      pct = 100;
      clearInterval(timer);
      setTimeout(() => {
        loader.classList.add('out');
        setTimeout(() => {
          loader.style.display = 'none';
          document.body.classList.remove('loading');
          document.body.classList.add('ready');
        }, 850);
      }, 350);
    }
    if (ldCount) ldCount.textContent = pct + '%';
    if (ldBar) ldBar.style.width = pct + '%';
  }, 20);

  // =========================================================================
  // 2. HANGING PULL-CORD (THEME SWITCHER)
  // =========================================================================
  const cord = document.getElementById('cordHit');
  const savedMode = localStorage.getItem('jay-mode') || 'light';
  root.setAttribute('data-mode', savedMode);

  const toggleTheme = () => {
    cord.classList.remove('pulled');
    void cord.offsetWidth;
    cord.classList.add('pulled');

    const nextMode = root.getAttribute('data-mode') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-mode', nextMode);
    localStorage.setItem('jay-mode', nextMode);
  };

  if (cord) {
    cord.addEventListener('click', toggleTheme);
    cord.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTheme(); }
    });
  }

  // =========================================================================
  // 3. DESK FLIP CALENDAR (Exact Rishi Hero Interaction)
  // =========================================================================
  const calWord = document.getElementById('calWord');
  const SKILLS = ['Business Analyst', 'Digital Builder', 'Entrepreneur', 'Photographer'];
  let skillIdx = 0;

  if (calWord) {
    setInterval(() => {
      calWord.style.opacity = '0';
      calWord.style.transform = 'translateY(12px) rotateX(45deg)';
      setTimeout(() => {
        skillIdx = (skillIdx + 1) % SKILLS.length;
        calWord.textContent = SKILLS[skillIdx];
        calWord.style.opacity = '1';
        calWord.style.transform = 'translateY(0) rotateX(0)';
      }, 250);
    }, 2400);
  }

  // =========================================================================
  // 4. LIVE GANDHINAGAR (IST) CLOCK
  // =========================================================================
  const istHero = document.getElementById('istTimeHero');
  const istFooter = document.getElementById('istTimeFooter');
  const yearEl = document.getElementById('currentYear');

  const tickClock = () => {
    const now = new Date();
    const opts = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeStr = new Intl.DateTimeFormat('en-US', opts).format(now);

    if (istHero) istHero.textContent = `IST ${timeStr.replace(/:\d\d\s/, ' ')}`;
    if (istFooter) istFooter.textContent = `${timeStr} IST`;
    if (yearEl) yearEl.textContent = now.getFullYear();
  };
  tickClock();
  setInterval(tickClock, 1000);

  // =========================================================================
  // 5. 3D ARCHITECTURAL DOORS & VISUAL SHOWCASE DATA
  // =========================================================================
  const WALL_INFO = [
    [
      'Business & Finance',
      'END TO END, FROM CREDIT OPS TO VALUATION',
      [
        'Bank of America Mortgage Operations (CVL)',
        'Loan funding pipelines & credit audit compliance',
        'Robo-Advisory vs Traditional Advisory research',
        'PDEU BBA (Hons.) Finance (8.4 CGPA)',
        'Financial modeling & corporate equity valuation'
      ]
    ],
    [
      'Web Development',
      'END TO END, FROM SKETCH TO LIVE SITE',
      [
        'Elwont Pharmaceuticals B2B platform',
        'TapStars contactless NFC review router',
        'Instant sub-3s Google Maps review flow',
        'Technical SEO & high-performance UI',
        'Modern architecture with zero bloat'
      ]
    ],
    [
      'Entrepreneurship',
      'FROM INITIAL SCOPE TO PHYSICAL PRODUCTS',
      [
        'TapStars NFC smart cards & review stands',
        'Grad Squad PDEU leavers apparel venture',
        '400 GSM custom embroidery & order fulfillment',
        'SunFuel Electric brand analyst & EV kiosk ads',
        'Practical execution & business scaling'
      ]
    ],
    [
      'Graphic & Visual Design',
      'VISUAL CONTENT TRUE TO THE BRAND',
      [
        'Radisson Blu & Holiday Inn partner campaigns',
        'Climate change & Earth Day brand creatives',
        'Pratham Business Suite POS sales collateral',
        'Strong type, framing & visual hierarchy',
        'Street, architecture & portrait photography'
      ]
    ]
  ];

  const SHOWCASE_DATA = {
    0: {
      idx: "DOOR // 01",
      name: "Business & Finance",
      title: "Business, Finance & Strategic Operations",
      lead: "Rigorous corporate banking workflows, financial analysis, and academic research.",
      stats: [
        { num: "8.4", label: "CGPA · PDEU BBA (Hons.)" },
        { num: "100%", label: "Credit Doc Compliance" },
        { num: "CVL", label: "Bank of America Ops" },
        { num: "Empirical", label: "Robo-Advisory Research" }
      ],
      flow: ["Financial Modeling", "Credit & Risk Audit", "Portfolio Optimization"],
      items: [
        {
          title: "Bank of America | Consumer Vehicle Lending (CVL)",
          tag: "Corporate Banking · GIFT City",
          desc: "Managing loan funding pipelines, document compliance verification, credit documentation, and institutional financial operations within Mortgage Operations at BA Continuum India."
        },
        {
          title: "Robo-Advisory vs. Traditional Financial Advisory",
          tag: "Empirical Research · PDEU",
          desc: "Authored empirical research at Pandit Deendayal Energy University analyzing investor trust, fee sensitivity, algorithmic portfolio models, and demographic advisory adoption."
        },
        {
          title: "PDEU — BBA (Honours) in Finance",
          tag: "Academic Foundation · 8.4 CGPA",
          desc: "Graduated with 8.4/10 CGPA (Major: Finance, Minor: Public Administration). Rigorous coursework across financial modeling, equity valuation, corporate finance, and macroeconomics."
        }
      ]
    },
    1: {
      idx: "DOOR // 02",
      name: "Web & Digital Projects",
      title: "Web Platforms & Digital Product Architecture",
      lead: "High-performance digital products, B2B platforms, and seamless contactless redirection.",
      stats: [
        { num: "< 3s", label: "NFC Contactless Redirect" },
        { num: "100%", label: "Mobile Responsive" },
        { num: "B2B", label: "Pharma Product Suite" },
        { num: "0 ms", label: "Zero Bloat Dependencies" }
      ],
      flow: ["Architecture & Wireframe", "Clean UI Engineering", "Seamless Cloud Deployment"],
      items: [
        {
          title: "Elwont Pharmaceuticals Web Platform",
          tag: "Live B2B Platform",
          desc: "Engineered and structured the modern B2B platform for Elwont Pharmaceuticals. Formatted comprehensive pharmaceutical catalogs, clear product inquiries, and mobile-first responsive architecture.",
          link: "http://www.elwontpharmaceutical.com",
          linkText: "Visit Live Website ↗"
        },
        {
          title: "TapStars — Digital NFC Review Solution",
          tag: "Live Platform · NFC Routing",
          image: "assets/images/tapstars-nfc-card.webp",
          desc: "Built the web routing, user redirection, and landing interfaces for contactless NFC Google Review hardware cards, seamlessly directing customers directly to Google Maps reviews in under 3 seconds.",
          link: "https://tapstars.pages.dev/",
          linkText: "Open TapStars Web ↗"
        },
        {
          title: "Personal Portfolio & Micro-Interactions",
          tag: "Claude Code Workflow",
          desc: "Designed and engineered with 3D perspective physics, custom theme pull-cord with spring recoil, and canvas scroll-driven time-tunnel visualization with zero bloated dependencies."
        }
      ]
    },
    2: {
      idx: "DOOR // 03",
      name: "Entrepreneurship & Strategy",
      title: "Venture Creation & Physical Products",
      lead: "Hands-on execution, venture creation, brand strategy, and bringing practical products to market.",
      stats: [
        { num: "NFC", label: "TapStars Hardware Cards" },
        { num: "400 GSM", label: "Grad Squad Apparel Grade" },
        { num: "5★", label: "Google Review Uplift" },
        { num: "EV Hub", label: "Kiosk Media Strategy" }
      ],
      flow: ["Product Inception", "Vendor & Tech Sourcing", "Pre-Orders & Execution"],
      items: [
        {
          title: "TapStars — Contactless NFC Google Review Cards",
          tag: "Hardware & NFC Venture",
          image: "assets/images/tapstars-nfc-card.webp",
          desc: "Co-founded TapStars, delivering physical contactless NFC smart cards and QR stands powered by ABC RFID. Empowers restaurants, retail stores, and service providers to collect instant 5-star Google reviews right at checkout.",
          link: "https://tapstars.pages.dev/",
          linkText: "Explore TapStars Platform ↗"
        },
        {
          title: "Grad Squad — Collegiate Merchandise Venture",
          tag: "Apparel Venture · PDEU Leavers '26",
          image: "assets/images/grad-hoodie-venture.png",
          desc: "Co-founded and managed a collegiate apparel venture at PDEU for Leavers '26 ('Divided by Majors — United by Lack of Attendance'). Directed brand positioning, 400 GSM custom embroidery with individual student roll numbers, social marketing, and pre-order fulfillment."
        },
        {
          title: "SunFuel Electric — Brand Analyst & Kiosk Advertising",
          tag: "EV Infrastructure Strategy",
          image: "assets/images/sunfuel-ev-ad.png",
          desc: "Conducted brand strategy and competitive market analysis in the EV infrastructure sector. Formatted presentations and media formats for brand advertising placements across public EV charging kiosks."
        }
      ]
    },
    3: {
      idx: "DOOR // 04",
      name: "Creative & Visual Content",
      title: "Brand Campaigns, Print Collateral & Photography",
      lead: "Visual storytelling, brand campaigns, promotional print collateral, and portrait/street framing.",
      stats: [
        { num: "Brand", label: "Hospitality Partner Campaigns" },
        { num: "POS", label: "Retail & Restaurant Suites" },
        { num: "High-Res", label: "Editorial & Lens Framing" },
        { num: "Print", label: "Marketing Collateral" }
      ],
      flow: ["Visual Concept", "Precision Vector / Photo Design", "Multi-Channel Rollout"],
      items: [
        {
          title: "SunFuel Electric — Hotel Partner & Climate Campaigns",
          tag: "Brand Campaigns",
          image: "assets/images/sunfuel-radisson.png",
          desc: "Created promotional brand campaigns including EV Friendly rollout creatives for premier hotel partners (Radisson Blu Hotel Indore, Holiday Inn Chandigarh Zirakpur), Earth Day climate awareness ('Our climate is changing. Are we?'), and festive brand graphics."
        },
        {
          title: "Pratham Business Suite — POS Systems Collateral",
          tag: "Print & Promotional Collateral",
          image: "assets/images/pratham-pos-suite.png",
          desc: "Designed comprehensive promotional materials, sales flyers ('Transform Your Food Business'), and service suite overviews for Pratham Point Of Sale Systems tailored for restaurant, cafe, and retail businesses."
        },
        {
          title: "Street & Portrait Photography",
          tag: "Photography & Lens",
          desc: "Passionate photography capturing real-world moments, architectural symmetry, dynamic light interplay, and authentic portraits."
        }
      ]
    }
  };

  // =========================================================================
  // 5B. RISHI-ACCURATE DOORS INTERACTION & DYNAMIC WALL CHECKLIST
  // =========================================================================
  const secDoors = document.getElementById('works');
  const dinfo = document.getElementById('dinfo');
  const dinfoH = dinfo?.querySelector('.dinfo__h');
  const dinfoT = dinfo?.querySelector('.dinfo__t');
  const dinfoP = dinfo?.querySelector('.dinfo__p');
  const units = secDoors ? [...secDoors.querySelectorAll('.unit')] : [];
  const wallEl = secDoors?.querySelector('.doors__wall');
  const badge = document.getElementById('doorCursor');

  const setWallInfo = (i) => {
    const info = WALL_INFO[i];
    if (!info || !dinfo) return;
    if (dinfoH) dinfoH.textContent = info[0];
    if (dinfoT) dinfoT.textContent = info[1];
    if (dinfoP) {
      dinfoP.innerHTML = info[2].map(li => `<li>${li}</li>`).join('');
    }
  };

  // Cursor badge tracker ("Click to enter")
  let overDoor = false;
  const placeBadge = (e) => {
    if (!badge) return;
    badge.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
  };
  window.addEventListener('pointermove', placeBadge, { passive: true });

  const showBadge = (show) => {
    overDoor = show;
    if (badge) badge.classList.toggle('on', show);
  };

  let activeHover = -1;
  let hoverToken = 0;

  const showDoorFocus = (i) => {
    if (i === activeHover) return;
    activeHover = i;
    const myToken = ++hoverToken;

    if (i < 0) {
      secDoors?.classList.remove('focus');
      units.forEach(u => u.classList.remove('on'));
      dinfo?.classList.remove('on');
      return;
    }

    secDoors?.classList.add('focus');
    units.forEach((u, k) => u.classList.toggle('on', k === i));

    if (!wallEl || !dinfo) return;

    setWallInfo(i);

    // Dynamic placement in the vacant wall area next to the open door (exact therishithakor.com physics)
    if (window.innerWidth >= 640) {
      const wr = wallEl.getBoundingClientRect();
      const r = units[i].getBoundingClientRect();
      const toRight = i < 2;
      const a = toRight ? units[i + 1].getBoundingClientRect() : units[0].getBoundingClientRect();
      const b = toRight ? units[3].getBoundingClientRect() : units[i - 1].getBoundingClientRect();
      const left = Math.min(a.left, b.left);
      const right = Math.max(a.right, b.right);
      const w = Math.min(right - left, 26 * 16);

      dinfo.style.width = w + 'px';
      dinfo.style.left = (left - wr.left + (right - left - w) / 2) + 'px';
      dinfo.style.top = (r.top - wr.top + r.height * 0.44 - dinfo.offsetHeight / 2) + 'px';
    }

    dinfo.classList.add('on');
  };

  units.forEach((u, idx) => {
    const w = u.querySelector('.doorway');
    if (!w) return;

    w.addEventListener('pointerenter', (e) => {
      placeBadge(e);
      showBadge(true);
      showDoorFocus(idx);
    });

    w.addEventListener('pointerleave', () => {
      showBadge(false);
    });

    w.addEventListener('click', (e) => {
      u.classList.add('press');
      setTimeout(() => u.classList.remove('press'), 280);
      showBadge(false);
      openShowcase(idx);
    });
  });

  if (secDoors) {
    secDoors.addEventListener('pointerleave', () => {
      showDoorFocus(-1);
    });
  }

  // Also update WALL_INFO with matching checkmark descriptions
  // =========================================================================
  // 6. VISUAL SHOWCASE DRAWER / MODAL
  // =========================================================================
  const modal = document.getElementById('modal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalIdx = document.getElementById('modalIdx');
  const modalName = document.getElementById('modalName');
  const modalTitle = document.getElementById('modalTitle');
  const modalLead = document.getElementById('modalLead');
  const showcasesWrap = document.getElementById('showcasesWrap');
  const modalPrev = document.getElementById('modalPrev');
  const modalNext = document.getElementById('modalNext');

  let activeDoorId = 0;

  const renderShowcaseModal = (id) => {
    const data = SHOWCASE_DATA[id];
    if (!data) return;
    activeDoorId = id;

    modalIdx.textContent = data.idx;
    modalName.textContent = data.name;
    modalTitle.textContent = data.title;
    modalLead.textContent = data.lead;

    let infographicsHTML = '';
    if (data.stats && data.stats.length) {
      infographicsHTML += `
        <div class="infographic-bar">
          ${data.stats.map(s => `
            <div class="info-stat">
              <div class="info-stat-num">${s.num}</div>
              <div class="info-stat-lbl">${s.label}</div>
            </div>
          `).join('')}
        </div>
      `;
    }
    if (data.flow && data.flow.length) {
      infographicsHTML += `
        <div class="flow-infographic">
          ${data.flow.map((st, i) => `
            <div class="flow-step">
              <span class="flow-step-idx">${i + 1}</span>
              <span>${st}</span>
            </div>
            ${i < data.flow.length - 1 ? `<span class="flow-arrow">→</span>` : ''}
          `).join('')}
        </div>
      `;
    }

    const cardsHTML = data.items.map(it => `
      <div class="sc-card">
        ${it.image ? `
          <div class="sc-img-wrap">
            <img src="${it.image}" alt="${it.title}" class="sc-img" loading="lazy" onerror="this.parentElement.style.display='none';" />
          </div>
        ` : ''}
        <div class="sc-body">
          <div class="sc-meta">
            <h4 class="sc-title">${it.title}</h4>
            ${it.tag ? `<span class="sc-tag">${it.tag}</span>` : ''}
          </div>
          <p class="sc-desc">${it.desc}</p>
          ${it.link ? `
            <a href="${it.link}" target="_blank" rel="noopener noreferrer" class="sc-btn">
              <span>${it.linkText || 'View Project ↗'}</span>
            </a>
          ` : ''}
        </div>
      </div>
    `).join('');

    showcasesWrap.innerHTML = infographicsHTML + cardsHTML;
  };

  const openShowcase = (id) => {
    renderShowcaseModal(id);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeShowcase = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (modalClose) modalClose.addEventListener('click', closeShowcase);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeShowcase);

  if (modalPrev) {
    modalPrev.addEventListener('click', () => {
      const prev = activeDoorId === 0 ? 3 : activeDoorId - 1;
      renderShowcaseModal(prev);
    });
  }
  if (modalNext) {
    modalNext.addEventListener('click', () => {
      const next = activeDoorId === 3 ? 0 : activeDoorId + 1;
      renderShowcaseModal(next);
    });
  }

  // Footer Door Triggers
  document.querySelectorAll('.footer-door-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.door, 10);
      openShowcase(id);
    });
  });

  // =========================================================================
  // 7. TIME TUNNEL CANVAS & ROLLING MECHANICAL ODOMETER
  // =========================================================================
  const cv = document.getElementById('storyCanvas');
  const odoDigits = [
    document.getElementById('odoD1'),
    document.getElementById('odoD2'),
    document.getElementById('odoD3'),
    document.getElementById('odoD4')
  ];
  const storyCount = document.getElementById('storyCount');
  const storyWhen = document.getElementById('storyWhen');
  const storyBarFill = document.getElementById('storyBarFill');
  const chapters = document.querySelectorAll('.ch');

  let currentYearStr = '2026';

  const rollYear = (yStr) => {
    if (yStr === currentYearStr) return;
    currentYearStr = yStr;
    const chars = yStr.split('');
    chars.forEach((c, idx) => {
      if (odoDigits[idx]) {
        odoDigits[idx].style.opacity = '0';
        odoDigits[idx].style.transform = 'translateY(-12px)';
        setTimeout(() => {
          odoDigits[idx].textContent = c;
          odoDigits[idx].style.opacity = '1';
          odoDigits[idx].style.transform = 'translateY(0)';
        }, 120);
      }
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        chapters.forEach(c => c.classList.remove('on'));
        entry.target.classList.add('on');

        const y = entry.target.dataset.year;
        const w = entry.target.dataset.when;
        const i = parseInt(entry.target.dataset.index, 10);

        rollYear(y);
        if (storyCount) storyCount.textContent = `0${i} / 06`;
        if (storyWhen) storyWhen.textContent = w;
        if (storyBarFill) storyBarFill.style.width = `${(i / 6) * 100}%`;
      }
    });
  }, { rootMargin: '-25% 0px -40% 0px' });

  chapters.forEach(ch => observer.observe(ch));

  // Canvas Dial Particles
  if (cv) {
    const ctx = cv.getContext('2d');
    let W = 0, H = 0;
    const resize = () => {
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * (window.devicePixelRatio || 1);
      cv.height = H * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener('resize', resize);

    const dust = Array.from({ length: 40 }, () => ({
      x: Math.random() * 800 - 400,
      y: Math.random() * 800 - 400,
      size: Math.random() * 2 + 1
    }));

    let progress = 0;
    window.addEventListener('scroll', () => {
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      progress = window.scrollY / (scrollMax || 1);
    }, { passive: true });

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      const isDark = root.getAttribute('data-mode') === 'dark';
      const col = isDark ? '232, 228, 224' : '26, 24, 24';

      const cx = W / 2, cy = H / 2;
      const angle = progress * Math.PI * 3;

      for (let r = 1; r <= 3; r++) {
        const rad = (r * 140 + progress * 240) % 520;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${col}, ${(0.04 * (1 - rad / 520)).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      dust.forEach(d => {
        const dist = Math.sqrt(d.x * d.x + d.y * d.y);
        const a = Math.atan2(d.y, d.x) + angle * 0.15;
        const curX = cx + Math.cos(a) * (dist * 0.85);
        const curY = cy + Math.sin(a) * (dist * 0.85);

        ctx.fillStyle = `rgba(${col}, 0.12)`;
        ctx.beginPath();
        ctx.arc(curX, curY, d.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(loop);
    };
    loop();
  }

  // =========================================================================
  // 8. HOLOGRAPHIC ABILITY CARD & CONTACT MODAL
  // =========================================================================
  const holo = document.getElementById('holo');
  const holoOpen = document.getElementById('holoOpen');
  const holoClose = document.getElementById('holoClose');
  const holoBackdrop = document.getElementById('holoBackdrop');

  if (holoOpen) holoOpen.addEventListener('click', () => holo.classList.add('open'));
  if (holoClose) holoClose.addEventListener('click', () => holo.classList.remove('open'));
  if (holoBackdrop) holoBackdrop.addEventListener('click', () => holo.classList.remove('open'));

  const contactModal = document.getElementById('contactModal');
  const contactClose = document.getElementById('contactClose');
  const contactBackdrop = document.getElementById('contactBackdrop');
  const openContactBtns = [
    document.getElementById('openContactHeader'),
    document.getElementById('hireMeBtn'),
    ...document.querySelectorAll('.open-contact-btn')
  ];

  openContactBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', () => contactModal.classList.add('open'));
  });

  if (contactClose) contactClose.addEventListener('click', () => contactModal.classList.remove('open'));
  if (contactBackdrop) contactBackdrop.addEventListener('click', () => contactModal.classList.remove('open'));

  window.handleInquiry = (form) => {
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const msg = document.getElementById('cMessage').value;

    const sub = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n`);
    window.location.href = `mailto:jayrajs.work@gmail.com?subject=${sub}&body=${body}`;
    contactModal.classList.remove('open');
  };

  // Keyboard Escape
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal?.classList.remove('open');
      holo?.classList.remove('open');
      contactModal?.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Auto-fit Full-Bleed Name Banner
  const sfWord = document.getElementById('sfWord');
  const fitWord = () => {
    if (!sfWord) return;
    const w = window.innerWidth;
    const size = Math.max(38, w * 0.138);
    sfWord.style.fontSize = size.toFixed(1) + 'px';
  };
  fitWord();
  window.addEventListener('resize', fitWord);
});
