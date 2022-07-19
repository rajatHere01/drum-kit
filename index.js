for(var i=0; i< document.querySelectorAll("button").length ;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var clicked = this.innerHTML;  
        makesound(clicked);
        animation(clicked);         
    });
    
}
   document.addEventListener("keydown", function(event){
    makesound(event.key);
    animation(event.key);
   });
// function run(){
    // }
    
    function makesound(clicked){

    switch (clicked) {
        case "w":
            var tom1_file=new Audio("sounds/tom-1.mp3");
            tom1_file.play();
            break;
        case "a":
            var tom2_file=new Audio("sounds/tom-2.mp3");
            tom2_file.play();
            break;
        case "s":
            var tom3_file=new Audio("sounds/tom-3.mp3");
            tom3_file.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kiss=new Audio("sounds/kick-bass.mp3");
            kiss.play();
            break;
    
        default:
            break;
    }
}

function animation(key){
        document.querySelector("."+key).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("."+key).classList.remove("pressed");
        }, 200);
}
