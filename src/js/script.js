$(document).ready(function(){
	window.setInterval(function(){
		$(".osu-time").text(moment().tz("Australia/Melbourne").format("HH:mm:ss"));
		$(".shlocko-time").text(moment().tz("America/Los_Angeles").format("HH:mm:ss"));
	}, 1000);
});
