 function init(){
   function eventMessageFunction(){
     var input=document.getElementById('entryinput');
     var output=document.getElementById('textoutput');
     alert('Goodwin Akala Lane: '+entry);
  }
  var button=document.getElementByID('entrybutton');
  button.addEventListener('click', eventMessageFunction);
}
window.addEventListener('load', init);
