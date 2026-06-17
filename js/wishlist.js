function addToWishlist(book,button){

    let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    if(!wishlist.includes(book)){

        wishlist.push(book);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        button.innerHTML = "♥";
        button.style.color = "#8a2be2";

    }
}