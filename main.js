let web3;
let contract;

async function connectWallet() {
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            document.getElementById("status").innerText = "✅ Connected: " + accounts[0];
            contract = new web3.eth.Contract(abi, contractAddress);
            const balance = await contract.methods.balanceOf(accounts[0]).call();
            const decimals = await contract.methods.decimals().call();
            const formatted = balance / Math.pow(10, decimals);
            document.getElementById("balance").innerText = "G3X24 Balance: " + formatted;
        } catch (err) {
            document.getElementById("status").innerText = "❌ Connection failed.";
            console.error(err);
        }
    } else {
        alert("⚠️ No Web3 provider detected. Please install MetaMask or Bitget Wallet.");
    }
}

document.getElementById("connectButton").addEventListener("click", connectWallet);
