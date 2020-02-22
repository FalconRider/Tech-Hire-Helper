


function chooseAPicture(){

	var myPictures = [
	"Images/c1.png",
	"Images/c2.png",
	"Images/c3.png",
	"Images/c4.png",
	"Images/c5.png",
	"Images/c6.png",
	"Images/c7.png",
	"Images/c8.png",
	"Images/c9.png",
	"Images/c10.png",
	"Images/c11.png",
	"Images/c12.png"
	];


var randomNum = Math.floor((Math.random()*myPictures.length));

	document.getElementById("pic").src = myPictures[randomNum];
}
	
//document.getElementById("winner").src = randomNum;

function showAll(){

	var myPictures = [
	"Images/c1.png",
	"Images/c2.png",
	"Images/c3.png",
	"Images/c4.png",
	"Images/c5.png",
	"Images/c6.png",
	"Images/c7.png",
	"Images/c8.png",
	"Images/c9.png",
	"Images/c10.png",
	"Images/c11.png",
	"Images/c12.png"
	];

 //for i i< myPictures.length, i++



//	document.getElementById("pic").src = myPictures[randomNum];
	

}



