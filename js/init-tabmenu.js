export default function initTabMenu(menu, content) {
  const tabMenu = document.querySelectorAll(menu);
  const tabContent = document.querySelectorAll(content);
  const activeClass = "ativo";

  // Ativa a tab de acordo com o index
  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove(activeClass);
    });
    tabContent[index].classList.add(activeClass);
  }

  // Adiciona eventos nas tabs
  function addTabEvent() {
    if (tabMenu.length && tabContent.length) {
      tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => {
          activeTab(index);
        });
      });
    }
  }

  // Inicia função
  function init() {
    addTabEvent();
  }

  return {
    init,
  };
}
