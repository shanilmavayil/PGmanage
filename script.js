const rooms = [
    { roomNo: 1, student: "Rahul" },
    { roomNo: 2, student: "Arjun" },
    { roomNo: 3, student: "Nikhil" },
    { roomNo: 4, student: "Faizal" },
    { roomNo: 5, student: "Sandeep" },
    { roomNo: 6, student: "Akhil" },
    { roomNo: 7, student: "Vishnu" },
    { roomNo: 8, student: "Adithya" },
    { roomNo: 9, student: "Rohit" },
    { roomNo: 10, student: "Manu" }
];

const roomContainer = document.getElementById("roomContainer");

function displayRooms() {
    roomContainer.innerHTML = "";

    rooms.forEach(room => {
        const roomDiv = document.createElement("div");
        roomDiv.classList.add("room");
        roomDiv.id = "room-" + room.roomNo;

        roomDiv.innerHTML = `
            <h3>Room ${room.roomNo}</h3>
            <p>${room.student ? room.student : "<span class='empty'>Empty</span>"}</p>
        `;

        roomContainer.appendChild(roomDiv);
    });
}

function searchStudent() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    // Remove previous highlight
    document.querySelectorAll(".room").forEach(room => {
        room.classList.remove("highlight");
    });

    let found = false;

    rooms.forEach(room => {
        if (room.student.toLowerCase() === searchValue) {
            document.getElementById("room-" + room.roomNo).classList.add("highlight");
            found = true;
        }
    });

    if (!found) {
        alert("Student not found!");
    }
}

displayRooms();
