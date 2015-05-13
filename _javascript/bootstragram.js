(function() {
  jQuery(function() {
    var initButtons, initJumbotron, initNavbar;
    initJumbotron = function() {
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
            return $('#jumbo-image').css('margin-top', ((jumboHeight - jumboImageHeight) / 2) + 'px');
          }
        }
      }
    };
    initNavbar = function() {
      return $('#bootstragram-menu-collapse').on('show.bs.collapse', function() {
        return $('#nav-button-icon').removeClass('fa-bars').addClass('fa-close');
      }).on('hide.bs.collapse', function() {
        return $('#nav-button-icon').addClass('fa-bars').removeClass('fa-close');
      });
    };
    initButtons = function() {
      return $('button[data-href]').click(function() {
        return window.location.href = $(this).data('href');
      });
    };
    if ($('#jumbotron').length) {
      initJumbotron();
    }
    if ($('#bootstragram-menu-collapse').length) {
      initNavbar();
    }
    return initButtons();
  });

}).call(this);
