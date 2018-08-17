let rock, paper, scissor;

var pChoice = 0;
var cChoice = 0;

function preload() {
	rock = createImg('https://www.wallingtons.com.au/wp-content/uploads/2014/11/Granite-Rocks.jpg');
  	rock.hide();
	paper = createImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbCRf3iMtwZyurgb4MSdSLIyzqEg5cXK9VKmt8suB56I8tG9cO');
	paper.hide();
	scissor = createImg('https://cdn3.volusion.com/4jdsg.2wu4y/v/vspfiles/photos/586085P-2.jpg?1491919961');
	scissor.hide();
}

var Yourscore = 0;
var Computerscore = 0;

var ProckCard = {
	x :	1150,
	y :	450
};

var PscissorCard = {
	x :	950,
	y :	450
};

var PpaperCard = {
	x :	750,
	y :	450
};

var CrockCard = {
	x :	1150,
	y :	10
};

var CscissorCard = {
	x :	950,
	y :	10
};

var CpaperCard = {
	x :	750,
	y :	10
};

function setup() {
	createCanvas(1350, 650);
}

function draw() {

	background(0);

	fill(250, 0, 0);
	textSize(30);
	text('Your score is : ' + Yourscore, 0, 600, 350, 600);
	text('Computer score is : ' + Computerscore, 0, 30, 350, 30);
	text('Paper', 750, 600, 800, 600);
	text('Scissor', 950, 600, 1000, 600);
	text('Rock', 1150, 600, 1200, 600);
	text('Click on Your Card -------', 400, 500, 600, 500);

	//Player's Cards
	fill(200, 150, 200);
	rect(ProckCard.x , ProckCard.y, 100, 150);
	rect(PscissorCard.x , PscissorCard.y, 100, 150);
	rect(PpaperCard.x , PpaperCard.y, 100, 150);
	showCards();

	//Computer's Cards
	rect(CrockCard.x , CrockCard.y, 100, 150);
	rect(CscissorCard.x , CscissorCard.y, 100, 150);
	rect(CpaperCard.x , CpaperCard.y, 100, 150);

	if (cChoice != 0 && pChoice != 0) {
		start();
	}
	pChoice = 0;
	cChoice = 0;
}

function start() {
	while (true) {
		clear();
		background(0);
		frameRate(0.5);

		fill(255, 0, 0);
		textSize(50);
		text('Showdown ', 500, 50, 1350, 100);
		textSize(30);
		text('Your Choice :  ', 200, 200, 400, 200);
		textSize(30);
		text('Computer Choice :  ', 800, 200, 1200, 200);

		switch (pChoice) {
			case 1:	image(rock, 200, 400, 100, 150);
					break;
			case 2: image(paper, 200, 400, 100, 150);
					break;
			case 3:	image(scissor, 200, 400, 100, 150);
					break;
		}

		switch (cChoice) {
			case 1:	image(rock, 800, 400, 100, 150);
					break;
			case 2: image(paper, 800, 400, 100, 150);
					break;
			case 3:	image(scissor, 800, 400, 100, 150);
					break;
		}

		textSize(30);
		if (pChoice == cChoice) {
			text('DRAW ', 400, 500, 600, 500);
		}
		else
		if (pChoice == 1) {
			if (cChoice == 2) {
				text('COMPUTER WINS ', 400, 500, 600, 500);
				Computerscore += 10;
			}
			else
			if (cChoice == 3) {
				text('YOU WIN ', 400, 500, 600, 500);
				Yourscore += 10;
			}
		}
		else
		if (pChoice == 2) {
			if (cChoice == 1) {
				text('YOU WIN ', 400, 500, 600, 500);
				Yourscore += 10;
			}
			else
			if (cChoice == 3) {
				text('COMPUTER WINS ', 400, 500, 600, 500);
				Computerscore += 10;
			}
		}
		else
		if (pChoice == 3) {
			if (cChoice == 1) {
				text('COMPUTER WINS ', 400, 500, 600, 500);
				Computerscore += 10;
			}
			else
			if (cChoice == 2) {
				text('YOU WIN ', 400, 500, 600, 500);
				Yourscore += 10;
			}
		}

		break;
	}
}

function mouseClicked() {
	// 1 - rock, 2 - paper, 3 - scissor
	if (mouseX > ProckCard.x && mouseX < ProckCard.x + 100) {
		if (mouseY > ProckCard.y && mouseY < ProckCard.y + 150) {
			pChoice = 1;
		}
	}

	if (mouseX > PpaperCard.x && mouseX < PpaperCard.x + 100) {
		if (mouseY > PpaperCard.y && mouseY < PpaperCard.y + 150) {
			pChoice = 2;
		}
	}

	if (mouseX > PscissorCard.x && mouseX < PscissorCard.x + 100) {
		if (mouseY > PscissorCard.y && mouseY < PscissorCard.y + 150) {
			pChoice = 3;
		}
	}

	cChoice = random(1,4);

	if (cChoice >= 1 && cChoice < 2) {
		cChoice = 2;
	}
	else
	if (cChoice >= 2 && cChoice < 3) {
		cChoice = 2;
	}
	else
	if (cChoice >= 3 && cChoice < 4) {
		cChoice = 3;
	}
}

function showCards() {
	image(scissor, PscissorCard.x, PscissorCard.y, 100, 150);
	image(rock, ProckCard.x, ProckCard.y, 100, 150);
	image(paper, PpaperCard.x, PpaperCard.y, 100, 150);
}
