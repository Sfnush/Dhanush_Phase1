
// Task 1: Variables & Data Types
let studentName = "Dhanush";
const college = "Don Bosco College";
console.log("Name:", studentName);
console.log("College:", college);

// Task 2: Background Color Change
const styleButton = document.getElementById('style-btn');
if (styleButton) {
    styleButton.addEventListener('click', function() {
        document.body.style.backgroundColor = "lightblue";
        alert("Background color changed successfully!");
    });
}

// Task 3: Content Change
const contentButton = document.getElementById('content-btn');
if (contentButton) {
    contentButton.addEventListener('click', function() {
        const title = document.getElementById('main-title');
        if (title) {
            title.textContent = "DOM Content Changed!";
            title.style.color = "blue";
        }
    });
}

// Task: Arrays & Hobbies
let myHobbyList = ["Music Production", "Photography", "Coding", "Biking"];

console.log("My Hobbies List:");
myHobbyList.forEach(function(hobby) {
    console.log("- " + hobby);
});

// Task 4: Live Preview
const inputField = document.getElementById('user-input');
const preview = document.getElementById('preview-text');

if (inputField && preview) {
    inputField.addEventListener('input', function() {
        preview.textContent = inputField.value; 
    });
}

// Task 5: Form Validation
const loginForm = document.getElementById('login-form');
const errorMsg = document.getElementById('error-message');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const pass = document.getElementById('password').value;

        if (pass.length < 6) {
            errorMsg.textContent = "Password must be at least 6 characters!";
            errorMsg.style.color = "red";
        } else {
            errorMsg.style.color = "green";
            errorMsg.textContent = "Login Successful!";
        }
    });
}

//Task 6: To-Do List Logic
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

if (addBtn) {
    addBtn.addEventListener('click', function() {
        const taskText = todoInput.value;
        if (taskText !== "") {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = " Delete";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.onclick = function() {
                todoList.removeChild(li);
            };

            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            todoInput.value = ""; 
        }
    });
}

