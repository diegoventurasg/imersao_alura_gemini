const toggleButton = document.getElementById('toggle-mode');
const body = document.body;
const section = document.getElementById('resultados-pesquisa');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleButton.textContent = body.classList.contains('dark-mode') ? 'Ativar Modo Claro' : 'Ativar Modo Escuro';
});

function pesquisar() {
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = '';

  // Itera sobre cada elemento (dado) do array 'dados'
  for (let dado of dados) {
    // Constrói o HTML para cada resultad
    resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>`;
  }

  // Atribui a string com os resultados ao conteúdo HTML da seção
  section.innerHTML = resultados;
}


