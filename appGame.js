var numSquare=6;
var color = generateColor(numSquare);

var square = document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var pickedColor=pickColor();
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquare=3;
	h1.style.backgroundColor="steelblue";
	color=generateColor(numSquare);
	pickedColor=pickColor();
	for(var i=0;i<square.length;i++)
	{
		if(color[i])
		{
			square[i].style.backgroundColor=color[i];
			colorDisplay.textContent=pickedColor;

		}
		else
		{
			square[i].style.display="none";
		}
	}
});

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSquare=6;
	h1.style.backgroundColor="steelblue";
	color=generateColor(numSquare);
	pickedColor=pickColor();
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=color[i];
		square[i].style.display="block";
		colorDisplay.textContent=pickedColor;
	}
});

resetButton.addEventListener("click",function(){
	//generate new colors
	color = generateColor(numSquare);

	//pick a color to match
	pickedColor=pickColor();

	//display the picked color
	colorDisplay.textContent=pickedColor;

	//display the colors in the squares
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = color[i];
	}

	//reset the h1 background to previous value
	h1.style.backgroundColor="steelblue";

	//reset the the text to New color
	resetButton.textContent="New Colors";

	//change message
	messageDisplay.textContent="";
})



colorDisplay.textContent=pickedColor;

for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor = color[i];
	

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
