var numSquare=6;
var pickedColor;
var color = [];

var square = document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".modes");

init();

function init()
{
	setUpmode();

	setUpsquare();

    reset();
}

function setUpmode()
{
	for(var i=0;i<modebuttons.length;i++)
	  {
		modebuttons[i].addEventListener("click",function(){
			modebuttons[0].classList.remove("selected");
			modebuttons[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent==="Easy"){
				numSquare=3;
			}else{
				numSquare=6;
			}

			reset();
		});
	  }
}

function setUpsquare()
{
	 for(var i=0;i<square.length;i++)
	 {
		square[i].addEventListener("click",function(){
		 var clickedColor = this.style.backgroundColor;

		 if(clickedColor===pickedColor)
		 {
		 	messageDisplay.textContent="Hell,Yah!";
		 	changeColor(clickedColor);
		 	h1.style.backgroundColor=clickedColor;
		 	resetButton.textContent="Play Again?";
		 }
		 else
		 {
		 	this.style.backgroundColor="#232323";
		 	messageDisplay.textContent="Sorry,Try Again!";

		 }

	  });
	 }
}


function reset()
{
	color = generateColor(numSquare);

	//pick a color to match
	pickedColor=pickColor();

	//display the picked color
	colorDisplay.textContent=pickedColor;

	//display the colors in the squares
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = color[i];

		if(color[i])
		{
			square[i].style.display="block";
			square[i].style.backgroundColor=color[i];
			colorDisplay.textContent=pickedColor;

		}
		else
		{
			square[i].style.display="none";
		}
	}

	//reset the h1 background to previous value
	h1.style.backgroundColor="steelblue";

	//reset the the text to New color
	resetButton.textContent="New Colors";

	//change message
	messageDisplay.textContent="";
}

resetButton.addEventListener("click",function(){
	reset();
})



function changeColor(colors)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=colors;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*color.length);
	return color[random];
}

function generateColor(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb("+ r +", "+ g +", "+ b +")";
	
}
