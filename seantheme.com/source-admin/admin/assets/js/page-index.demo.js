/*   
Template Name: Source Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.5.0
Author: Sean Ngu
Website: http://www.seantheme.com/source-admin-v1.5/admin/
*/
    
var purple = '#9b59b6';
var purpleLight = '#BE93D0';
var purpleDark = '#7c4792';
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
var fontFamily = 'inherit';
var fontWeight = 'normal';
var fontStyle = 'normal';

var handleVisitorAnalyticsChart = function() {
    "use strict";
    
    var targetChart = '#flot-visitor-chart';
    var d1 = [];
    var d2 = [];
    var d3 = [];
    for (var i = 0; i <= 10; i += 1) {
        d1.push([i, parseInt(Math.random() * 30)]);
    }
    for (var i = 0; i <= 10; i += 1) {
        d2.push([i, parseInt(Math.random() * 30)]);
    }
    for (var i = 0; i <= 10; i += 1) {
        d3.push([i, parseInt(Math.random() * 30)]);
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
                font: {
                    size: 11,
                    lineHeight: 16,
                    style: fontStyle,
                    weight: fontWeight,
                    family: fontFamily,
                    color: inverse
                }
            },
            yaxis: {
                font: {
                    size: 11,
                    lineHeight: 16,
                    style: fontStyle,
                    weight: fontWeight,
                    family: fontFamily,
                    color: inverse
                }
            }
        };
        
        $.plot($(targetChart), [
               {data: d1, lines: { show: true, fill: true, fillColor: primary, shadow: false }, stack: true, color: primary },
               {data: d2, lines: { show: true, fill: true, fillColor: info, shadow: false }, stack: true, color: info },
               {data: d3, lines: { show: true, fill: true, fillColor: inverse, shadow: false }, stack: true, color: inverse }
        ], options);
    }
}

var handleVisitorsVectorMap = function() {
    "use strict";
    
    var targetMap = '#vector-map';
    
    if ($(targetMap).length !== 0) {
        var targetHeight = $(targetMap).attr('data-height');
        $(targetMap).height(targetHeight);
        
        var map = new jvm.WorldMap({
            map: 'world_merc_en',
            container: $(targetMap),
            normalizeFunction: 'linear',
            hoverOpacity: 0.5,
            hoverColor: false,
            markerStyle: {
                initial: {
                    stroke: '#fff',
                    r: 3
                }
            },
            regions: [{
                attribute: 'fill'
            }],
            regionStyle: {
                initial: {
                    fill: 'rgba(255,255,255,0.25)',
                    "fill-opacity": 1,
                    stroke: 'none',
                    "stroke-width": 2,
                    "stroke-opacity": 1
                },
                hover: {
                    "fill-opacity": 0.8
                },
                selected: {
                    fill: 'fff'
                },
                selectedHover: {
                }
            },
            series: {
                regions: [{
                values: {
                    IN:success,
                    US:success,
                    KR:success,
                    FR:success
                }
                }]
            },
            focusOn: {
                x: 0.6,
                y: 0.5,
                scale: 3
            },
            backgroundColor: inverse,
            zoomOnScroll: false
        });
    }
};

var handleWidgetChat = function() {
    "use strict";
    
    $(document).on('click', '[data-toggle="chat-detail"]', function(e) {
        e.preventDefault();
        $(this).closest('.widget-chat').addClass('widget-chat-detail-toggled');
    });
     $(document).on('click', '[data-dismiss="chat-detail"]', function(e) {
        e.preventDefault();
        $(this).closest('.widget-chat').removeClass('widget-chat-detail-toggled');
    });
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

var handleWidgetTodolist = function() {
    "use strict";

    $(document).on('click', '[data-click="todolist-checkbox"]', function(e) {
        e.preventDefault();
    
        var targetCheckbox = $(this).closest('.checkbox').find('input[type="checkbox"]');
        var targetLi = $(this).closest('li');
    
        if ($(targetCheckbox).is(':checked')) {
            $(targetLi).removeClass('completed');
            $(targetCheckbox).prop('checked',false);
        } else {
            $(targetLi).addClass('completed');
            $(targetCheckbox).prop('checked',true);
        }
    });
};

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
            series: { shadowSize: 0, color: lime, lines: { show: true, fill:true } }, // drawing is faster without shadows
            yaxis: { 
                min: 0, 
                max: 100, 
                tickColor: '#ddd',
                font: {
                    size: 11,
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
                    size: 11,
                    lineHeight: 16,
                    style: fontStyle,
                    weight: fontWeight,
                    family: fontFamily,
                    color: inverse
                }
            },
            grid: {
                borderWidth: 1,
                borderColor: '#ddd'
            }
        };
        var plot = $.plot($(targetChart), [ getRandomData() ], options);
        update();
    }
};

var handleDashboardGritterNotification = function() {
	setTimeout(function() {
		$.gritter.add({
			title: 'Welcome back, Admin!',
			text: 'You have 4 new notifications. Please check your inbox.',
			image: '../assets/img/user_1.jpg',
			sticky: true,
			time: '',
			class_name: 'my-sticky-class'
		});
	}, 1000);
};


/* Application Controller
------------------------------------------------ */
var PageDemo = function () {
	"use strict";
	
	return {
		//main function
		init: function () {
		    handleVisitorAnalyticsChart();
		    handleVisitorsVectorMap();
		    handleServerChart();
		    handleWidgetChat();
		    handleWidgetReload();
		    handleWidgetTodolist();
		    handleDashboardGritterNotification();
		}
    };
}();