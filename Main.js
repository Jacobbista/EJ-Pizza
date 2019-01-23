function load(){
  document.getElementById('filtri').addEventListener('click', barraFiltri, false)



}
function barraFiltri(){
  var opzCont= document.getElementById('opzionicontainer');
  var altCont= opzCont.style.height; //restituisce a console '' anche se dovrebbe essere '60px'
  if (altCont == '60px') {
    opzCont.style.height= '150px';
    for (var i = 0; i <= 5; i++){
      document.getElementsByClassName('check')[i].style.transitionDuration= (i+.3) + 's';
      document.getElementsByClassName('labcheck')[i].style.transitionDuration= (i+.3) + 's';
      document.getElementsByClassName('check')[i].style.opacity='1';
      document.getElementsByClassName('labcheck')[i].style.opacity='1';
    }
    for (var i = 0; i <= 2; i++) {
      document.getElementsByClassName('rad')[i].style.transitionDuration= (i+.5) + 's';
      document.getElementsByClassName('labrad')[i].style.transitionDuration= (i+.5) + 's';
      document.getElementsByClassName('rad')[i].style.opacity='1';
      document.getElementsByClassName('labrad')[i].style.opacity='1';
    }
  }
  else {
    opzCont.style.height= '60px';
    for (var i = 5; i >= 0; i--) {
      document.getElementsByClassName('check')[i].style.transitionDuration= (.5) + 's';
      document.getElementsByClassName('labcheck')[i].style.transitionDuration= (.5) + 's';
      document.getElementsByClassName('check')[i].style.opacity='0';
      document.getElementsByClassName('labcheck')[i].style.opacity='0';
    }
    for (var i = 2; i >= 0; i--) {
      document.getElementsByClassName('rad')[i].style.transitionDuration= (.5) + 's';
      document.getElementsByClassName('labrad')[i].style.transitionDuration= (.5) + 's';
      document.getElementsByClassName('rad')[i].style.opacity='0';
      document.getElementsByClassName('labrad')[i].style.opacity='0';
    }

  }

}
