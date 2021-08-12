$(document).ready(function () {
    $('#timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '9',
        maxTime: '7:00pm',
        defaultTime: '9',
        startTime: '09:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
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

});

const appointment = document.getElementById("appointment");

auth.onAuthStateChanged(function (user) {
    if (user != null) {
        appointment.elements.namedItem("name") = user.displayName;
        appointment.elements.namedItem("email").value = user.email;
    }
})

appointment.addEventListener('submit', bookAppointment);

function bookAppointment(event) {
    event.preventDefault();

    var name = appointment.elements.namedItem("name").value;
    var contact = appointment.elements.namedItem("contact_no").value;
    var date = appointment.elements.namedItem("date").value;
    var time = appointment.elements.namedItem("timepicker").value;
    var location = appointment.elements.namedItem("loc").value;
    var service = [];
    for (var i = 0; i < services.selectedOptions.length; i++) {
        service.push(services.selectedOptions[i].value);
    }
    var gender = appointment.elements.namedItem("gender").value;
    var email = appointment.elements.namedItem("email").value;


    var appointmentReff = db.collection("appointments").doc(date).collection(time);
    appointmentReff.where("loc", "==", location).get().then((cred) => {
        var num = cred.size;
        if (num < 4) {
            let docName = num + 1;
            docName = docName.toString();
            docName += " " + location;
            appointmentReff.doc(docName).set({
                Name: name,
                contact: contact,
                date: date,
                time: time,
                gender: gender,
                email: email,
                loc: location,
                service: service,
                confirm: "No"

            }).then(function () {
                db.collection("appointments").doc(date).set({
                    date: date
                })
                appointment_reset();
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
}

function appointment_reset() {
    var modalDiv = document.createElement("div");
    modalDiv.className = "modal fade";
    modalDiv.setAttribute("id", "alertModal");
    modalDiv.setAttribute("tabindex", "-1");
    modalDiv.setAttribute("role", "dialog");

    modalDiv.innerHTML = `<div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Sucess</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    Your appointment has been booked. You will recieve a call to confirm your appointment.
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>`;
    document.body.appendChild(modalDiv);
    $("#alertModal").modal("show");

    appointment.reset();
}
