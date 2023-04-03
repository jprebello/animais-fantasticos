export default function initFetchBitcoin(url, target) {
  // Puxa de uma API o valor de bitcoin atual e converte para 100 reais em bitcoin
  async function fetchBitcoin() {
    const valorBitcoin = await fetch(url);
    const valorBitcoinJson = await valorBitcoin.json();

    const btcPreco = document.querySelector(target);
    btcPreco.innerText = (100 / valorBitcoinJson.BRL.sell).toFixed(5);
  }

  // Ativa a função
  function init(){
    fetchBitcoin();
  }

  return{
    init,
    fetchBitcoin,
  }
}
