/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/anima-numeros.js":
/*!*****************************!*\
  !*** ./js/anima-numeros.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros(number, target, observerClass) {\n  var observerTarget = document.querySelector(target);\n  var observer;\n\n  // Incrementa a partir de zero ate o numero final\n  function incrementarNumero(item) {\n    var total = +item.innerHTML;\n    var incremento = Math.floor(total / 100);\n    var start = 0;\n    var timer = setInterval(function () {\n      start += incremento;\n      item.innerHTML = start;\n      if (start > total) {\n        item.innerHTML = total;\n        clearInterval(timer);\n      }\n    }, 15);\n  }\n\n  // Ativa incrementar número para cada numero selecionado no DOM\n  function animaNumeros() {\n    var numeros = document.querySelectorAll(number);\n    if (numeros.length) {\n      numeros.forEach(function (item) {\n        incrementarNumero(item);\n      });\n    }\n  }\n\n  // Função que ocorre sempre que ocorrer uma mutação\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(observerClass)) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n\n  // Verifica quando a classe ativa é adicionada ao target\n  function addMutationObserver() {\n    observer = new MutationObserver(handleMutation);\n    observer.observe(observerTarget, {\n      attributes: true\n    });\n  }\n\n  // Ativa a função\n  function init() {\n    addMutationObserver();\n  }\n  return {\n    init: init,\n    incrementarNumero: incrementarNumero,\n    animaNumeros: animaNumeros,\n    handleMutation: handleMutation,\n    addMutationObserver: addMutationObserver\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/anima-numeros.js?");

/***/ }),

/***/ "./js/animar-scroll.js":
/*!*****************************!*\
  !*** ./js/animar-scroll.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animarAoScroll)\n/* harmony export */ });\nfunction animarAoScroll() {\n  var sections = document.querySelectorAll(\"[data-anime='scroll']\");\n  var windowMetade = window.innerHeight * 0.6;\n  function animaScroll() {\n    sections.forEach(function (item) {\n      var sectionTop = item.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) {\n        item.classList.add(\"animar\");\n      } else if (item.classList.contains(\"animar\")) {\n        item.classList.remove(\"animar\");\n      }\n    });\n  }\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/animar-scroll.js?");

/***/ }),

/***/ "./js/fetch-animais.js":
/*!*****************************!*\
  !*** ./js/fetch-animais.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/anima-numeros.js\");\n\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    var ul = document.querySelector(\".numeros-itens\");\n    ul.innerHTML += \"<li>\".concat(animal.specie, \"</li><span data-numero>\").concat(animal.total, \"</span>\");\n  }\n  function fetchAnimais(_x) {\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function _fetchAnimais() {\n    _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animaisResponse, animaisJson, animaNumeros;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n          case 2:\n            animaisResponse = _context.sent;\n            _context.next = 5;\n            return animaisResponse.json();\n          case 5:\n            animaisJson = _context.sent;\n            animaisJson.forEach(function (animal) {\n              createAnimal(animal);\n            });\n            animaNumeros = (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"[data-numero]\", \".numeros\", \"animar\");\n            animaNumeros.init();\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return _fetchAnimais.apply(this, arguments);\n  }\n  fetchAnimais(\"./animais-api.json\");\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/fetch-animais.js?");

/***/ }),

/***/ "./js/fetch-bitcoin.js":
/*!*****************************!*\
  !*** ./js/fetch-bitcoin.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction initFetchBitcoin() {\n  function fetchBitcoin(_x) {\n    return _fetchBitcoin.apply(this, arguments);\n  }\n  function _fetchBitcoin() {\n    _fetchBitcoin = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var valorBitcoin, valorBitcoinJson, btcPreco;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n          case 2:\n            valorBitcoin = _context.sent;\n            _context.next = 5;\n            return valorBitcoin.json();\n          case 5:\n            valorBitcoinJson = _context.sent;\n            btcPreco = document.querySelector(\".btc-preco\");\n            btcPreco.innerText = (100 / valorBitcoinJson.BRL.sell).toFixed(5);\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return _fetchBitcoin.apply(this, arguments);\n  }\n  fetchBitcoin(\"https://blockchain.info/ticker\");\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/funcionamento.js":
/*!*****************************!*\
  !*** ./js/funcionamento.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  var funcionamento = document.querySelector(\"[data-semana]\");\n  if (funcionamento) {\n    var diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n    var horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n    var dataAgora = new Date();\n    var diaAgora = dataAgora.getDay();\n    var horarioAgora = dataAgora.getHours();\n    var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n    var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n    if (semanaAberto && horarioAberto) {\n      funcionamento.classList.add(\"aberto\");\n    }\n  }\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/funcionamento.js?");

/***/ }),

/***/ "./js/init-accordionlist.js":
/*!**********************************!*\
  !*** ./js/init-accordionlist.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordionList)\n/* harmony export */ });\nfunction initAccordionList(hideList, arrowList) {\n  var accordionList = document.querySelectorAll(hideList);\n  var suportList = document.querySelectorAll(arrowList);\n\n  // faz um toggle nas classes\n  function toggleAccordion(index) {\n    accordionList[index].classList.toggle(\"seta\");\n    suportList[index].classList.toggle(\"ativo\");\n  }\n\n  // adiciona evento na hideList\n  function addAccordionEvent() {\n    if (accordionList.length && suportList.length) {\n      accordionList.forEach(function (item, index) {\n        item.addEventListener(\"click\", function () {\n          toggleAccordion(index);\n        });\n      });\n    }\n  }\n\n  // inicia função\n  function init() {\n    addAccordionEvent();\n  }\n  return {\n    init: init,\n    toggleAccordion: toggleAccordion,\n    addAccordionEvent: addAccordionEvent\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/init-accordionlist.js?");

/***/ }),

/***/ "./js/init-tabmenu.js":
/*!****************************!*\
  !*** ./js/init-tabmenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabMenu)\n/* harmony export */ });\nfunction initTabMenu(menu, content) {\n  var tabMenu = document.querySelectorAll(menu);\n  var tabContent = document.querySelectorAll(content);\n  var activeClass = \"ativo\";\n\n  // Ativa a tab de acordo com o index\n  function activeTab(index) {\n    tabContent.forEach(function (item) {\n      item.classList.remove(activeClass);\n    });\n    tabContent[index].classList.add(activeClass);\n  }\n\n  // Adiciona eventos nas tabs\n  function addTabEvent() {\n    if (tabMenu.length && tabContent.length) {\n      tabMenu.forEach(function (item, index) {\n        item.addEventListener(\"click\", function () {\n          activeTab(index);\n        });\n      });\n    }\n  }\n\n  // Inicia função\n  function init() {\n    addTabEvent();\n  }\n  return {\n    init: init,\n    activeTab: activeTab,\n    addTabEvent: addTabEvent\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/init-tabmenu.js?");

/***/ }),

/***/ "./js/menu-dropdown.js":
/*!*****************************!*\
  !*** ./js/menu-dropdown.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ intiDropDownMenu)\n/* harmony export */ });\nfunction intiDropDownMenu() {\n  var dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\n  function outsideClick(element, callback) {\n    var html = document.documentElement;\n    var outside = \"data-outside\";\n    function handleOutsideClick(event) {\n      if (!element.contains(event.target)) {\n        element.removeAttribute(outside);\n        callback();\n        html.removeEventListener(\"click\", handleOutsideClick);\n      }\n    }\n    if (!element.hasAttribute(outside)) {\n      html.addEventListener(\"click\", handleOutsideClick);\n      element.setAttribute(outside, \"\");\n    }\n  }\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.add(\"active\");\n    outsideClick(this, function () {\n      _this.classList.remove(\"active\");\n    });\n  }\n  if (dropdownMenus.length) {\n    dropdownMenus.forEach(function (item) {\n      item.addEventListener(\"click\", handleClick);\n      item.addEventListener(\"touchstart\", handleClick);\n    });\n  }\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/menu-dropdown.js?");

/***/ }),

/***/ "./js/menu-mobile.js":
/*!***************************!*\
  !*** ./js/menu-mobile.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\nfunction initMenuMobile() {\n  function outsideClick(element, events, callback) {\n    var html = document.documentElement;\n    var outside = \"data-outside\";\n    function handleOutsideClick(event) {\n      if (!element.contains(event.target)) {\n        element.removeAttribute(outside);\n        events.forEach(function (userEvent) {\n          html.removeEventListener(userEvent, handleOutsideClick);\n        });\n        callback();\n      }\n    }\n    if (!element.hasAttribute(outside)) {\n      events.forEach(function (userEvent) {\n        setTimeout(function () {\n          html.addEventListener(userEvent, handleOutsideClick);\n        });\n      });\n      element.setAttribute(outside, \"\");\n    }\n  }\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  var eventos = [\"click\", \"touchstart\"];\n  function openMenu() {\n    menuList.classList.add(\"active\");\n    menuButton.classList.add(\"active\");\n    outsideClick(menuList, eventos, function () {\n      menuList.classList.remove(\"active\");\n      menuButton.classList.remove(\"active\");\n    });\n  }\n  if (menuButton && menuList) {\n    eventos.forEach(function (evento) {\n      menuButton.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/menu-mobile.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal(buttonOpen, buttonClose, modalContainer) {\n  var botaoAbrir = document.querySelector(buttonOpen);\n  var botaoFechar = document.querySelector(buttonClose);\n  var containerModal = document.querySelector(modalContainer);\n\n  // Abre o modal ao clicar no botão\n  function abrirModal(event) {\n    event.preventDefault();\n    containerModal.classList.add(\"ativar\");\n  }\n\n  // Fecha o modal ao clicar no X\n  function fecharModal(event) {\n    event.preventDefault();\n    containerModal.classList.remove(\"ativar\");\n  }\n\n  // Fecha o modal ao clicar fora\n  function cliqueForaModal(event) {\n    if (event.target === this) {\n      fecharModal(event);\n    }\n  }\n\n  // Adiciona os eventos aos elementos do modal\n  function addModalEvent() {\n    if (botaoAbrir && botaoFechar && containerModal) {\n      botaoAbrir.addEventListener(\"click\", abrirModal);\n      botaoFechar.addEventListener(\"click\", fecharModal);\n      containerModal.addEventListener(\"click\", cliqueForaModal);\n    }\n  }\n\n  // Inicia função\n  function init() {\n    addModalEvent();\n  }\n  return {\n    init: init,\n    addModalEvent: addModalEvent,\n    cliqueForaModal: cliqueForaModal,\n    abrirModal: abrirModal,\n    fecharModal: fecharModal\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modal.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animar_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animar-scroll.js */ \"./js/animar-scroll.js\");\n/* harmony import */ var _init_tabmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-tabmenu.js */ \"./js/init-tabmenu.js\");\n/* harmony import */ var _smooth_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smooth-menu.js */ \"./js/smooth-menu.js\");\n/* harmony import */ var _init_accordionlist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init-accordionlist.js */ \"./js/init-accordionlist.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/* harmony import */ var _menu_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-dropdown.js */ \"./js/menu-dropdown.js\");\n/* harmony import */ var _menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-mobile.js */ \"./js/menu-mobile.js\");\n/* harmony import */ var _funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funcionamento.js */ \"./js/funcionamento.js\");\n/* harmony import */ var _fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetch-bitcoin.js */ \"./js/fetch-bitcoin.js\");\n/* harmony import */ var _fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-animais.js */ \"./js/fetch-animais.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltip.js */ \"./js/tooltip.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar menuSmooth = (0,_smooth_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('[data-menu=\"list\"] a[href^=\"#\"]');\nmenuSmooth.init();\nvar accordionList = (0,_init_accordionlist_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"[data-anime='accordion'] dt\", \"[data-anime='accordion'] dd\");\naccordionList.init();\nvar tabMenu = (0,_init_tabmenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"[data-tab='menu'] img\", \"[data-tab='content'] div\");\ntabMenu.init();\nvar modal = (0,_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\nvar tooltip = (0,_tooltip_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"[data-tooltip=tooltip]\");\ntooltip.init();\n(0,_animar_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./js/smooth-menu.js":
/*!***************************!*\
  !*** ./js/smooth-menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ smoothMenu)\n/* harmony export */ });\nfunction smoothMenu(links) {\n  var linkInternos = document.querySelectorAll(links);\n\n  // Adiciona o efeito de smooth ao clicar no link\n  function smoothClick(event) {\n    event.preventDefault();\n    var href = event.currentTarget.getAttribute(\"href\");\n    var section = document.querySelector(href);\n    var top = section.offsetTop;\n    window.scrollTo({\n      top: top,\n      behavior: \"smooth\"\n    });\n  }\n\n  // Adiciona o evento aos links\n  function addLinkEvent() {\n    if (linkInternos.length) {\n      linkInternos.forEach(function (item) {\n        item.addEventListener(\"click\", smoothClick);\n      });\n    }\n  }\n\n  // Inicia a função\n  function init() {\n    addLinkEvent();\n  }\n  return {\n    init: init,\n    smoothClick: smoothClick,\n    addLinkEvent: addLinkEvent\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/smooth-menu.js?");

/***/ }),

/***/ "./js/tooltip.js":
/*!***********************!*\
  !*** ./js/tooltip.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip(tooltips) {\n  var tooltip = document.querySelector(tooltips);\n  var tooltipBoxAux;\n\n  // Move a tooltip de acordo com a posição do mouse\n  function onMouseMove(event) {\n    tooltipBoxAux.style.top = \"\".concat(event.pageY + 20, \"px\");\n    if (event.pageX + 240 > window.innerWidth) {\n      tooltipBoxAux.style.left = \"\".concat(event.pageX - 190, \"px\");\n    } else {\n      tooltipBoxAux.style.left = \"\".concat(event.pageX + 20, \"px\");\n    }\n  }\n\n  // Remove a tooltip e os eventos\n  function onMouseLeave(event) {\n    tooltipBoxAux.remove();\n    event.currentTarget.removeEventListener(\"mouseleave\", onMouseLeave);\n    event.currentTarget.removeEventListener(\"mousemove\", onMouseMove);\n  }\n\n  // Cria a tooltipbox e coloca no body\n  function criarTooltipBox(element) {\n    var tooltipBox = document.createElement(\"div\");\n    var text = element.getAttribute(\"aria-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    tooltipBoxAux = tooltipBox;\n  }\n\n  // Mostra a tooltip ao passar o mouse por cima\n  function onMouseOver(event) {\n    criarTooltipBox(event.currentTarget);\n    event.currentTarget.addEventListener(\"mouseleave\", onMouseLeave);\n    event.currentTarget.addEventListener(\"mousemove\", onMouseMove);\n  }\n\n  // Adiciona os eventos a tooltip\n  function addTooltipsEvent() {\n    if (tooltip) {\n      tooltip.addEventListener(\"mouseover\", onMouseOver);\n    }\n  }\n\n  // Inicia a função\n  function init() {\n    addTooltipsEvent();\n  }\n  return {\n    init: init,\n    onMouseMove: onMouseMove,\n    onMouseLeave: onMouseLeave,\n    criarTooltipBox: criarTooltipBox,\n    onMouseOver: onMouseOver,\n    addTooltipsEvent: addTooltipsEvent\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/tooltip.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n    Op = Object.prototype,\n    hasOwn = Op.hasOwnProperty,\n    defineProperty = Object.defineProperty || function (obj, key, desc) {\n      obj[key] = desc.value;\n    },\n    $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n    iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n    asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n    toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n      generator = Object.create(protoGenerator.prototype),\n      context = new Context(tryLocsList || []);\n    return defineProperty(generator, \"_invoke\", {\n      value: makeInvokeMethod(innerFn, self, context)\n    }), generator;\n  }\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n    NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n          value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n      reject(record.arg);\n    }\n    var previousPromise;\n    defineProperty(this, \"_invoke\", {\n      value: function value(method, arg) {\n        function callInvokeWithMethodAndArg() {\n          return new PromiseImpl(function (resolve, reject) {\n            invoke(method, arg, resolve, reject);\n          });\n        }\n        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = \"suspendedStart\";\n    return function (method, arg) {\n      if (\"executing\" === state) throw new Error(\"Generator is already running\");\n      if (\"completed\" === state) {\n        if (\"throw\" === method) throw arg;\n        return doneResult();\n      }\n      for (context.method = method, context.arg = arg;;) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n        if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n          if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n          context.dispatchException(context.arg);\n        } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n        state = \"executing\";\n        var record = tryCatch(innerFn, self, context);\n        if (\"normal\" === record.type) {\n          if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        }\n        \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(delegate, context) {\n    var methodName = context.method,\n      method = delegate.iterator[methodName];\n    if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel;\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n          next = function next() {\n            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n            return next.value = undefined, next.done = !0, next;\n          };\n        return next.next = next;\n      }\n    }\n    return {\n      next: doneResult\n    };\n  }\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), defineProperty(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (val) {\n    var object = Object(val),\n      keys = [];\n    for (var key in object) keys.push(key);\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n          record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n            hasFinally = hasOwn.call(entry, \"finallyLoc\");\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;