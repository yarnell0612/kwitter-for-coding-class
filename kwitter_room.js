//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = { apiKey: "AIzaSyAvXKPxfIt9OLCZuhuJ7YrGCfbraZk5kZU", authDomain: "kwitter-5256b.firebaseapp.com", databaseURL: "https://kwitter-5256b-default-rtdb.firebaseio.com", projectId: "kwitter-5256b", storageBucket: "kwitter-5256b.appspot.com", messagingSenderId: "486592242780", appId: "1:486592242780:web:693013d9c5cf209e6df299", measurementId: "G-0HMY0VKNVD" };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();