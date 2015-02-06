// Tel Format
//
// Use: A small JavaScript function to automatically format telephone numbers as a user types in a phone number in a tel input field.
//
// -------------------------------------------------------------------------------

module.exports = function(){
  'use strict';
  var input = document.getElementsByTagName('input');
  for (var i = 0; i < input.length; i++){
    var type = input[i].type;
    if(type === 'tel'){
      input[i].addEventListener('keydown', telFormat);
    }
  }

  function telFormat(e){
    var curchr    = this.value.length,
      curval      = this.value;
    if (e.keyCode !== 189 && e.keyCode !== 32 && e.keyCode !== 8) {
      if(curchr === 3){
        this.value = '(' + curval + ')' + '-';
      }else if (curchr === 9 && e.keyCode !== 8) {
        this.value = curval + '-';
      }
    }else if(e.keyCode === 8){
      if(curchr === 4){
        var removeFormat = curval.replace('(', '');
        this.value = removeFormat;
      }else if(curchr === 10){
        var removeDash = curval.replace(/-([^-]*)$/,'$1');
        this.value = removeDash;
      }
    }else {
      e.preventDefault();
    }
  }
};