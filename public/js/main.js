$(document).ready(function(){

	
	let id = 0;
    $('.nBtn,.table .eBtn').on('click',function(e){
		
		e.preventDefault();
		
		var href = $(this).attr('href');
        
		$.get(href,function(student,status){
			$('#editEmployeeModal #fullName').val(student.data.Full_name);
			$('#editEmployeeModal #email').val(student.data.Email);
			$('#editEmployeeModal #address').val(student.data.Address);
			$('#editEmployeeModal #phone').val(student.data.Phone);
			id = student.data.id;
			
		});

		
		$('#editEmployeeModal').modal();
		
	});

	
    
    $('.delBtn').on('click',function(e){
        e.preventDefault();
        const href = $(this).attr('href');
        $('#deleteModal #delRef').attr('href',href);
        const id = $(this).data('id');

        $('#deleteModal').modal();
    });


	$('#uBtn').on('click',function(e){
		e.preventDefault();

		$('#updateForm').attr('action',`/student/update/${id}`).submit();
	});
    
});