var usd = document.querySelector('#usd')
var gbp = document.querySelector('#gbp')
var euro = document.querySelector('#euro')
var cost = document.querySelector('#price')


usd.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var price = JSON.parse(this.responseText).bpi
            cost.innerHTML = `${price.USD.rate} ${price.USD.code}`
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    XHR.send();
})

gbp.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var price = JSON.parse(this.responseText).bpi
            cost.innerHTML = `${price.GBP.rate} ${price.GBP.code}`
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    XHR.send();
})

euro.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var price = JSON.parse(this.responseText).bpi
            cost.innerHTML = `${price.EUR.rate} ${price.EUR.code}`
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    XHR.send();
})

window.onload = function () {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var price = JSON.parse(this.responseText).bpi
            cost.innerHTML = `${price.USD.rate} ${price.USD.code}`
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    XHR.send();

}