    const frm = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
    const img = document.querySelector("img");

    frm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const tituloDoFilme = frm.inTitulo.value;
        const genero = frm.inGenero.value;
    
        gravar(tituloDoFilme, genero);
        inserirLinha(tituloDoFilme, genero);
    
        frm.reset(); // limpa os campos do formulário após envio
        frm.inTitulo.focus(); // coloca o foco de volta no campo título
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
        
        //Crio a linha
        const linha = tableBody.insertRow(-1); // usar tableBody, não tbFilmes
    
        //Crio a quantidade de colunas
        const col1 = linha.insertCell(0); 
        const col2 = linha.insertCell(1);
        const col3 = linha.insertCell(2);
        
        //Declaro oq vai terr em cada coluna
        col1.innerText = tituloDoFilme;
        col2.innerText = genero;
        
        //Crio um elemento img para adciononar dps na minha coluna 3
        const img = document.createElement("img");
        img.src = "img/typcn_delete.svg"; // link da imagem
        img.alt = "Excluir";
        img.classList = "typcn-delete ";
        col3.appendChild(img);

        img.addEventListener("click", () => {
            // Remove da tabela
            linha.remove();
        
            // Recupera os dados do localStorage
            let titulosDeFilme = localStorage.getItem("titulosDeFilme").split(";");
            let generos = localStorage.getItem("generos").split(";");
        
            // Encontra o índice do filme a ser removido
            const index = titulosDeFilme.findIndex((t, i) => t === tituloDoFilme && generos[i] === genero);
        
            // Remove o filme das listas
            if (index > -1) {
                titulosDeFilme.splice(index, 1);
                generos.splice(index, 1);
            }
        
            // Atualiza o localStorage com as novas listas
            localStorage.setItem("titulosDeFilme", titulosDeFilme.join(";"));
            localStorage.setItem("generos", generos.join(";"));
        });
            
    };

    window.addEventListener("load", () => {
        if(localStorage.getItem("titulosDeFilme")){
            const titulosDeFilme = localStorage.getItem("titulosDeFilme").split(";");
            const generos = localStorage.getItem("generos").split(";");

            for(let i=0; i<titulosDeFilme.length; i++){
                inserirLinha(titulosDeFilme[i], generos[i]);
            }
        }
    });
    


    
    