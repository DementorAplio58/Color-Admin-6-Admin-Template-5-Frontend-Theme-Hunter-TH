/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 5
Version: 5.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
    ----------------------------
        APPS CONTENT TABLE
    ----------------------------
    
    <!-- ======== GLOBAL SCRIPT SETTING ======== -->
    01. Handle Header Mobile Nav
    02. Handle Theme Panel Expand
    03. Handle Theme Page Control
	
    <!-- ======== APPLICATION SETTING ======== -->
    Application Controller
*/



/* 01. Handle Header Mobile Nav
------------------------------------------------ */
var handleHeaderMobileNav = function() {
	$(document).on('click', '[data-toggle="header-mobile-nav"]', function(e) {
		e.preventDefault();
	
		$('.header .header-nav').slideToggle();
	});
};


/* 02. Handle Theme Panel Expand
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


/* 03. Handle Theme Page Control
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


/* 04. Handle Tooltip Activation
------------------------------------------------ */
var handleTooltipActivation = function() {
	if ($('[data-bs-toggle=tooltip]').length !== 0) {
		$('[data-bs-toggle=tooltip]').tooltip();
	}
};


/* Application Controller
------------------------------------------------ */
var App = function () {
	"use strict";
	
	return {
		//main function
		init: function () {
			handleHeaderMobileNav();
			handleThemePanelExpand()
			handleThemePageControl();
			handleTooltipActivation();
		}
  };
}();

$(document).ready(function() {
	App.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogQ29sb3IgQWRtaW4gLSBSZXNwb25zaXZlIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZSBidWlsZCB3aXRoIEJvb3RzdHJhcCA1XHJcblZlcnNpb246IDUuMC4wXHJcbkF1dGhvcjogU2VhbiBOZ3VcclxuV2Vic2l0ZTogaHR0cDovL3d3dy5zZWFudGhlbWUuY29tL2NvbG9yLWFkbWluL1xyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIEFQUFMgQ09OVEVOVCBUQUJMRVxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgXHJcbiAgICA8IS0tID09PT09PT09IEdMT0JBTCBTQ1JJUFQgU0VUVElORyA9PT09PT09PSAtLT5cclxuICAgIDAxLiBIYW5kbGUgSGVhZGVyIE1vYmlsZSBOYXZcclxuICAgIDAyLiBIYW5kbGUgVGhlbWUgUGFuZWwgRXhwYW5kXHJcbiAgICAwMy4gSGFuZGxlIFRoZW1lIFBhZ2UgQ29udHJvbFxyXG5cdFxyXG4gICAgPCEtLSA9PT09PT09PSBBUFBMSUNBVElPTiBTRVRUSU5HID09PT09PT09IC0tPlxyXG4gICAgQXBwbGljYXRpb24gQ29udHJvbGxlclxyXG4qL1xyXG5cclxuXHJcblxyXG4vKiAwMS4gSGFuZGxlIEhlYWRlciBNb2JpbGUgTmF2XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG52YXIgaGFuZGxlSGVhZGVyTW9iaWxlTmF2ID0gZnVuY3Rpb24oKSB7XHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cImhlYWRlci1tb2JpbGUtbmF2XCJdJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFxyXG5cdFx0JCgnLmhlYWRlciAuaGVhZGVyLW5hdicpLnNsaWRlVG9nZ2xlKCk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5cclxuLyogMDIuIEhhbmRsZSBUaGVtZSBQYW5lbCBFeHBhbmRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVUaGVtZVBhbmVsRXhwYW5kID0gZnVuY3Rpb24oKSB7XHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwidGhlbWUtcGFuZWwtZXhwYW5kXCJdJywgZnVuY3Rpb24oKSB7XHJcblx0dmFyIHRhcmdldENvbnRhaW5lciA9ICcudGhlbWUtcGFuZWwnO1xyXG5cdHZhciB0YXJnZXRDbGFzcyA9ICdhY3RpdmUnO1xyXG5cdGlmICgkKHRhcmdldENvbnRhaW5lcikuaGFzQ2xhc3ModGFyZ2V0Q2xhc3MpKSB7XHJcblx0XHQkKHRhcmdldENvbnRhaW5lcikucmVtb3ZlQ2xhc3ModGFyZ2V0Q2xhc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKHRhcmdldENvbnRhaW5lcikuYWRkQ2xhc3ModGFyZ2V0Q2xhc3MpO1xyXG5cdH1cclxuXHR9KTtcclxufTtcclxuXHJcblxyXG4vKiAwMy4gSGFuZGxlIFRoZW1lIFBhZ2UgQ29udHJvbFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIGhhbmRsZVRoZW1lUGFnZUNvbnRyb2wgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodHlwZW9mIENvb2tpZXMgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnRoZW1lLWxpc3QgW2RhdGEtdGhlbWVdJywgZnVuY3Rpb24oZSkge1x0XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dmFyIHRhcmdldFRoZW1lID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRoZW1lJyk7XHJcblx0XHRcdHZhciB0YXJnZXRUaGVtZUZpbGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGhlbWUtZmlsZScpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQoJyN0aGVtZS1jc3MtbGluaycpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdCQoJ2hlYWQnKS5hcHBlbmQoJzxsaW5rIGhyZWY9XCInKyB0YXJnZXRUaGVtZUZpbGUgKydcIiByZWw9XCJzdHlsZXNoZWV0XCIgaWQ9XCJ0aGVtZS1jc3MtbGlua1wiIC8+Jyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnI3RoZW1lLWNzcy1saW5rJykuYXR0cignaHJlZicsIHRhcmdldFRoZW1lRmlsZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0JCgnLnRoZW1lLWxpc3QgW2RhdGEtdGhlbWVdJykubm90KHRoaXMpLmNsb3Nlc3QoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRDb29raWVzLnNldCgndGhlbWUnLCAkKHRoaXMpLmF0dHIoJ2RhdGEtdGhlbWUnKSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0aWYgKENvb2tpZXMuZ2V0KCd0aGVtZScpKSB7XHJcblx0XHRcdGlmICgkKCcudGhlbWUtbGlzdCcpLmxlbmd0aCAhPT0gMCkge1xyXG5cdFx0XHRcdHZhciB0YXJnZXRFbG0gPSAnLnRoZW1lLWxpc3QgW2RhdGEtdGhlbWU9XCInKyBDb29raWVzLmdldCgndGhlbWUnKSArJ1wiXSc7XHJcblx0XHRcdFx0JCh0YXJnZXRFbG0pLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5cclxuLyogMDQuIEhhbmRsZSBUb29sdGlwIEFjdGl2YXRpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbnZhciBoYW5kbGVUb29sdGlwQWN0aXZhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICgkKCdbZGF0YS1icy10b2dnbGU9dG9vbHRpcF0nKS5sZW5ndGggIT09IDApIHtcclxuXHRcdCQoJ1tkYXRhLWJzLXRvZ2dsZT10b29sdGlwXScpLnRvb2x0aXAoKTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuLyogQXBwbGljYXRpb24gQ29udHJvbGxlclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHRcclxuXHRyZXR1cm4ge1xyXG5cdFx0Ly9tYWluIGZ1bmN0aW9uXHJcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGhhbmRsZUhlYWRlck1vYmlsZU5hdigpO1xyXG5cdFx0XHRoYW5kbGVUaGVtZVBhbmVsRXhwYW5kKClcclxuXHRcdFx0aGFuZGxlVGhlbWVQYWdlQ29udHJvbCgpO1xyXG5cdFx0XHRoYW5kbGVUb29sdGlwQWN0aXZhdGlvbigpO1xyXG5cdFx0fVxyXG4gIH07XHJcbn0oKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdEFwcC5pbml0KCk7XHJcbn0pOyJdfQ==
