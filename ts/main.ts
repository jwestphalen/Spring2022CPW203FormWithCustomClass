class VideoGame{
    title:string;
    price:number;
    rating:string;
    online:boolean;
}

/*
//Test Code
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.online = true;
*/

window.onload=function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;    
}

function addVideoGame(){
    console.log("Add video game was called");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

//TODO: Add validation code
function isAllDataValid(){
    return true;
}

function displayGame(myGame:VideoGame):void{
    let displayDiv = document.getElementById("display");

    //Create <h2> with game title>
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    //Create paragraph with game details
    let gameInfo = document.createElement("p");
    let notOnlineDisplay = "";
    //check if game is NOT online
    if(!myGame.online){
        notOnlineDisplay = "not";
    }
    gameInfo.innerText = myGame.title + " is rated " +
        myGame.rating + ". It costs $" + myGame.price.toFixed(2) +
        ". It is " + notOnlineDisplay + " online only.";
    //Alternate for above example
    /*gameInfo.innerText = `${myGame.title} has a rating of `+
    `${myGame.rating}`;  */
        
    //Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}

/**
 * Gets all game data from the form
 * and returns it in a VideoGame object.
 * @returns game
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    //set variables as elements from HTML doc
    let titleInput = 
        <HTMLInputElement>document.getElementById("title");
    let priceInput = 
    <HTMLInputElement>document.getElementById("price");
    let ratingInput = 
        <HTMLInputElement>document.getElementById("rating");
    let onlineInput = <HTMLInputElement>document.getElementById("online");
    
    //Populate Data
    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;    
    game.online = onlineInput.checked;
    /*
    //Alternate for line above
    if(onlineInput.checked){
        game.online = true;
    }else{
        game.online = false;
    }*/


    //return composed data
    console.log(game);
    return game;
}