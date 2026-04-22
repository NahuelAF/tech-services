/* ============================================================
   NAHUEL.TECH — script.js
   ============================================================ */
'use strict';

/* ──────────────────────────────────────────────────────────────
   DATOS SERVICIOS
   ────────────────────────────────────────────────────────────── */
const SVC = {
  pc: {
    icon: '💻',
    title: 'PC / Notebooks',
    desc: '¿Tu computadora va lenta, se congela, se apaga sola o no enciende? Analizo el problema, te explico qué tiene y lo soluciono en tu casa sin que vos te muevas.',
    tasks: [
      'Formateo e instalación de Windows / Linux',
      'Optimización y limpieza de software',
      'Limpieza interna (polvo, ventiladores)',
      'Cambio de pasta térmica',
      'Reemplazo de disco rígido por SSD',
      'Ampliación de memoria RAM',
      'Recuperación de archivos',
      'Instalación de programas y antivirus',
      'Diagnóstico sin costo previo',
    ],
    gallery: [
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Limpieza+PC', alt: 'Limpieza interna PC' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=SSD+Upgrade', alt: 'Upgrade SSD' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Windows', alt: 'Instalación Windows' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=RAM', alt: 'Ampliación RAM' },
    ],
    wa: 'Hola%20Nahuel!%20Necesito%20ayuda%20con%20mi%20PC%20o%20notebook',
  },
  redes: {
    icon: '📡',
    title: 'Redes e Internet',
    desc: '¿El WiFi no llega bien, la conexión se corta o necesitás una red confiable para tu negocio? Diseño e instalo redes que realmente funcionan. También trabajo con Starlink.',
    tasks: [
      'Diagnóstico de red existente',
      'Instalación de routers y access points',
      'Extensión de cobertura WiFi (mesh)',
      'Cableado estructurado UTP Cat5e/6',
      'Configuración de Starlink y antenas',
      'Segmentación de red por zonas',
      'VPN y redes seguras para empresas',
      'Configuración de firewall básico',
      'Mantenimiento mensual',
    ],
    gallery: [
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Red+Oficina', alt: 'Red en oficina' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Starlink', alt: 'Instalación Starlink' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Cableado', alt: 'Cableado estructurado' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Access+Point', alt: 'Access Point' },
    ],
    wa: 'Hola%20Nahuel!%20Necesito%20ayuda%20con%20WiFi%20o%20red',
  },
  camaras: {
    icon: '📷',
    title: 'Cámaras de Seguridad',
    desc: '¿Querés ver qué pasa en tu casa o negocio desde el celular, en tiempo real? Instalo sistemas de cámaras IP sin contratos ni mensualidades obligatorias.',
    tasks: [
      'Relevamiento y diseño del sistema',
      'Instalación de cámaras IP (interior/exterior)',
      'Configuración de DVR/NVR',
      'Acceso remoto desde celular y PC',
      'Alertas de movimiento',
      'Almacenamiento en nube o local',
      'Integración con sistemas de alarma',
      'Capacitación de uso',
      'Garantía post-instalación',
    ],
    gallery: [
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Cámaras+Comercio', alt: 'Cámaras en comercio' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Exterior', alt: 'Cámara exterior' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Monitor+CCTV', alt: 'Monitor CCTV' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=App+Celular', alt: 'App en celular' },
    ],
    wa: 'Hola%20Nahuel!%20Quiero%20instalar%20cámaras%20de%20seguridad',
  },
  smarttv: {
    icon: '📺',
    title: 'Smart TV y Dispositivos',
    desc: '¿Tu Smart TV va lenta, no conecta, o querés configurar Chromecast / Fire Stick? Te dejo todo listo para disfrutar sin complicaciones.',
    tasks: [
      'Configuración inicial de Smart TV',
      'Conexión y optimización WiFi en tele',
      'Instalación de apps (Netflix, YouTube, etc.)',
      'Configuración de Chromecast / Fire Stick',
      'Actualización de firmware',
      'Configuración de home theater',
      'Ajuste de imagen y sonido',
      'Vinculación con cuentas de streaming',
      'Asesoramiento en compra de dispositivos',
    ],
    gallery: [
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Smart+TV', alt: 'Configuración Smart TV' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Home+Theater', alt: 'Home Theater' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Chromecast', alt: 'Chromecast' },
      { src: 'https://placehold.co/300x200/f0fdf4/10b981?text=Streaming', alt: 'Streaming setup' },
    ],
    wa: 'Hola%20Nahuel!%20Necesito%20ayuda%20con%20mi%20Smart%20TV',
  },
  web: {
    icon: '🌐',
    title: 'Desarrollo Web',
    desc: '¿Tu negocio no aparece en internet o tu web quedó desactualizada? Una buena página genera clientes mientras dormís. Abajo podés ver ejemplos de proyectos reales.',
    tasks: [
      'Landing pages y sitios institucionales',
      'Diseño mobile-first y responsive',
      'SEO básico para Google',
      'Integración con WhatsApp y redes',
      'Formulario de contacto',
      'Google Maps y reseñas',
      'Hosting y dominio (asesoramiento)',
      'Actualizaciones y mantenimiento',
      'Velocidad optimizada',
    ],
    isWeb: true,
    projects: [
      { img: 'https://placehold.co/180x100/f0fdf4/10b981?text=Proyecto+1', name: 'Restaurante El Rincón', desc: 'Landing page con menú y reservas', url: 'https://ejemplo.com/1' },
      { img: 'https://placehold.co/180x100/f0fdf4/10b981?text=Proyecto+2', name: 'Ferretería Don José',  desc: 'Catálogo online + WhatsApp',     url: 'https://ejemplo.com/2' },
      { img: 'https://placehold.co/180x100/f0fdf4/10b981?text=Proyecto+3', name: 'Estudio Contable',     desc: 'Web institucional profesional',  url: 'https://ejemplo.com/3' },
      { img: 'https://placehold.co/180x100/f0fdf4/10b981?text=Proyecto+4', name: 'Boutique Moda',        desc: 'Tienda con catálogo y pedidos',  url: 'https://ejemplo.com/4' },
    ],
    wa: 'Hola%20Nahuel!%20Me%20interesa%20tener%20una%20página%20web',
  },
};

/* ──────────────────────────────────────────────────────────────
   DOM
   ────────────────────────────────────────────────────────────── */
const navbar       = document.getElementById('navbar');
const hamburger    = document.getElementById('hamburger');
const navLinks     = document.getElementById('navLinks');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalBody    = document.getElementById('modalBody');
const yearEl       = document.getElementById('year');
const twText       = document.getElementById('typewriterText');
const speechBubble = document.getElementById('speechBubble');
const speechText   = document.getElementById('speechText');
const mClosed      = document.getElementById('mClosed');
const mOpen        = document.getElementById('mOpen');
const mTeeth       = document.getElementById('mTeeth');

/* ──────────────────────────────────────────────────────────────
   YEAR
   ────────────────────────────────────────────────────────────── */
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ──────────────────────────────────────────────────────────────
   NAVBAR SCROLL
   ────────────────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 36);
}, { passive: true });

/* ──────────────────────────────────────────────────────────────
   HAMBURGER
   ────────────────────────────────────────────────────────────── */
const openMenu  = () => { navLinks.classList.add('open'); hamburger.classList.add('active'); hamburger.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; };
const closeMenu = () => { navLinks.classList.remove('open'); hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; };

hamburger.addEventListener('click', () => navLinks.classList.contains('open') ? closeMenu() : openMenu());
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', e => {
  if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
});

/* ──────────────────────────────────────────────────────────────
   MOUTH ANIMATION
   ────────────────────────────────────────────────────────────── */
let mouthInterval = null;
let isTalking = false;

function startTalking() {
  if (isTalking) return;
  isTalking = true;
  let open = false;
  mouthInterval = setInterval(() => {
    open = !open;
    if (mClosed)  mClosed.setAttribute('opacity', open ? '0' : '1');
    if (mOpen)    mOpen.setAttribute('opacity', open ? '0.9' : '0');
    if (mTeeth)   mTeeth.setAttribute('opacity', open ? '1' : '0');
  }, 140);
}

function stopTalking() {
  if (!isTalking) return;
  clearInterval(mouthInterval);
  isTalking = false;
  if (mClosed) mClosed.setAttribute('opacity', '1');
  if (mOpen)   mOpen.setAttribute('opacity', '0');
  if (mTeeth)  mTeeth.setAttribute('opacity', '0');
}

/* ──────────────────────────────────────────────────────────────
   TYPEWRITER with mouth + speech bubble
   ────────────────────────────────────────────────────────────── */
const PHRASES = [
  '¿Tu PC\nestá lenta?',
  '¿El WiFi\nno llega bien?',
  '¿Querés cámaras\nen tu negocio?',
  '¿Tu Smart TV\nno conecta?',
  '¿Tu negocio\nnecesita web?',
  'Yo te\najudo hoy.',
];

const BUBBLES = [
  '¡Eso tiene solución! 💻',
  '¡Lo extiendo por toda la casa! 📡',
  '¡Te lo instalo hoy! 📷',
  '¡Config en 1 hora! 📺',
  '¡Hago tu web! 🌐',
  '¡Escribime! 👋',
];

let phraseIdx = 0;
let charIdx   = 0;
let isDeleting = false;
let twTimer;

function renderTypewriter() {
  if (!twText) return;
  const raw = PHRASES[phraseIdx];
  const display = raw.replace(/\n/g, '<br>');
  const current = isDeleting
    ? display.slice(0, Math.max(0, charIdx))
    : display.slice(0, charIdx);

  twText.innerHTML = current;

  let speed = isDeleting ? 40 : 70;

  if (!isDeleting && charIdx >= display.length) {
    // Pause at end
    stopTalking();
    if (speechBubble) {
      speechText.textContent = BUBBLES[phraseIdx];
      speechBubble.style.opacity = '1';
      speechBubble.style.transform = 'none';
    }
    twTimer = setTimeout(() => {
      if (speechBubble) {
        speechBubble.style.opacity = '0';
        speechBubble.style.transform = 'translateX(-6px)';
      }
      isDeleting = true;
      startTalking();
      renderTypewriter();
    }, 2200);
    return;
  }

  if (isDeleting && charIdx <= 0) {
    isDeleting = false;
    phraseIdx  = (phraseIdx + 1) % PHRASES.length;
    stopTalking();
    twTimer = setTimeout(renderTypewriter, 400);
    return;
  }

  charIdx += isDeleting ? -1 : 1;
  if (!isDeleting && charIdx > 0) startTalking();

  twTimer = setTimeout(renderTypewriter, speed);
}

// Start typewriter after a short delay
setTimeout(() => {
  renderTypewriter();
  if (speechBubble) {
    speechBubble.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  }
}, 800);

/* ──────────────────────────────────────────────────────────────
   MODALES
   ────────────────────────────────────────────────────────────── */
function buildModal(key) {
  const d = SVC[key];
  if (!d) return '';

  const tasks = d.tasks.map(t => `<li>${t}</li>`).join('');

  let media = '';
  if (d.isWeb && d.projects) {
    const cards = d.projects.map(p => `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="wpc">
        <img src="${p.img}" alt="${p.name}" loading="lazy" width="180" height="100"/>
        <div class="wpc-info"><strong>${p.name}</strong><span>${p.desc}</span></div>
        <span class="wpc-link">Ver →</span>
      </a>`).join('');
    media = `<p class="modal-list-title">Ejemplos de proyectos</p><div class="web-projects">${cards}</div>`;
  } else if (d.gallery) {
    const imgs = d.gallery.map(g => `<img src="${g.src}" alt="${g.alt}" loading="lazy" width="300" height="200"/>`).join('');
    media = `<p class="modal-list-title">Galería de trabajos</p><div class="modal-gallery">${imgs}</div>`;
  }

  return `
    <div class="modal-icon">${d.icon}</div>
    <h2 class="modal-title" id="modalTitle">${d.title}</h2>
    <p class="modal-desc">${d.desc}</p>
    <p class="modal-list-title">¿Qué incluye?</p>
    <ul class="modal-list">${tasks}</ul>
    ${media}
    <a href="https://wa.me/5493758556569?text=${d.wa}"
       class="btn-primary" style="width:100%;justify-content:center;"
       target="_blank" rel="noopener noreferrer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Consultar este servicio
    </a>`;
}

document.querySelectorAll('.scard').forEach(card => {
  const open = () => {
    const html = buildModal(card.dataset.service);
    if (!html) return;
    modalBody.innerHTML = html;
    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modalClose.focus());
  };
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
});

const closeModal = () => { modalOverlay.hidden = true; document.body.style.overflow = ''; };
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modalOverlay.hidden) closeModal(); });

/* ──────────────────────────────────────────────────────────────
   INTERSECTION OBSERVER — fade-in-section
   ────────────────────────────────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

document.querySelectorAll('.fade-in-section').forEach(el => io.observe(el));

/* ──────────────────────────────────────────────────────────────
   STAGGER
   ────────────────────────────────────────────────────────────── */
document.querySelectorAll('.cards-grid .scard').forEach((el, i) => el.style.setProperty('--d', `${i * 0.07}s`));
document.querySelectorAll('.porq-right .bitem').forEach((el, i) => el.style.setProperty('--d', `${i * 0.06}s`));

/* ──────────────────────────────────────────────────────────────
   SMOOTH SCROLL
   ────────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const t = document.querySelector(id);
    if (!t) return;
    e.preventDefault();
    const navH = 68;
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  });
});

/* ──────────────────────────────────────────────────────────────
   WA FLOAT — hide at footer
   ────────────────────────────────────────────────────────────── */
const waFloat = document.getElementById('waFloat');
const footer  = document.querySelector('.footer');
if (waFloat && footer) {
  new IntersectionObserver(([e]) => {
    waFloat.style.opacity = e.isIntersecting ? '0' : '';
    waFloat.style.pointerEvents = e.isIntersecting ? 'none' : '';
  }, { threshold: 0.1 }).observe(footer);
}

/* ──────────────────────────────────────────────────────────────
   ACTIVE NAV
   ────────────────────────────────────────────────────────────── */
const secs = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a[href^="#"]');
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => { a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--green-d)' : ''; });
    }
  });
}, { threshold: 0.45 }).observe(document.querySelector('section[id]') || document.body);
secs.forEach(s => {
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) navAs.forEach(a => { a.style.color = a.getAttribute('href') === `#${s.id}` ? 'var(--green-d)' : ''; });
  }, { threshold: 0.4 }).observe(s);
});