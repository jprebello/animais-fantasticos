export default function initFuncionamento(horarios, classeAtivar) {
  const funcionamento = document.querySelector(horarios);
  const activeClass = classeAtivar;

  // Verifica qual os dados de funcionamento do local
  function dadosFuncionamento() {
    const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
    return {
      diasSemana,
      horarioSemana,
    };
  }

  // Verifica qual são os dados de agora do usuário
  function dadosAgora() {
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getUTCHours() - 3;
    return {
      dataAgora,
      diaAgora,
      horarioAgora,
    };
  }

  // Verifica se está aberto
  function estaAberto() {
    const semanaAberto =
      dadosFuncionamento().diasSemana.indexOf(dadosAgora().diaAgora) !== -1;

    const horarioAberto =
      dadosAgora().horarioAgora >= dadosFuncionamento().horarioSemana[0] &&
      dadosAgora().horarioAgora < dadosFuncionamento().horarioSemana[1];

    return semanaAberto && horarioAberto;
  }

  // Ativa a classe caso esteja aberto
  function ativaAberto() {
    if (estaAberto()) {
      funcionamento.classList.add(activeClass);
    }
  }

  // Ativa a função
  function init() {
    if (funcionamento) {
      dadosFuncionamento();
      dadosAgora();
      ativaAberto();
    }
  }

  return {
    init,
    ativaAberto,
    estaAberto,
    dadosAgora,
    dadosFuncionamento,
  };
}
