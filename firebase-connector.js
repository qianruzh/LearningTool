  // Your web apps Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA-wExMG-1qwzklCMtkgAbQfSBHOWbXZl8",
    authDomain: "best-learning-tool-ffcbb.firebaseapp.com",
    projectId: "best-learning-tool-ffcbb",
    storageBucket: "best-learning-tool-ffcbb.appspot.com",
    messagingSenderId: "1095156666135",
    appId: "1:1095156666135:web:60a716e37125aec5b27152",
    measurementId: "G-F372F8FCJ0"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


firebase.database().ref();  // Specifies the database root
firebase.database().ref("child/path") // Specifies a specific location in the database tree

let dbLocation = firbase.database().ref('deck/flashcards');

dbLocation.set(myFlashcards);

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
firebase.database().ref('deck/flashcards'); 
 
// Remove myFlashcards from the database
firebase.database.remove()

// As before,make the database point to the location where the data exists
// If the location doesn't exist it will be created but there will be nothing to retirieve
let fc = firebase.database().ref('deck/flashy');

// A variable to store the JSON results in a human readable format
let jsonString;
// Tell Firebase to retrieve your data
fc.on("value", function(retrieve) {

    //Get the raw JSON data back from the database
    let queryData = retrieve.val();

    // Turn the data into a JSON String
    jsonString = JSON.stringify(queryData);
});

// Print the data out as a JSON string or otherwise manipulate it
console.log (' JSON string:' + jsonString )
