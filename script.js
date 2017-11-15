$(document).ready(function() {

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