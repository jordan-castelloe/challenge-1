/*$(document).ready(function() {

 // store input types as variables
var range = $("input[type=range]");
var num = $("input[type=number]");

// when the range changes, change the number value accordingly
    $(range).change(function(){
        $(num).val($(range).val());
    });

// when the number input changes, change the range accordingly
    $(num).change(function(){
        $(range).val($(num).val());
    });

})

*/

// store input types as variables
var range = document.querySelector('input[type="range"]');
var num = document.querySelector('input[type="number"]');

// add event listners to keep track of when the inputs change
range.addEventListener('change', changeNum);
num.addEventListener('change', changeRange);

// shen the range changes, call this function to change the number
function changeNum(){
    num.value = range.value;
    console.log("number changed!")
};

// when the number changes, call this function to change the range
function changeRange(){
    range.value = num.value;
    console.log("number changed!")
};

