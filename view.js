const profilePictureElement = document.getElementById("profilePicture");
const nameElement = document.getElementById("name");
const addressElement = document.getElementById("address");
const friendsListElement = document.getElementById("friendsList");
const quoteText = document.getElementById("quoteText");
const pokePic = document.getElementById("pokePic");
const pokeName = document.getElementById("pokeName");
const aboutText = document.getElementById("aboutText");

function renderProfilePicture(picPath) {
  profilePictureElement.src = picPath;
}

function renderDetails(name, address) {
  nameElement.textContent = name;
  addressElement.textContent = address;
}

function renderQuote(quote) {
  quoteText.textContent = `"${quote}"`;
}

function renderPokemon(pokemon) {
  pokePic.src = pokemon.pic;
  pokeName.textContent = `Favorite Pokemon: ${pokemon.name}`;
}

function renderAbout(text) {
  aboutText.textContent = text;
}

function generateFriendsList(friends) {
  const liList = [];
  for (const name of friends) {
    const element = document.createElement("li");
    element.textContent = name;
    liList.push(element);
  }
  return liList;
}

function renderFriendsList(friends) {
  friendsListElement.innerHTML = "";
  const friendsElements = generateFriendsList(friends);
  for (const e of friendsElements) {
    friendsListElement.appendChild(e);
  }
}

export default function renderUserPage(userData) {
  renderProfilePicture(userData.user.pic);
  renderDetails(userData.user.name, userData.user.address);
  renderFriendsList(userData.friends);
  renderQuote(userData.quote);
  renderPokemon(userData.pokemon);
  renderAbout(userData.ipsum);
}
