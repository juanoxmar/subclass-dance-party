var Moonwalk = function(top, left, timeBetweenSteps) {
  Napoleon.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.append('<img src="../assets/moonwalk.gif">');
  this.$node.hover(function() {
    this.remove('img');
    this.append('<img src="../assets/surprise.gif">');
    // this.replaceWith('<img src="../assets/surprise.gif">'); this looks like a good idea
    // maybe we should give the img a class and access it with jquery replace it with
  }, function() {
    this.empty();
    this.append('<img src="../assets/moonwalk.gif">');
  });
};

Moonwalk.prototype = Object.create(makeDancer.prototype);

Moonwalk.prototype.constructor = Moonwalk;

Moonwalk.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
