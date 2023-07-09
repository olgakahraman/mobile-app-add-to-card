import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://realtime-database-812db-default-rtdb.firebaseio.com/",
};

const app  = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");


console.log(app);


const addButtonEl = document.querySelector("#add-button");
const inputFieldEl = document.querySelector("#input-field");

addButtonEl.addEventListener("click", function(){
    
    let inputValue = inputFieldEl.value;
    push(shoppingListInDB, inputValue)
    console.log(`${inputValue} added to database`);
})