import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais(url) {
  // Cria uma lista com informações dos animais
  function createAnimal(animal) {
    const ul = document.querySelector(".numeros-itens");
    ul.innerHTML += `<li>${animal.specie}</li><span data-numero>${animal.total}</span>`;
  }

  // Puxa os animais atraves de um arquivo json
  async function fetchAnimais() {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();

    animaisJson.forEach((animal) => {
      createAnimal(animal);
    });
    const animaNumeros = initAnimaNumeros(
      "[data-numero]",
      ".numeros",
      "animar"
    );
    animaNumeros.init();
  }

  // Ativa a função
  function init() {
    fetchAnimais();
  }

  return {
    init,
    fetchAnimais,
    createAnimal,
  };
}
