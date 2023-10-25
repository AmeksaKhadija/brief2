
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

