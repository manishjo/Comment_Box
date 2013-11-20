var page =require('webpage').create();

var getLinksOnLoginPage = function(){
	var fields = [];
	var tags = document.getElementsByTagName('a');
	for(var i=0;i<tags.length;i++){
		fields.push(tags[i].href);
	} 
	return fields;
}

var getLinks=function(){
	var result = page.evaluate(getLinksOnLoginPage);
	console.log(result.length,result);
	phantom.exit();
}
page.open("http://localhost:8080/Login.html",getLinks);