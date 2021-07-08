/*
Template Name: ADMETRO - Responsive Admin Template Built with Bootstrap 4
Version: 1.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/admetro-v1.0/
*/

var handleRenderTableData = function() {
	var rowReorderOption = ($(window).width() > 767) ? true : false;
	var table = $('#datatables-default').DataTable({
		dom: "<'row m-b-15'<'col-sm-6'l><'col-sm-6 text-right'<'d-flex justify-content-end'fB>>>t<'d-flex align-items-center'<'mr-auto'i><'mb-0'p>>",
		'lengthMenu': [ 20, 40, 60, 80, 100 ],
		colReorder: true,
		keys: true,
		responsive: true,
		rowReorder: rowReorderOption,
		buttons: [ 
			{ extend: 'copy', className: 'btn btn-default btn-sm' },
			{ extend: 'print', className: 'btn btn-default btn-sm' },
			{ extend: 'excel', className: 'btn btn-default btn-sm' },
			{ extend: 'pdf', className: 'btn btn-default btn-sm' }
		],
		"columnDefs": [{
			"targets": 'no-sort',
			"orderable": false,
			"order": []
		}],
		"order": [[ 1, "asc" ]]
	});
	table.on('order.dt search.dt', function () {
		table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
			cell.innerHTML = (i+1) + '.';
		});
	}).draw();
};


/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleRenderTableData();
});