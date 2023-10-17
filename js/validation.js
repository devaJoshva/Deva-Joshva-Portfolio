// $(document).ready(function() {
//     $("#send_message").click(function(a) {
		
//         a.preventDefault();
//         var b = !1,
//             c = $("#name").val(),
//             d = $("#email").val(),
//             e = $("#phone").val(),
//             f = $("#message").val();
//         if ($("#name,#email,#phone,#message").click(function() {
//                 $(this).removeClass("error_input")
//             }), 0 == c.length) {
//             var b = !0;
//             $("#name").addClass("error_input")
//         } else $("#name").removeClass("error_input");
//         if (0 == d.length || "-1" == d.indexOf("@")) {
//             var b = !0;
//             $("#email").addClass("error_input")
//         } else $("#email").removeClass("error_input");
//         if (0 == e.length) {
//             var b = !0;
//             $("#phone").addClass("error_input")
//         } else $("#phone").removeClass("error_input");
//         if (0 == f.length) {
//             var b = !0;
//             $("#message").addClass("error_input")
//         } else $("#message").removeClass("error_input");
//         0 == b && ($("#send_message").attr({
//             disabled: "true",
//             value: "Sending..."
//         }), $.post("email.php", $("#contact_form").serialize(), function(a) {
//             "sent" == a ? ($("#submit").remove(), $("#mail_success").fadeIn(500)) : ($("#mail_fail").fadeIn(500), $("#send_message").removeAttr("disabled").attr("value", "Send The Message"))
//         }))
//     })
// });




$(document).ready(function() {
    $("#send_message").click(function(event) {
        event.preventDefault();
        var hasError = false;
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var message = $("#message").val();
        
        // Remove error styles when the input fields are clicked.
        $("#name, #email, #phone, #message").click(function() {
            $(this).removeClass("error_input");
        });

        if (name.length == 0) {
            hasError = true;
            $("#name").addClass("error_input");
        } else {
            $("#name").removeClass("error_input");
        }

        if (email.length == 0 || email.indexOf("@") == -1) {
            hasError = true;
            $("#email").addClass("error_input");
        } else {
            $("#email").removeClass("error_input");
        }

        if (phone.length == 0) {
            hasError = true;
            $("#phone").addClass("error_input");
        } else {
            $("#phone").removeClass("error_input");
        }

        if (message.length == 0) {
            hasError = true;
            $("#message").addClass("error_input");
        } else {
            $("#message").removeClass("error_input");
        }

        if (!hasError) {
            // Disable the form submit button and update its text.
            $("#send_message").attr({
                disabled: "false",
                value: "Submit Form"
            });

            // Submit the form data to email.php.
            $.post("email.php", $("#contact_form").serialize(), function(response) {
                if (response == "sent") {
                    $("#submit").remove();
                    $("#mail_success").fadeIn(500);
                } else {
                    $("#mail_fail").fadeIn(500);
                    $("#send_message").removeAttr("disabled").attr("value", "Send The Message");
                }
            });
        }
    });
});
