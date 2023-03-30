export default function smoothMenu(links) {
  const linkInternos = document.querySelectorAll(links);

  // Adiciona o efeito de smooth ao clicar no link
  function smoothClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const top = section.offsetTop;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  // Adiciona o evento aos links
  function addLinkEvent() {
    if (linkInternos.length) {
      linkInternos.forEach((item) => {
        item.addEventListener("click", smoothClick);
      });
    }
  }

  // Inicia a função
  function init() {
    addLinkEvent();
  }

  return {
    init,
    smoothClick,
    addLinkEvent,
  };
}
