// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCg7A6NtzsqFYNPzsgb5lAIq-yW3Y_mLW0",
    authDomain: "kwitter-hw-49efd.firebaseapp.com",
    databaseURL: "https://kwitter-hw-49efd-default-rtdb.firebaseio.com",
    projectId: "kwitter-hw-49efd",
    storageBucket: "kwitter-hw-49efd.appspot.com",
    messagingSenderId: "160432266882",
    appId: "1:160432266882:web:b6dfbbea9f12ef737b5e9b",
    measurementId: "G-B67LMJ3E0Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();