$(function(){
	console.log('Ready');

	//////////////////////////////////
	//       Get URL Params        //
	////////////////////////////////

	// getUrlParameter: function(sParam) {
	// 	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	// 		sURLVariables = sPageURL.split('&'),
	// 		sParameterName,
	// 		i;
	//
	// 	for (i = 0; i < sURLVariables.length; i++) {
	// 		sParameterName = sURLVariables[i].split('=');
	//
	// 		if (sParameterName[0] === sParam) {
	// 			return sParameterName[1] === undefined ? true : sParameterName[1];
	// 		}
	// 	}
	// },

	//////////////////////////////////
	//   Call Ajax Api Instagram   //
	////////////////////////////////

	// var data = [];
	// var apiKey = "6041196711.1677ed0.d934d0ca9a8342428e486f60c4557711";
	//
	// $.ajax({
	// 	  url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + apiKey,
	// 	  dataType: 'jsonp',
	// }).done(function(e) {
	// 	console.log(e.data);
	// 	for (var i = 0; i < e.data.length; i++) {
	// 		var el = {
	// 			'img': e.data[i].images.standard_resolution,
	// 			'like': e.data[i].likes.count,
	// 			'caption': e.data[i].caption,
	// 			'createdTime': e.data[i].created_time,
	// 			'tags': e.data[i].tags
	// 		};
	// 		data.push(el)
	// 	}
	// 	for (var i = 0; i < data.length; i++) {
	// 		if(data[i].caption != null){
	// 			$('.images_instagram').append('<img src="'+data[i].img.url+'"/> <p>'+data[i].caption.text+'</p>');
	// 		}else{
	// 			$('.images_instagram').append('<img src="'+data[i].img.url+'"/>');
	// 		}
	// 	}
	// });

	//////////////////////////////////
	//   Share Function Facebook   //
	////////////////////////////////

	// share: function(e) {
    //         e.preventDefault();
    //         FB.ui({
    //             method: 'share',
    //             display: 'popup',
    //             href: window.location.href
    //         }, function(response){});
    //         return false;
    //     },

	//////////////////////////////////
	//      onResize Function      //
	////////////////////////////////

	// onResize: function(e) {
    //         if ( !this.onMobile && $(window).innerWidth() <= 768 ) {
    //             //console.log("desktop to mobile");
    //         } else if (this.onMobile && $(window).innerWidth() > 768)  {
    //             //console.log("mobile to desktop");
    //         }
    //         this.onMobile = $(window).innerWidth() <= 768;
    //     },

	//////////////////////////////////
	//         Bash Profile        //
	////////////////////////////////

	// source ~/.profile
	// export PS1="\[\033[36m\]\u\[\033[m\]@\[\033[32m\]\h:\[\033[33;1m\]\w\[\033[m\]\$
	// export CLICOLOR=1
	// export LSCOLORS=ExFxBxDxCxegedabagacad
	// alias ls='ls -GFh'
	// echo "Welcome, Valentin"

	// #############################
	// ## FINDER PATH TO TERMINAL ##
	// #############################
	// cdf () {
	//   finderPath=`osascript -e 'tell application "Finder"
	//                                try
	//                                    set currentFolder to (folder of the front wi$
	//                                on error
	//                                    set currentFolder to (path to desktop folder$
	//                                end try
	//                                POSIX path of currentFolder
	//                             end tell'`;
	//   cd "$finderPath"
	// }
