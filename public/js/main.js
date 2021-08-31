$(document).ready(function(){

    $('.nBtn,.table .eBtn').on('click',function(e){
		
		e.preventDefault();
		
		var href = $(this).attr('href');
        
		$.get(href,function(student,status){

				$('.forms #fullName').val(student.fullName);
				$('.forms #email').val(student.email);
				$('.forms #address').val(student.address);
                $('.forms #phone').val(student.phone);
			});
			
			$('.forms #editEmployeeModal').modal();
		/*var text = $(this).text();
		alert(text)
		if(text=='Edit'){
			$.get(href,function(student,status){

				$('.forms #fullName').val(student.fullName);
				$('.forms #email').val(student.email);
				$('.forms #address').val(student.address);
                $('.forms #phone').val(student.phone);
			});
			
			$('.forms #exampleModalLong').modal();
		
		}else{
			
			$('.forms #id').val(0);
			$('.forms #Eid').hide();
			$('.forms #first_name').val('');
			$('.forms #last_name').val('');
			$('.forms #email').val('');
			
			$('.forms #exampleModalLong').modal();
		}*/
		
	});
    
    $('.delBtn').on('click',function(e){
        e.preventDefault();
        const href = $(this).attr('href');
        $('#deleteModal #delRef').attr('href',href);
        const id = $(this).data('id');

        $('#deleteModal').modal();
    });
    
});