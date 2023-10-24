
const incrementButtons = document.querySelectorAll(".plus");
const decrementButtons = document.querySelectorAll(".moin");
const numberDisplays = document.querySelectorAll(".one");

function incrementNumber(display) {
    let number = parseInt(display.textContent);
    number++;
    display.textContent = number;
}


function decrementNumber(display) {
    let number = parseInt(display.textContent);
    if (number > 1) {
        number--;
        display.textContent = number;
    }
}


incrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        incrementNumber(numberDisplays[index]);
    });
});


decrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        decrementNumber(numberDisplays[index]);
    });
});

document.getElementById("remove").addEventListener("click", () => {
    document.getElementById("1").style.display = "none";
})

document.getElementById("suprimer").addEventListener("click", () => {
    document.getElementById("2").style.display = "none";
})

document.getElementById("delet").addEventListener("click", () => {
    document.getElementById("3").style.display = "none";
})




// pour calculer quantité * prix //
// function calculerTotalGeneral() {
//     var total = 0;
//     for (var i = 0; i < qteProduct.length; i++) {
//         var quantite = parseInt(qteProduct[i].value);
//         var prix = parseFloat(price[i].textContent);
//         var totalProduit = calculerTotalProduit(quantite, prix);
//         totalprice[i].textContent = totalProduit;
//         total += totalProduit;
//     }
// }
// function calculerTotalProduit(quantite, prix) {
//     return quantite * prix;
// }
