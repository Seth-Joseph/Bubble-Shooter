function getMouseVector(){
	let mouseXalt = mouseX - turPosX;
	let mouseYalt = mouseY - turPosY;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	return mouseDir;
}
	
function drawReticle(){
	noFill();
	strokeWeight(1.5);
	ellipse(mouseX, mouseY, 20);
	line(mouseX-14, mouseY-14, mouseX+14, mouseY+14);
	line(mouseX+14, mouseY-14, mouseX-14, mouseY+14);
	line(turPosX, turPosY, mouseX, mouseY);
}

function gameOver(){
	push()
	
	noStroke();
	fill(20)
	rect(0,200,600,200)
	
	textFont('monospace');
	textAlign(CENTER);
	textSize(50);
	fill(170,20,20);
	text("Game Over",300,300)
		
	textFont('monospace');
	textSize(18);
	fill(235);
	let scoreString = "Score: " + score;
	text(scoreString, 300, 340);
	
		
	Retry.show();
	Retry.position(250, 380);
	Retry.size(100,30);
	Retry.style('background-color', '#202020');
	Retry.style('color', '#FFFFFF');
	Retry.mousePressed(reset);
	
	pop();
	noLoop();
	
}

function reset(){
	Retry.hide();
	bulletsFired = [];
	targetBalloons = [];
	turPosX = 300;
	turPosY = 300;
	targetTimer = 0;
	balloonSpawnMultiplier = 2;
	balloonSizeMultiplier = 2;
	score = 0;
	mode = 0;
	loop();
}