var r1 = Math.floor(Math.random()*6) + 1 ; 
var r2 = Math.floor(Math.random()*6) + 1 ;

var f1 = "dice" + r1 + ".png" ; 
var f2 = "dice" + r2 + ".png" ; 

if (r1 > r2){
    document.querySelector("h1").innerHTML = "🏳️‍🌈 Player 1 Wins !" ;
}
else if (r2 > r1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏳️‍🌈!" ;
}
else{
    // draw
    document.querySelector("h1").innerHTML = "🏳️‍🌈Draw!🏳️‍🌈" ;
}

document.querySelector(".img1").setAttribute("src", "images/" + f1) ; 
document.querySelector(".img2").setAttribute("src", "images/" + f2) ;
