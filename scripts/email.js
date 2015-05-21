$(document).ready(function () {
    Parse.initialize("J9U1LbAaB7LoxtCnh6jpyJYxRlRRdrMImPnNdzS6", "F8zgXvM68Xcmco6rHvFzAeZ9OyQFhECW6iw4T07n");
    $("#contact").on('submit', function (e) {
        e.preventDefault();
        $("#send").attr('disabled', true);
        $("#contact-message").html("");

        var data = {
            email: $('input[name="email"]').val(),
            name: $('input[name="name"]').val(),
            comment: $('textarea[name="comment"]').val()
        };

        setTimeout(function (msg) {
                $("#contact-message").html(msg).addClass("error"); 
                $("#send").attr('disabled', false);
        }, 800, "An error occured");

        return;
        Parse.Cloud.run("sendEmail", data, {
            success: function (msg) {
                $("#contact-message").html(msg).addClass("success").fadeIn('fast'); 
                $("#send").attr('disabled', false);
            }, 
            error: function (msg) {
                $("#contact-message").html(msg).addClass("error").fadeIn('fast'); 
                $("#send").attr('disabled', false);
            }
        });
    });
});
