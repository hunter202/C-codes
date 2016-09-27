//run js files in terminal -> node filename.js

//--> comment with this means doubt


/*var calculate=function(x){
	return x*3;
} //assigning variable as a function -feature of javascript

var recal=calculate;

alert(recal(30));*/

/*high order functions - function as a parameter to other function*/

//example of one such call back function is filter function

//eg...

var players=[
  {name:'swastik' , game:'cs'},
  {name:'mangla' , game:'dota'},
  {name:'ayush' , game:'nfs'},
  {name:'akshay' , game:'cs'} 
];

// to get all the players playing cs

/*var users = [];
for(var i=0;i<players.length;i++){
	if(players[i].game === 'cs')
	    users.push(players[i]);	
}*/

//now above using high order filter function
function ret(player){
	return player.game === 'cs';
}

var users = players.filter(function(player){
       return player.game === 'cs';
       });
//OR

/*
  breaking above code

  var users = players.filter(ret);
*/  

console.log(users[0]); // -->why does giving user only does not give complete dictionary


// so filter and call back functions are composible functions

//map function another higher order function - transforms into other array

//suppose need the list of all the players

var usersnew = players.map(function(player){
    return player.name;
});

console.log(usersnew);

/* in case of ECMAScript6*/

//fat arrow functions

/*var usersnew = players.map(function(player){
    return player.name;
});*/

//is equal to 

var usersnew = players.map((player)=>player.name + " is a " +player.game +" pro ")

console.log(usersnew); 

//so comparatively more shorter and anything after => implcitly returns(gg)

/* moving on to reduce - higher order function*/


