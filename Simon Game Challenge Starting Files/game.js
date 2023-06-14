var gamePattern = [] ;
var userClickedPattern = [] ; 

function nextSequence() {
    var rN = Math.floor(Math.random()*4) ; 
    var buttonColors = ["red" , "blue" , "green" , "yellow"] ;
    var randomChosenColor = buttonColors[rN] ; 
    gamePattern.push(randomChosenColor) ; 
    return randomChosenColor ; 
}

function buttonFlash(chosenButton) {
    // $("."+chosenButton).delay(200);
    $("."+chosenButton).fadeOut(100).fadeIn(100) ; 
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

function equalityChecker() {
    if (userClickedPattern.length > gamePattern.length || userClickedPattern[userClickedPattern.length - 1] !== gamePattern[userClickedPattern.length - 1]){
        console.log(userClickedPattern);
        console.log(gamePattern);
        return false;
    }
    return true ; 
}

function keypressHandler() {
    
    // $("h1").fadeOut(100).text("Level "+level).fadeIn(100) ;
    var rcc = nextSequence() ; 
    buttonSound(rcc) ; 
    buttonFlash(rcc) ;
    $(".btn").on("click", function clickHandler(){
        var userChosenColor = $(this).attr("id") ;
        userClickedPattern.push(userChosenColor) ;
        buttonFlash(userChosenColor) ; 
        buttonSound(userChosenColor) ;
        if (equalityChecker()===false){
            levelFailed();
        }
        else if(userClickedPattern.length === gamePattern.length){
            $("h1").fadeOut(100).text("Level Passed").fadeIn(100) ;
            userClickedPattern = [];
            rcc = nextSequence() ; 
            buttonSound(rcc) ; 
            buttonFlash(rcc) ;
            // levelPassed();
        }   
    }) ;    
}

function levelPassed(){
    userClickedPattern = [];
    $("h1").fadeOut(100).text("Level Passed").fadeIn(100) ;
    keypressHandler();

}

function levelFailed() {
    var wrong = new Audio("sounds/wrong.mp3") ;
    wrong.play() ; 
    $("h1").fadeOut(100).text("Wrong Button, Press any key to try again").fadeIn(100) ; 
    userClickedPattern = [] ; 
    gamePattern = [] ;    
}

$(document).on("keypress", keypressHandler) ; 
