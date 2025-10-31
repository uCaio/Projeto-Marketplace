document.addEventListener("DOMContentLoaded", function() {
    const sizes = document.querySelectorAll('.product-size');
    sizes.forEach(size => {
        size.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove a seleção de todos
            sizes.forEach(s => {
                s.style.backgroundColor = "";
                s.style.color = "";
            });
            // Adiciona a seleção ao clicado
            this.style.backgroundColor = "#52c4db";
            this.style.color = "#000";
            this.style.borderRadius = "50px";

            // Define o valor selecionado no input hidden
            selecionarTamanho(this.innerText);
        });
    });
});

function selecionarTamanho(tamanho) {
    const inputTamanho = document.getElementById('inputTamanhoSelecionado');
    inputTamanho.value = tamanho;
}


document.addEventListener("DOMContentLoaded", function() {
  const sizes = document.querySelectorAll('.product-size');
  const inputTamanho = document.getElementById('inputTamanhoSelecionado');
  const form = document.getElementById('formAdicionarCarrinho');
  const popup = document.getElementById('popup-alert');

  // Seleção de tamanho
  sizes.forEach(size => {
    size.addEventListener('click', function() {
      sizes.forEach(s => s.classList.remove('selected'));
      this.classList.add('selected');
      inputTamanho.value = this.dataset.size;
    });
  });

  // Validação do formulário
  form.addEventListener('submit', function(e) {
    if (!inputTamanho.value) {
      e.preventDefault();
      mostrarPopup();
    }
  });

  // Função para exibir o pop-up temporariamente
  function mostrarPopup() {
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
    }, 2500); // some após 2.5 segundos
  }
});
