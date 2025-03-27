const btn = document.querySelector("button");
const feedbackNumbers = document.querySelectorAll(".feedback");
const clasificacao = document.querySelector("#classificacao");

btn.addEventListener('click', () => {
    const container01 = document.querySelector(".container");
    const container02 = document.querySelector(".container-thank-you");
    container01.style.display = "none";
    container02.style.display = "flex";
})


feedbackNumbers.forEach((elem)=> {
    elem.addEventListener("click", () =>{
        const num = elem.innerHTML;

        feedbackNumbers.forEach((item) => item.classList.remove("ativo"));

        elem.classList.add("ativo");
        
        clasificacao.innerHTML = num;
    });
    
})

