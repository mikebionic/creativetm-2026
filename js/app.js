// --- Team Data ---
const team = [
  {
    id: "selbi",
    name: "Selbi",
    role: "Creative",
    org: "",
    location: "Turkmenistan",
    avatar: "",
    color: "#E91E63",
    bio: "Creative content maker and storyteller, Selbi brings fresh perspectives to digital media through engaging short-form content and creative collaborations.",
    skills: ["Content Creation", "TikTok", "Creative Direction", "Storytelling"],
    social: { tiktok: "#" },
    projects: [
      { name: "Creative Content", desc: "Short-form video content and creative storytelling across platforms" }
    ]
  },
  {
    id: "katalina-midyan",
    name: "Katalina Midyan",
    role: "Creative",
    org: "",
    location: "Turkmenistan",
    avatar: "images/katalina-avatar.jpg",
    color: "#9C27B0",
    bio: "Katalina Midyan is a creative visionary blending art, fashion, and digital media. Her work explores the intersection of Central Asian culture and modern creative expression.",
    skills: ["Creative Direction", "Photography", "TikTok", "Fashion", "Digital Media"],
    social: { tiktok: "#" },
    projects: [
      { name: "Digital Creative Works", desc: "Photography, video content, and creative visual storytelling" }
    ]
  },
  {
    id: "myahri-gylyjova",
    name: "Myahri Gylyjova",
    role: "TechWomen Alumna / Digital Skills Trainer",
    org: "TechWomen",
    location: "Turkmenistan",
    avatar: "",
    color: "#2196F3",
    bio: "Myahri Gylyjova is a TechWomen alumna dedicated to expanding digital literacy and skills training in Turkmenistan. She empowers the next generation through technology education and mentorship programs.",
    skills: ["Digital Education", "Tech Training", "Mentorship", "Community Building", "TechWomen"],
    social: {},
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
    avatar: "",
    color: "#FF5722",
    bio: "Kemal Babayev is a multidisciplinary creator at Studio22, working across filmmaking, 3D visualization, and AI-generated art. His work pushes the boundaries of visual storytelling in Central Asia.",
    skills: ["Filmmaking", "3D Art", "AI Art", "Visual Effects", "Creative Direction"],
    social: {
      instagram: "https://instagram.com/ai_kema",
      instagram2: "https://instagram.com/studio22_tm"
    },
    projects: [
      { name: "Studio22", desc: "Creative studio for film production, 3D visualization, and digital art" },
      { name: "AI Art Explorations", desc: "Generating art and visuals using AI tools and creative workflows" }
    ]
  },
  {
    id: "batyr-rejepov",
    name: "Batyr Rejepov",
    role: "AI Specialist",
    org: "",
    location: "Turkmenistan",
    avatar: "",
    color: "#00BCD4",
    bio: "Batyr Rejepov specializes in artificial intelligence applications for creative industries. He explores how AI can augment human creativity and open new frontiers in digital art and media.",
    skills: ["Artificial Intelligence", "Machine Learning", "AI Art", "Digital Innovation"],
    social: { instagram: "https://instagram.com/b.rejepov_ai" },
    projects: [
      { name: "AI Creative Tools", desc: "Developing and applying AI tools for creative production and art generation" }
    ]
  },
  {
    id: "vasiliy",
    name: "Vasiliy",
    role: "Creative Agency Founder",
    org: "Jam Creative Agency",
    location: "Turkmenistan",
    avatar: "images/vasiliy-avatar.jpg",
    color: "#4CAF50",
    bio: "Vasiliy is the founder of Jam Creative Agency, delivering branding, design, and creative strategy for clients across Turkmenistan and Central Asia.",
    skills: ["Branding", "Creative Strategy", "Design", "Agency Management", "Marketing"],
    social: { instagram: "https://instagram.com/jam_tm_creative" },
    projects: [
      { name: "Jam Creative Agency", desc: "Full-service creative agency specializing in branding, design, and marketing strategy" }
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
  if (s.tiktok) icons.push(`<a href="${s.tiktok}" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>`);
  if (s.linkedin) icons.push(`<a href="${s.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`);
  return icons.join("");
}

function skillsHTML(skills) {
  return skills.map(s => `<span class="tag">${s}</span>`).join("");
}

function renderCards() {
  const grid = document.getElementById("team-grid");
  grid.innerHTML = team.map(m => `
    <div class="card" onclick="openModal('${m.id}')">
      ${avatarHTML(m)}
      <h3>${m.name}</h3>
      <p class="card-role">${m.role}</p>
      ${m.org ? `<p class="card-org">${m.org}</p>` : ""}
      <div class="card-skills">${skillsHTML(m.skills.slice(0, 3))}</div>
      <div class="card-social">${socialHTML(m.social)}</div>
    </div>
  `).join("");
}

// --- Modal ---
function openModal(id) {
  const m = team.find(t => t.id === id);
  if (!m) return;
  const el = document.getElementById("modal-content");
  el.innerHTML = `
    <div class="modal-header" style="border-left: 4px solid ${m.color}">
      ${avatarHTML(m, 120)}
      <div class="modal-info">
        <h2>${m.name}</h2>
        <p class="modal-role">${m.role}</p>
        ${m.org ? `<p class="modal-org"><i class="fas fa-building"></i> ${m.org}</p>` : ""}
        <p class="modal-loc"><i class="fas fa-map-marker-alt"></i> ${m.location}</p>
        <div class="modal-social">${socialHTML(m.social)}</div>
      </div>
    </div>
    <div class="modal-body">
      <p>${m.bio}</p>
      <div class="modal-skills">${skillsHTML(m.skills)}</div>
      ${m.projects.length ? `
        <h3>Projects</h3>
        <div class="projects">
          ${m.projects.map(p => `
            <div class="project" style="border-left-color:${m.color}">
              <strong>${p.name}</strong>
              <p>${p.desc}</p>
            </div>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
  document.getElementById("member-modal").classList.add("open");
  document.getElementById("modal-backdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("member-modal").classList.remove("open");
  document.getElementById("modal-backdrop").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

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

// --- Navbar scroll effect ---
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// --- Smooth scroll ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".nav-links").classList.remove("open");
  });
});

// --- Init ---
renderCards();
