$("document").ready(function () {
    auth.signOut().then(function () {
        console.log("Sign-out successful.")
    }).then(setupUi).catch(function (error) {
        // An error happened.
    });;

});

function setupUi() {
    auth.onAuthStateChanged(function (user) {
        if (user != null) {
            if (user.email == "jaygauravs@gmail.com") {
                var html1 =
                    `<h3 class="text-center sortable">Unconfirmed Appointments</h3>
                    <div style="height:450px !important; overflow:auto;"s>
                <table class = "table" id="table">
                     <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Date</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Location</th>
                            <th scope="col">Services</th>
                            <th scope="col">Time</th>
                            <th scope="col">Confirmation</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                </div>`
                document.getElementById("content").innerHTML = html1;

                var html2 =
                    `<h3 class="text-center">Confirmed Appointments </h3>
                    <div style="height:450px !important; overflow:auto;"s>
                <table class = "table" id="table2">
                     <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Date</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Location</th>
                            <th scope="col">Services</th>
                            <th scope="col">Time</th>
                            <th scope="col">Details</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Done</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                </div>`

                document.getElementById("content2").innerHTML = html2;

                var html3 =
                    `<h3 class="text-center">Finished Appointments </h3>
                    <div style="height:450px !important; overflow:auto;"s>
                <table class = "table" id="table3">
                     <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Date</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Location</th>
                            <th scope="col">Services</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                </div>`

                document.getElementById("content3").innerHTML = html3;

                var data = [];
                var data2 = [];
                var data3 = [];
                db.collection("appointments").onSnapshot(function (snapshot) {
                    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
                    var table2 = document.getElementById("table2").getElementsByTagName('tbody')[0];
                    table.innerHTML = "";
                    console.log(1);
                    snapshot.forEach((doc) => {
                        var collections = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"];
                        collections.forEach((collection) => {

                            db.collection("appointments").doc(doc.id).collection(collection).where("confirm", "==", "No")
                                .onSnapshot((snapshot1) => {

                                    snapshot1.docs.forEach((doc1) => {
                                        let dataElement = doc.id + "_" + collection + "_" + doc1.id;
                                        if (!(data.includes(dataElement))) {
                                            let row = table.insertRow();
                                            row.id = dataElement;
                                            let cell2 = row.insertCell();
                                            let cell3 = row.insertCell();
                                            let cell4 = row.insertCell();
                                            cell4.style.whiteSpace = "nowrap";
                                            let cell5 = row.insertCell();
                                            let cell6 = row.insertCell();
                                            let cell7 = row.insertCell();
                                            let cell8 = row.insertCell();
                                            let cell9 = row.insertCell();
                                            let cell10 = row.insertCell();
                                            let cell11 = row.insertCell();

                                            cell2.innerHTML = doc1.data().Name;
                                            cell3.innerHTML = doc1.data().contact;
                                            cell4.innerHTML = doc1.data().date;
                                            cell5.innerHTML = doc1.data().email;
                                            cell6.innerHTML = doc1.data().gender;
                                            cell7.innerHTML = doc1.data().loc;
                                            cell8.innerHTML = doc1.data().service;
                                            cell9.innerHTML = doc1.data().time;
                                            cell10.innerHTML = `<button type="submit" onclick="confirmFunc('${doc.id}', '${collection}', '${doc1.id}', '${dataElement}')" class="btn btn-primary mb-2">confirm</button>`;
                                            cell11.innerHTML = `<button type="submit" onclick="deleteFunc('${doc.id}', '${collection}', '${doc1.id}', '${dataElement}')" class="btn btn-primary mb-2">Delete</button>`;
                                            data.push(dataElement);
                                        }

                                    });
                                });
                            db.collection("appointments").doc(doc.id).collection(collection).where("confirm", "==", "Yes")
                                .onSnapshot((snapshot1) => {

                                    snapshot1.docs.forEach((doc1) => {
                                        let dataElement = doc.id + "_" + collection + "_" + doc1.id;
                                        if (!(data2.includes(dataElement))) {
                                            let row = table2.insertRow();
                                            row.id = dataElement;
                                            let cell2 = row.insertCell();
                                            let cell3 = row.insertCell();
                                            let cell4 = row.insertCell();
                                            cell4.style.whiteSpace = "nowrap";
                                            let cell5 = row.insertCell();
                                            let cell6 = row.insertCell();
                                            let cell7 = row.insertCell();
                                            let cell8 = row.insertCell();
                                            let cell9 = row.insertCell();
                                            let cell10 = row.insertCell();
                                            let cell11 = row.insertCell();
                                            let cell12 = row.insertCell();

                                            cell2.innerHTML = doc1.data().Name;
                                            cell3.innerHTML = doc1.data().contact;
                                            cell4.innerHTML = doc1.data().date;
                                            cell5.innerHTML = doc1.data().email;
                                            cell6.innerHTML = doc1.data().gender;
                                            cell7.innerHTML = doc1.data().loc;
                                            cell8.innerHTML = doc1.data().service;
                                            cell9.innerHTML = doc1.data().time;
                                            cell10.innerHTML = `<button type="submit" onclick="changeDetails('${doc.id}', '${collection}', '${doc1.id}', '${dataElement}')" class="btn btn-primary mb-2">Change</button>`;
                                            cell11.innerHTML = `<button type="submit" onclick="deleteFunc('${doc.id}', '${collection}', '${doc1.id}', '${dataElement}')" class="btn btn-primary mb-2">Delete</button>`;
                                            cell12.innerHTML = `<button type="submit" onclick="doneFunc('${doc.id}', '${collection}', '${doc1.id}', '${dataElement}')" class="btn btn-primary mb-2">Done</button>`;
                                            data2.push(dataElement);
                                        }

                                    });
                                });
                        });

                    });
                });

                db.collection("completed").onSnapshot(function (snapshot) {
                    var table3 = document.getElementById("table3").getElementsByTagName('tbody')[0];
                    table3.innerHTML = "";
                    console.log("t1")
                    snapshot.forEach((doc) => {
                        var collections = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"];
                        collections.forEach((collection) => {

                            db.collection("completed").doc(doc.id).collection(collection)
                                .onSnapshot((snapshot1) => {

                                    snapshot1.docs.forEach((doc1) => {
                                        let dataElement = doc.id + "_" + collection + "_" + doc1.id;
                                        if (!(data3.includes(dataElement))) {
                                            let row = table3.insertRow();
                                            row.id = dataElement;
                                            let cell2 = row.insertCell();
                                            let cell3 = row.insertCell();
                                            let cell4 = row.insertCell();
                                            cell4.style.whiteSpace = "nowrap";
                                            let cell5 = row.insertCell();
                                            let cell6 = row.insertCell();
                                            let cell7 = row.insertCell();
                                            let cell8 = row.insertCell();
                                            let cell9 = row.insertCell();
                                            let cell10 = row.insertCell();
                                            let cell11 = row.insertCell();

                                            cell2.innerHTML = doc1.data().Name;
                                            cell3.innerHTML = doc1.data().contact;
                                            cell4.innerHTML = doc1.data().date;
                                            cell5.innerHTML = doc1.data().email;
                                            cell6.innerHTML = doc1.data().gender;
                                            cell7.innerHTML = doc1.data().loc;
                                            cell8.innerHTML = doc1.data().service;
                                            cell9.innerHTML = doc1.data().time;
                                            data3.push(dataElement);
                                        }

                                    });
                                });
                        })
                    })
                })

            } else {
                alert("You are not authorised to view this page");
                auth.signOut().then(() => {
                    location.reload();
                })


            }

        } else {

            var html =
                `<div tabindex="-1" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Log in</h5>
                                </div>
                                <div class="modal-body">
                                    <form id="login-form">
                                        <div class="form-group">
                                            <label for="login-email">Email address</label>
                                            <input type="email" class="form-control form-control-lg" id="login-email" aria-describedby="emailHelp" placeholder="Enter email" required />
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="login-password">Password</label>
                                            <input type="password" class="form-control form-control-lg" id="login-password" placeholder="Password" required />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Login</button>
                                    </form>

                                    <button class="btn bg-white mt-4" onclick="googleSignup()"><img src="img/google-icon.svg" style="width: 25px;" alt=""> Login with google</button>
                                    <h4 class="text-center" style="font-weight: 400">or</h4>
                                    <p class="mt-4">Dont have a account? <a href="sign_up.html">Sign Up</a></p>
                                    <p class="text-center" id="alert"></p>
                                </div>
                            </div>
                        </div>
                    </div>`;
            document.getElementById("content").innerHTML = html;

            const loginForm = document.querySelector("#login-form");

            if (loginForm !== null) {
                loginForm.addEventListener("submit", signIn);

                function signIn(event) {
                    event.preventDefault();
                    const email = loginForm["login-email"].value;
                    const password = loginForm["login-password"].value;

                    auth.signInWithEmailAndPassword(email, password).then(() => {
                        console.log("signed in")
                    });
                };
            };
        };
    })
}

function confirmFunc(doc, collection, doc1, ID) {
    db.collection("appointments").doc(doc).collection(collection).doc(doc1).update({
        confirm: "Yes"
    }).then(function () {
        document.getElementById(ID).remove();
        console.log("done");
    }).catch(function (error) {
        console.error("Error updating document: ", error);
    })
}

function deleteFunc(doc, collection, doc1, ID) {
    if (confirm("Are you sure you want to delete")) {
        db.collection("appointments").doc(doc).collection(collection).doc(doc1).delete().then(function () {
            document.getElementById(ID).remove();
            console.log("done");
        }).catch(function (error) {
            console.error("Error updating document: ", error);
        });
    }
}

function changeDetails(doc, collection, doc1, ID) {
    var modalDiv = document.createElement("div");
    modalDiv.className = "modal fade";
    modalDiv.setAttribute("id", "alertModal");
    modalDiv.setAttribute("tabindex", "-1");
    modalDiv.setAttribute("role", "dialog");

    modalDiv.innerHTML = `<div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Sucess</h5>
                                  </div>
                                  <div class="modal-body">
                                    <form id = "changeDetail">
                                        <div class="form-group">
                                            <label for="date">Date</label>
                                            <input type="date" class="form-control" id="date">

                                        </div>
                                        <div class="form-group">
                                            <label for="timepicker">Time</label>
                                            <select id="timepicker">
                                                <option>9:00 AM</option>
                                                <option>9:30 AM</option>
                                                <option>10:00 AM</option>
                                                <option>10:30 AM</option>
                                                <option>11:00 AM</option>
                                                <option>11:30 AM</option>
                                                <option>12:00 AM</option>
                                                <option>12:30 AM</option>
                                                <option>1:00 AM</option>
                                                <option>1:30 AM</option>
                                                <option>2:00 AM</option>
                                                <option>2:30 AM</option>
                                                <option>3:00 AM</option>
                                                <option>3:30 AM</option>
                                                <option>4:00 AM</option>
                                                <option>4:30 AM</option>
                                                <option>5:00 AM</option>
                                                <option>5:30 AM</option>
                                                <option>6:00 AM</option>
                                                <option>6:30 AM</option>
                                                <option>7:00 AM</option>
                                            </select>
                                        </div>
                                    </form>
                                  </div>
                                  <div class="modal-footer">
                                    <button for="changeDetail" id="submit_btn" type="submit" class="btn btn-secondary">Save</button>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>`;
    document.body.appendChild(modalDiv);
    $("#alertModal").modal("show");

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }

    let date1 = year + "-" + month + "-" + day

    document.getElementById('date').setAttribute('min', date1)

    var detailsForm = document.getElementById("changeDetail");
    var submit_btn = document.getElementById("submit_btn");
    detailsForm.addEventListener("submit", submit);
    submit_btn.addEventListener("click", submit);



    function submit(e) {
        e.preventDefault();
        let time = detailsForm.elements.namedItem("timepicker").value;
        let date2 = detailsForm.elements.namedItem("date").value;
        console.log("done")
        db.collection("appointments").doc(doc).collection(collection).doc(doc1)
            .get().then((cred1) => {
                let location = cred1.data().loc;
                console.log(location);
                let docDate = cred1.data().date;
                console.log(docDate);
                let collTIme = cred1.data().time;
                console.log(collTIme)
                var appointmentReff = db.collection("appointments").doc(date2).collection(time);
                appointmentReff.where("loc", "==", location).get().then((cred) => {
                    var num = cred.size;
                    if (num < 4) {
                        let docName = num + 1;
                        docName = docName.toString();
                        docName += " " + location;
                        appointmentReff.doc(docName).set({
                            Name: cred1.data().Name,
                            contact: cred1.data().contact,
                            date: date2,
                            time: time,
                            gender: cred1.data().gender,
                            email: cred1.data().email,
                            loc: cred1.data().loc,
                            service: cred1.data().service,
                            confirm: "Yes"

                        }).then(function () {
                            db.collection("appointments").doc(date2).set({
                                date: date2
                            })
                            console.log("done1")
                            db.collection("appointments").doc(doc).collection(collection).doc(doc1).delete().then(function () {
                                console.log("Document successfully deleted!");
                            }).catch(function (error) {
                                console.error("Error removing document: ", error);
                            });
                            document.getElementById(ID).remove();
                            alert("successful");
                            $("#alertModal").modal("hide");

                        }).then(function () {
                            modalDiv.remove();
                        }).catch(function (error) {
                            alert("There was some error in booking" + error);
                            console.log(error);
                        })

                    } else {
                        alert("That time slot is full for the date");
                    }
                }).catch(function (Error) {
                    alert("there was some error please try again later.");
                    console.log(Error);
                })
            }).catch(function (error) {
                console.error("Error updating document: ", error);
            });
    }
}

function doneFunc(doc, collection, doc1, ID) {
    var appointmentRef = db.collection("appointments").doc(doc).collection(collection).doc(doc1);
    appointmentRef.get().then((cred) => {
        var completedRef = db.collection("completed").doc(doc).collection(collection).doc(doc1);
        completedRef.set({
            Name: cred.data().Name,
            contact: cred.data().contact,
            date: cred.data().date,
            time: cred.data().time,
            gender: cred.data().gender,
            email: cred.data().email,
            loc: cred.data().loc,
            service: cred.data().service,

        }).then(function () {
            db.collection("completed").doc(doc).set({
                date: doc
            })
        }).catch((error) => {
            alert("there was an error " + error);
        });
    }).then(function () {
        appointmentRef.delete().catch(function (error) {
            alert("there was an error" + error);
        }).catch(function (error) {
            alert("There was an error " + error)
        })
        document.getElementById(ID).remove();
    }).catch(function (error) {
        alert("there was an error " + error)
    })
}
