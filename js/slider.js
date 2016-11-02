$(document).ready(function() {
	createGrid(16);

	$(".newGrid").on("click", function() {
		$(".grid").remove();

		var customize = prompt("How big do you want the new grid? Please enter a number");
		if (isNaN(customize)) {
			alert("Please enter a number!");
		}
		else {
			createGrid(customize);
		}
	});
});

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    
	$(".grid").width(400/x);
    $(".grid").height(400/x);

	$(".grid").mouseover(function() {
		$(this).css("background-color", "black");
	});
};


