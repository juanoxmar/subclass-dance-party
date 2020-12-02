var Moonwalk = function(top, left, timeBetweenSteps) {
  Napoleon.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node.append('<img class="moonwalk" src="../assets/moonwalk.gif">');
  this.$node.append('<img class="surprise" style="display: none" src="../assets/surprise.gif">');

  this.$node.hover(function() {
    $(this.children[0]).toggle();
    $(this.children[1]).toggle();
  }, function() {
    $(this.children[0]).toggle();
    $(this.children[1]).toggle();
  });
};

Moonwalk.prototype = Object.create(makeDancer.prototype);

Moonwalk.prototype.constructor = Moonwalk;

Moonwalk.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
