const url = "https://pokeapi.co/api/v2/pokemon/";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".button__randomize").addEventListener("click", getRandomPokemon);
  document.querySelector(".button__battle").addEventListener("click", battle);
});
let pokemon1Name = "";
let pokemon2Name = "";

 async function getRandomPokemon(e) {
    e.preventDefault();
    const winnerElement = document.querySelector(".popup__winner");
    winnerElement.textContent = ""; // Clear the winner text
     let randomNumber = Math.floor(Math.random() * 898) + 1;
     let randomNumber2 = Math.floor(Math.random() * 898) + 1;
    try {
       const pokemon1 = await axios.get(`${url}${randomNumber}`);
       const pokemon2 = await axios.get(`${url}${randomNumber2}`);
       console.log(pokemon1, pokemon2);                                                

        pokemon1Name = pokemon1.data.forms[0]?.name;

        pokemon2Name =  pokemon2.data.forms[0]?.name;
       const pokemon1Image =  pokemon1.data.sprites?.front_default;
       const pokemon2Image =  pokemon2.data.sprites?.front_default;
       const pokemon1Speed =  pokemon1.data.stats[0]?.base_stat;
       const pokemon2Speed =  pokemon2.data.stats[0]?.base_stat;
       const pokemon1Ability =  pokemon1.data.abilities[0]?.ability.name;
       const pokemon2Ability =  pokemon2.data.abilities[0]?.ability.name;


       console.log(pokemon1, pokemon2);                                                


       console.log(`Pokemon 1: ${pokemon1Name}`);
       console.log(`Pokemon 2: ${pokemon2Name}`);
       console.log(`Pokemon 2: ${pokemon2Image}`);
       console.log(`Pokemon 2: ${pokemon2Speed}`);
       console.log(`Pokemon 2: ${pokemon2Ability}`);
      
       
       displayPokemonInfo(pokemon1,"pokemon1");
       displayPokemonInfo(pokemon2,"pokemon2");

     } catch (error) {
             console.error(error, "Didn't work");
   }
 }
 

 
 function displayPokemonInfo(pokemon,pokemonNum){
    console.log(pokemonNum);
const nameEl=document.getElementById(`${pokemonNum}--name`);
const abilitiesEl=document.getElementById(`${pokemonNum}--abilities`);
const typeEl=document.getElementById(`${pokemonNum}--type`);
const attackEl=document.getElementById(`${pokemonNum}--attack`);
const defenseEl=document.getElementById(`${pokemonNum}--defense`);
const speedEl=document.getElementById(`${pokemonNum}--speed`);

const imgEl=document.getElementById(`${pokemonNum}--image`);
const pokemonImg=pokemon.data.sprites.front_default;
console.log(pokemonImg);

imgEl.src=pokemonImg;
nameEl.textContent = pokemon.name;



nameEl.textContent = pokemon.data.name;
typeEl.textContent=`Type: ${ pokemon.data.types.map(type=>type.type.name).join(" ,")}`;
// const foundPokemon=`Attack: ${pokemon.data.stats.find(stat => stat.stat.name==="attack")}`;
//  attackEl.innerText=`Attack: ${foundPokemon.base_stat}`;
 attackEl.textContent=`Attack: ${pokemon.data.stats.find(stat => stat.stat.name==="attack").base_stat}`;
 defenseEl.textContent=`Defense: ${pokemon.data.stats.find(stat => stat.stat.name==="defense").base_stat}`;
 speedEl.textContent=`Speeds: ${pokemon.data.stats.find(stat => stat.stat.name==="speed").base_stat}`;// /attackEl.innerText=`Attack: ${foundPokemon.base_stat}`;
//  defenseEl.textContent=`Defense: ${pokemon.data.stats.find(stat => stat.stat.name==="defense").base_stat}`;
//  speedEl.textContent=`Speed: ${pokemon.data.stats.find(stat => stat.stat.name==="speed").base_stat}`;
//  attackEl.innerText=foundPokemon.base_stat};
//  defenseEl.textContent= pokemon.data.stats.find(stat => stat.stat.name==="defense").base_stat;stat}`;

// defenseEl.textContent= pokemon.data.stats.find(stat => stat.stat.name==="defense").base_stat;
 
 }
function battle(){
  const resultEl=document.getElementById("battle-result");
  const randomWinner=Math.random()>0.5 ? pokemon1Name : pokemon2Name;
  console.log(`The winner is : ${randomWinner}`);
  const winnerElement = document.querySelector(".popup__winner");
  winnerElement.textContent = randomWinner;
}