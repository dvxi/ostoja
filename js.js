var pytania = [];
var odpowiedzi = [];
var lb = 0;
var index = 0;
var pkt = 0;
var activeTab = "TutorialPage";
var hideThis;

$(document).ready (function(){
	$("#correct").hide();
	$("#wrong").hide();
});

function next(){
	pytania[lb] = document.getElementById("pytanie").value;
	odpowiedzi[lb] = document.getElementById("odpowiedz").value;
	document.getElementById("pytanie").value = "";
	document.getElementById("odpowiedz").value = "";
	document.getElementById("NaglowekQuestion").innerHTML = "Question " + (lb+2) + ".";
	lb += 1;
}

function dismiss(){
	document.getElementById("pytanie").value = "";
	document.getElementById("odpowiedz").value = "";
	pytania = [];
	odpowiedzi = [];
	document.getElementById("pytanieSelfCheck").value = "";
	document.getElementById("odpowiedz").value = "";
	document.getElementById("NaglowekQuestion").innerHTML = "Question 1";
	lb = 0;
	index = 0;
}

function start(){
		/*document.getElementById("CreatePage").style.display = "none";
		document.getElementById("SelfCheckPage").style.display = "block";

		document.getElementById("CreateNav").className = "nav-item";
		document.getElementById("SelfCheckNav").className = "nav-item active";*/

		show('SelfCheckPage');

		if(pytania.length >= 2){
			var x,j;
			for (var i = pytania.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i - 1));
				x = pytania[i];
				pytania[i] = pytania[j];
				pytania[j] = x;
			}
		}

		for (var i = 0; i < pytania.length; i++) {
			console.log(i + " | " + pytania[i]);
		}

		document.getElementById("pytanieSelfCheck").value = pytania[index];
		document.getElementById("odpowiedz").value = "";
		document.getElementById("NaglowekQuestionSC").innerHTML = "Question " + (index + 1) + "/" + (pytania.length);

	return false;
}

function show(showThis){

		hideThis = activeTab;

		document.getElementById(activeTab).style.display = "none";
		document.getElementById(showThis).style.display = "block";

		activeTab = showThis;

		hideThis = hideThis.substring(0, hideThis.length - 4) + "Nav";
		showThis = showThis.substring(0, showThis.length - 4) + "Nav";

		console.log(hideThis);
		console.log(showThis);

		document.getElementById(hideThis).className = "nav-item";
		document.getElementById(showThis).className = "nav-item active";
	return false;
}

function checkQuestion(){
	/*if(document.getElementById("odpowiedzSelfCheck").value == odpowiedzi[index]){
		pkt += 1;
		$("#success").alert();
		$("#success").delay(2000).slideUp(200, function(){
			$(this).alert('close');
		});
		//document.getElementById("wynik").innerHTML = pkt;
	}*/

		if(index < pytania.length - 1){
			index++;
		} else {
			console.log("KONIEC");	//PRZENIES DO WYNIKÓW
			show('SummaryPage');
		}

		document.getElementById("NaglowekQuestionSC").innerHTML = "Question " + (index + 1) + "/" + (pytania.length);
		document.getElementById("pytanieSelfCheck").value = pytania[index];
		document.getElementById("odpowiedzSelfCheck").value = "";
	return false;
}