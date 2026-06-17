let wishlist =
JSON.parse(localStorage.getItem("wishlist"))
|| [];

let container =
document.getElementById("wishlist-container");

if(wishlist.length === 0){

    container.innerHTML =
    `<p class="empty">
        Your wishlist is empty.
    </p>`;

}
else{

    wishlist.forEach((book,index)=>{

        let card =
        document.createElement("div");

        card.classList.add("wishlist-card");

        card.innerHTML = `

            <div class="book-info">

                <h3>${book}</h3>

                <p>Added to Wishlist</p>

                <span class="genre">
                    Want To Read
                </span>

            </div>

            <button
                class="remove-btn"
                onclick="removeBook(${index})"
            >
                Remove
            </button>

        `;

        container.appendChild(card);

    });

}

function removeBook(index){

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    location.reload();

}