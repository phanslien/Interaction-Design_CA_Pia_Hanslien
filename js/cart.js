let cart = document.querySelectorAll(".cta_addcart");

let product = [
    {
        name: "Rain jacket",
        tag: "jacket",
        price: 89.00,
        inCart: 0
    }
]
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", () => {
        cartNumbers();
    })
}

function loadCart() {
    let productNumbers = localStorage.getItem("cartnumbers");

    if (productNumbers) {
        document.querySelector("#shoppingcart span").textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers);
        document.querySelector("#shoppingcart span").textContent = productNumbers;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector("#shoppingcart span").textContent = 1;
    }
}

loadCart();


var popUpBox_cart = document.getElementById("mypopupbox");
var cta = document.getElementById("cta_popupbox");
var closeBox = document.getElementsByClassName("close_popup")[0];

cta.onclick = function () {
    popUpBox_cart.style.display = "block";
}

closeBox.onclick = function () {
    popUpBox_cart.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == popUpBox_cart) {
        popUpBox_cart.style.display = "none";
    }
}