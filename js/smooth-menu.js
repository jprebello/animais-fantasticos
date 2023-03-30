export default function smoothMenu(links) {
  const linkInternos = document.querySelectorAll(links);

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

  function addLinkEvent() {
    if (linkInternos.length) {
      linkInternos.forEach((item) => {
        item.addEventListener("click", smoothClick);
      });
    }
  }

  function init() {
    addLinkEvent();
  }

  return {
    init,
  };
}
