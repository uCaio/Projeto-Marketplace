document.addEventListener('DOMContentLoaded', () => {
  const quantidadeInputs = document.querySelectorAll('.quantidade-input');

  quantidadeInputs.forEach(input => {
    input.addEventListener('change', async () => {
      const produtoId = input.dataset.produtoId;
      const novaQuantidade = input.value;

      try {
        const response = await fetch('/carrinho/atualizar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ produtoId, novaQuantidade })
        });

        const data = await response.json();

        if (data.sucesso) {
          // Atualiza o total automaticamente (sem reload)
          let totalElem = document.getElementById('total-value');
          if (totalElem) {
            const textoAtual = totalElem.innerHTML;
            const freteMatch = textoAtual.match(/Frete: R\$ ([0-9,]+)/);
            const frete = freteMatch ? parseFloat(freteMatch[1].replace(',', '.')) : 0;
            const novoTotal = parseFloat(data.totalProdutos) + frete;
            totalElem.innerHTML = `
              <strong>Total com Frete:</strong> R$ ${novoTotal.toFixed(2).replace('.', ',')}<br>
              <small>(Frete: R$ ${frete.toFixed(2).replace('.', ',')})</small>
            `;
          }
        } else {
          alert(data.mensagem || "Erro ao atualizar quantidade.");
        }
      } catch (error) {
        console.error("Erro ao atualizar quantidade:", error);
      }
    });
  });
});
