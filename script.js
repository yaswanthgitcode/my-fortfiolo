 const hamburger = document.querySelector(".hamburger");
        const menu_bar = document.querySelector(".navbar-menu .manu-bar");

        hamburger.addEventListener("click", () => {
            menu_bar.classList.toggle("show");
        })