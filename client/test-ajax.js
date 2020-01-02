$(document).ready(function(){
    // $("button").click(function(){
        $.ajax('http://localhost:3000/contact', {
            method: 'GET'
        })
            .done(() => {
                alert('success');
            })
            .fail(() => {
                alert('error');
            })
    // });
});