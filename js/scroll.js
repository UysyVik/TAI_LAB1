let button = document.querySelector('.scroll');

button.addEventListener('click', goToTop);

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showTopButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".scroll").style.display = "block";
    } else {

        document.querySelector(".scroll").style.display = "none";
    }
}

window.onscroll = function() {showTopButton()};
