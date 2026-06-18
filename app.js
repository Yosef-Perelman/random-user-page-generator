import renderUserPage from "./view.js";
import createNewUser from "./user.js";

const generateButton = document.getElementById("generateButton");

function createFriendsList() {
  // todo replace with data from the api
  const friendsList = [
    "Nigoslav Sichenko",
    "Níger da Mata",
    "Nóris Peixoto",
    "Robert Holmes",
    "Jesus Tucker",
  ];
  renderFriendsList(friendsList);
}

document.addEventListener("DOMContentLoaded", () => {
  createFriendsList();
});

function mockUser() {
  const user = {
    user: {
      pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/342.png",
    },
    friends: [
      "Nigoslav Sichenko",
      "Níger da Mata",
      "Nóris Peixoto",
      "Robert Holmes",
      "Jesus Tucker",
    ],
  };
  return user;
}

function generateUser() {
  //   const userProperties = createNewUser();
  //   renderUserPage(userProperties);
  renderUserPage(mockUser());
}

generateButton.addEventListener("click", generateUser());
