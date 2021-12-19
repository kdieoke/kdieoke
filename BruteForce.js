let i;
let t;

//NORMAL VERSION
function initiateNumberHack(){
let password = document.getElementById("password").value;

//Time Warning
console.clear();
document.getElementById("error").innerHTML = "";
document.getElementById("progress").innerHTML = "";
document.getElementById("time").innerHTML = "";

test(password);

setTimeout(function(){
hack(password)
}, 100)
}
     
function hack(password){

//reqs check
if(password == null ||password == ""){
document.getElementById("error").innerHTML = "Please choose a password!"
return;
}
if(password < 0){
document.getElementById("error").innerHTML = "Please choose a (poitive) number-only password!"
return;
}
if(isNaN(password)) {
document.getElementById("error").innerHTML = "Please choose a number-only password!"
return;
}
if(password.length > 11) {
document.getElementById("error").innerHTML = "Your password cant exceed 99.999.999.999!"
return;
}

i = 0;
t = 0;
    
//Track time
let start = Date.now();

let modify = 6;
if(password.length > 8) modify = 6 + (password.length - 9)

//Run Task
while(i != password){i++; t++; if(t == Math.pow(10, modify)){console.log("PROGRESS: " + Math.floor(i / password * 100) + "%"); t = 0;}}
    
//Track time
let end = Date.now();
let time = end-start
if(time < 1000){
document.getElementById("time").innerHTML = "That took " + time + " ms! (" + password.length + " digits)";}
if(time > 1000){
document.getElementById("time").innerHTML = "That took " + time/1000 + " s! (" + password.length + " digits)";}
if(time > 60000){
document.getElementById("time").innerHTML = "That took "  + time/60000 + " min! (" + password.length + " digits)";}

document.getElementById("progress").innerHTML = "";
console.log("PROGRESS: 100%")
return;
}
    
function test(password){
if(password.length == 9)document.getElementById('progress').innerHTML = "This could take between 8.5 seconds and 1.5 minutes!";
if(password.length == 10) document.getElementById('progress').innerHTML = "This could take between 1.5 and 35 minutes!";
if(password.length == 11) document.getElementById('progress').innerHTML = "This could take between 35 and 200 minutes!"; 
}



//https://www.phpied.com/files/location-location/location-location.html