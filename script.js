// Create References to each of our buttons by using their IDs
let catchPokemonButton = document.querySelector("#add_button");
let tradePokemonButton = document.querySelector("#delete_button");
let tradeAllPokemonButton = document.querySelector('#emptyButton');

let imageDiv = document.querySelector("#image_div");
// possible pokemon to be "caught"
let pokemonArray = ["bulbasaur", "charmander", "pikachu", "squirtle"];



// DOM Prompt 1 -> Set up an event listener for when the "Catch a New Pokemon" button seen 
//                 when opening the index.html in your browser is clicked, and it will run the "newPokemon" function.
catchPokemonButton.addEventListener("click",newPokemon);
 

function newPokemon() {
    // This generates a random number between 0 and the length of the pokemon array, then uses that number
    //to select a different index in our pokemonArray making it generate a random pokemon each execution.
    let randNum = Math.random() * pokemonArray.length;
    let randInt = parseInt(randNum);
    let randomPokemon = pokemonArray[randInt]; //returns a string from pokemonArray

    // DOM Prompt 2 -> We can't just directly send the image into our HTML, it needs to be contained
    //                 within an HTML element. Create an element and set its' 'src' attribute to an image of a random pokemon.
    //Hint: Check the filenames in the images folder, and check them alongside our "pokemonArray"

    let newelement=document.createElement('img');
    newelement.src="images/"+randomPokemon+".png";
    // DOM Prompt 3 -> A div is set up in the HTML, meant to hold these images. Take a look in the index.html,
    //                 and how do we append this new element to the proper div?
    imageDiv.appendChild(newelement);
}

//  We have too many Pokemon, and we want to start trading away the ones we recently acquired!
// DOM Prompt 4 -> Set up an event listener for 
//                 when the tradePokemon button is clicked, the tradePokemon function is called
tradePokemonButton.addEventListener('click',tradePokemon);
tradeAllPokemonButton.addEventListener('click',tradeAllPokemon);

function tradePokemon(){
    //DOM Prompt 5 -> Remove the most recently appended image.
 let poorpokemon=document.querySelector("img");
 poorpokemon.remove();   
}
// You have lost 6 gym battles in a row, time to put away the pokedex. The "trade all Pokemon"
// button is meant to remove all the image elements on our webpage.
tradeAllPokemonButton.addEventListener('click',tradeAllPokemon);
function tradeAllPokemon(){
    //DOM Prompt 6 -> How do we clear an HTML element of all content?
    imageDiv.innerHTML="";
}