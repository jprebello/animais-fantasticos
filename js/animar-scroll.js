export default function animarAoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        item.classList.add("animar");
      } else if (item.classList.contains("animar")) {
        item.classList.remove("animar");
      }
    });
  }

  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
