$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancer = new BlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    debugger;
    window.dancers.push(dancer);
  });

  $('.addSpinnerButton').on('click', function (event) {
    var spinner = new SpinningDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(spinner.$node);
    window.dancers.push(spinner);
  });
  
  $('.addChameleonButton').on('click', function (even) {
    var chameleon = new ChameleonDancer (
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(chameleon.$node);
    window.dancers.push(chameleon);
  });
  
  $('.lineupButton').on('click', function (event) {
   
  
  });
  
});

