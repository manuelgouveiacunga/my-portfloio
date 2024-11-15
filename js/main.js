// Dados dos projetos
const projects = [
    {
        title: "Projeto 1",
        description: "Descrição do projeto 1",
        image: "img/background-01.jpeg",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "#"
    },
    {
        title: "Projeto 2",
        description: "Descrição do projeto 2",
        image: "img/background-01.jpeg",
        technologies: ["Bootstrap", "jQuery"],
        link: "#"
    },
    {
        title: "Projeto 3",
        description: "Descrição do projeto 3",
        image: "img/background-01.jpeg",
        technologies: ["React", "Node.js"],
        link: "#"
    }
];

// Função para carregar os projetos
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

// Manipulação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});

// Botão voltar ao topo
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

// Smooth scroll para links internos
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

// Event Listeners
window.addEventListener('scroll', handleScroll);
backToTop.addEventListener('click', scrollToTop);
window.addEventListener('load', () => {
    loadProjects();
    initSmoothScroll();
});