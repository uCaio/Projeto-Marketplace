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
