$(document).ready(function () {

	//check radio button

	$('.js-accardion-toggle').click(function () {
		$(this).toggleClass('is-active').next().toggleClass('is-active');
		return false;
	});

	// burger menu

	$("#js-burger-menu").click(function () {
		$(this).toggleClass('is-active').next().toggleClass('is-active');
		if ($("#js-burger-menu").hasClass("is-active")) {
			$("#js-nav-menu").addClass('is-active')
			$(".js-overflow").addClass('overflow-is-active')
		} else {
			$("#js-nav-menu").removeClass('is-active')
			$(".js-overflow").removeClass('overflow-is-active')
		}
	});
	$("#js-nav-menu").click((e) => {
		if (e.target.closest(".js-nav-link")) {
			$("#js-nav-menu").removeClass('is-active');
			$("#js-burger-menu").removeClass('is-active');
			$(".js-overflow").removeClass('overflow-is-active')
		}
	});

	//scroll
	function animationScroll() {
		let isScrolling = false;

		window.addEventListener("scroll", throttleScroll, false);

		function throttleScroll(e) {
			if (isScrolling == false) {
				window.requestAnimationFrame(function () {
					scrolling(e);
					isScrolling = false;
				});
			}
			isScrolling = true;
		}

		document.addEventListener("DOMContentLoaded", scrolling, false);

		let listItems = document.querySelectorAll("#mainContent");
		let spidometr = document.querySelector("#spidometr");


		function scrolling(e) {

			if (isPartiallyVisible(spidometr)) {
				spidometr.classList.add("animation-is-active");

			}
		}

		function isPartiallyVisible(el) {
			let elementBoundary = el.getBoundingClientRect();

			let top = elementBoundary.top;
			let bottom = elementBoundary.bottom;
			let height = elementBoundary.height;

			return ((top + height >= 0) && (height + window.innerHeight >= bottom));
		}

		// function isFullyVisible(el) {
		// 	let elementBoundary = el.getBoundingClientRect();

		// 	let top = elementBoundary.top;
		// 	let bottom = elementBoundary.bottom;

		// 	return ((top >= 0) && (bottom <= window.innerHeight));
		// }
	}

	// slick
	$(".slider-block--carousel .js-slick").slick({
		dots: true,
		slidesToShow: 2,
		prevArrow: $('button.slick-arrow--prev'),
		nextArrow: $('button.slick-arrow--next'),
		centerMode: false,
		responsive: [{
			breakpoint: 960,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}],
		// centerPadding: "15%",
		customPaging: function (slider, i) {
			var current = i + 1;
			current = current < 10 ? "0" + current : current;

			var total = slider.slideCount;
			total = total < 10 ? "0" + total : total;

			return (
				'<button type="button" role="button" tabindex="0" class="slick-dots-button">\
			<span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator"></span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
			);
		}
	});


	$(".js-fancybox, .fancybox").fancybox({
		// Options will go here
		iframe: {
			preload: false
		}
	});

	//timer

	function timer() {
		let date = new Date('jul 10 2022 23:59:59');

		function counts() {
			let now = new Date();
			let gap = date - now;

			let days = Math.floor(gap / 1000 / 60 / 60 / 24);
			let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
			let minutes = Math.floor(gap / 1000 / 60) % 60;
			let seconds = Math.floor(gap / 1000) % 60;
			
			document.getElementById('js-days').innerText = days;
			document.getElementById('js-days--action-xs').innerText = days;

			document.getElementById('h').innerText = hours;
			document.getElementById('m').innerText = minutes;
			document.getElementById('s').innerText = seconds;
		}

		counts();

		setInterval(counts, 1000);
	}


	animationScroll();
	timer();


});