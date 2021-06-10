
song1 = "";
song2 = "";


function preload()
{
	song1 = loadSound("Avengers_one.mp3");
	song2 = loadSound("music.mp3");
}
function setup() {
	canvas =  createCanvas(300, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	}

function draw()
{
    image(video, 0, 0, 300, 400);
}
