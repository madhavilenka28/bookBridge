function addReview(){

    let reviewText =
        document.getElementById("reviewText").value;

    if(reviewText.trim() === ""){
        alert("Please enter a review.");
        return;
    }

    let reviewCard =
        document.createElement("div");

    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `
        <h4>Community Member ⭐⭐⭐⭐⭐</h4>
        <p>${reviewText}</p>
    `;

    document
        .getElementById("reviews-container")
        .appendChild(reviewCard);

    document.getElementById("reviewText").value = "";
}