// Translations
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_articles: "Publications",
        nav_collabs: "Career",
        hero_title: "David Ochoa Resendiz",
        hero_subtitle: "PhD Researcher | Computational Chemistry | Data Science",
        hero_cta: "Learn More",
        contact_btn: "Contact Me",
        about_title: "About Me",
        about_subtitle: "PhD in Sciences with 9+ years in computational thermochemistry and ab initio modeling.",
        about_role: "Professional Summary",
        about_text_1: "I have led high-performance computing projects (Gaussian, ORCA, Molpro) and published 6 international articles. Solid competencies in Python/R, data analysis (NumPy, SciPy, Matplotlib), and pipeline design. I also have extensive teaching experience in mathematics and programming with >95% satisfaction. B2 English and research stay at the University of Oxford.",
        edu_title: "Education",
        edu_phd: "PhD in Chemical Sciences",
        edu_master_ai: "Masters in Artificial Intelligence",
        edu_master_eng: "Masters in Engineering Sciences",
        skills_title: "Technical Skills",
        skills_text: "Python, R, MySQL, Bash, Git, UNIX, TensorFlow, Scikit-learn, LaTeX, C++, Gaussian, ORCA, MolPro, Vibe Coding.",
        articles_title: "Scientific Publications",
        articles_subtitle: "Research in indexed international journals.",
        art_1_desc: "Computing formation enthalpies of nitrophenyl and nitrogen-heterocycle organic compounds.",
        art_2_desc: "Eluding incomplete combustion issues through combining experimental and computational methodologies.",
        art_3_desc: "Synchrotron radiation study and ab initio calculations on hydrogen elimination.",
        art_4_desc: "Study in chlorine clathrate hydrate cages.",
        art_5_desc: "A real space perspective.",
        art_6_desc: "Theoretical characterization of interactions.",
        collabs_title: "Trajectory & Interests",
        collabs_subtitle: "Supervision, Research Stays, and Personal Projects.",
        thesis_title: "Thesis Supervision",
        thesis_desc: "Co-directed 3 Bachelor's theses and 1 Master's thesis at IT Zacatepec (2023-2025).",
        stays_title: "Research Stays",
        stays_desc: "<strong>University of Oxford</strong> (2018) - Fragmentation dynamics.<br><strong>CIQ - UAEM</strong> (2014-Present) - Ab initio methodologies.",
        interests_title: "Personal Interests",
        interests_desc: "FIDE Arena International Master (Chess). Science Content Creator \"Compendio de Clases\" (22k+ subs).",
        footer_credits: "Design by Antigravity.",
        lang_btn: "ESPAÑOL",
        // New Keys
        stat_articles: "Indexed Articles",
        stat_exp: "Years R&D",
        stat_phd: "Chemical Sciences",
        skill_cat_sci: "Scientific Computing",
        skill_cat_data: "Data Science",
        skill_cat_dev: "Development",
        // Blog Keys
        nav_blog: "Research Log",
        blog_title: "Research Log",
        blog_subtitle: "Latest insights, methodology updates, and community news.",
        blog_1_title: "Optimizing Basis Sets for Large Scale Systems",
        blog_1_desc: "A look into the trade-offs between accuracy and computational cost when dealing with macromolecules...",
        blog_2_title: "Python vs. Fortran in 2026",
        blog_2_desc: "Why modern Python libraries are closing the gap in high-performance computing pipelines.",
        blog_3_title: "Chess & Strategy",
        blog_3_desc: "How competitive chess influences problem-solving in computational chemistry."
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Acerca de Mí",
        nav_articles: "Publicaciones",
        nav_blog: "Bitácora",
        nav_collabs: "Trayectoria",
        hero_title: "David Ochoa Resendiz",
        hero_subtitle: "Doctor en Ciencias | Termoquímica Computacional | Ciencia de Datos",
        hero_cta: "Ver Publicaciones", /* Changed from Conocer Más */
        contact_btn: "Contactar",
        about_title: "Acerca de Mí",
        about_subtitle: "Doctor en Ciencias con 9+ años en termoquímica computacional y modelado ab initio.",
        about_role: "Resumen Profesional",
        about_text_1: "He liderado proyectos de alto desempeño en supercómputo (Gaussian, ORCA, Molpro) y publicado 6 artículos internacionales. Competencias sólidas en Python/R, análisis de datos (NumPy, SciPy, Matplotlib) y diseño de pipelines. Inglés B2 y estancia en la Universidad de Oxford.",
        edu_title: "Educación",
        edu_phd: "Doctorado en Ciencias Químicas",
        edu_master_ai: "Maestría en Inteligencia Artificial",
        edu_master_eng: "Maestría en Ciencias de la Ingeniería",
        skills_title: "Dominio Técnico",
        skills_text: "Python, R, MySQL, Bash, Git, UNIX, TensorFlow, Scikit-learn, LaTeX, C++, Gaussian, ORCA, MolPro, Vibe Coding.",
        articles_title: "Publicaciones Científicas",
        articles_subtitle: "Investigación en revistas indexadas internacionales.",
        art_1_desc: "Cálculo teórico de entalpías de formación para compuestos de nitrofenilo y heterociclos de nitrógeno.",
        art_2_desc: "Propiedades termoquímicas de 2- y 3-Tiofenometanol combinando metodologías experimentales y computacionales.",
        art_3_desc: "Dinámica de fotodisociación de formiato de etilo basada en radiación de sincrotrón.",
        art_4_desc: "Estudio en jaulas de hidrato de clatrato de cloro.",
        art_5_desc: "Una perspectiva desde el espacio real.",
        art_6_desc: "Caracterización teórica de interacciones.",
        // Blog Keys
        blog_title: "Bitácora de Investigación",
        blog_subtitle: "Últimas ideas, actualizaciones metodológicas y noticias de la comunidad.",
        blog_1_title: "Optimizando Conjuntos de Base para Sistemas a Gran Escala",
        blog_1_desc: "Un vistazo a las compensaciones entre precisión y costo computacional al tratar con macromoléculas...",
        blog_2_title: "Python vs. Fortran en 2026",
        blog_2_desc: "Por qué las bibliotecas modernas de Python están cerrando la brecha en pipelines de alto rendimiento.",
        blog_3_title: "Ajedrez y Estrategia",
        blog_3_desc: "Cómo el ajedrez competitivo influye en la resolución de problemas en química computacional.",
        collabs_title: "Trayectoria e Intereses",
        collabs_subtitle: "Dirección de tesis, estancias y proyectos personales.",
        thesis_title: "Dirección de Tesis",
        thesis_desc: "Codirección de 3 tesis de licenciatura y 1 de maestría en IT Zacatepec (2023-2025).",
        stays_title: "Estancias de Investigación",
        stays_desc: "<strong>Universidad de Oxford</strong> (2018) - Dinámica de fragmentación.<br><strong>CIQ - UAEM</strong> (2014-Presente) - Metodologías ab initio.",
        interests_title: "Intereses Personales",
        interests_desc: "Maestro Internacional FIDE Arena (Ajedrez). Creador de contenido científico \"Compendio de Clases\" (22k+ subs).",
        footer_credits: "Diseño por Antigravity.",
        lang_btn: "ENGLISH",
        // New Keys
        stat_articles: "Artículos Indexados",
        stat_exp: "Años I+D",
        stat_phd: "Ciencias Químicas",
        skill_cat_sci: "Cómputo Científico",
        skill_cat_data: "Ciencia de Datos",
        skill_cat_dev: "Desarrollo"
    }
};

let currentLang = 'en';

function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update button text
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.innerText = translations[lang]['lang_btn'];

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Language Toggle Event
const langBtn = document.getElementById('lang-toggle');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'es' : 'en';
        updateLanguage(newLang);
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        // Add minimal styling for mobile menu when active
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(10, 14, 23, 0.95)';
            navLinks.style.width = '100%';
            navLinks.style.padding = '2rem';
            navLinks.style.textAlign = 'center';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        }
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Scroll Highlight Integration
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.hero h1, .hero p, .cta-btn, .section-title, .about-container, .article-card, .collab-card');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    revealElements.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }
    });
};

// Initial style for reveal elements to allow animation
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();
