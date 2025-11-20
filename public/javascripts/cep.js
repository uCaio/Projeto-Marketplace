async function pesquisacep(valor) {
  // Remove tudo que não for número
  const cep = valor.replace(/\D/g, "");

  // Verifica se o campo não está vazio
  if (cep === "") {
    limpaFormularioCep();
    return;
  }

  // Expressão regular para validar o CEP
  const validacep = /^[0-9]{8}$/;

  if (!validacep.test(cep)) {
    limpaFormularioCep();
    alert("Formato de CEP inválido.");
    return;
  }

  // Preenche os campos com "..." enquanto consulta o webservice
  setCampos({
    rua: "...",
    bairro: "...",
    cidade: "...",
    uf: "...",
    ibge: "..."
  });

  try {
    // Faz a requisição à API ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!response.ok) {
      throw new Error("Erro ao consultar o CEP");
    }

    const dados = await response.json();

    if (dados.erro) {
      limpaFormularioCep();
      alert("CEP não encontrado.");
      return;
    }

    // Atualiza os campos com os dados retornados
    setCampos({
      rua: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
      ibge: dados.ibge
    });

    // 🔹 Calcula automaticamente o frete após preencher os dados do CEP
    calcularFreteAutomatico(cep);

  } catch (e) {
    limpaFormularioCep();
    console.error("Erro ao buscar CEP:", e);
    alert("Erro ao buscar o CEP. Tente novamente.");
  }
}

// Função auxiliar para preencher os campos
function setCampos({ rua, bairro, cidade, uf, ibge }) {
  document.getElementById("rua").value = rua;
  document.getElementById("bairro").value = bairro;
  document.getElementById("cidade").value = cidade;
  document.getElementById("uf").value = uf;
  document.getElementById("ibge").value = ibge;
}

// Limpa o formulário de CEP
function limpaFormularioCep() {
  setCampos({
    rua: "",
    bairro: "",
    cidade: "",
    uf: "",
    ibge: ""
  });
}

// 🔹 NOVA FUNÇÃO: chama o backend e atualiza o total com frete
async function calcularFreteAutomatico(cep) {
  try {
    const response = await fetch('/carrinho/frete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cep })
    });

    const data = await response.json();

    if (data.sucesso) {
      let totalElem = document.getElementById('total-value');

      if (!totalElem) {
        totalElem = document.createElement('p');
        totalElem.id = 'total-value';
        document.getElementById('info-container').appendChild(totalElem);
      }

      totalElem.innerHTML = `
        <strong>Total com Frete:</strong> R$ ${data.totalComFrete.replace('.', ',')}<br>
        <small>(Frete: R$ ${data.valorFrete.replace('.', ',')})</small>
      `;
    }
  } catch (err) {
    console.error('Erro ao calcular frete automaticamente:', err);
  }
}
