prices = [];
for (var key in sessionStorage) {
    if (key != 0 && isNumeric(key)) {
        price = JSON.parse(sessionStorage.getItem(key)).price;
        price = price.replace(/ ₸/g, '');
        prices.push(price);
    }
}
subtotal = document.getElementById("subtotal");
total = document.getElementById("total");
hiddenTotal = document.getElementById("hiddenTotal");
subtotal.innerText = sum(prices) + " ₸";
total.innerText = sum(prices) + " ₸";
hiddenTotal.value = sum(prices);

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function sum(input) {

    if (toString.call(input) !== "[object Array]")
        return false;

    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

var afterWeek = new Date(+new Date + 6048e5);
Month = afterWeek.getMonth();
Day = afterWeek.getDate();
switch (Month) {
    case 0: fMonth = "января"; break;
    case 1: fMonth = "февраля"; break;
    case 2: fMonth = "марта"; break;
    case 3: fMonth = "апреля"; break;
    case 4: fMonth = "мая"; break;
    case 5: fMonth = "июня"; break;
    case 6: fMonth = "июля"; break;
    case 7: fMonth = "августа"; break;
    case 8: fMonth = "сентября"; break;
    case 9: fMonth = "октября"; break;
    case 10: fMonth = "ноября"; break;
    case 11: fMonth = "декабря"; break;
}
orderDate = document.getElementById("order-date");
hiddenDate = document.getElementById("hiddenArrive");
orderDate.innerText = Day + " " + fMonth;
hiddenDate.value = Day + " " + fMonth;

hiddenInfo = document.getElementById("hidden-info");
productPackage = []
id = 1;
for (var key in sessionStorage) {
    if (key != 0 && isNumeric(key)) {
        // productPackage.push(JSON.stringify(sessionStorage.getItem(key)))
        // console.log(sessionStorage.getItem(key))
        allData = "{" + "\"" + id + "\"" + ":" + sessionStorage.getItem(key) + "}"
        id++
        productPackage.push(allData)
    }
}
hiddenInfo.value = productPackage;
console.log(productPackage)

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function purchase() {
    sessionStorage.clear();
    // window.location.href = '/products/'
}

