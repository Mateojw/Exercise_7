/*i am refrencing all of these sites 
 https://github.com/dariusk/corpora/blob/master/data/animals/birds_antarctica.json<---the source for the JSON file https://www.youtube.com/watch?v=6mT3r8Qn1VY// <---Daniel Shifman video on parsing Json
*/ 
//i am hsowing the different overall spices of antartica birds as text and depending on how many birds are in that array the text and ellipse will change size while the ellipse changes from green = small amount of birds to red = large amount of birds. I also randomise where they are on the screen because i feel that its cool to look how they compare to eachother in different ways.
 
var data;
var x;

function preload() {
  data = loadJSON("birds.json");//load json file 
}

function setup() {
  createCanvas(3000, 3000);
	ellipseMode(CENTER);//center circle 
	textAlign(CENTER);//center of text
  
  var birds = data.birds;//seting birds to equal a part of the json known as birds 

  for (var i = 0; i < birds.length; i++) {//looking through all the bird types 
	  textSize(birds[i].members.length*20);//displaying teh text size realative to the amount of birds in this array 
	  x=random(height); //seting random varibles to use later
	  y= random(width);
	 fill(0);//black letters
   text(birds[i].family, x, y);//draw the text of the json file 
	  fill(birds[i].members.length*30, 200 ,0, 50);//the more birds there are the more the color shifts from green to red
ellipse(x,y,birds[i].members.length*100,birds[i].members.length*100);//draws the ellipse, the more birds the bigger the ellipse 
	  noFill();
	
	 // birds[i].family
   // var members = birds[i].members;
   // for (var j = 0; j < members.length; j++) {
     // createDiv(members[j]);
    }
  }

