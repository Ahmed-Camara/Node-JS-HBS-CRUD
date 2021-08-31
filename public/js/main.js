$(document).ready(function(){

    
    $('.aBtn, .eBtn').on('click',function(e){
        e.preventDefault();
        const href = $(this).attr('href');
        alert('event');
    });
    
});