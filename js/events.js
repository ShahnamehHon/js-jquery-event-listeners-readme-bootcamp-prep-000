function getIt () {
  $('p').on('click', function() {
  alert('Hey!');
});
}

function frameIt () {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    });
  }

function pressIt () {
  $(document).on('keydown', function(key) {
    if(key.which === 71) {
      alert('G was pressed!');
      }
  });
}

function submitIt () {
  $('input:last').on('submit', function() {
    alert ('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

// call functions here

});
