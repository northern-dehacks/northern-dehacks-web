$('#newsletter-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: 'https://northerndehacks-server.herokuapp.com/newsletter',
        type: 'post',
        data: $('#newsletter-form').serialize(),
        success: function (_) {
            alert('Subscribed')
        },
        error: function (err) {
            console.log(err)
            alert('Error')
        }
    });
});

$('#contact-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: 'https://northerndehacks-server.herokuapp.com/contact',
        type: 'post',
        data: $('#contact-form').serialize(),
        success: function (_) {
            alert('Message Sent')
        },
        error: function (_) {
            alert('Error')
        }
    });
});