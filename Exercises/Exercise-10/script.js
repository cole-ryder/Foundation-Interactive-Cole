$(document).ready(function(){
	$('.blue-border').draggable();
	$('.drop').droppable({
		drop:function(){
			$(".change").addClass("after"); 
		}
	});
});



