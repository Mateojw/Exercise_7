
var data;
function preLoad() {
data = loadJSON("data/birds.json");
}

function setup() {
	noCanvas();
	for (var i = 0; i<birds.length; i++){
		createElement('h1', birds[i].Family);
		var members = birds[i].members;
		for (var j = 0; j < members.length; j++){
			createDiv(members[j]);
		}
	}
	
}
	