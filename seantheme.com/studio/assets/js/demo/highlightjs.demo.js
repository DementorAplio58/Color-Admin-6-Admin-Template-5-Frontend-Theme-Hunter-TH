/*
Template Name: STUDIO - Responsive Bootstrap 4 Admin Template
Version: 2.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/studio/
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