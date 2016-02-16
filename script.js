
var flasher = function(){
  for (var i = 0; i < 63; i++) {
    squareb[i].style.backgroundColor ='rgb(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) +',' + (Math.floor(Math.random()*255)) + ')';
  }
}

var flash = function(){
  setInterval(flasher, 1000);
}

function checker(){
  squareb = [];

  for (var i = 0; i < 63; i++) {

    squareb[i] = document.createElement('div');
    document.body.appendChild(squareb[i]);
    squareb[i].style.width = '11.1%';
    squareb[i].style.paddingBottom = '11.1%'
    squareb[i].style.float = 'left';
    squareb[i].style.backgroundColor ='rgb(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) +',' + (Math.floor(Math.random()*255)) + ')';
  }
  flash();
}
checker();
