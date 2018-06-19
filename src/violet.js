var Violet = function(top, left, timeBetweenSteps) {

  Dancer.apply(this, [...arguments]);

  // this.$node.append('<img class="violet-pic " src="img/violet.png">');
  this.$node.append('<img class="violet-pic fa fa-spinner w3-spin" src="img/violet.png">');
  this.createAt = Date.now();
  //this.setSize(top);
};

Violet.prototype = Object.create(Dancer.prototype);
Violet.prototype.constructor = Violet;


Violet.prototype.step = function() {
  var now = Date.now();
  if (now - this.createdAt > 15000) {
    this.$node.remove();
  }
  Dancer.prototype.step.call(this);
  this.$node.animate({ 'right': '+=50px'}, 'fast');
};

Violet.prototype.lineup = function() {
  var stylesetting = {
    top: $('body').height() * 1 / 5
  };
  
  this.$node.css(stylesetting);  
};
