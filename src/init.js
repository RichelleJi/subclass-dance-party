$(document).ready(function() {
  window.dancers = [];

  $('.addGrandpaJoeButton').on('click', function() {

    var dancer = new GrandpaJoe(
      Math.random() * ($('.container').height() - 150) + 150,
      $('.container').width() * Math.random(),
      Math.random() * 1000
    );
    $('.container').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  $('.addOompaLoompaButton').on('click', function () {
    var oompaLoompa = new OompaLoompa (
      Math.random() * ($('.container').height() - 150) + 150,
      $('.container').width() * Math.random(),
      1000
    );
    $('.container').append(oompaLoompa.$node);
    window.dancers.push(oompaLoompa);
  });
  
  $('.addVioletButton').on('click', function () {
    var violet = new Violet (
      Math.random() * ($('.container').height() - 150) + 150,
      $('.container').width() * Math.random(),
      1
    );
    $('.container').append(violet.$node);
    window.dancers.push(violet);
  });
  
  $('.lineupButton').on('click', function (event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineup();
    });
  });

  $('.container').on('click', function (event) {
    var candy = new Candy (
      event.clientY,
      event.clientX,
      1
    );
    $('.container').append(candy.$node);
   
  });

  
});

