export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    const valorBitcoin = await fetch(url);
    const valorBitcoinJson = await valorBitcoin.json();

    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (100 / valorBitcoinJson.BRL.sell).toFixed(5);
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
