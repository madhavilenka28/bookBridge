// Buttons

let borrowBtn = document.querySelector(".Button button:first-child");
let waitingBtn = document.querySelector(".Button button:last-child");


// Status

let status = "Borrowed";


// Disable borrow button if book is borrowed

if(status === "Borrowed"){
    borrowBtn.disabled = true;
    borrowBtn.style.opacity = "0.5";
}


// Borrow button

borrowBtn.addEventListener("click", function(){

    alert("Book borrowed successfully!");

});


// Waiting list button

waitingBtn.addEventListener("click", function(){

    alert("Added to waiting list!");

});


// Count reviews

let reviews = document.querySelectorAll(".review-card");

console.log("Total Reviews:", reviews.length);