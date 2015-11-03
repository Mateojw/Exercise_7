

//I used http://p5js.org/reference/#/p5/loadJSON to help loading the json file i am still having trouble getting it working but i thought i would just push it to git hub for now 

var weather;

function preload(){
	//loades JSON page
	var url = "api.openweathermap.org/data/2.5/weather?zip=12561,us"+
	    '&APPID=7bbbb47522848e8b9c26ba35c226c734';
	weather = LoadJSON(url);
	
}

function setup(){
	createCanvas(500,500);
	
	
}

function draw(){
	background(255);
	
	var max = weather.main.temp_max//stroes max temp to max
	var min = weather.main.temp_min//stores min temp to min 
	
	high = map(max, 0, 110, 100, 400);//maps to a region of the screen: upper part 
	low = map(min, 0, 110, 100, 400);// maps to a region of the screen:lower part
	
	rect(height/2, width/2, 20, high) //draws a bar showing the range of the min and max temprature (not finished just concept placement for now)
	rect(height/2, width/2, 20, low)
}



