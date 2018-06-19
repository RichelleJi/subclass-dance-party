var GrandpaJoe = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [...arguments]);
  this.$node.append('<img class = "grandpa-joe" src="img/grandpa-joe.gif">');
  this.createdAt = Date.now();
};

GrandpaJoe.prototype = Object.create(Dancer.prototype);
GrandpaJoe.prototype.constructor = GrandpaJoe;


GrandpaJoe.prototype.step = function() {
  var now = Date.now();
  if (now - this.createdAt > 30000) {
    this.$node.remove();
  }
  Dancer.prototype.step.call(this);
  this.$node.animate({ "left": "+=25px" }, "slow");

};

GrandpaJoe.prototype.lineup = function() {
  
}

