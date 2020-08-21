goToTop = document.getElementById("goToTop");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goToTop.style.display = "block";
    } else {
        goToTop.style.display = "none";
    }
}
scrollFunction();

goToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
