const citacoes = [
    {
      citacao: "A persistência é o caminho do êxito.",
      autor: "Charles Chaplin",
    },
    {
      citacao: "A única forma de fazer um grande trabalho é amar o que se faz.",
      autor: "Steve Jobs",
    },
    {
      citacao: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      autor: "Robert Collier",
    },
    {
      citacao:
        "O fracasso é a oportunidade de começar de novo, com mais experiência.",
      autor: "Henry Ford",
    },
    {
      citacao: "Não espere por oportunidades, crie você mesmo as suas.",
      autor: "Autor desconhecido",
    },
    {
      citacao:
        "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
      autor: "Zig Ziglar",
    },
    {
      citacao:
        "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
      autor: "Winston Churchill",
    },
    {
      citacao:
        "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
      autor: "Winston Churchill",
    },
    {
      citacao: "Acredite em si próprio e todo o resto virá naturalmente.",
      autor: "Elon Musk",
    },
    {
      citacao:
        "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
      autor: "Autor desconhecido",
    },
  ];

  const citacaoBtn = document.querySelector("#citacaoBtn");
  const citacaoTexto = document.querySelector(".texto");
  const citacaoAutor = document.querySelector(".autor");

  function pegarCitacao() {
    const index = Math.floor(Math.random() * citacoes.length);

    citacaoTexto.textContent = citacoes[index].citacao;
    citacaoAutor .textContent = citacoes[index].autor;
  }

  citacaoBtn.addEventListener("click", pegarCitacao);