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