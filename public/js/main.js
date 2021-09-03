$(document).ready(function(){

	
	let id = 0;

	// Activate tooltip
            $('[data-toggle="tooltip"]').tooltip();

            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function () {
                if (this.checked) {
                    checkbox.each(function () {
                        this.checked = true;
                    });
                } else {
                    checkbox.each(function () {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function () {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });
			
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