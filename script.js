const inputbox = document.getElementById("input-box");
        const listcontainer = document.getElementById("list-container");

        function addTask(){
            if(inputbox.value === ''){
                alert("You must add something!");
                return;
            }

            // Create a new list item
            let li = document.createElement("li");
            li.innerHTML = inputbox.value;

            // Create a close button
            let span = document.createElement('span');
            span.innerHTML = "&#10006;"; // Unicode for multiplication sign (×)
            span.className = "close";
            li.appendChild(span);

            // Add the list item to the list container
            listcontainer.appendChild(li);

            // Clear the input box
            inputbox.value = "";
            saveData();
        }

        listcontainer.addEventListener("click", function(e) {
            if(e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
                saveData();
            } else if (e.target.className === "close") {
                e.target.parentElement.remove();
                saveData();
            }
        }, false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}        

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();