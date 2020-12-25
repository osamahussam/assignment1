console.log(7)
var myImg = document.querySelector('img')
myImg.onclick = function(){
var Src = myImg.getAttribute('src');
if(Src === 'images/firefox-icon.png'){
myImg.setAttribute('src','images/firefox2.png');//changes the image onclicking it
}
else
myImg.setAttribute('src','images/firefox-icon.png');	
}
var Namebutton = document.querySelector('button');// creating a button for changing the name
var myHeading = document.querySelector('h1');
function enterName() {
var nm = prompt('enter your name.');
localStorage.setItem('savedname',nm);
myHeading.textContent = 'Mozilla is cool,' +nm;
}
if(!localStorage.getItem('savedname')){
enterName(); // if no name is assigned it calls entername function else it restores the saved name
}
else{
var lastName = localStorage.getItem('savedname'); 
myHeading.textContent = 'Mozilla is cool,'+lastName;
}
Namebutton.onclick = function(){
enterName(); //reasign your name onclicking
}