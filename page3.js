const TotalGeneral = document.getElementById("total");



function calculTotal() {
    const prix = document.querySelectorAll(".product");

    let total = 0;
    for (let i = 0; i < prix.length; i++) {
        total += prix[i].value * 30;
        console.log("total = " + total);
    }
    TotalGeneral.textContent = total;
    return total;
}
function clT() {
    const prix = document.querySelectorAll(".product");
    let total = 0;
    prix.forEach(item => {

        item.addEventListener("input", function () {
            TotalGeneral.textContent = calculTotal();
        })

    })
}
clT();



// delet a product
document.getElementById("remove").addEventListener("click", () => {
    document.getElementById("1").remove();
    calculTotal();
})

document.getElementById("suprimer").addEventListener("click", () => {
    document.getElementById("2").remove();
    calculTotal();
})

document.getElementById("delet").addEventListener("click", () => {
    document.getElementById("3").remove();
    calculTotal();
})

// bergur menu

let menu = document.getElementById('menu');
let liste = document.getElementById('liste');

menu.addEventListener('click', function () {
    if (liste.style.display === "none") {
        liste.style.display = "flex";
    } else {
        liste.style.display = "none";
    }
});


// forme de validation


function validateForm() {
    var numero = document.getElementById("Numero").value;
    var expiration = document.getElementById("Expiration").value;
    var codeSecurite = document.getElementById("CodeSecurite").value;
    var message = document.getElementById("message");

    var numeroRegex = /^[0-9]{8}$/;
    var expirationRegex = /^(0[1-9]|1[0-2])\/[0-9]{4}$/;
    var codeSecuriteRegex = /^[0-9]{3}$/;

    if (!numero.match(numeroRegex)) {
        message.innerHTML = "Veuillez entrer un numéro de carte bancaire valide (8 chiffres)";
        return false;
    }

    if (!expiration.match(expirationRegex)) {
        message.innerHTML = "Veuillez entrer une date d'expiration valide (au format MM/YYYY).";
        return false;
    }

    if (!codeSecurite.match(codeSecuriteRegex)) {
        message.innerHTML = "Veuillez entrer un code de sécurité valide (3 chiffres).";
        return false;
    }

   
    message.innerHTML = "";
    return true;
}