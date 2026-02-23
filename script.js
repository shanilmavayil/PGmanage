var rooms = [];
var div = document.getElementById("rooms");

// Create 10 rooms with 2 beds
for (var i = 1; i <= 10; i++) {
    rooms[i] = {bed1: "", bed2: ""};
}

// Display rooms
function showRooms() {
    div.innerHTML = "";

    for (var i = 1; i <= 10; i++) {

        var available = 0;
        if (rooms[i].bed1 == "") available++;
        if (rooms[i].bed2 == "") available++;

        div.innerHTML +=
            "<div class='room' id='room"+i+"'>" +
            "<h4>Room " + i + "</h4>" +
            "Bed1: " + (rooms[i].bed1 || "Empty") + "<br>" +
            "Bed2: " + (rooms[i].bed2 || "Empty") + "<br>" +
            "Available Beds: " + available + "<br>" +
            "<button onclick='vacate("+i+",1)'>Vacate Bed1</button>" +
            "<button onclick='vacate("+i+",2)'>Vacate Bed2</button>" +
            "</div>";
    }
}

function allocate() {
    var name = document.getElementById("name").value;
    var room = document.getElementById("room").value;
    var bed = document.getElementById("bed").value;

    if (rooms[room]["bed"+bed] == "") {
        rooms[room]["bed"+bed] = name;
    } else {
        alert("Bed already occupied!");
    }

    showRooms();
}

function vacate(room, bed) {
    rooms[room]["bed"+bed] = "";
    showRooms();
}

function search() {
    var name = document.getElementById("name").value;

    // Remove highlight from all rooms first
    for (var i = 1; i <= 10; i++) {
        document.getElementById("room"+i).classList.remove("highlight");
    }

    // Find and highlight ONLY one room
    for (var i = 1; i <= 10; i++) {
        if (rooms[i].bed1 == name || rooms[i].bed2 == name) {
            document.getElementById("room"+i).classList.add("highlight");
            break;   // stops after first match
        }
    }
}
showRooms();
