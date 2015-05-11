(function() {
  jQuery(function() {
    $('#bsg-debug').append("jQuery has loaded. ");
    $('#jumbomain').css('height', ($(window).height() - $('#jumbotron').offset().top) + 'px');
    return $('#jumbomain').css('background-image', 'url(' + $('#jumbomain').data('background-url') + ')');
  });

}).call(this);
