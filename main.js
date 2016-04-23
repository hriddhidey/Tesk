function fontBold(){
	var para = document.getElementById('content')
	var selection = window.getSelection().toString()
	var spn = ''
	var range  = window.getSelection().getRangeAt(0)
	var end = range.endContainer


	//console.log(range.commonAncestorContainer)
	//console.log(range)
	range.deleteContents();
    var node  = range.createContextualFragment('<b>' + selection + '</b>');
    range.insertNode(node)
}


function fontItalics(){
	var para = document.getElementById('content')
	var selection = window.getSelection().toString()
	var spn = ''
	var range  = window.getSelection().getRangeAt(0)
	var end = range.endContainer
	

	//console.log(range.commonAncestorContainer)
	//console.log(range)
	range.deleteContents();
    var node  = range.createContextualFragment('<i>' + selection + '</i>');
    range.insertNode(node)
}


function fontUnderline(){
	var para = document.getElementById('content')
	var selection = window.getSelection().toString()
	var spn = ''
	var range  = window.getSelection().getRangeAt(0)
	var end = range.endContainer
	

	//console.log(range.commonAncestorContainer)
	//console.log(range)
	range.deleteContents();
    var node  = range.createContextualFragment('<u>' + selection + '</u>');
    range.insertNode(node)
}