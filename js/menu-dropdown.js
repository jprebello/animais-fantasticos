export default function intiDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

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

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, () => {
      this.classList.remove("active");
    });
  }

  if (dropdownMenus.length) {
    dropdownMenus.forEach((item) => {
      item.addEventListener("click", handleClick);
      item.addEventListener("touchstart", handleClick);
    });
  }
}
