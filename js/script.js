import animarAoScroll from "./animar-scroll.js";
import initTabMenu from "./init-tabmenu.js";
import smoothMenu from "./smooth-menu.js";
import initAccordionList from "./init-accordionlist.js";
import initModal from "./modal.js";
import intiDropDownMenu from "./menu-dropdown.js";
import initMenuMobile from "./menu-mobile.js";
import initFuncionamento from "./funcionamento.js";
import initFetchBitcoin from "./fetch-bitcoin.js";
import initFetchAnimais from "./fetch-animais.js";
import initToolTip from "./tooltip.js";

const menuSmooth = smoothMenu('[data-menu="list"] a[href^="#"]');
menuSmooth.init();

const accordionList = initAccordionList(
  "[data-anime='accordion'] dt",
  "[data-anime='accordion'] dd"
);
accordionList.init();

const tabMenu = initTabMenu(
  "[data-tab='menu'] img",
  "[data-tab='content'] div"
);
tabMenu.init();

const modal = initModal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = initToolTip("[data-tooltip=tooltip]");
tooltip.init();

const fetchAnimais = initFetchAnimais("./animais-api.json");
fetchAnimais.init();

const fetchBitcoin = initFetchBitcoin(
  "https://blockchain.info/ticker",
  ".btc-preco"
);
fetchBitcoin.init();

const animarScroll = animarAoScroll("[data-anime='scroll']");
animarScroll.init();

const dropdownMenu = intiDropDownMenu("[data-dropdown]");
dropdownMenu.init();

initMenuMobile();
initFuncionamento();
