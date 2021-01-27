//importali smo skriptu iz drugog foldera
// const layout = require("./views/layout"); --> ES5 standard

import layout from "./views/layout";
import spinner from "./views/loader";
import fetchCountries from "./data";
import createCountries from "./views/countries";

function render(markup, parent) {
  parent.innerHTML = markup;
}

function setup() {
  const layoutContainer = document.getElementById("app");
  //layoutContainer.innerHTML = layout;
  render(layout, layoutContainer);

  const searchInput = document.getElementById("search");
  const appContainer = document.getElementById("content");

  searchInput.addEventListener("keydown", (event) => {
    const enteredText = event.target.value.trim();
    console.log("enteredText", enteredText);

    if (!enteredText || enteredText.lenght < 2) {
      console.log("empty text!");
      return;
    }

    render(spinner, appContainer);

    //call api code
    fetchCountries(enteredText).then(function (countriesArray) {
      console.log("**********", countriesArray);
      const countriesList = createCountries(countriesArray);
      console.log("**********  countriesList", countriesList);
      render(countriesList, appContainer);
    });
  });
}

export default setup;
