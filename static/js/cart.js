for (var key in sessionStorage) {
    // console.log(key)
    // i = number(key) + 0;
    if (key != 0 && isNumeric(key)) {
    bagDiv = document.getElementById("bag");
    bagItem = document.createElement("div");
    bagItem.setAttribute("class", "bag-item");
    bagDiv.appendChild(bagItem);

    itemImg = document.createElement("div");
    itemImg.setAttribute("class", "item-img");
    bagItem.appendChild(itemImg);

    Img = document.createElement("img");
    Img.setAttribute("src", JSON.parse(sessionStorage.getItem(key)).img)
    itemImg.appendChild(Img);

    itemDesc = document.createElement("div");
    itemDesc.setAttribute("class", "item-desc");
    bagItem.appendChild(itemDesc);

    ItemDescTitle = document.createElement("div");
    ItemDescTitle.setAttribute("class", "item-desc-title");
    itemDesc.appendChild(ItemDescTitle);

    H1 = document.createElement("h1");
    H1.innerHTML = JSON.parse(sessionStorage.getItem(key)).name;
    ItemDescTitle.appendChild(H1);
    Span = document.createElement("span");
    Span.innerHTML = JSON.parse(sessionStorage.getItem(key)).price;
    ItemDescTitle.appendChild(Span);

    Sub1 = document.createElement("sub");
    Sub1.innerHTML = JSON.parse(sessionStorage.getItem(key)).feature;
    itemDesc.appendChild(Sub1);
        if (JSON.parse(sessionStorage.getItem(key)).size != 0) {
        Sub2 = document.createElement("sub");
        Sub2.innerHTML = "Размер: " + JSON.parse(sessionStorage.getItem(key)).size;
        itemDesc.appendChild(Sub2);
    }
    
    itemColor = document.createElement("div");
    itemColor.setAttribute("class", "item-color");
    itemColor.setAttribute("style", "background-color:" + JSON.parse(sessionStorage.getItem(key)).color);
    itemDesc.appendChild(itemColor);

    deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("onclick", "deleteCart(this.id)");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.setAttribute("id", key);
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("viewbox", "0 0 16 16");
    svg.innerHTML = '<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>';
    deleteBtn.appendChild(svg);
    itemDesc.appendChild(deleteBtn);
    } 
}

function deleteCart(id) {
    console.log(id);
    sessionStorage.removeItem(id);
    location.reload();
}

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
subtotal.innerText = sum(prices) + " ₸";
total.innerText = sum(prices) + " ₸";
// console.log(sum(prices));

function toBilling() {
    total = document.getElementById("total").innerText;
    total = total.replace(/ ₸/g, '');
    if (total != 0) {
        console.log("here")
        window.location.href = '/products/billing'
    }
}

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