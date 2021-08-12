function reviewEnter(user) {
    let form = `<form class="py-5" id= "review-form">
                        <h1 class="text-center my-2">Review</h1>
                        <div class="form-group">
                            <label for="rating"><h3>Rating</h3></label>
                            <select class="form-control" id="rating">
                              <option>5</option>
                              <option>4</option>
                              <option>3</option>
                              <option>2</option>
                              <option>1</option>
                            </select>
                          </div>
                        <div class="form-group">
                            <label for="review"><h3>Review</h3></label>
                            <textarea class="form-control" id="review" rows="3" required></textarea>
                          </div>
                          
                          <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </form>`;

    document.getElementById("review").innerHTML += form;


    const review_form = document.getElementById("review-form");

    if (review_form !== null) {
        review_form.addEventListener("submit", submit_form);

        function submit_form(event) {
            event.preventDefault();
            var rating = review_form.elements.namedItem("rating").value;
            var review = review_form.elements.namedItem("review").value;
            let name = user.displayName;

            db.collection("testimonials")
                .add({
                    name: name,
                    rating: rating,
                    review: review,
                })
                .then(() => {
                    review_reset();
                })
                .catch(function (error) {
                    document.getElementById(
                        "testimonials"
                    ).innerHTML += `<p class="text-center py-2">{error.msg}</p>`;
                });
        }
    }

    function review_reset() {
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
                                    Your review was sucessfully added!
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>`;
        document.body.appendChild(modalDiv);
        $("#alertModal").modal("show");
        review_form.reset();
    }
}

function setupTestimonials() {
    db.collection("testimonials")
        .limit(3)
        .onSnapshot(function (snapshot) {
            db.collection("testimonials").get().then((cred) => {
                if (cred.size == 0) {
                    const first = `<h1 class= "text-center py-5">Be the first to Review</h1>
                           <hr>`;
                    document.getElementById("testimonials").innerHTML = first;
                } else {
                    let html = "";
                    console.log(snapshot.docs);
                    snapshot.docs.forEach((doc) => {
                        const name = doc.data().name;
                        const rating = doc.data().rating;
                        const review = doc.data().review;
                        const nameDiv = `<div class = "row">
                                <div class="col-md-3 mt-3 py-5 pl-5 border-right">
                                        <h3>${name}</h3>`;
                        var ratingDiv = "";
                        if (rating == 5) {
                            ratingDiv = `<div>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                      </div>
                                    </div>`;
                        } else if (rating == 4) {
                            ratingDiv = `<div>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                      </div>
                                    </div>`;
                        } else if (rating == 3) {
                            ratingDiv = `<div>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                      </div>
                                    </div>`;
                        } else if (rating == 2) {
                            ratingDiv = `<div>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                      </div>
                                    </div>`;
                        } else if (rating == 1) {
                            ratingDiv = `<div>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                      </div>
                                    </div>`;
                        }

                        const reviewDiv = `<div class="col-md-9 py-5">
                                          <p class="pt-4 serif">
                                            "<span class="italic">
                                              ${review} </span>"
                                          </p>
                                        </div>
                                    </div>
                                    <hr>`;
                        html += nameDiv + ratingDiv + reviewDiv;
                    });
                    document.getElementById("testimonials").innerHTML = html;
                }
            })

        })
}
