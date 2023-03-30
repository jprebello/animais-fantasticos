export default function initTabMenu() {
  const imgs = document.querySelectorAll("[data-tab='menu'] img");
  const texto = document.querySelectorAll("[data-tab='content'] div");

  function mostrarConteudo(index) {
    texto.forEach((item) => {
      item.classList.remove("ativo");
    });
    texto[index].classList.add("ativo");
  }

  if (imgs.length && texto.length) {
    imgs.forEach((item, index) => {
      item.addEventListener("click", () => {
        mostrarConteudo(index);
      });
    });
  }
}
