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
    role: "Filmmaker / 3D Artist / AI Creator",
    org: "Studio22",
    location: "Turkmenistan",
    avatar: "images/kemal-avatar.jpg",
    color: "#FF5722",
    bio: "Kemal Babayev is a multidisciplinary creator at Studio22, working across filmmaking, 3D visualization, and AI-generated art. His work pushes the boundaries of visual storytelling in Central Asia.",
    skills: ["Filmmaking", "3D Art", "AI Art", "Visual Effects", "Creative Direction"],
    social: {
      instagram: "https://instagram.com/ai_kema",
      instagram2: "https://instagram.com/studio22_tm",
      email: "kemal.babayew@gmail.com"
    },
    projects: [
      { name: "Studio22", desc: "Creative studio for film production, 3D visualization, and digital art" },
      { name: "AI Art Explorations", desc: "Generating art and visuals using AI tools and creative workflows" }
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
    bio: "Vasiliy Andronov is the founder of Jam Creative Agency, delivering branding, design, and creative strategy for clients across Turkmenistan and Central Asia.",
    skills: ["Branding", "Creative Strategy", "Design", "Agency Management", "Marketing"],
    social: { instagram: "https://instagram.com/jam_tm_creative" },
    portfolio: [
      "images/portfolio/vasiliy/1.jpg",
      "images/portfolio/vasiliy/2.jpg",
      "images/portfolio/vasiliy/3.jpg",
      "images/portfolio/vasiliy/4.jpg"
    ],
    projects: [
      { name: "Jam Creative Agency", desc: "Full-service creative agency specializing in branding, design, and marketing strategy" }
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
    role: "Career Consultant & Trainer",
    org: "Technovation",
    location: "Turkmenistan",
    avatar: "images/alexandra-avatar.jpg",
    color: "#E040FB",
    bio: "Aleksandra Ahmedova is a career orientation specialist, trainer, and career consultant helping people find their professional path.",
    skills: ["Career Consulting", "Training", "Career Orientation", "Coaching"],
    social: {},
    projects: []
  },
  {
    id: "begench-rejepov",
    name: "Begench Rejepov",
    role: "Entrepreneur",
    org: "Biar Delivery",
    location: "Turkmenistan",
    avatar: "images/begench-avatar.jpg",
    color: "#795548",
    bio: "Begench Rejepov is an entrepreneur from Turkmenistan. He is the founder of Biar Delivery and co-founder of Hinlen Music.",
    skills: ["Entrepreneurship", "Business", "Music", "Delivery Services"],
    social: { instagram: "https://instagram.com/mr.biar" },
    projects: [
      { name: "Biar Delivery", desc: "Delivery service platform" },
      { name: "Hinlen Music", desc: "Music production and publishing" }
    ]
  },
  {
    id: "gayane-israyelyan",
    name: "Gayane Israyelyan",
    role: "Creative",
    org: "",
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
    role: "Creative",
    org: "",
    location: "Turkmenistan",
    avatar: "",
    color: "#3F51B5",
    bio: "Farhad Artykov is a creative professional from Turkmenistan, exploring innovative approaches to art and digital media.",
    skills: ["Creative", "Digital Media"],
    social: { instagram: "https://instagram.com/farhad_artykov" },
    projects: []
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

// --- Navbar scroll effect + hero pattern parallax ---
const _patternLayer = document.querySelector(".hero-pattern-layer");
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
  if (_patternLayer) _patternLayer.style.transform = `translateY(${window.scrollY * 0.3}px)`;
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
