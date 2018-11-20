
//display submit/save message
var submitConfirmed = "Submitted your answer successfully!";

var saveConfirmed = "Saved your answer successfully!";

$(document).ready(function() {
    $('#resubmit-btn').hide();

    $('.submit-btn').click(
        function(){
            submit_btn();
        }
    );
    $('.save-btn').click(
        function(){save_btn();}
    );

    $('#resubmit-btn').click(
        function(){
            $('#answer-text').html('');
            $('div.form-group').show();
            $('#save-btn').show();
            $('#submit-btn').show();
            $('#resubmit-btn').hide();
        }
    )
});


function submit_btn()
{
    var answer = $('#answer').val();
    $('div.form-group').hide();
    $('#answer-text').html(answer);
    $('#save-btn').hide();
    $('#submit-btn').hide();
    $('#resubmit-btn').show();
}

function save_btn()
{
    $('#answer-text').html(saveConfirmed);
    $('div.form-group').hide();
    $('#save-btn').hide();
    $('#submit-btn').hide();
    $('#resubmit-btn').show();
}




//dispaly word-count
var text_max = 300;

$('#word-count').html(text_max + ' remaining');

$('#answer').keyup(function(){
    var text_length = $('#answer').val().length;
    var text_remaining = text_max - text_length;

    $('#word-count').html(text_remaining + ' remaining');
});




//hide save/submit button when submit button is clicked
//$('subject-box').click(function(){
//    $('#save_btn').hide();
//});

$(document).ready(function(){
    $('submit-btn').click(function(){
        Console.log("Please work and stop giving me an headache!");
    $('#save-btn').hide();
    });
});