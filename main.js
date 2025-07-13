let web3;

window.addEventListener("load", async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    document.getElementById("connectWallet").onclick = connectWallet;
  } else {
    alert("⚠️ Web3 Wallet not detected (MetaMask or Bitget)");
  }
});

async function connectWallet() {
  try {
    await ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    const user = accounts[0];

    document.getElementById("status").innerHTML = "✅ Connected:<br>" + user;

    const token = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);
    const balanceRaw = await token.methods.balanceOf(user).call();
    const balance = balanceRaw / 10 ** TOKEN_DECIMALS;

    document.getElementById("balance").innerText = "G3X24 Balance: " + balance.toFixed(8);
  } catch (error) {
    console.error(error);
    document.getElementById("status").innerText = "❌ Connection failed.";
    document.getElementById("balance").innerText = "G3X24 Balance: --";
  }
}
