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
  document.getElementById("translated").innerHTML+=data;
}


 html file
<html>
<head>
   <title></title>
</head>
<body>

<input type="file" id="openFile"/>
<br>
<pre id="fileContents"></pre>
<script type="text/javascript" src="app.js"></script>
</body>
</html>

js file

document.getElementById("openFile").addEventListener('change',function(){
	var fr=new FileReader();
	fr.onload=function(){
		document.getElementById("fileContents").textContent=this.result;
	}
	fr.readAsText(this.files[0]);
})





