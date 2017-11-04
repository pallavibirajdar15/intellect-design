var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');


app.listen(3000,function(){
console.log('listening to port');
});

function getUserDetails(userId){
	console.log(userId);
	
	var contents = fs.readFileSync("fileUser.json");
	if(contents){
		var todo = fs.readFileSync("todo.json");
	}else{
		console.log("No data");
	}
	var jsonContent = JSON.parse(contents);
	var todoContent = JSON.parse(todo);
	
 for(var i =0 ;i < jsonContent.length ;i ++){
	 for(var j= 0 ;j<todoContent.length ; j++){
		 if(userId == jsonContent[i].id && todoContent[j].userId == userId){
		 console.log("User Id:", jsonContent[i].id);
		 console.log("FirstName:", jsonContent[i].fName);
		 console.log("LastName:", jsonContent[i].lName); 
		 console.log("To Do Task:", todoContent[j].text);  
		 console.log("================================================================================================");  
	 }
	}	
 }
}


function getTodoDetails(todoId){
	console.log(todoId);
	
	var todo = fs.readFileSync("todo.json");
	var todoContent = JSON.parse(todo);
	
	if(todo){
		for(var j= 0 ;j<todoContent.length ; j++){
		 if(todoId == todoContent[j].id){
				 console.log("Id:", todoContent[j].id);
				 console.log("text:", todoContent[j].text);
				 console.log("done:", todoContent[j].done);
				 console.log("================================================================================================");  				 
			 }else{
				 console.log("No todo found");
			 } 
		}	
	}else{
		console.log("No data");
	}
}


function getActiveUsers(){
	var activeUsers = fs.readFileSync("fileUser.json");
	var activeUsersContent = JSON.parse(activeUsers);
	
	if(activeUsers){
		for(var j= 0 ;j <activeUsersContent.length ; j++){
		 if(activeUsersContent[j].isActive == true){
				 		 console.log("User Id:", activeUsersContent[j].id);
						 console.log("FirstName:", activeUsersContent[j].fName);
						 console.log("LastName:", activeUsersContent[j].lName); 
						 console.log("================================================================================================");  
			 }else{
				 console.log("No todo found");
			 } 
		}	
	}else{
		console.log("No data");
	}
}



getUserDetails(1);
getTodoDetails(2);
getActiveUsers();