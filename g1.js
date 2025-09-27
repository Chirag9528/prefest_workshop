// Example 1: Change Text

function changeText() {
    let p = document.getElementById("text");
    p.innerText = "Text Changed!";
}

// Example 2: Change Color
function changeColor() {
    let box = document.getElementById("colorBox");
    // random color generator
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    box.style.backgroundColor = randomColor;
}


// Example 3: Add/Remove Items
function addItem() {
    let input = document.getElementById("itemInput").value;
    // console.log(document.getElementById("itemInput"))
    if (input) {
    let li = document.createElement("li"); // create new <li>
    li.innerText = input;
    document.getElementById("list").appendChild(li);
    document.getElementById("itemInput").value = ""; // clear input
    }
}

function removeItem() {
    let list = document.getElementById("list");
    console.log(list)
    console.log(list.lastChild)
    if (list.lastChild) {
        list.removeChild(list.lastChild); // remove last <li>
    }
}

// Example 4: Show/Hide Text

function toggleText() {
    let hiddenP = document.getElementById("hiddenText");
    if (hiddenP.style.display === "none") {
    hiddenP.style.display = "block";
    } else {
    hiddenP.style.display = "none";
    }
}
