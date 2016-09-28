//counter endpoint

var button = document.getElementById('click');
var counter=0;

button.onclick = function(){
    
    
    
    counter=counter + 1;
    var span=document.getElemetById('count');
    span.innerHTML= counter.toString();
};