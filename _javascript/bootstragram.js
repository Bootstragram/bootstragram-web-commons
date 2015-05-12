(function() {
  jQuery(function() {
    var jumboCollapsingMinWidth, jumboHeadHeight, jumboHeight, jumboImageHeight;
    jumboCollapsingMinWidth = 768;
    $('#jumbomain').css('background-image', 'url(' + $('#jumbomain').data('background-url') + ')');
    jumboHeight = Math.max($(window).height() - $('#jumbotron').offset().top, 680);
    jumboHeadHeight = $('#jumbohead').height();
    jumboImageHeight = $('#jumbo-image').height();
    if (jumboHeadHeight < jumboHeight) {
      $('#jumbomain').css('height', jumboHeight + 'px');
      if ($(window).width() > jumboCollapsingMinWidth) {
        $('#jumbohead').css('margin-top', ((jumboHeight - jumboHeadHeight) / 2) + 'px');
        if (jumboImageHeight < jumboHeight) {
          $('#jumbo-image').css('margin-top', ((jumboHeight - jumboImageHeight) / 2) + 'px');
        }
      }
    }
    $('#bootstragram-menu-collapse').on('show.bs.collapse', function() {
      return $('#nav-button-icon').removeClass('fa-bars').addClass('fa-close');
    }).on('hide.bs.collapse', function() {
      return $('#nav-button-icon').addClass('fa-bars').removeClass('fa-close');
    });
    return $('button[data-href]').click(function() {
      return window.location.href = $(this).data('href');
    });
  });

}).call(this);
