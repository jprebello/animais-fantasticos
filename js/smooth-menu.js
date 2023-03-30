export default function smoothMenu() {
  const linkInternos = document.querySelectorAll(
    '[data-menu="smooth"] a[href^="#"]'
  );

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

  if (linkInternos.length) {
    linkInternos.forEach((item) => {
      item.addEventListener("click", smoothClick);
    });
  }
}
