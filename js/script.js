$('#newsletter-form').submit(function(e){
    console.log('ok')
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:8080/newsletter',
        type: 'post',
        data:$('#newsletter-form').serialize(),
        success:function(){
            alert('Success')
        }
    });
});