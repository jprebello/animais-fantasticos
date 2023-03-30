export default function initAccordionList() {
  const dt = document.querySelectorAll("[data-anime='accordion'] dt");
  const dd = document.querySelectorAll("[data-anime='accordion'] dd");

  function mostrarTexto(index) {
    dt[index].classList.toggle("seta");
    dd[index].classList.toggle("ativo");
  }

  if (dt.length && dd.length) {
    dt.forEach((item, index) => {
      item.addEventListener("click", () => {
        mostrarTexto(index);
      });
    });
  }
}