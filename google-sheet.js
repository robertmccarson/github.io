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

   function isValid(){
  var usrname = $("#usrname").val();
    if(usrname == ""){
      return false;
    }
  return true;
}
$(function () {
    $('#submityes').submit(function () {
    if(isValid() == true){
        $.ajax({
            type: "POST",
                     success: function (msg) {
                alert("success");
                window.location.replace("/response.html");
            },
        });
        }else{
        alert("error");
        }
    });

    // Prevent default posting of form
    event.preventDefault();
});
