$(document).ready(function(){

    
    $('.delBtn').on('click',function(e){
        e.preventDefault();
        const href = $(this).attr('href');
        $('#deleteModal #delRef').attr('href',href);
        const id = $(this).data('id');

        $('#deleteModal').modal();
    });
    
});