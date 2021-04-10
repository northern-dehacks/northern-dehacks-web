$('#newsletter-form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:8080/newsletter',
        type: 'post',
        data:$('#newsletter-form').serialize(),
        success:function(){
            alert('Subscribed')
        },
        error: function(){
          alert('Error')
        }
    });
});