function setUpEvents(){
        //Grab the Elements
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");

    //Create an onclick Event
    button.onclick = function(){
        if(content.className == "open"){
            //shrink the box
            content.className = "";
            button.innerHTML = "Show More";

        }

        else{
            //expand the box
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    };

   
}

window.onload = function(){
    setUpEvents();
};