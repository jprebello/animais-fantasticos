import animarAoScroll from "./animar-scroll.js";
import initTabMenu from "./init-tabmenu.js";
import smoothMenu from "./smooth-menu.js";
import initAccordionList from "./init-accordionlist.js";
import initModal from "./modal.js";
import initToolTip from "./tooltip.js";
import intiDropDownMenu from "./menu-dropdown.js";
import initMenuMobile from "./menu-mobile.js";
import initFuncionamento from "./funcionamento.js";
import initFetchBitcoin from "./fetch-bitcoin.js";
import initFetchAnimais from "./fetch-animais.js";

const menuSmooth = smoothMenu('[data-menu="list"] a[href^="#"]');
menuSmooth.init();

initAccordionList();
animarAoScroll();
initTabMenu();
initModal();
initToolTip();
intiDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();
initFetchAnimais();
