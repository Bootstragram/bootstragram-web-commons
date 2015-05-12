(function() {
  jQuery(function() {
    $('#bsg-debug').append("jQuery has loaded. ");
    $('#jumbomain').css('height', ($(window).height() - $('#jumbotron').offset().top) + 'px');
    $('#jumbomain').css('background-image', 'url(' + $('#jumbomain').data('background-url') + ')');
    return $('#bootstragram-menu-collapse').on('show.bs.collapse', function() {
      return $('#nav-button-icon').removeClass('fa-bars').addClass('fa-close');
    }).on('hide.bs.collapse', function() {
      return $('#nav-button-icon').addClass('fa-bars').removeClass('fa-close');
    });
  });

}).call(this);
