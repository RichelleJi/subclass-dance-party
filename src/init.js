$(document).ready(function() {
  window.dancers = [];

  $('.addGrandpaJoeButton').on('click', function() {

    var dancer = new GrandpaJoe(
      Math.random() * ($('body').height() - 150) + 150,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  $('.addOompaLoompaButton').on('click', function () {
    var oompaLoompa = new OompaLoompa (
      Math.random() * ($('body').height() - 150) + 150,
      $('body').width() * Math.random(),
      1000
    );
    $('body').append(oompaLoompa.$node);
    window.dancers.push(oompaLoompa);
  });
  
  $('.addVioletButton').on('click', function () {
    var violet = new Violet (
      Math.random() * ($('body').height() - 150) + 150,
      $('body').width() * Math.random(),
      1
    );
    $('body').append(violet.$node);
    window.dancers.push(violet);
  });
  
  $('.lineupButton').on('click', function (event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineup();
    });
  });
  
});

