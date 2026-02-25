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
	let qtyInput = document.getElementById("qty");
	let summaryQty = document.getElementById("summaryQty");
	let subtotal = document.getElementById("subtotal");
	let total = document.getElementById("total");

	let pricePerProduct = 0;

	document.querySelector(".qty-plus").addEventListener("click", function () {
		qtyInput.value++;
		updateTotal();
	});

	document.querySelector(".qty-minus").addEventListener("click", function () {
		if (qtyInput.value > 1) {
			qtyInput.value--;
			updateTotal();
		}
	});

	function updateTotal() {
		let qty = parseInt(qtyInput.value);
		summaryQty.innerText = qty;
		subtotal.innerText = qty * pricePerProduct;
		total.innerText = qty * pricePerProduct;
	}
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
	// sticky header
	window.addEventListener("scroll", function () {
		const header = document.querySelector("header.header-area");
		if (header) {
			header.classList.toggle("sticky", window.scrollY > 0);
		}
	});

	// FancyBox Js
	$('[data-fancybox="gallery-01"]').fancybox({
		buttons: [
			"close",
		],
		loop: false,
		protect: true,
	});
	$('.video-player').fancybox({
		buttons: [
			"close",
		],
		loop: false,
		protect: true,
	});
	$(".category-btn").on("click", function (e) {
		e.stopPropagation();
		$(".category-menu-list").toggleClass("active");
	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".category-menu-list, .category-btn").length) {
			$(".category-menu-list").removeClass("active");
		}
	});

	// Menu Text Animation
	document.querySelectorAll('.main-menu > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');
	setTimeout(() => {
		var menu_text = document.querySelectorAll(".menu-text span")
		menu_text.forEach((item) => {
			var font_sizes = window.getComputedStyle(item, null);
			let font_size = font_sizes.getPropertyValue("font-size");
			let size_in_number = parseInt(font_size.replace("px", ""));
			let new_size = parseInt(size_in_number / 3)
			new_size = new_size + "px"
			if (item.innerHTML == " ") {
				item.style.width = new_size
			}
		})
	}, 1000)

	// Circular Text
	document.addEventListener("DOMContentLoaded", function () {
		const texts = document.querySelectorAll(".circular-text .text");

		texts.forEach((text) => {
			text.innerHTML = text.innerText
				.split("")
				.map((char, i) => `<span style="transform:rotate(${i * 13}deg)">${char}</span>`)
				.join("");
		});
	});
	$(".category-menu-close").on("click", function (e) {
		$(".category-menu-list").removeClass("active");
	});
	// Hover effect for service-list
	$(".service-list li").on("mouseenter", function () {
		var index = $(this).index();

		// Add active class to the corresponding image
		$(".service-card-wrap li").removeClass("show");
		$(".service-card-wrap li").eq(index).addClass("show");

		// Manage .prev class
		$(".service-list li").removeClass("prev");
		if (index > 0) {
			$(".service-list li")
				.eq(index - 1)
				.addClass("prev");
		}
	});
	$(".service-list li").on("mouseleave", function () {
		// Remove active class from all images when mouse leaves
		$(".service-card-wrap li").removeClass("show");
	});
	$(function () {
		const today = moment();

		$('input[name="inOut"]').daterangepicker(
			{
				singleDatePicker: true,
				startDate: today,        // 👉 আজকের date
				autoUpdateInput: true,   // 👉 input এ auto বসবে
				minYear: 2023,
				maxYear: 2025,
				locale: {
					format: "DD-MMM-YYYY",
				},
			}
		);

		$('input[name="daterange"]').daterangepicker(
			{
				opens: "left",
				startDate: today,        // 👉 start আজ থেকে
				endDate: today,
				minYear: 2023,
				maxYear: 2025,
				locale: {
					format: "DD-MMM",
				},
			}
		);
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
	// Payment Method
	$(function () {
		$(".choose-payment-method ul li").on("click", function () {
			$(".choose-payment-method ul li").removeClass("active"); // Remove active class from all list items
			if ($(this).hasClass("stripe")) {
				$("#StripePayment").show();
				$("#OfflinePayment").hide();
				$(this).addClass("active"); // Add active class to the clicked list item
			} else if ($(this).hasClass("paypal")) {
				$("#OfflinePayment").hide();
				$("#StripePayment").hide();
				$(this).addClass("active"); // Add active class to the clicked list item
			} else if ($(this).hasClass("offline")) {
				$("#OfflinePayment").show();
				$("#StripePayment").hide();
				$(this).addClass("active"); // Add active class to the clicked list item
			} else {
				$("#StripePayment").hide();
				$("#OfflinePayment").hide();
			}
		});
	});
	//Progress Bar
	document.querySelectorAll(".rating-progress-bar-wrap").forEach((wrap) => {
		const bar = wrap.querySelector(".rating-progress-bar-per");
		const percentDisplay = wrap.querySelector(".data-per");
		const target = parseFloat(bar.getAttribute("data-per")); // e.g., 90
		const duration = 1000; // in milliseconds

		let startTime = null;

		function animate(timestamp) {
			if (!startTime) startTime = timestamp;
			const elapsed = timestamp - startTime;
			const progress = Math.min(elapsed / duration, 1); // Ensure it doesn't go over 1

			const current = Math.floor(target * progress);
			bar.style.width = current + "%";
			percentDisplay.textContent = current + "%";

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		}

		requestAnimationFrame(animate);
	});
	// Serch Btn
	$(".search-btn").on("click", function (e) {

		let parent = $(this).parent();

		parent.find(".search-input").toggleClass("active");

		e.stopPropagation();

	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".search-input, .search-btn").length) {
			$(".search-input").removeClass("active");
		}
	});
	$(".search-close").on("click", function (e) {
		$(".search-input").removeClass("active");
	});
	// Home1 category Slider
	var swiper = new Swiper(".category-slider", {
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
				slidesPerView: 4,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 6,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
			1500: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
			1800: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
		},
	});

}(jQuery));


