document.getElementById("cep").addEventListener("blur", function (evento) { // Adiciona um evento ao campo CEP quando o usuário sai dele (blur)

    var elemento = evento.target; // Guarda o elemento que disparou o evento (input do CEP)
    var cepInformado = elemento.value.trim(); // Obtém o valor digitado e remove espaços antes/depois

    if (cepInformado.length !== 8 || isNaN(cepInformado)) { // Verifica se o CEP não tem 8 dígitos ou não é numérico
        alert("CEP inválido. Digite exatamente 8 números."); // Mostra alerta de erro ao usuário
        return; // Interrompe a execução para não continuar a requisição
    }

    fetch("https://viacep.com.br/ws/" + cepInformado + "/json/") // Faz uma requisição HTTP para a API ViaCEP
        .then(function (response) { // Executa quando a resposta do servidor chega
            return response.json(); // Converte a resposta em objeto JavaScript (JSON)
        })
        .then(function (data) { // Recebe os dados convertidos da API
            if (data.erro) { // Verifica se a API retornou erro (CEP inexistente)
                alert("CEP não encontrado."); // Exibe alerta informando que o CEP não existe
                return; // Encerra a execução dessa função
            }

            document.getElementById("logradouro").value = data.logradouro; // Preenche o campo logradouro
            document.getElementById("bairro").value = data.bairro; // Preenche o campo bairro
            document.getElementById("cidade").value = data.localidade; // Preenche o campo cidade
            document.getElementById("estado").value = data.uf; // Preenche o campo estado (UF)

            salvarFormulario(); // Salva automaticamente os dados preenchidos no localStorage
        })
        .catch(function () { // Captura qualquer erro ocorrido na requisição
            alert("Erro ao consultar o CEP. Tente novamente."); // Mostra mensagem de erro genérica
        });
}); // Fecha o evento blur do campo CEP


function salvarFormulario() { // Declara função responsável por salvar os dados do formulário
    localStorage.setItem("cep", document.getElementById("cep").value); // Salva o CEP no localStorage
    localStorage.setItem("logradouro", document.getElementById("logradouro").value); // Salva o logradouro
    localStorage.setItem("bairro", document.getElementById("bairro").value); // Salva o bairro
    localStorage.setItem("cidade", document.getElementById("cidade").value); // Salva a cidade
    localStorage.setItem("estado", document.getElementById("estado").value); // Salva o estado
} // Fecha a função salvarFormulario


const campos = ["cep", "logradouro", "bairro", "cidade", "estado"]; // Cria um array com os IDs dos campos

campos.forEach(function (id) { // Percorre cada item do array campos
    document.getElementById(id).addEventListener("input", salvarFormulario); // Salva os dados sempre que o usuário digitar
}); // Fecha o forEach


const botaoTema = document.getElementById("botaoTema"); // Obtém o botão de troca de tema pelo ID

botaoTema.addEventListener("click", function () { // Adiciona evento de clique ao botão

    var temaAtual; // Declara variável para armazenar o tema atual

    if (document.body.classList.contains("dark")) { // Verifica se o body tem a classe dark
        temaAtual = "dark"; // Define que o tema atual é dark
    } else { // Caso não tenha a classe dark
        temaAtual = "light"; // Define que o tema atual é light
    }

    var novoTema; // Declara variável para armazenar o novo tema

    if (temaAtual === "dark") { // Se o tema atual for dark
        novoTema = "light"; // O novo tema será light
    } else { // Caso contrário
        novoTema = "dark"; // O novo tema será dark
    }

    if (novoTema === "dark") { // Verifica se o novo tema é dark
        document.body.classList.add("dark"); // Adiciona a classe dark ao body
        botaoTema.textContent = "☀"; // Altera o ícone do botão para sol
    } else { // Caso o novo tema seja light
        document.body.classList.remove("dark"); // Remove a classe dark do body
        botaoTema.textContent = "☽"; // Altera o ícone do botão para lua
    }

    localStorage.setItem("tema", novoTema); // Salva a preferência de tema no localStorage
}); // Fecha o evento de clique do botão


document.addEventListener("DOMContentLoaded", function () { // Executa o código quando o DOM estiver totalmente carregado

    document.getElementById("cep").value = localStorage.getItem("cep") || ""; // Restaura o CEP salvo ou deixa vazio
    document.getElementById("logradouro").value = localStorage.getItem("logradouro") || ""; // Restaura o logradouro
    document.getElementById("bairro").value = localStorage.getItem("bairro") || ""; // Restaura o bairro
    document.getElementById("cidade").value = localStorage.getItem("cidade") || ""; // Restaura a cidade
    document.getElementById("estado").value = localStorage.getItem("estado") || ""; // Restaura o estado

    var temaSalvo = localStorage.getItem("tema"); // Recupera o tema salvo no localStorage

    if (temaSalvo === "dark") { // Verifica se o tema salvo é dark
        document.body.classList.add("dark"); // Aplica o tema dark
        botaoTema.textContent = "☀"; // Ajusta o ícone do botão
    } else { // Caso o tema salvo seja light ou inexistente
        document.body.classList.remove("dark"); // Garante que o tema claro esteja ativo
        botaoTema.textContent = "☽"; // Ajusta o ícone do botão
    }
}); // Fecha o evento DOMContentLoaded