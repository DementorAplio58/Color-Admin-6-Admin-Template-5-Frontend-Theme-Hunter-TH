/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 5
Version: 5.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
	----------------------------
	     APPS CONTENT TABLE
	----------------------------

	<!-- ======== GLOBAL SCRIPT SETTING ======== -->
	01. Handle Home Content Height
	02. Handle Header Navigation State
	03. Handle Commas to Number
	04. Handle Page Container Show
	05. Handle Page Scroll Content Animation
	06. Handle Header Scroll To Action
	07. Handle Tooltip Activation
	08. Handle Theme Panel Expand
	09. Handle Theme Page Control
	10. Handle Paroller

	<!-- ======== APPLICATION SETTING ======== -->
	Application Controller
*/



/* 01. Handle Home Content Height
------------------------------------------------ */
var handleHomeContentHeight = function() {
	$('#home').height($(window).height());
};


/* 02. Handle Header Navigation State
------------------------------------------------ */
var handleHeaderNavigationState = function() {
	$(window).on('scroll', function() {
		var totalScrollTop = $(window).scrollTop();
		if (totalScrollTop >= 50){
			$('#header').addClass('navbar-sm');
		} else {
			$('#header').removeClass('navbar-sm');
		}
	});
};


/* 03. Handle Commas to Number
------------------------------------------------ */
var handleAddCommasToNumber = function(value) {
	return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};


/* 04. Handle Page Container Show
------------------------------------------------ */
var handlePageContainerShow = function() {
	$('#page-container').addClass('in');
};


/* 05. Handle Page Scroll Content Animation
------------------------------------------------ */
var handlePageScrollContentAnimation = function() {
	$('[data-scrollview="true"]').each(function() {
		var myElement = $(this);
		var elementWatcher = scrollMonitor.create( myElement, 60 );

		elementWatcher.enterViewport(function() {
			$(myElement).find('[data-animation=true]').each(function() {
				var targetAnimation = $(this).attr('data-animation-type');
				var targetElement = $(this);
				if (!$(targetElement).hasClass('contentAnimated')) {
					if (targetAnimation == 'number') {
						var finalNumber = parseInt($(targetElement).attr('data-final-number'));
						$({animateNumber: 0}).animate({animateNumber: finalNumber}, {
							duration: 1000,
							easing:'swing',
							step: function() {
								var displayNumber = handleAddCommasToNumber(Math.ceil(this.animateNumber));
								$(targetElement).text(displayNumber).addClass('contentAnimated');
							}
						});
					} else {
						$(this).addClass(targetAnimation + ' contentAnimated');
					}
				}
			});
		});
	});
};


/* 06. Handle Header Scroll To Action
------------------------------------------------ */
var handleHeaderScrollToAction = function() {
	$('[data-click=scroll-to-target]').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var target = $(this).attr('href');
		var headerHeight = 50;
		
		$('html, body').animate({
			scrollTop: $(target).offset().top - headerHeight
		}, 500);

		if ($(this).attr('data-toggle') == 'dropdown') {
			var targetLi = $(this).closest('li.dropdown');
			if ($(targetLi).hasClass('open')) {
				$(targetLi).removeClass('open');
			} else {
				$(targetLi).addClass('open');
			}
		}
	});
	$(document).click(function(e) {
		if (!e.isPropagationStopped()) {
			$('.dropdown.open').removeClass('open'); 
		}
	});
};


/* 07. Handle Tooltip Activation
------------------------------------------------ */
var handleTooltipActivation = function() {
	if ($('[data-bs-toggle=tooltip]').length !== 0) {
		$('[data-bs-toggle=tooltip]').tooltip();
	}
};


/* 08. Handle Theme Panel Expand
------------------------------------------------ */
var handleThemePanelExpand = function() {
	$(document).on('click', '[data-click="theme-panel-expand"]', function() {
		var targetContainer = '.theme-panel';
		var targetClass = 'active';
		if ($(targetContainer).hasClass(targetClass)) {
			$(targetContainer).removeClass(targetClass);
		} else {
			$(targetContainer).addClass(targetClass);
		}
	});
};


/* 09. Handle Theme Page Control
------------------------------------------------ */
var handleThemePageControl = function() {
	if (typeof Cookies !== 'undefined') {
		$(document).on('click', '.theme-list [data-theme]', function(e) {	
			e.preventDefault();
			var targetTheme = $(this).attr('data-theme');
			var targetThemeFile = $(this).attr('data-theme-file');
			
			if ($('#theme-css-link').length === 0) {
				$('head').append('<link href="'+ targetThemeFile +'" rel="stylesheet" id="theme-css-link" />');
			} else {
				$('#theme-css-link').attr('href', targetThemeFile);
			}
			$('.theme-list [data-theme]').not(this).closest('li').removeClass('active');
			$(this).closest('li').addClass('active');
			Cookies.set('theme', $(this).attr('data-theme'));
		});
		
		if (Cookies.get('theme')) {
			if ($('.theme-list').length !== 0) {
				var targetElm = '.theme-list [data-theme="'+ Cookies.get('theme') +'"]';
				$(targetElm).trigger('click');
			}
		}
	}
};


/* 10. Handle Paroller
------------------------------------------------ */
var handleParoller = function() {
	if (typeof $.fn.paroller !== 'undefined') {
		if ($('[data-paroller="true"]').length !== 0) {
			$('[data-paroller="true"]').paroller();
		}
	}
};


/* Application Controller
------------------------------------------------ */
var App = function () {
	"use strict";
	
	return {
		//main function
		init: function () {
			handleHomeContentHeight();
			handleHeaderNavigationState();
			handlePageContainerShow();
			handlePageScrollContentAnimation();
			handleHeaderScrollToAction();
			handleTooltipActivation();
			handleThemePanelExpand();
			handleThemePageControl();
			handleParoller();
		}
	};
}();

$(document).ready(function() {
	App.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5UZW1wbGF0ZSBOYW1lOiBDb2xvciBBZG1pbiAtIFJlc3BvbnNpdmUgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlIGJ1aWxkIHdpdGggQm9vdHN0cmFwIDVcclxuVmVyc2lvbjogNS4wLjBcclxuQXV0aG9yOiBTZWFuIE5ndVxyXG5XZWJzaXRlOiBodHRwOi8vd3d3LnNlYW50aGVtZS5jb20vY29sb3ItYWRtaW4vXHJcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAgICAgQVBQUyBDT05URU5UIFRBQkxFXHJcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHQ8IS0tID09PT09PT09IEdMT0JBTCBTQ1JJUFQgU0VUVElORyA9PT09PT09PSAtLT5cclxuXHQwMS4gSGFuZGxlIEhvbWUgQ29udGVudCBIZWlnaHRcclxuXHQwMi4gSGFuZGxlIEhlYWRlciBOYXZpZ2F0aW9uIFN0YXRlXHJcblx0MDMuIEhhbmRsZSBDb21tYXMgdG8gTnVtYmVyXHJcblx0MDQuIEhhbmRsZSBQYWdlIENvbnRhaW5lciBTaG93XHJcblx0MDUuIEhhbmRsZSBQYWdlIFNjcm9sbCBDb250ZW50IEFuaW1hdGlvblxyXG5cdDA2LiBIYW5kbGUgSGVhZGVyIFNjcm9sbCBUbyBBY3Rpb25cclxuXHQwNy4gSGFuZGxlIFRvb2x0aXAgQWN0aXZhdGlvblxyXG5cdDA4LiBIYW5kbGUgVGhlbWUgUGFuZWwgRXhwYW5kXHJcblx0MDkuIEhhbmRsZSBUaGVtZSBQYWdlIENvbnRyb2xcclxuXHQxMC4gSGFuZGxlIFBhcm9sbGVyXHJcblxyXG5cdDwhLS0gPT09PT09PT0gQVBQTElDQVRJT04gU0VUVElORyA9PT09PT09PSAtLT5cclxuXHRBcHBsaWNhdGlvbiBDb250cm9sbGVyXHJcbiovXHJcblxyXG5cclxuXHJcbi8qIDAxLiBIYW5kbGUgSG9tZSBDb250ZW50IEhlaWdodFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZUhvbWVDb250ZW50SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcblx0JCgnI2hvbWUnKS5oZWlnaHQoJCh3aW5kb3cpLmhlaWdodCgpKTtcclxufTtcclxuXHJcblxyXG4vKiAwMi4gSGFuZGxlIEhlYWRlciBOYXZpZ2F0aW9uIFN0YXRlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG52YXIgaGFuZGxlSGVhZGVyTmF2aWdhdGlvblN0YXRlID0gZnVuY3Rpb24oKSB7XHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0b3RhbFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRcdGlmICh0b3RhbFNjcm9sbFRvcCA+PSA1MCl7XHJcblx0XHRcdCQoJyNoZWFkZXInKS5hZGRDbGFzcygnbmF2YmFyLXNtJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcjaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ25hdmJhci1zbScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbi8qIDAzLiBIYW5kbGUgQ29tbWFzIHRvIE51bWJlclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZUFkZENvbW1hc1RvTnVtYmVyID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHRyZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csIFwiJDEsXCIpO1xyXG59O1xyXG5cclxuXHJcbi8qIDA0LiBIYW5kbGUgUGFnZSBDb250YWluZXIgU2hvd1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVBhZ2VDb250YWluZXJTaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0JCgnI3BhZ2UtY29udGFpbmVyJykuYWRkQ2xhc3MoJ2luJyk7XHJcbn07XHJcblxyXG5cclxuLyogMDUuIEhhbmRsZSBQYWdlIFNjcm9sbCBDb250ZW50IEFuaW1hdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVBhZ2VTY3JvbGxDb250ZW50QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0JCgnW2RhdGEtc2Nyb2xsdmlldz1cInRydWVcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG15RWxlbWVudCA9ICQodGhpcyk7XHJcblx0XHR2YXIgZWxlbWVudFdhdGNoZXIgPSBzY3JvbGxNb25pdG9yLmNyZWF0ZSggbXlFbGVtZW50LCA2MCApO1xyXG5cclxuXHRcdGVsZW1lbnRXYXRjaGVyLmVudGVyVmlld3BvcnQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQobXlFbGVtZW50KS5maW5kKCdbZGF0YS1hbmltYXRpb249dHJ1ZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciB0YXJnZXRBbmltYXRpb24gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYW5pbWF0aW9uLXR5cGUnKTtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0RWxlbWVudCA9ICQodGhpcyk7XHJcblx0XHRcdFx0aWYgKCEkKHRhcmdldEVsZW1lbnQpLmhhc0NsYXNzKCdjb250ZW50QW5pbWF0ZWQnKSkge1xyXG5cdFx0XHRcdFx0aWYgKHRhcmdldEFuaW1hdGlvbiA9PSAnbnVtYmVyJykge1xyXG5cdFx0XHRcdFx0XHR2YXIgZmluYWxOdW1iZXIgPSBwYXJzZUludCgkKHRhcmdldEVsZW1lbnQpLmF0dHIoJ2RhdGEtZmluYWwtbnVtYmVyJykpO1xyXG5cdFx0XHRcdFx0XHQkKHthbmltYXRlTnVtYmVyOiAwfSkuYW5pbWF0ZSh7YW5pbWF0ZU51bWJlcjogZmluYWxOdW1iZXJ9LCB7XHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXHJcblx0XHRcdFx0XHRcdFx0ZWFzaW5nOidzd2luZycsXHJcblx0XHRcdFx0XHRcdFx0c3RlcDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZGlzcGxheU51bWJlciA9IGhhbmRsZUFkZENvbW1hc1RvTnVtYmVyKE1hdGguY2VpbCh0aGlzLmFuaW1hdGVOdW1iZXIpKTtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGFyZ2V0RWxlbWVudCkudGV4dChkaXNwbGF5TnVtYmVyKS5hZGRDbGFzcygnY29udGVudEFuaW1hdGVkJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3ModGFyZ2V0QW5pbWF0aW9uICsgJyBjb250ZW50QW5pbWF0ZWQnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5cclxuLyogMDYuIEhhbmRsZSBIZWFkZXIgU2Nyb2xsIFRvIEFjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZUhlYWRlclNjcm9sbFRvQWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0JCgnW2RhdGEtY2xpY2s9c2Nyb2xsLXRvLXRhcmdldF0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0dmFyIGhlYWRlckhlaWdodCA9IDUwO1xyXG5cdFx0XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogJCh0YXJnZXQpLm9mZnNldCgpLnRvcCAtIGhlYWRlckhlaWdodFxyXG5cdFx0fSwgNTAwKTtcclxuXHJcblx0XHRpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvZ2dsZScpID09ICdkcm9wZG93bicpIHtcclxuXHRcdFx0dmFyIHRhcmdldExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaS5kcm9wZG93bicpO1xyXG5cdFx0XHRpZiAoJCh0YXJnZXRMaSkuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG5cdFx0XHRcdCQodGFyZ2V0TGkpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0YXJnZXRMaSkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICghZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XHJcblx0XHRcdCQoJy5kcm9wZG93bi5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTsgXHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5cclxuLyogMDcuIEhhbmRsZSBUb29sdGlwIEFjdGl2YXRpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVUb29sdGlwQWN0aXZhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICgkKCdbZGF0YS1icy10b2dnbGU9dG9vbHRpcF0nKS5sZW5ndGggIT09IDApIHtcclxuXHRcdCQoJ1tkYXRhLWJzLXRvZ2dsZT10b29sdGlwXScpLnRvb2x0aXAoKTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuLyogMDguIEhhbmRsZSBUaGVtZSBQYW5lbCBFeHBhbmRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVUaGVtZVBhbmVsRXhwYW5kID0gZnVuY3Rpb24oKSB7XHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwidGhlbWUtcGFuZWwtZXhwYW5kXCJdJywgZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdGFyZ2V0Q29udGFpbmVyID0gJy50aGVtZS1wYW5lbCc7XHJcblx0XHR2YXIgdGFyZ2V0Q2xhc3MgPSAnYWN0aXZlJztcclxuXHRcdGlmICgkKHRhcmdldENvbnRhaW5lcikuaGFzQ2xhc3ModGFyZ2V0Q2xhc3MpKSB7XHJcblx0XHRcdCQodGFyZ2V0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyh0YXJnZXRDbGFzcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKHRhcmdldENvbnRhaW5lcikuYWRkQ2xhc3ModGFyZ2V0Q2xhc3MpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbi8qIDA5LiBIYW5kbGUgVGhlbWUgUGFnZSBDb250cm9sXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG52YXIgaGFuZGxlVGhlbWVQYWdlQ29udHJvbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0eXBlb2YgQ29va2llcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudGhlbWUtbGlzdCBbZGF0YS10aGVtZV0nLCBmdW5jdGlvbihlKSB7XHRcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgdGFyZ2V0VGhlbWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGhlbWUnKTtcclxuXHRcdFx0dmFyIHRhcmdldFRoZW1lRmlsZSA9ICQodGhpcykuYXR0cignZGF0YS10aGVtZS1maWxlJyk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCgnI3RoZW1lLWNzcy1saW5rJykubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0JCgnaGVhZCcpLmFwcGVuZCgnPGxpbmsgaHJlZj1cIicrIHRhcmdldFRoZW1lRmlsZSArJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpZD1cInRoZW1lLWNzcy1saW5rXCIgLz4nKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcjdGhlbWUtY3NzLWxpbmsnKS5hdHRyKCdocmVmJywgdGFyZ2V0VGhlbWVGaWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcudGhlbWUtbGlzdCBbZGF0YS10aGVtZV0nKS5ub3QodGhpcykuY2xvc2VzdCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdENvb2tpZXMuc2V0KCd0aGVtZScsICQodGhpcykuYXR0cignZGF0YS10aGVtZScpKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRpZiAoQ29va2llcy5nZXQoJ3RoZW1lJykpIHtcclxuXHRcdFx0aWYgKCQoJy50aGVtZS1saXN0JykubGVuZ3RoICE9PSAwKSB7XHJcblx0XHRcdFx0dmFyIHRhcmdldEVsbSA9ICcudGhlbWUtbGlzdCBbZGF0YS10aGVtZT1cIicrIENvb2tpZXMuZ2V0KCd0aGVtZScpICsnXCJdJztcclxuXHRcdFx0XHQkKHRhcmdldEVsbSkudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKiAxMC4gSGFuZGxlIFBhcm9sbGVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG52YXIgaGFuZGxlUGFyb2xsZXIgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodHlwZW9mICQuZm4ucGFyb2xsZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRpZiAoJCgnW2RhdGEtcGFyb2xsZXI9XCJ0cnVlXCJdJykubGVuZ3RoICE9PSAwKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBhcm9sbGVyPVwidHJ1ZVwiXScpLnBhcm9sbGVyKCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbi8qIEFwcGxpY2F0aW9uIENvbnRyb2xsZXJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0XHJcblx0cmV0dXJuIHtcclxuXHRcdC8vbWFpbiBmdW5jdGlvblxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRoYW5kbGVIb21lQ29udGVudEhlaWdodCgpO1xyXG5cdFx0XHRoYW5kbGVIZWFkZXJOYXZpZ2F0aW9uU3RhdGUoKTtcclxuXHRcdFx0aGFuZGxlUGFnZUNvbnRhaW5lclNob3coKTtcclxuXHRcdFx0aGFuZGxlUGFnZVNjcm9sbENvbnRlbnRBbmltYXRpb24oKTtcclxuXHRcdFx0aGFuZGxlSGVhZGVyU2Nyb2xsVG9BY3Rpb24oKTtcclxuXHRcdFx0aGFuZGxlVG9vbHRpcEFjdGl2YXRpb24oKTtcclxuXHRcdFx0aGFuZGxlVGhlbWVQYW5lbEV4cGFuZCgpO1xyXG5cdFx0XHRoYW5kbGVUaGVtZVBhZ2VDb250cm9sKCk7XHJcblx0XHRcdGhhbmRsZVBhcm9sbGVyKCk7XHJcblx0XHR9XHJcblx0fTtcclxufSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0QXBwLmluaXQoKTtcclxufSk7Il19
