(function ($) {
Drupal.behaviors.btQuestionnaireQuestions = {
  ajaxImage : null,
  wrapperObj : null,
  attach: function(context, settings){
    $('#add-answer:not(.questionnaireQuestions-processed)', context).addClass('questionnaireQuestions-processed').each(function(){
      $(this).click(function(){
         $('div.hidden:first').removeClass('hidden');
         if ($('div.hidden').length == 0){
           $(this).remove();
         }
      });
    });
    
    $('#questionnaire-owner-links .delete-questionnaire:not(.questionnaireQuestions-processed)', context).addClass('questionnaireQuestions-processed').each(function(){
      $(this).click(function(){
        if ($('#bt-questionnaire-delete-form').hasClass('hidden')){
          $('#bt-questionnaire-delete-form').removeClass('hidden');
        }
        else{
          $('#bt-questionnaire-delete-form').addClass('hidden');
        }
        return false;
        
      })
    });
  
    $('#results-wrapper:not(.questionnaireQuestions-processed)', context).addClass('questionnaireQuestions-processed').each(function(){

      Drupal.behaviors.btQuestionnaireQuestions.wrapperObj = $(this);
      var wrapperObj = Drupal.behaviors.btQuestionnaireQuestions.wrapperObj;
      Drupal.behaviors.btQuestionnaireQuestions.ajaxImage = $('.ajax-loader', wrapperObj).detach();
      Drupal.behaviors.btQuestionnaireQuestions.ajaxQList('/q_list_ajax', wrapperObj);
    });
    $('#pager a:not(.questionnaireQuestions-processed)', context).addClass('questionnaireQuestions-processed').each(function(){
      $(this).click(function(e){
        e.stopPropagation();
        Drupal.behaviors.btQuestionnaireQuestions.ajaxQList($(this).attr('href'), Drupal.behaviors.btQuestionnaireQuestions.wrapperObj);
        return false;
      })
        
    })
  },
  ajaxQList : function(urlStr, wrapperObj){
    wrapperObj.empty();
    wrapperObj.append(Drupal.behaviors.btQuestionnaireQuestions.ajaxImage);
    $.ajax({
      dataType : 'html',
      url : urlStr,
      success : function(data){
        wrapperObj.empty();
        wrapperObj.append(data);
        Drupal.attachBehaviors();
      }
    })
  }
}
})(jQuery);