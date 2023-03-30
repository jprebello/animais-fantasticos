export default function initToolTip(tooltips) {
  const tooltip = document.querySelector(tooltips);
  let tooltipBoxAux;

  // Move a tooltip de acordo com a posição do mouse
  function onMouseMove(event) {
    tooltipBoxAux.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      tooltipBoxAux.style.left = `${event.pageX - 190}px`;
    } else {
      tooltipBoxAux.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove a tooltip e os eventos
  function onMouseLeave(event) {
    tooltipBoxAux.remove();
    event.currentTarget.removeEventListener("mouseleave", onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", onMouseMove);
  }

  // Cria a tooltipbox e coloca no body
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    tooltipBoxAux = tooltipBox;
  }

  // Mostra a tooltip ao passar o mouse por cima
  function onMouseOver(event) {
    criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener("mouseleave", onMouseLeave);
    event.currentTarget.addEventListener("mousemove", onMouseMove);
  }

  // Adiciona os eventos a tooltip
  function addTooltipsEvent() {
    if (tooltip) {
      tooltip.addEventListener("mouseover", onMouseOver);
    }
  }

  // Inicia a função
  function init() {
    addTooltipsEvent();
  }

  return {
    init,
    onMouseMove,
    onMouseLeave,
    criarTooltipBox,
    onMouseOver,
    addTooltipsEvent,
  };
}
