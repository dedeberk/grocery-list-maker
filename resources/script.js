addButton = document.getElementById("addToDo");
groceryList = document.getElementById("groceryList");
inputText = document.getElementById("inputText");
clearToDo = document.getElementById("clearToDo");
//adding new items to the list, first one define the function, second one with clicking add button on screen
//third one is with enter key

function addItem() {
    if (inputText.value === ""){
        alert("You must enter some text")
    } else {
        listItem = document.createElement("li");
        listItem.classList.add("listItem-styling");
        // listItem.setAttribute("id", inputText.value.toLowerCase());
        //paragraph.setAttribute("id")
        groceryList.appendChild(listItem);
        listItem.innerHTML = inputText.value;
        inputText.value = ""
    }
}
addButton.addEventListener("click", function () {
    addItem()
})

inputText.addEventListener("keypress", (event) => {
    // when enter pressed
    if (event.which === 13) {
        addItem();
    }
})




//making list item line through
groceryList.addEventListener("click", e => {
    console.log("item pressed.");
    console.log(e);
    e.path[0].classList.toggle("checked")
    
})



//delete list item when click Clear
clearToDo.addEventListener('click', function() {
    console.log("clear btn pressed");
    // remove all child of grovceryList
    groceryList.innerHTML = '';
});




/*get inner text from input text
when click add button -> add text to the container with new paragraph
----
when click one time -> make it overline
when click delete button -> remove that list item
*/
