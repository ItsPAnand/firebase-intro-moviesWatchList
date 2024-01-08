import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-f85e0-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const paraEl=document.getElementById("movie-para")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    paraEl.textContent+=inputValue+" "
    push(moviesInDB, inputValue)
    
    console.log(`${inputValue} added to database`)
})