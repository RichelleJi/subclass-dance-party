var OompaLoompa = function(top, left, timeBetweenSteps) {

  Dancer.apply(this, [...arguments]);

  this.$node.append('<img class="oompa-loompa-pic" src="img/oompa-loompas.gif">');
  //this.setSize(top);
};

OompaLoompa.prototype = Object.create(Dancer.prototype);
OompaLoompa.prototype.constructor = OompaLoompa;


OompaLoompa.prototype.step = function() {

  Dancer.prototype.step.call(this);
};

OompaLoompa.prototype.lineup = function() {
  var stylesetting = {
    top: $('body').height() * 4 / 5
  };
  
  this.$node.css(stylesetting);  
};


/*
OompaLoompa.prototype.setSize = function(top){
	var scale =  Math.floor(top/$('body').height()*100) + '%';
	this.$node.css({height: scale});
	this.$node.css({width: scale});
	console.log(Math.floor(top/$('body').height()*100))
}
*/