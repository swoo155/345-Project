
//display submit/save message
var submitConfirmed = "Submitted your answer successfully!";

var saveConfirmed = "Saved your answer successfully!";

$(document).ready(function() {
    $('.submit-btn').click(
        function(){submit_btn();}
    );
    $('.save-btn').click(
        function(){save_btn();}
    );
});


function submit_btn()
{
    $('div.form-group').html(submitConfirmed);
}

function save_btn()
{
    $('div.form-group').html(saveConfirmed);
}




//dispaly word-count
var text_max = 300;

$('#word-count').html(text_max + ' remaining');

$('#answer').keyup(function(){
    var text_length = $('#answer').val().length;
    var text_remaining = text_max - text_length;

    $('#word-count').html(text_remaining + ' remaining');
});
