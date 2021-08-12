const loggedoutlinks = document.querySelectorAll(".logged-out");
const loggedinlinks = document.querySelectorAll(".logged-in");

function setupUI(user) {
    if (user) {
        for (let value of loggedoutlinks) {
            value.style.display = "none";
        }
        for (let value of loggedinlinks) {
            value.style.display = "inline-block";
        }
    } else {
        for (let value of loggedoutlinks) {
            value.style.display = "inline-block";
        }
        for (let value of loggedinlinks) {
            value.style.display = "none";
        }
    }
}
