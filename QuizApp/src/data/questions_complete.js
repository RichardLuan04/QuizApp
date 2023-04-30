const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual é a função da tag <a> em HTML?",
        options: [
          "Criar links para outras páginas da web.",
          "Inserir imagens na página.",
          "Formatar o texto na página.",
          "Criar formulários para o usuário preencher."
        ],
        answer: "Criar links para outras páginas da web.",
        tip: "A tag <a> é usada para criar links para outras páginas da web ou para outros recursos, como arquivos PDF, imagens ou vídeos. Ela é um elemento importante na navegação do usuário pela internet."
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
        tip: "A tag <ul> é usada para criar uma lista não ordenada em HTML. Os itens da lista são definidos pela tag <li> (item de lista), que é colocada dentro da tag <ul>. Cada item da lista é representado por um marcador de bala (bullet point), que pode ser personalizado usando CSS.",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
        tip: "O atributo 'required' é usado para indicar que um campo de formulário (input) é obrigatório, ou seja, que o usuário deve preenchê-lo antes de enviar o formulário. Se o campo estiver vazio, o navegador exibirá uma mensagem de erro e impedirá o envio do formulário."
      },
      {
        question: "Qual a função da tag <head> em um documento HTML?",
        options: [
          "Exibir conteúdo principal da página",
          "Inserir conteúdo de script na página",
          "Definir o título e outras informações da página",
          "Definir a aparência da página"
        ],
        answer: "Definir o título e outras informações da página",
        tip: "A tag <head> é usada para incluir informações sobre a página que não são visíveis na área do corpo (body) da página, como o título da página, as informações de codificação e os metadados. É uma parte importante de um documento HTML, pois ajuda a otimizar a indexação e a exibição dos resultados de pesquisa pelos mecanismos de busca."
      }
    ]
  },
  {
    category: "CSS",
    questions: [
      {
        question: "O que significa 'CSS' em desenvolvimento web?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Scripts",
          "Central Style System",
          "Computerized Style Sheets"
        ],
        answer: "Cascading Style Sheets",
        tip: "CSS é a sigla para 'Cascading Style Sheets' (folhas de estilo em cascata). É uma linguagem de estilo usada para descrever a apresentação de um documento HTML (ou XML). Com CSS, é possível definir estilos para as diversas partes do documento, como fontes, cores, margens, posicionamento e muito mais. Além disso, o uso de CSS permite a separação entre o conteúdo e a apresentação visual do documento, tornando a manutenção e a atualização do site mais fácil e eficiente."
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "font-weight"],
        answer: "font-size",
        tip: "Para aumentar o tamanho da fonte de um elemento em CSS, usamos a propriedade 'font-size'. Ela pode receber um valor em pixels, emems ou outras unidades de medida, ou ainda valores relativos como porcentagens."
      },
      {
        question: "Qual é a função da propriedade CSS display: flex?",
        options: [
          "Ela alinha elementos horizontalmente dentro de um container flexível",
          "Ela alinha elementos verticalmente dentro de um container flexível",
          "Ela transforma elementos em caixas flexíveis, permitindo que sejam organizados facilmente em layouts responsivos e escaláveis",
          "Ela define se um elemento deve ser exibido ou não na página"
        ],
        answer: "Ela transforma elementos em caixas flexíveis, permitindo que sejam organizados facilmente em layouts responsivos e escaláveis",
        tip: "A propriedade 'display: flex' em CSS é usada para criar um layout flexível para os elementos filhos (children) de um elemento pai (parent). Ela permite que os filhos sejam dispostos em uma única linha ou em uma única coluna, e possam ser facilmente alinhados, espaçados e redimensionados conforme necessário."
      },
      {
        question: "Qual é a propriedade CSS usada para definir o espaçamento entre as linhas de um texto?",
        options: [
          "line-height",
          "text-indent",
          "text-decoration",
          "text-transform"
        ],
        answer: "line-height",
        tip: "A propriedade CSS 'line-height' é usada para definir o espaçamento entre as linhas de um texto. Ela pode receber valores em pixels, em, rem, % ou keywords como 'normal' ou 'inherit'."
      },
      {
        question: "O que é um seletor em CSS?",
        options: [
          "Uma propriedade CSS",
          "Um valor CSS",
          "Um elemento HTML",
          "Um padrão de correspondência que identifica um ou mais elementos HTML"
        ],
        answer: "Um padrão de correspondência que identifica um ou mais elementos HTML",
        tip: "Um seletor em CSS é usado para selecionar um ou mais elementos HTML para aplicar estilos a eles."
      }
    ]
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
      {
        "question": "Qual é o operador utilizado para comparar o valor e o tipo de duas variáveis?",
        "options": ["==", "===", "!=", "!=="],
        "answer": "===",
        "tip": "O operador '===' compara o valor e o tipo de duas variáveis."
      },
      {
        question: "O que é uma função anônima em JavaScript?",
        options: [
          "Uma declaração que define um bloco de código nomeado, que pode ser chamado posteriormente.",
          "Uma função que não tem um nome associado a ela.",
          "Um método que é chamado para executar uma ação em um objeto.",
          "Uma propriedade que armazena um valor em um objeto."
        ],
        answer: "Uma função que não tem um nome associado a ela.",
        tip: "Funções anônimas são usadas quando você precisa passar uma função como argumento para outra função."
      }
    ]
  },
  {
    category: "React",
    questions: [
      {
        question: "Qual é a função do Hook useState no React?",
        options: [
          "Gerenciar o ciclo de vida do componente",
          "Lidar com eventos do usuário",
          "Gerenciar o estado de um componente",
          "Realizar requisições HTTP"
        ],
        answer: "Gerenciar o estado de um componente",
        tip: "O Hook useState é utilizado para gerenciar o estado de um componente no React, permitindo que o componente possa re-renderizar sempre que esse estado é atualizado."
      },
      {
        question: "O que é JSX no React?",
        options: [
          "Um compilador para transformar o código React em JavaScript puro",
          "Uma linguagem de programação separada do JavaScript",
          "Uma sintaxe que permite escrever elementos HTML em JavaScript",
          "Uma ferramenta para depuração de código no React"
        ],
        answer: "Uma sintaxe que permite escrever elementos HTML em JavaScript",
        tip: "JSX é uma extensão da sintaxe do JavaScript que permite escrever elementos HTML em JavaScript de forma mais simples e intuitiva no React."
      },
      {
        question: "O que é o React?",
        options: [
          "Uma biblioteca para construção de interfaces de usuário",
          "Uma linguagem de programação",
          "Um framework para desenvolvimento de aplicações web",
          "Um banco de dados relacional"
        ],
        answer: "Uma biblioteca para construção de interfaces de usuário",
        tip: "O React é uma biblioteca JavaScript para construção de interfaces de usuário, desenvolvida pelo Facebook e utilizada em diversos projetos web."
      },
      {
        question: "Qual é a finalidade do Hook useEffect no React?",
        options: [
          "Lidar com eventos do usuário",
          "Gerenciar o ciclo de vida do componente",
          "Gerenciar o estado de um componente",
          "Realizar requisições HTTP"
        ],
        answer: "Gerenciar o ciclo de vida do componente",
        tip: "O Hook useEffect é utilizado para lidar com o ciclo de vida do componente no React, permitindo que o componente execute ações em determinados momentos, como quando é montado, atualizado ou desmontado."
      },
      {
        question: "Qual é o comando para criar um novo projeto em React?",
        options: [
          "create-react-app",
          "new-react-project",
          "react-init",
          "react-create"
        ],
        answer: "create-react-app",
        tip: "Para criar um novo projeto em React, utiliza-se o comando 'create-react-app' seguido do nome do projeto."
      }
    ]
  },
  {
    category: "Python",
    questions: [
      {
        question: "O que é uma expressão lambda em Python?",
        options: [
          "Uma declaração que define uma classe",
          "Uma declaração que define uma função",
          "Uma declaração que cria uma variável",
          "Uma função anônima que pode ser usada como um objeto"
        ],
        answer: "Uma função anônima que pode ser usada como um objeto",
        tip: "As expressões lambda em Python são usadas para criar funções"
      },
      {
        question: "O que é o pacote 'numpy' em Python?",
        options: [
          "Um pacote para trabalhar com matrizes numéricas e cálculos científicos em Python",
          "Um pacote para criar interfaces gráficas de usuário em Python",
          "Um pacote para trabalhar com bancos de dados em Python",
          "Um pacote para criar jogos em Python"
        ],
        answer: "Um pacote para trabalhar com matrizes numéricas e cálculos científicos em Python",
        tip: "O pacote 'numpy' é amplamente utilizado em ciência de dados e outras áreas que exigem cálculos numéricos eficientes em Python."
      },
      {
        question: "O que é a biblioteca 'matplotlib' em Python?",
        options: [
          "Uma biblioteca para trabalhar com expressões regulares em Python",
          "Uma biblioteca para trabalhar com arquivos CSV em Python",
          "Uma biblioteca para criar visualizações gráficas em Python",
          "Uma biblioteca para trabalhar com bancos de dados em Python"
        ],
        answer: "Uma biblioteca para criar visualizações gráficas em Python",
        tip: "A biblioteca 'matplotlib' é amplamente utilizada para criar gráficos e visualizações de dados em Python."
      },
      {
        question: "O que é a função 'map()' em Python?",
        options: [
          "Uma função que executa uma operação em cada elemento de uma lista",
          "Uma função que retorna o menor valor em uma lista",
          "Uma função que retorna o maior valor em uma lista",
          "Uma função que retorna a soma de todos os valores em uma lista"
        ],
        answer: "Uma função que executa uma operação em cada elemento de uma lista",
        tip: "A função 'map()' é usada para aplicar uma função a cada elemento de uma lista e retornar uma nova lista com os resultados."
      },
      {
        question: "O que é o pacote 'pandas' em Python?",
        options: [
          "Um pacote para trabalhar com matrizes numéricas e cálculos científicos em Python",
          "Um pacote para trabalhar com arquivos CSV em Python",
          "Um pacote para criar interfaces gráficas de usuário em Python",
          "Um pacote para criar jogos em Python"
        ],
        answer: "Um pacote para trabalhar com arquivos CSV em Python",
        tip: "O pacote 'pandas' é amplamente utilizado em ciência de dados para manipulação e análise de dados tabulares, incluindo arquivos CSV."
      }
    ]
  },
  {
    category: "SQL",
    questions: [
      {
        question: "O que é SQL?",
        options: [
          "Uma linguagem de programação orientada a objetos",
          "Uma linguagem de consulta estruturada",
          "Uma linguagem de programação funcional",
          "Uma linguagem de programação procedural"
        ],
        answer: "Uma linguagem de consulta estruturada",
        tip: "SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar e manipular bancos de dados relacionais."
      },
      {
        question: "O que é uma cláusula 'WHERE' em SQL?",
        options: [
          "Uma cláusula usada para filtrar dados em uma consulta SELECT",
          "Uma cláusula usada para agrupar dados em uma consulta SELECT",
          "Uma cláusula usada para ordenar dados em uma consulta SELECT",
          "Uma cláusula usada para atualizar dados em uma consulta UPDATE"
        ],
        answer: "Uma cláusula usada para filtrar dados em uma consulta SELECT",
        tip: "A cláusula 'WHERE' é usada para especificar critérios de seleção em uma consulta SELECT, permitindo que você filtre dados com base em determinadas condições."
      },
      {
        question: "O que é uma cláusula 'ORDER BY' em SQL?",
        options: [
          "Uma cláusula usada para filtrar dados em uma consulta SELECT",
          "Uma cláusula usada para agrupar dados em uma consulta SELECT",
          "Uma cláusula usada para ordenar dados em uma consulta SELECT",
          "Uma cláusula usada para atualizar dados em uma consulta UPDATE"
        ],
        answer: "Uma cláusula usada para ordenar dados em uma consulta SELECT",
        tip: "A cláusula 'ORDER BY' é usada para classificar os resultados de uma consulta SELECT com base em uma ou mais colunas, permitindo que você especifique a ordem em que os dados são retornados."
      },
      {
        question: "O que é uma cláusula 'JOIN' em SQL?",
        options: [
          "Uma cláusula usada para filtrar dados em uma consulta SELECT",
          "Uma cláusula usada para agrupar dados em uma consulta SELECT",
          "Uma cláusula usada para ordenar dados em uma consulta SELECT",
          "Uma cláusula usada para combinar dados de várias tabelas em uma única consulta SELECT"
        ],
        answer: "Uma cláusula usada para combinar dados de várias tabelas em uma única consulta SELECT",
        tip: "A cláusula 'JOIN' é usada para combinar dados de duas ou mais tabelas relacionadas em uma única consulta SELECT, permitindo que você recupere dados de várias fontes em uma única consulta."
      },
      {
        question: "O que é uma chave primária em SQL?",
        options: [
          "Uma coluna que contém dados exclusivos para cada linha em uma tabela",
          "Uma coluna que contém dados não exclusivos para cada linha em uma tabela",
          "Uma coluna que contém dados de várias tabelas em uma única consulta",
          "Uma coluna que não contém dados em uma tabela"
        ],
        answer: "Uma coluna que contém dados exclusivos para cada linha em uma tabela",
        tip: "Uma chave primária é uma coluna ou conjunto de colunas que identifica exclusivamente cada linha em uma tabela. Ele garante a integridade dos dados e fornece uma maneira rápida de pesquisar e recuperar informações em uma tabela."
      }
    ]
  }
]

export default data;