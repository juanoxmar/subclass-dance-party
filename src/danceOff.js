var danceOff = function(left, top) {
  for (var i = 0; i < window.dancers.length; i++) {
    var item1 = window.dancers[i].$node[0];
    var dist = Math.sqrt(Math.pow((item1.offsetLeft - left), 2) + Math.pow((item1.offsetTop - top), 2));
    if (dist <= 300 && dist !== 0) {
      window.dancers[i].$node.addClass('danceOff');
    }
  }
  setTimeout(function() {
    $('.danceOff').removeClass('danceOff');
  }, 4000);
};





