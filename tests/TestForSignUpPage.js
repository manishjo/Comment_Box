var page = require('webpage').create();

var getTextboxField = function(){
	var fields = [];
	var tags = document.getElementsByTagName('input');
	for(var i=0;i<tags.length;i++){
		fields.push(tags[i].name);
	} 
	return fields;
}

var getFields=function(){
	var result = page.evaluate(getTextboxField);
	console.log(result.length,result);
	phantom.exit();
}
page.open('http://localhost:8080/signUp.html',getFields);