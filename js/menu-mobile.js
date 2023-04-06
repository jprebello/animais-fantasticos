export default function initMenuMobile(button, list) {
  const menuButton = document.querySelector(button);
  const menuList = document.querySelector(list);
  const eventos = ["click", "touchstart"];

  // Se o usuário clicar em qualquer parte do html que não seja o menu-mobile, este irá sumir.
  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback();
      }
    }

    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        setTimeout(() => {
          html.addEventListener(userEvent, handleOutsideClick);
        });
      });
      element.setAttribute(outside, "");
    }
  }

  // Ao clicar no menu-button o usuário irá abrir o menu-list.
  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  // Adiciona os eventos ao botao e ao menu.
  function addMenuMobileEvents() {
    if (menuButton && menuList) {
      eventos.forEach((evento) => {
        menuButton.addEventListener(evento, openMenu);
      });
    }
  }

  // Ativa a função
  function init() {
    addMenuMobileEvents();
  }

  return {
    init,
    outsideClick,
    openMenu,
  };
}
