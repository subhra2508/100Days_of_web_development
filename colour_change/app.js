var btnShow=document.querySelector('button');
var result=document.querySelector('.color');
btnShow.addEventListener('click',function(){
	var checkbox=document.querySelector('input[type ="checkbox"]:checked');
	 if(checkbox.value=="red")result.style.backgroundColor="red";
	  if(checkbox.value=="orange")result.style.backgroundColor="orange";
	   if(checkbox.value=="white")result.style.backgroundColor="white";
	    if(checkbox.value=="black"){
	    	result.style.backgroundColor="black";
	    	document.querySelector('p').style.backgroundColor="white";
	    }
});