$(document).ready(function() {
  window.dancers = [];

  $('.addGrandpaJoeButton').on('click', function() {

    var dancer = new GrandpaJoe(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
    $('.addOompaLoompaButton').on('click', function () {
    var oompaLoompa = new OompaLoompa (
      Math.random() * ($("body").height() -150)+ 150,
      $("body").width() * Math.random(),
      1000
    );
    $('body').append(oompaLoompa.$node);
    window.dancers.push(oompaLoompa);
  });
  
  $('.lineupButton').on('click', function (event) {
   
  
  });
  
});

