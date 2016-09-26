$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var contact = $("#contact").val();
        $("#returnmessage").empty(); // To empty previous error/success message.

        var email_patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (name == '' || email == '' || contact == '') {
            alert("Please Fill Required Fields");
        } else if (!email_patt.test(email)) {
            alert("Wrong email format!");
        } else if (!/^\d{9}$/.test(contact)) {
            alert("Wrong Phone No. format!");
        } else {
            $('#tbl-body').append('<tr>')
                .append('<td>' + name + '</td>')
                .append('<td>' + email + '</td>')
                .append('<td>' + contact + '</td>')
                .append('<td>' + message + '</td>')
                .append('</tr>');
        }
    });
});
