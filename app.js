const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://youtube-to-mp4.p.rapidapi.com/url=&title?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D115amzVdV44",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e64dcfbb5bmshe24852b4e925a16p1783f2jsn9bb53723b237",
		"X-RapidAPI-Host": "youtube-to-mp4.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});