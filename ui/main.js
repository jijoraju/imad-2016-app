//counter endpoint

var button = document.getElementById('click');
var counter=0;

button.onclick = function(){
    
    
    
    counter=counter+1;
    var count=document.getElemetById('count');
    count.innerHTML= counter.toString();
};