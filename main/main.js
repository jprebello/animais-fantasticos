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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animarAoScroll)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ \"./js/debounce.js\");\n\n\nfunction animarAoScroll(sessoes) {\n  var sections = document.querySelectorAll(sessoes);\n  var windowMetade = window.innerHeight * 0.8;\n\n  // Retorna um objeto com a sessão e sua distancia do topo da página - 60% da vh\n  function getDistance() {\n    var distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sections).map(function (section) {\n      var offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - windowMetade)\n      };\n    });\n    return distance;\n  }\n  var distance = getDistance();\n\n  // Compara a distancia entre o offsettop da sessão e o quanto o scroll da página desceu, aplicando a animação\n  function checkDistance() {\n    distance.forEach(function (item) {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add(\"animar\");\n      } else if (item.element.classList.contains(\"animar\")) {\n        item.element.classList.remove(\"animar\");\n      }\n    });\n  }\n\n  // Variável que recebe o retorna da função de debounce\n  var debouncedScroll = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(checkDistance, 50);\n\n  // Ativa função\n  function init() {\n    if (sections.length) {\n      checkDistance();\n      window.addEventListener(\"scroll\", debouncedScroll);\n    }\n  }\n  return {\n    init: init,\n    getDistance: getDistance,\n    checkDistance: checkDistance\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/animar-scroll.js?");

/***/ }),

/***/ "./js/debounce.js":
/*!************************!*\
  !*** ./js/debounce.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  var timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    clearTimeout(timer);\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/debounce.js?");

/***/ }),

/***/ "./js/fetch-animais.js":
/*!*****************************!*\
  !*** ./js/fetch-animais.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/anima-numeros.js\");\n\n\n\nfunction initFetchAnimais(url) {\n  // Cria uma lista com informações dos animais\n  function createAnimal(animal) {\n    var ul = document.querySelector(\".numeros-itens\");\n    ul.innerHTML += \"<li>\".concat(animal.specie, \"</li><span data-numero>\").concat(animal.total, \"</span>\");\n  }\n\n  // Puxa os animais atraves de um arquivo json\n  function fetchAnimais() {\n    return _fetchAnimais.apply(this, arguments);\n  } // Ativa a função\n  function _fetchAnimais() {\n    _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var animaisResponse, animaisJson, animaNumeros;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n          case 2:\n            animaisResponse = _context.sent;\n            _context.next = 5;\n            return animaisResponse.json();\n          case 5:\n            animaisJson = _context.sent;\n            animaisJson.forEach(function (animal) {\n              createAnimal(animal);\n            });\n            animaNumeros = (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"[data-numero]\", \".numeros\", \"animar\");\n            animaNumeros.init();\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function init() {\n    fetchAnimais();\n  }\n  return {\n    init: init,\n    fetchAnimais: fetchAnimais,\n    createAnimal: createAnimal\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/fetch-animais.js?");

/***/ }),

/***/ "./js/fetch-bitcoin.js":
/*!*****************************!*\
  !*** ./js/fetch-bitcoin.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction initFetchBitcoin(url, target) {\n  // Puxa de uma API o valor de bitcoin atual e converte para 100 reais em bitcoin\n  function fetchBitcoin() {\n    return _fetchBitcoin.apply(this, arguments);\n  } // Ativa a função\n  function _fetchBitcoin() {\n    _fetchBitcoin = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var valorBitcoin, valorBitcoinJson, btcPreco;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n          case 2:\n            valorBitcoin = _context.sent;\n            _context.next = 5;\n            return valorBitcoin.json();\n          case 5:\n            valorBitcoinJson = _context.sent;\n            btcPreco = document.querySelector(target);\n            btcPreco.innerText = (100 / valorBitcoinJson.BRL.sell).toFixed(5);\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return _fetchBitcoin.apply(this, arguments);\n  }\n  function init() {\n    fetchBitcoin();\n  }\n  return {\n    init: init,\n    fetchBitcoin: fetchBitcoin\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/funcionamento.js":
/*!*****************************!*\
  !*** ./js/funcionamento.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento(horarios, classeAtivar) {\n  var funcionamento = document.querySelector(horarios);\n  var activeClass = classeAtivar;\n\n  // Verifica qual os dados de funcionamento do local\n  function dadosFuncionamento() {\n    var diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n    var horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n    return {\n      diasSemana: diasSemana,\n      horarioSemana: horarioSemana\n    };\n  }\n\n  // Verifica qual são os dados de agora do usuário\n  function dadosAgora() {\n    var dataAgora = new Date();\n    var diaAgora = dataAgora.getDay();\n    var horarioAgora = dataAgora.getUTCHours() - 3;\n    return {\n      dataAgora: dataAgora,\n      diaAgora: diaAgora,\n      horarioAgora: horarioAgora\n    };\n  }\n\n  // Verifica se está aberto\n  function estaAberto() {\n    var semanaAberto = dadosFuncionamento().diasSemana.indexOf(dadosAgora().diaAgora) !== -1;\n    var horarioAberto = dadosAgora().horarioAgora >= dadosFuncionamento().horarioSemana[0] && dadosAgora().horarioAgora < dadosFuncionamento().horarioSemana[1];\n    return semanaAberto && horarioAberto;\n  }\n\n  // Ativa a classe caso esteja aberto\n  function ativaAberto() {\n    if (estaAberto()) {\n      funcionamento.classList.add(activeClass);\n    }\n  }\n\n  // Ativa a função\n  function init() {\n    if (funcionamento) {\n      dadosFuncionamento();\n      dadosAgora();\n      ativaAberto();\n    }\n  }\n  return {\n    init: init,\n    ativaAberto: ativaAberto,\n    estaAberto: estaAberto,\n    dadosAgora: dadosAgora,\n    dadosFuncionamento: dadosFuncionamento\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/funcionamento.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ intiDropDownMenu)\n/* harmony export */ });\nfunction intiDropDownMenu(dropdownMenu) {\n  var dropdownMenus = document.querySelectorAll(dropdownMenu);\n\n  // Se o usuário clicar em qualquer parte do html que não seja o menu-dropdown, este irá sumir.\n  function outsideClick(element, callback) {\n    var html = document.documentElement;\n    var outside = \"data-outside\";\n    function handleOutsideClick(event) {\n      if (!element.contains(event.target)) {\n        element.removeAttribute(outside);\n        callback();\n        html.removeEventListener(\"click\", handleOutsideClick);\n      }\n    }\n    if (!element.hasAttribute(outside)) {\n      html.addEventListener(\"click\", handleOutsideClick);\n      element.setAttribute(outside, \"\");\n    }\n  }\n\n  // Previne o event de mandar o usuário para outra página e faz com que o menu fique fixo.\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.add(\"active\");\n    outsideClick(this, function () {\n      _this.classList.remove(\"active\");\n    });\n  }\n\n  // Ativa a função handleClick quando o usuário clicar no elemento.\n  function addDropdownMenusEvent() {\n    if (dropdownMenus.length) {\n      dropdownMenus.forEach(function (item) {\n        item.addEventListener(\"click\", handleClick);\n      });\n    }\n  }\n\n  // Ativa a função\n  function init() {\n    addDropdownMenusEvent();\n  }\n  return {\n    init: init,\n    handleClick: handleClick,\n    outsideClick: outsideClick\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/menu-dropdown.js?");

/***/ }),

/***/ "./js/menu-mobile.js":
/*!***************************!*\
  !*** ./js/menu-mobile.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\nfunction initMenuMobile(button, list) {\n  var menuButton = document.querySelector(button);\n  var menuList = document.querySelector(list);\n  var eventos = [\"click\", \"touchstart\"];\n\n  // Se o usuário clicar em qualquer parte do html que não seja o menu-mobile, este irá sumir.\n  function outsideClick(element, events, callback) {\n    var html = document.documentElement;\n    var outside = \"data-outside\";\n    function handleOutsideClick(event) {\n      if (!element.contains(event.target)) {\n        element.removeAttribute(outside);\n        events.forEach(function (userEvent) {\n          html.removeEventListener(userEvent, handleOutsideClick);\n        });\n        callback();\n      }\n    }\n    if (!element.hasAttribute(outside)) {\n      events.forEach(function (userEvent) {\n        setTimeout(function () {\n          html.addEventListener(userEvent, handleOutsideClick);\n        });\n      });\n      element.setAttribute(outside, \"\");\n    }\n  }\n\n  // Ao clicar no menu-button o usuário irá abrir o menu-list.\n  function openMenu(event) {\n    event.preventDefault();\n    menuList.classList.add(\"active\");\n    menuButton.classList.add(\"active\");\n    outsideClick(menuList, eventos, function () {\n      menuList.classList.remove(\"active\");\n      menuButton.classList.remove(\"active\");\n    });\n  }\n\n  // Adiciona os eventos ao botao e ao menu.\n  function addMenuMobileEvents() {\n    if (menuButton && menuList) {\n      eventos.forEach(function (evento) {\n        menuButton.addEventListener(evento, openMenu);\n      });\n    }\n  }\n\n  // Ativa a função\n  function init() {\n    addMenuMobileEvents();\n  }\n  return {\n    init: init,\n    outsideClick: outsideClick,\n    openMenu: openMenu\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/menu-mobile.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animar_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animar-scroll.js */ \"./js/animar-scroll.js\");\n/* harmony import */ var _init_tabmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-tabmenu.js */ \"./js/init-tabmenu.js\");\n/* harmony import */ var _smooth_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smooth-menu.js */ \"./js/smooth-menu.js\");\n/* harmony import */ var _init_accordionlist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init-accordionlist.js */ \"./js/init-accordionlist.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/* harmony import */ var _menu_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-dropdown.js */ \"./js/menu-dropdown.js\");\n/* harmony import */ var _menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-mobile.js */ \"./js/menu-mobile.js\");\n/* harmony import */ var _funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funcionamento.js */ \"./js/funcionamento.js\");\n/* harmony import */ var _fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetch-bitcoin.js */ \"./js/fetch-bitcoin.js\");\n/* harmony import */ var _fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-animais.js */ \"./js/fetch-animais.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltip.js */ \"./js/tooltip.js\");\n/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slide.js */ \"./js/slide.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar menuSmooth = (0,_smooth_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('[data-menu=\"list\"] a[href^=\"#\"]');\nmenuSmooth.init();\nvar accordionList = (0,_init_accordionlist_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"[data-anime='accordion'] dt\", \"[data-anime='accordion'] dd\");\naccordionList.init();\nvar tabMenu = (0,_init_tabmenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"[data-tab='menu'] img\", \"[data-tab='content'] div\");\ntabMenu.init();\nvar modal = (0,_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\nvar tooltip = (0,_tooltip_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"[data-tooltip=tooltip]\");\ntooltip.init();\nvar fetchAnimais = (0,_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"./animais-api.json\");\nfetchAnimais.init();\nvar fetchBitcoin = (0,_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\nfetchBitcoin.init();\nvar animarScroll = (0,_animar_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"[data-anime='scroll']\");\nanimarScroll.init();\nvar dropdownMenu = (0,_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"[data-dropdown]\");\ndropdownMenu.init();\nvar menuMobile = (0,_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('[data-menu=\"button\"]', '[data-menu=\"list\"]');\nmenuMobile.init();\nvar funcionamento = (0,_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"[data-semana]\", \"aberto\");\nfuncionamento.init();\nvar slide = (0,_slide_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\nslide.init();\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./js/slide.js":
/*!*********************!*\
  !*** ./js/slide.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSlide)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ \"./js/debounce.js\");\n\n\nfunction initSlide() {\n  var slide = document.querySelector(\".slide\");\n  var wrapper = document.querySelector(\".wrapper\");\n  var changeEvent = new Event(\"changeEvent\");\n  var dist = {\n    valorInicial: 0,\n    valorFinal: 0,\n    valorAtual: 0\n  };\n  var info = {\n    active: 0,\n    prev: undefined,\n    next: 1\n  };\n\n  // Adiciona uma animação no slide.\n  function transition(active) {\n    slide.style.transition = active ? \"transform .3s\" : \"\";\n  }\n\n  // Retornando o centro de cada elemento.\n  function slideCentro(element) {\n    var margin = (wrapper.offsetWidth - element.offsetWidth) / 2;\n    return -(element.offsetLeft - margin);\n  }\n\n  // Array com todos os elementos e sua posição no centro.\n  var slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slide.children).map(function (element) {\n    return {\n      element: element,\n      position: slideCentro(element)\n    };\n  });\n\n  // Atualiza os valores de info de acordo com o index passado.\n  function infoSlide(index) {\n    var last = slideArray.length - 1;\n    info.active = index;\n    info.prev = index ? index - 1 : undefined;\n    info.next = index === last ? undefined : index + 1;\n    info.active = index;\n  }\n\n  // Pega o valor anterior(valor atual + valor modificado) e adiciona numa variável. Adiciona o translate3d ao vivo.\n  function addStyle(valor) {\n    dist.valorAnterior = valor;\n    slide.style.transform = \"translate3d(\".concat(valor, \"px, 0, 0)\");\n  }\n\n  // Adiciona a classe ativo para o elemento que estiver no centro e remove dos outros.\n  function mudarClassAtivado() {\n    slideArray.forEach(function (item) {\n      item.element.classList.remove(\"ativado\");\n    });\n    slideArray[info.active].element.classList.add(\"ativado\");\n  }\n\n  // Adiciona o elemento do index no centro da tela, atualiza os valores de info e atualiza o valor final(valor atual do translate3d).\n  function mudarSlide(index) {\n    addStyle(slideArray[index].position);\n    infoSlide(index);\n    dist.valorFinal = slideArray[index].position;\n    mudarClassAtivado();\n    wrapper.dispatchEvent(changeEvent);\n  }\n\n  // Verifica se o usuário está no celular ou computador, atribui a localização atual do mouse numa variável. Inicia a função para adicionar o translate3d com a distância atual + o valor modificado como argumento.\n  function onMove(event) {\n    var pointerPosition = event.type === \"mousemove\" ? event.clientX : event.changedTouches[0].clientX;\n    dist.valorAtual = pointerPosition;\n    dist.valorModificado = (dist.valorAtual - dist.valorInicial) * 1.5;\n    addStyle(dist.valorFinal + dist.valorModificado);\n  }\n\n  // Verifica se o usuário está no celular ou computador, atribui o local do clique(eixo X) inicial numa variável e ativa a função onMove. Desativa a animação.\n  function onStart(event) {\n    var movetype;\n    if (event.type === \"mousedown\") {\n      event.preventDefault();\n      dist.valorInicial = event.clientX;\n      movetype = \"mousemove\";\n    } else {\n      dist.valorInicial = event.changedTouches[0].clientX;\n      movetype = \"touchmove\";\n    }\n    wrapper.addEventListener(movetype, onMove);\n    transition(false);\n  }\n\n  // Muda para o elemento anterior.\n  function ativarPrevSlide() {\n    if (info.prev !== undefined) {\n      mudarSlide(info.prev);\n      transition(true);\n    }\n  }\n\n  // Muda para o próximo elemento.\n  function ativarNextSlide() {\n    if (info.next !== undefined) {\n      mudarSlide(info.next);\n      transition(true);\n    }\n  }\n\n  // Se o movimento na tela for de mais de 100 ou menos de 100 muda o elemento do centro, se o valor não for esses ele mantem o elemento atual no centro.\n  function mudarSlideOnEnd() {\n    if (dist.valorModificado > 100 && info.prev !== undefined) {\n      ativarPrevSlide();\n    } else if (dist.valorModificado < -100 && info.next !== undefined) {\n      ativarNextSlide();\n    } else {\n      mudarSlide(info.active);\n    }\n  }\n\n  // Verifica se o usuário está no celular ou computador, desativa a função onMove. Adiciona o valor final como o valor que o usuário moveu na útlima vez, adiciona animação e ativa função para mudar entre imagens.\n  function onEnd(event) {\n    var movetype = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\n    wrapper.removeEventListener(movetype, onMove);\n    dist.valorFinal = dist.valorAnterior;\n    transition(true);\n    mudarSlideOnEnd();\n  }\n\n  // Função usada para atualizar o slide caso o usuário redimensione a página, atualizando o valor de position do slideArray.\n  function onResize() {\n    setTimeout(function () {\n      slideArray.forEach(function (item) {\n        item.position = slideCentro(item.element);\n      });\n      mudarSlide(info.active);\n    }, 1000);\n  }\n\n  // Cria uma ul com varios itens de controle do slide.\n  function criarControle() {\n    var control = document.createElement(\"ul\");\n    control.dataset.control = \"slide\";\n    slideArray.forEach(function (item, index) {\n      control.innerHTML += \"<li><a href=\\\"#slide\".concat(index, \"\\\">\").concat(index, \"</a></li>\");\n    });\n    wrapper.appendChild(control);\n    return control;\n  }\n\n  // Cria o controle ou recebe um do usuário, se criado adiciona no html e coloca o evento para cada item do controle relacionando ao slide.\n  function addControl(customControl) {\n    var control = document.querySelector(customControl) || criarControle();\n    var controlArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(control.children);\n    // eslint-disable-next-line no-use-before-define\n    controlArray.forEach(eventControle);\n    return controlArray;\n  }\n\n  // Cria uma array com os itens do controle, adiciona a classe ativo para o item relacionado a foto centralizada.\n  var controlArray = addControl(\".custom-control\");\n\n  // Adiciona a classe de ativo no controle.\n  function ativarControlClass() {\n    controlArray.forEach(function (item) {\n      return item.classList.remove(\"ativado\");\n    });\n    controlArray[info.active].classList.add(\"ativado\");\n    transition(true);\n  }\n\n  // Relaciona o controle com o slide, que mudar de acordo com o slide.\n  function eventControle(item, index) {\n    item.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      mudarSlide(index);\n    });\n    wrapper.addEventListener(\"changeEvent\", ativarControlClass);\n  }\n\n  // Centraliza o primeiro elemento de início.\n  mudarSlide(0);\n\n  // Adicionando eventos.\n  function addEvents() {\n    wrapper.addEventListener(\"mousedown\", onStart);\n    wrapper.addEventListener(\"mouseup\", onEnd);\n    wrapper.addEventListener(\"touchstart\", onStart);\n    wrapper.addEventListener(\"touchend\", onEnd);\n    window.addEventListener(\"resize\", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(onResize, 200));\n  }\n\n  // Inicia função.\n  function init() {\n    addEvents();\n  }\n  return {\n    init: init,\n    addEvents: addEvents,\n    mudarSlide: mudarSlide,\n    eventControle: eventControle,\n    ativarControlClass: ativarControlClass,\n    addControl: addControl,\n    criarControle: criarControle,\n    onResize: onResize,\n    onEnd: onEnd,\n    mudarSlideOnEnd: mudarSlideOnEnd,\n    ativarNextSlide: ativarNextSlide,\n    ativarPrevSlide: ativarPrevSlide,\n    onStart: onStart,\n    onMove: onMove,\n    mudarClassAtivado: mudarClassAtivado,\n    addStyle: addStyle,\n    infoSlide: infoSlide,\n    slideCentro: slideCentro,\n    transition: transition\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/slide.js?");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

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