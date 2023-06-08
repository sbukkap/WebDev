// function clickHandler(){
//     alert("Clicked me :)");
// }

// var arr = ["w","a","s","d","j","k","l"];

// for(var i = 0; i<arr.length; i++){
//     document.querySelector("."+arr[i]).addEventListener("click", clickHandler);
// }


// var arr = ["w","a","s","d","j","k","l"];

// for(var i = 0; i<arr.length; i++){
//     document.querySelector("."+arr[i]).addEventListener("click", function (){
//         alert("Clicked me :)");
//     });
// }

function soundMapping(keyOrWord){

    switch (keyOrWord) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        default:
            alert("not a valid binding!");
        break;

    }

}

function clickHandler(){
    var buttonInnerHTML = this.innerHTML ; 
    soundMapping(buttonInnerHTML);
    pressedAnimation(buttonInnerHTML) ; 
}

function keyPressHandler(event){
    // document.querySelector("."+event.key).style.color = "white" ; 
    soundMapping(event.key);
    pressedAnimation(event.key) ; 
}

function pressedAnimation(wordRecorded) {
    document.querySelector("." + wordRecorded).classList.add("pressed") ;
    setTimeout(function(){
        document.querySelector("." + wordRecorded).classList.remove("pressed") ;
    }, 150) ; 
}

var len = document.querySelectorAll("button").length ; 
for(var i = 0; i<len; i++){
    document.querySelectorAll("button")[i].addEventListener("click", clickHandler);
}

document.addEventListener("keypress", keyPressHandler);
