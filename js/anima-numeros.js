export default function initAnimaNumeros(number, target, observerClass) {
  const observerTarget = document.querySelector(target);
  let observer;

  // Incrementa a partir de zero ate o numero final
  function incrementarNumero(item) {
    const total = +item.innerHTML;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      item.innerHTML = start;
      if (start > total) {
        item.innerHTML = total;
        clearInterval(timer);
      }
    }, 15);
  }

  // Ativa incrementar número para cada numero selecionado no DOM
  function animaNumeros() {
    const numeros = document.querySelectorAll(number);

    if (numeros.length) {
      numeros.forEach((item) => {
        incrementarNumero(item);
      });
    }
  }

  // Função que ocorre sempre que ocorrer uma mutação
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains(observerClass)) {
      observer.disconnect();
      animaNumeros();
    }
  }

  // Verifica quando a classe ativa é adicionada ao target
  function addMutationObserver() {
    observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, { attributes: true });
  }

  // Ativa a função
  function init() {
    addMutationObserver();
  }

  return {
    init,
    incrementarNumero,
    animaNumeros,
    handleMutation,
    addMutationObserver,
  };
}
