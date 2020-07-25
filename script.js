window.onload = function() {
    
    drawBoxes("blue");
    drawBoxes("yellow");
    drawBoxes("red");

}


function drawBoxes(color) {
    var html =`<div class="${color}-box"></div>`
    var body = document.getElementById("box");
    body.innerHTML += html;
    
}