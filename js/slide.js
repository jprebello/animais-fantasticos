import debounce from "./debounce.js";

export default function initSlide() {
  const slide = document.querySelector(".slide");
  const wrapper = document.querySelector(".wrapper");
  const changeEvent = new Event("changeEvent");
  const dist = {
    valorInicial: 0,
    valorFinal: 0,
    valorAtual: 0,
  };
  const info = {
    active: 0,
    prev: undefined,
    next: 1,
  };

  // Adiciona uma animação no slide.
  function transition(active) {
    slide.style.transition = active ? "transform .3s" : "";
  }

  // Retornando o centro de cada elemento.
  function slideCentro(element) {
    const margin = (wrapper.offsetWidth - element.offsetWidth) / 2;
    return -(element.offsetLeft - margin);
  }

  // Array com todos os elementos e sua posição no centro.
  const slideArray = [...slide.children].map((element) => ({
    element,
    position: slideCentro(element),
  }));

  // Atualiza os valores de info de acordo com o index passado.
  function infoSlide(index) {
    const last = slideArray.length - 1;
    info.active = index;
    info.prev = index ? index - 1 : undefined;
    info.next = index === last ? undefined : index + 1;
    info.active = index;
  }

  // Pega o valor anterior(valor atual + valor modificado) e adiciona numa variável. Adiciona o translate3d ao vivo.
  function addStyle(valor) {
    dist.valorAnterior = valor;
    slide.style.transform = `translate3d(${valor}px, 0, 0)`;
  }

  // Adiciona a classe ativo para o elemento que estiver no centro e remove dos outros.
  function mudarClassAtivado() {
    slideArray.forEach((item) => {
      item.element.classList.remove("ativado");
    });
    slideArray[info.active].element.classList.add("ativado");
  }

  // Adiciona o elemento do index no centro da tela, atualiza os valores de info e atualiza o valor final(valor atual do translate3d).
  function mudarSlide(index) {
    addStyle(slideArray[index].position);
    infoSlide(index);
    dist.valorFinal = slideArray[index].position;
    mudarClassAtivado();
    wrapper.dispatchEvent(changeEvent);
  }

  // Verifica se o usuário está no celular ou computador, atribui a localização atual do mouse numa variável. Inicia a função para adicionar o translate3d com a distância atual + o valor modificado como argumento.
  function onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    dist.valorAtual = pointerPosition;
    dist.valorModificado = (dist.valorAtual - dist.valorInicial) * 1.5;
    addStyle(dist.valorFinal + dist.valorModificado);
  }

  // Verifica se o usuário está no celular ou computador, atribui o local do clique(eixo X) inicial numa variável e ativa a função onMove. Desativa a animação.
  function onStart(event) {
    let movetype;
    if (event.type === "mousedown") {
      event.preventDefault();
      dist.valorInicial = event.clientX;
      movetype = "mousemove";
    } else {
      dist.valorInicial = event.changedTouches[0].clientX;
      movetype = "touchmove";
    }
    wrapper.addEventListener(movetype, onMove);
    transition(false);
  }

  // Muda para o elemento anterior.
  function ativarPrevSlide() {
    if (info.prev !== undefined) {
      mudarSlide(info.prev);
      transition(true);
    }
  }

  // Muda para o próximo elemento.
  function ativarNextSlide() {
    if (info.next !== undefined) {
      mudarSlide(info.next);
      transition(true);
    }
  }

  // Se o movimento na tela for de mais de 100 ou menos de 100 muda o elemento do centro, se o valor não for esses ele mantem o elemento atual no centro.
  function mudarSlideOnEnd() {
    if (dist.valorModificado > 100 && info.prev !== undefined) {
      ativarPrevSlide();
    } else if (dist.valorModificado < -100 && info.next !== undefined) {
      ativarNextSlide();
    } else {
      mudarSlide(info.active);
    }
  }

  // Verifica se o usuário está no celular ou computador, desativa a função onMove. Adiciona o valor final como o valor que o usuário moveu na útlima vez, adiciona animação e ativa função para mudar entre imagens.
  function onEnd(event) {
    const movetype = event.type === "mouseup" ? "mousemove" : "touchmove";
    wrapper.removeEventListener(movetype, onMove);
    dist.valorFinal = dist.valorAnterior;
    transition(true);
    mudarSlideOnEnd();
  }

  // Função usada para atualizar o slide caso o usuário redimensione a página, atualizando o valor de position do slideArray.
  function onResize() {
    setTimeout(() => {
      slideArray.forEach((item) => {
        item.position = slideCentro(item.element);
      });
      mudarSlide(info.active);
    }, 1000);
  }

  // Cria uma ul com varios itens de controle do slide.
  function criarControle() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index}">${index}</a></li>`;
    });
    wrapper.appendChild(control);
    return control;
  }

  // Cria o controle ou recebe um do usuário, se criado adiciona no html e coloca o evento para cada item do controle relacionando ao slide.
  function addControl(customControl) {
    const control = document.querySelector(customControl) || criarControle();
    const controlArray = [...control.children];
    // eslint-disable-next-line no-use-before-define
    controlArray.forEach(eventControle);
    return controlArray;
  }

  // Cria uma array com os itens do controle, adiciona a classe ativo para o item relacionado a foto centralizada.
  const controlArray = addControl(".custom-control");

  // Adiciona a classe de ativo no controle.
  function ativarControlClass() {
    controlArray.forEach((item) => item.classList.remove("ativado"));
    controlArray[info.active].classList.add("ativado");
    transition(true);
  }

  // Relaciona o controle com o slide, que mudar de acordo com o slide.
  function eventControle(item, index) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      mudarSlide(index);
    });
    wrapper.addEventListener("changeEvent", ativarControlClass);
  }

  // Centraliza o primeiro elemento de início.
  mudarSlide(0);

  // Adicionando eventos.
  function addEvents() {
    wrapper.addEventListener("mousedown", onStart);
    wrapper.addEventListener("mouseup", onEnd);
    wrapper.addEventListener("touchstart", onStart);
    wrapper.addEventListener("touchend", onEnd);
    window.addEventListener("resize", debounce(onResize, 200));
  }

  // Inicia função.
  function init() {
    addEvents();
  }

  return {
    init,
    addEvents,
    mudarSlide,
    eventControle,
    ativarControlClass,
    addControl,
    criarControle,
    onResize,
    onEnd,
    mudarSlideOnEnd,
    ativarNextSlide,
    ativarPrevSlide,
    onStart,
    onMove,
    mudarClassAtivado,
    addStyle,
    infoSlide,
    slideCentro,
    transition,
  };
}
