console.log('Loaded!');

//change the text of the  div element
var element = document.getElementById('main-text');
element.innerHTML="Content has been updated using javascript";

//animate the image
var img = document.getElementById('jijo-pic');
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};