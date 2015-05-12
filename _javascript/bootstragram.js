(function() {
  jQuery(function() {
    var jumboCollapsingMinWidth, jumboHeadHeight, jumboHeight, jumboImageHeight;
    $('#bsg-debug').append("jQuery has loaded. ");
    jumboCollapsingMinWidth = 768;
    $('#jumbomain').css('background-image', 'url(' + $('#jumbomain').data('background-url') + ')');
    jumboHeight = $(window).height() - $('#jumbotron').offset().top;
    jumboHeadHeight = $('#jumbohead').height();
    jumboImageHeight = $('#jumbo-image').height();
    $('#bsg-debug').append("Size1: " + jumboHeight + ", Size2: " + jumboHeadHeight + ", Size3: " + jumboImageHeight);
    if (jumboHeadHeight < jumboHeight) {
      $('#jumbomain').css('height', jumboHeight + 'px');
      if ($(window).width() > jumboCollapsingMinWidth) {
        $('#jumbohead').css('margin-top', ((jumboHeight - jumboHeadHeight) / 2) + 'px');
        if (jumboImageHeight < jumboHeight) {
          $('#jumbo-image').css('margin-top', ((jumboHeight - jumboImageHeight) / 2) + 'px');
        }
      }
    }
    return $('#bootstragram-menu-collapse').on('show.bs.collapse', function() {
      return $('#nav-button-icon').removeClass('fa-bars').addClass('fa-close');
    }).on('hide.bs.collapse', function() {
      return $('#nav-button-icon').addClass('fa-bars').removeClass('fa-close');
    });
  });

}).call(this);
