/*   
Template Name: Source Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.5.0
Author: Sean Ngu
Website: http://www.seantheme.com/source-admin-v1.5/admin/
*/

var sourceAdminApp = angular.module('sourceAdminApp', [
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad'
]);

sourceAdminApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/dashboard/v2');

    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'template/app.html',
            abstract: true
        })
        .state('app.dashboard', {
            url: '/dashboard',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.dashboard.v1', {
            url: '/v1',
            templateUrl: 'views/index.html',
            data: { pageTitle: 'Dashboard v1' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angular-flot',
                        files: [
                            '../assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.css',
                            '../assets/plugins/gritter/css/jquery.gritter.css',
                            '../assets/plugins/flot-angular/jquery.flot.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.time.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.resize.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.pie.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.stack.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.crosshair.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.categories.js',
                            '../assets/plugins/flot-angular/CurvedLines/curvedLines.js',
                            '../assets/plugins/flot-angular/angular-flot.js',
                            '../assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js',
                            '../assets/plugins/jquery-jvectormap/jquery-jvectormap-world-merc-en.js',
                            '../assets/plugins/gritter/js/jquery.gritter.js'
                        ] 
                    });
                }]
            }
        })
        .state('app.dashboard.v2', {
            url: '/v2',
            templateUrl: 'views/index_v2.html',
            data: { pageTitle: 'Dashboard v2' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angles',
                        files: [
                            '../assets/plugins/gritter/css/jquery.gritter.css',
                            '../assets/plugins/chart-js-angular/chart.min.js',
                            '../assets/plugins/chart-js-angular/angular/angles.js',
                            '../assets/plugins/gritter/js/jquery.gritter.js'
                        ] 
                    });
                }]
            }
        })
        .state('app.dashboard.v3', {
            url: '/v3',
            templateUrl: 'views/index_v3.html',
            data: { pageTitle: 'Dashboard v3' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angles',
                        files: [
                            '../assets/plugins/gritter/css/jquery.gritter.css',
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
	                        '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
	                        '../assets/plugins/bootstrap-calendar/js/bootstrap_calendar.min.js',
                            '../assets/plugins/chart-js-angular/chart.js',
                            '../assets/plugins/chart-js-angular/angular/angles.js',
                            '../assets/plugins/gritter/js/jquery.gritter.js',
                            '../assets/plugins/bootstrap-calendar/js/bootstrap_calendar.min.js',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            '../assets/plugins/sparkline/jquery.sparkline.min.js'
                        ] 
                    });
                }]
            }
        })
        .state('app.dashboard.v4', {
            url: '/v4',
            templateUrl: 'views/index_v4.html',
            data: { pageTitle: 'Dashboard v4' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                        	'../assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css',
                        	'../assets/plugins/gritter/css/jquery.gritter.css',
                        	'../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                        	'../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                        	'../assets/plugins/flot-angular/jquery.flot.min.js',
							'../assets/plugins/flot-angular/jquery.flot.time.min.js',
							'../assets/plugins/flot-angular/jquery.flot.resize.min.js',
							'../assets/plugins/flot-angular/jquery.flot.pie.min.js',
							'../assets/plugins/flot-angular/jquery.flot.stack.min.js',
							'../assets/plugins/flot-angular/jquery.flot.crosshair.min.js',
							'../assets/plugins/flot-angular/jquery.flot.categories.js',
							'../assets/plugins/flot-angular/CurvedLines/curvedLines.js',
							'../assets/plugins/sparkline/jquery.sparkline.min.js'
                        ] 
                    });
                }]
            }
        })
        .state('app.bootstrap4', {
            url: '/bootstrap-4',
            data: { pageTitle: 'Bootstrap 4' },
            templateUrl: 'views/bootstrap_4.html'
    	})
        .state('app.email', {
            url: '/email',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.email.inbox', {
            url: '/inbox',
            data: { pageTitle: 'Email Inbox' },
            templateUrl: 'views/email_inbox.html'
        })
        .state('app.email.compose', {
            url: '/compose',
            data: { pageTitle: 'Email Compose' },
            templateUrl: 'views/email_compose.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            '../assets/plugins/summernote/summernote-bs4.css',
                            '../assets/plugins/summernote/summernote-bs4.min.js'
                        ] 
                    });
                }]
            }
        })
        .state('app.email.detail', {
            url: '/detail',
            data: { pageTitle: 'Email Detail' },
            templateUrl: 'views/email_detail.html'
        })
        .state('app.widget', {
            url: '/widget',
            data: { pageTitle: 'Widget' },
            templateUrl: 'views/widgets.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angular-flot',
                        files: [
                            '../assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.css',
                            '../assets/plugins/sparkline/jquery.sparkline.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.time.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.resize.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.pie.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.stack.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.crosshair.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.categories.js',
                            '../assets/plugins/flot-angular/angular-flot.js',
                            '../assets/plugins/flot-angular/CurvedLines/curvedLines.js',
                            '../assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js',
                            '../assets/plugins/jquery-jvectormap/jquery-jvectormap-world-merc-en.js'
                        ]
                    });
                }]
            }
        })
        .state('app.ui', {
            url: '/ui',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.ui.general', {
            url: '/general',
            data: { pageTitle: 'UI General' },
            templateUrl: 'views/ui_general.html'
        })
        .state('app.ui.typography', {
            url: '/typography',
            data: { pageTitle: 'UI Typography' },
            templateUrl: 'views/ui_typography.html'
        })
        .state('app.ui.tabsAccordions', {
            url: '/tabs-accordions',
            data: { pageTitle: 'UI Tabs & Accordions' },
            templateUrl: 'views/ui_tabs_accordions.html'
        })
        .state('app.ui.modalNotification', {
            url: '/modal-notification',
            data: { pageTitle: 'UI Modal & Notification' },
            templateUrl: 'views/ui_modal_notification.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            '../assets/plugins/gritter/css/jquery.gritter.css',
                            '../assets/plugins/gritter/js/jquery.gritter.js'
                        ] 
                    });
                }]
            }
        })
        .state('app.ui.widgetBoxes', {
            url: '/widget-boxes',
            data: { pageTitle: 'UI Widget Boxes' },
            templateUrl: 'views/ui_widget_boxes.html'
        })
        .state('app.ui.mediaObject', {
            url: '/media-object',
            data: { pageTitle: 'UI Media Object' },
            templateUrl: 'views/ui_media_object.html'
        })
        .state('app.ui.buttons', {
            url: '/buttons',
            data: { pageTitle: 'UI Buttons' },
            templateUrl: 'views/ui_buttons.html'
        })
        .state('app.ui.fontAwesome', {
            url: '/font-awesome',
            data: { pageTitle: 'UI FontAwesome' },
            templateUrl: 'views/ui_font_awesome.html'
        })
        .state('app.ui.simpleLineIcons', {
            url: '/simple-line-icons',
            data: { pageTitle: 'UI Simple Line Icons' },
            templateUrl: 'views/ui_simple_line_icons.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            '../assets/plugins/simple-line-icons/simple-line-icons.css'
                        ] 
                    });
                }]
            }
        })
        .state('app.ui.ionicons', {
            url: '/ionicons',
            data: { pageTitle: 'UI Ionicons' },
            templateUrl: 'views/ui_ionicons.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            '../assets/plugins/ionicons/css/ionicons.min.css'
                        ] 
                    });
                }]
            }
        })
        .state('app.form', {
            url: '/form',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.form.elements', {
            url: '/element',
            data: { pageTitle: 'Form Elements' },
            templateUrl: 'views/form_elements.html'
        })
        .state('app.form.plugins', {
            url: '/plugins',
            data: { pageTitle: 'Form Plugins' },
            templateUrl: 'views/form_plugins.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            '../assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            '../assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            '../assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            '../assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css',
                            '../assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            '../assets/plugins/strength-js/strength.css',
                            '../assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css',
                            '../assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            '../assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
                            '../assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                            '../assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            '../assets/plugins/select2/dist/css/select2.min.css',
                            '../assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            '../assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            '../assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            '../assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js',
                            '../assets/plugins/masked-input/masked-input.min.js',
                            '../assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            '../assets/plugins/strength-js/strength.js',
                            '../assets/plugins/bootstrap-combobox/js/bootstrap-combobox.js',
                            '../assets/plugins/bootstrap-select/bootstrap-select.min.js',
                            '../assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            '../assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            '../assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            '../assets/plugins/bootstrap-daterangepicker/moment.js',
                            '../assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            '../assets/plugins/select2/dist/js/select2.min.js',
                            '../assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ] 
                    });
                }]
            }
        })
        .state('app.form.sliderSwitcher', {
            url: '/slider-switcher',
            data: { pageTitle: 'Form Slider + Switcher' },
            templateUrl: 'views/form_slider_switcher.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            '../assets/plugins/switchery/switchery.min.css',
                            '../assets/plugins/powerange/powerange.min.css',
                            '../assets/plugins/switchery/switchery.min.js',
                            '../assets/plugins/powerange/powerange.min.js'
                        ] 
                    });
                }]
            }
        })
        .state('app.form.validation', {
            url: '/validation',
            data: { pageTitle: 'Form Validation' },
            templateUrl: 'views/form_validation.html'
        })
        .state('app.form.wysiwyg', {
            url: '/wysiwyg',
            data: { pageTitle: 'Form WYSIWYG' },
            templateUrl: 'views/form_wysiwyg.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            '../assets/plugins/summernote/summernote-bs4.css',
                            '../assets/plugins/summernote/summernote-bs4.min.js'
                        ] 
                    });
                }]
            }
        })
        .state('app.table', {
            url: '/table',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.table.basic', {
            url: '/basic',
            data: { pageTitle: 'Basic Table' },
            templateUrl: 'views/table_basic.html'
        })
        .state('app.table.manage', {
            url: '/manage',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.table.manage.default', {
            url: '/default',
            data: { pageTitle: 'Managed Table Default' },
            templateUrl: 'views/table_manage.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/bootstrap-calendar/js/bootstrap_calendar.min.js',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.autofill', {
            url: '/autofill',
            data: { pageTitle: 'Managed Table Autofill' },
            templateUrl: 'views/table_manage_autofill.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            '../assets/plugins/DataTables/extensions/AutoFill/js/autoFill.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
            
        })
        .state('app.table.manage.buttons', {
            url: '/buttons',
            data: { pageTitle: 'Managed Table Buttons' },
            templateUrl: 'views/table_manage_buttons.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.colReorder', {
            url: '/colreorder',
            data: { pageTitle: 'Managed Table ColReorder' },
            templateUrl: 'views/table_manage_colreorder.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.fixedColumn', {
            url: '/fixed-column',
            data: { pageTitle: 'Managed Table Fixed Column' },
            templateUrl: 'views/table_manage_fixed_columns.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/FixedColumns/css/fixedColumns.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/FixedColumns/js/dataTables.fixedColumns.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.fixedHeader', {
            url: '/fixed-header',
            data: { pageTitle: 'Managed Table Fixed Header' },
            templateUrl: 'views/table_manage_fixed_header.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/FixedHeader/css/fixedHeader.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/FixedHeader/js/dataTables.fixedHeader.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.keyTable', {
            url: '/keytable',
            data: { pageTitle: 'Managed Table KeyTable' },
            templateUrl: 'views/table_manage_keytable.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/KeyTable/js/dataTables.keyTable.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.responsive', {
            url: '/responsive',
            data: { pageTitle: 'Managed Table Responsive' },
            templateUrl: 'views/table_manage_responsive.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.rowReorder', {
            url: '/rowreorder',
            data: { pageTitle: 'Managed Table RowReorder' },
            templateUrl: 'views/table_manage_rowreorder.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/RowReorder/js/dataTables.rowReorder.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.scroller', {
            url: '/scroller',
            data: { pageTitle: 'Managed Table Scroller' },
            templateUrl: 'views/table_manage_scroller.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Scroller/css/scroller.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Scroller/js/dataTables.scroller.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.select', {
            url: '/select',
            data: { pageTitle: 'Managed Table Select' },
            templateUrl: 'views/table_manage_select.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.combine', {
            url: '/combine',
            data: { pageTitle: 'Managed Table Extension Combination' },
            templateUrl: 'views/table_manage_combine.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            '../assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
                            '../assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            '../assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            '../assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            '../assets/plugins/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            '../assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            '../assets/plugins/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            '../assets/plugins/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            '../assets/plugins/DataTables/extensions/KeyTable/js/dataTables.keyTable.min.js',
                            '../assets/plugins/DataTables/extensions/RowReorder/js/dataTables.rowReorder.min.js',
                            '../assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.map', {
            url: '/map',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.map.vector', {
            url: '/vector',
            data: { pageTitle: 'Vector Map' },
            templateUrl: 'views/map_vector.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.4/raphael-min.js',
                            'https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js',
                            '../assets/plugins/jquery-mapael/js/jquery.mapael.js',
                            '../assets/plugins/jquery-mapael/js/maps/france_departments.js',
                            '../assets/plugins/jquery-mapael/js/maps/world_countries.js',
                            '../assets/plugins/jquery-mapael/js/maps/usa_states.js'
                        ]
                    })
                }]
            }
        })
        .state('app.map.google', {
            url: '/google',
            data: { pageTitle: 'Google Map' },
            templateUrl: 'views/map_google.html'
        })
        .state('app.chart', {
            url: '/chart',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.chart.flot', {
            url: '/flot',
            data: { pageTitle: 'Flot Chart' },
            templateUrl: 'views/chart_flot.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angular-flot',
                        files: [
                            '../assets/plugins/flot-angular/jquery.flot.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.time.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.resize.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.pie.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.stack.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.crosshair.min.js',
                            '../assets/plugins/flot-angular/jquery.flot.categories.js',
                            '../assets/plugins/flot-angular/angular-flot.js',
                        ]
                    })
                }]
            }
        })
        
        .state('app.chart.morris', {
            url: '/morris',
            data: { pageTitle: 'Morris Chart' },
            templateUrl: 'views/chart_morris.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            '../assets/plugins/morris/morris.css',
                            '../assets/plugins/morris/raphael.min.js',
                            '../assets/plugins/morris/morris.js'
                        ]
                    })
                }]
            }
        })
                        
        .state('app.chart.chartjs', {
            url: '/chart-js',
            data: { pageTitle: 'Chart JS' },
            templateUrl: 'views/chart_js.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angles',
                        files: [
                            '../assets/plugins/chart-js-angular/chart.js',
                            '../assets/plugins/chart-js-angular/angular/angles.js'
                        ]
                    })
                }]
            }
        })
        
        .state('app.calendar', {
            url: '/calendar',
            data: { pageTitle: 'Calendar' },
            templateUrl: 'views/calendar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            '../assets/plugins/fullcalendar/lib/moment.min.js',
                            '../assets/plugins/fullcalendar/fullcalendar.min.css',
                            '../assets/plugins/fullcalendar/fullcalendar.min.js'
                        ]
                    })
                }]
            }
        })
        .state('app.page', {
            url: '/page',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.page.gallery', {
            url: '/gallery',
            data: { pageTitle: 'Gallery' },
            templateUrl: 'views/extra_gallery.html'
        })
        .state('app.page.timeline', {
            url: '/timeline',
            data: { pageTitle: 'Timeline' },
            templateUrl: 'views/extra_timeline.html'
        })
        .state('app.page.searchResults', {
            url: '/search-results',
            data: { pageTitle: 'Search Results' },
            templateUrl: 'views/extra_search_results.html'
        })
        .state('app.page.invoice', {
            url: '/invoice',
            data: { pageTitle: 'Invoice' },
            templateUrl: 'views/extra_invoice.html'
        })
        .state('comingSoon', {
            url: '/coming-soon',
            data: { pageTitle: 'Coming Soon' },
            templateUrl: 'views/extra_coming_soon.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            '../assets/plugins/jquery-countdown/dist/jquery.countdown.min.js'
                        ]
                    })
                }]
            }
        })
        .state('error', {
            url: '/error',
            data: { pageTitle: '404 Error' },
            templateUrl: 'views/extra_404_error.html'
        })
        .state('login', {
            url: '/login',
            data: { pageTitle: 'Login' },
            templateUrl: 'views/extra_login.html',
        })
        .state('register', {
            url: '/register',
            data: { pageTitle: 'Register' },
            templateUrl: 'views/extra_register.html'
        })
        .state('app.layout', {
            url: '/layout',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.layout.pageBlank', {
            url: '/blank',
            data: { pageTitle: 'Blank Page' },
            templateUrl: 'views/page_blank.html'
        })
        .state('app.layout.pageFixedFooter', {
            url: '/fixed-footer',
            data: { pageTitle: 'Page with Fixed Footer' },
            templateUrl: 'views/page_with_fixed_footer.html'
        })
        .state('app.layout.pageRightSidebar', {
            url: '/right-sidebar',
            data: { pageTitle: 'Page with Right Sidebar' },
            templateUrl: 'views/page_with_right_sidebar.html'
        })
        .state('app.layout.pageMinifiedSidebar', {
            url: '/minified-sidebar',
            data: { pageTitle: 'Page with Minified Sidebar' },
            templateUrl: 'views/page_with_minified_sidebar.html'
        })
        .state('app.layout.pageTwoSidebar', {
            url: '/two-sidebar',
            data: { pageTitle: 'Page with Two Sidebar' },
            templateUrl: 'views/page_with_two_sidebar.html'
        })
        .state('app.layout.pageTopMenu', {
            url: '/top-menu',
            data: { pageTitle: 'Page with Top Menu' },
            templateUrl: 'views/page_with_top_menu.html'
        })
        .state('app.layout.pageMixedMenu', {
            url: '/mixed-menu',
            data: { pageTitle: 'Page with Mixed Menu' },
            templateUrl: 'views/page_with_mixed_menu.html'
        })
        .state('app.layout.pageBoxedLayout', {
            url: '/boxed-layout',
            data: { pageTitle: 'Page with Boxed Layout' },
            templateUrl: 'views/page_with_boxed_layout.html'
        })
        .state('app.layout.pageBoxedMixedMenu', {
            url: '/boxed-mixed-menu',
            data: { pageTitle: 'Page with Mixed Menu Boxed Layout' },
            templateUrl: 'views/page_boxed_mixed_menu.html'
        })
        .state('app.layout.pageWithoutSidebar', {
            url: '/without-sidebar',
            data: { pageTitle: 'Page without Sidebar' },
            templateUrl: 'views/page_without_sidebar.html'
        })
        .state('app.helper', {
            url: '/helper',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.helper.css', {
            url: '/css',
            data: { pageTitle: 'Predefined CSS Classes' },
            templateUrl: 'views/helper_css.html'
        })
}]);

sourceAdminApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);