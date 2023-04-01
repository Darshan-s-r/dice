var random1 = Math.floor(Math.random() * 6 ) + 1; //random number 1 - 6
var randomName1 = "dice" + random1 + ".png"; //dice1.png - dice6.png
var randomImageSource1 = "images/" + randomName1 ; //  images/dice1.png - images/dice6.png
var randomImage1 = document.querySelector(".img1");
randomImage1.setAttribute("src", randomImageSource1);


var random2 = Math.floor(Math.random() * 6 ) + 1;
var randomName2 = "dice" + random2 + ".png"; 
var randomImageSource2 = "images/" + randomName2 ;
var randomImage2 = document.querySelector(".img2");
randomImage2.setAttribute("src", randomImageSource2);


var heading = document.querySelector("h1");
if ( random1 > random2 )
{
    heading.textContent="🥁player 1 wins";
}else if ( random1 < random2 ) {
    heading.textContent="player 2 wins🥁";
}else {
    heading.textContent="draw";
}