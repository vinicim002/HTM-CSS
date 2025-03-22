const paineis = document.querySelectorAll(".painel");

for (let i = 0; i < paineis.length; i++) {
    paineis[i].addEventListener("click", () => {
        const accordion = paineis[i].parentElement; // Pegamos o .accordion que contém o painel e o <p>
        const paragrafo = accordion.querySelector(".accordion-description");
        const botaoImg = paineis[i].querySelector(".accordion-button img"); // Pegamos a imagem dentro do botão

        if (paragrafo) { // Verifica se o <p> existe
            paragrafo.classList.toggle("desativado");
            paragrafo.classList.toggle("ativado");

            // Alterna o src da imagem do botão
            if (paragrafo.classList.contains("ativado")) {
                botaoImg.src = "../assets/images/icon-minus.svg"; // Ícone de menos quando ativo
            } else {
                botaoImg.src = "../assets/images/icon-plus.svg"; // Ícone de mais quando fechado
            }
        }
    });
}
