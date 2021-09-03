var firebaseConfig = {
    apiKey: "AIzaSyA0eda2aLvLVUmNaZuDCKtUMsPlEYnH9ws",
    authDomain: "kwitter-99fe7.firebaseapp.com",
    databaseURL: "https://kwitter-99fe7-default-rtdb.firebaseio.com",
    projectId: "kwitter-99fe7",
    storageBucket: "kwitter-99fe7.appspot.com",
    messagingSenderId: "590555615137",
    appId: "1:590555615137:web:c25de6ec547e2d99d985e0",
    measurementId: "G-EYDQJL6ER2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function logout() {
    window.localStorage.clear();
    window.location = "index.html";
}

function getData() {
    firebase.database().ref("/project").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                //End code
                document.getElementById("output").innerHTML += row;
          });
    });
}
getData();

function addRoom() {
    var room_name = document.getElementById("txtAddRoom").value;
    firebase.database().ref("/project").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}