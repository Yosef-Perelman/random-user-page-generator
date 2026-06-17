async function getResponseFromAPI(url) {
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (e) {
    return "Failed to fetch the data from the API.";
  }
}

async function getMeatIpsumFromAPI() {
  return await getResponseFromAPI(
    `https://baconipsum.com/api/?type=all-meat&paras=2`,
  );
}

async function getUsersFromAPI() {
  return await getResponseFromAPI(`https://randomuser.me/api/?results=7`);
}

async function getKanyeQuoteFromAPI() {
  return await getResponseFromAPI(`https://api.kanye.rest`);
}

async function getPokeFromAPI() {
  const randomId = Math.floor(Math.random() * 1025) + 1;
  return await getResponseFromAPI(
    `https://pokeapi.co/api/v2/pokemon/${randomId}`,
  );
}

export default function getFromAPI(choose) {
  switch (choose) {
    case "pokemon": {
      return getPokeFromAPI();
    }
    case "kanyeQuote": {
      return getKanyeQuoteFromAPI();
    }
    case "meatIpsum": {
      return getMeatIpsumFromAPI();
    }
    case "users": {
      return getUsersFromAPI();
    }

    default:
      break;
  }
}
