function load(){
  var bar1=document.getElementsByClassName('bar1')[0];
  var bar2=document.getElementsByClassName('bar2')[0];
  var barbox=document.getElementsByClassName('bar-box')[0];
  var filtri=document.getElementById('filtri');
  var filtriB=document.getElementById('filtriB');
  filtri.addEventListener('click', function(){
      if (filtri.style.width == '112.05px') {
        filtri.style.width= '640px';
        barbox.style.zIndex='1';
        barbox.style.opacity='1';
        filtriB.innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        barbox.style.transform='translateX(-20px)';
        bar1.style.transform='translateX(46px)rotate(45deg)';
        bar2.style.transform='translateX(34px)rotate(-45deg)';
        document.getElementsByClassName('f1')[0].style.display='flex';
        document.getElementsByClassName('f1')[1].style.display='flex';
        document.getElementsByClassName('f1')[2].style.display='flex';
        document.getElementsByClassName('f1')[3].style.display='flex';
      }
      barbox.addEventListener('click', function(){
        filtri.style.width= '112.05px';
        barbox.style.opacity='0';
        barbox.style.zIndex='0';
        barbox.style.transform='translateX(20px)';
        filtriB.innerHTML='Filtri';
        barbox.style.transitionDelay='1s';
        bar1.style.transform='translateX(-46px)rotate(-45deg)';
        bar2.style.transform='translateX(-34px)rotate(45deg)';
        barbox.style.transitionDelay='0s';
        document.getElementsByClassName('f1')[0].style.display='none';
        document.getElementsByClassName('f1')[1].style.display='none';
        document.getElementsByClassName('f1')[2].style.display='none';
        document.getElementsByClassName('f1')[3].style.display='none';

      }, false);
    }, false);
  }
