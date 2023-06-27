
var add=document.getElementById("addToDo");
var input =document.getElementById("inputField");
var todoContainer=document.getElementById("todoContainer");
add.addEventListener('click', addItem);
input.addEventListener('keypress',function(e){
    addItem();
})

function addItem(e){

    const item_value =input.value;
    const item = document.createElement("div");
    item.classList.add("item");

    const item_content = document.createElement("div");
    item_content.classList.add("content");
    item.appendChild(" item_content");

}