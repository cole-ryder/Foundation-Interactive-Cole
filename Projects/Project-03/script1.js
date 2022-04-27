$(document).ready(function(){
	$('.littlewizard').draggable();
	$('.drop').droppable({
		drop:function(){
			$(".change").addClass("after"); 
		}
	});
});



