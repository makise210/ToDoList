const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//add task
function addTask(){
    if(inputBox.value === ''){
        alert("Cannot be Empty");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//add crossed item
        li.appendChild(span);
    }
    inputBox.value = "";//update input box
    saveDate();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)//if click li toggle checked, if click span remove task

function saveDate(){
    localStorage.setItem("data", listContainer.innerHTML);
}//save date in browser

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}//shat task we entered before

showTask()