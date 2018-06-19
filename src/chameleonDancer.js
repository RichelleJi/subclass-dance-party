var ChameleonDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [...arguments]);
};

ChameleonDancer.prototype = Object.create(Dancer.prototype);
ChameleonDancer.prototype.constructor = ChameleonDancer;

ChameleonDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);

  var i = Math.floor(Math.random() * 5);
  var colors = ['red', 'blue', 'black', 'white', 'green'];
  var color = '10px solid ' + colors[i];

  this.$node.css({border: color});

};
// chameleonDancer.prototype.colour = function(){

// }