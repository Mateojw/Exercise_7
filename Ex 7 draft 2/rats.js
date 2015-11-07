
//this is heavaly refrenced from https://www.youtube.com/watch?v=118sDpLOClw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r p5.js tutorial - 8.3 What is JSON (JavaScript Object Notation)? (Part 2) with Daniel Shiffman i am using this as a basis to get information to later visualise the data.
 var data;
function preload(){
	data = loadJSON(birds.json);// loads in json file birds 
}

function setup() {
    noCanvas();//no canvas 
	
	var birds = data.birds;// the first part of the json file showing all the main catagories of the birds an array of brids 
	
	for (var i = 0; i < birds.length; i++) {//running through each major group of birds // the birds
		createElement('h1', birds[i].family);//show each major group of birds 
		var members = birds[i].members; //sets each member to var members
		for (var f = 0; f < members.length; f++) {//running through the length of the sub groups//the members  
			createDiv(members[i]);//show the sub groups of birds underneath
		}
	}
}