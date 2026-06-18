const friendsListElement = document.getElementById("friendsList");
const profilePictureElement = document.getElementById("profilePicture");

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

export default function renderUserPage(userData) {
  renderProfilePicture(userData.user.pic);
  renderFriendsList(userData.friends);
}
