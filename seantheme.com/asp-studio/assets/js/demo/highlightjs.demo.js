/*
Template Name: ASPSTUDIO - Responsive Bootstrap 5 Admin Template
Version: 2.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/asp-studio/
*/

var handleInitHighlightJs = function() {
	$('.hljs-container pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
};


/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleInitHighlightJs();
});