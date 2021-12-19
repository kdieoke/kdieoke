let i;
let t;

//ADMIN VERSION
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

console.log("PASSWORD :: " + password)
i = 0;
t = 0;

//Track time
console.time("Start")
let start = Date.now();

let modify = 6;
if(password.length > 9) modify = 6 + (password.length - 9)

//Run Task
while(i != password){i++; t++; if(t == Math.pow(10, modify)){console.log("PROGRESS: " + Math.floor(i / Math.pow(10, password.length) * 1000) + "%"); t = 0;}}
console.log("H1 DONE! :: " + Math.floor(i/1000000) + " MILLION");

//Track time
console.timeEnd("Start")
let end = Date.now();
let time = end-start
console.log(time)
if(time < 1000){
document.getElementById("time").innerHTML = "That took " + time + " ms! (" + password.length + " digits)";}
if(time > 1000){
document.getElementById("time").innerHTML = "That took " + time/1000 + " s! (" + password.length + " digits)";}
if(time > 60000){
document.getElementById("time").innerHTML = "That took "  + time/60000 + " min! (" + password.length + " digits)";}

console.log("PROGRESS: 100%")
return;
}

function test(password){
//check
console.log('success!')    
console.log("PASSWORD_LENGTH :: " + password.length)

if(password.length == 9)document.getElementById('progress').innerHTML = "This could take between 8.5 seconds and 1.5 minutes!";
if(password.length == 10) document.getElementById('progress').innerHTML = "This could take between 1.5 and 35 minutes!";
if(password.length == 11) document.getElementById('progress').innerHTML = "This could take between 35 and 200 minutes!";
}
