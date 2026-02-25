(function ($) {
	"use strict";

	$('.sidebar-button').on("click", function () {
		$(this).toggleClass('active');
	});

	const sidebarButton = document.querySelector('.sidebar-button');

	if (sidebarButton) {
		sidebarButton.addEventListener('click', () => {
			document.querySelector('.main-menu').classList.toggle('show-menu');
		});
	}

	$('.menu-close-btn').on("click", function () {
		$('.main-menu').removeClass('show-menu');
	});
	// sidebar
	$('.right-sidebar-button').on("click", function () {
		$('.right-sidebar-menu').addClass('show-right-menu');
	});
	$('.right-sidebar-close-btn').on("click", function () {
		$('.right-sidebar-menu').removeClass('show-right-menu');
	});
	$(document).on("click", ".close-btn", function (e) {
		e.preventDefault();
		e.stopPropagation();

		var input = $(this)
			.closest(".content")
			.siblings(".quantity-area")
			.find(".quantity__input");

		var value = parseInt(input.val(0), 10);
		// ✅ minimum 01
		if (value > 0) {
			value--;
			input.val(value.toString().padStart(2, "0"));
		}
	});
	jQuery('.dropdown-icon, .category-dropdown-icon').on('click', function () {
		jQuery(this).toggleClass('active').next('ul, .mega-menu, .mega-menu2').slideToggle();
		jQuery(this).parent().siblings().children('ul, .mega-menu, .mega-menu2').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});
	jQuery('.dropdown-icon2').on('click', function () {
		jQuery(this).toggleClass('active').next('.submenu-list').slideToggle();
		jQuery(this).parent().siblings().children('.submenu-list').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});
	//Cart Page Quantity button toggle
	$(".qty-btn").on("click", function (e) {
		e.stopPropagation();
		// Toggle "active" class for the current quantity button and its related elements
		$(this).next(".quantity-area").toggleClass("active");

		// Remove "active" class from other quantity buttons and related elements
		$(".quantity-area")
			.not($(this).next(".quantity-area"))
			.removeClass("active");
	});
	$(".quantity__plus").on("click", function (e) {
		e.preventDefault();
		var input = $(this).siblings(".quantity__input");
		var value = parseInt(input.val(), 10);
		value++;
		input.val(value.toString().padStart(2, "0"));
	});
	$(".quantity__minus").on("click", function (e) {
		e.preventDefault();
		var input = $(this).siblings(".quantity__input");
		var value = parseInt(input.val(), 10);

		if (value > 1) {
			value--;
			input.val(value.toString().padStart(2, "0"));
		}
	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".quantity-area").length) {
			// Remove "active" class from all quantity buttons and related elements
			$(".quantity-area").removeClass("active");
		}
	});

	// Home1 category Slider
	var swiper = new Swiper(".testimonial-slider", {
		slidesPerView: 5,
		speed: 1500,
		spaceBetween: 24,
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".category-slider-next",
			prevEl: ".category-slider-prev",
		},
		pagination: {
			el: ".banner-pagination",
			clickable: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			386: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1500: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1800: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});

}(jQuery));


