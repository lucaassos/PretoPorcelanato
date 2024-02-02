document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            header.classList.remove("scroll");
        } else {
            header.classList.add("scroll");
        }

        prevScrollPos = currentScrollPos;
    };
});
