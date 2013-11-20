var page = require('webpage').create();

var _read_Subjects = function(){
console.log("hello running");
	
	var subjects = [];
	var tags = document.getElementsByTagName('a');
	for(var i=0;i<tags.length;i++){
		subjects.push(tags[i].innerHTML);
	}
	return subjects;
};

var getSubjectList = function(){

	var result = page.evaluate(_read_Subjects);
	console.log('\n');
    console.log(result.length,result);	
    phantom.exit();
};
page.open('http://localhost:8080/',getSubjectList);
