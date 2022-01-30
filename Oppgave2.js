const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

const userUl = document.getElementById("users");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

// TODO: Hent HTML #id med getElementById
const search = document.getElementById("name");
const userInfo = document.getElementById("users");
const filterAge = document.getElementById("age");
const filterBtn = document.getElementById("filter");
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const searchNames = () => {
  const nameInfo = search.value;
  if (nameInfo) {
    const findName = users.find(
      (user) => user.name.toLowerCase() === nameInfo.toLowerCase()
    );

    if (findName) {
      createTableUI([findName]);
    } else {
      userUl.innerHTML = "Ingen treff på ditt søk";
    }
  } else {
    createTableUI(users);
  }
};

const filterSearch = () => {
  const filterInfo = filterAge.value;
  if (filterInfo && Number(filterInfo)) {
    const results = users.filter((user) => user.age > filterInfo);
    if (results && results.length > 0) {
      createTableUI(results);
    } else {
      userUl.innerHTML = "Søket ga ingen treff";
    }
  } else {
    createTableUI(users);
  }
};

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

const main = () => {
  createTableUI(users);
};

main();

search.addEventListener("keyup", searchNames);
filterBtn.addEventListener("click", filterSearch);
