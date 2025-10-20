//Get elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

//Add new task
addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    //Mark done when clicked
    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    //Delete task button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation(); //prevent line-through toggle
        li.remove();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = ""; //clear box
});