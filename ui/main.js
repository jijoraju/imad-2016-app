//counter endpoint

var button = document.getElementById('click');
var counter = 0;

button.onclick = function(){

    //create request object
    var request = new XMLHttpRequest();
    
    //get the response and store it
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            // action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML= counter.toString();
            }
            
        }
    };
    // make request
    
    request.open('GET', 'http://jijoraju.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
    
}; 


//capture names


var submits = document.getElementById('submit');
submits.onclick = function(){
  
    //create request object
    var request = new XMLHttpRequest();
    
    //get the response and store it
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            // action
            if(request.status === 200){
                var nam = request.responseText;
                nam = JSON.parse(nam);
                var list = '';
                for(var i=0; i<nam.length; i++){
                    list += '<li>' + nam[i] +'</li>';
                }
                var ul = document.getElementById('List');
                ul.innerHTML = list;
            }
            
        }
    };
    var names = document.getElementById('name').value;
    request.open('GET', 'http://jijoraju.imad.hasura-app.io/submit-names?name=' + names, true);
    request.send(null);
};
