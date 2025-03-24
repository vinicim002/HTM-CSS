// Definindo o JSON diretamente como uma variável (array de objetos)
const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];

const resultado = document.getElementById("media");
const habilidades = document.querySelectorAll(".habilidade");


window.addEventListener("DOMContentLoaded", () => {
    habilidades.forEach((habilidade, index) => {
        const h3 = document.createElement("h3");
        const spanWrapper = document.createElement("span"); // Wrapper para a nota
        const notaTirada = document.createElement("span");
        const valorTotaldaNota = document.createElement("span");
        const icon = document.createElement("img"); // Criar um ícone

        // Corrige o caminho do ícone
        icon.src = `../assets/images/${data[index].icon.split("/").pop()}`;
        icon.alt = data[index].category;
        icon.classList.add("icon-habilidade"); // Classe para estilização
        
        h3.innerHTML = data[index].category;

        // Definição de cores
        if (index === 0) { 
            habilidade.style.backgroundColor = `hsla(0, 100%, 67%, 0.1)`; 
            h3.style.color = `hsl(0, 100%, 67%)`;
        } else if (index === 1) {
            habilidade.style.backgroundColor = `hsla(39, 100%, 56%, 0.1)`;
            h3.style.color = `hsl(39, 100%, 56%)`;
        } else if (index === 2) {
            habilidade.style.backgroundColor = `hsla(166, 100%, 37%, 0.1)`;
            h3.style.color = `hsl(166, 100%, 37%)`;
        } else {
            habilidade.style.backgroundColor = `hsla(234, 85%, 45%, 0.1)`;
            h3.style.color = `hsl(234, 85%, 45%)`;
        }

        // Adiciona valores e classes
        notaTirada.innerHTML = data[index].score;
        notaTirada.classList.add("notaTirada");

        valorTotaldaNota.innerHTML = " / 100";
        valorTotaldaNota.classList.add("valorTotaldaNota");

        // Adiciona os spans dentro do wrapper
        spanWrapper.appendChild(notaTirada);
        spanWrapper.appendChild(valorTotaldaNota);

        // Adiciona os elementos ao container da habilidade
        const textWrapper = document.createElement("div"); // Agrupa ícone e título
        textWrapper.classList.add("habilidade-texto");
        textWrapper.appendChild(icon); // Ícone antes do título
        textWrapper.appendChild(h3);

        habilidade.appendChild(textWrapper); // Adiciona grupo de texto (ícone + título)
        habilidade.appendChild(spanWrapper);
    });

    resultado.innerHTML = media().toFixed(0);
});



//Funcao para calcular media
const media = () => {
    let soma = 0;
    let qtd = 0
    
    data.forEach(nota => {
        soma += nota.score;
        qtd++
    });
    
    return soma / qtd;
}