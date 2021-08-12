function phonesize() {
    var div = document.getElementById("services");
    var width = window.innerWidth;
    var haircut = document.getElementById("haircut");
    var haircut_text = document.getElementById("haircut-text");
    var color = document.getElementById("color");
    var color_text = document.getElementById("color-text");
    var eyebrows = document.getElementById("eyebrows");
    var eyebrows_text = document.getElementById("eyebrows-text");
    var eyebrows = document.getElementById("eyebrows");
    var eyebrows_text = document.getElementById("eyebrows-text");
    var facial = document.getElementById("facial");
    var facial_text = document.getElementById("facial-text");
    var spa = document.getElementById("spa");
    var spa_text = document.getElementById("spa-text");
    var manicure = document.getElementById("manicure");
    var manicure_text = document.getElementById("manicure-text");
    if (width <= 576) {
        div.classList = "container-fluid my-5 services";

        haircut.setAttribute("src", "img/fe_services haircut.jpg");
        haircut.style.opacity = 0.7;
        haircut_text.style.color = "white";

        color.setAttribute("src", "img/colo2.jpg");
        color.style.opacity = 0.7;
        color_text.style.color = "white";

        eyebrows.setAttribute("src", "img/eyebrow.jpg");
        eyebrows.style.opacity = 0.7;
        eyebrows_text.style.color = "white";

        facial.setAttribute("src", "img/facial femal.jpg");
        facial.style.opacity = 0.7;
        facial_text.style.color = "white";

        spa.setAttribute("src", "img/Spa_fe.jpg");
        spa.style.opacity = 0.7;
        spa_text.style.color = "white";

        manicure.setAttribute("src", "img/pedicure.jpg");
        manicure.style.opacity = 0.7;
        manicure_text.style.color = "white";
    } else {
        div.classList = "container my-5 services";
        
        haircut.setAttribute("src", "img/services.jpg");
        document.getElementById("haircut-text").style.color = "black";
        color.setAttribute("src", "img/services.jpg");
        document.getElementById("color-text").style.color = "black";
        eyebrows.setAttribute("src", "img/services.jpg");
        eyebrows_text.style.color = "black";
        facial.setAttribute("src", "img/services.jpg");
        facial_text.style.color = "black";
        spa.setAttribute("src", "img/services.jpg");
        spa_text.style.color = "black";
        manicure.setAttribute("src", "img/services.jpg ");
        manicure_text.style.color = "black";

        haircut.addEventListener("mouseover", (event) => {
            haircut.setAttribute("src", "img/fe_services haircut.jpg");
            haircut.style.opacity = 0.7;
            haircut_text.style.color = "white";
        });
        haircut_text.addEventListener("mouseover", (event) => {
            haircut.setAttribute("src", "img/fe_services haircut.jpg");
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
            color.setAttribute("src", "img/colo2.jpg");
            color.style.opacity = 0.7;
            color_text.style.color = "white";
        });
        color_text.addEventListener("mouseover", (event) => {
            color.setAttribute("src", "img/colo2.jpg");
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

        eyebrows.addEventListener("mouseover", (event) => {
            eyebrows.setAttribute("src", "img/eyebrow.jpg");
            eyebrows.style.opacity = 0.7;
            eyebrows_text.style.color = "white";
        });
        eyebrows_text.addEventListener("mouseover", (event) => {
            eyebrows.setAttribute("src", "img/eyebrow.jpg");
            eyebrows.style.opacity = 0.7;
            eyebrows_text.style.color = "white";
        });
        eyebrows.addEventListener("mouseout", (event) => {
            eyebrows.setAttribute("src", "img/services.jpg");
            eyebrows_text.style.color = "black";
        });
        eyebrows_text.addEventListener("mouseout", (event) => {
            eyebrows.setAttribute("src", "img/services.jpg");
            eyebrows_text.style.color = "black";
        });

        facial.addEventListener("mouseover", (event) => {
            facial.setAttribute("src", "img/facial femal.jpg");
            facial.style.opacity = 0.7;
            facial_text.style.color = "white";
        });
        facial_text.addEventListener("mouseover", (event) => {
            facial.setAttribute("src", "img/facial femal.jpg");
            facial.style.opacity = 0.7;
            facial_text.style.color = "white";
        });
        facial.addEventListener("mouseout", (event) => {
            facial.setAttribute("src", "img/services.jpg");
            facial_text.style.color = "black";
        });
        facial_text.addEventListener("mouseout", (event) => {
            facial.setAttribute("src", "img/services.jpg");
            facial_text("facial-text").style.color = "black";
        });

        spa.addEventListener("mouseover", (event) => {
            spa.setAttribute("src", "img/Spa_fe.jpg");
            spa.style.opacity = 0.7;
            spa_text.style.color = "white";
        });
        spa_text.addEventListener("mouseover", (event) => {
            spa.setAttribute("src", "img/Spa_fe.jpg");
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
            manicure.setAttribute("src", "img/pedicure.jpg");
            manicure.style.opacity = 0.7;
            manicure_text.style.color = "white";
        });
        manicure_text.addEventListener("mouseover", (event) => {
            manicure.setAttribute("src", "img/pedicure.jpg");
            manicure.style.opacity = 0.7;
            manicure_text.style.color = "white";
        });
        manicure.addEventListener("mouseout", (event) => {
            manicure.setAttribute("src", "img/services.jpg");
            manicure_text.style.color = "black";
        });
        manicure_text.addEventListener("mouseout", (event) => {
            manicure.setAttribute("src", "img/services.jpg");
            manicure_text.style.color = "black";
        });

    }
}
