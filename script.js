$(document).ready(() => {
	$("#movie-submit").on("click", (event) => {
		event.preventDefault();

		if ($("#movie-name").val().length < 2 || $("#movie-rate").val() >= 10 || $("#movie-rate").val() <= 0) return;

		$(`<li class="movie-item">
		Title: [${$("#movie-name").val()}] Rating: [${$("#movie-rate").val()}]
		<button class="movie-remove">REMOVE</button>
		</li>`).appendTo('#movie-list');
	});

	$("#movie-list").on("click", (event) => {
		event.preventDefault();
		if ($(event.target).attr('class') === "movie-remove")
			$(event.target.parentElement).remove();
	})
});
