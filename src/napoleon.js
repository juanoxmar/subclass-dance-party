var Napoleon = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('napoleon');
  this.$node.removeClass('dancer');
  this.timeBetweenSteps = timeBetweenSteps;
};

Napoleon.prototype = Object.create(makeDancer.prototype);

Napoleon.prototype.constructor = Napoleon;

Napoleon.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
