// --- Team Data ---
const team = [
  {
    id: "selbi",
    name: "Selbinyyaz Nurmammedova",
    role: "Choreographer & Dance Instructor",
    org: "",
    location: "Turkmenistan",
    avatar: "images/selbi-avatar.jpg",
    color: "#E91E63",
    bio: "Choreographer and Dance Instructor specializing in cultural fusion within contemporary high heels.",
    skills: ["Choreography", "Dance Instruction", "Cultural Fusion", "Contemporary Dance", "High Heels"],
    social: { instagram: "https://www.instagram.com/indaheels", tiktok: "#", email: "selbi.nrm@gmail.com" },
    projects: [
      { name: "Cultural Fusion Dance", desc: "Blending traditional cultural elements with contemporary high heels dance" },
      { name: "INDAHEELS", desc: "Online store for professional High Heels footwear, kneepads, and dancewear in Ashgabat", url: "https://www.instagram.com/indaheels" }
    ]
  },
  {
    id: "katalina-midyan",
    name: "Katalina Midyan",
    role: "Digital Illustrator & Merch Designer",
    org: "Kate Made",
    location: "Turkmenistan",
    avatar: "images/katalina-avatar.jpg",
    color: "#9C27B0",
    bio: "Kate Made is a project by digital artist Katalina Midyan, creating prints for modern women. Her signature style is fashion illustration infused with national motifs. At the heart of her work is the feminine image — sensual, contemporary, with an invisible connection to nature and tradition. Katalina is drawn to ethnoculture: she weaves small ornaments, symbols, and textures into her drawings, preserving their beauty while reimagining them in a fresh way.",
    skills: ["Digital Illustration", "Fashion Illustration", "Ethno Design", "Merch Design", "National Motifs"],
    social: {
      instagram: "https://instagram.com/katemade.tm",
      instagram2: "https://instagram.com/katalina_midyan"
    },
    portfolio: [
      "images/portfolio/katalina/1.jpg",
      "images/portfolio/katalina/2.jpg",
      "images/portfolio/katalina/3.jpg",
      "images/portfolio/katalina/4.jpg",
      "images/portfolio/katalina/5.jpg",
      "images/portfolio/katalina/6.jpg",
      "images/portfolio/katalina/7.jpg",
      "images/portfolio/katalina/8.jpg",
      "images/portfolio/katalina/9.jpg"
    ],
    projects: [
      { name: "Kate Made", desc: "Author merch in national style — t-shirts, phone cases, mugs, thermos bottles, notebooks, shoppers, and passport covers. Each item is a small carrier of a big image, created with love for detail." }
    ]
  },
  {
    id: "myahri-gylyjova",
    name: "Myahri Klycheva",
    role: "TechWomen Alumna / Digital Skills Trainer",
    org: "TechWomen",
    location: "Turkmenistan",
    avatar: "",
    color: "#2196F3",
    bio: "TechWomen 2022 alumna and certified digital skills trainer. Myahri teaches robotics and Scratch programming, empowering the next generation through technology education in Turkmenistan.",
    skills: ["Digital Skills Training", "Robotics", "Scratch Programming", "TechWomen", "Teaching"],
    social: { instagram: "https://instagram.com/myauklycheva" },
    projects: [
      { name: "Digital Skills Training", desc: "Workshops and programs to build digital literacy across Turkmenistan" },
      { name: "TechWomen Fellowship", desc: "Mentorship and professional development through the TechWomen program" }
    ]
  },
  {
    id: "kemal-babayev",
    name: "Kemal Babayev",
    role: "Cinematographer & Director / Head of 2D/3D Animation, Studio22",
    org: "Studio22",
    location: "Turkmenistan",
    avatar: "images/kemal-avatar.jpg",
    color: "#FF5722",
    bio: "Cinematographer, director, 3D generalist, and AI content creator. Works on full-cycle commercial projects: from concept and production to final delivery with graphics and neural networks. Heads the 2D/3D animation department at Studio22, leading a team of talented artists, animators, and technical specialists. Studio22 is a full-cycle creative agency from Turkmenistan.",
    skills: ["Cinematography", "Directing", "3D Animation", "2D Animation", "AI Content", "Neural Networks"],
    social: {
      instagram: "https://instagram.com/ai_kema",
      instagram2: "https://instagram.com/studio22_tm",
      email: "kemal.babayew@gmail.com"
    },
    projects: [
      { name: "Studio22", desc: "Full-cycle creative agency bridging Central Asian culture with AI and high-quality 2D/3D animation" },
      { name: "Goshalar", desc: "First animated series in Turkmenistan about modern secular life (12+) — two childhood friends reuniting to face life's challenges together" },
      { name: "Paylash", desc: "Educational animated character for preschoolers — teaching through play and empathy, with merchandising potential" }
    ]
  },
  {
    id: "batyr-rejepov",
    name: "Batyr Rejepov",
    role: "AI & Digital Marketing Expert",
    org: "Clever Marketing / Imdatbot",
    location: "Turkmenistan",
    avatar: "images/batyr-avatar.jpg",
    color: "#00BCD4",
    bio: "Batyr Rejepov leads AI integration projects and digital marketing, heading the Imdatbot robotics and programming education center while running AI consulting at Clever Marketing. He built an AI chatbot for Instagram that cut response time from 4 hours to 1 minute, created automated sales funnels with AI-cloned voice avatars, and helped Imdatbot become Turkmenistan's first ISO 9001-certified educational institution. As a USAID digital marketing expert he guided 10 startups in building market strategies. A Google-certified specialist and one of the first to use Google Ads in Turkmenistan, he has worked in digital since 2013. He holds a Bachelor's in Management from RGGMU (Saint Petersburg) and co-founded belle.com.tm — an online beauty booking platform. His focus is on low-code AI solutions that help businesses automate without unnecessary complexity.",
    skills: ["AI Marketing", "Digital Marketing", "AI Chatbots", "Sales Automation", "Robotics Education", "Low-Code AI", "Google Ads"],
    social: {
      instagram: "https://instagram.com/b.rejepov_ai",
      instagram2: "https://instagram.com/imdatbot",
      email: "Rejepov.bat@gmail.com"
    },
    portfolio: [
      "images/portfolio/batyr/imdatbot-1.jpg",
      "images/portfolio/batyr/imdatbot-2.jpg",
      "images/portfolio/batyr/imdatbot-3.jpg"
    ],
    projects: [
      { name: "Clever Marketing", desc: "AI consulting company specializing in integrating artificial intelligence into business processes" },
      { name: "Imdatbot", desc: "Robotics and programming education center — first in Turkmenistan with ISO 9001 certification" },
      { name: "Türkmen Topragynyň Ruhy — 2026", desc: "AI-generated calendar celebrating the spirit of Turkmen land", url: "https://drive.google.com/file/d/1Tatqqu47Cl3T1j5AMzUPO2f0T4lAOrMj/view" },
      { name: "belle.com.tm", desc: "Online platform for booking beauty services in Turkmenistan" }
    ]
  },
  {
    id: "vasiliy",
    name: "Vasiliy Andronov",
    role: "Creative Agency Founder",
    org: "Jam Creative Agency",
    location: "Turkmenistan",
    avatar: "images/vasiliy-avatar.jpg",
    color: "#4CAF50",
    bio: "Vasiliy Andronov is the founder of Jam Creative Agency, delivering creative strategy and marketing solutions for clients across Turkmenistan and Central Asia.",
    skills: ["Creative Strategy", "Agency Management", "Marketing", "Content Production"],
    social: { instagram: "https://instagram.com/jam_tm_creative" },
    portfolio: [
      "images/portfolio/vasiliy/1.jpg",
      "images/portfolio/vasiliy/2.jpg",
      "images/portfolio/vasiliy/3.jpg",
      "images/portfolio/vasiliy/4.jpg"
    ],
    projects: [
      { name: "Jam Creative Agency", desc: "Creative agency specializing in marketing strategy and content production" }
    ]
  },
  {
    id: "abdy-agajykov",
    name: "Abdyrahym Agajykov",
    role: "Marketing & Entrepreneurship",
    org: "Nexvoke Agency",
    location: "Turkmenistan",
    avatar: "images/abdy-avatar.jpg",
    color: "#FF9800",
    bio: "I create to influence and motivate people. Abdyrahym Agajykov is a marketing professional and entrepreneur, running Nexvoke Agency and Creative Corner TM. He combines marketing strategy, consulting, and a passion for books.",
    skills: ["Marketing", "Entrepreneurship", "Consulting", "Books", "Creative Strategy"],
    social: {
      instagram: "https://instagram.com/abdy.agajyk",
      instagram2: "https://instagram.com/nexvoke.agency"
    },
    projects: [
      { name: "Nexvoke Agency", desc: "Marketing and creative agency" },
      { name: "Creative Corner TM", desc: "Creative community platform" },
      { name: "Astra Consulting TM", desc: "Business consulting services" }
    ]
  },
  {
    id: "aman-sapargeldiyev",
    name: "Aman Sapargeldiyev",
    role: "Filmmaker",
    org: "",
    location: "Turkmenistan",
    avatar: "images/aman-avatar.jpg",
    color: "#607D8B",
    bio: "Aman Sapargeldiyev is a filmmaker from Turkmenistan, bringing fresh perspectives to visual storytelling and creative media production.",
    skills: ["Filmmaking", "Video Production", "Visual Storytelling", "Creative Media"],
    social: { instagram: "https://instagram.com/amansept" },
    projects: []
  },
  {
    id: "alexandra-ahmedova",
    name: "Aleksandra Ahmedova",
    role: "CEO, Mumkinchilik Dunyasi / Project Manager",
    org: "Mumkinchilik Dunyasi",
    location: "Turkmenistan",
    avatar: "images/alexandra-avatar.jpg",
    color: "#E040FB",
    bio: "CEO of Mumkinchilik Dunyasi, a youth organization whose mission is to implement career orientation, career consulting, and develop soft skills among Turkmen youth. Project manager of international programs TechnovationGirls Turkmenistan and GoViral. Active participant in social initiatives. Certified trainer and mentor of the startup ecosystem.",
    skills: ["Career Consulting", "Youth Development", "Project Management", "Startup Mentoring", "Training"],
    social: {
      instagram: "https://instagram.com/sanechkamodern",
      instagram2: "https://instagram.com/mumkinchilik.dunyasi",
      instagram3: "https://instagram.com/modern_profcareer"
    },
    projects: [
      { name: "Mumkinchilik Dunyasi", desc: "Youth organization for career orientation, career consulting, and soft skills development in Turkmenistan" },
      { name: "TechnovationGirls Turkmenistan", desc: "International program empowering girls through technology and entrepreneurship" },
      { name: "GoViral", desc: "International program for youth engagement and social impact" }
    ]
  },
  {
    id: "begench-rejepov",
    name: "Begench Rejepov",
    role: "Startup Founder",
    org: "Biar Delivery / Hinlen",
    location: "Turkmenistan",
    avatar: "images/begench-avatar.jpg",
    color: "#795548",
    bio: "Begench Rejepov is a startup founder from Turkmenistan who attracted the country's first venture capital investment. His food delivery service Biar has completed 1 incubation and 2 acceleration programs, placed 3rd at the international Hi-Tech Forum in Ashgabat, 2nd at \"Sanly çözgüt 2024\", and reached the top 10 Central Asian startups at Startup Battle in Tashkent. His second project, Hinlen, is a music streaming platform focused on Central Asia, supporting local artists with online and offline listening via premium subscription — backed by IT Park Uzbekistan.",
    skills: ["Startups", "Venture Capital", "Food Delivery", "Music Streaming", "Product Development"],
    social: { instagram: "https://instagram.com/mr.biar" },
    portfolio: [
      "images/portfolio/begench/hinlen-1.jpg",
      "images/portfolio/begench/hinlen-2.jpg",
      "images/portfolio/begench/hinlen-3.jpg",
      "images/portfolio/begench/biar-1.jpg"
    ],
    projects: [
      { name: "Biar Delivery", desc: "Food delivery service helping cafes get orders and new customers. First venture-funded startup in Turkmenistan. Top-10 at Startup Battle Tashkent.", url: "https://biar.biz/" },
      { name: "Hinlen", desc: "Music streaming platform for Central Asia — supporting local artists with online & offline premium listening. Backed by IT Park Uzbekistan.", url: "https://hinlen.com" }
    ]
  },
  {
    id: "gayane-israyelyan",
    name: "Gayane Israyelyan",
    role: "Projects Associate, British Embassy",
    org: "British Embassy in Ashgabat",
    location: "Turkmenistan",
    avatar: "images/gayane-avatar.jpg",
    color: "#F44336",
    bio: "Gayane Israyelyan is a creative professional contributing to the growing creative community in Central Asia.",
    skills: ["Creative", "Digital Media"],
    social: { instagram: "https://instagram.com/gayana_israyelyan" },
    projects: []
  },
  {
    id: "farhad-artykov",
    name: "Farhad Artykov",
    role: "Digital Innovation & Creative Economy",
    org: "Union of Economists of Turkmenistan",
    location: "Turkmenistan",
    avatar: "images/farhad-avatar.jpg",
    color: "#3F51B5",
    bio: "Farhad Artykov is a digital technologies and innovation specialist with over 15 years of experience working with international IT companies and development organizations. He has worked with companies such as Microsoft and Huawei, as well as with the United Nations Development Programme (UNDP), contributing to digital transformation and innovation projects. He is a co-founder of the Creative Economy and Innovation Department under the Union of Economists of Turkmenistan.",
    skills: ["Digital Innovation", "IT Strategy", "Creative Economy", "Digital Transformation", "International Development"],
    social: { linkedin: "https://www.linkedin.com/in/farhad-artykov" },
    projects: [
      { name: "Creative Economy & Innovation Dept.", desc: "Co-founded the Creative Economy and Innovation Department under the Union of Economists of Turkmenistan" }
    ]
  }
];

// --- Render ---
function initials(name) {
  return name.split(" ").map(w => w[0]).join("").toUpperCase();
}

function avatarHTML(m, size) {
  const sz = size || 80;
  if (m.avatar) {
    return `<img class="avatar" src="${m.avatar}" alt="${m.name}" style="width:${sz}px;height:${sz}px">`;
  }
  return `<div class="avatar avatar-placeholder" style="width:${sz}px;height:${sz}px;background:${m.color}">${initials(m.name)}</div>`;
}

function socialHTML(s) {
  const icons = [];
  if (s.instagram) icons.push(`<a href="${s.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>`);
  if (s.instagram2) icons.push(`<a href="${s.instagram2}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>`);
  if (s.instagram3) icons.push(`<a href="${s.instagram3}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>`);
  if (s.tiktok) icons.push(`<a href="${s.tiktok}" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>`);
  if (s.linkedin) icons.push(`<a href="${s.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`);
  if (s.email) icons.push(`<a href="mailto:${s.email}" aria-label="Email"><i class="fas fa-envelope"></i></a>`);
  return icons.join("");
}

function linkIcon(url) {
  if (url.includes("instagram.com")) return '<i class="fab fa-instagram"></i>';
  if (url.includes("drive.google.com")) return '<i class="fab fa-google-drive"></i>';
  if (url.includes("tiktok.com")) return '<i class="fab fa-tiktok"></i>';
  if (url.includes("youtube.com") || url.includes("youtu.be")) return '<i class="fab fa-youtube"></i>';
  if (url.includes("t.me") || url.includes("telegram")) return '<i class="fab fa-telegram"></i>';
  return '<i class="fas fa-external-link-alt"></i>';
}

function skillsHTML(skills) {
  return skills.map(s => `<span class="tag">${s}</span>`).join("");
}

function renderHeritage() {
  const lang = getLang();
  const track = document.getElementById("heritage-track");
  if (!track) return;
  const facts = I18N.heritage.map(item => ({
    icon: item.icon,
    title: item.title[lang] || item.title.en,
    text: item.text[lang] || item.text.en
  }));
  // Triplicate for seamless infinite loop on wide screens
  const items = [...facts, ...facts, ...facts];
  track.innerHTML = items.map((f, i) => `
    <div class="tri-item ${i % 2 === 0 ? 'up' : 'down'}">
      <i class="${f.icon}"></i>
      <span class="tri-title">${f.title}</span>
      <span class="tri-text">${f.text}</span>
    </div>
  `).join("");
}

// --- Heritage auto-scroll + drag ---
(function initHeritageScroll() {
  const wrap = document.querySelector(".carousel-wrap");
  if (!wrap) return;
  const speed = 0.6; // px per frame
  let isDragging = false, isHovering = false, startX, scrollStart;
  let rafId;

  function autoScroll() {
    if (!isDragging && !isHovering) {
      wrap.scrollLeft += speed;
      // Infinite loop: when scrolled past first third, jump back
      const track = wrap.firstElementChild;
      if (track && wrap.scrollLeft >= track.scrollWidth / 3) {
        wrap.scrollLeft -= track.scrollWidth / 3;
      }
    }
    rafId = requestAnimationFrame(autoScroll);
  }
  rafId = requestAnimationFrame(autoScroll);

  // Pause on hover
  wrap.addEventListener("mouseenter", () => { isHovering = true; });
  wrap.addEventListener("mouseleave", () => { isHovering = false; isDragging = false; wrap.classList.remove("grabbing"); });

  // Drag
  wrap.addEventListener("mousedown", e => {
    isDragging = true;
    wrap.classList.add("grabbing");
    startX = e.pageX;
    scrollStart = wrap.scrollLeft;
  });
  window.addEventListener("mouseup", () => { if (isDragging) { isDragging = false; wrap.classList.remove("grabbing"); } });
  window.addEventListener("mousemove", e => {
    if (!isDragging) return;
    e.preventDefault();
    wrap.scrollLeft = scrollStart - (e.pageX - startX);
  });

  // Touch
  wrap.addEventListener("touchstart", e => {
    isHovering = true;
    startX = e.touches[0].pageX;
    scrollStart = wrap.scrollLeft;
  }, { passive: true });
  wrap.addEventListener("touchmove", e => {
    wrap.scrollLeft = scrollStart - (e.touches[0].pageX - startX);
  }, { passive: true });
  wrap.addEventListener("touchend", () => { isHovering = false; });
})();

// --- Neon edge trails ---
(function initNeonTrails() {
  // Triangle edge vertices (fraction of width/height)
  const UP_VERTS   = [[.5,0],[1,1],[0,1]];   // top, right, left
  const DOWN_VERTS = [[0,0],[1,0],[.5,1]];    // left, right, bottom

  // Lerp along triangle perimeter at progress t (0..1)
  function edgePos(verts, t) {
    const seg = t * 3;
    const i = Math.floor(seg) % 3;
    const f = seg - Math.floor(seg);
    const a = verts[i], b = verts[(i + 1) % 3];
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
  }

  const tracers = [];
  const configs = [
    { nth: 5, off: 1, speed: 14, color: "26,115,232",  tailLen: 30 },
    { nth: 5, off: 3, speed: 20, color: "233,30,99",   tailLen: 25 },
    { nth: 7, off: 2, speed: 28, color: "26,115,232",  tailLen: 22 },
    { nth: 7, off: 5, speed: 17, color: "233,30,99",   tailLen: 28 },
  ];

  function setup() {
    tracers.length = 0;
    document.querySelectorAll(".tri-item").forEach((el, idx) => {
      configs.forEach(cfg => {
        if (idx % cfg.nth !== cfg.off) return;
        let canvas = el.querySelector("canvas.neon-canvas");
        if (!canvas) {
          canvas = document.createElement("canvas");
          canvas.className = "neon-canvas";
          el.appendChild(canvas);
        }
        const w = el.offsetWidth, h = el.offsetHeight;
        canvas.width = w; canvas.height = h;
        const isUp = el.classList.contains("up");
        tracers.push({
          canvas, ctx: canvas.getContext("2d"),
          w, h, verts: isUp ? UP_VERTS : DOWN_VERTS,
          speed: cfg.speed, color: cfg.color, tailLen: cfg.tailLen,
          t: Math.random(), trail: []
        });
      });
    });
  }

  function tick() {
    tracers.forEach(tr => {
      tr.t = (tr.t + 1 / (tr.speed * 60)) % 1;
      const [fx, fy] = edgePos(tr.verts, tr.t);
      const x = fx * tr.w, y = fy * tr.h;
      tr.trail.push([x, y]);
      if (tr.trail.length > tr.tailLen) tr.trail.shift();

      tr.ctx.clearRect(0, 0, tr.w, tr.h);
      const len = tr.trail.length;
      for (let i = 1; i < len; i++) {
        const alpha = (i / len) * .6;
        const lw = (i / len) * 3;
        tr.ctx.beginPath();
        tr.ctx.moveTo(tr.trail[i - 1][0], tr.trail[i - 1][1]);
        tr.ctx.lineTo(tr.trail[i][0], tr.trail[i][1]);
        tr.ctx.strokeStyle = `rgba(${tr.color},${alpha})`;
        tr.ctx.lineWidth = lw;
        tr.ctx.stroke();
      }
      // Bright head dot
      tr.ctx.beginPath();
      tr.ctx.arc(x, y, 3, 0, Math.PI * 2);
      tr.ctx.fillStyle = `rgba(${tr.color},.9)`;
      tr.ctx.shadowColor = `rgba(${tr.color},.8)`;
      tr.ctx.shadowBlur = 12;
      tr.ctx.fill();
      tr.ctx.shadowBlur = 0;
    });
    requestAnimationFrame(tick);
  }

  // Init after first render
  setTimeout(() => { setup(); tick(); }, 200);
  // Re-setup on language change (re-render)
  const origRenderHeritage = renderHeritage;
  renderHeritage = function() {
    origRenderHeritage();
    setTimeout(setup, 50);
  };
})();

function renderCards() {
  const lang = getLang();
  const grid = document.getElementById("team-grid");
  grid.innerHTML = team.map(m => `
    <div class="card" onclick="openModal('${m.id}')">
      ${avatarHTML(m)}
      <h3>${m.name}</h3>
      <p class="card-role">${t(m.id, "role", lang)}</p>
      ${m.org ? `<p class="card-org">${m.org}</p>` : ""}
      <div class="card-skills">${skillsHTML(t(m.id, "skills", lang).slice(0, 3))}</div>
      <div class="card-social">${socialHTML(m.social)}</div>
    </div>
  `).join("");
}

// --- Modal ---
function openModal(id) {
  const m = team.find(t => t.id === id);
  if (!m) return;
  const lang = getLang();
  const modal = document.getElementById("member-modal");
  modal.dataset.memberId = id;
  const el = document.getElementById("modal-content");
  const projects = t(m.id, "projects", lang);
  el.innerHTML = `
    <div class="modal-header" style="border-left: 4px solid ${m.color}">
      ${avatarHTML(m, 120)}
      <div class="modal-info">
        <h2>${m.name}</h2>
        <p class="modal-role">${t(m.id, "role", lang)}</p>
        ${m.org ? `<p class="modal-org"><i class="fas fa-building"></i> ${m.org}</p>` : ""}
        <p class="modal-loc"><i class="fas fa-map-marker-alt"></i> ${m.location}</p>
        <div class="modal-social">${socialHTML(m.social)}</div>
      </div>
    </div>
    <div class="modal-body">
      <p>${t(m.id, "bio", lang)}</p>
      <div class="modal-skills">${skillsHTML(t(m.id, "skills", lang))}</div>
      ${m.portfolio && m.portfolio.length ? `
        <h3>${I18N.ui["ui.portfolio"][lang]}</h3>
        <div class="portfolio-grid">
          ${m.portfolio.map((img, i) => `
            <div class="portfolio-item" onclick="openLightbox('${m.id}', ${i})">
              <img src="${img}" alt="${m.name} work ${i + 1}" loading="lazy">
            </div>
          `).join("")}
        </div>
      ` : ""}
      ${projects.length ? `
        <h3>${I18N.ui["ui.projects"][lang]}</h3>
        <div class="projects">
          ${projects.map((p, i) => {
            const origP = m.projects[i] || {};
            const url = origP.url;
            return `
            <div class="project" style="border-left-color:${m.color}">
              <strong>${url ? `<a href="${url}" target="_blank" rel="noopener">${linkIcon(url)} ${p.name}</a>` : p.name}</strong>
              <p>${p.desc}</p>
            </div>`;
          }).join("")}
        </div>
      ` : ""}
    </div>
  `;
  modal.classList.add("open");
  document.getElementById("modal-backdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("member-modal").classList.remove("open");
  document.getElementById("modal-backdrop").classList.remove("open");
  document.body.style.overflow = "";
}

// --- Lightbox ---
let _lbImages = [];
let _lbIndex = 0;

function openLightbox(memberId, index) {
  event.stopPropagation();
  const m = team.find(t => t.id === memberId);
  if (!m || !m.portfolio) return;
  _lbImages = m.portfolio;
  _lbIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

function lightboxNav(dir) {
  _lbIndex = (_lbIndex + dir + _lbImages.length) % _lbImages.length;
  updateLightbox();
}

function updateLightbox() {
  document.getElementById("lightbox-img").src = _lbImages[_lbIndex];
  document.getElementById("lightbox-counter").textContent = `${_lbIndex + 1} / ${_lbImages.length}`;
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (document.getElementById("lightbox").classList.contains("open")) {
      closeLightbox();
    } else {
      closeModal();
    }
  }
  if (document.getElementById("lightbox").classList.contains("open")) {
    if (e.key === "ArrowLeft") lightboxNav(-1);
    if (e.key === "ArrowRight") lightboxNav(1);
  }
});

// --- Theme ---
function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  document.querySelector(".theme-toggle i").className = next === "dark" ? "fas fa-moon" : "fas fa-sun";
}

(function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  const icon = document.querySelector(".theme-toggle i");
  if (icon) icon.className = saved === "dark" ? "fas fa-moon" : "fas fa-sun";
})();

// --- Navbar scroll effect + hero pattern parallax + logo rotation ---
const _patternLayer = document.querySelector(".hero-pattern-layer");
const _heroLogo = document.getElementById("hero-logo");
const _bgLogo = document.getElementById("bg-logo");
const _bgLogoImg = _bgLogo ? _bgLogo.querySelector("img") : null;
const _hero = document.getElementById("hero");
window.addEventListener("scroll", () => {
  const sy = window.scrollY;
  document.getElementById("navbar").classList.toggle("scrolled", sy > 50);
  if (_patternLayer) _patternLayer.style.transform = `translateY(${sy * 0.3}px)`;
  // Hero logo: rotate + fade out as hero scrolls away
  const heroH = _hero ? _hero.offsetHeight : 600;
  if (_heroLogo) {
    _heroLogo.style.transform = `rotate(${sy * 0.15}deg)`;
    _heroLogo.style.opacity = Math.max(0, 1 - sy / (heroH * 0.6));
  }
  // Background watermark: appear after hero, keep rotating
  if (_bgLogo) {
    _bgLogo.classList.toggle("visible", sy > heroH * 0.5);
    if (_bgLogoImg) _bgLogoImg.style.transform = `rotate(${sy * 0.08}deg)`;
  }
}, { passive: true });

// --- Smooth scroll ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".nav-links").classList.remove("open");
  });
});

// --- Language ---
function getLang() {
  return document.documentElement.lang || "en";
}

function t(memberId, field, lang) {
  const entry = I18N.team[memberId];
  if (entry && entry[field]) {
    const val = entry[field][lang];
    if (val !== undefined) return val;
    return entry[field].en;
  }
  const m = team.find(x => x.id === memberId);
  return m ? m[field] : "";
}

function applyStaticTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const entry = I18N.ui[key];
    if (entry) el.textContent = entry[lang] || entry.en;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    const entry = I18N.ui[key];
    if (entry) el.innerHTML = entry[lang] || entry.en;
  });
}

function applyTranslations(lang) {
  applyStaticTranslations(lang);
  renderCards();
  renderHeritage();
  renderEvents(lang);
  document.title = (I18N.ui["page.title"][lang] || I18N.ui["page.title"].en);
  // Re-render open modal
  const modal = document.getElementById("member-modal");
  if (modal.classList.contains("open") && modal.dataset.memberId) {
    openModal(modal.dataset.memberId);
  }
}

function setLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  const label = document.querySelector(".lang-label");
  if (label) label.textContent = lang === "en" ? "RU" : "EN";
  applyTranslations(lang);
}

function toggleLang() {
  setLang(getLang() === "en" ? "ru" : "en");
}

// --- Events / Programme — Flat Tabs ---
let _activeEventIdx = 0;

function renderEvents(lang) {
  const tabsEl = document.getElementById("event-tabs");
  const panelsEl = document.getElementById("tab-panels");
  if (!tabsEl || !panelsEl || !I18N.events) return;

  const events = I18N.events;
  const infoLabel = lang === "ru" ? "Инфо" : "Info";
  const totalItems = events.length + 1;

  // Auto-select on first render: check URL hash for deep link, else pick nearest event
  if (!tabsEl.dataset.init) {
    const hash = window.location.hash;
    const parts = hash.replace('#','').split('/');
    let resolved = false;
    if (parts[0] === 'programme' && parts[1]) {
      if (parts[1] === 'info') {
        _activeEventIdx = events.length;
        resolved = true;
      } else {
        const iso = slugToISO(parts[1]);
        const idx = events.findIndex(e => e.date === iso);
        if (idx !== -1) { _activeEventIdx = idx; resolved = true; }
      }
    }
    if (!resolved) {
      const today = new Date().toISOString().slice(0, 10);
      let autoIdx = events.findIndex(e => e.date >= today);
      if (autoIdx === -1) autoIdx = events.length - 1;
      _activeEventIdx = autoIdx;
    }
    tabsEl.dataset.init = "1";
  }

  // Build track
  let track = tabsEl.querySelector(".event-tabs-track");
  if (!track) {
    track = document.createElement("div");
    track.className = "event-tabs-track";
    tabsEl.innerHTML = "";
    tabsEl.appendChild(track);
  }

  // Render tab buttons
  track.innerHTML = "";
  for (let i = 0; i < totalItems; i++) {
    const btn = document.createElement("button");
    btn.className = "event-tab";
    btn.dataset.idx = i;
    btn.setAttribute("data-active", i === _activeEventIdx ? "1" : "0");

    if (i < events.length) {
      const ev = events[i];
      btn.textContent = ev.label[lang] || ev.label.en;
    } else {
      btn.innerHTML = `<i class="fas fa-envelope" style="font-size:.85em"></i> ${infoLabel}`;
    }

    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.idx, 10);
      if (idx === _activeEventIdx) return;
      _activeEventIdx = idx;
      activateTab(getLang());
    });

    track.appendChild(btn);
  }

  // Set initial active state
  activateTab(lang, false);
}

function activateTab(lang, animate) {
  const tabsEl = document.getElementById("event-tabs");
  const track = tabsEl ? tabsEl.querySelector(".event-tabs-track") : null;
  if (!track) return;

  // Update active data attribute
  track.querySelectorAll(".event-tab").forEach(btn => {
    btn.setAttribute("data-active", parseInt(btn.dataset.idx) === _activeEventIdx ? "1" : "0");
  });

  // Update URL hash with active event date slug
  const evts = I18N.events;
  const slug = _activeEventIdx < evts.length ? dateSlug(evts[_activeEventIdx].date) : 'info';
  history.replaceState(null, '', '#programme/' + slug);

  // Fade-swap panel content
  fadePanelTo(lang);
}

// Fade out current panel, swap content, fade in new
function fadePanelTo(lang) {
  const panelsEl = document.getElementById("tab-panels");
  if (!panelsEl) return;
  const existing = panelsEl.querySelector(".tab-panel");

  if (existing && !existing.classList.contains("fade-out")) {
    existing.classList.add("fade-out");
    let swapped = false;
    function doSwap() {
      if (swapped) return;
      swapped = true;
      insertPanel(panelsEl, lang);
    }
    existing.addEventListener("transitionend", doSwap, { once: true });
    setTimeout(doSwap, 450); // safety fallback
  } else if (!existing) {
    insertPanel(panelsEl, lang);
  }
}

function insertPanel(panelsEl, lang) {
  const html = buildPanelHTML(lang);
  panelsEl.innerHTML = `<div class="tab-panel fade-in">${html}</div>`;
  // Re-observe reveal elements
  if (window._revealObserver) {
    panelsEl.querySelectorAll('.reveal').forEach(r => window._revealObserver.observe(r));
  }
  // Wire up info send button if present
  const sendBtn = document.getElementById("info-send");
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const body = encodeURIComponent(document.getElementById("info-textarea").value);
      const subject = encodeURIComponent("У меня предложение по проведению мероприятия");
      window.location.href = `mailto:extramikeme@gmail.com?subject=${subject}&body=${body}`;
    });
  }
}

function buildPanelHTML(lang) {
  const events = I18N.events;
  const ui = I18N.ui;

  // Info tab
  if (_activeEventIdx === events.length) {
    return `
      <div class="info-panel">
        <h3>${ui["info.title"][lang] || ui["info.title"].en}</h3>
        <p>${ui["info.desc"][lang] || ui["info.desc"].en}</p>
        <textarea id="info-textarea" placeholder="${ui["info.placeholder"][lang] || ui["info.placeholder"].en}"></textarea>
        <button class="btn-send" id="info-send">${ui["info.send"][lang] || ui["info.send"].en}</button>
      </div>`;
  }

  // Event panel
  const ev = events[_activeEventIdx];
  const whereLabel = lang === "ru" ? "Где?" : "Where?";
  const venueHTML = ev.subtitle
    ? `<p class="event-venue"><i class="fas fa-map-marker-alt"></i> <span class="venue-q">${whereLabel}</span> — ${ev.subtitle[lang] || ev.subtitle.en}</p>`
    : "";

  if (ev.programme && ev.programme.length) {
    const workingLangHTML = ev.workingLang
      ? `<p class="event-working-lang"><i class="fas fa-language"></i> ${ev.workingLang[lang] || ev.workingLang.en}</p>`
      : "";
    return `
      <p class="event-subtitle">${ev.title[lang] || ev.title.en}</p>
      ${venueHTML}
      ${workingLangHTML}
      <div class="timeline">
        ${ev.programme.map(item => {
          const langBadge = item.lang ? `<span class="tl-lang tl-lang-${item.lang.toLowerCase()}">${item.lang}</span>` : "";
          const summaryText = item.summary ? `<div class="tl-summary">${item.summary[lang] || item.summary.en}</div>` : "";
          return `
          <div class="tl-node reveal${item.highlight ? ' highlight' : ''}">
            <div class="tl-time">${item.time} ${langBadge}</div>
            <div class="tl-title">${item.title[lang] || item.title.en}</div>
            ${summaryText}
          </div>`;
        }).join("")}
      </div>`;
  }

  const tbd = lang === "ru" ? "Программа будет объявлена позже" : "Programme to be announced";
  return `
    <p class="event-subtitle">${ev.title[lang] || ev.title.en}</p>
    ${venueHTML}
    <div class="programme-empty">${tbd}</div>`;
}

// --- Scroll Reveal (IntersectionObserver) ---
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  window._revealObserver = observer;

  // Observe existing .reveal elements and section titles/subtitles (NOT whole sections)
  function observeAll() {
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    // Reveal section titles and subtitles, not entire sections
    document.querySelectorAll('.section-title, .section-subtitle, .heritage-footer, .mq-attribution').forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      observer.observe(el);
    });
    // Add staggered delays to grid children
    document.querySelectorAll('.team-grid .card, .about-highlights .highlight-card, .stats-grid .stat-card, .about-text p').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      observer.observe(el);
    });
  }
  // Run after initial render
  setTimeout(observeAll, 100);
  // Re-run when language changes cards
  const origRenderCards = renderCards;
  renderCards = function() {
    origRenderCards();
    setTimeout(() => {
      document.querySelectorAll('.team-grid .card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
        el.classList.add('reveal');
        observer.observe(el);
      });
    }, 50);
  };
})();

// --- Kinetic Hero Typography ---
(function initKineticHero() {
  const h1 = document.querySelector('.hero h1');
  const label = document.querySelector('.hero-label');
  const slogan = document.querySelector('.hero-slogan');
  const cta = document.querySelector('.btn-hero');
  if (!h1) return;

  function splitAndAnimate() {
    const text = h1.textContent;
    h1.innerHTML = text.split('').map((ch, i) => {
      if (ch === ' ') return ' ';
      return `<span class="letter" style="animation-delay:${i * 0.04}s">${ch}</span>`;
    }).join('');

    const totalLetterTime = text.length * 0.04 + 0.5;
    setTimeout(() => { if (label) label.classList.add('kinetic-visible'); }, 100);
    setTimeout(() => { if (slogan) slogan.classList.add('kinetic-visible'); }, totalLetterTime * 1000);
    setTimeout(() => { if (cta) cta.classList.add('kinetic-visible'); }, totalLetterTime * 1000 + 300);
  }

  splitAndAnimate();

  // Re-split on language change
  const origApplyStatic = applyStaticTranslations;
  applyStaticTranslations = function(lang) {
    origApplyStatic(lang);
    // Restore text first, then re-split
    const entry = I18N.ui["hero.title"];
    if (entry) h1.textContent = entry[lang] || entry.en;
    splitAndAnimate();
  };
})();

// --- Magtymguly Quote (scroll-driven typewriter) ---
(function initMagtymguly() {
  const wrap = document.querySelector('.mq-wrap');
  const quote = document.querySelector('.mq-quote');
  if (!wrap || !quote) return;
  const section = document.querySelector('.magtymguly-section');
  let chars = [];

  function wrapChars() {
    // Split innerHTML into characters, preserving <br> tags
    const html = quote.innerHTML;
    const parts = html.split(/(<br\s*\/?>)/gi);
    let result = '';
    parts.forEach(part => {
      if (part.match(/^<br\s*\/?>$/i)) {
        result += part;
      } else {
        // Decode HTML entities first, then wrap each visible char
        const tmp = document.createElement('span');
        tmp.innerHTML = part;
        const text = tmp.textContent;
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (ch === ' ') {
            result += ' ';
          } else {
            result += `<span class="mq-char">${ch.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</span>`;
          }
        }
      }
    });
    quote.innerHTML = result;
    chars = quote.querySelectorAll('.mq-char');
  }

  wrapChars();

  function onScroll() {
    const rect = section.getBoundingClientRect();
    const winH = window.innerHeight;
    const sectionH = section.offsetHeight;
    // Full range: from section bottom entering viewport to section top leaving
    const scrolled = winH - rect.top;
    const totalRange = winH + sectionH;
    const progress = scrolled / totalRange;

    // Show deco + attribution when section enters
    if (progress > 0.1) {
      wrap.classList.add('mq-visible');
    }
    // Typewriter: chars type from 20% to 70% of the visible scroll range
    if (chars.length) {
      const typeProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.5));
      const revealCount = Math.floor(typeProgress * chars.length);
      chars.forEach((ch, i) => {
        ch.classList.toggle('typed', i < revealCount);
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Re-wrap on language change
  const origApplyTranslations = applyTranslations;
  applyTranslations = function(lang) {
    origApplyTranslations(lang);
    // Re-read the updated innerHTML and re-wrap
    setTimeout(() => {
      wrapChars();
      onScroll();
    }, 50);
  };
})();

// --- Stats Counters ---
(function initCounters() {
  let counted = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        document.querySelectorAll('.stat-number').forEach(el => {
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const start = performance.now();
          function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
          function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.round(easeOutExpo(progress) * target);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
})();

// --- SVG Route Map (draw on scroll) ---
(function initRouteMap() {
  const routeLine = document.querySelector('.route-line');
  if (!routeLine) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        routeLine.classList.add('drawn');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(routeLine.closest('section') || routeLine);
})();

(function initLang() {
  const saved = localStorage.getItem("lang");
  let lang;
  if (saved) {
    lang = saved;
  } else if ((navigator.language || "").startsWith("ru")) {
    lang = "ru";
  } else {
    lang = "en";
  }
  document.documentElement.lang = lang;
  const label = document.querySelector(".lang-label");
  if (label) label.textContent = lang === "en" ? "RU" : "EN";
  applyTranslations(lang);
})();

// --- URL Deep-Linking ---
// Convert "2026-02-28" → "28.02.2026" for URL slugs
function dateSlug(iso) { return iso.split('-').reverse().join('.'); }
// Convert "28.02.2026" → "2026-02-28" for lookup
function slugToISO(slug) { return slug.split('.').reverse().join('-'); }

// Suppress flag — prevents scroll-spy from overwriting hash during smooth scrolls
let _scrollSpySuppressed = false;
function suppressScrollSpy(ms) {
  _scrollSpySuppressed = true;
  setTimeout(() => { _scrollSpySuppressed = false; }, ms || 1200);
}

// Scroll-spy: update URL hash as user scrolls between sections
(function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  let currentHash = window.location.hash || '';
  const visibleRatios = new Map();

  const observer = new IntersectionObserver((entries) => {
    if (_scrollSpySuppressed) return;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visibleRatios.set(entry.target.id, entry.intersectionRatio);
      } else {
        visibleRatios.delete(entry.target.id);
      }
    });
    // Pick section with highest intersection ratio
    let bestId = null, bestRatio = 0;
    for (const [id, ratio] of visibleRatios) {
      if (ratio > bestRatio) { bestRatio = ratio; bestId = id; }
    }
    if (!bestId) return;
    let hash;
    if (bestId === 'programme') {
      const events = I18N.events;
      const slug = _activeEventIdx < events.length
        ? dateSlug(events[_activeEventIdx].date) : 'info';
      hash = '#programme/' + slug;
    } else {
      hash = '#' + bestId;
    }
    if (hash !== currentHash) {
      currentHash = hash;
      history.replaceState(null, '', hash);
    }
  }, { threshold: [0.1, 0.3, 0.5] });
  sections.forEach(s => observer.observe(s));
})();

// Handle hashchange (browser back/forward, external link clicks)
window.addEventListener('hashchange', () => {
  suppressScrollSpy(1200);
  const parts = location.hash.replace('#','').split('/');
  if (parts[0] === 'programme' && parts[1]) {
    const events = I18N.events;
    let idx = parts[1] === 'info' ? events.length
      : events.findIndex(e => e.date === slugToISO(parts[1]));
    if (idx === -1 || idx === _activeEventIdx) return;
    _activeEventIdx = idx;
    activateTab(getLang());
  }
  const target = document.getElementById(parts[0]);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});

// On page load — scroll to deep-linked section
if (window.location.hash) {
  suppressScrollSpy(1500);
  const root = window.location.hash.replace('#','').split('/')[0];
  const el = document.getElementById(root);
  if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300);
}

// --- Gallery Overlay ---
const _galleryPlaceholders = [
  { cls: "tall", gradient: "linear-gradient(135deg, #1a73e8, #e91e63)" },
  { cls: "",     gradient: "linear-gradient(135deg, #4CAF50, #2196F3)" },
  { cls: "wide", gradient: "linear-gradient(135deg, #FF5722, #FF9800)" },
  { cls: "",     gradient: "linear-gradient(135deg, #9C27B0, #E040FB)" },
  { cls: "tall", gradient: "linear-gradient(135deg, #00BCD4, #1a73e8)" },
  { cls: "",     gradient: "linear-gradient(135deg, #e91e63, #FF5722)" },
  { cls: "wide", gradient: "linear-gradient(135deg, #607D8B, #9C27B0)" },
  { cls: "",     gradient: "linear-gradient(135deg, #2196F3, #4CAF50)" },
  { cls: "tall", gradient: "linear-gradient(135deg, #FF9800, #e91e63)" },
  { cls: "",     gradient: "linear-gradient(135deg, #1a73e8, #00BCD4)" }
];

function renderGallery() {
  const grid = document.getElementById("gallery-masonry");
  if (!grid) return;
  grid.innerHTML = _galleryPlaceholders.map((p, i) => `
    <div class="gallery-card ${p.cls}">
      <div class="gallery-placeholder" style="background:${p.gradient}">
        <i class="fas fa-camera"></i>
      </div>
    </div>
  `).join("");
}

function toggleGallery() {
  const overlay = document.getElementById("gallery-overlay");
  if (!overlay) return;
  const isOpen = overlay.classList.toggle("open");
  document.body.style.overflow = isOpen ? "hidden" : "";
  // Close mobile nav if open
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) navLinks.classList.remove("open");
  // Render on first open
  if (isOpen && !overlay.dataset.rendered) {
    renderGallery();
    overlay.dataset.rendered = "1";
  }
}

// Close gallery on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const overlay = document.getElementById("gallery-overlay");
    if (overlay && overlay.classList.contains("open")) {
      toggleGallery();
    }
  }
});

// --- Resources Panel ---
function toggleResourcesPanel() {
  const panel = document.getElementById('resources-panel');
  const overlay = document.getElementById('resources-overlay');
  const isOpen = panel.classList.toggle('open');
  overlay.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  // Close mobile nav if open
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.classList.remove('open');
  // Reset to grid view when closing
  if (!isOpen) hideResourceDetail();
}

function showResourceDetail(id) {
  document.getElementById('resources-grid').style.display = 'none';
  document.getElementById('resource-detail-' + id).style.display = 'block';
}

function hideResourceDetail() {
  document.getElementById('resources-grid').style.display = '';
  document.querySelectorAll('.resource-detail').forEach(el => el.style.display = 'none');
}

// Close resources panel on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const panel = document.getElementById('resources-panel');
    if (panel && panel.classList.contains('open')) toggleResourcesPanel();
  }
});
