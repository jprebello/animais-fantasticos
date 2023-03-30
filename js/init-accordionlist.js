export default function initAccordionList(hideList, arrowList) {
  const accordionList = document.querySelectorAll(hideList);
  const suportList = document.querySelectorAll(arrowList);

  // faz um toggle nas classes
  function toggleAccordion(index) {
    accordionList[index].classList.toggle("seta");
    suportList[index].classList.toggle("ativo");
  }

  // adiciona evento na hideList
  function addAccordionEvent() {
    if (accordionList.length && suportList.length) {
      accordionList.forEach((item, index) => {
        item.addEventListener("click", () => {
          toggleAccordion(index);
        });
      });
    }
  }

  // inicia função
  function init() {
    addAccordionEvent();
  }

  return {
    init,
    toggleAccordion,
    addAccordionEvent,
  };
}
