# Formulário de Endereço com ViaCEP e Dark Mode

📋 Projeto front-end desenvolvido com HTML, CSS e JavaScript puro, com foco em manipulação do DOM, requisições HTTP, persistência de dados com Web Storage API e boas práticas de organização de código.


🧾 Descrição do Projeto:
Este projeto consiste em um formulário de cadastro de endereço que:
Busca automaticamente os dados de endereço a partir do CEP informado
Consome a API pública ViaCEP
Preenche os campos do formulário de forma automática
Salva os dados preenchidos no localStorage
Restaura os dados ao recarregar a página
Possui modo claro e modo escuro (Dark Mode) com persistência da preferência do usuário


🛠️ Tecnologias Utilizadas:
HTML5
Estrutura semântica
Formulário com validações básicas
CSS3
Flexbox
Layout em formato de card
Dark Mode com classes condicionais
Estados de foco (:focus) e hover
JavaScript (ES6-)
Manipulação do DOM
Eventos (blur, input, click, DOMContentLoaded)
Requisições HTTP com fetch
Promises (then, catch)
Web Storage API (localStorage)


⚙️ Funcionalidades:

🔎 Busca automática de endereço
Ao sair do campo CEP (blur), o sistema:
Valida se o CEP possui 8 dígitos numéricos
Realiza uma requisição para a API ViaCEP

Preenche automaticamente:
Logradouro
Bairro
Cidade
Estado (UF)

💾 Persistência de dados
Todos os campos do formulário são salvos no localStorage
Os dados são restaurados automaticamente ao recarregar a página
Evita perda de informações caso o usuário feche ou atualize o navegador

🌗 Dark Mode
Botão para alternar entre tema claro e tema escuro
O tema escolhido é salvo no localStorage
O tema é reaplicado automaticamente ao carregar a página

📂 Estrutura de Arquivos
📁 projeto/
│
├── index.html        # Estrutura do formulário
├── styles.css         # Estilização e dark mode
└── script.js       # Lógica JavaScript (CEP, storage e tema)

🧠 Conceitos Aplicados
Manipulação do DOM
Validação de formulários
Consumo de API REST
Programação assíncrona
Separação entre estrutura, estilo e comportamento
Persistência de estado no front-end
Boas práticas de legibilidade e organização de código