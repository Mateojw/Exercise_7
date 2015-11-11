
//this is heavaly refrenced from https://www.youtube.com/watch?v=118sDpLOClw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r p5.js tutorial - 8.3 What is JSON (JavaScript Object Notation)? (Part 2) with Daniel Shiffman i am using this as a basis to get information to later visualise the data.
/* var data;
function preload(){
	data = loadJSON(birds.json);// loads in json file birds 
}

function setup() {
    noCanvas();//no canvas 
	
	var birds = data.birds;// the first part of the json file showing all the main catagories of the birds an array of brids 
	
	for (var i = 0; i < birds.length; i++) {
		//textSize(birds.length);
                  //text(birds[i], 10, 30);
		
		//running through each major group of birds // the birds
		createElement('h1', birds[i].family);//show each major group of birds 
//ellipse( Height/2, Width/2, birds.length,birds.length);
		
		var members = birds[i].members; //sets each member to var members
		for (var f = 0; f < members.length; f++) {
			//textSize(32);
                      // text(members[j], 10, 30);
		
			//running through the length of the sub groups//the members  
	//ellipse(height/2 width/2, members.length, memebrs.length);
			//createDiv(members[i]);//show the sub groups of birds underneath
		}
	}
}
*/

//this is refrenced from  https://www.youtube.com/watch?v=6mT3r8Qn1VY by Daniel Shiffman p5.js tutorial - 8.4 Loading JSON data from a URL (asynchronous callbacks! i also used http://api.open-notify.org/astros.json which is a json file of people in space :)

//this code atemts to show how many people are in space and the information of those people.

// this was 

var spaceData;

function setup(){
  createCanvas(200, 200);
	//Img = loadImage("data/200_s.gif");
	//randomW = random(width);//position of space people
	//randomH = random(height);
   loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');//load people in space json html 
	
}
function gotData(data) {
	spaceData = data;
	
	function draw() {
		background(0);
		//image(img, 0, 0);
		if(spaceData) {//need time to relay data from html so you cheack if it is true or false (if the datahas arrived)
			randomSeed(4);// heeps the random numbers constant (no crazy  circles flying all over the place
			for(var i = 0; i < spaceData.number; i++){
				fill(255);
				ellipse(random(width), random(height), 16, 16);//draw spacemen
				
				//for ( var j = 0; j < spaceData.people.length; j++){
					
				//info = 	spaceData.people[j];
				
					//textSize(20);
					//text(info, randomW+10, randomH);//text is next to ellipse of spacemen//
					
					
					
				}
					
					
				
				
			
			
			
		
		}
	}
}


