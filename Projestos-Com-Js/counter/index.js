const btn = document.querySelectorAll("button");

btn.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        const resp = document.querySelector("#number");

        // Use textContent para obter o texto dentro do elemento
        let soma = Number(resp.innerHTML);
        
        if (index === 0 && soma > 0) {
            soma += -1;
        } else if (index === 1) {
            soma = 0;
        } else if (index === 2) {
            soma += 1;
        }

        resp.innerHTML = soma;
    });
});
