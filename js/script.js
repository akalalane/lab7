 function init(){
   function eventMessageFunction(){
     var input=document.getElementById('entryinput').value;
     var output=document.getElementById('textoutput');
     output.innerHTML=input;
     alert('Goodwin Akala Lane: '+input);
  }
  var button=document.getElementByID('entrybutton');
  button.addEventListener('click', eventMessageFunction);
}
window.addEventListener('load', init);
