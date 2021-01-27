function countries(countriesArray) {
  console.log("countriesArray", countriesArray);
  let listItems = "";
  for (let i = 0; i < countriesArray.length; i++) {
    listItems += `<li>${countriesArray[i].name} - ${countriesArray[i].capital} - ${countriesArray[i].region}</li>`;
  }
  return `<ul>` + listItems + `</ul>`;
}

// function countries(countriesArray) {
//   let listItems = "";

//   for (let i = 0; i < countriesArray.length; i++) {
//     let jezici = "";
//     for (let j = 0; j < countriesArray[j].languages.length; j++) {
//       jezici += countriesArray[i].languages[j].name;
//     }
//     listItems += `<li>` ${countriesArray[i].name}  - ${countriesArray[i].capital} - ${countriesArray[i].region} - ${jezici}`</li>`;
//   }
//   return `<ul>` +  listItems + `</ul>`;
// }

export default countries;
