async function getUsersFromAPI() {
  let users = await fetch(`https://randomuser.me/api/?results=7`);
  users = await users.json();
  return users;
}

async function getKanyeQuoteFromAPI() {
  let quote = await fetch(`https://api.kanye.rest`);
  quote = await quote.json();
  return quote;
}

async function getPokeFromAPI() {
  const randomId = Math.floor(Math.random() * 1025) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const pokemon = await response.json();
  return pokemon;
}

async function getMeatIpsumFromAPI() {
  const response = await fetch(`https://baconipsum.com/api/?type=all-meat`);
  const meatIpsum = await response.json();
  return meatIpsum;
}

getMeatIpsumFromAPI().then((r) => console.log(r));
