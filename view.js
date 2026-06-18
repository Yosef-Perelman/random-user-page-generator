const profilePictureElement = document.getElementById("profilePicture");
const nameElement = document.getElementById("name");
const addressElement = document.getElementById("address");
const friendsListElement = document.getElementById("friendsList");

function generateFriendsList(friends) {
  const liList = [];
  for (const name of friends) {
    const element = document.createElement("div");
    element.textContent = name;
    liList.push(element);
  }
  return liList;
}

function renderFriendsList(friends) {
  const friendsElements = generateFriendsList(friends);
  for (const e of friendsElements) {
    friendsListElement.appendChild(e);
  }
}

function renderProfilePicture(picPath) {
  profilePictureElement.src = picPath;
}

function renderDetails(name, address) {
  nameElement.textContent = name;
  addressElement.textContent = address;
}

export default function renderUserPage(userData) {
  renderProfilePicture(userData.user.pic);
  renderDetails(userData.user.name, userData.user.address);
  renderFriendsList(userData.friends);
}
