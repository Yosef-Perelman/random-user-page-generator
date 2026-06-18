import renderUserPage from "./view.js";
import createNewUser from "./user.js";

const loading = document.getElementById("loading");
const app = document.getElementById("app");
const generateButton = document.getElementById("generateButton");

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

async function generateUser() {
  const userProperties = await createNewUser();
  renderUserPage(userProperties);

  //   renderUserPage(mockUser());

  loading.style.display = "none";
  app.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", generateUser);
generateButton.addEventListener("click", generateUser);
