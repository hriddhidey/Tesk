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
	console.log(data);
	var a = data.charAt(0);
	a.toUpperCase();
	console.log(a);
	//data.charAt(0).toUpperCase();
	console.log(data);
	data.concat(". ");
	console.log(data);
	document.getElementById("translated").innerHTML+=data;
	console.log(data);
}