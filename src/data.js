import axios from "axios";

function fetchCountries(term) {
  //https://restcountries.eu/rest/v2/name/{name}

  const countriesUrl = `https://restcountries.eu/rest/v2/name/${term}`;
  console.log("countriesUrl", countriesUrl);

  return new Promise((resolve) => {
    axios
      .get(countriesUrl)
      .then(function (response) {
        console.log("Successful", response.data);
        resolve(response.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  });
}
export default fetchCountries;
