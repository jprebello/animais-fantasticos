export default function intiDropDownMenu(dropdownMenu) {
  const dropdownMenus = document.querySelectorAll(dropdownMenu);

  // Se o usuário clicar em qualquer parte do html que não seja o menu-dropdown, este irá sumir.
  function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        callback();
        html.removeEventListener("click", handleOutsideClick);
      }
    }

    if (!element.hasAttribute(outside)) {
      html.addEventListener("click", handleOutsideClick);
      element.setAttribute(outside, "");
    }
  }

  // Previne o event de mandar o usuário para outra página e faz com que o menu fique fixo.
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, () => {
      this.classList.remove("active");
    });
  }

  // Ativa a função handleClick quando o usuário clicar no elemento.
  function addDropdownMenusEvent() {
    if (dropdownMenus.length) {
      dropdownMenus.forEach((item) => {
        item.addEventListener("click", handleClick);
      });
    }
  }

  // Ativa a função
  function init() {
    addDropdownMenusEvent();
  }

  return {
    init,
    handleClick,
    outsideClick,
  };
}
