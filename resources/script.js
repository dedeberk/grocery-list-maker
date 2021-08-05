addButton = document.getElementById("addToDo");
groceryList = document.getElementById("groceryList");
inputText = document.getElementById("inputText")

//adding new items to the list, first one define the function, second one with clicking add button on screen
//third one is with enter key

function addItem() {
    if (inputText.value === ""){
        alert("You must enter some text")
    } else{
    listItem = document.createElement("ul");
    listItem.classList.add("listItem-styling");
    //paragraph.setAttribute("id")
    groceryList.appendChild(listItem);
    listItem.innerHTML = inputText.value;
    inputText.value = ""}
}
addButton.addEventListener("click", function () {
    addItem()
})

inputText.addEventListener("keypress", (event) => {
    if (event.which === 13) {
        addItem();
    }
})



//making list item line through
groceryList.addEventListener("click", e => {
    if(e.target.tagName == "UL"){
        e.target.classList.toggle("checked")
    }
})

/*
//delete list item when click Clear
removeTask.addEventListener('click', function(e) {
    if(e.target.tagName == "UL"){
    node.parentNode.removeChild("UL");}
});
*/



/*get inner text from input text
when click add button -> add text to the container with new paragraph
----
when click one time -> make it overline
when click delete button -> remove that list item
*/
