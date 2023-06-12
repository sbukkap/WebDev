var gamePattern = [] ;
var userClickedPattern = [] ; 

function nextSequence() {
    var rN = Math.floor(Math.random()*3) ; 
    var buttonColors = ["red" , "blue" , "green" , "yellow"] ;
    var randomChosenColor = buttonColors[rN] ; 
    gamePattern.push(randomChosenColor) ; 
    return randomChosenColor ; 
}

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
    if (equalityChecker()===false){
        gameLost();
        playGame = false ; 
        // $(document).on("keypress", keypressHandler) ;
    }
    else{
        level++; 
    }  
    buttonFlash(userChosenColor) ; 
    buttonSound(userChosenColor) ; 
}

// #################################
function equalityChecker() {
    if (userClickedPattern[userClickedPattern.length - 1] !== gamePattern[userClickedPattern.length - 1]){
        return false;
    }
    return true ; 
}
// #################################

function keypressHandler() {
    // update : re-add while here????
    var playGame = true ; 
    var level = 1 ;
    $("h1").fadeOut(100).text("Level "+level).fadeIn(100) ; 
    var rcc = nextSequence() ; 
    buttonSound(rcc) ; 
    buttonFlash(rcc) ; 
    $(".btn").on("click", clickHandler) ; 
}

function gameLost() {
    var wrong = new Audio("sounds/wrong.mp3") ;
    wrong.play() ; 
    $("h1").fadeOut(100).text("Wrong Button, Press any key to try again").fadeIn(100) ; 
    userClickedPattern = [] ; 
    gamePattern = [] ;    
}

$(document).on("keypress", keypressHandler) ; 
