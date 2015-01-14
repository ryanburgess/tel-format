// Tel Format
//
// Use: A small jQuery function to automatically format telephone numbers as a user types in a phone number in a tel input field.
//
// -------------------------------------------------------------------------------

module.exports = function(){
  'use strict';
  $('input[type="tel"]').keydown(function(e) {
    var curchr    = this.value.length,
      curval      = $(this).val();
    if (e.keyCode !== 189 && e.keyCode !== 32 && e.keyCode !== 8) {
      if(curchr === 3){
        $('input[type="tel"]').val('(' + curval + ')' + '-');
      }else if (curchr === 9&& e.keyCode !== 8) {
        $('input[type="tel"]').val(curval + '-');
      }
    }else if(e.keyCode === 8){
      if(curchr === 4){
        var removeFormat = curval.replace('(', '');
        $('input[type="tel"]').val(removeFormat);
      }else if(curchr === 10){
        var removeDash = curval.replace(/-([^-]*)$/,'$1');
        $('input[type="tel"]').val(removeDash);
      }
    }else {
      e.preventDefault();
    }
  });
}