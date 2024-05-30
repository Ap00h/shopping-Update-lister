import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase configuration
const appSettings = {
    databaseURL: "https://mylist-a4d80-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");



// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const inputFieldEl = document.getElementById("input-field");
    const addButtonEl = document.getElementById("add-button");
    const shoppingListEl = document.getElementById("shopping-list");

    addButtonEl.addEventListener("click", function() {
        let inputValue = inputFieldEl.value;

        // Push input value to Firebase database
        clearInputFieldEl();

        appendItemToShoppingListEl(inputValue);
    });
});

function clearInputFieldEl() {
    inputFieldEl.value = "";
}

function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}