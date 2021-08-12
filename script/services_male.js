function phonesize() {
    var div = document.getElementById("services");
    var width = window.innerWidth;
    var haircut = document.getElementById("haircut");
    var haircut_text = document.getElementById("haircut-text");
    var color = document.getElementById("color");
    var color_text = document.getElementById("color-text");
    var shaving = document.getElementById("shaving");
    var shaving_text = document.getElementById("shaving-text");
    var facial = document.getElementById("facial");
    var facial_text = document.getElementById("facial-text");
    var spa = document.getElementById("spa");
    var spa_text = document.getElementById("spa-text");
    var manicure = document.getElementById("manicure");
    var manicure_text = document.getElementById("manicure-text");
    var haircut_text = document.getElementById("haircut-text");

    if (width <= 576) {
        div.classList = "container-fluid my-5 services";
        haircut.setAttribute("src", "img/services_haircut.jpg");
        haircut.style.opacity = 0.7;
        haircut_text.style.color = "white";

        color.setAttribute("src", "img/Treatwell_1020-1.jpg");
        color.style.opacity = 0.7;
        color_text.style.color = "white";

        shaving.setAttribute("src", "img/shaving.jpg");
        shaving.style.opacity = 0.7;
        shaving_text.style.color = "white";

        facial.setAttribute("src", "img/facial.jpg");
        facial.style.opacity = 0.7;
        facial_text.style.color = "white";

        spa.setAttribute("src", "img/spa.jpg");
        spa.style.opacity = 0.7;
        spa_text.style.color = "white";

        manicure.setAttribute("src", "img/manicure.jpg");
        manicure.style.opacity = 0.7;
        manicure_text.style.color = "white";

    } else {
        div.classList = "container my-5 services";
        haircut.setAttribute("src", "img/services.jpg");
        document.getElementById("haircut-text").style.color = "black";
        color.setAttribute("src", "img/services.jpg");
        document.getElementById("color-text").style.color = "black";
        shaving.setAttribute("src", "img/services.jpg");
        document.getElementById("shaving-text").style.color = "black";
        facial.setAttribute("src", "img/services.jpg");
        document.getElementById("facial-text").style.color = "black";
        spa.setAttribute("src", "img/services.jpg");
        spa_text.style.color = "black";
        manicure.setAttribute("src", "img/services.jpg");
        document.getElementById("manicure-text").style.color = "black";

        haircut.setAttribute("src", "img/services.jpg");
        color.setAttribute("src", "img/services.jpg");
        shaving.setAttribute("src", "img/services.jpg");
        facial.setAttribute("src", "img/services.jpg");
        spa.setAttribute("src", "img/services.jpg");
        manicure.setAttribute("src", "img/services.jpg");

        haircut.addEventListener("mouseover", (event) => {
            haircut.setAttribute("src", "img/services_haircut.jpg");
            haircut.style.opacity = 0.7;
            haircut_text.style.color = "white";
        });
        haircut_text.addEventListener("mouseover", (event) => {
            haircut.setAttribute("src", "img/services_haircut.jpg");
            haircut.style.opacity = 0.7;
            haircut_text.style.color = "white";
        });
        haircut.addEventListener("mouseout", (event) => {
            haircut.setAttribute("src", "img/services.jpg");
            document.getElementById("haircut-text").style.color = "black";
        });
        haircut_text.addEventListener("mouseout", (event) => {
            haircut.setAttribute("src", "img/services.jpg");
            document.getElementById("haircut-text").style.color = "black";
        });

        color.addEventListener("mouseover", (event) => {
            color.setAttribute("src", "img/Treatwell_1020-1.jpg");
            color.style.opacity = 0.7;
            color_text.style.color = "white";
        });
        color_text.addEventListener("mouseover", (event) => {
            color.setAttribute("src", "img/Treatwell_1020-1.jpg");
            color.style.opacity = 0.7;
            color_text.style.color = "white";
        });
        color.addEventListener("mouseout", (event) => {
            color.setAttribute("src", "img/services.jpg");
            document.getElementById("color-text").style.color = "black";
        });
        color_text.addEventListener("mouseout", (event) => {
            color.setAttribute("src", "img/services.jpg");
            document.getElementById("color-text").style.color = "black";
        });

        shaving.addEventListener("mouseover", (event) => {
            shaving.setAttribute("src", "img/shaving.jpg");
            shaving.style.opacity = 0.7;
            shaving_text.style.color = "white";
        });
        shaving_text.addEventListener("mouseover", (event) => {
            shaving.setAttribute("src", "img/shaving.jpg");
            shaving.style.opacity = 0.7;
            shaving_text.style.color = "white";
        });
        shaving.addEventListener("mouseout", (event) => {
            shaving.setAttribute("src", "img/services.jpg");
            document.getElementById("shaving-text").style.color = "black";
        });
        shaving_text.addEventListener("mouseout", (event) => {
            shaving.setAttribute("src", "img/services.jpg");
            document.getElementById("shaving-text").style.color = "black";
        });

        facial.addEventListener("mouseover", (event) => {
            facial.setAttribute("src", "img/facial.jpg");
            facial.style.opacity = 0.7;
            facial_text.style.color = "white";
        });
        facial_text.addEventListener("mouseover", (event) => {
            facial.setAttribute("src", "img/facial.jpg");
            facial.style.opacity = 0.7;
            facial_text.style.color = "white";
        });
        facial.addEventListener("mouseout", (event) => {
            facial.setAttribute("src", "img/services.jpg");
            document.getElementById("facial-text").style.color = "black";
        });
        facial_text.addEventListener("mouseout", (event) => {
            facial.setAttribute("src", "img/services.jpg");
            document.getElementById("facial-text").style.color = "black";
        });

        spa.addEventListener("mouseover", (event) => {
            spa.setAttribute("src", "img/spa.jpg");
            spa.style.opacity = 0.7;
            spa_text.style.color = "white";
        });
        spa_text.addEventListener("mouseover", (event) => {
            spa.setAttribute("src", "img/spa.jpg");
            spa.style.opacity = 0.7;
            spa_text.style.color = "white";
        });
        spa.addEventListener("mouseout", (event) => {
            spa.setAttribute("src", "img/services.jpg");
            spa_text.style.color = "black";
        });
        spa_text.addEventListener("mouseout", (event) => {
            spa.setAttribute("src", "img/services.jpg");
            spa_text.style.color = "black";
        });

        manicure.addEventListener("mouseover", (event) => {
            manicure.setAttribute("src", "img/manicure.jpg");
            manicure.style.opacity = 0.7;
            manicure_text.style.color = "white";
        });
        manicure_text.addEventListener("mouseover", (event) => {
            manicure.setAttribute("src", "img/manicure.jpg");
            manicure.style.opacity = 0.7;
            manicure_text.style.color = "white";
        });
        manicure.addEventListener("mouseout", (event) => {
            manicure.setAttribute("src", "img/services.jpg");
            document.getElementById("manicure-text").style.color = "black";
        });
        manicure_text.addEventListener("mouseout", (event) => {
            manicure.setAttribute("src", "img/services.jpg");
            document.getElementById("manicure-text").style.color = "black";
        });
    }
}
