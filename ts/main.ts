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
    //TODO: Display video game below the form
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