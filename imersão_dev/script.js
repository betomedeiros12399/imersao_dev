function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = "";
  
    // Itera sobre cada mapa no array 'mapas'.
    for (let dado of mapas) {
      // Cria uma nova div para representar um resultado de pesquisa.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="https://call-of-duty-zombies.fandom.com/pt-br/wiki/Der_Eisendrache" target="_blank">
              ${dado.titulo} 
            </a>
          </h2>
          <p>
            ${dado.descricao} 
          </p>
          <p>
            Easter egg tutorial: 
            <a href= ${dado.easteregg} target="_blank">
              Tutorial 
            </a>
          </p>
        </div>
      `;
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa.
    section.innerHTML = resultados;
  }


