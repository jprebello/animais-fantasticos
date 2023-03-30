export default function initModal(buttonOpen, buttonClose, modalContainer) {
  const botaoAbrir = document.querySelector(buttonOpen);
  const botaoFechar = document.querySelector(buttonClose);
  const containerModal = document.querySelector(modalContainer);

  // Abre o modal ao clicar no botão
  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add("ativar");
  }

  // Fecha o modal ao clicar no X
  function fecharModal(event) {
    event.preventDefault();
    containerModal.classList.remove("ativar");
  }

  // Fecha o modal ao clicar fora
  function cliqueForaModal(event) {
    if (event.target === this) {
      fecharModal(event);
    }
  }

  // Adiciona os eventos aos elementos do modal
  function addModalEvent() {
    if (botaoAbrir && botaoFechar && containerModal) {
      botaoAbrir.addEventListener("click", abrirModal);
      botaoFechar.addEventListener("click", fecharModal);
      containerModal.addEventListener("click", cliqueForaModal);
    }
  }

  // Inicia função
  function init() {
    addModalEvent();
  }

  return {
    init,
    addModalEvent,
    cliqueForaModal,
    abrirModal,
    fecharModal,
  };
}
