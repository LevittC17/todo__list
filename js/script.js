const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");

addBtn.addEventListener("click", function() {
    if (input.value.trim() === "") {
        alert("Please enter a valid todo.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${input.value}<button>Delete</button>`;
    list.appendChild(li);

    input.value = "";
});

list.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});
