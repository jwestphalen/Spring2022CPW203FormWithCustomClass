var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    console.log("Add video game was called");
    var game = getVideoGame();
    displayGame(game);
}
function displayGame(myGame) {
    var displayDiv = document.getElementById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notOnlineDisplay = "";
    if (!myGame.online) {
        notOnlineDisplay = "not";
    }
    gameInfo.innerText = myGame.title + " is rated " +
        myGame.rating + ". It costs $" + myGame.price.toFixed(2) +
        ". It is " + notOnlineDisplay + " online only." +
        " It is region locked to " + myGame.region;
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = document.getElementById("title");
    var priceInput = document.getElementById("price");
    var ratingInput = document.getElementById("rating");
    var onlineInput = document.getElementById("online");
    var regionInput = document.getElementById("region");
    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    game.online = onlineInput.checked;
    game.region = regionInput.value;
    if (isAllDataValid(game)) {
        console.log(game);
        return game;
    }
}
function isAllDataValid(game) {
    var errorInputTitle = document.getElementById("errorTitle");
    var errorInputPrice = document.getElementById("errorPrice");
    var errorInputRating = document.getElementById("errorRating");
    var errorInputRegion = document.getElementById("errorRegion");
    var titleInput = document.getElementById("title");
    var priceInput = document.getElementById("price");
    var regionInput = document.getElementById("region");
    var isAllDataValid = true;
    if (game.title == "") {
        isAllDataValid = false;
        titleInput.nextElementSibling.innerHTML = "*";
        errorInputTitle.innerHTML = "ERROR: Please enter a title";
    }
    else {
        titleInput.nextElementSibling.innerHTML = "";
        errorInputTitle.innerHTML = "";
    }
    if (!game.price || game.price == "") {
        isAllDataValid = false;
        priceInput.nextElementSibling.innerHTML = "*";
        errorInputPrice.innerHTML = "ERROR: Price must be a valid number";
    }
    else {
        priceInput.nextElementSibling.innerHTML = "";
        errorInputPrice.innerHTML = "";
    }
    if (game.rating == "") {
        isAllDataValid = false;
        errorInputRating.innerHTML = "ERROR: Please add a rating";
    }
    else {
        errorInputRating.innerHTML = "";
    }
    if (game.region == "") {
        isAllDataValid = false;
        errorInputRegion.nextElementSibling.innerHTML = "*";
        errorInputRegion.innerHTML = "ERROR: Please input a region";
    }
    else {
        regionInput.nextElementSibling.innerHTML = "";
        errorInputRegion.innerHTML = "";
    }
    return isAllDataValid;
}
