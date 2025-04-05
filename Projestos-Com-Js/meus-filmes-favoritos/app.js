    const frm = document.querySelector("form");

    frm.addEventListener("submit", (e) => {
        e.preventDefault();

        const tituloDoFilme = frm.inTitulo.value;
        const genero = frm.inGenero.value;

        localStorage.setItem("titulosDeFilme", tituloDoFilme);
        localStorage.setItem("generos", genero);

        gravar(tituloDoFilme, genero);
        
    });

    //Crriando uma funcao para gravar os filmes q forem end odicionados 
    const gravar = (tituloDoFilme, genero) => {
        //Verifico se ja existe uma lista, se sim eu adiciono esse novo filme a minha lista
        if (localStorage.getItem("titulosDeFilme")){
            //Adiciono a minha lista titulosDeFilme
            const titulosDeFilme = localStorage.getItem("titulosDeFilme") + ";" + tituloDoFilme;
            //Adiciono a minha lista generos
            const generos = localStorage.getItem("generos") + ";" + genero;
            //Salvando a minha lista titulosDeFilme
            localStorage.setItem("titulosDeFilme", titulosDeFilme);
            //Salvando a minha lista generos
            localStorage.setItem("generos", generos);
        } else {
            //Caso seja o primeiro eu so salvo o item na lista titulosDeFilme e generos
            localStorage.setItem("titulosDeFilme", tituloDoFilme);
            localStorage.setItem("generos", genero);
        }
    }

    const inserirLinha = (tituloDoFilme, genero) => {
        
    }