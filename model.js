import getFromAPI from "./api-manager.js";

async function getusersList() {
  return await getFromAPI("users");
}

async function getMeatIpsum() {
  await getFromAPI("meatIpsum");
}

async function getPokemon() {
  return await getFromAPI("pokemon");
}

async function getKanyeQuote() {
  return await getFromAPI("kanyeQuote");
}

getusersList();
