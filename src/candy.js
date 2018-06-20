var Candy = function(top, left, timeBetweenSteps) {

  Dancer.apply(this, [...arguments]);

  // this.$node.append('<img class="candy-pic " src="img/">');
  this.$node.append('<img class="candy-pic" src="img/candy.gif">');
  this.createAt = Date.now();
  
  //this.setSize(top);
};

Candy.prototype = Object.create(Dancer.prototype);
Candy.prototype.constructor = Candy;


Candy.prototype.step = function() {
  var now = Date.now();
  if (now - this.createdAt > 3000) {
    this.$node.remove();
  }
  var candyPosition = this.$node.position();
  if (candyPosition.top < 700 ) {
    Dancer.prototype.step.call(this);
    this.$node.animate({ 'top': '+=50px'}, 'slow');
    this.knockout();
  } else {
    this.$node.remove();
  }
};

Candy.prototype.knockout = function() {
  var candyPosition = this.$node.position();
  window.dancers.forEach(function(dancer) {
    var dancerPosition = dancer.$node.position();
    var hasSameY = Math.abs(candyPosition.top - dancerPosition.top) < 80 ? true : false;
    var hasSameX = Math.abs(candyPosition.left - dancerPosition.left) < 80 ? true : false;
    if (hasSameX && hasSameY) {
      dancer.$node.remove();
    }
  });
  
};

// Candy.prototype.lineup = function() {
//   var stylesetting = {
//     top: $('body').height() * 1 / 5
//   };
  
//   this.$node.css(stylesetting);  
// };
