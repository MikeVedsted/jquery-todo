$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//CLICK X TO REMOVE
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut("500ms", function(){
		$(this).remove();		
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var newToDo = $(this).val();
		$(this).val(""); 
		$("ul").append("<li>"+"<span><i class='fa fa-trash'></i></span>"+newToDo+"</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});