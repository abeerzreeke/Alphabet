function allowDrop(event) {
    event.preventDefault(); // Necessary. Allows us to drop.
}   
//add dashes
function allowEnter(event) {
    event.target.classList.add('over');
}
//remove dashes
function allowLeave(event) {
    event.target.classList.remove('over');
}
  
function dragStart(event) {

    event.dataTransfer.setData("text", event.target.id);
    var rect = event.target.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
}
  
function dragDrop(event) {
   
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    console.log("data: ",  data) 
    let box = document.getElementById(data)
    event.target.appendChild(box);
    check_box_results(box)
}

var user_result = []
function check_box_results(box) {   

    user_result.push(box.id)
    if(box.id == user_result.indexOf(box.id) ){
        excellent(box);
        return;
    }
    box_lose(box);
}

function excellent (box) {
    box.style.border = 'solid 3px green'
}

function box_lose(box){
    box.style.border = 'solid 3px red'
}

function reset() {
    location.reload();
  }