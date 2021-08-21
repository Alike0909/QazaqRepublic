function like() {
    productId = document.getElementById("product-id").value;
    if (productId in localStorage) {
        localStorage.removeItem(productId);
        unfillHeart();
    }
    else {
        let formData = {
            status: "liked",
            product: productId,
        }
        localStorage.setItem(productId, JSON.stringify(formData));
        fillHeart();
    }
}

emptyHeart = document.getElementById("empty-heart");
fullHeart = document.getElementById("full-heart");
function fillHeart() {
    emptyHeart.style.display = "none";
    fullHeart.style.display = "block";
    fullHeart.style.color = "red";
    // fullHeart.style.marginLeft = "18px";
}

function unfillHeart() {
    emptyHeart.style.display = "block";
    fullHeart.style.display = "none";
    fullHeart.style.color = "red";
    // emptyHeart.style.marginLeft = "18px";
}