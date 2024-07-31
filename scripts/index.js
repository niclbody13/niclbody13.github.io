document.addEventListener("DOMContentLoaded", function() {
    document.body.style.overflow = 'hidden';
    var content = document.querySelector(".content");
    content.classList.add("animate");
    content.addEventListener('animationend', function() {
        document.body.style.overflow = '';
    });
});