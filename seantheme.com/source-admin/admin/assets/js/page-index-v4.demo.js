/*   
Template Name: Source Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.5.0
Author: Sean Ngu
Website: http://www.seantheme.com/source-admin-v1.5/admin/
*/


var purple = '#5f50c5';
var purpleLight = '#7f73d1';
var purpleDark = '#4c409e';
var success = '#17B6A4';
var successDark = '#129283';
var primary = '#2184DA';
var primaryDark = '#1e77c5';
var info = '#38AFD3';
var inverse = '#3C454D';
var warning = '#fcaf41';
var danger = '#F04B46';
var dangerLight = '#F58A87';
var dangerDark = '#c03c38';
var lime = '#65C56F';
var grey = '#aab3ba';
var white = '#fff';
var fontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
var fontWeight = '500';
var fontStyle = 'normal';

var handleWidgetStatSparkline = function() {
	"use strict";

	var semiTransparent = 'rgba(0,0,0,0.5)';
	var semiWhiteTransparent = 'rgba(255,255,255,0.2)';
	var semiLimeTransparent = 'rgba(101, 197, 111, 0.7)';
	var semiBlueTransparent = 'rgba(33, 132, 218, 0.67)';
	var options = {
		height: '50px',
		width: '100%',
		fillColor: semiTransparent,
		lineWidth: 3,
		spotRadius: '0',
		highlightLineColor: semiTransparent,
		highlightSpotColor: semiTransparent,
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false
	};

	function renderWidgetStatSparkline() {
		var value = [20,30,45,40,45, 60, 70, 60, 50,40,35,40,50,70,90,40];
		options.width = '100%';
		options.type = 'line';
		options.height = '95px';
		options.lineColor = warning;
		options.fillColor = purpleDark;
		options.highlightLineColor = warning;
		options.highlightSpotColor = warning;

		if ($('#sparkline-line-chart').length !== 0) {
			$('#sparkline-line-chart').sparkline(value, options);
		}

		var value = [50,30,45,40,50,90,20,35,40,50,70,40,80,70,60,50,40,60,40,90,50,30,50,40,30,20,50,68,92];
		options.barColor = semiTransparent;
		options.barSpacing = 3;
		options.type= 'bar';
		options.barWidth = '10';

		if ($('#sparkline-bar-chart').length !== 0) {
			$('#sparkline-bar-chart').sparkline(value, options);
		}
	}

	renderWidgetStatSparkline();

	$(window).on('resize', function() {
		$('#sparkline-line-chart').empty();
		$('#sparkline-bar-chart').empty();
		renderWidgetStatSparkline();
	});
};

var handleBrowserChart = function() {
	"use strict";

	function labelFormatter(label, series) {
		return "<div style='font-size:11px; text-align:center; color:#fff;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
	}

	var d1 = [
		{ label: 'Chrome', data: 15, color: success }, 
		{ label: 'Safari', data:15, color: primary }, 
		{ label: 'IE', data: 7, color: info }, 
		{ label: 'Firefox', data: 8, color: warning }, 
		{ label: 'Opera', data: 8, color: danger }
	];
	var targetChart = '#flot-browser-chart';

	if ($(targetChart).length !== 0) {
		var targetHeight = $(targetChart).attr('data-height');
		$(targetChart).height(targetHeight);

		$.plot($(targetChart), d1 , {
			series: {
				pie: { 
					innerRadius: 0.5,
					show: true,
					radius: 1,
					label: {
						show: true,
						radius: 2.25/3,
						formatter: labelFormatter,
						threshold: 0.1
					},
					stroke: { 
						width: 0.1
					}
				}
			},
			legend: {
				show: false
			}
		});
	}
}

var handleVisitorAnalyticsChart = function() {
	"use strict";

	var targetChart = '#flot-visitor-chart';
	var d1 = [];
	for (var i = 0; i < 8; i += 0.2) {
		d1.push([i, Math.sin(i) + 2]);
	}

	if ($(targetChart).length !== 0) {
		var targetHeight = $(targetChart).attr('data-height');
		$(targetChart).height(targetHeight);

		var options = {
			series: {
				curvedLines: {
					apply: true,
					active: true,
					monotonicFit: true
				}
			},
			grid: {
				borderWidth: 0
			},
			legend: {
				show: false
			},
			xaxis: {
				show: false
			},
			yaxis: {
				show: false
			}
		};

		$.plot($(targetChart), [
			   {data: d1, lines: { show: true, fill: true, fillColor: 'rgba(0,0,0,0.5)', shadow: false }, stack: false, color: purple },
		], options);
	}
}

var handleServerChart = function() {
	"use strict";

	var nextUpdateValue = 0;
	var updateInterval = 1000;
	var targetChart = '#flot-server-chart';

	function update() {
		plot.setData([ getRandomData() ]);
		var series = plot.getData();

		if (nextUpdateValue > 75) {
			series[0].color = danger;
		} else if (nextUpdateValue > 50) {
			series[0].color = warning; 
		} else {
			series[0].color = lime;
		}

		plot.draw();
		setTimeout(update, updateInterval);
	}

	function getRandomData() {
		if (data.length > 0) {
			data = data.slice(1);
		}
		while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 50;
			var y = prev + Math.random() * 10 - 5;
			if (y < 0) {
				y = 0;
			}
			if (y > 100) {
				y = 100;
			}
			nextUpdateValue = parseInt(y);
			$('[data-id="server-load-number"]').html(y.toFixed(2) + '%');
			data.push(y);
		}
		var res = [];
		for (var i = 0; i < data.length; ++i) {
			res.push([i, data[i]]);
		}

		return res;
	}

	if ($(targetChart).length !== 0) {
		var targetHeight = $(targetChart).attr('data-height');
		$(targetChart).height(targetHeight);

		var data = [], totalPoints = 150;

		// setup plot
		var options = {
			series: { 
				shadowSize: 0, 
				color: lime, 
				lines: { show: true, fill:true, lineWidth: 2 }
			}, // drawing is faster without shadows
			yaxis: { 
				min: 0, 
				max: 100, 
				tickColor: '#ddd',
				font: {
					size: 12,
					lineHeight: 16,
					style: fontStyle,
					weight: fontWeight,
					family: fontFamily,
					color: inverse
				}
			},
			xaxis: { 
				show: true, 
				tickColor: '#ddd',
				font: {
					size: 12,
					lineHeight: 16,
					style: fontStyle,
					weight: fontWeight,
					family: fontFamily,
					color: inverse
				}
			},
			grid: {
				borderWidth: 0,
				borderColor: '#ddd'
			}
		};
		var plot = $.plot($(targetChart), [ getRandomData() ], options);
		update();
	}
};

var handleWidgetReload = function() {
    "use strict";
    
    $(document).on('click', '[data-click="widget-reload"]', function(e) {
        e.preventDefault();
    
        var targetWidget = $(this).closest('.widget');
        $(targetWidget).append('<div class="widget-loader"><span class="spinner-small">Loading...</span></div>');
    
        setTimeout(function() {
            $(targetWidget).find('.widget-loader').remove();
        }, 1500);
    });
};

/* Application Controller
------------------------------------------------ */
var PageDemo = function () {
	"use strict";
	
	return {
		//main function
		init: function () {
            handleWidgetStatSparkline();
		    handleBrowserChart();
		    handleVisitorAnalyticsChart();
		    handleServerChart();
		    handleWidgetReload();
		}
    };
}();