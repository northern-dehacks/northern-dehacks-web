$('#newsletter-form').submit(function (_) {
    $.ajax({
        url: 'https://northerndehacks-server.herokuapp.com/newsletter',
        type: 'post',
        data: $('#newsletter-form').serialize(),
        success: function () {
            alert('Subscribed')
        },
        error: function () {
            alert('Error')
        }
    });
});

$('#contact-form').submit(function (_) {
    $.ajax({
        url: 'https://northerndehacks-server.herokuapp.com/contact",
        type: 'post',
        data: $('#contact-form').serialize(),
        success: function () {
            alert('Message Sent')
        },
        error: function () {
            alert('Error')
        }
    });
});