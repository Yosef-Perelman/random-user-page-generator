import { generateFriendsList } from "./view.js";

const friendsListElement = document.getElementById("friendsList");

function createFriendsList() {
  const friendsList = [
    "Nigoslav Sichenko",
    "Níger da Mata",
    "Nóris Peixoto",
    "ماهان نكو نظر",
    "Robert Holmes",
    "Jesus Tucker",
  ];
  const friendsElements = generateFriendsList(friendsList);
  for (const e of friendsElements) {
    friendsListElement.appendChild(e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  debugger;
  createFriendsList();
});
