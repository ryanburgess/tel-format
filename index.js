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

    if (e.keyCode !== 189 && e.keyCode !== 32) {
      if (curchr === 3) {
        $('input[type="tel"]').val('(' + curval + ')' + '-');
      } else if (curchr === 9) {
        $('input[type="tel"]').val(curval + '-');
      }
    } else {
      e.preventDefault();
    }
  });
}