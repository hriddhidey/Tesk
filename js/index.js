var data="";
var voiceOn = false;
var editor = new MediumEditor('.editable');
var voiceButton  = document.querySelector("#mic");

function voiceClicked() {
	if (voiceOn == false) {
		voiceOn = true;
		voiceButton.innerHTML = "MIC ON";
		startDictation();
	}
	else {
		voiceButton.innerHTML = "MIC OFF";
		voiceOn = false;
	}
}

function startDictation() {

	var recognition = new (
		window.SpeechRecognition || 
		window.webkitSpeechRecognition || 
		window.mozSpeechRecognition || 
		window.msSpeechRecognition)()

    recognition.interimResults = false
	recognition.lang = "en-US"
	recognition.maxAlternatives = 1
	recognition.start()
	
	recognition.onresult = e => {
		data = e.results[0][0].transcript;
		recognition.stop()
		writeTranslated()
	}

	recognition.onend = e => {
		data = ""
		if (voiceOn) recognition.start()
	}
	
	recognition.onerror = function(e) {
		recognition.stop()
		break
	}
}

function writeTranslated() {
	
	var check = "new para";
	var n = data.localeCompare(check);
	if(n==0){
		data = "<br />";
	}
	else {
		data = data.charAt(0).toUpperCase()+data.slice(1);
		data = data.concat(". ");
		document.getElementById("mainContent").innerHTML+=data;
	}
	
}

function createDoc(){
	var buttons = document.querySelector("#buttons");
	var anchor = document.querySelector("#medium-editor-anchor-preview-1");
	var toolbar = document.querySelector("#medium-editor-toolbar-1");
	buttons.style.display = "none"
	toolbar.style.display = "none"
	anchor.style.display = "none"
	window.print()
	buttons.style.display = "block"
	anchor.style.display = "block"
	toolbar.style.display = "block"
}
