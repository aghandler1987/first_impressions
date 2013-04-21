(function ($) {
Drupal.behaviors.btQuestionnaireQuestions = {
  attach: function(context, settings){
  var questionForm = $("#bt-questionnaire-add-question-form");
  $('#add-answer:not(.questionnaireQuestions-processed)', questionForm).addClass('questionnaireQuestions-processed').each(function(){
    $(this).click(function(){
       $('div.hidden:first').removeClass('hidden');
       if ($('div.hidden').length == 0){
         $(this).remove();
       }
    })
  });

  }
}
})(jQuery);