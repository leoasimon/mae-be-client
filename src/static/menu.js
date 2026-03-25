function toggleMenu() {
    const overlay = document.getElementById("menu-overlay");

    if (overlay.classList.contains("hidden")) {
        overlay.classList.remove('hidden');
        document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    } else {
        overlay.classList.add('hidden');
        document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
    }
}

window.onload = function() {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
}