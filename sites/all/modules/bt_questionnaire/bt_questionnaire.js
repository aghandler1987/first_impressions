(function ($) {
Drupal.behaviors.btQuestionnaireQuestions = {
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
      var ajaxImage = null;
      var wrapperObj = $(this);
      Drupal.behaviors.btQuestionnaireQuestions.ajaxQList(function(data){
        ajaxImage = $('.ajax-loader', wrapperObj).detach();
        wrapperObj.append(data);
      })
    })
  },
  ajaxQList : function(callback){
    $.ajax({
      dataType : 'html',
      url : '/q_list_ajax',
      success : function(data){
        callback(data);
      }
    })
  }
}
})(jQuery);