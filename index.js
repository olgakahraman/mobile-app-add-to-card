import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://realtime-database-812db-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const addButtonEl = document.querySelector("#add-button");
const inputFieldEl = document.querySelector("#input-field");
const shoppingListEl = document.querySelector("#shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingListInDB, inputValue);
  console.log(`${inputValue} added to database`);
  clearInputFieldEl();
  appendItemToShoppingListEl(inputValue);
});

onValue(shoppingListInDB, function(snapshot){
let itemsArray = Object.values(snapshot.val());
for( let i = 0; i < itemsArray.length; i++){
  
  appendItemToShoppingListEl(itemsArray[i]);
}
})


function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendItemToShoppingListEl(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}
