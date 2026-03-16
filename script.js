// Translations
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_articles: "Publications",
        nav_collabs: "Career",
        nav_blog: "Research Log",
        hero_title: "David Ochoa Resendiz",
        hero_subtitle: "PhD Researcher | Computational Chemistry | Data Science",
        hero_cta: "View Publications",
        contact_btn: "Contact Me",
        about_title: "About Me",
        about_subtitle: "PhD in Chemical Sciences with 10+ years in computational thermochemistry, ab initio modeling, and data analysis.",
        about_role: "Professional Summary",
        about_text_1: "Doctor en Ciencias (BUAP) with 10+ years in computational thermochemistry, ab initio modeling, and experimental validation. Led high-performance supercomputing projects (Gaussian, ORCA, Molpro) and published 6 international articles. Technical Lead at the Laboratorio Nacional de Supercómputo (2024). Solid skills in Python/Bash, NumPy, SciPy, Matplotlib, MySQL, and Git. Teaching experience (2015–2022) with >95% satisfaction. B2 English and research stay at the University of Oxford, UK.",
        edu_title: "Education",
        edu_phd: "PhD in Chemical Sciences",
        edu_phd_thesis: 'Thesis: "Revisión del método G4 para el cálculo teórico de entalpías de formación"',
        edu_master_ai: "M.Sc. in Artificial Intelligence",
        edu_master_eng: "M.Sc. in Engineering Sciences",
        edu_master_eng_thesis: 'Thesis: "Theoretical-experimental study of dissociation routes in methyl acrylate and N,N-dimethylformamide"',
        edu_chem_eng: "B.Sc. Chemical Engineering",
        edu_chem_eng_school: "IT Zacatepec · TecNM",
        edu_chem_eng_desc: "Graduated with Honors — Mención Honorífica",
        skills_title: "Technical Proficiency",
        stat_articles: "Indexed Articles",
        stat_exp: "Years R&D",
        stat_phd: "Chemical Sciences",
        stat_avg_if: "Avg. Impact Factor",
        stat_journals: "Journals",
        skill_cat_sci: "Scientific Computing",
        skill_cat_data: "Data Science",
        skill_cat_dev: "Development",
        articles_title: "Scientific Publications",
        articles_subtitle: "Research in indexed international journals.",
        art_1_desc: "Specialized G4 composite method for computing formation enthalpies of nitrophenyl and nitrogen-heterocycle organic compounds.",
        art_2_desc: "Combining experimental calorimetry and ab initio methods to determine thermochemical properties of thiophenemethanol isomers.",
        art_3_desc: "Synchrotron radiation and ab initio study of ethyl formate photodissociation at 193 nm — hydrogen elimination and secondary dissociation pathways.",
        art_4_desc: "Ab initio characterization of halogen bonding and rotational disorder of Cl₂ inside clathrate hydrate cages.",
        art_5_desc: "Real-space QTAIM analysis of halogen bonds formed by Cl₂ in clathrate hydrate cages.",
        art_6_desc: "First computational evidence demonstrating halogen bonding interactions within clathrate cages using high-level ab initio methods.",
        // Career page
        collabs_title: "Trajectory & Career",
        collabs_subtitle: "Supervision, Collaborations, Research Stays & Personal Interests.",
        collabs_active_title: "Active Collaborations",
        collab_role_primary: "Research Collaborator",
        collab_quinto_desc: "Photodissociation dynamics, synchrotron-radiation experiments and ab initio calculations on organic molecules.",
        collab_ramon_desc: "Ab initio potential energy surfaces, halogen bonding in clathrate hydrates, and photophysical processes.",
        thesis_title: "Thesis Supervision",
        thesis_title_full: "Graduated Students & Thesis Supervision",
        thesis_badge_codirected: "Co-directed",
        thesis_rodrigo_lic: "Chemical Engineering — Graduated with Mención Honorífica · IT Zacatepec · 2023",
        stays_title: "Research Stays",
        stay_oxford_desc: "Fragmentation dynamics via mass spectrometry and photoinduced reaction dynamics in molecules with peptide bonds. Funded by CONACYT Mixed Scholarship.",
        stay_ciq_desc: "Ab initio methodologies for potential energy surfaces, halogen bonding in clathrates, and photophysical processes in methyl acrylate.",
        awards_title: "Awards & Distinctions",
        award_1: "Mención Honorífica — Bachelor's thesis oral exam · TecNM / IT Zacatepec (2015)",
        award_2: "CONACYT Scholarship for Master's studies (2016–2018)",
        award_3: "CONAHCYT Scholarship for Doctoral studies (2021–2025)",
        award_4: "CONACYT Mixed Scholarship — Research stay at University of Oxford (2018)",
        award_5: "CONACYT Scholarship for undergraduate research (2014–2015)",
        award_6: "1st Place — III Feria de Ciencias Experimentales, Zacatepec, Morelos (2011)",
        interests_title: "Personal Interests",
        interest_chess_title: "Chess — FIDE Arena IM",
        interest_chess_desc: "International Master FIDE Arena. View FIDE profile.",
        interest_yt_title: "Compendio de Clases",
        interest_yt_desc: "Science content creator · 22k+ subscribers on YouTube.",
        interest_nomada_title: "Revista Nómada",
        interest_nomada_desc: "Programmer & editor for a travel guide built with Node.js + web scraping.",
        // Blog
        blog_title: "Research Log",
        blog_subtitle: "Latest insights, methodology updates, and community news.",
        blog_1_title: "Optimizing Basis Sets for Large Scale Systems",
        blog_1_desc: "A look into the trade-offs between accuracy and computational cost when dealing with macromolecules...",
        blog_2_title: "Python vs. Fortran in 2026",
        blog_2_desc: "Why modern Python libraries are closing the gap in high-performance computing pipelines.",
        blog_3_title: "Chess & Strategy",
        blog_3_desc: "How competitive chess influences problem-solving in computational chemistry.",
        footer_credits: "Design by Antigravity.",
        lang_btn: "ESPAÑOL",

        // Home (index)
        home_kicker: "Computational science · Software · Teaching",
        home_badge_1: "Computational chemistry",
        home_badge_2: "Software engineering",
        home_badge_3: "Data Science",
        home_cta_career: "View Career",
        home_exp_kicker_1: "Teaching",
        home_exp_title_1: "University instructor",
        home_exp_desc_1: "Physical chemistry, mathematics and scientific programming (2015–2022) with a hands-on approach.",
        home_exp_kicker_2: "Research",
        home_exp_title_2: "Ab initio modeling & thermochemistry",
        home_exp_desc_2: "Potential energy surfaces, fragmentation dynamics, and experimental validation.",
        home_exp_kicker_3: "Software",
        home_exp_title_3: "Automation & tooling",
        home_exp_desc_3: "Python, Bash, Node.js and reproducible pipelines for research and web products.",
        home_focus_title: "What I work on",
        home_focus_subtitle: "Three lanes that connect science and software in a practical way.",
        home_focus_1_title: "Methods & models",
        home_focus_1_desc: "Ab initio calculations, thermochemical analysis, and computational strategy design.",
        home_focus_2_title: "HPC & reproducibility",
        home_focus_2_desc: "Automation, controlled environments, and workflows you can run and audit.",
        home_focus_3_title: "Product & outreach",
        home_focus_3_desc: "Web tools, practical engineering, and educational content with impact.",
        home_links_title: "Quick links",
        home_links_subtitle: "The fastest way to understand my work.",
        home_links_1_title: "Publications",
        home_links_1_desc: "Indexed papers and DOI links.",
        home_links_2_title: "Career",
        home_links_2_desc: "Collaborations, research stays and distinctions.",
        home_links_3_title: "Research log",
        home_links_3_desc: "Notes and research updates.",
        home_links_4_title: "GitHub",
        home_links_4_desc: "Code, scripts and projects.",
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Acerca de Mí",
        nav_articles: "Publicaciones",
        nav_blog: "Bitácora",
        nav_collabs: "Trayectoria",
        hero_title: "David Ochoa Resendiz",
        hero_subtitle: "Doctor en Ciencias | Termoquímica Computacional | Ciencia de Datos",
        hero_cta: "Ver Publicaciones",
        contact_btn: "Contactar",
        about_title: "Acerca de Mí",
        about_subtitle: "Doctor en Ciencias Químicas con 10+ años en termoquímica computacional, modelado ab initio y análisis de datos.",
        about_role: "Resumen Profesional",
        about_text_1: "Doctor en Ciencias (BUAP) con 10+ años en termoquímica computacional, modelado ab initio y validación experimental. Líder de proyectos en supercómputo (Gaussian, ORCA, Molpro) con 6 artículos internacionales publicados. Líder Técnico en el LNS (2024). Competencias en Python/Bash, análisis de datos (NumPy, SciPy, Matplotlib), MySQL y Git. Docencia (2015–2022) con >95% de satisfacción. Inglés B2 y estancia en la Universidad de Oxford.",
        edu_title: "Educación",
        edu_phd: "Doctorado en Ciencias Químicas",
        edu_phd_thesis: 'Tesis: "Revisión del método G4 para el cálculo teórico de entalpías de formación"',
        edu_master_ai: "Maestría en Inteligencia Artificial",
        edu_master_eng: "Maestría en Ciencias de la Ingeniería",
        edu_master_eng_thesis: 'Tesis: "Estudio teórico-experimental de rutas de disociación en acrilato de metilo y N,N-dimetilformamida"',
        edu_chem_eng: "Ingeniería Química",
        edu_chem_eng_school: "IT Zacatepec · TecNM",
        edu_chem_eng_desc: "Titulado con Mención Honorífica",
        skills_title: "Dominio Técnico",
        stat_articles: "Artículos Indexados",
        stat_exp: "Años I+D",
        stat_phd: "Ciencias Químicas",
        stat_avg_if: "Factor de Impacto Prom.",
        stat_journals: "Revistas",
        skill_cat_sci: "Cómputo Científico",
        skill_cat_data: "Ciencia de Datos",
        skill_cat_dev: "Desarrollo",
        articles_title: "Publicaciones Científicas",
        articles_subtitle: "Investigación en revistas indexadas internacionales.",
        art_1_desc: "Método G4 especializado para el cálculo teórico de entalpías de formación para compuestos de nitrofenilo y heterociclos con nitrógeno.",
        art_2_desc: "Propiedades termoquímicas de 2- y 3-Tiofenometanol combinando calorimetría experimental y métodos ab initio.",
        art_3_desc: "Estudio con radiación de sincrotrón y cálculos ab initio de fotodisociación de formiato de etilo a 193 nm.",
        art_4_desc: "Caracterización ab initio de enlace halogenado y desorden rotacional de Cl₂ en jaulas de hidrato de clatrato.",
        art_5_desc: "Análisis QTAIM en espacio real de los enlaces halogenados de Cl₂ en jaulas de clatrato.",
        art_6_desc: "Primera evidencia computacional de interacciones halogenadas dentro de jaulas de clatratos con métodos ab initio de alto nivel.",
        // Career page
        collabs_title: "Trayectoria y Carrera",
        collabs_subtitle: "Supervisión, Colaboraciones, Estancias e Intereses Personales.",
        collabs_active_title: "Colaboraciones Activas",
        collab_role_primary: "Colaborador de Investigación",
        collab_quinto_desc: "Dinámica de fotodisociación, experimentos de radiación de sincrotrón y cálculos ab initio en moléculas orgánicas.",
        collab_ramon_desc: "Superficies de energía potencial ab initio, enlace halogenado en hidratos de clatrato y procesos fotofísicos.",
        thesis_title: "Dirección de Tesis",
        thesis_title_full: "Alumnos Titulados y Dirección de Tesis",
        thesis_badge_codirected: "Codirección",
        thesis_rodrigo_lic: "Ingeniería Química — Titulado con Mención Honorífica · IT Zacatepec · 2023",
        stays_title: "Estancias de Investigación",
        stay_oxford_desc: "Dinámica de fragmentación mediante espectrometría de masas y dinámica de reacciones fotoinducidas en moléculas con enlaces peptídicos. Financiada por Beca Mixta CONACYT.",
        stay_ciq_desc: "Metodologías ab initio para superficies de energía potencial, interacciones en clatratos y procesos fotofísicos en acrilato de metilo.",
        awards_title: "Premios y Distinciones",
        award_1: "Mención Honorífica — Examen oral de tesis de licenciatura · TecNM / IT Zacatepec (2015)",
        award_2: "Beca CONACYT para estudios de Maestría (2016–2018)",
        award_3: "Beca CONAHCYT para estudios de Doctorado (2021–2025)",
        award_4: "Beca Mixta CONACYT — Estancia en Universidad de Oxford (2018)",
        award_5: "Beca CONACYT para investigación en licenciatura (2014–2015)",
        award_6: "Primer lugar — III Feria de Ciencias Experimentales, Zacatepec, Morelos (2011)",
        interests_title: "Intereses Personales",
        interest_chess_title: "Ajedrez — Maestro Internacional FIDE Arena",
        interest_chess_desc: "Maestro Internacional FIDE Arena. Ver perfil FIDE.",
        interest_yt_title: "Compendio de Clases",
        interest_yt_desc: "Creador de contenido científico · 22k+ suscriptores en YouTube.",
        interest_nomada_title: "Revista Nómada",
        interest_nomada_desc: "Programador y editor de guía turística desarrollada con Node.js y web scraping.",
        // Blog
        blog_title: "Bitácora de Investigación",
        blog_subtitle: "Últimas ideas, actualizaciones metodológicas y noticias de la comunidad.",
        blog_1_title: "Optimizando Conjuntos de Base para Sistemas a Gran Escala",
        blog_1_desc: "Un vistazo a las compensaciones entre precisión y costo computacional al tratar con macromoléculas...",
        blog_2_title: "Python vs. Fortran en 2026",
        blog_2_desc: "Por qué las bibliotecas modernas de Python están cerrando la brecha en pipelines de alto rendimiento.",
        blog_3_title: "Ajedrez y Estrategia",
        blog_3_desc: "Cómo el ajedrez competitivo influye en la resolución de problemas en química computacional.",
        footer_credits: "Diseño por Antigravity.",
        lang_btn: "ENGLISH",

        // Home (index)
        home_kicker: "Ciencia computacional · Software · Docencia",
        home_badge_1: "Química computacional",
        home_badge_2: "Ingeniería de software",
        home_badge_3: "Ciencia de datos",
        home_cta_career: "Ver Trayectoria",
        home_exp_kicker_1: "Docencia",
        home_exp_title_1: "Profesor universitario",
        home_exp_desc_1: "Físico-química, matemáticas y programación científica (2015–2022) con enfoque práctico.",
        home_exp_kicker_2: "Investigación",
        home_exp_title_2: "Modelado ab initio y termoquímica",
        home_exp_desc_2: "Superficies de energía potencial, dinámica de fragmentación y validación experimental.",
        home_exp_kicker_3: "Software",
        home_exp_title_3: "Automatización y herramientas",
        home_exp_desc_3: "Python, Bash, Node.js y pipelines reproducibles para investigación y productos web.",
        home_focus_title: "En qué trabajo",
        home_focus_subtitle: "Tres frentes que conectan ciencia y software de forma directa.",
        home_focus_1_title: "Métodos y modelos",
        home_focus_1_desc: "Cálculos ab initio, análisis termoquímico y diseño de estrategias computacionales.",
        home_focus_2_title: "HPC y reproducibilidad",
        home_focus_2_desc: "Automatización, entornos controlados y workflows que se pueden correr y auditar.",
        home_focus_3_title: "Producto y divulgación",
        home_focus_3_desc: "Herramientas web, ingeniería práctica y contenido educativo con impacto.",
        home_links_title: "Accesos rápidos",
        home_links_subtitle: "Lo más útil para entender mi trabajo en 60 segundos.",
        home_links_1_title: "Publicaciones",
        home_links_1_desc: "Artículos indexados y enlaces DOI.",
        home_links_2_title: "Trayectoria",
        home_links_2_desc: "Colaboraciones, estancias y distinciones.",
        home_links_3_title: "Bitácora",
        home_links_3_desc: "Notas y actualizaciones de investigación.",
        home_links_4_title: "GitHub",
        home_links_4_desc: "Código, scripts y proyectos.",
    }
};

let currentLang = 'es';

function renderLangButton(lang) {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;

    // Orden fijo: Español primero, luego Inglés
    btn.innerHTML = `
        <span class="lang-opt ${lang === 'es' ? 'active' : ''}" data-lang="es">ESPAÑOL</span>
        <span class="lang-sep">/</span>
        <span class="lang-opt ${lang === 'en' ? 'active' : ''}" data-lang="en">ENGLISH</span>
    `.trim();
}

function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Actualiza el botón de idioma (ES primero, EN segundo)
    renderLangButton(lang);

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Language Toggle Event
const langBtn = document.getElementById('lang-toggle');
if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        const target = e.target;
        const requested = target && target.dataset ? target.dataset.lang : null;
        if (requested === 'es' || requested === 'en') {
            updateLanguage(requested);
            return;
        }

        // fallback: alternar si se hace clic fuera de las opciones
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

// Set active navigation based on current page and default language to Spanish
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (href === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });

    // Idioma por defecto: español
    updateLanguage('es');
});
