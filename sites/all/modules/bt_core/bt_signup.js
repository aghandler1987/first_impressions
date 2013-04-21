(function ($) {
  Drupal.behaviors.btQuestionnaireQuestions = {
    attach: function(context, settings){
      var signupForm = $('#signup-login-wrapper');
      $('.tab:not(.signupForm-processed)', signupForm).addClass('signupForm-processed').each(function(){
        $(this).click(function(){
          var tabObj = $(this);
          if(tabObj.hasClass('active')){
            return;
          }
          $('.tab').removeClass('active');
          tabObj.addClass('active');
          $('.block').addClass('hidden');
          var blockName = tabObj.attr('id').split('-');
          var blockObj = $('#' + blockName[0] + '-block');
          blockObj.removeClass('hidden');
        })
      });
    }
  }
})(jQuery);