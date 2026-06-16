let leaveBtn = document.getElementById("leave-btn");
    let refreshBtn = document.getElementById("refresh-btn");
    leaveBtn.addEventListener("click", function() {
        alert("You have left the waiting list.");
    });

    refreshBtn.addEventListener("click", function() {
        alert("Queue updated.");
    });

