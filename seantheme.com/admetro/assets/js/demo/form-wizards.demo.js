/*
Template Name: ADMETRO - Responsive Admin Template Built with Bootstrap 4
Version: 1.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/admetro-v1.0/
*/

var handleRenderFormWizards = function() {
	$('#rootwizard').bootstrapWizard({
		'nextSelector': '.wizard-next-btn', 
		'previousSelector': '.wizard-prev-btn'
	});
};


/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleRenderFormWizards();
});