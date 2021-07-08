/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter 5
Version: 5.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
    ----------------------------
        APPS CONTENT TABLE
    ----------------------------
    
    <!-- ======== GLOBAL SCRIPT SETTING ======== -->
    01. Handle Header Navigation State
    02. Handle Tooltip Activation
    03. Handle Theme Panel Expand
    04. Handle Theme Page Control
    05. Handle Paroller
	
    <!-- ======== APPLICATION SETTING ======== -->
    Application Controller
*/


/* 01. Handle Header Navigation State
------------------------------------------------ */
var handleHeaderNavigationState = function() {
	$(window).on('scroll load', function() {
		if ($(window).scrollTop() > 20) {
			$('#header').addClass('navbar-sm');
		} else {
			$('#header').removeClass('navbar-sm');
		}
	});
};


/* 02. Handle Tooltip Activation
------------------------------------------------ */
var handleTooltipActivation = function() {
	if ($('[data-toggle=tooltip]').length !== 0) {
		$('[data-toggle=tooltip]').tooltip();
	}
};


/* 03. Handle Theme Panel Expand
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


/* 04. Handle Theme Page Control
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


/* 05. Handle Paroller
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
			handleHeaderNavigationState();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogQ29sb3IgQWRtaW4gLSBSZXNwb25zaXZlIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZSBidWlsZCB3aXRoIFR3aXR0ZXIgNVxyXG5WZXJzaW9uOiA1LjAuMFxyXG5BdXRob3I6IFNlYW4gTmd1XHJcbldlYnNpdGU6IGh0dHA6Ly93d3cuc2VhbnRoZW1lLmNvbS9jb2xvci1hZG1pbi9cclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBBUFBTIENPTlRFTlQgVEFCTEVcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgPCEtLSA9PT09PT09PSBHTE9CQUwgU0NSSVBUIFNFVFRJTkcgPT09PT09PT0gLS0+XHJcbiAgICAwMS4gSGFuZGxlIEhlYWRlciBOYXZpZ2F0aW9uIFN0YXRlXHJcbiAgICAwMi4gSGFuZGxlIFRvb2x0aXAgQWN0aXZhdGlvblxyXG4gICAgMDMuIEhhbmRsZSBUaGVtZSBQYW5lbCBFeHBhbmRcclxuICAgIDA0LiBIYW5kbGUgVGhlbWUgUGFnZSBDb250cm9sXHJcbiAgICAwNS4gSGFuZGxlIFBhcm9sbGVyXHJcblx0XHJcbiAgICA8IS0tID09PT09PT09IEFQUExJQ0FUSU9OIFNFVFRJTkcgPT09PT09PT0gLS0+XHJcbiAgICBBcHBsaWNhdGlvbiBDb250cm9sbGVyXHJcbiovXHJcblxyXG5cclxuLyogMDEuIEhhbmRsZSBIZWFkZXIgTmF2aWdhdGlvbiBTdGF0ZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZUhlYWRlck5hdmlnYXRpb25TdGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdCQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAyMCkge1xyXG5cdFx0XHQkKCcjaGVhZGVyJykuYWRkQ2xhc3MoJ25hdmJhci1zbScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnI2hlYWRlcicpLnJlbW92ZUNsYXNzKCduYXZiYXItc20nKTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcblxyXG4vKiAwMi4gSGFuZGxlIFRvb2x0aXAgQWN0aXZhdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVRvb2x0aXBBY3RpdmF0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKCQoJ1tkYXRhLXRvZ2dsZT10b29sdGlwXScpLmxlbmd0aCAhPT0gMCkge1xyXG5cdFx0JCgnW2RhdGEtdG9nZ2xlPXRvb2x0aXBdJykudG9vbHRpcCgpO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKiAwMy4gSGFuZGxlIFRoZW1lIFBhbmVsIEV4cGFuZFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVRoZW1lUGFuZWxFeHBhbmQgPSBmdW5jdGlvbigpIHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJ0aGVtZS1wYW5lbC1leHBhbmRcIl0nLCBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0YXJnZXRDb250YWluZXIgPSAnLnRoZW1lLXBhbmVsJztcclxuXHRcdHZhciB0YXJnZXRDbGFzcyA9ICdhY3RpdmUnO1xyXG5cdFx0aWYgKCQodGFyZ2V0Q29udGFpbmVyKS5oYXNDbGFzcyh0YXJnZXRDbGFzcykpIHtcclxuXHRcdFx0JCh0YXJnZXRDb250YWluZXIpLnJlbW92ZUNsYXNzKHRhcmdldENsYXNzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQodGFyZ2V0Q29udGFpbmVyKS5hZGRDbGFzcyh0YXJnZXRDbGFzcyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5cclxuLyogMDQuIEhhbmRsZSBUaGVtZSBQYWdlIENvbnRyb2xcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVUaGVtZVBhZ2VDb250cm9sID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHR5cGVvZiBDb29raWVzICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50aGVtZS1saXN0IFtkYXRhLXRoZW1lXScsIGZ1bmN0aW9uKGUpIHtcdFxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHZhciB0YXJnZXRUaGVtZSA9ICQodGhpcykuYXR0cignZGF0YS10aGVtZScpO1xyXG5cdFx0XHR2YXIgdGFyZ2V0VGhlbWVGaWxlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRoZW1lLWZpbGUnKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKCcjdGhlbWUtY3NzLWxpbmsnKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHQkKCdoZWFkJykuYXBwZW5kKCc8bGluayBocmVmPVwiJysgdGFyZ2V0VGhlbWVGaWxlICsnXCIgcmVsPVwic3R5bGVzaGVldFwiIGlkPVwidGhlbWUtY3NzLWxpbmtcIiAvPicpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoJyN0aGVtZS1jc3MtbGluaycpLmF0dHIoJ2hyZWYnLCB0YXJnZXRUaGVtZUZpbGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCQoJy50aGVtZS1saXN0IFtkYXRhLXRoZW1lXScpLm5vdCh0aGlzKS5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0Q29va2llcy5zZXQoJ3RoZW1lJywgJCh0aGlzKS5hdHRyKCdkYXRhLXRoZW1lJykpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGlmIChDb29raWVzLmdldCgndGhlbWUnKSkge1xyXG5cdFx0XHRpZiAoJCgnLnRoZW1lLWxpc3QnKS5sZW5ndGggIT09IDApIHtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0RWxtID0gJy50aGVtZS1saXN0IFtkYXRhLXRoZW1lPVwiJysgQ29va2llcy5nZXQoJ3RoZW1lJykgKydcIl0nO1xyXG5cdFx0XHRcdCQodGFyZ2V0RWxtKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbi8qIDA1LiBIYW5kbGUgUGFyb2xsZXJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVQYXJvbGxlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0eXBlb2YgJC5mbi5wYXJvbGxlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdGlmICgkKCdbZGF0YS1wYXJvbGxlcj1cInRydWVcIl0nKS5sZW5ndGggIT09IDApIHtcclxuXHRcdFx0JCgnW2RhdGEtcGFyb2xsZXI9XCJ0cnVlXCJdJykucGFyb2xsZXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5cclxuLyogQXBwbGljYXRpb24gQ29udHJvbGxlclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC8vbWFpbiBmdW5jdGlvblxyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRoYW5kbGVIZWFkZXJOYXZpZ2F0aW9uU3RhdGUoKTtcclxuXHRcdFx0aGFuZGxlVG9vbHRpcEFjdGl2YXRpb24oKTtcclxuXHRcdFx0aGFuZGxlVGhlbWVQYW5lbEV4cGFuZCgpO1xyXG5cdFx0XHRoYW5kbGVUaGVtZVBhZ2VDb250cm9sKCk7XHJcblx0XHRcdGhhbmRsZVBhcm9sbGVyKCk7XHJcblx0XHR9XHJcblx0fTtcclxufSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0QXBwLmluaXQoKTtcclxufSk7Il19
