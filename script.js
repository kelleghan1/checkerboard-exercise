// Your JS goes here

function checker(){

  var squareb = [];

  for (var i = 0; i < 63; i++) {

    squareb[i] = document.createElement('div');
    document.body.appendChild(squareb[i]);
    squareb[i].style.width = '11.1%';
    squareb[i].style.paddingBottom = '11.1%'
    squareb[i].style.float = 'left';
    if (i%2===0){
      squareb[i].style.background ="-webkit-linear-gradient(left, red, blue)";
    }else{squareb[i].style.backgroundColor = 'rgb(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) +',' + (Math.floor(Math.random()*255)) + ')';
  }
}
}
checker();
