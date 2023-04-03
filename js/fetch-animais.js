import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const ul = document.querySelector(".numeros-itens");
    ul.innerHTML += `<li>${animal.specie}</li><span data-numero>${animal.total}</span>`;
  }

  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();

    animaisJson.forEach((animal) => {
      createAnimal(animal);
    });
    const animaNumeros = initAnimaNumeros("[data-numero]", ".numeros", "animar");
    animaNumeros.init();
  }

  fetchAnimais("./animais-api.json");
}
