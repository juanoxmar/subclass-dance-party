var AirGuitar = function(top, left, timeBetweenSteps) {
  Napoleon.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.append('<img src="../assets/airguitar.gif">');
};

AirGuitar.prototype = Object.create(makeDancer.prototype);

AirGuitar.prototype.constructor = AirGuitar;

AirGuitar.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
