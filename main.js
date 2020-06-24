import customers from './customers.js'

let container = document.getElementById("profileContainer")
console.log(container);
for (let customer of customers) {

  let article = document.createElement("article");
  article.classList.add("hide-child", "relative", "ba", "b--black-20", "mw5");
  let image = document.createElement("img");
  image.src = `${customer.picture.large}`;
  article.append(image);

  function strCap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

  }
  //open and closing p-tags
  let name = document.createElement("hi");
  name.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
  let nameText = `${strCap(customer.name.first)} ${strCap(customer.name.last)}`;
  //use the named div and add to it
  name.append(nameText)
  article.append(name);
  //container holds all info append(ed)
  container.append(article);

  let gender = document.createElement("p");
  gender.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
  let genderText = `${customer.gender}`;
  gender.append(genderText)
  article.append(gender);
  container.append(article);

  let location = document.createElement("p");
  location.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
  let locationText = `${customer.location.street}`;
  location.append(locationText)
  article.append(location);
  container.append(article);

  let locationCity = document.createElement("p");
  locationCity.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
  let locationCityText = `${customer.location.city},
  ${customer.location.state} ${customer.location.postcode}`;
  locationCity.append(locationCityText)
  article.append(locationCity);
  container.append(article);

  let email = document.createElement("p");
  email.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
  let emailText = `${customer.email}`;
  location.append(emailText)
  article.append(email);
  container.append(article);

}