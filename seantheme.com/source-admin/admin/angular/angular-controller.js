/*   
Template Name: Source Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.5.0
Author: Sean Ngu
Website: http://www.seantheme.com/source-admin-v1.5/admin/
    ----------------------------
        APPS CONTROLLER TABLE
    ----------------------------
    1.0 CONTROLLER - App
    2.0 CONTROLLER - Sidebar
    3.0 CONTROLLER - Right Sidebar
    4.0 CONTROLLER - Top Menu
    5.0 CONTROLLER - Page Loader
    6.0 CONTROLLER - Theme Panel
         7.1 Dashboard - Visitor Chart
         7.2 Dashboard - Server Chart
         7.3 Dashboard - Gritter Notification
         7.4 Dashboard - Todolist
         7.5 Dashboard - Widget Reload 
         7.6 Dashboard - Widget Chat
         7.7 Dashboard - Vector Map
     7.0 CONTROLLER - Dashboard v1
     8.0 CONTROLLER - Dashboard v2
         8.1 Dashboard v2 - Visitor Chart
         8.2 Dashboard v2 - Doughnut Chart
         8.3 Dashboard v2 - Gritter Notification
         8.4 Dashboard v2 - Widget Reload
     9.0 FUNCTION - Email Page
         9.1 Email - Sidebar
         9.2 Email Inbox - Check All Button
         9.3 Email Inbox - Checkbox
    10.0 CONTROLLER - Email Inbox
    11.0 CONTROLLER - Email Compose
    12.0 CONTROLLER - Email Detail
    13.0 CONTROLLER - Widgets
         13.1 Widgets - Sparksline
         13.2 Widgets - Vector Map
         13.3 Widgets - Chat Detail
         13.4 Widgets - Reload
         13.5 Widgets - Todolist
         13.6 Widgets - Flot Line Chart
         13.7 Widgets - Flot Pie Chart
         13.8 Widgets - Flot Bar Chart
         13.9 Widgets - Browser Analytics Chart
         13.10 Widgets - Browser Analytics Chart
    14.0 CONTROLLER - Modal Notification
    15.0 CONTROLLER - Form Plugins
         15.1 Form Plugins - Datepicker
         15.2 Form Plugins - Ion Range Slider
         15.3 Form Plugins - Masked Input
         15.4 Form Plugins - Color Picker
         15.5 Form Plugins - Timepicker
         15.6 Form Plugins - Strength JS
         15.7 Form Plugins - Autocomplete
         15.8 Form Plugins - Bootstrap Combobox
         15.9 Form Plugins - Tags Input
         15.10 Form Plugins - Selectpicker
         15.11 Form Plugins - jQuery TagIt
         15.12 Form Plugins - Date Range Picker
         15.13 Form Plugins - Select2
         15.14 Form Plugins - DateTimepicker
    16.0 CONTROLLER - Form Slider & Switcher
         16.1 Form Plugins - Slider
         16.2 Form Plugins - Switcher
    17.0 CONTROLLER - Form Validation
    18.0 CONTROLLER - Form WYSIWYG
    19.0 CONTROLLER - Table Manage Default
    20.0 CONTROLLER - Table Manage Autofill
    21.0 CONTROLLER - Table Manage Buttons
    22.0 CONTROLLER - Table Manage ColReorder
    23.0 CONTROLLER - Table Manage FixedColumns
    24.0 CONTROLLER - Table Manage FixedHeader
    25.0 CONTROLLER - Table Manage KeyTable
    26.0 CONTROLLER - Table Manage Responsive
    27.0 CONTROLLER - Table Manage RowReorder
    28.0 CONTROLLER - Table Manage Scroller
    29.0 CONTROLLER - Table Manage Select
    30.0 CONTROLLER - Table Manage Combine
    31.0 CONTROLLER - Google Map
    32.0 CONTROLLER - Vector Map
    33.0 CONTROLLER - Flot Chart   
         33.1 Flot - Stacked Chart 
         33.2 Flot - Tracking Chart
         33.3 Flot - Bar Chart
         33.4 Flot - Pie Chart
         33.5 Flot - Doughnut Chart
         33.6 Flot - Line Chart
         33.7 Flot - Basic Chart
    34.0 CONTROLLER - Morris Chart
         34.1 Morris - Line Chart
         34.2 Morris - Bar Chart
         34.3 Morris - Area Chart
         34.4 Morris - Donut Chart
    35.0 CONTROLLER - Chart JS
    36.0 CONTROLLER - Calendar
    37.0 CONTROLLER - Coming Soon
    38.0 CONTROLLER - Error
    39.0 CONTROLLER - Login
    40.0 CONTROLLER - Register
    41.0 CONTROLLER - Page with Fixed Footer
    42.0 CONTROLLER - Page with Right Sidebar
    43.0 CONTROLLER - Page with Minified Sidebar
    44.0 CONTROLLER - Page with Two Sidebar
    45.0 CONTROLLER - Page with Top Menu
    46.0 CONTROLLER - Page with Mixed Menu
    47.0 CONTROLLER - Page with Boxed Layout
    48.0 CONTROLLER - Boxed Layout with Mixed Menu
    49.0 CONTROLLER - Page without Sidebar
    50.0 CONTROLLER - Dashboard v3
         50.1 Dashboard v3 - Bar Chart
         50.2 Dashboard v3 - DataTables & Sparkline
         50.3 Dashboard v3 - Gritter Notification
    51.0 CONTROLLER - Dashboard v4
    <!-- ======== GLOBAL SCRIPT SETTING ======== -->
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
var fontFamily = '"Nunito", sans-serif';
var fontWeight = '300';
var fontStyle = 'normal';


/* -------------------------------
   1.0 CONTROLLER - App
------------------------------- */

sourceAdminApp.controller('appController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.$on('$includeContentLoaded', function() {
        App.initComponent();
    });
    $scope.$on('$viewContentLoaded', function() {
        App.initComponent();
    });
    $scope.$on('$stateChangeStart', function() {
        // reset layout setting
        $rootScope.setting.layout.pageSidebarMinified = false;
        $rootScope.setting.layout.pageFixedFooter = false;
        $rootScope.setting.layout.pageRightSidebar = false;
        $rootScope.setting.layout.pageTwoSidebar = false;
        $rootScope.setting.layout.pageTopMenu = false;
        $rootScope.setting.layout.pageBoxedLayout = false;
        $rootScope.setting.layout.pageWithoutSidebar = false;
        $rootScope.setting.layout.pageContentFullHeight = false;
        $rootScope.setting.layout.pageContentWithoutPadding = false;
        $rootScope.setting.layout.paceTop = false;
        App.scrollTop();
        $('.pace .pace-progress').addClass('hide');
        $('.pace').removeClass('pace-inactive');
    });
    $scope.$on('$stateChangeSuccess', function() {
        Pace.restart();
        App.initPageLoad();
        App.initSidebarSelection();
    });
    $scope.$on('$stateNotFound', function() {
        Pace.stop();
    });
    $scope.$on('$stateChangeError', function() {
        Pace.stop();
    });
}]);



/* -------------------------------
   2.0 CONTROLLER - Sidebar
------------------------------- */

sourceAdminApp.controller('sidebarController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
    	App.initSidebar();
    })
});



/* -------------------------------
   3.0 CONTROLLER - Right Sidebar
------------------------------- */

sourceAdminApp.controller('rightSidebarController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
    	Demo.initRightSidebar();
    });
});



/* -------------------------------
   4.0 CONTROLLER - Top Menu
------------------------------- */

sourceAdminApp.controller('topMenuController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
        App.initTopMenu();
        Demo.initTopMenu();
    });
});



/* -------------------------------
   5.0 CONTROLLER - Page Loader
------------------------------- */

sourceAdminApp.controller('pageLoaderController', function($scope, $rootScope, $state) {
});



/* -------------------------------
   6.0 CONTROLLER - Theme Panel
------------------------------- */


sourceAdminApp.controller('themePanelController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
        Demo.initThemePanel();
    });
});



/* -------------------------------
   7.0 CONTROLLER - Dashboard v1
------------------------------- */

sourceAdminApp.controller('dashboardController', function($scope, $rootScope, $state) {
    
    /* 7.1 Dashboard - Visitor Chart
    ------------------------------------------------ */
    
    var d1 = [], d2 = [], d3 = [];
    var fontOption = {
        size: 11,
        lineHeight: 16,
        style: fontStyle,
        weight: fontWeight,
        family: fontFamily,
        color: inverse
    };
    
    for (var i = 0; i <= 10; i += 1) {
        d1.push([i, parseInt(Math.random() * 30)]);
        d2.push([i, parseInt(Math.random() * 30)]);
        d3.push([i, parseInt(Math.random() * 30)]);
    }
    var options = {
        series: {
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            }
        },
        grid: { borderWidth: 0 },
        legend: { show: false },
        xaxis: { font: fontOption },
        yaxis: { font: fontOption }
    };
    
    visitorChartOptions = options;
    visitorChartData = [
        {data: d1, lines: { show: true, fill: true, fillColor: primary, shadow: false }, stack: true, color: primary },
        {data: d2, lines: { show: true, fill: true, fillColor: info, shadow: false }, stack: true, color: info },
        {data: d3, lines: { show: true, fill: true, fillColor: inverse, shadow: false }, stack: true, color: inverse }
    ];
    this.visitorChartOptions = visitorChartOptions;
    this.visitorChartData = visitorChartData;
    
    
    /* 7.2 Dashboard - Server Chart
    ------------------------------------------------ */
    
    var data = [], totalData = 150;
    
    function getRandomData() {
        data = (data.length > 0) ? data.slice(1) : data;
        
        while (data.length < totalData) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
                y = (y < 0) ? 0 : y;
                y = (y > 100) ? 100 : y;
            data.push(y);
            $('[data-id="server-load-number"]').html(y.toFixed(2) + '%');
        }
        
        var result = [];
        for (var i = 0; i < data.length; ++i) {
            result.push([i, data[i]]);
        }
        return result;
    }

    var serverChartData = [getRandomData()];
    var serverChartOptions = {
        series: { 
            shadowSize: 0, 
            color: lime, 
            lines: { 
                show: true, 
                fill:true 
            } 
        },
        yaxis: { 
            min: 0, 
            max: 100, 
            tickColor: '#ddd',
            font: fontOption
        },
        xaxis: { 
            show: true, 
            tickColor: '#ddd',
            font: fontOption
        },
        grid: {
            borderWidth: 1,
            borderColor: '#ddd'
        }
    };
    this.serverChartOptions = serverChartOptions;
    this.serverChartData = serverChartData;
    
    
    /* 7.3 Dashboard - Gritter Notification
    ------------------------------------------------ */
    
    $.gritter.removeAll();
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
    
    
    /* 7.4 Dashboard - Todolist
    ------------------------------------------------ */
    
    $('[data-click="todolist-checkbox"]').click(function(e) {
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
    

    /* 7.5 Dashboard - Widget Reload 
    ------------------------------------------------ */
    
    $('[data-click="widget-reload"]').click(function(e) {
        e.preventDefault();
    
        var targetWidget = $(this).closest('.widget');
        $(targetWidget).append('<div class="widget-loader"><span class="spinner-small">Loading...</span></div>');
    
        setTimeout(function() {
            $(targetWidget).find('.widget-loader').remove();
        }, 1500);
    });
    
    
    /* 7.6 Dashboard - Widget Chat
    ------------------------------------------------ */
    
    $('[data-toggle="chat-detail"]').click(function(e) {
        e.preventDefault();
        $(this).closest('.widget-chat').addClass('widget-chat-detail-toggled');
    });
    $('[data-dismiss="chat-detail"]').click(function(e) {
        e.preventDefault();
        $(this).closest('.widget-chat').removeClass('widget-chat-detail-toggled');
    });
    
    
    /* 7.7 Dashboard - Vector Map
    ------------------------------------------------ */
    
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
            regions: [{ attribute: 'fill' }],
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
    
});



/* -------------------------------
   8.0 CONTROLLER - Dashboard v2
------------------------------- */

sourceAdminApp.controller('dashboardV2Controller', function($scope, $rootScope, $state) {
    
    /* 8.1 Dashboard v2 - Visitor Chart
    ------------------------------------------------ */
    
    var ctx = document.getElementById('chart-visitor-analytics').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, 'rgba(62, 71, 79, 0.3)');
    
    var visitorChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                label: "Visitors",
                fillColor : gradient,
                strokeColor : "#333",
                pointColor : "#fff",
                pointStrokeColor : "#000",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : [100, 120, 150, 170, 180, 200, 160]
            }
        ]
    };
    var visitorChartOptions = {
        animation: false,
        scaleBeginAtZero: false,
        pointDot: true,
        pointDotStrokeWidth: 1.5,
        scaleLineWidth: 2,
        scaleLineColor: "rgba(0,0,0,.8)",
        scaleFontFamily: "'Nunito', sans-serif",
        scaleFontColor: "#333",
        scaleLabel: "<%=value%>k",
        barStrokeWidth: 0,
        barValueSpacing : 10,
        barShowStroke: false,
        responsive : true,
        tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
        tooltipFillColor: 'rgba(0,0,0,0.8)',
        tooltipFontFamily: '"Nunito", sans-serif',
        tooltipFontSize: 11,
        tooltipFontStyle: '300',
        tooltipFontColor: '#fff',
        tooltipTitleFontFamily: '"Nunito", sans-serif',
        tooltipTitleFontSize: 11,
        tooltipTitleFontStyle: '300',
        tooltipTitleFontColor: '#fff',
        tooltipYPadding: 8,
        tooltipXPadding: 8,
        tooltipCaretSize: 5,
        tooltipCornerRadius: 3,
        customTooltips: function(tooltip) {
            var tooltipEl = $('#visitor-analytics-tooltip');

            if (!tooltip) {
                tooltipEl.hide();
                return;
            }

            tooltipEl.removeClass('above below');
            tooltipEl.addClass(tooltip.yAlign);
            tooltipEl.html('<div class="chartjs-tooltip-section">' + tooltip.text + '</div>');

            tooltipEl.css({
                display: 'block',
                left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
                top: tooltip.chart.canvas.offsetTop + tooltip.y + 'px',
                fontFamily: tooltip.fontFamily,
                fontSize: tooltip.fontSize,
                fontStyle: tooltip.fontStyle,
            });
        }
    };
    this.visitorChartOptions = visitorChartOptions;
    this.visitorChartData = visitorChartData;
    
    
    /* 8.2 Dashboard v2 - Doughnut Chart
    ------------------------------------------------ */
    
    function doughnutData(color1, color2, color3) {
        return [{
            value: 50,
            color: color1,
            highlight: color1,
            label: 'Unique Visitor'
        }, {
            value: 100,
            color: color2,
            highlight: color2,
            label: 'Page Views'
        }, {
            value: 150,
            color: color3,
            highlight: color3,
            label: 'Page Views'
        }];
    }
    
    function chartOption(targetTooltip) {
        return {
            segmentStrokeWidth: 0.001,
            tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
            tooltipFillColor: 'rgba(0,0,0,0.8)',
            tooltipFontFamily: '"Nunito", sans-serif',
            tooltipFontSize: 11,
            tooltipFontStyle: '300',
            tooltipFontColor: '#fff',
            tooltipTitleFontFamily: '"Nunito", sans-serif',
            tooltipTitleFontSize: 11,
            tooltipTitleFontStyle: '300',
            tooltipTitleFontColor: '#fff',
            tooltipYPadding: 8,
            tooltipXPadding: 8,
            tooltipCaretSize: 5,
            tooltipCornerRadius: 3,
            customTooltips: function(tooltip) {
                var tooltipEl = $(targetTooltip);

                if (!tooltip) {
                    tooltipEl.hide();
                    return;
                }

                tooltipEl.removeClass('above below');
                tooltipEl.addClass(tooltip.yAlign);
                tooltipEl.html('<div class="chartjs-tooltip-section">' + tooltip.text + '</div>');

                tooltipEl.css({
                    display: 'block',
                    left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
                    top: tooltip.chart.canvas.offsetTop + tooltip.y + 'px',
                    fontFamily: tooltip.fontFamily,
                    fontSize: tooltip.fontSize,
                    fontStyle: tooltip.fontStyle,
                });
            }
        };
    }
    
    this.chromeChartData = doughnutData('#7f73d1','#5f50c5','#4c409e');
    this.chromeChartOptions = chartOption('#doughnut-chrome-tooltip');
    
    this.ieChartData = doughnutData('#3498DB','#2980B9','#1F5F89');
    this.ieChartOptions = chartOption('#doughnut-ie-tooltip');
    
    this.mozillaChartData = doughnutData('#E67E22','#D35400','#B34902');
    this.mozillaChartOptions = chartOption('#doughnut-mozilla-tooltip');
    
    this.safariChartData = doughnutData('#1ABC9C','#16A085','#0F6655');
    this.safariChartOptions = chartOption('#doughnut-safari-tooltip');
    
    
    /* 8.3 Dashboard v2 - Gritter Notification
    ------------------------------------------------ */
    
    $.gritter.removeAll();
    setTimeout(function() {
        $.gritter.add({
            title: 'Welcome back, Admin!',
            text: 'You have 5 new notifications. Please check your inbox.',
            image: '../assets/img/user_profile.jpg',
            sticky: true,
            time: '',
            class_name: 'my-sticky-class'
        });
    }, 1000);
    
    
    /* 8.4 Dashboard v2 - Widget Reload
    ------------------------------------------------ */

    $('[data-click="widget-reload"]').click(function(e) {
        e.preventDefault();

        var targetWidget = $(this).closest('.widget');
        $(targetWidget).append('<div class="widget-loader"><span class="spinner-small">Loading...</span></div>');

        setTimeout(function() {
            $(targetWidget).find('.widget-loader').remove();
        }, 1500);
    });
});



/* -------------------------------
   9.0 FUNCTION - Email Page
------------------------------- */

var handleEmailPageSetting = function() {

    /* 9.1 Email - Sidebar
    ------------------------------------------------ */
	if ($('[data-toggle="email-sidebar"]').length !== 0) {
        $('[data-toggle="email-sidebar"]').click(function(e) {
            e.preventDefault();
            if ($(this).closest('.dropdown').hasClass('open')) {
                $(this).closest('.dropdown').removeClass('open');
            } else {
                $(this).closest('.dropdown').addClass('open');
            }
        });
    }
    
    
    /* 9.2 Email Inbox - Check All Button
    ------------------------------------------------ */
    
	if ($('[data-click="check-all"]').length !== 0) {
        $('[data-click="check-all"]').click(function(e) {
            e.preventDefault();
        
            var targetCheckbox = $(this).find('.fa');
        
            if ($(targetCheckbox).hasClass('fa-square-o')) {
                $(targetCheckbox).removeClass('fa-square-o').addClass('fa-check-square-o text-inverse');
                $('.email-checkbox').find('input[type="checkbox"]').prop('checked', false);
                $('[data-toggle="email-checkbox"]').click();
            } else {
                $(targetCheckbox).removeClass('fa-check-square-o text-inverse').addClass('fa-square-o');
                $('.email-checkbox').find('input[type="checkbox"]').prop('checked', true);
                $('[data-toggle="email-checkbox"]').click();
            }
        });
	}
	
	
    /* 9.3 Email Inbox - Checkbox
    ------------------------------------------------ */
    
	if ($('[data-toggle="email-checkbox"]').length !== 0) {
        $('[data-toggle="email-checkbox"]').click(function(e) {
            e.preventDefault();
        
            var targetCheckbox = $(this).closest('.email-checkbox').find('input[type="checkbox"]');
            var targetRow = $(this).closest('tr');
        
            if ($(targetCheckbox).is(':checked')) {
                $(targetCheckbox).prop('checked', false);
                $(targetRow).removeClass('checked');
            } else {
                $(targetCheckbox).prop('checked', true);
                $(targetRow).addClass('checked');
            }
        });
    }
};



/* -------------------------------
   10.0 CONTROLLER - Email Inbox
------------------------------- */

sourceAdminApp.controller('emailInboxController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageContentFullHeight = true;
    $rootScope.setting.layout.pageContentWithoutPadding = true;
    
    handleEmailPageSetting();
});



/* -------------------------------
   11.0 CONTROLLER - Email Compose
------------------------------- */

sourceAdminApp.controller('emailComposeController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageContentFullHeight = true;
    $rootScope.setting.layout.pageContentWithoutPadding = true;
    
    handleEmailPageSetting();
    
    angular.element(document).ready(function () {
		var targetOffset = $('#mail-compose-box').offset();
		var targetHeight = $(window).height() - targetOffset.top - 66;
			targetHeight = ($(window).width() < 768) ? 400 : targetHeight;
		$('#mail-compose-box').summernote({
			height: targetHeight,
		});
	});
});



/* -------------------------------
   12.0 CONTROLLER - Email Detail
------------------------------- */

sourceAdminApp.controller('emailDetailController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageContentFullHeight = true;
    $rootScope.setting.layout.pageContentWithoutPadding = true;
    
    handleEmailPageSetting();
});



/* -------------------------------
   13.0 CONTROLLER - Widgets
------------------------------- */

sourceAdminApp.controller('widgetsController', function($scope, $rootScope, $state) {
    
    /* 13.1 Widgets - Sparksline
    ------------------------------------------------ */
    
    var semiTransparent = 'rgba(0,0,0,0.3)';
    var semiWhiteTransparent = 'rgba(255,255,255,0.2)';
    var semiLimeTransparent = 'rgba(101, 197, 111, 0.7)';
    var semiBlueTransparent = 'rgba(33, 132, 218, 0.67)';
    var options = {
        height: '50px',
        width: '100%',
        fillColor: semiTransparent,
        lineWidth: 1.5,
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
        options.height = '98px';
        options.lineColor = semiTransparent;
        options.lineColor = purpleDark;
        options.fillColor = purpleDark;
        options.highlightLineColor = semiTransparent;
        options.highlightSpotColor = semiTransparent;
        if ($('#sparkline-line-chart').length !== 0) {
            $('#sparkline-line-chart').sparkline(value, options);
        }
        
        var value = [50,30,45,40,50,90,20,35,40,50,70,40,80,70,60,50,40,60,40,90,50,30,50,40,30,20,50,68,92];
        options.barColor = primaryDark;
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
    
    
    /* 13.2 Widgets - Vector Map
    ------------------------------------------------ */

    var targetMap = '#vector-map';
    
    if ($(targetMap).length !== 0) {
        $(targetMap).height($(targetMap).attr('data-height'));
        
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
                    fill: 'rgba(0,0,0,0.35)',
                    "fill-opacity": 1,
                    stroke: 'none',
                    "stroke-width": 2,
                    "stroke-opacity": 1
                },
                hover: { "fill-opacity": 0.8 },
                selected: { fill: 'fff' }
            },
            series: {
                regions: [{
                    values: {
                        IN:'rgba(0,0,0,0.75)',
                        US:'rgba(0,0,0,0.75)',
                        KR:'rgba(0,0,0,0.75)',
                        FR:'rgba(0,0,0,0.75)'
                    }
                }]
            },
            focusOn: {
                x: 0.6,
                y: 0.5,
                scale: 3
            },
            backgroundColor: warning
        });
    }
    
    
    /* 13.3 Widgets - Chat Detail
    ------------------------------------------------ */

    $('[data-toggle="chat-detail"]').click(function(e) {
        e.preventDefault();
        $(this).closest('.widget-chat').addClass('widget-chat-detail-toggled');
    });
    $('[data-dismiss="chat-detail"]').click(function(e) {
        e.preventDefault();
        $(this).closest('.widget-chat').removeClass('widget-chat-detail-toggled');
    });
    
    
    /* 13.4 Widgets - Reload
    ------------------------------------------------ */

    $('[data-click="widget-reload"]').click(function(e) {
        e.preventDefault();
        
        var targetWidget = $(this).closest('.widget');
        $(targetWidget).append('<div class="widget-loader"><span class="spinner-small">Loading...</span></div>');
        setTimeout(function() {
            $(targetWidget).find('.widget-loader').remove();
        }, 1500);
    });
    
    
    /* 13.5 Widgets - Todolist
    ------------------------------------------------ */
    
    $('[data-click="todolist-checkbox"]').click(function(e) {
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
    
    
    /* 13.6 Widgets - Flot Line Chart
    ------------------------------------------------ */
    
    var fontOption = {
        size: 12,
        lineHeight: 16,
        style: fontStyle,
        weight: fontWeight,
        family: fontFamily,
        color: white
    };
    var flotLineChartData = [{ 
        label: 'data 1',  
        data: [[0, 3], [2, 8], [4, 5], [6, 13], [8, 11], [10, 15]], 
        color: white, 
        shadowSize: 0 
    }];
    var flotLineChartOptions = {
        series: {
            lines: { show: true, lineWidth: 3, zero: true },
            points: { show: false, fill: true, fillColor: '#fff' }
        },
        xaxis: {
            tickLength: 0,
            font: fontOption
        },
        yaxis: {
            tickColor: primaryDark,
            tickSize: 4,
            alignTicksWithAxis: true,
            tickDecimals: 0,
            font: fontOption
        },
        grid: {
            borderColor: primaryDark,
            borderWidth: 0
        },
        legend: { show: false }
    };
    this.flotLineChartData = flotLineChartData;
    this.flotLineChartOptions = flotLineChartOptions;
    
    
    /* 13.7 Widgets - Flot Pie Chart
    ------------------------------------------------ */
    
    function labelFormatter(label, series) {
        return '<div style="font-size:11px; text-align:center; color:#fff;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
    }
    var flotPieChartData = [
        { label: 'Age 10+', data: 3, color: 'rgba(255,255,255,0.1)' }, 
        { label: 'Age 20+', data:15, color: 'rgba(255,255,255,0.2)' }, 
        { label: 'Age 30+', data: 7, color: 'rgba(255,255,255,0.3)' }, 
        { label: 'Age 40+', data: 8, color: 'rgba(255,255,255,0.4)' }
    ];
    var flotPieChartOptions = {
        series: {
            pie: { 
                show: true,
                stroke: {
                    color: 'transparent'
                },
                radius: 1,
                label: {
                    show: true,
                    radius: 2/3,
                    formatter: labelFormatter,
                    threshold: 0.1
                }
            }
        },
        legend: { show: false }
    };
    this.flotPieChartData = flotPieChartData;
    this.flotPieChartOptions = flotPieChartOptions;

    
    /* 13.8 Widgets - Flot Bar Chart
    ------------------------------------------------ */
    
    var flotBarChartData = [{ 
        label: 'data 1',  
        data: [[0, 3], [2, 8], [4, 5], [6, 13], [8, 11], [10, 15]], 
        color: 'transparent', 
        shadowSize: 0 
    }];
    var flotBarChartOptions = {
        series: {
            bars: { 
                show: true, 
                fillColor: white, 
                barWidth: 1, 
                align: 'center'
            }
        },
        xaxis: {
            tickLength: 0,
            font: fontOption
        },
        yaxis: {
            tickColor: 'rgba(0,0,0,0.2)',
            tickSize: 4,
            alignTicksWithAxis: true,
            tickDecimals: 0,
            font: fontOption
        },
        grid: {
            borderColor: primaryDark,
            borderWidth: 0
        },
        legend: { show: false }
    };
    this.flotBarChartData = flotBarChartData;
    this.flotBarChartOptions = flotBarChartOptions;
    
    
    /* 13.9 Widgets - Browser Analytics Chart
    ------------------------------------------------ */
    
    var browserChartData = [
        { label: 'Chrome', data: 15, color: success }, 
        { label: 'Safari', data:15, color: primary }, 
        { label: 'IE', data: 7, color: info }, 
        { label: 'Firefox', data: 8, color: warning }, 
        { label: 'Opera', data: 8, color: danger }
    ];
    var browserChartOptions = {
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
    };
    this.browserChartData = browserChartData;
    this.browserChartOptions = browserChartOptions;
    
    
    /* 13.10 Widgets - Browser Analytics Chart
    ------------------------------------------------ */
    
    var d1 = [], d2 = [], d3 = [];
    var fontOption = {
        size: 11,
        lineHeight: 16,
        style: fontStyle,
        weight: fontWeight,
        family: fontFamily,
        color: inverse
    };
    
    for (var i = 0; i <= 10; i += 1) {
        d1.push([i, parseInt(Math.random() * 30)]);
        d2.push([i, parseInt(Math.random() * 30)]);
        d3.push([i, parseInt(Math.random() * 30)]);
    }
    var options = {
        series: {
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            }
        },
        grid: { borderWidth: 0 },
        legend: { show: false },
        xaxis: { font: fontOption },
        yaxis: { font: fontOption }
    };
    
    visitorChartOptions = options;
    visitorChartData = [
        {data: d1, lines: { show: true, fill: true, fillColor: primary, shadow: false }, stack: true, color: primary },
        {data: d2, lines: { show: true, fill: true, fillColor: info, shadow: false }, stack: true, color: info },
        {data: d3, lines: { show: true, fill: true, fillColor: inverse, shadow: false }, stack: true, color: inverse }
    ];
    this.visitorChartData = visitorChartData;
    this.visitorChartOptions = visitorChartOptions;
});



/* -------------------------------
   14.0 CONTROLLER - Modal Notification
------------------------------- */

sourceAdminApp.controller('modalNotificationController', function($scope, $rootScope, $state) {
    
    $('#add-sticky').click( function() {
        $.gritter.add({
            title: 'This is a sticky notice!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '../assets/img/user_1.jpg',
            sticky: true,
            time: '',
            class_name: 'my-sticky-class'
        });
        return false;
    });
    $('#add-regular').click( function() {
        $.gritter.add({
            title: 'This is a regular notice!',
            text: 'This will fade out after a certain amount of time. Sed tempus lacus ut lectus rutrum placerat. ',
            image: '../assets/img/user_2.jpg',
            sticky: false,
            time: ''
        });
        return false;
    });
    $('#add-max').click( function() {
        $.gritter.add({
            title: 'This is a notice with a max of 3 on screen at one time!',
            text: 'This will fade out after a certain amount of time. Sed tempus lacus ut lectus rutrum placerat. ',
            sticky: false,
            image: '../assets/img/user_3.jpg',
            before_open: function() {
                if($('.gritter-item-wrapper').length === 3) {
                    return false;
                }
            }
        });
        return false;
    });
    $('#add-without-image').click(function(){
        $.gritter.add({
            title: 'Notice without an image!',
            text: 'This will fade out after a certain amount of time.'
        });
        return false;
    });
    $('#add-gritter-light').click(function(){
        $.gritter.add({
            title: 'This is a light notification',
            text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
            class_name: 'gritter-light'
        });
        return false;
    });
    $('#add-with-callbacks').click(function(){
        $.gritter.add({
            title: 'This is a notice with callbacks!',
            text: 'The callback is...',
            before_open: function(){
                alert('I am called before it opens');
            },
            after_open: function(e){
                alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
            },
            before_close: function(manual_close) {
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
                alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n" + manually);
            },
            after_close: function(manual_close){
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
                alert('I am called after it closes. ' + manually);
            }
        });
        return false;
    });
    $('#add-sticky-with-callbacks').click(function(){
        $.gritter.add({
            title: 'This is a sticky notice with callbacks!',
            text: 'Sticky sticky notice.. sticky sticky notice...',
            sticky: true,
            before_open: function(){
                alert('I am a sticky called before it opens');
            },
            after_open: function(e){
                alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
            },
            before_close: function(e){
                alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n" + e);
            },
            after_close: function(){
                alert('I am a sticky called after it closes');
            }
        });
        return false;
    });
    $("#remove-all").click(function(){
        $.gritter.removeAll();
        return false;
    });
    $("#remove-all-with-callbacks").click(function(){
        $.gritter.removeAll({
            before_close: function(e){
                alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n" + e);
            },
            after_close: function(){
                alert('I am called after everything has been closed.');
            }
        });
        return false;
    });
});



/* -------------------------------
   15.0 CONTROLLER - Form Plugins
------------------------------- */

sourceAdminApp.controller('formPluginsController', function($scope, $rootScope, $state) {
    
    
    /* 15.1 Form Plugins - Datepicker
    ------------------------------------------------ */
    
    $('#datepicker-default').datepicker({
        todayHighlight: true
    });
    $('#datepicker-inline').datepicker({
        todayHighlight: true
    });
    $('.input-daterange').datepicker({
        todayHighlight: true
    });
    $('#datepicker-disabled-past').datepicker({
        todayHighlight: true
    });
    $('#datepicker-autoClose').datepicker({
        todayHighlight: true,
        autoclose: true
    });
    
    
    /* 15.2 Form Plugins - Ion Range Slider
    ------------------------------------------------ */
    
    $('#default_rangeSlider').ionRangeSlider({
        min: 0,
        max: 5000,
        type: 'double',
        prefix: "$",
        maxPostfix: "+",
        prettify: false,
        hasGrid: true
    });
    $('#customRange_rangeSlider').ionRangeSlider({
        min: 1000,
        max: 100000,
        from: 30000,
        to: 90000,
        type: 'double',
        step: 500,
        postfix: " €",
        hasGrid: true
    });
    $('#customValue_rangeSlider').ionRangeSlider({
        values: [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
        ],
        type: 'single',
        hasGrid: true
    });
    
    
    /* 15.3 Form Plugins - Masked Input
    ------------------------------------------------ */
    
    $("#masked-input-date").mask("99/99/9999");
    $("#masked-input-phone").mask("(999) 999-9999");
    $("#masked-input-tid").mask("99-9999999");
    $("#masked-input-ssn").mask("999-99-9999");
    $("#masked-input-pno").mask("aaa-9999-a");
    $("#masked-input-pkey").mask("a*-999-a999");
    
    
    /* 15.4 Form Plugins - Color Picker
    ------------------------------------------------ */
    
    $('#colorpicker').colorpicker({format: 'hex'});
    $('#colorpicker-prepend').colorpicker({format: 'hex'});
    $('#colorpicker-rgba').colorpicker();
    
    
    /* 15.5 Form Plugins - Timepicker
    ------------------------------------------------ */
    
    $('#timepicker').timepicker();
    
    
    /* 15.6 Form Plugins - Strength JS
    ------------------------------------------------ */

    $("#password-strength").strength({
        strengthClass: 'strength form-control m-b-5',
        strengthMeterClass: 'strength_meter',
        strengthButtonClass: 'button_strength',
        strengthButtonText: 'Show password',
        strengthButtonTextToggle: 'Hide Password'
    });
    
    
    /* 15.7 Form Plugins - Autocomplete
    ------------------------------------------------ */
    
    var availableTags = [
        'ActionScript', 'AppleScript', 'Asp', 'BASIC', 'C', 'C++', 'Clojure', 'COBOL', 
        'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell','Java', 'JavaScript', 
        'Lisp', 'Perl', 'PHP', 'Python', 'Ruby', 'Scala', 'Scheme'
    ];
    $('#jquery-autocomplete').autocomplete({
        source: availableTags
    });
    
    
    /* 15.8 Form Plugins - Bootstrap Combobox
    ------------------------------------------------ */
    
    $('.combobox').combobox();
    
    
    /* 15.9 Form Plugins - Tags Input
    ------------------------------------------------ */

    $('.bootstrap-tagsinput input').focus(function() {
        $(this).closest('.bootstrap-tagsinput').addClass('bootstrap-tagsinput-focus');
    });
    $('.bootstrap-tagsinput input').focusout(function() {
        $(this).closest('.bootstrap-tagsinput').removeClass('bootstrap-tagsinput-focus');
    });
    
    
    /* 15.10 Form Plugins - Selectpicker
    ------------------------------------------------ */

    $('.selectpicker').selectpicker('render');
    
    
    /* 15.11 Form Plugins - jQuery TagIt
    ------------------------------------------------ */

    $('#jquery-tagIt-default').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-inverse').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-white').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-primary').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-info').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-success').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-warning').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-danger').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    
    
    /* 15.12 Form Plugins - Date Range Picker
    ------------------------------------------------ */
    
    $('#default-daterange').daterangepicker({
        opens: 'right',
        format: 'MM/DD/YYYY',
        separator: ' to ',
        startDate: moment().subtract('days', 29),
        endDate: moment(),
        minDate: '01/01/2012',
        maxDate: '12/31/2018',
    },
    function (start, end) {
        $('#default-daterange input').val(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });
    
    $('#advance-daterange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

    $('#advance-daterange').daterangepicker({
        format: 'MM/DD/YYYY',
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        minDate: '01/01/2012',
        maxDate: '12/31/2015',
        dateLimit: { days: 60 },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        opens: 'right',
        drops: 'down',
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-primary',
        cancelClass: 'btn-default',
        separator: ' to ',
        locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Cancel',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        }
    }, function(start, end, label) {
        $('#advance-daterange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    $('#daterange-singledate').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    }, 
    function(start, end, label) {
        var years = moment().diff(start, 'years');
        alert("You are " + years + " years old.");
    });
    
    
    /* 15.13 Form Plugins - Select2
    ------------------------------------------------ */
    
    $(".default-select2").select2();
    $(".multiple-select2").select2({ placeholder: "Select a state" });
    
    
    /* 15.14 Form Plugins - DateTimepicker
    ------------------------------------------------ */
    
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker({
        format: 'LT'
    });
    $('#datetimepicker3').datetimepicker();
    $('#datetimepicker4').datetimepicker();
    $("#datetimepicker3").on("dp.change", function (e) {
        $('#datetimepicker4').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker4").on("dp.change", function (e) {
        $('#datetimepicker3').data("DateTimePicker").maxDate(e.date);
    });
});



/* -------------------------------
   16.0 CONTROLLER - Form Slider & Switcher
------------------------------- */

sourceAdminApp.controller('formSliderSwitcherController', function($scope, $rootScope, $state) {
    
    /* 16.1 Form Plugins - Slider
    ------------------------------------------------ */
    
    if ($('[data-render=switchery]').length !== 0) {
        $('[data-render=switchery]').each(function() {
            var themeColor = success;
            if ($(this).attr('data-theme')) {
                switch ($(this).attr('data-theme')) {
                    case 'danger':
                        themeColor = danger;
                        break;
                    case 'primary':
                        themeColor = primary;
                        break;
                    case 'purple':
                        themeColor = purple;
                        break;
                    case 'warning':
                        themeColor = warning;
                        break;
                    case 'info':
                        themeColor = info;
                        break;
                    case 'lime':
                        themeColor = lime;
                        break;
                    case 'grey':
                        themeColor = grey;
                        break;
                    case 'inverse':
                        themeColor = inverse;
                        break;
                }
            }
            var option = {};
                option.color = themeColor;
                option.secondaryColor = ($(this).attr('data-secondary-color')) ? $(this).attr('data-secondary-color') : '#dfdfdf';
                option.className = ($(this).attr('data-classname')) ? $(this).attr('data-classname') : 'switchery';
                option.disabled = ($(this).attr('data-disabled')) ? true : false;
                option.disabledOpacity = ($(this).attr('data-disabled-opacity')) ? $(this).attr('data-disabled-opacity') : 0.5;
                option.speed = ($(this).attr('data-speed')) ? $(this).attr('data-speed') : '0.5s';
            var switchery = new Switchery(this, option);
        });
    }

    
    /* 16.2 Form Plugins - Switcher
    ------------------------------------------------ */
    
    if ($('[data-render="powerange-slider"]').length !== 0) {
        $('[data-render="powerange-slider"]').each(function() {
            var option = {};
                option.decimal = ($(this).attr('data-decimal')) ? $(this).attr('data-decimal') : false;
                option.disable = ($(this).attr('data-disable')) ? $(this).attr('data-disable') : false;
                option.disableOpacity = ($(this).attr('data-disable-opacity')) ? parseFloat($(this).attr('data-disable-opacity')) : 0.5;
                option.hideRange = ($(this).attr('data-hide-range')) ? $(this).attr('data-hide-range') : false;
                option.klass = ($(this).attr('data-class')) ? $(this).attr('data-class') : '';
                option.min = ($(this).attr('data-min')) ? parseInt($(this).attr('data-min')) : 0;
                option.max = ($(this).attr('data-max')) ? parseInt($(this).attr('data-max')) : 100;
                option.start = ($(this).attr('data-start')) ? $(this).attr('data-start') : null;
                option.step = ($(this).attr('data-step')) ? $(this).attr('data-step') : null;
                option.vertical = ($(this).attr('data-vertical')) ? $(this).attr('data-vertical') : false;
            if ($(this).attr('data-height')) {
                $(this).closest('.slider-wrapper').height($(this).attr('data-height'));
            }
            var switchery = new Switchery(this, option);
            var powerange = new Powerange(this, option);
        });
    }
});



/* -------------------------------
   17.0 CONTROLLER - Form Validation
------------------------------- */

sourceAdminApp.controller('formValidationController', function($scope, $rootScope, $state) {
    
    $scope.submitForm = function(form) {
        if (!form.$valid) {
            $('form[name="'+ form.$name +'"] *').tooltip('dispose');
            angular.forEach(form.$error, function(field) {
                angular.forEach(field, function(errorField) {
                    errorField.$setTouched();
                    var targetContainer = 'form[name="'+ form.$name +'"] [name="'+ errorField.$name +'"]';
                    var targetMessage = (errorField.$error.required) ? 'This is required' : '';
                        targetMessage = (errorField.$error.email) ? 'Invalid email' : targetMessage;
                        targetMessage = (errorField.$error.url) ? 'Invalid website url' : targetMessage;
                        targetMessage = (errorField.$error.number) ? 'Only number is allowed' : targetMessage;
                        targetMessage = (errorField.$name == 'alphabets') ? 'Only alphabets is allowed' : targetMessage;
                        targetMessage = (errorField.$error.minlength) ? 'You must provide at least 20 characters for this field' : targetMessage;
                        targetMessage = (errorField.$error.maxlength) ? 'You must not exceed the maximum of 200 characters for this field' : targetMessage;
                        
                    $(targetContainer).first().tooltip({
                        placement: 'top',
                        trigger: 'normal',
                        title: targetMessage,
                        container: 'body',
                        animation: false
                    });
                    $(targetContainer).first().tooltip('show');
                });
            });
        }
    };
});



/* -------------------------------
   18.0 CONTROLLER - Form WYSIWYG
------------------------------- */

sourceAdminApp.controller('formWysiwygController', function($scope, $rootScope, $state) {
    $('#summernote').summernote({
        height: $('#summernote').attr('data-height')
    });
});



/* -------------------------------
   19.0 CONTROLLER - Table Manage Default
------------------------------- */

sourceAdminApp.controller('tableManageDefaultController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				responsive: true
			});
		}
	});
});



/* -------------------------------
   20.0 CONTROLLER - Table Manage Autofill
------------------------------- */

sourceAdminApp.controller('tableManageAutofillController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				autoFill: true,
				responsive: true
			});
		}
	});
});



/* -------------------------------
   21.0 CONTROLLER - Table Manage Buttons
------------------------------- */

sourceAdminApp.controller('tableManageButtonsController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				dom: 'Bfrtip',
				buttons: [
					'copy', 'csv', 'excel', 'pdf', 'print'
				],
				responsive: true
			});
		}
	});
});



/* -------------------------------
   22.0 CONTROLLER - Table Manage ColReorder
------------------------------- */

sourceAdminApp.controller('tableManageColReorderController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				colReorder: true,
				responsive: true
			});
		}
	});
});



/* -------------------------------
   23.0 CONTROLLER - Table Manage FixedColumns
------------------------------- */

sourceAdminApp.controller('tableManageFixedColumnsController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				scrollY:        300,
				scrollX:        true,
				scrollCollapse: true,
				paging:         false,
				fixedColumns:   true,
				responsive: true
			});
		}
	});
});



/* -------------------------------
   24.0 CONTROLLER - Table Manage FixedHeader
------------------------------- */

sourceAdminApp.controller('tableManageFixedHeaderController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				lengthMenu: [20, 40, 60],
				fixedHeader: {
					header: true,
					headerOffset: $('#header').height()
				},
				responsive: true
			});
		}
	});
});



/* -------------------------------
   25.0 CONTROLLER - Table Manage KeyTable
------------------------------- */

sourceAdminApp.controller('tableManageKeyTableController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				scrollY: 300,
				paging: false,
				autoWidth: true,
				keys: true,
				responsive: true
			});
		}
	});
});



/* -------------------------------
   26.0 CONTROLLER - Table Manage Responsive
------------------------------- */

sourceAdminApp.controller('tableManageResponsiveController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				responsive: true
			});
		}
	});
});



/* -------------------------------
   27.0 CONTROLLER - Table Manage RowReorder
------------------------------- */

sourceAdminApp.controller('tableManageRowReorderController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				rowReorder: true,
				responsive: true
			});
		}
	});
});



/* -------------------------------
   28.0 CONTROLLER - Table Manage Scroller
------------------------------- */

sourceAdminApp.controller('tableManageScrollerController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				ajax:           "../assets/plugins/DataTables/json/scroller-demo.json",
				deferRender:    true,
				scrollY:        300,
				scrollCollapse: true,
				scroller:       true,
				responsive: true
			});
		}
	});
});



/* -------------------------------
   29.0 CONTROLLER - Table Manage Select
------------------------------- */

sourceAdminApp.controller('tableManageSelectController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				select: true,
				responsive: true
			});
		}
	});
});



/* -------------------------------
   30.0 CONTROLLER - Table Manage Combine
------------------------------- */

sourceAdminApp.controller('tableManageCombineController', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
		if ($('#data-table').length !== 0) {
			$('#data-table').DataTable({
				dom: 'lBfrtip',
				buttons: [
					'copy', 'csv', 'excel', 'pdf', 'print'
				],
				responsive: true,
				autoFill: true,
				colReorder: true,
				keys: true,
				rowReorder: true,
				select: true
			});
		}
	});
});



/* -------------------------------
   31.0 CONTROLLER - Google Map
------------------------------- */

function handleGoogleMapLoaded() {
    $(window).trigger('googleMapLoaded');
}
sourceAdminApp.controller('googleMapController', function($scope, $rootScope, $state) {
    
    
    var mapDefault;
    var mapLightDream;
    var mapBlue;
    var mapEsque;
    var mapGrey;
    var mapCobalt;

    var mapLightDreamStyles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
    var mapEsqueStyles = [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];
    var mapCobaltStyles = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":30},{"gamma":0.5},{"hue":"#435158"}]}];
    var mapGreyStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
    var mapBlueStyles = [{"featureType":"all","stylers":[{"hue":"#0000b0"},{"invert_lightness":"true"},{"saturation":-30}]}];
    
    function initialize() {
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(40.742092, -73.971242),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        mapDefault = new google.maps.Map(document.getElementById('google-map-default'), mapOptions);
        
        mapLightDream = new google.maps.Map(document.getElementById('google-map-light-dream'), mapOptions);
        mapLightDream.setOptions({styles: mapLightDreamStyles});
        
        mapEsque = new google.maps.Map(document.getElementById('google-map-esque'), mapOptions);
        mapEsque.setOptions({styles: mapEsqueStyles});
        
        mapGrey = new google.maps.Map(document.getElementById('google-map-grey'), mapOptions);
        mapGrey.setOptions({styles: mapGreyStyles});
        
        mapCobalt = new google.maps.Map(document.getElementById('google-map-cobalt'), mapOptions);
        mapCobalt.setOptions({styles: mapCobaltStyles});
        
        mapBlue = new google.maps.Map(document.getElementById('google-map-blue'), mapOptions);
        mapBlue.setOptions({styles: mapBlueStyles});
        
    }
    
    $(window).unbind('googleMapLoaded');
    $(window).bind('googleMapLoaded', initialize);
    $.getScript("https://maps.google.com/maps/api/js?sensor=false&callback=handleGoogleMapLoaded");
});



/* -------------------------------
   32.0 CONTROLLER - Vector Map
------------------------------- */

sourceAdminApp.controller('vectorMapController', function($scope, $rootScope, $state) {
    
    if ($('#vector-map').length !== 0) {
        var fontFamily = '"Nunito", sans-serif';
        var title = 'Countries population';
        var titleFontSize = '16px';
        var labelFontSize = '13px';
        var inverse = '#30373e';
        var inverseLighter = '#3C454D';
        var grey = '#888f95';
        var greyLighter = '#aab3ba';
        var danger = '#F04B46';
        var transparent = 'transparent';
        
        $("#vector-map").mapael({
            map : {
                name: 'world_countries',
                defaultArea: {
                    attrs: {
                        stroke: '#d5d8da', 
                        'stroke-width': 1.5
                    },
                    attrsHover: {
                        fill: '#1abc9c'
                    }
                },
                zoom: {
                    enabled: true,
                    maxLevel: 10,
                    mousewheel: false
                }
            },
            legend: {
                area: {
                    title: title,
                    titleAttrs: {
                        'font-family': fontFamily,
                        'font-size': titleFontSize
                    },
                    labelAttrs: {
                        'font-family': fontFamily,
                        'font-size': labelFontSize
                    },
                    slices: [
                        {
                            max: 5000000, 
                            attrs: {
                                fill: inverse,
                                stroke: transparent
                            },
                            label: 'Less than 5 millions inhabitants'
                        }, 
                        {
                            min: 5000000, 
                            max: 10000000, 
                            attrs: {
                                fill: inverseLighter,
                                stroke: transparent
                            },
                            label: 'Between 5 millions and 10 millions inhabitants'
                        }, 
                        {
                            min: 10000000, 
                            max: 50000000, 
                            attrs: {
                                fill: grey,
                                stroke: transparent
                            },
                            label: 'Between 10 millions and 50 millions inhabitants'
                        }, 
                        {
                            min: 50000000, 
                            attrs: {
                                fill: greyLighter,
                                stroke: transparent
                            },
                            label: 'More than 50 millions inhabitants'
                        }
                    ]
                },
                plot: {
                    title: 'Cities population',
                    titleAttrs: {
                        'font-family': fontFamily,
                        'font-size': titleFontSize
                    },
                    labelAttrs: {
                        'font-family': fontFamily,
                        'font-size': labelFontSize
                    },
                    slices: [
                        {
                            max: 500000, 
                            attrs: {
                                fill: danger
                            },
                            attrsHover: {
                                transform: 's1.5',
                                'stroke-width': 0,
                                stroke: transparent
                            }, 
                            label: 'less than 500 000 inhabitants', 
                            size: 10
                        },
                        {
                            min: 500000, 
                            max: 1000000, 
                            attrs: {
                                fill: danger
                            },
                            attrsHover: {
                                transform: 's1.5',
                                'stroke-width': 0,
                                stroke: transparent
                            }, 
                            label: 'Between 500 000 and 1 million inhabitants', 
                            size: 20
                        },
                        {
                            min: 1000000, 
                            attrs: {
                                fill: danger
                            },
                            attrsHover: {
                                transform: 's1.5',
                                'stroke-width': 0,
                                stroke: transparent
                            }, 
                            label: 'More than 1 million inhabitants', 
                            size: 30
                        }
                    ]
                }
            },
            plots: {
                'paris': {
                    latitude: 48.86, 
                    longitude: 2.3444, 
                    value: 500000000, 
                    tooltip: { content: 'Paris<br />Population: 500000000' }
                },
                'newyork': {
                    latitude: 40.667, 
                    longitude: -73.833, 
                    value: 200001, 
                    tooltip: { content: 'New york<br />Population: 200001' }
                },
                'sydney': {
                    latitude: -33.917, 
                    longitude: 151.167, 
                    value: 600000, 
                    tooltip: { content: 'Sydney<br />Population: 600000' }
                },
                'brasilia': {
                    latitude: -15.781682, 
                    longitude: -47.924195, 
                    value: 200000001, 
                    tooltip: { content : 'Brasilia<br />Population: 200000001' }
                },
                'tokyo': {
                    latitude: 35.687418, 
                    longitude: 139.692306, 
                    value: 200001, 
                    tooltip: { content: 'Tokyo<br />Population: 200001' }
                }
            },
            areas: {
                "AF": {
                    "value": "35320445",
                    "attrs": {
                        "href": "#"
                    },
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan<\/span><br \/>Population: 35320445"
                    }
                },
                "ZA": {
                    "value": "50586757",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa<\/span><br \/>Population: 50586757"
                    }
                },
                "AL": {
                    "value": "3215988",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania<\/span><br \/>Population: 3215988"
                    }
                },
                "DZ": {
                    "value": "35980193",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria<\/span><br \/>Population: 35980193"
                    }
                },
                "DE": {
                    "value": "81726000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany<\/span><br \/>Population: 81726000"
                    }
                },
                "AD": {
                    "value": "86165",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra<\/span><br \/>Population: 86165"
                    }
                },
                "AO": {
                    "value": "19618432",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola<\/span><br \/>Population: 19618432"
                    }
                },
                "AG": {
                    "value": "89612",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span><br \/>Population: 89612"
                    }
                },
                "SA": {
                    "value": "28082541",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span><br \/>Population: 28082541"
                    }
                },
                "AR": {
                    "value": "40764561",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina<\/span><br \/>Population: 40764561"
                    }
                },
                "AM": {
                    "value": "3100236",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia<\/span><br \/>Population: 3100236"
                    }
                },
                "AU": {
                    "value": "22620600",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia<\/span><br \/>Population: 22620600"
                    }
                },
                "AT": {
                    "value": "8419000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria<\/span><br \/>Population: 8419000"
                    }
                },
                "AZ": {
                    "value": "9168000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span><br \/>Population: 9168000"
                    }
                },
                "BS": {
                    "value": "347176",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br \/>Population: 347176"
                    }
                },
                "BH": {
                    "value": "1323535",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain<\/span><br \/>Population: 1323535"
                    }
                },
                "BD": {
                    "value": "150493658",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh<\/span><br \/>Population: 150493658"
                    }
                },
                "BB": {
                    "value": "273925",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados<\/span><br \/>Population: 273925"
                    }
                },
                "BE": {
                    "value": "11008000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium<\/span><br \/>Population: 11008000"
                    }
                },
                "BZ": {
                    "value": "356600",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize<\/span><br \/>Population: 356600"
                    }
                },
                "BJ": {
                    "value": "9099922",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin<\/span><br \/>Population: 9099922"
                    }
                },
                "BT": {
                    "value": "738267",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan<\/span><br \/>Population: 738267"
                    }
                },
                "BY": {
                    "value": "9473000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus<\/span><br \/>Population: 9473000"
                    }
                },
                "MM": {
                    "value": "48336763",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar<\/span><br \/>Population: 48336763"
                    }
                },
                "BO": {
                    "value": "10088108",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of<\/span><br \/>Population: 10088108"
                    }
                },
                "BA": {
                    "value": "3752228",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span><br \/>Population: 3752228"
                    }
                },
                "BW": {
                    "value": "2030738",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana<\/span><br \/>Population: 2030738"
                    }
                },
                "BR": {
                    "value": "196655014",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil<\/span><br \/>Population: 196655014"
                    }
                },
                "BN": {
                    "value": "405938",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span><br \/>Population: 405938"
                    }
                },
                "BG": {
                    "value": "7476000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br \/>Population: 7476000"
                    }
                },
                "BF": {
                    "value": "16967845",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br \/>Population: 16967845"
                    }
                },
                "BI": {
                    "value": "8575172",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi<\/span><br \/>Population: 8575172"
                    }
                },
                "KH": {
                    "value": "14305183",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia<\/span><br \/>Population: 14305183"
                    }
                },
                "CM": {
                    "value": "20030362",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon<\/span><br \/>Population: 20030362"
                    }
                },
                "CA": {
                    "value": "34482779",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada<\/span><br \/>Population: 34482779"
                    }
                },
                "CV": {
                    "value": "500585",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde<\/span><br \/>Population: 500585"
                    }
                },
                "CF": {
                    "value": "4486837",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic<\/span><br \/>Population: 4486837"
                    }
                },
                "CL": {
                    "value": "17269525",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile<\/span><br \/>Population: 17269525"
                    }
                },
                "CN": {
                    "value": "1344130000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China<\/span><br \/>Population: 1344130000"
                    }
                },
                "CY": {
                    "value": "1116564",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus<\/span><br \/>Population: 1116564"
                    }
                },
                "CO": {
                    "value": "46927125",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia<\/span><br \/>Population: 46927125"
                    }
                },
                "KM": {
                    "value": "753943",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros<\/span><br \/>Population: 753943"
                    }
                },
                "CG": {
                    "value": "4139748",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo<\/span><br \/>Population: 4139748"
                    }
                },
                "CD": {
                    "value": "67757577",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The<\/span><br \/>Population: 67757577"
                    }
                },
                "KP": {
                    "value": "24451285",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of<\/span><br \/>Population: 24451285"
                    }
                },
                "KR": {
                    "value": "49779000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span><br \/>Population: 49779000"
                    }
                },
                "CR": {
                    "value": "4726575",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica<\/span><br \/>Population: 4726575"
                    }
                },
                "CI": {
                    "value": "20152894",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire<\/span><br \/>Population: 20152894"
                    }
                },
                "HR": {
                    "value": "4407000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia<\/span><br \/>Population: 4407000"
                    }
                },
                "CU": {
                    "value": "11253665",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba<\/span><br \/>Population: 11253665"
                    }
                },
                "DK": {
                    "value": "5574000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark<\/span><br \/>Population: 5574000"
                    }
                },
                "DJ": {
                    "value": "905564",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti<\/span><br \/>Population: 905564"
                    }
                },
                "DM": {
                    "value": "67675",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica<\/span><br \/>Population: 67675"
                    }
                },
                "EG": {
                    "value": "82536770",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt<\/span><br \/>Population: 82536770"
                    }
                },
                "AE": {
                    "value": "7890924",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span><br \/>Population: 7890924"
                    }
                },
                "EC": {
                    "value": "14666055",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador<\/span><br \/>Population: 14666055"
                    }
                },
                "ER": {
                    "value": "5415280",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea<\/span><br \/>Population: 5415280"
                    }
                },
                "ES": {
                    "value": "46235000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain<\/span><br \/>Population: 46235000"
                    }
                },
                "EE": {
                    "value": "1340000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia<\/span><br \/>Population: 1340000"
                    }
                },
                "US": {
                    "value": "311591917",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States<\/span><br \/>Population: 311591917"
                    }
                },
                "ET": {
                    "value": "84734262",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia<\/span><br \/>Population: 84734262"
                    }
                },
                "FJ": {
                    "value": "868406",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji<\/span><br \/>Population: 868406"
                    }
                },
                "FI": {
                    "value": "5387000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland<\/span><br \/>Population: 5387000"
                    }
                },
                "FR": {
                    "value": "65436552",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France<\/span><br \/>Population: 65436552"
                    }
                },
                "GA": {
                    "value": "1534262",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon<\/span><br \/>Population: 1534262"
                    }
                },
                "GM": {
                    "value": "1776103",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia<\/span><br \/>Population: 1776103"
                    }
                },
                "GE": {
                    "value": "4486000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia<\/span><br \/>Population: 4486000"
                    }
                },
                "GH": {
                    "value": "24965816",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana<\/span><br \/>Population: 24965816"
                    }
                },
                "GR": {
                    "value": "11304000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece<\/span><br \/>Population: 11304000"
                    }
                },
                "GD": {
                    "value": "104890",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada<\/span><br \/>Population: 104890"
                    }
                },
                "GT": {
                    "value": "14757316",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala<\/span><br \/>Population: 14757316"
                    }
                },
                "GN": {
                    "value": "10221808",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea<\/span><br \/>Population: 10221808"
                    }
                },
                "GQ": {
                    "value": "720213",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span><br \/>Population: 720213"
                    }
                },
                "GW": {
                    "value": "1547061",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau<\/span><br \/>Population: 1547061"
                    }
                },
                "GY": {
                    "value": "756040",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana<\/span><br \/>Population: 756040"
                    }
                },
                "HT": {
                    "value": "10123787",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti<\/span><br \/>Population: 10123787"
                    }
                },
                "HN": {
                    "value": "7754687",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras<\/span><br \/>Population: 7754687"
                    }
                },
                "HU": {
                    "value": "9971000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary<\/span><br \/>Population: 9971000"
                    }
                },
                "JM": {
                    "value": "2709300",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica<\/span><br \/>Population: 2709300"
                    }
                },
                "JP": {
                    "value": "127817277",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan<\/span><br \/>Population: 127817277"
                    }
                },
                "MH": {
                    "value": "54816",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span><br \/>Population: 54816"
                    }
                },
                "PW": {
                    "value": "20609",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau<\/span><br \/>Population: 20609"
                    }
                },
                "SB": {
                    "value": "552267",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span><br \/>Population: 552267"
                    }
                },
                "IN": {
                    "value": "1241491960",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India<\/span><br \/>Population: 1241491960"
                    }
                },
                "ID": {
                    "value": "242325638",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia<\/span><br \/>Population: 242325638"
                    }
                },
                "JO": {
                    "value": "6181000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan<\/span><br \/>Population: 6181000"
                    }
                },
                "IR": {
                    "value": "74798599",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of<\/span><br \/>Population: 74798599"
                    }
                },
                "IQ": {
                    "value": "32961959",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq<\/span><br \/>Population: 32961959"
                    }
                },
                "IE": {
                    "value": "4487000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland<\/span><br \/>Population: 4487000"
                    }
                },
                "IS": {
                    "value": "319000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland<\/span><br \/>Population: 319000"
                    }
                },
                "IL": {
                    "value": "7765700",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel<\/span><br \/>Population: 7765700"
                    }
                },
                "IT": {
                    "value": "60770000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy<\/span><br \/>Population: 60770000"
                    }
                },
                "KZ": {
                    "value": "16558459",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span><br \/>Population: 16558459"
                    }
                },
                "KE": {
                    "value": "41609728",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya<\/span><br \/>Population: 41609728"
                    }
                },
                "KG": {
                    "value": "5507000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span><br \/>Population: 5507000"
                    }
                },
                "KI": {
                    "value": "101093",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati<\/span><br \/>Population: 101093"
                    }
                },
                "KW": {
                    "value": "2818042",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait<\/span><br \/>Population: 2818042"
                    }
                },
                "LA": {
                    "value": "6288037",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic<\/span><br \/>Population: 6288037"
                    }
                },
                "LS": {
                    "value": "2193843",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho<\/span><br \/>Population: 2193843"
                    }
                },
                "LV": {
                    "value": "2220000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia<\/span><br \/>Population: 2220000"
                    }
                },
                "LB": {
                    "value": "4259405",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon<\/span><br \/>Population: 4259405"
                    }
                },
                "LR": {
                    "value": "4128572",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia<\/span><br \/>Population: 4128572"
                    }
                },
                "LY": {
                    "value": "6422772",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya<\/span><br \/>Population: 6422772"
                    }
                },
                "LI": {
                    "value": "36304",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span><br \/>Population: 36304"
                    }
                },
                "LT": {
                    "value": "3203000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania<\/span><br \/>Population: 3203000"
                    }
                },
                "LU": {
                    "value": "517000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg<\/span><br \/>Population: 517000"
                    }
                },
                "MK": {
                    "value": "2063893",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of<\/span><br \/>Population: 2063893"
                    }
                },
                "MG": {
                    "value": "21315135",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar<\/span><br \/>Population: 21315135"
                    }
                },
                "MY": {
                    "value": "28859154",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia<\/span><br \/>Population: 28859154"
                    }
                },
                "MW": {
                    "value": "15380888",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi<\/span><br \/>Population: 15380888"
                    }
                },
                "MV": {
                    "value": "320081",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives<\/span><br \/>Population: 320081"
                    }
                },
                "ML": {
                    "value": "15839538",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali<\/span><br \/>Population: 15839538"
                    }
                },
                "MT": {
                    "value": "419000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta<\/span><br \/>Population: 419000"
                    }
                },
                "MA": {
                    "value": "32272974",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco<\/span><br \/>Population: 32272974"
                    }
                },
                "MU": {
                    "value": "1286051",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius<\/span><br \/>Population: 1286051"
                    }
                },
                "MR": {
                    "value": "3541540",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania<\/span><br \/>Population: 3541540"
                    }
                },
                "MX": {
                    "value": "114793341",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico<\/span><br \/>Population: 114793341"
                    }
                },
                "FM": {
                    "value": "111542",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of<\/span><br \/>Population: 111542"
                    }
                },
                "MD": {
                    "value": "3559000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of<\/span><br \/>Population: 3559000"
                    }
                },
                "MC": {
                    "value": "35427",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco<\/span><br \/>Population: 35427"
                    }
                },
                "MN": {
                    "value": "2800114",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia<\/span><br \/>Population: 2800114"
                    }
                },
                "ME": {
                    "value": "632261",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro<\/span><br \/>Population: 632261"
                    }
                },
                "MZ": {
                    "value": "23929708",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique<\/span><br \/>Population: 23929708"
                    }
                },
                "NA": {
                    "value": "2324004",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia<\/span><br \/>Population: 2324004"
                    }
                },
                "NP": {
                    "value": "30485798",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal<\/span><br \/>Population: 30485798"
                    }
                },
                "NI": {
                    "value": "5869859",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua<\/span><br \/>Population: 5869859"
                    }
                },
                "NE": {
                    "value": "16068994",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger<\/span><br \/>Population: 16068994"
                    }
                },
                "NG": {
                    "value": "162470737",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria<\/span><br \/>Population: 162470737"
                    }
                },
                "NO": {
                    "value": "4952000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway<\/span><br \/>Population: 4952000"
                    }
                },
                "NZ": {
                    "value": "4405200",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand<\/span><br \/>Population: 4405200"
                    }
                },
                "OM": {
                    "value": "2846145",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman<\/span><br \/>Population: 2846145"
                    }
                },
                "UG": {
                    "value": "34509205",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda<\/span><br \/>Population: 34509205"
                    }
                },
                "UZ": {
                    "value": "29341200",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span><br \/>Population: 29341200"
                    }
                },
                "PK": {
                    "value": "176745364",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan<\/span><br \/>Population: 176745364"
                    }
                },
                "PS": {
                    "value": "4019433",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of<\/span><br \/>Population: 4019433"
                    }
                },
                "PA": {
                    "value": "3571185",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama<\/span><br \/>Population: 3571185"
                    }
                },
                "PG": {
                    "value": "7013829",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span><br \/>Population: 7013829"
                    }
                },
                "PY": {
                    "value": "6568290",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay<\/span><br \/>Population: 6568290"
                    }
                },
                "NL": {
                    "value": "16696000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands<\/span><br \/>Population: 16696000"
                    }
                },
                "PE": {
                    "value": "29399817",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru<\/span><br \/>Population: 29399817"
                    }
                },
                "PH": {
                    "value": "94852030",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines<\/span><br \/>Population: 94852030"
                    }
                },
                "PL": {
                    "value": "38216000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland<\/span><br \/>Population: 38216000"
                    }
                },
                "PT": {
                    "value": "10637000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal<\/span><br \/>Population: 10637000"
                    }
                },
                "QA": {
                    "value": "1870041",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar<\/span><br \/>Population: 1870041"
                    }
                },
                "DO": {
                    "value": "10056181",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic<\/span><br \/>Population: 10056181"
                    }
                },
                "RO": {
                    "value": "21390000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania<\/span><br \/>Population: 21390000"
                    }
                },
                "GB": {
                    "value": "62641000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom<\/span><br \/>Population: 62641000"
                    }
                },
                "RU": {
                    "value": "141930000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation<\/span><br \/>Population: 141930000"
                    }
                },
                "RW": {
                    "value": "10942950",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda<\/span><br \/>Population: 10942950"
                    }
                },
                "KN": {
                    "value": "53051",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis<\/span><br \/>Population: 53051"
                    }
                },
                "SM": {
                    "value": "31735",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino<\/span><br \/>Population: 31735"
                    }
                },
                "VC": {
                    "value": "109365",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines<\/span><br \/>Population: 109365"
                    }
                },
                "LC": {
                    "value": "176000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span><br \/>Population: 176000"
                    }
                },
                "SV": {
                    "value": "6227491",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador<\/span><br \/>Population: 6227491"
                    }
                },
                "WS": {
                    "value": "183874",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa<\/span><br \/>Population: 183874"
                    }
                },
                "ST": {
                    "value": "168526",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe<\/span><br \/>Population: 168526"
                    }
                },
                "SN": {
                    "value": "12767556",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal<\/span><br \/>Population: 12767556"
                    }
                },
                "RS": {
                    "value": "7261000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia<\/span><br \/>Population: 7261000"
                    }
                },
                "SC": {
                    "value": "86000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles<\/span><br \/>Population: 86000"
                    }
                },
                "SL": {
                    "value": "5997486",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span><br \/>Population: 5997486"
                    }
                },
                "SG": {
                    "value": "5183700",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore<\/span><br \/>Population: 5183700"
                    }
                },
                "SK": {
                    "value": "5440000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia<\/span><br \/>Population: 5440000"
                    }
                },
                "SI": {
                    "value": "2052000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia<\/span><br \/>Population: 2052000"
                    }
                },
                "SO": {
                    "value": "9556873",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia<\/span><br \/>Population: 9556873"
                    }
                },
                "SD": {
                    "value": "34318385",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan<\/span><br \/>Population: 34318385"
                    }
                },
                "SS": {
                    "value": "10314021",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan<\/span><br \/>Population: 10314021"
                    }
                },
                "LK": {
                    "value": "20869000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span><br \/>Population: 20869000"
                    }
                },
                "SE": {
                    "value": "9453000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden<\/span><br \/>Population: 9453000"
                    }
                },
                "CH": {
                    "value": "7907000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland<\/span><br \/>Population: 7907000"
                    }
                },
                "SR": {
                    "value": "529419",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname<\/span><br \/>Population: 529419"
                    }
                },
                "SZ": {
                    "value": "1067773",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland<\/span><br \/>Population: 1067773"
                    }
                },
                "SY": {
                    "value": "20820311",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic<\/span><br \/>Population: 20820311"
                    }
                },
                "TJ": {
                    "value": "6976958",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan<\/span><br \/>Population: 6976958"
                    }
                },
                "TZ": {
                    "value": "46218486",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of<\/span><br \/>Population: 46218486"
                    }
                },
                "TD": {
                    "value": "11525496",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad<\/span><br \/>Population: 11525496"
                    }
                },
                "CZ": {
                    "value": "10546000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic<\/span><br \/>Population: 10546000"
                    }
                },
                "TH": {
                    "value": "69518555",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand<\/span><br \/>Population: 69518555"
                    }
                },
                "TL": {
                    "value": "1175880",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste<\/span><br \/>Population: 1175880"
                    }
                },
                "TG": {
                    "value": "6154813",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo<\/span><br \/>Population: 6154813"
                    }
                },
                "TO": {
                    "value": "104509",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga<\/span><br \/>Population: 104509"
                    }
                },
                "TT": {
                    "value": "1346350",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago<\/span><br \/>Population: 1346350"
                    }
                },
                "TN": {
                    "value": "10673800",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia<\/span><br \/>Population: 10673800"
                    }
                },
                "TM": {
                    "value": "5105301",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span><br \/>Population: 5105301"
                    }
                },
                "TR": {
                    "value": "73639596",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey<\/span><br \/>Population: 73639596"
                    }
                },
                "TV": {
                    "value": "9847",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu<\/span><br \/>Population: 9847"
                    }
                },
                "VU": {
                    "value": "245619",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu<\/span><br \/>Population: 245619"
                    }
                },
                "VE": {
                    "value": "29278000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of<\/span><br \/>Population: 29278000"
                    }
                },
                "VN": {
                    "value": "87840000",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam<\/span><br \/>Population: 87840000"
                    }
                },
                "UA": {
                    "value": "45706100",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine<\/span><br \/>Population: 45706100"
                    }
                },
                "UY": {
                    "value": "3368595",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay<\/span><br \/>Population: 3368595"
                    }
                },
                "YE": {
                    "value": "24799880",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen<\/span><br \/>Population: 24799880"
                    }
                },
                "ZM": {
                    "value": "13474959",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia<\/span><br \/>Population: 13474959"
                    }
                },
                "ZW": {
                    "value": "12754378",
                    "href": "#",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe<\/span><br \/>Population: 12754378"
                    }
                }
            }
        });
    }
});



/* -------------------------------
   33.0 CONTROLLER - Flot Chart
------------------------------- */

sourceAdminApp.controller('flotChartController', function($scope, $rootScope, $state) {
    
    /* 33.1 Flot - Stacked Chart
    ------------------------------------------------ */
    
    var d1 = [], d2 = [], d3 = [];
    for (var a = 0; a <= 5; a += 1) {
        d1.push([a, parseInt(Math.random() * 5)]);
        d2.push([a, parseInt(Math.random() * 5 + 5)]);
        d3.push([a, parseInt(Math.random() * 5 + 5)]);
    }
    
    var stackedChartData = [{
        data: d1,
        color: inverse,
        label: 'Series 1',
        bars: {
            fillColor: inverse
        }
    }, {
        data: d2,
        color: warning,
        label: 'Series 2',
        bars: {
            fillColor: warning
        }
    }, {
        data: d3,
        color: danger,
        label: 'Series 3',
        bars: {
            fillColor: danger
        }
    }];
    
    var tickLabel = [[0, "MON"], [1, "TUE"], [2, "WED"], [3, "THU"], [4, "FRI"], [5, "SAT"]];
    var stackedChartOptions = { 
        xaxis: {  tickColor: '#ddd',  ticks: tickLabel, autoscaleMargin: 0.1},
        yaxis: {  tickColor: '#ddd'},
        grid: { 
            hoverable: true, 
            tickColor: "#ddd",
            borderWidth: 1,
            borderColor: '#ddd'
        },
        series: {
            stack: true,
            lines: { show: false, fill: false, steps: false },
            bars: { show: true, barWidth: 0.5, align: 'center', fillColor: null },
            highlightColor: 'rgba(0,0,0,0.8)'
        },
        legend: {
            show: true,
            labelBoxBorderColor: '#ccc',
            position: 'ne',
            noColumns: 1
        }
    };
    
    this.stackedChartOptions = stackedChartOptions;
    this.stackedChartData = stackedChartData;

    function showStackedChartTooltip(x, y, contents) {
        $('<div id="tooltip" class="flot-tooltip">' + contents + '</div>').css( {
            top: y,
            left: x + 35
        }).appendTo("body").fadeIn(200);
    }
    
    var previousXValue = null;
    var previousYValue = null;
    $("#stacked-chart").bind("plothover", function (event, pos, item) {
        if (item) {
            var y = item.datapoint[1] - item.datapoint[2];
    
            if (previousXValue != item.series.label || y != previousYValue) {
                previousXValue = item.series.label;
                previousYValue = y;
                $("#tooltip").remove();

                showStackedChartTooltip(item.pageX, item.pageY, y + " " + item.series.label);
            }
        }
        else {
            $("#tooltip").remove();
            previousXValue = null;
            previousYValue = null;       
        }
    });


    /* 33.2 Flot - Tracking Chart
    ------------------------------------------------ */
    
    var sin = [], cos = [];
    for (var i = 0; i < 14; i += 0.1) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }
    
    function updateLegend() {
        updateLegendTimeout = null;
        var pos = latestPosition;

        var axes = plot.getAxes();
        if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
            pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
            return;
        }
        var i, j, dataset = plot.getData();
        for (i = 0; i < dataset.length; ++i) {
            var series = dataset[i];

            for (j = 0; j < series.data.length; ++j) {
                if (series.data[j][0] > pos.x) {
                    break;
                }
            }
    
            var y, p1 = series.data[j - 1], p2 = series.data[j];
            if (p1 === null) {
                y = p2[1];
            } else if (p2 === null) {
                y = p1[1];
            } else {
                y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
            }

            legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
        }
    }
    
    var trackingChartData = [ 
        { data: sin, label: "Series1", color: inverse, shadowSize: 0 },
        { data: cos, label: "Series2", color: success, shadowSize: 0 } 
    ];
    var trackingChartOptions = {
        series: {
            lines: { show: true }
        },
        crosshair: { mode: "x", color: inverse },
        grid: { hoverable: true, autoHighlight: false, borderColor: '#ccc', borderWidth: 0 },
        xaxis: {   },
        yaxis: {  tickColor: '#ddd', min: -2, max: 2 },
        legend: {
            labelBoxBorderColor: '#ddd',
            backgroundOpacity: 0.4,
            color:'#fff',
            show: true
        }
    };
    
    this.trackingChartData = trackingChartData;
    this.trackingChartOptions = trackingChartOptions;
        
    var legends = $("#tracking-chart .legendLabel");
    legends.each(function () {
        $(this).css('width', $(this).width());
    });

    var updateLegendTimeout = null;
    var latestPosition = null;

    $("#tracking-chart").bind("plothover",  function (pos) {
        latestPosition = pos;
        if (!updateLegendTimeout) {
            updateLegendTimeout = setTimeout(updateLegend, 50);
        }
    });


    /* 33.3 Flot - Bar Chart
    ------------------------------------------------ */

    var barChartData = [{
        data: [["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17]], 
        color: primary
    }];
    
    var barChartOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 0.4,
                align: 'center',
                fill: true,
                fillColor: primary
            }
        },
        xaxis: {
            mode: "categories",
            tickColor: '#ddd',
            font: {
                size: 11,
                lineHeight: 16,
                style: "normal",
                weight: "300",
                family: "'Nunito', sans-serif",
                color: "#30373e"
            },
            autoscaleMargin:0.1
        },
        yaxis: {
            min: 0,
            font: {
                size: 11,
                lineHeight: 16,
                style: "normal",
                weight: "300",
                family: "'Nunito', sans-serif",
                color: "#30373e"
            }
        },
        grid: {
            borderWidth: 1,
            borderColor: '#ddd'
        }
    };
    
    this.barChartData = barChartData;
    this.barChartOptions = barChartOptions;


    /* 33.4 Flot - Pie Chart
    ------------------------------------------------ */
    
    var pieChartData = [];
    var colorArray = [success, inverse, grey];
    
    for (var i = 0; i < 3; i++) {
        pieChartData[i] = { 
            label: 'Series ' + (i+1), 
            data: Math.floor(Math.random()*100)+1, 
            color: colorArray[i]
        };
    }
    
    var pieChartOptions =  {
        series: {
            pie: { 
                show: true
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        legend: {
            labelBoxBorderColor: '#ddd',
            backgroundColor: 'none'
        }
    };
    
    this.pieChartData = pieChartData;
    this.pieChartOptions = pieChartOptions;


    /* 33.5 Flot - Doughnut Chart
    ------------------------------------------------ */
    
    var doughnutChartData = [];
    var colorArray = [inverse, primary, grey];
    var nameArray = ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'];
    var dataArray = [20,14,12,31,23];
    
    for (var i = 0; i < 3; i++) {
        doughnutChartData[i] = { 
            label: nameArray[i], 
            data: dataArray[i], 
            color: colorArray[i] 
        };
    }
    var doughnutChartOptions = {
        series: {
            pie: { 
                innerRadius: 0.5,
                show: true,
                combine: {
                    color: '#999',
                    threshold: 0.2
                }
            }
        },
        grid: {
            borderWidth:0, 
            hoverable: true, 
            clickable: true
        }
    };
    
    this.doughnutChartData = doughnutChartData;
    this.doughnutChartOptions = doughnutChartOptions;
    


    /* 33.6 Flot - Line Chart
    ------------------------------------------------ */

    var d1 = [[1, 35], [2,60], [3, 55], [4, 50], [5, 35], [6, 45],[7, 55], [8, 50], [9,75], [10, 80], [11, 65], [12, 80], [13, 60]];
    var d2 = [[1, 26], [2,13], [3, 18], [4, 35], [5, 23], [6, 18],[7, 35], [8, 24], [9,14], [10, 14], [11, 29], [12, 30], [13, 43]];
    
    var lineChartData = [{
        data: d1, 
        label: "Page Views", 
        color: purple,
        lines: { show: true, fill:false, lineWidth: 2 },
        points: { show: true, radius: 3, fillColor: '#fff' },
        shadowSize: 0
    }, {
        data: d2,
        label: 'Visitors',
        color: inverse,
        lines: { show: true, fill:false, lineWidth: 2, fillColor: '' },
        points: { show: true, radius: 3, fillColor: '#fff' },
        shadowSize: 0
    }];
    var lineChartOptions = {
        xaxis: {  
            tickColor: '#ddd',
            tickSize: 2,
            font: {
                size: 11,
                lineHeight: 16,
                style: "normal",
                weight: "300",
                family: "'Nunito', sans-serif",
                color: "#30373e"
            }
        },
        yaxis: {  
            tickColor: '#ddd', 
            tickSize: 20,
            font: {
                size: 11,
                lineHeight: 16,
                style: "normal",
                weight: "300",
                family: "'Nunito', sans-serif",
                color: "#30373e"
            }
        },
        grid: { 
            hoverable: true, 
            clickable: true,
            tickColor: "#ccc",
            borderWidth: 1,
            borderColor: '#ddd'
        }
    };
    
    this.lineChartData = lineChartData;
    this.lineChartOptions = lineChartOptions;
    
    var previousPoint = null;
    
    function showLineChartTooltip(x, y, contents) {
        $('<div id="tooltip" class="flot-tooltip">' + contents + '</div>').css( {
            top: y - 40,
            left: x - 50
        }).appendTo("body").fadeIn(200);
    }
    $("#line-chart").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));
        if (item) {
            if (previousPoint !== item.dataIndex) {
                previousPoint = item.dataIndex;
                $("#tooltip").remove();
                var y = item.datapoint[1].toFixed(2);
        
                var content = item.series.label + " " + y;
                showLineChartTooltip(item.pageX, item.pageY, content);
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;            
        }
        event.preventDefault();
    });
    

    /* 33.7 Flot - Basic Chart
    ------------------------------------------------ */
    
    function getRandomData() {
        var data = [], res = [], totalPoints = 150;
            data = (data.length > 0) ? data.slice(1) : data;

        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
                y = (y < 0) ? 0 : y;
                y = (y > 100) ? 100 : y;
            data.push(y);
        }
        
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]]);
        }
        return res;
    }
    
    var basicChartData = [getRandomData()];
    var basicChartOptions = {
        series: { shadowSize: 0, color: warning, lines: { show: true, fill:true } }, // drawing is faster without shadows
        yaxis: { 
            min: 0, 
            max: 100, 
            tickColor: '#ddd',
            font: {
                size: 11,
                lineHeight: 16,
                style: "normal",
                weight: "300",
                family: "'Nunito', sans-serif",
                color: "#30373e"
            }
        },
        xaxis: { 
            show: true, 
            tickColor: '#ddd',
            font: {
                size: 11,
                lineHeight: 16,
                style: "normal",
                weight: "300",
                family: "'Nunito', sans-serif",
                color: "#30373e"
            }
        },
        grid: {
            borderWidth: 1,
            borderColor: '#ddd'
        }
    };
    this.basicChartData = basicChartData;
    this.basicChartOptions = basicChartOptions;
});



/* -------------------------------
   34.0 CONTROLLER - Morris Chart
------------------------------- */

sourceAdminApp.controller('morrisChartController', function($scope, $rootScope, $state) {

    /* 34.1 Morris - Line Chart
    ------------------------------------------------ */
    
    var tax_data = [
        {"period": "2011 Q3", "licensed": 3407, "sorned": 660},
        {"period": "2011 Q2", "licensed": 3351, "sorned": 629},
        {"period": "2011 Q1", "licensed": 3269, "sorned": 618},
        {"period": "2010 Q4", "licensed": 3246, "sorned": 661},
        {"period": "2009 Q4", "licensed": 3171, "sorned": 676},
        {"period": "2008 Q4", "licensed": 3155, "sorned": 681},
        {"period": "2007 Q4", "licensed": 3226, "sorned": 620},
        {"period": "2006 Q4", "licensed": 3200, "sorned": 650},
        {"period": "2005 Q4", "licensed": 3300, "sorned": 660}
    ];
    Morris.Line({
        element: 'line-chart',
        data: tax_data,
        xkey: 'period',
        ykeys: ['licensed', 'sorned'],
        labels: ['Licensed', 'Off the road'],
        resize: true,
        lineColors: [inverse, success],
        gridTextFamily: "'Nunito', sans-serif",
        gridTextWeight: '300',
        gridTextSize: 11,
        gridTextColor: '#30373e',
        pointSize: 5,
        lineWidth: 3,
        pointStrokeColors: ['#ffffff', '#ffffff']
    });
    

    /* 34.2 Morris - Bar Chart
    ------------------------------------------------ */
    
    Morris.Bar({
        element: 'bar-chart',
        data: [
            {device: 'iPhone', geekbench: 136},
            {device: 'iPhone 3G', geekbench: 137},
            {device: 'iPhone 3GS', geekbench: 275},
            {device: 'iPhone 4', geekbench: 380},
            {device: 'iPhone 4S', geekbench: 655},
            {device: 'iPhone 5', geekbench: 1571}
        ],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        resize: true,
        gridTextFamily: "'Nunito', sans-serif",
        gridTextWeight: '300',
        gridTextSize: 11,
        gridTextColor: '#30373e',
        barColors: [inverse]
    });
    

    /* 34.3 Morris - Area Chart
    ------------------------------------------------ */
    
    Morris.Area({
        element: 'area-chart',
        data: [
            {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
            {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
            {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
            {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
            {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
            {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
            {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
            {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
            {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
            {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
        ],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        gridTextFamily: "'Nunito', sans-serif",
        gridTextWeight: '300',
        gridTextSize: 11,
        gridTextColor: '#30373e',
        resize: true,
        lineColors: [primary, info, inverse]
    });
    

    /* 34.4 Morris - Donut Chart
    ------------------------------------------------ */
    
    Morris.Donut({
        element: 'donut-chart',
        data: [
            {label: 'Jam', value: 25 },
            {label: 'Frosted', value: 40 },
            {label: 'Custard', value: 25 },
            {label: 'Sugar', value: 10 }
        ],
        formatter: function (y) { return y + "%" },
        resize: true,
        colors: [inverse, warning, danger, grey]
    });
    
});



/* -------------------------------
   35.0 CONTROLLER - Chart JS
------------------------------- */

sourceAdminApp.controller('chartJsController', function($scope, $rootScope, $state) {
    
    /* 35.1 Char JS - Options
    ------------------------------------------------ */
    
    var chartOptions = {
        animation: true,
        animationSteps: 60,
        animationEasing: 'easeOutQuart',
        showScale: true,
        scaleOverride: false,
        scaleSteps: null,
        scaleStepWidth: null,
        scaleStartValue: null,
        scaleLineColor: '#ddd',
        scaleLineWidth: 1,
        scaleShowLabels: true,
        scaleLabel: '<%=value%>',
        scaleIntegersOnly: true,
        scaleBeginAtZero: false,
        scaleFontFamily: '""Nunito", sans-serif',
        scaleFontSize: 12,
        scaleFontStyle: '300',
        scaleFontColor: '#30373e',
        responsive: true,
        maintainAspectRatio: true,
        showTooltips: true,
        customTooltips: false,
        tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
        tooltipFillColor: 'rgba(0,0,0,0.8)',
        tooltipFontFamily: '"Nunito", sans-serif',
        tooltipFontSize: 11,
        tooltipFontStyle: '300',
        tooltipFontColor: '#fff',
        tooltipTitleFontFamily: '"Nunito", sans-serif',
        tooltipTitleFontSize: 11,
        tooltipTitleFontStyle: '300',
        tooltipTitleFontColor: '#fff',
        tooltipYPadding: 10,
        tooltipXPadding: 10,
        tooltipCaretSize: 8,
        tooltipCornerRadius: 3,
        tooltipXOffset: 10,
        tooltipTemplate: '<%if (label){%><%=label%>: <%}%><%= value %>',
        multiTooltipTemplate: '<%= value %>',
        onAnimationProgress: function(){},
        onAnimationComplete: function(){}
    };
    this.chartOptions = chartOptions;
    
    
    /* 35.2 Char JS - Bar Chart
    ------------------------------------------------ */
    
    var randomScalingFactor = function() { 
        return Math.round(Math.random()*100)
    };
    var barChartData = {
        labels : ['January','February','March','April','May','June','July'],
        datasets : [
            {
                fillColor : inverse,
                strokeColor : inverse,
                highlightFill: inverse,
                highlightStroke: inverse,
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                fillColor : purple,
                strokeColor : purple,
                highlightFill: purple,
                highlightStroke: purple,
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    };
    this.barChartData = barChartData;

    
    /* 35.3 Char JS - Doughnut Chart
    ------------------------------------------------ */
    
    var doughnutChartData = [{
        value: 300,
        color: grey,
        highlight: grey,
        label: 'Grey'
    }, {
        value: 50,
        color: success,
        highlight: success,
        label: 'Green'
    }, {
        value: 100,
        color: primary,
        highlight: primary,
        label: 'Blue'
    }, {
        value: 40,
        color: info,
        highlight: info,
        label: 'Aqua'
    }, {
        value: 120,
        color: inverse,
        highlight: inverse,
        label: 'Black'
    }];
    this.doughnutChartData = doughnutChartData;

    
    /* 35.4 Char JS - Line Chart
    ------------------------------------------------ */
    
    var lineChartData = {
        labels : ['January','February','March','April','May','June','July'],
        datasets : [{
            label: 'My First dataset',
            fillColor : 'rgba(60,69,77,0.15)',
            strokeColor : inverse,
            pointColor : inverse,
            pointStrokeColor : white,
            pointHighlightFill : white,
            pointHighlightStroke : inverse,
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }, {
            label: 'My Second dataset',
            fillColor : 'rgba(23,182,264,0.15)',
            strokeColor : success,
            pointColor : success,
            pointStrokeColor : white,
            pointHighlightFill : white,
            pointHighlightStroke : success,
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }]
    };
    this.lineChartData = lineChartData;

    
    /* 35.5 Char JS - Pie Chart
    ------------------------------------------------ */
    
    var pieChartData = [{
        value: 300,
        color: success,
        highlight: success,
        label: 'Purple'
    }, {
        value: 50,
        color: primary,
        highlight: primary,
        label: 'Blue'
    }, {
        value: 100,
        color: info,
        highlight: info,
        label: 'Aqua'
    }, {
        value: 40,
        color: grey,
        highlight: grey,
        label: 'Grey'
    }, {
        value: 120,
        color: inverse,
        highlight: inverse,
        label: 'Black'
    }];
    this.pieChartData = pieChartData;

    
    /* 35.6 Char JS - Polar Chart
    ------------------------------------------------ */

    var polarChartData = [{
        value: 200,
        color: danger,
        highlight: danger,
        label: 'Red'
    }, {
        value: 50,
        color: warning,
        highlight: warning,
        label: 'Orange'
    }, {
        value: 100,
        color: success,
        highlight: success,
        label: 'Green'
    }, {
        value: 40,
        color: grey,
        highlight: grey,
        label: 'Grey'
    }, {
        value: 120,
        color: inverse,
        highlight: inverse,
        label: 'Black'
    }];
    this.polarChartData = polarChartData;

    
    /* 35.7 Char JS - Radar Chart
    ------------------------------------------------ */
    
    var radarChartData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
            label: 'My First dataset',
            fillColor: 'rgba(60,69,77,0.15)',
            strokeColor: inverse,
            pointColor: inverse,
            pointStrokeColor: white,
            pointHighlightFill: white,
            pointHighlightStroke: inverse,
            data: [65,59,90,81,56,55,40]
        }, {
            label: 'My Second dataset',
            fillColor: 'rgba(33,132,218,0.15)',
            strokeColor: primary,
            pointColor: primary,
            pointStrokeColor: white,
            pointHighlightFill: white,
            pointHighlightStroke: primary,
            data: [28,48,40,19,96,27,100]
        }]
    };
    this.radarChartData = radarChartData;
});



/* -------------------------------
   36.0 CONTROLLER - Calendar
------------------------------- */

sourceAdminApp.controller('calendarController', function($scope, $rootScope, $state) {
    $('#external-events .fc-event').each(function() {
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });
    });

    var date = new Date();
    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth() + 1;
        currentMonth = (currentMonth < 10) ? '0' + currentMonth : currentMonth;
    
    $('#calendar').fullCalendar({
        header: {
            left: 'month,agendaWeek,agendaDay',
            center: 'title',
            right: 'prev,today,next '
        },
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function() {
            $(this).remove();
        },
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [{
            title: 'All Day Event',
            start: currentYear + '-'+ currentMonth +'-01'
        }, {
            title: 'Long Event',
            start: currentYear + '-'+ currentMonth +'-07',
            end: currentYear + '-'+ currentMonth +'-10'
        }, {
            id: 999,
            title: 'Repeating Event',
            start: currentYear + '-'+ currentMonth +'-09T16:00:00'
        }, {
            id: 999,
            title: 'Repeating Event',
            start: currentYear + '-'+ currentMonth +'-16T16:00:00'
        }, {
            title: 'Conference',
            start: currentYear + '-'+ currentMonth +'-11',
            end: currentYear + '-'+ currentMonth +'-13'
        }, {
            title: 'Meeting',
            start: currentYear + '-'+ currentMonth +'-12T10:30:00',
            end: currentYear + '-'+ currentMonth +'-12T12:30:00'
        }, {
            title: 'Lunch',
            start: currentYear + '-'+ currentMonth +'-12T12:00:00'
        }, {
            title: 'Meeting',
            start: currentYear + '-'+ currentMonth +'-12T14:30:00'
        }, {
            title: 'Happy Hour',
            start: currentYear + '-'+ currentMonth +'-12T17:30:00'
        }, {
            title: 'Dinner',
            start: currentYear + '-'+ currentMonth +'-12T20:00:00'
        }, {
            title: 'Birthday Party',
            start: currentYear + '-'+ currentMonth +'-13T07:00:00'
        }, {
            title: 'Click for Google',
            url: 'https://google.com/',
            start: currentYear + '-'+ currentMonth +'-28'
        }]

    });
});



/* -------------------------------
   37.0 CONTROLLER - Coming Soon
------------------------------- */

sourceAdminApp.controller('comingSoonController', function($scope, $rootScope, $state) {
    var date = new Date();
    var year = date.getFullYear() + 1;
    
    $('#countdown').countdown(year + '/09/01', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="countdown-col"><div class="countdown-number"><span class="number">%d</span></div><div class="countdown-text">days</div></div>'
          + '<div class="countdown-col"><div class="countdown-number"><span class="number">%H</span></div><div class="countdown-text">hour</div></div>'
          + '<div class="countdown-col"><div class="countdown-number"><span class="number">%M</span></div><div class="countdown-text">minutes</div></div>'
          + '<div class="countdown-col"><div class="countdown-number"><span class="number">%S</span></div><div class="countdown-text">second</div></div>'));
    });
    
    $rootScope.setting.layout.paceTop = true;
});



/* -------------------------------
   38.0 CONTROLLER - Error
------------------------------- */

sourceAdminApp.controller('errorController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.paceTop = true;
});



/* -------------------------------
   39.0 CONTROLLER - Login
------------------------------- */

sourceAdminApp.controller('loginController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.paceTop = true;
    
    $scope.submitForm = function(form) {
        if (form.$valid) {
            $state.go('app.dashboard.v2');
        } else {
            var count = 1;
            $('form[name="'+ form.$name +'"] *').tooltip('dispose');
            angular.forEach(form.$error, function (field) {
                angular.forEach(field, function(errorField){
                    if (count == 1) {
                        errorField.$setTouched();
                        var targetContainer = 'form[name="'+ form.$name +'"] [name="'+ errorField.$name +'"]';
                        var targetMessage = (errorField.$error.required) ? 'This is required' : '';
                            targetMessage = (errorField.$error.email) ? 'Invalid Email' : targetMessage;
                        $(targetContainer).tooltip({
                            placement: 'top',
                            trigger: 'normal',
                            title: targetMessage,
                            container: 'body',
                            animation: false
                        });
                        $(targetContainer).tooltip('show');
                        $(targetContainer).focus();
                    }
                    count++;
                })
            });
        }
    };
});



/* -------------------------------
   40.0 CONTROLLER - Register
------------------------------- */

sourceAdminApp.controller('registerController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.paceTop = true;
    
    $scope.submitForm = function(form) {
        if (form.$valid) {
            if (form.password != form.password2) {
                var targetContainer = 'form[name="'+ form.$name +'"] [name="password"]';
                var targetMessage = 'Password mismatch';
                $(targetContainer).tooltip({
                    placement: 'top',
                    trigger: 'normal',
                    title: targetMessage,
                    container: 'body',
                    animation: false
                });
                $(targetContainer).tooltip('show');
                $(targetContainer).focus();
                
                form.password.$setValidity('mismatch', false);
                
                return false;
            }
            $state.go('app.dashboard.v2');
        } else {
            var count = 1;
            $('form[name="'+ form.$name +'"] *').tooltip('dispose');
            angular.forEach(form.$error, function (field) {
                angular.forEach(field, function(errorField){
                    if (count == 1) {
                        errorField.$setTouched();
                        var targetContainer = 'form[name="'+ form.$name +'"] [name="'+ errorField.$name +'"]';
                        var targetMessage = (errorField.$error.required) ? 'This is required' : '';
                            targetMessage = (errorField.$error.email) ? 'Invalid Email' : targetMessage;
                            targetMessage = (errorField.$error.mismatch) ? 'Password Mismatch' : targetMessage;
                        $(targetContainer).tooltip({
                            placement: 'top',
                            trigger: 'normal',
                            title: targetMessage,
                            container: 'body',
                            animation: false
                        });
                        $(targetContainer).tooltip('show');
                        $(targetContainer).focus();
                    }
                    count++;
                })
            });
        }
    
    };
});



/* -------------------------------
   41.0 CONTROLLER - Page with Fixed Footer
------------------------------- */

sourceAdminApp.controller('pageWithFixedFooterController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageFixedFooter = true;
});



/* -------------------------------
   42.0 CONTROLLER - Page with Right Sidebar
------------------------------- */

sourceAdminApp.controller('pageWithRightSidebarController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageRightSidebar = true;
});



/* -------------------------------
   43.0 CONTROLLER - Page with Minified Sidebar
------------------------------- */

sourceAdminApp.controller('pageWithMinifiedSidebarController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageSidebarMinified = true;
});



/* -------------------------------
   44.0 CONTROLLER - Page with Two Sidebar
------------------------------- */

sourceAdminApp.controller('pageWithTwoSidebarController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageTwoSidebar = true;
});



/* -------------------------------
   45.0 CONTROLLER - Page with Top Menu
------------------------------- */

sourceAdminApp.controller('pageWithTopMenuController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageTopMenu = true;
    $rootScope.setting.layout.pageWithoutSidebar = true;
});



/* -------------------------------
   46.0 CONTROLLER - Page with Mixed Menu
------------------------------- */

sourceAdminApp.controller('pageWithMixedMenuController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageTopMenu = true;
});



/* -------------------------------
   47.0 CONTROLLER - Page with Boxed Layout
------------------------------- */

sourceAdminApp.controller('pageWithBoxedLayoutController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageBoxedLayout = true;
});



/* -------------------------------
   48.0 CONTROLLER - Boxed Layout with Mixed Menu
------------------------------- */

sourceAdminApp.controller('pageBoxedLayoutWithMixedMenuController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageTopMenu = true;
    $rootScope.setting.layout.pageBoxedLayout = true;
});



/* -------------------------------
   49.0 CONTROLLER - Page without Sidebar
------------------------------- */

sourceAdminApp.controller('pageWithoutSidebarController', function($scope, $rootScope, $state) {
    $rootScope.setting.layout.pageWithoutSidebar = true;
    $rootScope.setting.layout.pageFixedFooter = true;
});



/* -------------------------------
   50.0 CONTROLLER - Dashboard V3
------------------------------- */

sourceAdminApp.controller('dashboardV3Controller', function($scope, $rootScope, $state) {

    var randomScalingFactor = function() { 
        return Math.round(Math.random()*100)
    };
    
    /* 50.1 Dashboard v3 - Bar Chart
    ------------------------------------------------ */
    var barChartData = {
        labels : ['January','February','March','April','May','June','July','August','September','October','November','December'],
        datasets : [{
            label: 'Total Item Sold',
            fillColor : '#30373e',
            strokeColor : '#30373e',
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },{
            label: 'Total Sales',
            fillColor : '#17B6A4',
            strokeColor : '#17B6A4',
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }]
    };
    var barChartOptions = {
        animation: false,
        scaleLineWidth: 2,
        scaleLineColor: "rgba(0,0,0,.1)",
        scaleFontFamily: "'Nunito', sans-serif",
        scaleFontColor: "#899096",
        scaleLabel: "<%=value%>k",
        barStrokeWidth: 0,
        barValueSpacing : 10,
        barShowStroke: true,
        responsive : true,
        tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
        tooltipFillColor: 'rgba(0,0,0,0.8)',
        tooltipFontFamily: '"Nunito", sans-serif',
        tooltipFontSize: 11,
        tooltipFontStyle: '300',
        tooltipFontColor: '#fff',
        tooltipTitleFontFamily: '"Nunito", sans-serif',
        tooltipTitleFontSize: 11,
        tooltipTitleFontStyle: '300',
        tooltipTitleFontColor: '#fff',
        tooltipYPadding: 8,
        tooltipXPadding: 8,
        tooltipCaretSize: 5,
        tooltipCornerRadius: 3
    };
    this.barChartOptions = barChartOptions;
    this.barChartData = barChartData;


    /* 50.2 Dashboard v3 - DataTables & Sparkline
    ------------------------------------------------ */
    var renderDataTableSparkline = function() {
        $('[data-render="sparkline"]').each(function() {
            var randomScalingFactor = function() { 
                return Math.round(Math.random()*100)
            };
            var dataValue = [
                randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
                randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
                randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
                randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
                randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()
            ];
            $(this).sparkline(dataValue, {
                type: 'line', 
                width: '100%', 
                height: '28px',
                fillColor: 'transparent', 
                spotColor: '#F04B46', 
                lineColor: '#17B6A4',
                minSpotColor: '#F04B46',
                maxSpotColor: '#F04B46',
                lineWidth: 1.5,
                spotRadius: 2
            });
        });
    };

    var handleDataTableDefault = function() {
        "use strict";

        if ($('#data-table').length !== 0) {
            $('#data-table').DataTable({
                responsive: true,
                "pageLength": 10,
                "lengthMenu": [[10, 20, -1], [10, 20, "All"]],
                "initComplete": function() {
                    renderDataTableSparkline();
                }
            });
            $('#data-table').on( 'draw.dt', function () {
                renderDataTableSparkline();
            });
        }
    };


    /* 50.3 Dashboard v3 - Gritter Notification
    ------------------------------------------------ */
    var handleDashboardGritterNotification = function() {
        setTimeout(function() {
            $.gritter.add({
                title: 'Welcome back, Admin!',
                text: 'You have 5 new notifications. Please check your inbox.',
                image: '../assets/img/user_profile.jpg',
                sticky: true,
                time: '',
                class_name: 'my-sticky-class'
            });
        }, 1000);
    };

    angular.element(document).ready(function () {
		handleDataTableDefault();
		handleDashboardGritterNotification();
    });
});



/* -------------------------------
   51.0 CONTROLLER - Dashboard V4
------------------------------- */

sourceAdminApp.controller('dashboardV4Controller', function($scope, $rootScope, $state) {
	var handleDashboard4WidgetStatSparkline = function() {
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
			var value = [50,30,45,40,50,90,20,35,40,50,70,40,80,70,60,50,40,60,40,90,50,30,50,40,30,20,50,68,92];
			options.width = '100%';
			options.type= 'bar';
			options.height = '95px';
			options.barColor = semiTransparent;
			options.barSpacing = 3;
			options.barWidth = '10';

			if ($('#dashboard4-sparkline-bar-chart').length !== 0) {
				$('#dashboard4-sparkline-bar-chart').sparkline(value, options);
			}
		}

		renderWidgetStatSparkline();

		$(window).on('resize', function() {
			$('#dashboard4-sparkline-bar-chart').empty();
			handleDashboard4WidgetStatSparkline();
		});
	};

	var handleDashboard4BrowserChart = function() {
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

	var handleDashboard4VisitorAnalyticsChart = function() {
		var targetChart = '#dashboard4-flot-visitor-chart';
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

	var handleDashboard4ServerChart = function() {
		var nextUpdateValue = 0;
		var updateInterval = 1000;
		var targetChart = '#dashboard4-flot-server-chart';

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

	var handleDashboard4WidgetReload = function() {
		$('[data-click="widget-reload"]').live('click', function(e) {
			e.preventDefault();
	
			var targetWidget = $(this).closest('.widget');
			$(targetWidget).append('<div class="widget-loader"><span class="spinner-small">Loading...</span></div>');
	
			setTimeout(function() {
				$(targetWidget).find('.widget-loader').remove();
			}, 1500);
		});
	};
	
	handleDashboard4WidgetStatSparkline();
	handleDashboard4BrowserChart();
	handleDashboard4VisitorAnalyticsChart();
	handleDashboard4ServerChart();
	handleDashboard4WidgetReload();
});