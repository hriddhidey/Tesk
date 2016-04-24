var data="";

function startDictation() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();


    
    recognition.continuous = false;
    recognition.interimResults = false;
    
    
    recognition.lang = "en-US";
    recognition.start();
    
    recognition.onresult = function(e) {

       //console.log('Hello.');
      
      //document.getElementById('translatedText').innerHTML = e.results[0][0].transcript;
      data = e.results[0][0].transcript;
      recognition.stop(); 
      writeTranslated()
      
      //document.getElementById('labnol').submit();
    }
    
    recognition.onerror = function(e) {
      recognition.stop();
      
    }
  }
}

function writeTranslated() {
	
	var check = "new para";
	var n = data.localeCompare(check);
	if(!n){
		data = "<br />";
	}
	else {
		data = data.charAt(0).toUpperCase()+data.slice(1);
		data = data.concat(". ");
		document.getElementById("translated").innerHTML+=data;
	}
	
}