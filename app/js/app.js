import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)
import 'slick-carousel/slick/slick.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'chart.js/dist/Chart.bundle.min.js';

// viedo.js
// import 'video.js/core.js';
// import 'video.js/dist/video.min.js';

document.addEventListener('DOMContentLoaded', () => {

});


$(document).ready(function () {

	// filter
	$('#head-filter').on('input', function () {
		let movieItems = $('.grid-content-movie-posts');
		let soundItems = $('.grid-content-music-posts');
		movieItems.addClass('d-none')
		soundItems.addClass('d-none')

		let value = $(this).val();
		movieItems = $('.grid-content-movie-posts');
		soundItems = $('.grid-content-music-posts');
		let defaulItems = $('.recomended-playlist');

		movieItems.addClass('d-none')
		soundItems.addClass('d-none')

		if (value === '') {
			movieItems.addClass('d-none')
			soundItems.addClass('d-none')
			defaulItems.removeClass('d-none')
		} else if (value === 'mo') {
			movieItems.removeClass('d-none')
			soundItems.addClass('d-none')
			defaulItems.addClass('d-none')
		} else if (value === 'so' || value === 'mu') {
			movieItems.addClass('d-none')
			soundItems.removeClass('d-none')
			defaulItems.addClass('d-none')
		} else if (value === 'all') {
			movieItems.removeClass('d-none')
			soundItems.removeClass('d-none')
			defaulItems.addClass('d-none')
		} else {
			movieItems.addClass('d-none')
			soundItems.addClass('d-none')
			defaulItems.removeClass('d-none')
		}

	})

	// change
	$('#dn').click(function () {
		let mainMovie = $(".main-movie");
		let bigBtn = $('.big-btn');
		let arrowNext = $('.slick-next');
		let arrowPrev = $('.slick-prev');
		let sliderItemDesc = $('.slider-item-description');
		let commentSvgDBlue = $('.comment-svg-d-blue');
		let commentSvg = $('.comment-svg');
		let likeSvgDBlue = $('.like-svg-d-blue');
		let likeSvg = $('.like-svg');
		let pIconDBlue = $('.p-icon-d-blue');
		let pIcon = $('.p-icon');


		let darkThemeIcon = $('.dark-theme-icon');
		let whiteThemeIcon = $('.white-theme-icon');


		darkThemeIcon.toggleClass('d-none');
		whiteThemeIcon.toggleClass('d-none');

		mainMovie.toggleClass('d-none');
		bigBtn.toggleClass('d-none');
		arrowNext.toggleClass('slick-next-2');
		arrowPrev.toggleClass('slick-prev-2');
		sliderItemDesc.toggleClass('d-none');
		commentSvgDBlue.toggleClass('d-none');
		commentSvg.toggleClass('d-none');
		likeSvgDBlue.toggleClass('d-none');
		likeSvg.toggleClass('d-none');
		pIconDBlue.toggleClass('d-none');
		pIcon.toggleClass('d-none');
	})

	// head music movie toggle
	$('.toggle').click(function () {
		var switcher_val = $('#dn');
		if (switcher_val.is(':checked')) {
			$('body').attr('theme', 'light');
		} else {
			$('body').attr('theme', 'dark');
		}
	});

	// head dropdown-menu
	$('.custom-dropdown-menu-btn').click(function () {
		let dropdownMenuBtn = $('.custom-dropdown-menu');
		dropdownMenuBtn.toggleClass("d-none");
	})

	// profile page tabs change
	$('.tab-block').click(function () {
		let active_tab = $('.active-tab');
		active_tab.removeClass('active-tab');

		let tab_active = $('.tab-active');
		tab_active.removeClass('tab-active');

		let tab_id = $(this).attr('id');
		$('.tab-' + tab_id).addClass('tab-active');
		$('.tab-block-' + tab_id).addClass('active-tab');
	});

	// home page slider
	$('.slider-01').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		variableWidth: true,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// feed page slider
	$('.slider-02').slick({
		dots: false,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 6,
		variableWidth: false,
		slidesToScroll: 1,
	});

	// creator studio slider
	$('.slider-03').slick({
		dots: false,
		infinite: false,
		arrows: false,
		speed: 300,
		slidesToShow: 5,
		variableWidth: true,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// messanger
	$('#switch').click(function () {
		let chatList = $('.chat-list');
		let messegeList = $('.messege-list');
		chatList.toggleClass('ads');
		messegeList.toggleClass('ads');
	})

	// dots 
	$('#playlis-btn').click(function () {
		let dotsMenu = $('.dots-menu');
		dotsMenu.toggleClass('d-none')
	})
	$('#playlis-btn-2').click(function () {
		let dotsMenu = $('.dots-menu');
		dotsMenu.toggleClass('d-none')
	})
	$('.dots').click(function () {
		let dotsMenu = $(this).next();
		dotsMenu.toggleClass('d-none')
	})

	// new playlist
	$(".create-btn").click(function () {
		let addPlaylist = $('.new-playlist');
		addPlaylist.removeClass('d-none');
	});
	$('.new-playlist-close').click(function () {
		let addPlaylist = $('.new-playlist');
		addPlaylist.addClass('d-none');
	})
	// add to playlist
	$('.dots-menu-item.add').click(function () {
		let addToPlaylistr = $('.add-to-playlist');
		addToPlaylistr.removeClass('d-none');
		let dotsMenu = $('.dots-menu');
		dotsMenu.addClass('d-none');
	})
	$('.add-to-playlist-close').click(function () {
		let addToPlaylistr = $('.add-to-playlist');
		addToPlaylistr.addClass('d-none');
	})
	$('.add-to-playlist-item').click(function () {
		let addToPlaylistr = $('.add-to-playlist');
		addToPlaylistr.addClass('d-none');
	})
	// add song
	$(".dots-menu-item.add").click(function () {
		let addSong = $('.add-song');
		addSong.removeClass('d-none');
	});
	$('.add-song-close').click(function () {
		let addSong = $('.add-song');
		addSong.addClass('d-none');
	})

	// create post
	$('#create-post').click(function () {
		let addpost = $('.create-post')
		addpost.removeClass('d-none');
	});
	$('.close-btn').click(function () {
		let addPost = $('.create-post');
		addPost.addClass('d-none');
	})
	$('.to-post-movie').click(function () {
		let postMovie = $('.create-post-movie');
		postMovie.removeClass('d-none');
		let curent = $('.create-post-type');
		curent.addClass('d-none');
	})
	$('.prev-step').click(function () {
		let postMovie = $('.create-post-movie');
		postMovie.addClass('d-none');
		let addPost = $('.create-post-type');
		addPost.removeClass('d-none');
	})
	$('.prev-step-2').click(function () {
		let postMovie = $('.create-post-movie');
		postMovie.removeClass('d-none');
		let addPost = $('.create-post-description');
		addPost.addClass('d-none');
	})
	$('.next-step').click(function () {
		let postMovie = $('.create-post-movie');
		postMovie.addClass('d-none');
		let addPost = $('.create-post-description');
		addPost.removeClass('d-none');
	})

	// chart 
	// pie
	// let data = {
	// 	datasets: [{
	// 		data: [25, 75],
	// 		backgroundColor: [
	// 			"#ff70c8",
	// 			"#3B94F0"
	// 		],
	// 		hoverBackgroundColor: [
	// 			"#FF6384",
	// 			"#36A2EB",
	// 		]
	// 	}],
	// };
	// let ctx = $("#myChart");
	// let myChart = new Chart(ctx, {
	// 	type: 'pie',
	// 	data: data
	// });

	// video player
	// init
	const player = videojs('video-player-1', {
		controls: true,
		autoplay: false,
		preload: 'auto',
		loop: false
	});

	// or
	// player.autoplay('muted');

	// Pass a callback to a player's ready() method:
	// player.ready(function() {
	// 	this.addClass('my-example');
	//   });

	// Listen for the player's "ready" event:

});
