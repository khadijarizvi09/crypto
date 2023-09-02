var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doc = document.getElementById("dogecoin");





var settinh = {
    "async" : true,
    "scrossDomain" : true,
    "url" :"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers" : {}
}
$.ajax(settinh).done(function (response){
  console.log(response);
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doc.innerHTML = response.dogecoin.usd;
  
});