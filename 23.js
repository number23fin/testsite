const PERIOD = 23;


const start = async function() {
  const provider = new ethers.providers.JsonRpcProvider('https://bsctestapi.terminet.io/rpc');

  const contract = new ethers.Contract("0x14dAE0F25519Ea3df5E98FB61fe8EF0120930660", [
    'function _rewardCounter() public view returns (uint256)',
    'function _lastWinner() public view returns (address)'
  ], provider)

  let count = await contract._rewardCounter()
  let lastWinner = await contract._lastWinner()

  console.log(count)
  console.log(lastWinner)

  let toGo = PERIOD - count;

  document.getElementById("current-count").innerHTML = count;
  document.getElementById("to-go").innerHTML = toGo.toString();
  document.getElementById("count-plural").innerHTML = toGo === 1 ? "" : "s";
  document.getElementById("last-address").innerHTML = lastWinner.substring(0, 7) + '....' + lastWinner.substring(lastWinner.length - 5, lastWinner.length)
}

start();
