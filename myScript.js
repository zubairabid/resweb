var cp = 1;
var c4 = 0;
var str = " ";

function changeProfile() {
	cp = cp + 1;
	if(cp > 3) {
		cp = 1;
	}
	str = "images/profile"+cp+".jpg";
	document.getElementById("prof").src = str;
}

function changeBG4() {
	c4 =c4+1;
	if(c4%2 === 1) {
		document.getElementById("thanks").style.backgroundImage = "url('images/ty_back.jpg')";
	}
	else {
		document.getElementById("thanks").style.backgroundImage = "url('images/backgif4.gif')";
	}
}	

function sayhi() {
	alert("Hello to you too!")
}


var bhi = document.getElementById('hi');/*
bhi.onclick = alert("Hello to you too!");*/

var bty = document.getElementById('ty');
