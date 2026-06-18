import renderUserPage from "./view.js";
import createNewUser from "./user.js";

const loading = document.getElementById("loading");
const app = document.getElementById("app");
const generateButton = document.getElementById("generateButton");
const saveUserPageButton = document.getElementById("saveUserPageButton");
const loadUserPageButton = document.getElementById("loadUserPageButton");

function mockUser() {
  const user = {
    user: {
      name: "Vojin Silić",
      address: "Novi Kneževac, Serbia",
      pic: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    friends: [
      "Audrey Edwards",
      "Jelena Borojević",
      "Elsa Lakso",
      "Tomas Domínguez",
      "Leonel Holguín",
    ],
    pokemon: {
      name: "sceptile",
      pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/254.png",
    },
    ipsum:
      "Rump ribeye kielbasa, chislic filet mignon boudin pork pastrami capicola.  Pork belly beef pork chop chislic ham hock beef ribs fatback spare ribs bresaola.  Picanha venison tail fatback spare ribs frankfurter meatloaf boudin ground round short loin flank.  Tongue burgdoggen buffalo t-bone, pork chicken leberkas filet mignon ribeye beef ribs ham pig pastrami swine.  Turducken kevin cow tri-tip doner ham fatback.",
    quote: "Speak God's truth to power",
  };
  return user;
}

let currentUser = null;

async function generateUser() {
  try {
    const userProperties = await createNewUser();
    renderUserPage(userProperties);

    // const userProperties = mockUser();

    currentUser = userProperties;

    renderUserPage(currentUser);

    loading.style.display = "none";
    app.style.display = "flex";
  } catch (e) {
    loading.textContent = e.message;
  }
}

function saveUserPage() {
  if (currentUser) {
    localStorage.setItem("savedUser", JSON.stringify(currentUser));
  }
}

function loadUserPage() {
  const saved = localStorage.getItem("savedUser");
  if (saved) {
    renderUserPage(JSON.parse(saved));
  }
}

document.addEventListener("DOMContentLoaded", generateUser);
generateButton.addEventListener("click", generateUser);
saveUserPageButton.addEventListener("click", saveUserPage);
loadUserPageButton.addEventListener("click", loadUserPage);
