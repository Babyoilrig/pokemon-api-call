const pokeImage = document.querySelector(".pokemon-pic");
const pokeName = document.querySelector(".poke-name");
const pokedexNo = document.querySelector(".pokedex-number");
const pokeHeight = document.querySelector(".poke-height");
const pokeWeight = document.querySelector(".poke-weight");
const pokeSpeed = document.querySelector(".poke-speed");
const pokeAttack = document.querySelector(".poke-attack");
const pokeDefence = document.querySelector(".poke-defence");
const button = document.querySelector('.btn');
const title = document.querySelector('.title');
const pinkButton = document.querySelector('.pink-button');
const mainImageContainer = document.querySelector('.main-image-container');
const card =  document.querySelector('.card');
const darkBlueButton = document.querySelector('.dark-blue');

// async function getPokemon() {
//     console.log('I am get Pokemon and I have run!')
//     let id = Math.floor(Math.random() * 1302);
//         console.log(id);
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         let pokemon = await response.json();
//         console.log(pokemon);

async function getPokemon() {
    let id = Math.floor(Math.random() * 1302);
    console.log(id);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (response.ok) {
        console.log('Promise resolved and HTTP status is successful');
        const pokemon = await response.json();
        console.log(pokemon);
        // console.log(error);
        // Functionality to change first letter to upper case
        const upperCaseName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        console.log(upperCaseName);
         title.textContent = `${upperCaseName}`;
         console.log(pokemon.id);
         pokedexNo.textContent = `Pokedex No: ${id}`;
          pokeHeight.textContent = `Height: ${pokemon.height} cm`;
            pokeWeight.textContent = `Weight: ${pokemon.weight} kg`;
            pokeSpeed.textContent = `Speed: ${pokemon.stats[5].base_stat}`;
            pokeAttack.textContent = `Attack: ${pokemon.stats[1].base_stat}`;
            pokeDefence.textContent = `Defense: ${pokemon.stats[2].base_stat}`;
            pokeImage.src = `${pokemon.sprites.other.home.front_default}`;
    
        
      } else {
        alert('Uh oh! There was an error - please try again!');
      }
     } catch (error) {
     
    }
};

function changeColourPink() {
    console.log('I am the change colour pink function and I have run!');
    mainImageContainer.style.backgroundColor = "#2bca63"; 
    card.style.backgroundColor = "#ca2c92";
    button.style.backgroundColor = "	#bb44f0";
}

function changeColourDarkBlue() {
  console.log('I am the change colour dark blue function and I have run!');
  mainImageContainer.style.backgroundColor = "#ca2c92"; 
  card.style.backgroundColor = "rgba( 255, 255, 255, 0.15 )";
  button.style.backgroundColor = "#ca2c92";
}


const pokemon = getPokemon();


button.addEventListener('click', getPokemon);
pinkButton.addEventListener('click', changeColourPink);
darkBlueButton.addEventListener('click', changeColourDarkBlue)

