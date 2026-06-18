import renderUserPage from "./view.js";
import createNewUser from "./user.js";

const loading = document.getElementById("loading");
const app = document.getElementById("app");
const generateButton = document.getElementById("generateButton");
const saveUserPageButton = document.getElementById("saveUserPageButton");
const loadUserPageButton = document.getElementById("loadUserPageButton");
const savedUsersSelect = document.getElementById("savedUsersSelect");

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

function getSavedUsers() {
  return JSON.parse(localStorage.getItem("savedUsers") ?? "{}");
}

function updateDropdown() {
  const savedUsers = getSavedUsers();
  savedUsersSelect.innerHTML = '<option value="">-- Select saved user --</option>';
  for (const name of Object.keys(savedUsers)) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    savedUsersSelect.appendChild(option);
  }
}

function saveUserPage() {
  if (currentUser) {
    const savedUsers = getSavedUsers();
    savedUsers[currentUser.user.name] = currentUser;
    localStorage.setItem("savedUsers", JSON.stringify(savedUsers));
    updateDropdown();
  }
}

function loadUserPage() {
  const name = savedUsersSelect.value;
  const savedUsers = getSavedUsers();
  if (savedUsers[name]) {
    renderUserPage(savedUsers[name]);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  generateUser();
  updateDropdown();
});
generateButton.addEventListener("click", generateUser);
saveUserPageButton.addEventListener("click", saveUserPage);
loadUserPageButton.addEventListener("click", loadUserPage);
