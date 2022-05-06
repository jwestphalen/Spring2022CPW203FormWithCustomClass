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
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    return true;
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
        ". It is " + notOnlineDisplay + " online only.";
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = document.getElementById("title");
    var priceInput = document.getElementById("price");
    var ratingInput = document.getElementById("rating");
    var onlineInput = document.getElementById("online");
    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    game.online = onlineInput.checked;
    console.log(game);
    return game;
}
