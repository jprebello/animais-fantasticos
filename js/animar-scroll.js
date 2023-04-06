import debounce from "./debounce.js";

export default function animarAoScroll(sessoes) {
  const sections = document.querySelectorAll(sessoes);
  const windowMetade = window.innerHeight * 0.8;

  // Retorna um objeto com a sessão e sua distancia do topo da página - 60% da vh
  function getDistance() {
    const distance = [...sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - windowMetade),
      };
    });
    return distance;
  }

  const distance = getDistance();

  // Compara a distancia entre o offsettop da sessão e o quanto o scroll da página desceu, aplicando a animação
  function checkDistance() {
    distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("animar");
      } else if (item.element.classList.contains("animar")) {
        item.element.classList.remove("animar");
      }
    });
  }

  // Variável que recebe o retorna da função de debounce
  const debouncedScroll = debounce(checkDistance, 50);

  // Ativa função
  function init() {
    if (sections.length) {
      checkDistance();
      window.addEventListener("scroll", debouncedScroll);
    }
  }

  return {
    init,
    getDistance,
    checkDistance,
  };
}
