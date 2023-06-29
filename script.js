
var add=document.getElementById("addToDo");
var input =document.getElementById("inputField");
var  date =document.getElementById("inputDate");
var todoContainer=document.getElementById("todoContainer");
add.addEventListener('click', addItem);
input.addEventListener('keypress',function(e){
     if(e.key=="Enter"){
        addItem();
     }
    
})
date.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
       addItem();
    }
   
})

function addItem(e){

    const item_value =input.value;
    const date_value = date.value;
    // we create a div tag to hold out list
    const item = document.createElement("div");
    //the class name of the container is item
    item.classList.add("item");
   // we create another div with class name content to hold the content part 
    const item_content = document.createElement("div");
    item_content.classList.add("content");
    item.appendChild(item_content);
   // the input tag with type text and attribute readoly
    const input_item=document.createElement("input");
    input_item.classList.add("text");
    input_item.type="text";
    input_item.value=item_value;
    input_item.setAttribute("readonly","readonly");
    
    //input tag for the date 
    const date_input =document.createElement("input");
         date_input.classList.add("date");
         date_input.type="date";
         date_input.value=date_value;
   
    // I want the text to be canceal when double clicked
    input_item.addEventListener("dblclick", function(){
        input_item.style.textDecoration="line-through";
    })
    item_content.appendChild(input_item);
    item_content.appendChild(date_input)
    
    //we need to create the actions button 
    const action_button=document.createElement("div");
    action_button.classList.add("actions");
    

    const edit_button=document.createElement("button");
          edit_button.classList.add("edit","btn","btn-success" ,"btn-lg");
          edit_button.type="button";
          edit_button.innerText="Edit"
      
          const delete_button=document.createElement("button");
          delete_button.classList.add("edit","btn","btn-danger","btn-lg","fa","fa-trash");
          delete_button.type="button";
          delete_button.innerText="Delete"
      
          // since delete_button and edit button are children of action button we must append them
          action_button.appendChild(edit_button);
          action_button.appendChild(delete_button);
    
         // action_button is a child of the item div
         item.appendChild(action_button);
    //the div tag with a class name item is a child of the main container called todoContainer
    todoContainer.appendChild(item);
    
    // remove the item from the input field after adding the list 
    input.value="";
    date.value="";

    // funtion for the edit item
    edit_button.addEventListener('click', (e)=>{
        if(edit_button.innerText.toLowerCase() =="edit"){
            edit_button.innerText="save";
            input_item.removeAttribute("readonly");
            input_item.focus();
        }else{
            edit_button.innerText="Edit";
            input_item.setAttribute("readonly","readonly");

        }
    })

    //delete button function
    delete_button.addEventListener('click',(e)=>{
        todoContainer.removeChild(item);
    })


   
        
}