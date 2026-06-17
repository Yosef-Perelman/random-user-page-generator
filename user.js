import getFromAPI from "./api-manager.js";

async function getUsersList() {
  return await getFromAPI("users");
}

async function getPokemon() {
  return await getFromAPI("pokemon");
}

async function getIpsum() {
  return await getFromAPI("meatIpsum");
}

async function getQuote() {
  return await getFromAPI("kanyeQuote");
}

function processUser(user) {
  const firstName = user.name.first;
  const lastName = user.name.last;
  const city = user.location.city;
  const country = user.location.country;
  const pic = user.picture.large;
  return { firstName, lastName };
}

function processUserFreinds(freinds) {
  return freinds.map((person) => `${person.name.first} ${person.name.last}`);
}

async function processUsersList() {
  const users = await getUsersList();
  const user = processUser(users.results[0]);
  const freinds = users.results.slice(1);
  const freindsNames = processUserFreinds(freinds);
  return [user, freindsNames];
}

async function processPokemon() {
  const pokemon = await getPokemon();
  const name = pokemon.name;
  const pic = pokemon.sprites.front_shiny;
  return { name, pic };
}

export default async function createNewUser() {
  const [user, freinds] = await processUsersList();
  const pokemon = await processPokemon();
  const ipsum = await getIpsum();
  const quote = await getQuote();
  return { user, freinds, pokemon, ipsum, quote };
}
