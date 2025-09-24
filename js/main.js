const projects = [
    {
        title: "MEU PORTFÓLIO",
        description: "Aplicação web para exibir meus projetos e habilidades.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        link: "https://github.com/manuelgouveiacunga/my-portfloio"
    },
    {
        title: "GESTÃO DE TAREFAS",
        description: "Aplicação web para gerenciar tarefas diárias.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://github.com/manuelgouveiacunga/lista-todos"
    },
    {
        title: "CONTROLO DE FINANÇAS",
        description: "Aplicação web para controlar despesas e receitas.",
        technologies: ["HTML", "TailwindCss", "JavaScript", "React"],
        link: "https://github.com/manuelgouveiacunga/finance-control"
    },
    {
        title: "PERGUNTAS FREQUENTES",
        description: "Aplicação web para exibir perguntas frequentes.",
        technologies: ["React", "TailwindCss", "JavaScript"],
        link: "https://github.com/manuelgouveiacunga/faqs_swiftdrop"
    },
    {
        title: "DASHBOARD ADMIN",
        description: "Aplicação web para administração de usuários e conteúdo.",
        technologies: ["React", "Next.js", "JavaScript"],
        link: "https://github.com/manuelgouveiacunga/nextjs-dashboard"
    },
];

function loadProjects() {
    const container = document.getElementById('projectsContainer');
    projects.forEach(project => {
        const projectHTML = `
            <div class="col-md-4 mb-4">
                <div class="card project-card">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <div class="mb-3">
                            ${project.technologies.map(tech => 
                                `<span class="skill-badge">${tech}</span>`
                            ).join('')}
                        </div>
                        <a href="${project.link}" class="btn btn-primary">Ver Projeto</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += projectHTML;
    });
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});


const backToTop = document.getElementById('back-to-top');

function handleScroll() {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

window.addEventListener('scroll', handleScroll);
backToTop.addEventListener('click', scrollToTop);
window.addEventListener('load', () => {
    loadProjects();
    initSmoothScroll();
});

document.getElementById("ano").textContent = new Date().getFullYear();