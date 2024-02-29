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
      } else {
        console.error('Promise resolved but HTTP status failed');
      }
     } catch (error) {
      console.log(error);
    }
        //Functionality to change first letter to upper case
        // const upperCaseName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        // console.log(upperCaseName);
        //  title.textContent = `${upperCaseName}`;
        //  console.log(pokemon.id);
        //  pokedexNo.textContent = `Pokedex No: ${id}`;
        //   pokeHeight.textContent = `Height: ${pokemon.height} cm`;
        //     pokeWeight.textContent = `Weight: ${pokemon.weight} kg`;
        //     pokeSpeed.textContent = `Speed: ${pokemon.stats[5].base_stat}`;
        //     pokeAttack.textContent = `Attack: ${pokemon.stats[1].base_stat}`;
        //     pokeDefence.textContent = `Defense: ${pokemon.stats[2].base_stat}`;
        //     pokeImage.src = `${pokemon.sprites.other.home.front_default}`;
        }

const pokemon = getPokemon();


button.addEventListener('click', getPokemon);

    