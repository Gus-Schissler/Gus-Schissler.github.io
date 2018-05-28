/*background svg initialization*/
var background = Snap("#backgroundGradient");
Snap.load("assets/background.svg", function(f) {
	background.append(f);
});

/* begin canvas section */
var canvas = Snap("#canvas");
canvas.attr( {
	viewBox: "-960, -540, 1920, 1080"
});

for (var i = 0; i < 4; i++) {
	var yearInt = 2014 + i;
	boundaryCircle = canvas.circle(0, 0, 512 - (128 * i)).addClass("boundary");
	boundaryText = canvas.text(512 - (128 * i), 5, yearInt).addClass("boundary-text");
	canvas.g(boundaryCircle, boundaryText).attr({id: "boundary" + i });
};


// core button
var button = canvas.circle(0, 0, 10).attr({fill: "white", opacity: ".75"});

button.hover(
	function() {
		button.animate({
			opacity: "1",
			r: "15"
	}, 500, mina.elastic);
	}, function() {
		button.animate({
			opacity: ".75",
			r: "10"
		}, 500, mina.elastic);
	});

var masterToggle = false;

button.mousedown(expand);
// button.mouseup(fromBlack);

function expand() {
	if (masterToggle) {
	this.animate({"transform": "s 1 1"}, 1000, mina.elastic);
	} else {
	this.animate({"transform": "s 2 2"}, 1000, mina.elastic);
	drawPortfolio();
	};
	masterToggle = !masterToggle;
};

var projects = new Array(10);

function drawPortfolio() {
	for (var i = projects.length - 1; i >= 0; i--) {
		var randomCircle = canvas.circle(0, 0, 10).attr({fill: "white", opacity: ".75"});
	}
};

var timeline = canvas.selectAll(".boundary-text");

