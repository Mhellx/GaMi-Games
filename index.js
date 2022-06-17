const seta1 = document.querySelector("[data-seta-down]")
const seta2 = document.querySelector("[data-seta-up]")
const footer = document.querySelector("[data-footer]")

function setaDown(){
    window.scrollTo(0, 250);
    seta1.classList.add("hidden");
    seta2.classList.remove("hidden");
    footer.classList.add("show");
}
function setaUp(){
    window.scrollTo(0, 0);
    seta2.classList.add("hidden");
    seta1.classList.remove("hidden");
    footer.classList.remove("show");
}