const dog = 'stella';
$(document).ready(() => {
	$("#movie-submit").on("click", function(event) {
		event.preventDefault();

		if ($("#movie-name").val().length < 2 || $("#movie-rate").val() >= 10 || $("#movie-rate").val() <= 0) return;

		$(`<li class="movie-item">Title: [${$("#movie-name").val()}] Rating: [${$("#movie-rate").val()}]</li>`).appendTo('#movie-list');
	});
});
