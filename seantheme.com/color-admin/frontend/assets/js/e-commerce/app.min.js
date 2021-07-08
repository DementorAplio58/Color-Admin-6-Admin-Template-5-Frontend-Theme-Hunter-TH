/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 5
Version: 5.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
	----------------------------
		APPS CONTENT TABLE
	----------------------------

	<!-- ======== GLOBAL SCRIPT SETTING ======== -->
	01. Handle Fixed Header Option
	02. Handle Page Container Show
	03. Handle Tooltip & Popover Activation
	04. Handle Theme Panel Expand
	05. Handle Theme Page Control
	06. Handle Payment Type Selection
	07. Handle Checkout Qty Control
	08. Handle Product Image
	09. Handle Paroller
	10. Handle Check Bootstrap Version

	<!-- ======== APPLICATION SETTING ======== -->
	Application Controller
*/


/* 01. Handle Fixed Header Option
------------------------------------------------ */
var handleHeaderFixedTop = function() {
	if ($('#header[data-fixed-top="true"]').length !== 0) {
		var targetScrollTop = $('#top-nav').height();
		var targetPaddingTop = $('#header').height();
		$(window).on('scroll', function() {
			if ($(window).scrollTop() >= targetScrollTop) {
				$('body').css('padding-top', targetPaddingTop);
				$('#header').addClass('header-fixed');
			} else {
				$('#header').removeClass('header-fixed');
				$('body').css('padding-top', '0');
			}
		});
	}
};


/* 02. Handle Page Container Show
------------------------------------------------ */
var handlePageContainerShow = function() {
	"use strict";

	var hideClass = '';
	var showClass = '';
	var removeClass = '';
	var bootstrapVersion = handleCheckBootstrapVersion();

	if (bootstrapVersion >= 3 && bootstrapVersion < 4) {
		hideClass = 'hide';
		showClass = 'in';
	} else if (bootstrapVersion >= 4 && bootstrapVersion < 5) {
		hideClass = 'd-none';
		showClass = 'show';
	}
	$('#page-container').addClass(showClass);
};


/* 03. Handle Tooltip & Popover Activation
------------------------------------------------ */
var handleTooltipPopoverActivation = function() {
	if ($('[data-bs-toggle=tooltip]').length !== 0) {
		$('[data-bs-toggle=tooltip]').tooltip();
	}
	if ($('[data-bs-toggle=popover]').length !== 0) {
		$('[data-bs-toggle=popover]').popover();
	}
};


/* 04. Handle Theme Panel Expand
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


/* 05. Handle Theme Page Control
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


/* 06. Handle Payment Type Selection
------------------------------------------------ */
var handlePaymentTypeSelection = function() {
	$(document).on('click', '[data-click="set-payment"]', function(e) {
		e.preventDefault();
		var targetLi = $(this).closest('li');
		var targetValue = $(this).attr('data-value');
		
		$('[data-click="set-payment"]').closest('li').not(targetLi).removeClass('active');
		$('[data-id="payment-type"]').val(targetValue);
		$(targetLi).addClass('active');
	});
};


/* 07. Handle Checkout Qty Control
------------------------------------------------ */
var handleQtyControl = function() {
	$(document).on('click', '[data-click="increase-qty"]', function(e) {
		e.preventDefault();
		var targetInput = $(this).attr('data-target');
		var targetValue = parseInt($(targetInput).val()) + 1;  
		
		$(targetInput).val(targetValue);
	});
	$('[data-click="decrease-qty"]').click(function(e) {
		e.preventDefault();
		var targetInput = $(this).attr('data-target');
		var targetValue = parseInt($(targetInput).val()) - 1;  
		    targetValue = (targetValue < 0) ? 0 : targetValue;
		
		$(targetInput).val(targetValue);
	});
};


/* 08. Handle Product Image
------------------------------------------------ */
var handleProductImage = function() {
	$(document).on('click', '[data-click="show-main-image"]', function(e) {
		e.preventDefault();

		var targetContainer = '[data-id="main-image"]';
		var targetImage = '<img src="'+ $(this).attr('data-url') +'" />';
		var targetLi = $(this).closest('li');

		$(targetContainer).html(targetImage);
		$(targetLi).addClass('active');
		$('[data-click="show-main-image"]').closest('li').not(targetLi).removeClass('active');
	});
};


/* 09. Handle Paroller
------------------------------------------------ */
var handleParoller = function() {
	if (typeof $.fn.paroller !== 'undefined') {
		if ($('[data-paroller="true"]').length !== 0) {
			$('[data-paroller="true"]').paroller();
		}
	}
};


/* 10. Handle Check Bootstrap Version
------------------------------------------------ */
var handleCheckBootstrapVersion = function() {
	return parseInt($.fn.tooltip.Constructor.VERSION);
};


/* Application Controller
------------------------------------------------ */
var App = function () {
	"use strict";
	
	return {
		//main function
		init: function () {
			handleHeaderFixedTop();
			handlePageContainerShow();
			handleTooltipPopoverActivation();
			handleThemePanelExpand();
			handleThemePageControl();
			handlePaymentTypeSelection();
			handleQtyControl();
			handleProductImage();
			handleParoller();
		}
	};
}();

$(document).ready(function() {
	App.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogQ29sb3IgQWRtaW4gLSBSZXNwb25zaXZlIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZSBidWlsZCB3aXRoIEJvb3RzdHJhcCA1XHJcblZlcnNpb246IDUuMC4wXHJcbkF1dGhvcjogU2VhbiBOZ3VcclxuV2Vic2l0ZTogaHR0cDovL3d3dy5zZWFudGhlbWUuY29tL2NvbG9yLWFkbWluL1xyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdEFQUFMgQ09OVEVOVCBUQUJMRVxyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0PCEtLSA9PT09PT09PSBHTE9CQUwgU0NSSVBUIFNFVFRJTkcgPT09PT09PT0gLS0+XHJcblx0MDEuIEhhbmRsZSBGaXhlZCBIZWFkZXIgT3B0aW9uXHJcblx0MDIuIEhhbmRsZSBQYWdlIENvbnRhaW5lciBTaG93XHJcblx0MDMuIEhhbmRsZSBUb29sdGlwICYgUG9wb3ZlciBBY3RpdmF0aW9uXHJcblx0MDQuIEhhbmRsZSBUaGVtZSBQYW5lbCBFeHBhbmRcclxuXHQwNS4gSGFuZGxlIFRoZW1lIFBhZ2UgQ29udHJvbFxyXG5cdDA2LiBIYW5kbGUgUGF5bWVudCBUeXBlIFNlbGVjdGlvblxyXG5cdDA3LiBIYW5kbGUgQ2hlY2tvdXQgUXR5IENvbnRyb2xcclxuXHQwOC4gSGFuZGxlIFByb2R1Y3QgSW1hZ2VcclxuXHQwOS4gSGFuZGxlIFBhcm9sbGVyXHJcblx0MTAuIEhhbmRsZSBDaGVjayBCb290c3RyYXAgVmVyc2lvblxyXG5cclxuXHQ8IS0tID09PT09PT09IEFQUExJQ0FUSU9OIFNFVFRJTkcgPT09PT09PT0gLS0+XHJcblx0QXBwbGljYXRpb24gQ29udHJvbGxlclxyXG4qL1xyXG5cclxuXHJcbi8qIDAxLiBIYW5kbGUgRml4ZWQgSGVhZGVyIE9wdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZUhlYWRlckZpeGVkVG9wID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKCQoJyNoZWFkZXJbZGF0YS1maXhlZC10b3A9XCJ0cnVlXCJdJykubGVuZ3RoICE9PSAwKSB7XHJcblx0XHR2YXIgdGFyZ2V0U2Nyb2xsVG9wID0gJCgnI3RvcC1uYXYnKS5oZWlnaHQoKTtcclxuXHRcdHZhciB0YXJnZXRQYWRkaW5nVG9wID0gJCgnI2hlYWRlcicpLmhlaWdodCgpO1xyXG5cdFx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSB0YXJnZXRTY3JvbGxUb3ApIHtcclxuXHRcdFx0XHQkKCdib2R5JykuY3NzKCdwYWRkaW5nLXRvcCcsIHRhcmdldFBhZGRpbmdUb3ApO1xyXG5cdFx0XHRcdCQoJyNoZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyLWZpeGVkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnI2hlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItZml4ZWQnKTtcclxuXHRcdFx0XHQkKCdib2R5JykuY3NzKCdwYWRkaW5nLXRvcCcsICcwJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKiAwMi4gSGFuZGxlIFBhZ2UgQ29udGFpbmVyIFNob3dcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVQYWdlQ29udGFpbmVyU2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHR2YXIgaGlkZUNsYXNzID0gJyc7XHJcblx0dmFyIHNob3dDbGFzcyA9ICcnO1xyXG5cdHZhciByZW1vdmVDbGFzcyA9ICcnO1xyXG5cdHZhciBib290c3RyYXBWZXJzaW9uID0gaGFuZGxlQ2hlY2tCb290c3RyYXBWZXJzaW9uKCk7XHJcblxyXG5cdGlmIChib290c3RyYXBWZXJzaW9uID49IDMgJiYgYm9vdHN0cmFwVmVyc2lvbiA8IDQpIHtcclxuXHRcdGhpZGVDbGFzcyA9ICdoaWRlJztcclxuXHRcdHNob3dDbGFzcyA9ICdpbic7XHJcblx0fSBlbHNlIGlmIChib290c3RyYXBWZXJzaW9uID49IDQgJiYgYm9vdHN0cmFwVmVyc2lvbiA8IDUpIHtcclxuXHRcdGhpZGVDbGFzcyA9ICdkLW5vbmUnO1xyXG5cdFx0c2hvd0NsYXNzID0gJ3Nob3cnO1xyXG5cdH1cclxuXHQkKCcjcGFnZS1jb250YWluZXInKS5hZGRDbGFzcyhzaG93Q2xhc3MpO1xyXG59O1xyXG5cclxuXHJcbi8qIDAzLiBIYW5kbGUgVG9vbHRpcCAmIFBvcG92ZXIgQWN0aXZhdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVRvb2x0aXBQb3BvdmVyQWN0aXZhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICgkKCdbZGF0YS1icy10b2dnbGU9dG9vbHRpcF0nKS5sZW5ndGggIT09IDApIHtcclxuXHRcdCQoJ1tkYXRhLWJzLXRvZ2dsZT10b29sdGlwXScpLnRvb2x0aXAoKTtcclxuXHR9XHJcblx0aWYgKCQoJ1tkYXRhLWJzLXRvZ2dsZT1wb3BvdmVyXScpLmxlbmd0aCAhPT0gMCkge1xyXG5cdFx0JCgnW2RhdGEtYnMtdG9nZ2xlPXBvcG92ZXJdJykucG9wb3ZlcigpO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKiAwNC4gSGFuZGxlIFRoZW1lIFBhbmVsIEV4cGFuZFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVRoZW1lUGFuZWxFeHBhbmQgPSBmdW5jdGlvbigpIHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJ0aGVtZS1wYW5lbC1leHBhbmRcIl0nLCBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0YXJnZXRDb250YWluZXIgPSAnLnRoZW1lLXBhbmVsJztcclxuXHRcdHZhciB0YXJnZXRDbGFzcyA9ICdhY3RpdmUnO1xyXG5cdFx0aWYgKCQodGFyZ2V0Q29udGFpbmVyKS5oYXNDbGFzcyh0YXJnZXRDbGFzcykpIHtcclxuXHRcdFx0JCh0YXJnZXRDb250YWluZXIpLnJlbW92ZUNsYXNzKHRhcmdldENsYXNzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQodGFyZ2V0Q29udGFpbmVyKS5hZGRDbGFzcyh0YXJnZXRDbGFzcyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5cclxuLyogMDUuIEhhbmRsZSBUaGVtZSBQYWdlIENvbnRyb2xcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVUaGVtZVBhZ2VDb250cm9sID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHR5cGVvZiBDb29raWVzICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50aGVtZS1saXN0IFtkYXRhLXRoZW1lXScsIGZ1bmN0aW9uKGUpIHtcdFxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHZhciB0YXJnZXRUaGVtZSA9ICQodGhpcykuYXR0cignZGF0YS10aGVtZScpO1xyXG5cdFx0XHR2YXIgdGFyZ2V0VGhlbWVGaWxlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRoZW1lLWZpbGUnKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKCcjdGhlbWUtY3NzLWxpbmsnKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHQkKCdoZWFkJykuYXBwZW5kKCc8bGluayBocmVmPVwiJysgdGFyZ2V0VGhlbWVGaWxlICsnXCIgcmVsPVwic3R5bGVzaGVldFwiIGlkPVwidGhlbWUtY3NzLWxpbmtcIiAvPicpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoJyN0aGVtZS1jc3MtbGluaycpLmF0dHIoJ2hyZWYnLCB0YXJnZXRUaGVtZUZpbGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCQoJy50aGVtZS1saXN0IFtkYXRhLXRoZW1lXScpLm5vdCh0aGlzKS5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0Q29va2llcy5zZXQoJ3RoZW1lJywgJCh0aGlzKS5hdHRyKCdkYXRhLXRoZW1lJykpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGlmIChDb29raWVzLmdldCgndGhlbWUnKSkge1xyXG5cdFx0XHRpZiAoJCgnLnRoZW1lLWxpc3QnKS5sZW5ndGggIT09IDApIHtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0RWxtID0gJy50aGVtZS1saXN0IFtkYXRhLXRoZW1lPVwiJysgQ29va2llcy5nZXQoJ3RoZW1lJykgKydcIl0nO1xyXG5cdFx0XHRcdCQodGFyZ2V0RWxtKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbi8qIDA2LiBIYW5kbGUgUGF5bWVudCBUeXBlIFNlbGVjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVBheW1lbnRUeXBlU2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwic2V0LXBheW1lbnRcIl0nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR2YXIgdGFyZ2V0TGkgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJyk7XHJcblx0XHR2YXIgdGFyZ2V0VmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKTtcclxuXHRcdFxyXG5cdFx0JCgnW2RhdGEtY2xpY2s9XCJzZXQtcGF5bWVudFwiXScpLmNsb3Nlc3QoJ2xpJykubm90KHRhcmdldExpKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCdbZGF0YS1pZD1cInBheW1lbnQtdHlwZVwiXScpLnZhbCh0YXJnZXRWYWx1ZSk7XHJcblx0XHQkKHRhcmdldExpKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5cclxuLyogMDcuIEhhbmRsZSBDaGVja291dCBRdHkgQ29udHJvbFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVF0eUNvbnRyb2wgPSBmdW5jdGlvbigpIHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJpbmNyZWFzZS1xdHlcIl0nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR2YXIgdGFyZ2V0SW5wdXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XHJcblx0XHR2YXIgdGFyZ2V0VmFsdWUgPSBwYXJzZUludCgkKHRhcmdldElucHV0KS52YWwoKSkgKyAxOyAgXHJcblx0XHRcclxuXHRcdCQodGFyZ2V0SW5wdXQpLnZhbCh0YXJnZXRWYWx1ZSk7XHJcblx0fSk7XHJcblx0JCgnW2RhdGEtY2xpY2s9XCJkZWNyZWFzZS1xdHlcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR2YXIgdGFyZ2V0SW5wdXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XHJcblx0XHR2YXIgdGFyZ2V0VmFsdWUgPSBwYXJzZUludCgkKHRhcmdldElucHV0KS52YWwoKSkgLSAxOyAgXHJcblx0XHQgICAgdGFyZ2V0VmFsdWUgPSAodGFyZ2V0VmFsdWUgPCAwKSA/IDAgOiB0YXJnZXRWYWx1ZTtcclxuXHRcdFxyXG5cdFx0JCh0YXJnZXRJbnB1dCkudmFsKHRhcmdldFZhbHVlKTtcclxuXHR9KTtcclxufTtcclxuXHJcblxyXG4vKiAwOC4gSGFuZGxlIFByb2R1Y3QgSW1hZ2VcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVQcm9kdWN0SW1hZ2UgPSBmdW5jdGlvbigpIHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJzaG93LW1haW4taW1hZ2VcIl0nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0dmFyIHRhcmdldENvbnRhaW5lciA9ICdbZGF0YS1pZD1cIm1haW4taW1hZ2VcIl0nO1xyXG5cdFx0dmFyIHRhcmdldEltYWdlID0gJzxpbWcgc3JjPVwiJysgJCh0aGlzKS5hdHRyKCdkYXRhLXVybCcpICsnXCIgLz4nO1xyXG5cdFx0dmFyIHRhcmdldExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xyXG5cclxuXHRcdCQodGFyZ2V0Q29udGFpbmVyKS5odG1sKHRhcmdldEltYWdlKTtcclxuXHRcdCQodGFyZ2V0TGkpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJ1tkYXRhLWNsaWNrPVwic2hvdy1tYWluLWltYWdlXCJdJykuY2xvc2VzdCgnbGknKS5ub3QodGFyZ2V0TGkpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxufTtcclxuXHJcblxyXG4vKiAwOS4gSGFuZGxlIFBhcm9sbGVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG52YXIgaGFuZGxlUGFyb2xsZXIgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodHlwZW9mICQuZm4ucGFyb2xsZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRpZiAoJCgnW2RhdGEtcGFyb2xsZXI9XCJ0cnVlXCJdJykubGVuZ3RoICE9PSAwKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBhcm9sbGVyPVwidHJ1ZVwiXScpLnBhcm9sbGVyKCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbi8qIDEwLiBIYW5kbGUgQ2hlY2sgQm9vdHN0cmFwIFZlcnNpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVDaGVja0Jvb3RzdHJhcFZlcnNpb24gPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gcGFyc2VJbnQoJC5mbi50b29sdGlwLkNvbnN0cnVjdG9yLlZFUlNJT04pO1xyXG59O1xyXG5cclxuXHJcbi8qIEFwcGxpY2F0aW9uIENvbnRyb2xsZXJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0XHJcblx0cmV0dXJuIHtcclxuXHRcdC8vbWFpbiBmdW5jdGlvblxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRoYW5kbGVIZWFkZXJGaXhlZFRvcCgpO1xyXG5cdFx0XHRoYW5kbGVQYWdlQ29udGFpbmVyU2hvdygpO1xyXG5cdFx0XHRoYW5kbGVUb29sdGlwUG9wb3ZlckFjdGl2YXRpb24oKTtcclxuXHRcdFx0aGFuZGxlVGhlbWVQYW5lbEV4cGFuZCgpO1xyXG5cdFx0XHRoYW5kbGVUaGVtZVBhZ2VDb250cm9sKCk7XHJcblx0XHRcdGhhbmRsZVBheW1lbnRUeXBlU2VsZWN0aW9uKCk7XHJcblx0XHRcdGhhbmRsZVF0eUNvbnRyb2woKTtcclxuXHRcdFx0aGFuZGxlUHJvZHVjdEltYWdlKCk7XHJcblx0XHRcdGhhbmRsZVBhcm9sbGVyKCk7XHJcblx0XHR9XHJcblx0fTtcclxufSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0QXBwLmluaXQoKTtcclxufSk7Il19
