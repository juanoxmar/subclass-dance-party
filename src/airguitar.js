var AirGuitar = function(top, left, timeBetweenSteps) {
  Napoleon.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node.append('<img class="airguitar" src="../assets/airguitar.gif">');
  this.$node.append('<img class="surprise" style="display: none" src="../assets/surprise.gif">');

  this.$node.hover(function() {
    $(this.children[0]).toggle();
    $(this.children[1]).toggle();
  }, function() {
    $(this.children[0]).toggle();
    $(this.children[1]).toggle();
  });
};

AirGuitar.prototype = Object.create(makeDancer.prototype);

AirGuitar.prototype.constructor = AirGuitar;

AirGuitar.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
