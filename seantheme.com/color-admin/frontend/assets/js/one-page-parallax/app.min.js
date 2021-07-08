/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 5
Version: 5.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/frontend/one-page-parallax/
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

	$(window).on('resize', function() {
		$('#home').height($(window).height());
	});
};


/* 02. Handle Header Navigation State
------------------------------------------------ */
var handleHeaderNavigationState = function() {
	$(window).on('scroll load', function() {
		if ($('#header').attr('data-state-change') != 'disabled') {
			var totalScroll = $(window).scrollTop();
			var headerHeight = $('#header').height();
			if (totalScroll > headerHeight) {
				$('#header').addClass('navbar-sm');
			} else {
				$('#header').removeClass('navbar-sm');
			}
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
	$('#page-container').addClass('show');
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
						setTimeout(function() {
							$(targetElement).addClass('finishAnimated');
						}, 1500);
					}
				}
			});
		});
	});
};


/* 06. Handle Header Scroll To Action
------------------------------------------------ */
var handleHeaderScrollToAction = function() {
	$(document).on('click', '[data-click=scroll-to-target]', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var target = ($(this).attr('data-scroll-target')) ? $(this).attr('data-scroll-target') : '';
		var target = (!target && $(this).attr('href')) ? $(this).attr('href') : target;
		var fromHeader = $(this).closest('.header').length;
		var headerHeight = 50;
		$('html, body').animate({
			scrollTop: $(target).offset().top - headerHeight
		}, 500);

		var targetLi = $(this).closest('.nav-item');
		if ($(targetLi).hasClass('dropdown')) {
			if ($(targetLi).hasClass('open')) {
				$(targetLi).removeClass('open');
			} else {
				$(targetLi).addClass('open');
			}
		}
		if ($(window).width() < 769 && !$(targetLi).hasClass('dropdown') && fromHeader) {
			$('#header [data-toggle="collapse"]').trigger('click');
		}
	});
	$(document).click(function(e) {
		if (!e.isPropagationStopped() && $(window).width() > 768) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogQ29sb3IgQWRtaW4gLSBSZXNwb25zaXZlIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZSBidWlsZCB3aXRoIFR3aXR0ZXIgQm9vdHN0cmFwIDVcclxuVmVyc2lvbjogNS4wLjBcclxuQXV0aG9yOiBTZWFuIE5ndVxyXG5XZWJzaXRlOiBodHRwOi8vd3d3LnNlYW50aGVtZS5jb20vY29sb3ItYWRtaW4vZnJvbnRlbmQvb25lLXBhZ2UtcGFyYWxsYXgvXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgQVBQUyBDT05URU5UIFRBQkxFXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBcclxuICAgIDwhLS0gPT09PT09PT0gR0xPQkFMIFNDUklQVCBTRVRUSU5HID09PT09PT09IC0tPlxyXG4gICAgMDEuIEhhbmRsZSBIb21lIENvbnRlbnQgSGVpZ2h0XHJcbiAgICAwMi4gSGFuZGxlIEhlYWRlciBOYXZpZ2F0aW9uIFN0YXRlXHJcbiAgICAwMy4gSGFuZGxlIENvbW1hcyB0byBOdW1iZXJcclxuICAgIDA0LiBIYW5kbGUgUGFnZSBDb250YWluZXIgU2hvd1xyXG4gICAgMDUuIEhhbmRsZSBQYWdlIFNjcm9sbCBDb250ZW50IEFuaW1hdGlvblxyXG4gICAgMDYuIEhhbmRsZSBIZWFkZXIgU2Nyb2xsIFRvIEFjdGlvblxyXG4gICAgMDcuIEhhbmRsZSBUb29sdGlwIEFjdGl2YXRpb25cclxuICAgIDA4LiBIYW5kbGUgVGhlbWUgUGFuZWwgRXhwYW5kXHJcbiAgICAwOS4gSGFuZGxlIFRoZW1lIFBhZ2UgQ29udHJvbFxyXG4gICAgMTAuIEhhbmRsZSBQYXJvbGxlclxyXG5cdFxyXG4gICAgPCEtLSA9PT09PT09PSBBUFBMSUNBVElPTiBTRVRUSU5HID09PT09PT09IC0tPlxyXG4gICAgQXBwbGljYXRpb24gQ29udHJvbGxlclxyXG4qL1xyXG5cclxuXHJcblxyXG4vKiAwMS4gSGFuZGxlIEhvbWUgQ29udGVudCBIZWlnaHRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVIb21lQ29udGVudEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG5cdCQoJyNob21lJykuaGVpZ2h0KCQod2luZG93KS5oZWlnaHQoKSk7XHJcblxyXG5cdCQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjaG9tZScpLmhlaWdodCgkKHdpbmRvdykuaGVpZ2h0KCkpO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbi8qIDAyLiBIYW5kbGUgSGVhZGVyIE5hdmlnYXRpb24gU3RhdGVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVIZWFkZXJOYXZpZ2F0aW9uU3RhdGUgPSBmdW5jdGlvbigpIHtcclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCBsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoJCgnI2hlYWRlcicpLmF0dHIoJ2RhdGEtc3RhdGUtY2hhbmdlJykgIT0gJ2Rpc2FibGVkJykge1xyXG5cdFx0XHR2YXIgdG90YWxTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRcdHZhciBoZWFkZXJIZWlnaHQgPSAkKCcjaGVhZGVyJykuaGVpZ2h0KCk7XHJcblx0XHRcdGlmICh0b3RhbFNjcm9sbCA+IGhlYWRlckhlaWdodCkge1xyXG5cdFx0XHRcdCQoJyNoZWFkZXInKS5hZGRDbGFzcygnbmF2YmFyLXNtJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnI2hlYWRlcicpLnJlbW92ZUNsYXNzKCduYXZiYXItc20nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbi8qIDAzLiBIYW5kbGUgQ29tbWFzIHRvIE51bWJlclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZUFkZENvbW1hc1RvTnVtYmVyID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgXCIkMSxcIik7XHJcbn07XHJcblxyXG5cclxuLyogMDQuIEhhbmRsZSBQYWdlIENvbnRhaW5lciBTaG93XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG52YXIgaGFuZGxlUGFnZUNvbnRhaW5lclNob3cgPSBmdW5jdGlvbigpIHtcclxuXHQkKCcjcGFnZS1jb250YWluZXInKS5hZGRDbGFzcygnc2hvdycpO1xyXG59O1xyXG5cclxuXHJcbi8qIDA1LiBIYW5kbGUgUGFnZSBTY3JvbGwgQ29udGVudCBBbmltYXRpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVQYWdlU2Nyb2xsQ29udGVudEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdCQoJ1tkYXRhLXNjcm9sbHZpZXc9XCJ0cnVlXCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdHZhciBteUVsZW1lbnQgPSAkKHRoaXMpO1xyXG5cdFx0dmFyIGVsZW1lbnRXYXRjaGVyID0gc2Nyb2xsTW9uaXRvci5jcmVhdGUoIG15RWxlbWVudCwgNjAgKTtcclxuXHJcblx0XHRlbGVtZW50V2F0Y2hlci5lbnRlclZpZXdwb3J0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKG15RWxlbWVudCkuZmluZCgnW2RhdGEtYW5pbWF0aW9uPXRydWVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0QW5pbWF0aW9uID0gJCh0aGlzKS5hdHRyKCdkYXRhLWFuaW1hdGlvbi10eXBlJyk7XHJcblx0XHRcdFx0dmFyIHRhcmdldEVsZW1lbnQgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdGlmICghJCh0YXJnZXRFbGVtZW50KS5oYXNDbGFzcygnY29udGVudEFuaW1hdGVkJykpIHtcclxuXHRcdFx0XHRcdGlmICh0YXJnZXRBbmltYXRpb24gPT0gJ251bWJlcicpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGZpbmFsTnVtYmVyID0gcGFyc2VJbnQoJCh0YXJnZXRFbGVtZW50KS5hdHRyKCdkYXRhLWZpbmFsLW51bWJlcicpKTtcclxuXHRcdFx0XHRcdFx0JCh7YW5pbWF0ZU51bWJlcjogMH0pLmFuaW1hdGUoe2FuaW1hdGVOdW1iZXI6IGZpbmFsTnVtYmVyfSwge1xyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0XHRcdFx0XHRcdGVhc2luZzonc3dpbmcnLFxyXG5cdFx0XHRcdFx0XHRcdHN0ZXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGRpc3BsYXlOdW1iZXIgPSBoYW5kbGVBZGRDb21tYXNUb051bWJlcihNYXRoLmNlaWwodGhpcy5hbmltYXRlTnVtYmVyKSk7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRhcmdldEVsZW1lbnQpLnRleHQoZGlzcGxheU51bWJlcikuYWRkQ2xhc3MoJ2NvbnRlbnRBbmltYXRlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKHRhcmdldEFuaW1hdGlvbiArICcgY29udGVudEFuaW1hdGVkJyk7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0YXJnZXRFbGVtZW50KS5hZGRDbGFzcygnZmluaXNoQW5pbWF0ZWQnKTtcclxuXHRcdFx0XHRcdFx0fSwgMTUwMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbi8qIDA2LiBIYW5kbGUgSGVhZGVyIFNjcm9sbCBUbyBBY3Rpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVIZWFkZXJTY3JvbGxUb0FjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1zY3JvbGwtdG8tdGFyZ2V0XScsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR2YXIgdGFyZ2V0ID0gKCQodGhpcykuYXR0cignZGF0YS1zY3JvbGwtdGFyZ2V0JykpID8gJCh0aGlzKS5hdHRyKCdkYXRhLXNjcm9sbC10YXJnZXQnKSA6ICcnO1xyXG5cdFx0dmFyIHRhcmdldCA9ICghdGFyZ2V0ICYmICQodGhpcykuYXR0cignaHJlZicpKSA/ICQodGhpcykuYXR0cignaHJlZicpIDogdGFyZ2V0O1xyXG5cdFx0dmFyIGZyb21IZWFkZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5oZWFkZXInKS5sZW5ndGg7XHJcblx0XHR2YXIgaGVhZGVySGVpZ2h0ID0gNTA7XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogJCh0YXJnZXQpLm9mZnNldCgpLnRvcCAtIGhlYWRlckhlaWdodFxyXG5cdFx0fSwgNTAwKTtcclxuXHJcblx0XHR2YXIgdGFyZ2V0TGkgPSAkKHRoaXMpLmNsb3Nlc3QoJy5uYXYtaXRlbScpO1xyXG5cdFx0aWYgKCQodGFyZ2V0TGkpLmhhc0NsYXNzKCdkcm9wZG93bicpKSB7XHJcblx0XHRcdGlmICgkKHRhcmdldExpKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcblx0XHRcdFx0JCh0YXJnZXRMaSkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKHRhcmdldExpKS5hZGRDbGFzcygnb3BlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjkgJiYgISQodGFyZ2V0TGkpLmhhc0NsYXNzKCdkcm9wZG93bicpICYmIGZyb21IZWFkZXIpIHtcclxuXHRcdFx0JCgnI2hlYWRlciBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcclxuXHRcdFx0JCgnLmRyb3Bkb3duLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpOyBcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcblxyXG4vKiAwNy4gSGFuZGxlIFRvb2x0aXAgQWN0aXZhdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVRvb2x0aXBBY3RpdmF0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKCQoJ1tkYXRhLWJzLXRvZ2dsZT10b29sdGlwXScpLmxlbmd0aCAhPT0gMCkge1xyXG5cdFx0JCgnW2RhdGEtYnMtdG9nZ2xlPXRvb2x0aXBdJykudG9vbHRpcCgpO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKiAwOC4gSGFuZGxlIFRoZW1lIFBhbmVsIEV4cGFuZFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVRoZW1lUGFuZWxFeHBhbmQgPSBmdW5jdGlvbigpIHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJ0aGVtZS1wYW5lbC1leHBhbmRcIl0nLCBmdW5jdGlvbigpIHtcclxuXHR2YXIgdGFyZ2V0Q29udGFpbmVyID0gJy50aGVtZS1wYW5lbCc7XHJcblx0dmFyIHRhcmdldENsYXNzID0gJ2FjdGl2ZSc7XHJcblx0aWYgKCQodGFyZ2V0Q29udGFpbmVyKS5oYXNDbGFzcyh0YXJnZXRDbGFzcykpIHtcclxuXHRcdCQodGFyZ2V0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyh0YXJnZXRDbGFzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQodGFyZ2V0Q29udGFpbmVyKS5hZGRDbGFzcyh0YXJnZXRDbGFzcyk7XHJcblx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbi8qIDA5LiBIYW5kbGUgVGhlbWUgUGFnZSBDb250cm9sXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG52YXIgaGFuZGxlVGhlbWVQYWdlQ29udHJvbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0eXBlb2YgQ29va2llcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudGhlbWUtbGlzdCBbZGF0YS10aGVtZV0nLCBmdW5jdGlvbihlKSB7XHRcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgdGFyZ2V0VGhlbWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGhlbWUnKTtcclxuXHRcdFx0dmFyIHRhcmdldFRoZW1lRmlsZSA9ICQodGhpcykuYXR0cignZGF0YS10aGVtZS1maWxlJyk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCgnI3RoZW1lLWNzcy1saW5rJykubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0JCgnaGVhZCcpLmFwcGVuZCgnPGxpbmsgaHJlZj1cIicrIHRhcmdldFRoZW1lRmlsZSArJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpZD1cInRoZW1lLWNzcy1saW5rXCIgLz4nKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcjdGhlbWUtY3NzLWxpbmsnKS5hdHRyKCdocmVmJywgdGFyZ2V0VGhlbWVGaWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcudGhlbWUtbGlzdCBbZGF0YS10aGVtZV0nKS5ub3QodGhpcykuY2xvc2VzdCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdENvb2tpZXMuc2V0KCd0aGVtZScsICQodGhpcykuYXR0cignZGF0YS10aGVtZScpKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRpZiAoQ29va2llcy5nZXQoJ3RoZW1lJykpIHtcclxuXHRcdFx0aWYgKCQoJy50aGVtZS1saXN0JykubGVuZ3RoICE9PSAwKSB7XHJcblx0XHRcdFx0dmFyIHRhcmdldEVsbSA9ICcudGhlbWUtbGlzdCBbZGF0YS10aGVtZT1cIicrIENvb2tpZXMuZ2V0KCd0aGVtZScpICsnXCJdJztcclxuXHRcdFx0XHQkKHRhcmdldEVsbSkudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKiAxMC4gSGFuZGxlIFBhcm9sbGVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG52YXIgaGFuZGxlUGFyb2xsZXIgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodHlwZW9mICQuZm4ucGFyb2xsZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRpZiAoJCgnW2RhdGEtcGFyb2xsZXI9XCJ0cnVlXCJdJykubGVuZ3RoICE9PSAwKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBhcm9sbGVyPVwidHJ1ZVwiXScpLnBhcm9sbGVyKCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbi8qIEFwcGxpY2F0aW9uIENvbnRyb2xsZXJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0XHJcblx0cmV0dXJuIHtcclxuXHRcdC8vbWFpbiBmdW5jdGlvblxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRoYW5kbGVIb21lQ29udGVudEhlaWdodCgpO1xyXG5cdFx0XHRoYW5kbGVIZWFkZXJOYXZpZ2F0aW9uU3RhdGUoKTtcclxuXHRcdFx0aGFuZGxlUGFnZUNvbnRhaW5lclNob3coKTtcclxuXHRcdFx0aGFuZGxlUGFnZVNjcm9sbENvbnRlbnRBbmltYXRpb24oKTtcclxuXHRcdFx0aGFuZGxlSGVhZGVyU2Nyb2xsVG9BY3Rpb24oKTtcclxuXHRcdFx0aGFuZGxlVG9vbHRpcEFjdGl2YXRpb24oKTtcclxuXHRcdFx0aGFuZGxlVGhlbWVQYW5lbEV4cGFuZCgpO1xyXG5cdFx0XHRoYW5kbGVUaGVtZVBhZ2VDb250cm9sKCk7XHJcblx0XHRcdGhhbmRsZVBhcm9sbGVyKCk7XHJcblx0XHR9XHJcbiAgfTtcclxufSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0QXBwLmluaXQoKTtcclxufSk7Il19
