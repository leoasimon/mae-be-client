function toggleMenu() {
    const overlay = document.getElementById("menu-overlay");

    if (overlay.classList.contains("hidden")) {
        overlay.classList.remove('hidden');
    } else {
        overlay.classList.add('hidden');
    }
}

window.onload = function() {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-menu-btn");

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
}