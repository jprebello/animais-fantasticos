export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    if (numeros.length) {
      numeros.forEach((item) => {
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
      });
    }
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("animar")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector(".numeros");

  observer.observe(observerTarget, { attributes: true });
}
