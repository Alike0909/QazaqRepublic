function showProducts(id) {
    id_name = "product-" + id;
    product = document.getElementById(id_name);
    product.style.display = "block";

    var length = getOffset(document.getElementById("table-" + id)).top;
    var top = String(length + 40);
    product.style.top = top + "px";
}

function hideProducts(id) {
    id_name = "product-" + id;
    product = document.getElementById(id_name);
    product.style.display = "none";
}

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

storage = []
objects = document.getElementsByClassName("object");
for (var i = 0; i < objects.length; i++) {
    object = objects[i].value
    object = object.toString().replace(/\\/g, '');
    object = object.replace(/},{/g, ',');
    object = object.slice(1, -1)
    object = "{" + object + "}"
    object = JSON.parse(object)
    storage.push(object)
}

productTable = document.getElementsByClassName("ProductTable")
for (var j = 0; j < productTable.length; j++) {
    for (item in storage[j]) {
        tr = document.createElement("tr");
        productTable[j].appendChild(tr);
        name_td = document.createElement("td");
        size_td = document.createElement("td");
        color_td = document.createElement("td");
        price_td = document.createElement("td");
        tr.appendChild(name_td);
        tr.appendChild(size_td);
        tr.appendChild(color_td);
        tr.appendChild(price_td);
        name_td.innerText = storage[j][item].name;
        size_td.innerText = storage[j][item].size;
        colorDiv = document.createElement("div");
        color_td.appendChild(colorDiv);
        colorDiv.style.width = "13px"
        colorDiv.style.height = "13px"
        colorDiv.style.borderRadius = "2px"
        colorDiv.style.background = storage[j][item].color;

        price_td.innerText = storage[j][item].price;
    }
}


const windowInnerWidth = document.documentElement.clientWidth;
dashboardSection = document.getElementById("section-dashboard");
topSection = document.getElementById("section-top");
alertSection = document.getElementById("section-alert");
if (windowInnerWidth < 540) {
    dashboardSection.style.display = "none";
    topSection.style.display = "none";
    alertSection.style.display = "flex"
    document.body.style.background = "white"
} else {
    dashboardSection.style.display = "block";
    topSection.style.display = "flex";
    alertSection.style.display = "none"
}

window.addEventListener("orientationchange", function () {
    const windowInnerWidth = document.documentElement.clientHeight;
    // Выводим числовое значение ориентации
    if (windowInnerWidth < 540) {
        dashboardSection.style.display = "none";
        topSection.style.display = "none";
        alertSection.style.display = "flex"
        // document.body.style.backgroundImage = "none";
        document.body.style.background = "white"
    } else {
        dashboardSection.style.display = "block";
        topSection.style.display = "flex";
        alertSection.style.display = "none"
        location.reload();
    }
}, false);