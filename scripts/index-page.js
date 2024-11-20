const url = "https://pokeapi.co/api/v2/pokemon/";
document.querySelector(".button__randomize").addEventListener("click,", getRandomPokemon);
document.querySelector(".button__battle").addEventListener("click", battle);



 async function getRandomPokemon() {
     let randomNumber = Math.floor(Math.random() * 898) + 1;
     let randomNumber2 = Math.floor(Math.random() * 898) + 1;
    try {
       const pokemon1 = await fetch(`${url}${randomNumber}`);
       const pokemon2 = await fetch(`${url}${randomNumber2}`);
       const pokemon1Data = await pokemon1.json();
       const pokemon1Name = await pokemon1Data.forms[0]?.name;
       const pokemon2Data = await pokemon2.json();
       const pokemon2Name = await pokemon2Data.forms[0]?.name;
       const pokemon1Image = await pokemon1Data.sprites?.front_default;
       const pokemon2Image = await pokemon2Data.sprites?.front_default;
       const pokemon1Speed = await pokemon1Data.stats[0]?.base_stat;
       const pokemon2Speed = await pokemon2Data.stats[0]?.base_stat;
       const pokemon1Ability = await pokemon1Data.abilities[0]?.ability.name;
       const pokemon2Ability = await pokemon2Data.abilities[0]?.ability.name;

       console.log(`Pokemon 1: ${pokemon1Name}`);
       console.log(`Pokemon 2: ${pokemon2Name}`);
       console.log(`Pokemon 2: ${pokemon2Image}`);
       console.log(`Pokemon 2: ${pokemon2Speed}`);
       console.log(`Pokemon 2: ${pokemon2Ability}`);
      
       console.log(pokemon1, pokemon2);                                                

       displayPokemonInfo(pokemon1Data,"pokemon1");
       displayPokemonInfo(pokemon2Data,"pokemon2");

     } catch (error) {
             console.error(error, "Didn't work");
   }
 }
 
        
 getRandomPokemon();

 
 function displayPokemonInfo(pokemon,pokemonNum){
const nameEl=document.getElementById(`${pokemonNum}--name`);
const abilitiesEl=document.getElementById(`${pokemonNum}--abilities`);
const typeEl=document.getElementById(`${pokemonNum}--type`);
const attackEl=document.getElementById(`${pokemonNum}--attack`);
const defenseEl=document.getElementById(`${pokemonNum}--defense`);
const speedEl=document.getElementById(`${pokemonNum}--speed`);

const imgEl=document.getElementById(`image-id`);
const pokemonImg=pokemon1Data.sprites.front_default;

imgEl.src=pokemonImg;

 nameEl.textContent=pokemon.name;
 abilitiesEl.textContent=pokemon.abilities.map(ability=>ability.ability.name).join(" ,");
 typeEl.textContent=pokemon.types.map(type=>type.type.name).join(" ,");
 attackEl.textContent=pokemon.stats.find(stat => stat.stat.name==="attack").base_stat;
 defenseEl.textContent=pokemon.stats.find(stat => stat.stat.name==="defense").base_stat;
 speedEl.textContent=pokemon.stats.find(stat => stat.stat.name==="speed").base_stat;
 
}

function battle(){
  const resultEl=document.getElementById("battle-result");
  const randomWinner=Math.random()>0.5 ? pokemon1Name : pokemon2Name;
  console.log(`The winner is : ${randomWinner}`);
}










     // "sprites": {
 
        //"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",

        // "stats": [
        //   {
        //       "base_stat": 90,
        //       "effort": 0,
        //       "stat": {
        //           "name": "hp",
        //           "url": "https://pokeapi.co/api/v2/stat/1/"
        // "abilities": [
        // {
        //     "ability": {
        //         "name": "blaze",
        //         "url": "https://pokeapi.co/api/v2/ability/66/"
        //     },
        //     "is_hidden": false,
        //     "slot": 1







// async function fetchPokemon() {

//   console.log(axios);

//   try {
//       const response = await axios.get(`${url}`);
//          console.log(response.data); // Log the fetched Pokémon data
//    } catch (error) {
//        console.error(error, "Didn't work");
//   }
//  }

 // Call the function
 //fetchPokemon();
