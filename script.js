
let count = 0;

let schedule = [
    ["6 AM - 7 AM", "Wake up & get ready"],
    ["9 AM - 5 PM", "College"],
    ["5 PM - 6 PM", "Refresh & get ready"],
    ["6 PM - 7 PM", "Study"],
    ["8 PM - 9 PM", "Revision"]
];

schedule.forEach(function(item) {
    showTask(item[0], item[1]);
});

function showTask(time, name) {
    let div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
        <input type="checkbox" onchange="completeTask(this)">
        <b>${time}</b> - ${name}
    `;

    document.getElementById("tasks").appendChild(div);
}

function completeTask(box) {
    box.parentElement.classList.toggle("completed", box.checked);
}

function addTask() {
    let name = document.getElementById("task").value;
    let time = document.getElementById("time").value;

    if (name.trim() === "") {
        alert("Enter a task!");
        return;
    }

    showTask(time || "Anytime", name);

    document.getElementById("task").value = "";
    document.getElementById("time").value = "";
}

function saveRemarks() {
    let note = document.getElementById("remarks").value;
    document.getElementById("message").textContent =
        "Your remarks: " + note;
}
