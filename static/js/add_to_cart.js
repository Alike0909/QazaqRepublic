let firstCart = {
    name: "0",
    feature: "0",
    price: "0",
    size: "0",
    color: "0",
    img: "0",
}
sessionStorage.setItem(0, JSON.stringify(firstCart));


const addToCart = e => {
    var id_cart = getMaxOfArray(Object.keys(sessionStorage)) + 1;

    productName = document.getElementById("product-name").innerText;
    productFeature = document.getElementById("product-feature").innerText;
    productPrice = document.getElementById("product-price").innerText;
    productSize = document.getElementById("size").innerText;
    productColor = document.getElementById("product-color").style.backgroundColor;

    array = [];
    productImgClass = document.getElementsByClassName("swiper-img");

    for (var i = 1; i < productImgClass.length; i++) {
        productImg = productImgClass[i].src;
        array.push(productImg);
    }
    img_num = array.length - 1;

    let formData = {
        name: productName,
        feature: productFeature,
        price: productPrice,
        size: productSize,
        color: productColor,
        img: array[img_num],
    }
    sessionStorage.setItem(id_cart, JSON.stringify(formData));
    id_cart++;
    clearInputs()
    location.reload();
}

function clearInputs() {
    document.getElementById("product-color").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("size").innerText = "Выберите размер";
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}