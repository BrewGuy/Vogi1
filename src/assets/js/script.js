$(document).ready(function () {
	$(document).on('opened', '[data-reveal]', function() {
        $('#youtube').attr('src','video.mp4');
    });

    $(document).on('closed', '[data-reveal]', function() {

    });
});