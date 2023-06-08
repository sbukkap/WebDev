function nextSequence() {
    var rN = Math.floor(Math.random()*3) ; 
    return rN ; 
}

var gamePattern = [] ; 
var buttonColors = ["red" , "blue" , "green" , "yellow"] ; 
var randomChosenColor = buttonColors[nextSequence()] ; 
var userClickedPattern = [] ; 

gamePattern.push(randomChosenColor) ; 

// add flash, sounds
function buttonFlash(chosenButton) {
    $("."+chosenButton).fadeOut(50).fadeIn(50) ; 
}

function buttonSound(chosenButton) {

    switch(chosenButton){
        case "green":
            var green = new Audio("sounds/green.mp3") ; 
            green.play() ;
        break ;

        case "red":
            var red = new Audio("sounds/red.mp3") ; 
            red.play() ;
        break ;

        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3") ; 
            yellow.play() ;
        break ; 

        case "blue":
            var blue = new Audio("sounds/blue.mp3") ; 
            blue.play() ;
        break ;  
    }
}

function clickHandler() {
    userChosenColor = $(this).attr("id") ;
    userClickedPattern.push(userChosenColor) ; 
    buttonFlash(userChosenColor) ; 
    buttonSound(userChosenColor) ; 
}

$(".btn").on("click", clickHandler)

