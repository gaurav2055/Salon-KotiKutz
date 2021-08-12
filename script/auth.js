const loginForm = document.querySelector("#login-form");
const logOut = document.getElementById("logOut");
const logOut1 = document.getElementById("logOut1");
const signupForm = document.querySelector("#signup-form");
const review = document.getElementById("testimonials");

auth.onAuthStateChanged(function (user) {
    if (user != null) {
        setupUI(user);
        if (review !== null) {
            setupTestimonials();
            reviewEnter(user);
        }
    } else {
        setupUI();
        if (review !== null) {
            setupTestimonials();
            reviewEnter();
        }
    }
});

// login in

if (loginForm !== null) {
    loginForm.addEventListener("submit", signIn);

    function signIn(event) {
        event.preventDefault();
        const email = loginForm["login-email"].value;
        const password = loginForm["login-password"].value;

        auth.signInWithEmailAndPassword(email, password).then(() => {
                window.location.replace("index.html");
            })
            .catch((err) => {
                alert(err.message);
            });
    }
}

// log out
logOut.addEventListener("click", userLogOut);
if (logOut1 !== null) {
    logOut1.addEventListener("click", userLogOut);
}

function userLogOut(event) {
    event.preventDefault();
    auth.signOut();
    window.location.reload();
}

// sign up

if (signupForm !== null) {
    signupForm.addEventListener("submit", userSignUp);

    function userSignUp(event) {
        event.preventDefault();
        const password = signupForm["signup-password"].value;
        const re_password = signupForm["signup-password-re"].value;
        const name = signupForm["dName"].value;

        if (password === re_password) {

            const email = signupForm["signup-email"].value;

            auth.createUserWithEmailAndPassword(email, password).then((cred) => {
                return cred.user.updateProfile({
                    displayName: name,
                });
            }).then(() => {
                window.location.replace("index.html");
            }).catch((err) => {
                alert(err.message);
            });
        } else {
            alert("passwords don't match");
        }
    }
}

function googleSignup() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        window.location.replace("index.html");
    }).catch(function (error) {
        alert(error.message)
    });

}

function facebookSignup() {

    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        window.location.replace("index.html");
    }).catch(function (error) {
        alert(error.message);
    });
}
