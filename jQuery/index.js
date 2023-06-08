$("h1").css("color", "red") ; 

// add a css class to an element
$("h1").addClass("biggg") ;

// remove
$("h1").removeClass("biggg") ; 

// add multiple classes
$("h1").addClass("biggg marginadd") ; 

// returns boolean True/False
$("h1").hasClass("biggg") ;  

$("h1").text("Shreekar is huge") ;
// modifies text in all buttons
$("button").text("bigg buttons") ;  

// same as innerHTML
$("h1").html("<i>Shreekar</i>") ; 


console.log($("a").attr("href")) ;

$("a").attr("href", "https://www.opera.com") ;

// adding event listeners using jQuery

// aim-> when i click on h1's text it's color should become purple
$("h1").click(function() {
    $("h1").css("color", "purple");
}) ; 

// when i click on any button, h1's text color should turn green
$("button").click(function() {
    $("h1").css("color", "green");
}) ; 

// log any key pressed in the website
$(document).keypress(function(event) {
    console.log(event.key) ; 
}) ; 

// replace h1's text with whatever is pressed on keyboard
$(document).keypress(function(event) {
    $("h1").text(event.key)
}) ; 

// better way to use event listeners, similar to vanillaJS syntax
$("h1").on("mouseover" ,function() {
    $("h1").css("font-size", "12rem")
}) ; 

// adds elements enclosed in "" before the html element selected, here h1
$("h1").before("<button>hi</button>")
// adds elements enclosed in "" after the html element selected, here h1
$("h1").after("<button>hi</button>")
// adds elements enclosed in "" just left of the the html element selected, but inside the html element, here h1
$("h1").prepend("<button>hi</button>")
// adds elements enclosed in "" just right of the the html element selected, but inside the html element, here h1
$("h1").append("<button>hi</button>")
