import getFromAPI from "./api-manager.js";

async function getUsersList() {
  return await getFromAPI("users");
}

async function getPokemon() {
  return await getFromAPI("pokemon");
}

async function getIpsum() {
  const ipsum = await getFromAPI("meatIpsum");
  return ipsum[0];
}

async function getQuote() {
  const quote = await getFromAPI("kanyeQuote");
  return quote.quote;
}

function processUser(user) {
  const name = `${user.name.first} ${user.name.last}`;
  const address = `${user.location.city}, ${user.location.country}`;
  const pic = user.picture.large;
  return { name, address, pic };
}

function processUserFriends(friends) {
  return friends.map((person) => `${person.name.first} ${person.name.last}`);
}

async function processUsersList() {
  const users = await getUsersList();
  const user = processUser(users.results[0]);
  const friends = users.results.slice(1);
  const friendsNames = processUserFriends(friends);
  return [user, friendsNames];
}

async function processPokemon() {
  const pokemon = await getPokemon();
  const name = pokemon.name;
  const pic = pokemon.sprites.front_shiny;
  return { name, pic };
}

export default async function createNewUser() {
  const [user, friends] = await processUsersList();
  const pokemon = await processPokemon();
  const ipsum = await getIpsum();
  const quote = await getQuote();
  return { user, friends, pokemon, ipsum, quote };
}

createNewUser().then((r) => {
  console.log(r);
});
