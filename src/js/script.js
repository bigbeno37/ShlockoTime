$(document).ready(function(){
	window.setInterval(function(){
		$(".osu-time").text(moment().tz("Australia/Melbourne").format("hh:mm:ss"));
		$(".shlocko-time").text(moment().tz("America/Los_Angeles").format("hh:mm:ss"));
	}, 1000);
});