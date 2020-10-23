$(document).ready(() => {

	$('#submit-button').on('click', function() {
		const burgerData = {			
			burger_name: $('#new_burger').val().trim()
		}
			$.ajax("/burger/add", {
				type: "POST",
				data: burgerData
			}).then( () => {
				console.log("Your burger is Ready!");
				location.reload();
			});
  	});	

	$('.devour-button').on('click', function() {
		const devourData = {
			id: $(this).attr('data-id')	
		}
			$.ajax("/burger/eat", {
				type: "POST",
				data: devourData
			}).then( () => {
				console.log("You just devoured your burger!");
				location.reload();
			});  
	});
	
	$('.restore-button').on('click', function() {
		const restoreData = {
			id: $(this).attr('data-id')	
		}
			$.ajax("/burger/restore", {
				type: "POST",
				data: restoreData
			}).then( () => {
				console.log("Ready for Seconds!");
				location.reload();
			});
	});	
});