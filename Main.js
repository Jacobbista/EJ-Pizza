function load(){
  document.getElementById('filtri').addEventListener('click', barraFiltri, false)


}
function barraFiltri(){
  var opzCont= document.getElementById('opzionicontainer');
  var altCont= opzCont.style.height; //restituisce a console '' anche se dovrebbe essere '60px'
  if (altCont == 60 + 'px') {
    opzCont.style.height= 120 + 'px';
  }
  else {
    opzCont.style.height= 60 + 'px';
  }

}
