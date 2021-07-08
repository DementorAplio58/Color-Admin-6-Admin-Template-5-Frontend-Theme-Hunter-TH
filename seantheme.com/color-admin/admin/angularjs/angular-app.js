/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 5
Version: 5.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
*/

var colorAdminApp = angular.module('colorAdminApp', [
  'ui.router',
  'ui.router.state.events',
  'ui.bootstrap',
  'oc.lazyLoad'
]);

colorAdminApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
      data: {
        pageTitle: 'Dashboard v1'
      },
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
            	'../assets/plugins/jvectormap-next/jquery-jvectormap.css',
            	'../assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
            	'../assets/plugins/gritter/css/jquery.gritter.css',
              '../assets/plugins/gritter/js/jquery.gritter.js',
              '../assets/plugins/flot/source/jquery.canvaswrapper.js',
							'../assets/plugins/flot/source/jquery.colorhelpers.js',
							'../assets/plugins/flot/source/jquery.flot.js',
							'../assets/plugins/flot/source/jquery.flot.saturated.js',
							'../assets/plugins/flot/source/jquery.flot.browser.js',
							'../assets/plugins/flot/source/jquery.flot.drawSeries.js',
							'../assets/plugins/flot/source/jquery.flot.uiConstants.js',
							'../assets/plugins/flot/source/jquery.flot.time.js',
							'../assets/plugins/flot/source/jquery.flot.resize.js',
							'../assets/plugins/flot/source/jquery.flot.pie.js',
							'../assets/plugins/flot/source/jquery.flot.crosshair.js',
							'../assets/plugins/flot/source/jquery.flot.categories.js',
							'../assets/plugins/flot/source/jquery.flot.navigate.js',
							'../assets/plugins/flot/source/jquery.flot.touchNavigate.js',
							'../assets/plugins/flot/source/jquery.flot.hover.js',
							'../assets/plugins/flot/source/jquery.flot.touch.js',
							'../assets/plugins/flot/source/jquery.flot.selection.js',
							'../assets/plugins/flot/source/jquery.flot.symbol.js',
							'../assets/plugins/flot/source/jquery.flot.legend.js',
              '../assets/plugins/jquery-sparkline/jquery.sparkline.min.js',
              '../assets/plugins/jvectormap-next/jquery-jvectormap.min.js',
              '../assets/plugins/jvectormap-next/jquery-jvectormap-world-mill.js',
              '../assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.js'
            ]
          });
        }]
      }
    })
    .state('app.dashboard.v2', {
      url: '/v2',
      templateUrl: 'views/index_v2.html',
      data: {
        pageTitle: 'Dashboard v2'
      },
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/jvectormap-next/jquery-jvectormap.css',
              '../assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css',
              '../assets/plugins/gritter/css/jquery.gritter.css',
              '../assets/plugins/nvd3/build/nv.d3.css',
              '../assets/plugins/d3/d3.min.js',
              '../assets/plugins/nvd3/build/nv.d3.min.js',
              '../assets/plugins/jvectormap-next/jquery-jvectormap.min.js',
              '../assets/plugins/jvectormap-next/jquery-jvectormap-world-mill.js',
              '../assets/plugins/bootstrap-calendar/js/bootstrap_calendar.min.js',
              '../assets/plugins/gritter/js/jquery.gritter.js'
            ]
          });
        }]
      }
    })
    .state('app.dashboard.v3', {
      url: '/v3',
      templateUrl: 'views/index_v3.html',
      data: {
        pageTitle: 'Dashboard v3'
      },
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/jvectormap-next/jquery-jvectormap.css',
							'../assets/plugins/nvd3/build/nv.d3.css',
							'../assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
							'../assets/plugins/d3/d3.min.js',
							'../assets/plugins/nvd3/build/nv.d3.min.js',
							'../assets/plugins/jvectormap-next/jquery-jvectormap.min.js',
							'../assets/plugins/jvectormap-next/jquery-jvectormap-world-mill.js',
							'../assets/plugins/apexcharts/dist/apexcharts.min.js',
							'../assets/plugins/moment/min/moment.min.js',
							'../assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
            ]
          });
        }]
      }
    })
    .state('app.email', {
      url: '/email',
      template: '<div ui-view ng-class="{ \'h-100\': setting.layout.appContentFullHeight }"></div>',
      abstract: true
    })
    .state('app.email.inbox', {
      url: '/inbox',
      data: {
        pageTitle: 'Email Inbox'
      },
      templateUrl: 'views/email_inbox.html'
    })
    .state('app.email.compose', {
      url: '/compose',
      data: {
        pageTitle: 'Email Compose'
      },
      templateUrl: 'views/email_compose.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/tag-it/css/jquery.tagit.css',
              '../assets/plugins/summernote/dist/summernote-lite.min.css',
              '../assets/plugins/jquery-migrate/dist/jquery-migrate.min.js',
              '../assets/plugins/tag-it/js/tag-it.min.js',
              '../assets/plugins/summernote/dist/summernote-lite.min.js'
            ]
          })
        }]
      }
    })
    .state('app.email.detail', {
      url: '/detail',
      data: {
        pageTitle: 'Email Detail'
      },
      templateUrl: 'views/email_detail.html'
    })
    .state('app.widget', {
      url: '/widget',
      data: {
        pageTitle: 'Widgets'
      },
      templateUrl: 'views/widget.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
            	'../assets/plugins/nvd3/build/nv.d3.css',
            	'../assets/plugins/d3/d3.min.js',
              '../assets/plugins/nvd3/build/nv.d3.min.js',
              '../assets/plugins/clipboard/dist/clipboard.min.js'
            ]
          })
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
      data: {
        pageTitle: 'UI General'
      },
      templateUrl: 'views/ui_general.html'
    })
    .state('app.ui.typography', {
      url: '/typography',
      data: {
        pageTitle: 'UI Typography'
      },
      templateUrl: 'views/ui_typography.html'
    })
    .state('app.ui.tabsAccordions', {
      url: '/tabs-accordions',
      data: {
        pageTitle: 'UI Tabs & Accordions'
      },
      templateUrl: 'views/ui_tabs_accordions.html'
    })
    .state('app.ui.unlimitedTabs', {
      url: '/unlimited-nav-tabs',
      data: {
        pageTitle: 'UI Unlimited Nav Tabs'
      },
      templateUrl: 'views/ui_unlimited_tabs.html'
    })
    .state('app.ui.modalNotification', {
      url: '/modal-notification',
      data: {
        pageTitle: 'UI Modal & Notification'
      },
      templateUrl: 'views/ui_modal_notification.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/gritter/css/jquery.gritter.css',
              '../assets/plugins/gritter/js/jquery.gritter.js',
              '../assets/plugins/sweetalert/dist/sweetalert.min.js'
            ]
          });
        }]
      }
    })
    .state('app.ui.widgetBoxes', {
      url: '/widget-boxes',
      data: {
        pageTitle: 'UI Widget Boxes'
      },
      templateUrl: 'views/ui_widget_boxes.html'
    })
    .state('app.ui.mediaObject', {
      url: '/media-object',
      data: {
        pageTitle: 'UI Media Object'
      },
      templateUrl: 'views/ui_media_object.html'
    })
    .state('app.ui.buttons', {
      url: '/buttons',
      data: {
        pageTitle: 'UI Buttons'
      },
      templateUrl: 'views/ui_buttons.html'
    })
    .state('app.ui.icons', {
      url: '/font-awesome',
      data: {
        pageTitle: 'UI FontAwesome'
      },
      templateUrl: 'views/ui_icons.html'
    })
    .state('app.ui.simpleLineIcons', {
      url: '/simple-line-icons',
      data: {
        pageTitle: 'UI Simple Line Icons'
      },
      templateUrl: 'views/ui_simple_line_icons.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/simple-line-icons/css/simple-line-icons.css'
            ]
          });
        }]
      }
    })
    .state('app.ui.ionicons', {
      url: '/ionicons',
      data: {
        pageTitle: 'UI Ionicons'
      },
      templateUrl: 'views/ui_ionicons.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/ionicons/css/ionicons.min.css'
            ]
          });
        }]
      }
    })
    .state('app.ui.tree', {
      url: '/tree',
      data: {
        pageTitle: 'UI Tree View'
      },
      templateUrl: 'views/ui_tree.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/jstree/dist/themes/default/style.min.css',
              '../assets/plugins/jstree/dist/jstree.min.js'
            ]
          });
        }]
      }
    })
    .state('app.ui.languageBarIcon', {
      url: '/language-bar-icon',
      data: {
        pageTitle: 'UI Language Bar Icon'
      },
      templateUrl: 'views/ui_language_bar_icon.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/flag-icon-css/css/flag-icon.min.css'
            ]
          });
        }]
      }
    })
    .state('app.ui.socialButtons', {
      url: '/social-buttons',
      data: {
        pageTitle: 'UI Social Buttons'
      },
      templateUrl: 'views/ui_social_buttons.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/bootstrap-social/bootstrap-social.css'
            ]
          });
        }]
      }
    })
    .state('app.ui.tour', {
      url: '/tour',
      data: {
        pageTitle: 'Intro JS'
      },
      templateUrl: 'views/ui_tour.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/intro.js/minified/introjs.min.css',
              '../assets/plugins/intro.js/minified/intro.min.js'
            ]
          });
        }]
      }
    })
    .state('app.ui.offcanvasToasts', {
      url: '/offcanvas-toasts',
      data: {
        pageTitle: 'Offcanvas & Toasts'
      },
      templateUrl: 'views/ui_offcanvas_toasts.html'
    })
    .state('app.bootstrap5', {
      url: '/bootstrap5',
      data: {
        pageTitle: 'Bootstrap 5'
      },
      templateUrl: 'views/bootstrap_5.html'
    })
    .state('app.form', {
      url: '/form',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('app.form.elements', {
      url: '/elements',
      data: {
        pageTitle: 'Form Elements'
      },
      templateUrl: 'views/form_elements.html'
    })
    .state('app.form.plugins', {
      url: '/plugins',
      data: {
        pageTitle: 'Form Plugins'
      },
      templateUrl: 'views/form_plugins.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
							'../assets/plugins/select2/dist/css/select2.min.css',
							'../assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
							'../assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
							'../assets/plugins/ion-rangeslider/css/ion.rangeSlider.min.css',
							'../assets/plugins/tag-it/css/jquery.tagit.css',
							'../assets/plugins/spectrum-colorpicker2/dist/spectrum.min.css',
							'../assets/plugins/select-picker/dist/picker.min.css',
							'../assets/plugins/moment/min/moment.min.js',
							'../assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
							'../assets/plugins/select2/dist/js/select2.min.js',
							'../assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
							'../assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
							'../assets/plugins/ion-rangeslider/js/ion.rangeSlider.min.js',
							'../assets/plugins/jquery.maskedinput/src/jquery.maskedinput.js',
							'../assets/plugins/jquery-migrate/dist/jquery-migrate.min.js',
							'../assets/plugins/tag-it/js/tag-it.min.js',
							'../assets/plugins/clipboard/dist/clipboard.min.js',
							'../assets/plugins/spectrum-colorpicker2/dist/spectrum.min.js',
							'../assets/plugins/select-picker/dist/picker.min.js'
            ]
          });
        }]
      }
    })
    .state('app.form.wizards', {
      url: '/wizards',
      data: {
        pageTitle: 'Form Wizards'
      },
      templateUrl: 'views/form_wizards.html'
    })
    .state('app.form.sliderSwitcher', {
      url: '/slider-switcher',
      data: {
        pageTitle: 'Form Slider + Switcher'
      },
      templateUrl: 'views/form_slider_switcher.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/switchery/dist/switchery.min.css',
							'../assets/plugins/abpetkov-powerange/dist/powerange.min.css',
							'../assets/plugins/switchery/dist/switchery.min.js',
							'../assets/plugins/abpetkov-powerange/dist/powerange.min.js'
            ]
          });
        }]
      }
    })
    .state('app.form.summernote', {
      url: '/summernote',
      data: {
        pageTitle: 'Summernote'
      },
      templateUrl: 'views/form_summernote.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/summernote/dist/summernote-lite.css',
              '../assets/plugins/summernote/dist/summernote-lite.min.js'
            ]
          });
        }]
      }
    })
    .state('app.form.dropzone', {
      url: '/dropzone',
      data: {
        pageTitle: 'Dropzone'
      },
      templateUrl: 'views/form_dropzone.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/dropzone/dist/min/dropzone.min.css',
              '../assets/plugins/dropzone/dist/min/dropzone.min.js'
            ]
          });
        }]
      }
    })
    .state('app.form.validation', {
      url: '/validation',
      data: {
        pageTitle: 'Form Validation'
      },
      templateUrl: 'views/form_validation.html'
    })
    .state('app.form.wysiwyg', {
      url: '/wysiwyg',
      data: {
        pageTitle: 'Form WYSIWYG'
      },
      templateUrl: 'views/form_wysiwyg.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
            	'../assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.min.css',
              '../assets/plugins/ckeditor/ckeditor.js',
							'../assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.all.min.js',
							'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js'
            ]
          });
        }]
      }
    })
    .state('app.form.xEditable', {
      url: '/x-editable',
      data: {
        pageTitle: 'X-Editable'
      },
      templateUrl: 'views/form_editable.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
							'../assets/plugins/x-editable-bs4/dist/bootstrap4-editable/css/bootstrap-editable.css',
							'../assets/plugins/x-editable-bs4/dist/inputs-ext/address/address.css',
							'../assets/plugins/x-editable-bs4/dist/inputs-ext/typeaheadjs/lib/typeahead.js-bootstrap.css',
							'../assets/plugins/bootstrap-datetime-picker/css/bootstrap-datetimepicker.min.css',
							'../assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.min.css',
							'../assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
							'../assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css',
							'../assets/plugins/select2/dist/css/select2.min.css',
							'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js',
							'../assets/plugins/jquery-migrate/dist/jquery-migrate.min.js',
							'../assets/plugins/x-editable-bs4/dist/bootstrap4-editable/js/bootstrap-editable.min.js',
							'../assets/plugins/x-editable-bs4/dist/inputs-ext/address/address.js',
							'../assets/plugins/x-editable-bs4/dist/inputs-ext/typeaheadjs/lib/typeahead.js',
							'../assets/plugins/x-editable-bs4/dist/inputs-ext/typeaheadjs/typeaheadjs.js',
							'../assets/plugins/x-editable-bs4/dist/inputs-ext/wysihtml5/wysihtml5.js',
							'../assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.all.min.js',
							'../assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
							'../assets/plugins/bootstrap-datetime-picker/js/bootstrap-datetimepicker.min.js',
							'../assets/plugins/select2/dist/js/select2.full.min.js',
							'../assets/plugins/jquery-mockjax/dist/jquery.mockjax.min.js',
							'../assets/plugins/moment/min/moment.min.js'
            ]
          });
        }]
      }
    })
    .state('app.form.multipleFileUpload', {
      url: '/multiple-file-upload',
      data: {
        pageTitle: 'Form Multiple File Upload'
      },
      templateUrl: 'views/form_multiple_upload.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
							'../assets/plugins/blueimp-gallery/css/blueimp-gallery.min.css',
							'../assets/plugins/blueimp-file-upload/css/jquery.fileupload.css',
							'../assets/plugins/blueimp-file-upload/css/jquery.fileupload-ui.css',
              '../assets/plugins/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
							'../assets/plugins/blueimp-tmpl/js/tmpl.js',
							'../assets/plugins/blueimp-load-image/js/load-image.all.min.js',
							'../assets/plugins/blueimp-canvas-to-blob/js/canvas-to-blob.js',
							'../assets/plugins/blueimp-gallery/js/jquery.blueimp-gallery.min.js',
							'../assets/plugins/blueimp-file-upload/js/jquery.iframe-transport.js',
							'../assets/plugins/blueimp-file-upload/js/jquery.fileupload.js',
							'../assets/plugins/blueimp-file-upload/js/jquery.fileupload-process.js',
							'../assets/plugins/blueimp-file-upload/js/jquery.fileupload-image.js',
							'../assets/plugins/blueimp-file-upload/js/jquery.fileupload-audio.js',
							'../assets/plugins/blueimp-file-upload/js/jquery.fileupload-video.js',
							'../assets/plugins/blueimp-file-upload/js/jquery.fileupload-validate.js',
							'../assets/plugins/blueimp-file-upload/js/jquery.fileupload-ui.js'
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
      data: {
        pageTitle: 'Basic Table'
      },
      templateUrl: 'views/table_basic.html'
    })
    .state('app.table.manage', {
      url: '/manage',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('app.table.manage.default', {
      url: '/default',
      data: {
        pageTitle: 'Managed Table Default'
      },
      templateUrl: 'views/table_manage.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js'
            ]
          });
        }]
      }
    })
    .state('app.table.manage.autofill', {
      url: '/autofill',
      data: {
        pageTitle: 'Managed Table Autofill'
      },
      templateUrl: 'views/table_manage_autofill.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net-autofill-bs4/css/autoFill.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
							'../assets/plugins/datatables.net-autofill/js/dataTables.autoFill.min.js',
							'../assets/plugins/datatables.net-autofill-bs4/js/autoFill.bootstrap4.min.js'
            ]
          });
        }]
      }

    })
    .state('app.table.manage.buttons', {
      url: '/buttons',
      data: {
        pageTitle: 'Managed Table Buttons'
      },
      templateUrl: 'views/table_manage_buttons.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
							'../assets/plugins/datatables.net-buttons/js/dataTables.buttons.min.js',
							'../assets/plugins/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js',
							'../assets/plugins/datatables.net-buttons/js/buttons.colVis.min.js',
							'../assets/plugins/datatables.net-buttons/js/buttons.flash.min.js',
							'../assets/plugins/datatables.net-buttons/js/buttons.html5.min.js',
							'../assets/plugins/datatables.net-buttons/js/buttons.print.min.js',
							'../assets/plugins/pdfmake/build/pdfmake.min.js',
							'../assets/plugins/pdfmake/build/vfs_fonts.js',
							'../assets/plugins/jszip/dist/jszip.min.js',
            ]
          });
        }]
      }
    })
    .state('app.table.manage.colReorder', {
      url: '/colreorder',
      data: {
        pageTitle: 'Managed Table ColReorder'
      },
      templateUrl: 'views/table_manage_colreorder.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net-colreorder-bs4/css/colReorder.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
							'../assets/plugins/datatables.net-colreorder/js/dataTables.colReorder.min.js',
							'../assets/plugins/datatables.net-colreorder-bs4/js/colReorder.bootstrap4.min.js',
            ]
          });
        }]
      }
    })
    .state('app.table.manage.fixedColumns', {
      url: '/fixed-column',
      data: {
        pageTitle: 'Managed Table Fixed Columns'
      },
      templateUrl: 'views/table_manage_fixed_columns.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-fixedcolumns-bs4/css/fixedColumns.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js',
							'../assets/plugins/datatables.net-fixedcolumns-bs4/js/fixedColumns.bootstrap4.min.js'
            ]
          });
        }]
      }
    })
    .state('app.table.manage.fixedHeader', {
      url: '/fixed-header',
      data: {
        pageTitle: 'Managed Table Fixed Header'
      },
      templateUrl: 'views/table_manage_fixed_header.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
							'../assets/plugins/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js',
							'../assets/plugins/datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4.min.js'
            ]
          });
        }]
      }
    })
    .state('app.table.manage.keyTable', {
      url: '/keytable',
      data: {
        pageTitle: 'Managed Table KeyTable'
      },
      templateUrl: 'views/table_manage_keytable.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net-keytable-bs4/css/keyTable.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
							'../assets/plugins/datatables.net-keytable/js/dataTables.keyTable.min.js',
							'../assets/plugins/datatables.net-keytable-bs4/js/keyTable.bootstrap4.min.js',
            ]
          });
        }]
      }
    })
    .state('app.table.manage.responsive', {
      url: '/responsive',
      data: {
        pageTitle: 'Managed Table Responsive'
      },
      templateUrl: 'views/table_manage_responsive.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
							'../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js'
            ]
          });
        }]
      }
    })
    .state('app.table.manage.rowReorder', {
      url: '/rowreorder',
      data: {
        pageTitle: 'Managed Table RowReorder'
      },
      templateUrl: 'views/table_manage_rowreorder.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net-rowreorder-bs4/css/rowReorder.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
							'../assets/plugins/datatables.net-rowreorder/js/dataTables.rowReorder.min.js',
							'../assets/plugins/datatables.net-rowreorder-bs4/js/rowReorder.bootstrap4.min.js'
            ]
          });
        }]
      }
    })
    .state('app.table.manage.scroller', {
      url: '/scroller',
      data: {
        pageTitle: 'Managed Table Scroller'
      },
      templateUrl: 'views/table_manage_scroller.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net-scroller-bs4/css/scroller.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
							'../assets/plugins/datatables.net-scroller/js/dataTables.scroller.min.js',
							'../assets/plugins/datatables.net-scroller-bs4/js/scroller.bootstrap4.min.js'
            ]
          });
        }]
      }
    })
    .state('app.table.manage.select', {
      url: '/select',
      data: {
        pageTitle: 'Managed Table Select'
      },
      templateUrl: 'views/table_manage_select.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net-select-bs4/css/select.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
							'../assets/plugins/datatables.net-select/js/dataTables.select.min.js',
							'../assets/plugins/datatables.net-select-bs4/js/select.bootstrap4.min.js'
            ]
          });
        }]
      }
    })
    .state('app.table.manage.combine', {
      url: '/combine',
      data: {
        pageTitle: 'Managed Table Extension Combination'
      },
      templateUrl: 'views/table_manage_combine.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
							'../assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css',
							'../assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
							'../assets/plugins/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css',
							'../assets/plugins/datatables.net-autofill-bs4/css/autoFill.bootstrap4.min.css',
							'../assets/plugins/datatables.net-colreorder-bs4/css/colReorder.bootstrap4.min.css',
							'../assets/plugins/datatables.net-keytable-bs4/css/keyTable.bootstrap4.min.css',
							'../assets/plugins/datatables.net-rowreorder-bs4/css/rowReorder.bootstrap4.min.css',
							'../assets/plugins/datatables.net-select-bs4/css/select.bootstrap4.min.css',
							'../assets/plugins/datatables.net/js/jquery.dataTables.min.js',
							'../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js',
							'../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js',
							'../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
							'../assets/plugins/datatables.net-autofill/js/dataTables.autoFill.min.js',
							'../assets/plugins/datatables.net-autofill-bs4/js/autoFill.bootstrap4.min.js',
							'../assets/plugins/datatables.net-colreorder/js/dataTables.colReorder.min.js',
							'../assets/plugins/datatables.net-colreorder-bs4/js/colReorder.bootstrap4.min.js',
							'../assets/plugins/datatables.net-keytable/js/dataTables.keyTable.min.js',
							'../assets/plugins/datatables.net-keytable-bs4/js/keyTable.bootstrap4.min.js',
							'../assets/plugins/datatables.net-rowreorder/js/dataTables.rowReorder.min.js',
							'../assets/plugins/datatables.net-rowreorder-bs4/js/rowReorder.bootstrap4.min.js',
							'../assets/plugins/datatables.net-select/js/dataTables.select.min.js',
							'../assets/plugins/datatables.net-select-bs4/js/select.bootstrap4.min.js',
							'../assets/plugins/datatables.net-buttons/js/dataTables.buttons.min.js',
							'../assets/plugins/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js',
							'../assets/plugins/datatables.net-buttons/js/buttons.colVis.min.js',
							'../assets/plugins/datatables.net-buttons/js/buttons.flash.min.js',
							'../assets/plugins/datatables.net-buttons/js/buttons.html5.min.js',
							'../assets/plugins/datatables.net-buttons/js/buttons.print.min.js',
							'../assets/plugins/pdfmake/build/pdfmake.min.js',
							'../assets/plugins/pdfmake/build/vfs_fonts.js',
							'../assets/plugins/jszip/dist/jszip.min.js',
            ]
          });
        }]
      }
    })
    .state('app.chart', {
      url: '/chart',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('app.chart.flot', {
      url: '/flot',
      data: {
        pageTitle: 'Flot Chart'
      },
      templateUrl: 'views/chart_flot.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/flot/source/jquery.canvaswrapper.js',
							'../assets/plugins/flot/source/jquery.colorhelpers.js',
							'../assets/plugins/flot/source/jquery.flot.js',
							'../assets/plugins/flot/source/jquery.flot.saturated.js',
							'../assets/plugins/flot/source/jquery.flot.browser.js',
							'../assets/plugins/flot/source/jquery.flot.drawSeries.js',
							'../assets/plugins/flot/source/jquery.flot.uiConstants.js',
							'../assets/plugins/flot/source/jquery.flot.time.js',
							'../assets/plugins/flot/source/jquery.flot.resize.js',
							'../assets/plugins/flot/source/jquery.flot.pie.js',
							'../assets/plugins/flot/source/jquery.flot.crosshair.js',
							'../assets/plugins/flot/source/jquery.flot.categories.js',
							'../assets/plugins/flot/source/jquery.flot.navigate.js',
							'../assets/plugins/flot/source/jquery.flot.touchNavigate.js',
							'../assets/plugins/flot/source/jquery.flot.hover.js',
							'../assets/plugins/flot/source/jquery.flot.touch.js',
							'../assets/plugins/flot/source/jquery.flot.selection.js',
							'../assets/plugins/flot/source/jquery.flot.symbol.js',
							'../assets/plugins/flot/source/jquery.flot.legend.js'
            ]
          })
        }]
      }
    })
    .state('app.chart.js', {
      url: '/chart-js',
      data: {
        pageTitle: 'Chart JS'
      },
      templateUrl: 'views/chart_js.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/chart.js/dist/Chart.min.js'
            ]
          })
        }]
      }
    })
    .state('app.chart.apex', {
      url: '/chart-apex',
      data: {
        pageTitle: 'Chart Apex'
      },
      templateUrl: 'views/chart_apex.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              ' ../assets/plugins/apexcharts/dist/apexcharts.min.js'
            ]
          })
        }]
      }
    })
    .state('app.chart.d3', {
      url: '/chart-d3',
      data: {
        pageTitle: 'Chart d3'
      },
      templateUrl: 'views/chart_d3.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/nvd3/build/nv.d3.css',
              '../assets/plugins/d3/d3.min.js',
              '../assets/plugins/nvd3/build/nv.d3.min.js'
            ]
          })
        }]
      }
    })
    .state('app.calendar', {
      url: '/calendar',
      data: {
        pageTitle: 'Calendar'
      },
      templateUrl: 'views/calendar.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
							'../assets/plugins/@fullcalendar/common/main.min.css',
							'../assets/plugins/@fullcalendar/daygrid/main.min.css',
							'../assets/plugins/@fullcalendar/timegrid/main.min.css',
							'../assets/plugins/@fullcalendar/list/main.min.css',
							'../assets/plugins/@fullcalendar/bootstrap/main.min.css',
              '../assets/plugins/moment/min/moment.min.js',
							'../assets/plugins/@fullcalendar/core/main.global.js',
							'../assets/plugins/@fullcalendar/daygrid/main.global.js',
							'../assets/plugins/@fullcalendar/timegrid/main.global.js',
							'../assets/plugins/@fullcalendar/interaction/main.global.js',
							'../assets/plugins/@fullcalendar/list/main.global.js',
							'../assets/plugins/@fullcalendar/bootstrap/main.global.js'
            ]
          })
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
      data: {
        pageTitle: 'Vector Map'
      },
      templateUrl: 'views/map_vector.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/jvectormap-next/jquery-jvectormap.css',
              '../assets/plugins/jvectormap-next/jquery-jvectormap.min.js',
              '../assets/plugins/jvectormap-next/jquery-jvectormap-world-mill.js'
            ]
          })
        }]
      }
    })
    .state('app.map.google', {
      url: '/google',
      data: {
        pageTitle: 'Google Map'
      },
      templateUrl: 'views/map_google.html'
    })
    .state('app.gallery', {
      url: '/gallery',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('app.gallery.v1', {
      url: '/v1',
      data: {
        pageTitle: 'Gallery V1'
      },
      templateUrl: 'views/gallery.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/isotope-layout/dist/isotope.pkgd.min.js',
              '../assets/plugins/lightbox2/dist/js/lightbox.min.js'
            ]
          })
        }]
      }
    })
    .state('app.gallery.v2', {
      url: '/v2',
      data: {
        pageTitle: 'Gallery V2'
      },
      templateUrl: 'views/gallery_v2.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            serie: true,
            files: [
              '../assets/plugins/superbox/superbox.min.css',
              '../assets/plugins/superbox/jquery.superbox.min.js'
            ]
          })
        }]
      }
    })
    .state('app.options', {
      url: '/options',
      template: '<div ui-view ng-class="{ \'h-100\': setting.layout.appContentFullHeight }"></div>',
      abstract: true
    })
    .state('app.options.pageBlank', {
      url: '/blank',
      data: {
        pageTitle: 'Blank Page'
      },
      templateUrl: 'views/page_blank.html'
    })
    .state('app.options.pageWithFooter', {
      url: '/with-footer',
      data: {
        pageTitle: 'Page with Footer'
      },
      templateUrl: 'views/page_with_footer.html'
    })
    .state('app.options.pageWithFixedFooter', {
      url: '/with-fixed-footer',
      data: {
        pageTitle: 'Page with Fixed Footer'
      },
      templateUrl: 'views/page_with_fixed_footer.html'
    })
    .state('app.options.pageWithoutSidebar', {
      url: '/without-sidebar',
      data: {
        pageTitle: 'Page without Sidebar'
      },
      templateUrl: 'views/page_without_sidebar.html'
    })
    .state('app.options.pageWithRightSidebar', {
      url: '/right-sidebar',
      data: {
        pageTitle: 'Page with Right Sidebar'
      },
      templateUrl: 'views/page_with_right_sidebar.html'
    })
    .state('app.options.pageWithMinifiedSidebar', {
      url: '/minified-sidebar',
      data: {
        pageTitle: 'Page with Minified Sidebar'
      },
      templateUrl: 'views/page_with_minified_sidebar.html'
    })
    .state('app.options.pageWithTwoSidebar', {
      url: '/two-sidebar',
      data: {
        pageTitle: 'Page with Two Sidebar'
      },
      templateUrl: 'views/page_with_two_sidebar.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              '../assets/plugins/jquery-sparkline/jquery.sparkline.min.js',
              '../assets/plugins/jquery-knob/dist/jquery.knob.min.js'
            ]
          })
        }]
      }
    })
    .state('app.options.pageFullHeightContent', {
      url: '/full-height-content',
      data: {
        pageTitle: 'Full Height Content'
      },
      templateUrl: 'views/page_full_height.html'
    })
    .state('app.options.pageWithWideSidebar', {
      url: '/wide-sidebar',
      data: {
        pageTitle: 'Page with Wide Sidebar'
      },
      templateUrl: 'views/page_with_wide_sidebar.html'
    })
    .state('app.options.pageWithLightSidebar', {
      url: '/light-sidebar',
      data: {
        pageTitle: 'Page with Light Sidebar'
      },
      templateUrl: 'views/page_with_light_sidebar.html'
    })
    .state('app.options.pageWithMegaMenu', {
      url: '/mega-menu',
      data: {
        pageTitle: 'Page with Mega Menu'
      },
      templateUrl: 'views/page_with_mega_menu.html'
    })
    .state('app.options.pageWithTopMenu', {
      url: '/top-menu',
      data: {
        pageTitle: 'Page with Top Menu'
      },
      templateUrl: 'views/page_with_top_menu.html'
    })
    .state('app.options.pageWithMixedMenu', {
      url: '/mixed-menu',
      data: {
        pageTitle: 'Page with Mixed Menu'
      },
      templateUrl: 'views/page_with_mixed_menu.html'
    })
    .state('app.options.pageWithBoxedLayout', {
      url: '/boxed-layout',
      data: {
        pageTitle: 'Page with Boxed Layout'
      },
      templateUrl: 'views/page_with_boxed_layout.html'
    })
    .state('app.options.pageWithBoxedMixedMenu', {
      url: '/boxed-mixed-menu',
      data: {
        pageTitle: 'Page with Mixed Menu Boxed Layout'
      },
      templateUrl: 'views/page_boxed_layout_with_mixed_menu.html'
    })
    .state('app.options.pageWithTransparentSidebar', {
      url: '/transparent-sidebar',
      data: {
        pageTitle: 'Page with Transparent Sidebar'
      },
      templateUrl: 'views/page_with_transparent_sidebar.html'
    })
    .state('app.options.pageWithSearchSidebar', {
      url: '/search-sidebar',
      data: {
        pageTitle: 'Page with Mega Menu'
      },
      templateUrl: 'views/page_with_search_sidebar.html'
    })
    .state('app.extra', {
      url: '/extra',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('app.extra.timeline', {
      url: '/timeline',
      data: {
        pageTitle: 'Timeline'
      },
      templateUrl: 'views/extra_timeline.html',
    })
    .state('app.extra.searchResults', {
      url: '/search-results',
      data: {
        pageTitle: 'Search Results'
      },
      templateUrl: 'views/extra_search_results.html'
    })
    .state('app.extra.invoice', {
      url: '/invoice',
      data: {
        pageTitle: 'Invoice'
      },
      templateUrl: 'views/extra_invoice.html'
    })
    .state('app.extra.profile', {
      url: '/profile',
      data: {
        pageTitle: 'Profile'
      },
      templateUrl: 'views/extra_profile.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
          	serie: true,
            files: [
              '../assets/plugins/superbox/superbox.min.css',
              '../assets/plugins/lity/dist/lity.min.css',
              '../assets/plugins/superbox/jquery.superbox.min.js',
              '../assets/plugins/lity/dist/lity.min.js'
            ]
          })
        }]
      }
    })
    .state('app.extra.scrumBoard', {
      url: '/scrum-board',
      data: {
        pageTitle: 'Scrum Board'
      },
      templateUrl: 'views/extra_scrum_board.html'
    })
    .state('app.extra.cookieAcceptanceBanner', {
      url: '/cookie-acceptance-banner',
      data: {
        pageTitle: 'Cookie Acceptance Banner'
      },
      templateUrl: 'views/extra_cookie_acceptance_banner.html'
    })
    .state('comingSoon', {
      url: '/coming-soon',
      data: {
        pageTitle: 'Coming Soon'
      },
      templateUrl: 'views/extra_coming_soon.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
          	serie: true,
            files: [
            	'../assets/plugins/countdown/jquery.countdown.css',
              '../assets/plugins/countdown/jquery.plugin.min.js',
              '../assets/plugins/countdown/jquery.countdown.min.js'
            ]
          })
        }]
      }
    })
    .state('error', {
      url: '/error',
      data: {
        pageTitle: '404 Error'
      },
      templateUrl: 'views/extra_404_error.html'
    })
    .state('member', {
      url: '/member',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('member.login', {
      url: '/login',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('member.login.v1', {
      url: '/v1',
      data: {
        pageTitle: 'Login'
      },
      templateUrl: 'views/login.html'
    })
    .state('member.login.v2', {
      url: '/v2',
      data: {
        pageTitle: 'Login V2'
      },
      templateUrl: 'views/login_v2.html'
    })
    .state('member.login.v3', {
      url: '/v3',
      data: {
        pageTitle: 'Login V3'
      },
      templateUrl: 'views/login_v3.html'
    })
    .state('member.register', {
      url: '/register',
      data: {
        pageTitle: 'Register V3'
      },
      templateUrl: 'views/register_v3.html'
    })
    .state('app.helper', {
      url: '/helper',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('app.helper.css', {
      url: '/css',
      data: {
        pageTitle: 'Predefined CSS Classes'
      },
      templateUrl: 'views/helper_css.html'
    })
    .state('app.pos', {
      url: '/pos',
      template: '<div class="h-100" ui-view></div>',
      abstract: true
    })
    .state('app.pos.customerOrder', {
      url: '/customer-order',
      data: {
        pageTitle: 'POS - Customer Order System'
      },
      templateUrl: 'views/pos_customer_order.html'
    })
    .state('app.pos.counterCheckout', {
      url: '/counter-checkout',
      data: {
        pageTitle: 'POS - Counter Checkout System'
      },
      templateUrl: 'views/pos_counter_checkout.html'
    })
    .state('app.pos.kitchenOrder', {
      url: '/kitchen-order',
      data: {
        pageTitle: 'POS - Kitchen Order System'
      },
      templateUrl: 'views/pos_kitchen_order.html'
    })
    .state('app.pos.menuStock', {
      url: '/menu-stock',
      data: {
        pageTitle: 'POS - Menu Stock System'
      },
      templateUrl: 'views/pos_menu_stock.html'
    })
    .state('app.pos.tableBooking', {
      url: '/table-booking',
      data: {
        pageTitle: 'POS - Table Booking System'
      },
      templateUrl: 'views/pos_table_booking.html',
      resolve: {
        service: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
          	serie: true,
            files: [
            	'../assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
              '../assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
              '../assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.js'
            ]
          })
        }]
      }
    })
}]);

colorAdminApp.run(['$rootScope', '$state', 'setting', function ($rootScope, $state, setting) {
  $rootScope.$state = $state;
  $rootScope.setting = setting;
}]);