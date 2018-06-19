var SpinningDancer = function (top, left, timeBetweenSteps) {
  Dancer.apply(this, [...arguments]);
  
  //this.$node.addClass("spinning-dancer");
  //this.$node = $('<img class="dancer spinning-dancer" src="nyan-cat.png">');
};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  var i = Math.floor(Math.random() * 100);
  var j = Math.floor(Math.random() * 100);
  
  this.$node.css({border: '10px solid white'});
  this.$node.animate({height: i, width: j});
  this.$node.css({transform: 'rotate(45deg)'});
};