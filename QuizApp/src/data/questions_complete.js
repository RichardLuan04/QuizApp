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
    questions : [

    ]
  },
  {
    category: "SQL",
    questions: [
      
    ]
  }
]

export default data;