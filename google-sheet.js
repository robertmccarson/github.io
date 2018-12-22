// Variable to hold request
var request;

// Bind to the submit event of our form
$("#foo").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbymCjqem2S4WZ1VO_sk3hrSZYRDK6vSLD7-TpDJf8w_bUXwtvw/exec",
        type: "post",
        data: serializedData
    });

    var url = 'https://script.google.com/macros/s/AKfycbw1CW2KcMOnXFY3Z27fCyxTD_HsJt39SqbUjdWtaedhoyQe_oI/exec';
        var redirectUrl = 'response.html';
        // show the loading
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
added this >>> jqxhr.crossDomain = true;
console.log("Success! Data: " + data.statusText);
$(location).attr('href',redirectUrl);
        })

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", true);
    });

    // Prevent default posting of form
    event.preventDefault();
});
