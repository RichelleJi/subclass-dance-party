var GrandpaJoe = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [...arguments]);
  this.$node.append('<img class = “old_man” src=“old_man.gif”>');

};

GrandpaJoe.prototype = Object.create(Dancer.prototype);
GrandpaJoe.prototype.constructor = GrandpaJoe;


GrandpaJoe.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.animate({ “left”: “+=50px” }, “slow” );

  
};

