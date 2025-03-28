//Criando o meu objeto pessoa

function Person(foto, nome, area, texto) {
    this.foto = foto;
    this.nome = nome;
    this.area = area;
    this.texto = texto;
}

const anaSouza = new Person(
    "./imgs/pessoa01.jpg",
    "Ana Souza", 
    "Web Developer", 
    "Ana é uma desenvolvedora apaixonada por tecnologia e inovação. Com experiência em HTML, CSS e JavaScript, ela cria interfaces responsivas e intuitivas. Seu foco é garantir que cada projeto tenha um design moderno e acessível, proporcionando a melhor experiência para os usuários.");

const beatrizLima = new Person(
    "./imgs/pessoa02.jpg",
    "Beatriz Lima", 
    "Frontend Developer", 
    "Beatriz adora transformar conceitos visuais em código funcional. Utilizando frameworks como React e Vue.js, ela desenvolve aplicações interativas e dinâmicas. Sua abordagem prioriza acessibilidade e performance, garantindo sites rápidos e eficientes para todos os dispositivos.");

const eduardoRamos = new Person(
    "./imgs/pessoa03.jpg",
    "Eduardo Ramos", 
    "Backend Developer", 
    "Eduardo é responsável por construir sistemas robustos e escaláveis. Com domínio em Node.js e Python, ele garante que os servidores sejam rápidos e seguros. Seu foco está na eficiência do backend, possibilitando o desenvolvimento de aplicações modernas e de alto desempenho.");

const camilaRocha = new Person(
    "./imgs/pessoa04.jpg",
    "Camila Rocha", 
    "UI/UX Designer", 
    "Camila se especializou em criar experiências digitais cativantes. Seu trabalho envolve pesquisa de usabilidade, design de interface e prototipação de alta fidelidade. Com um olhar atento aos detalhes, ela busca sempre unir estética e funcionalidade para otimizar a jornada do usuário.");

const setas = document.querySelectorAll(".seta")

setas.forEach(elem => {
    elem.addEventListener("click", () => {
        
    })
})