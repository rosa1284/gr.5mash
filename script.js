window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgerknap").addEventListener("click", toggleMenu);


}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#burgermenu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#burgermenu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#burgerknap").textContent = "☰";
    } else {
        document.querySelector("#burgerknap").textContent = "X";
    }
}
