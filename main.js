let pokeImage = document.querySelector(".pokemon-pic");
let pokeName = document.querySelector(".poke-name");
let pokedexNo = document.querySelector(".pokedex-number");
let pokeHeight = document.querySelector(".poke-height");
let pokeWeight = document.querySelector(".poke-weight");
let pokeSpeed = document.querySelector(".poke-speed");
let pokeAttack = document.querySelector(".poke-attack");
let pokeDefence = document.querySelector(".poke-defence");
const button = document.querySelector('.btn');


// let pokeSpecialAttack=document.querySelector("#pokeSpecial-attack")
// let pokeSpecialDefense=document.querySelector("#pokeSpecial-defense")


async function getPokemon() {
    console.log('I am get Pokemon and I have run!')
    let id = Math.floor(Math.random() * 1302);
        console.log(id);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let pokemon = await response.json();
        console.log(pokemon);
        //Functionality to change first letter to upper case
        const upperCaseName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        console.log(upperCaseName);
         pokeName.textContent = `Name: ${upperCaseName}`;
         console.log(pokemon.id);
         pokedexNo.textContent = `Pokedex No: ${id}`;
          pokeHeight.textContent = `Height: ${pokemon.height} cm`;
            pokeWeight.textContent = `Weight: ${pokemon.weight} kg`;
            pokeSpeed.textContent = `Speed: ${pokemon.stats[5].base_stat}`;
            pokeAttack.textContent = `Attack: ${pokemon.stats[1].base_stat}`;
            pokeDefence.textContent = `Defense: ${pokemon.stats[2].base_stat}`;
            pokeImage.src = `${pokemon.sprites.other.home.front_default}`;
       
}

const pokemon = getPokemon();

     
           


            button.addEventListener('click', getPokemon);

    // async function getPokemon() {
    //     let id = Math.floor(Math.random() * 1118) + 1;
    //     console.log(id);
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    //     let pokemon = await response.json();
    //     console.log(pokemon.name, pokemon.id, pokemon.types[0].type.name, pokemon.sprites.other.dream_world.front_default);
        
    //     pokeName.innerHTML = pokemon.name;
    //     pokedexNo.innerHTML = "pokedex No: " + pokemon.id;
    //     pokeHeight.innerHTML = "Height: " + pokemon.height;
    //     pokeWeight.innerHTML = "Weight: " + pokemon.weight;
    //     pokeSpeed.innerHTML = "Speed: " + pokemon.stats[5].base_stat;
    //     pokeAttack.innerHTML = "Attack: " + pokemon.stats[1].base_stat;
        //pokeDefense.innerHTML = "Defense: " + pokemon.stats[2].base_stat;
        // pokeSpecialAttack.innerHTML = "Special Attack: " + pokemon.stats[3].base_stat;
        // pokeSpecialDefense.innerHTML = "Special Defense: " + pokemon.stats[4].base_stat;
        

    // };
    // //If want to get Pokemon on page load (rather than button click) use below:
    // document.querySelector("#button").addEventListener("click", getPokemon);
    //And call function in main.js

    //dwi am updatio hwn a neud yn siwr mae'n gweithio