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

let userProperties = null;

async function generateUser() {
  try {
    userProperties = await createNewUser();

    // for debugging
    // const userProperties = mockUser();

    renderUserPage(userProperties);

    loading.style.display = "none";
    app.style.display = "flex";
  } catch (e) {
    app.style.display = "none";
    loading.style.display = "flex";
    loading.textContent = e.message;
  }
}

function getSavedUsers() {
  try {
    return JSON.parse(localStorage.getItem("savedUsers") ?? "{}");
  } catch (e) {
    return {};
  }
}

function updateDropdown() {
  const savedUsers = getSavedUsers();
  savedUsersSelect.innerHTML = '<option value="">Select User To Load</option>';
  for (const name of Object.keys(savedUsers)) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    savedUsersSelect.appendChild(option);
  }
}

function saveUserPage() {
  if (userProperties) {
    const savedUsers = getSavedUsers();
    savedUsers[userProperties.user.name] = userProperties;
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

generateButton.addEventListener("click", () => {
  loading.style.display = "flex";
  app.style.display = "none";
  generateUser();
});

saveUserPageButton.addEventListener("click", saveUserPage);

loadUserPageButton.addEventListener("click", loadUserPage);
