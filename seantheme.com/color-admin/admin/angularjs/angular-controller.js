/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 5
Version: 5.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
	----------------------------
			APPS CONTROLLER TABLE
	----------------------------
	 1.0 CONTROLLER - App
	 
   2.0 CONTROLLER - Sidebar
   3.0 CONTROLLER - Right Sidebar
   4.0 CONTROLLER - Header
   5.0 CONTROLLER - Top Menu
   
   6.0 CONTROLLER - Dashboard v1
   7.0 CONTROLLER - Dashboard v2
   8.0 CONTROLLER - Dashboard v3
   
   9.0 CONTROLLER - Email Inbox
  10.0 CONTROLLER - Email Compose
	11.0 CONTROLLER - Email Detail
	
	12.0 CONTROLLER - UI Widget Boxes
	13.0 CONTROLLER - UI Typography
	14.0 CONTROLLER - UI Icons
	15.0 CONTROLLER - UI General
	16.0 CONTROLLER - UI Buttons
	17.0 CONTROLLER - UI Modal Notification
	18.0 CONTROLLER - UI Tree
	19.0 CONTROLLER - UI Language Bar
	20.0 CONTROLLER - UI Unlimited Tabs
	21.0 CONTROLLER - UI Tabs Accordions
	22.0 CONTROLLER - UI Media Object
	23.0 CONTROLLER - UI Simple Line Icons
	24.0 CONTROLLER - UI Social Buttons
	25.0 CONTROLLER - UI Tour
	26.0 CONTROLLER - UI Offcanvas Toasts
	
	27.0 CONTROLLER - Form Plugins
	28.0 CONTROLLER - Form Slider + Switcher
	29.0 CONTROLLER - Form Validation
	30.0 CONTROLLER - Form Elements
	31.0 CONTROLLER - Form Dropzone
	32.0 CONTROLLER - Form Wizards
	33.0 CONTROLLER - Form Summernote
	34.0 CONTROLLER - Form WYSIWYG
	35.0 CONTROLLER - Form Multiple File Upload
	36.0 CONTROLLER - Form X-Editable
	
	37.0 CONTROLLER - Table Basic
	38.0 CONTROLLER - Table Manage Default
	39.0 CONTROLLER - Table Manage Autofill
	40.0 CONTROLLER - Table Manage Buttons
	41.0 CONTROLLER - Table Manage ColReorder
	42.0 CONTROLLER - Table Manage Fixed Columns
	43.0 CONTROLLER - Table Manage Fixed Header
	44.0 CONTROLLER - Table Manage KeyTable
	45.0 CONTROLLER - Table Manage Responsive
	46.0 CONTROLLER - Table Manage RowReorder
	47.0 CONTROLLER - Table Manage Scroller
	48.0 CONTROLLER - Table Manage Select
	49.0 CONTROLLER - Table Manage Extension Combination
	
	50.0 CONTROLLER - Chart Flot
	51.0 CONTROLLER - Chart JS
	52.0 CONTROLLER - Chart d3
	53.0 CONTROLLER - Chart Apex
	
	54.0 CONTROLLER - Calendar
	
	55.0 CONTROLLER - Vector Map
	56.0 CONTROLLER - Google Map
	
	57.0 CONTROLLER - Gallery V1
	58.0 CONTROLLER - Gallery V2
	
	59.0 CONTROLLER - Page with Footer
	60.0 CONTROLLER - Page with Fixed Footer
	61.0 CONTROLLER - Page without Sidebar
	62.0 CONTROLLER - Page with Right Sidebar
	63.0 CONTROLLER - Page with Minified Sidebar
	64.0 CONTROLLER - Page with Two Sidebar
	65.0 CONTROLLER - Full Height Content
	66.0 CONTROLLER - Page with Wide Sidebar
	67.0 CONTROLLER - Page with Light Sidebar
	68.0 CONTROLLER - Page with Mega Menu
	69.0 CONTROLLER - Page with Top Menu
	70.0 CONTROLLER - Page with Boxed Layout
	71.0 CONTROLLER - Page with Mixed Menu
	72.0 CONTROLLER - Page Boxed Layout with Mixed Menu
	73.0 CONTROLLER - Page with Transparent Sidebar
	74.0 CONTROLLER - Page with Search Sidebar
	
	75.0 CONTROLLER - Timeline
	76.0 CONTROLLER - Coming Soon
	77.0 CONTROLLER - Profile Page
	78.0 CONTROLLER - 404 Error
	79.0 CONTROLLER - Login V1
	80.0 CONTROLLER - Login V2
	81.0 CONTROLLER - Login V3
	82.0 CONTROLLER - Register V3
	83.0 CONTROLLER - Widgets
	
	84.0 CONTROLLER - POS Counter Checkout
	85.0 CONTROLLER - POS Customer Order
	86.0 CONTROLLER - POS Kitchen Order
	87.0 CONTROLLER - POS Kitchen Order
	88.0 CONTROLLER - POS Kitchen Order
	<!-- ======== GLOBAL SCRIPT SETTING ======== -->
*/

/* -------------------------------
   1.0 CONTROLLER - App
------------------------------- */
colorAdminApp.controller('appController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $scope.$on('$includeContentLoaded', function () {
    App.restartGlobalFunction();
  });
  $scope.$on('$viewContentLoaded', function () {
  
  });
  $scope.$on('$stateChangeStart', function () {
    // reset layout setting
    $rootScope.setting.layout.paceTop = false;
    $rootScope.setting.layout.appTopMenu = false;
    $rootScope.setting.layout.appBoxedLayout = false;
    $rootScope.setting.layout.appSidebarMinified = false;
    $rootScope.setting.layout.appSidebarEnd = false;
    $rootScope.setting.layout.appSidebarTwo = false;
    $rootScope.setting.layout.appSidebarNone = false;
    $rootScope.setting.layout.appSidebarTransparent = false;
    $rootScope.setting.layout.appSidebarWide = false;
    $rootScope.setting.layout.appSidebarLight = false;
    $rootScope.setting.layout.appSidebarSearch = false;
    $rootScope.setting.layout.appHeaderMegaMenu = false;
    $rootScope.setting.layout.appHeaderLanguageBar = false;
    $rootScope.setting.layout.appHeaderNone = false;
    $rootScope.setting.layout.appContentFullHeight = false;
    $rootScope.setting.layout.appContentClass = '';
    $rootScope.setting.layout.appFooterFixed = false;

    App.scrollTop();
    $('.pace .pace-progress').addClass('hide');
    $('.pace').removeClass('pace-inactive');
  });
  $scope.$on('$stateChangeSuccess', function () {
    Pace.restart();
    App.initPageLoad();
    
    $('[data-dismiss="app-sidebar-mobile"]').trigger('click');
    setTimeout(function () {
      App.initLocalStorage();
      App.initComponent();
    }, 0);
    if ($('#top-menu').length !== 0) {
      $('#top-menu').removeAttr('style');
    }
  });
  $scope.$on('$stateNotFound', function () {
    Pace.stop();
  });
  $scope.$on('$stateChangeError', function () {
    Pace.stop();
  });
}]);


/* -------------------------------
   2.0 CONTROLLER - Sidebar
------------------------------- */
colorAdminApp.controller('sidebarController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	// javascript / jQuery here
  });
});


/* -------------------------------
   3.0 CONTROLLER - Right Sidebar
------------------------------- */
colorAdminApp.controller('rightSidebarController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	// javascript / jQuery here
  });
});


/* -------------------------------
   4.0 CONTROLLER - Header
------------------------------- */
colorAdminApp.controller('headerController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	// javascript / jQuery here
  });
});


/* -------------------------------
   5.0 CONTROLLER - Top Menu
------------------------------- */
colorAdminApp.controller('topMenuController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    handleUnlimitedTopMenuRender();
  });
});


/* -------------------------------
   6.0 CONTROLLER - Dashboard v1
------------------------------- */
colorAdminApp.controller('dashboardController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
   $.getScript('../assets/js/demo/dashboard.js');
  });
});


/* -------------------------------
   7.0 CONTROLLER - Dashboard v2
------------------------------- */
colorAdminApp.controller('dashboardV2Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/dashboard-v2.js');
  });
});


/* -------------------------------
   8.0 CONTROLLER - Dashboard v3
------------------------------- */
colorAdminApp.controller('dashboardV3Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/dashboard-v3.js');
  });
});


/* -------------------------------
   9.0 CONTROLLER - Email Inbox
------------------------------- */
colorAdminApp.controller('emailInboxController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0';
  $rootScope.setting.layout.appContentFullHeight = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/email-inbox.demo.js');
  });
});


/* -------------------------------
   10.0 CONTROLLER - Email Compose
------------------------------- */
colorAdminApp.controller('emailComposeController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0';
  $rootScope.setting.layout.appContentFullHeight = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/email-compose.demo.js');
  });
});


/* -------------------------------
   11.0 CONTROLLER - Email Detail
------------------------------- */
colorAdminApp.controller('emailDetailController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0';
  $rootScope.setting.layout.appContentFullHeight = true;
});


/* -------------------------------
   12.0 CONTROLLER - UI Widget Boxes
------------------------------- */
colorAdminApp.controller('uiWidgetBoxesController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   13.0 CONTROLLER - UI Typography
------------------------------- */
colorAdminApp.controller('uiTypographyController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   14.0 CONTROLLER - UI Icons
------------------------------- */
colorAdminApp.controller('uiIconsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   15.0 CONTROLLER - UI General
------------------------------- */
colorAdminApp.controller('uiGeneralController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   16.0 CONTROLLER - UI Buttons
------------------------------- */
colorAdminApp.controller('uiButtonsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   17.0 CONTROLLER - UI Modal Notification
------------------------------- */
colorAdminApp.controller('uiModalNotificationController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/ui-modal-notification.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   18.0 CONTROLLER - UI Tree
------------------------------- */
colorAdminApp.controller('uiTreeController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/ui-tree.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   19.0 CONTROLLER - UI Language Bar
------------------------------- */
colorAdminApp.controller('uiLanguageBarIconController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderLanguageBar = true;
  
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   20.0 CONTROLLER - UI Unlimited Tabs
------------------------------- */
colorAdminApp.controller('uiUnlimitedTabsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	handleUnlimitedTabsRender();
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   21.0 CONTROLLER - UI Tabs Accordions
------------------------------- */
colorAdminApp.controller('uiTabsAccordionsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   22.0 CONTROLLER - UI Media Object
------------------------------- */
colorAdminApp.controller('uiMediaObjectController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   23.0 CONTROLLER - UI Simple Line Icons
------------------------------- */
colorAdminApp.controller('uiSimpleLineIconsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   24.0 CONTROLLER - UI Social Buttons
------------------------------- */
colorAdminApp.controller('uiSocialButtonsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   25.0 CONTROLLER - UI Tour
------------------------------- */
colorAdminApp.controller('uiTourController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   26.0 CONTROLLER - UI Offcanvas Toasts
------------------------------- */
colorAdminApp.controller('uiOffcanvasToastsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   27.0 CONTROLLER - Form Plugins
------------------------------- */
colorAdminApp.controller('formPluginsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-plugins.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   28.0 CONTROLLER - Form Slider + Switcher
------------------------------- */
colorAdminApp.controller('formSliderSwitcherController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-slider-switcher.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   29.0 CONTROLLER - Form Validation
------------------------------- */
colorAdminApp.controller('formValidationController', function ($scope, $rootScope, $state) {
  $scope.submitForm = function (form) {
    if (!form.$valid) {
      $('form[name="' + form.$name + '"] *').tooltip('dispose');
      angular.forEach(form.$error, function (field) {
        angular.forEach(field, function (errorField) {
          errorField.$setTouched();
          var targetContainer = 'form[name="' + form.$name + '"] [name="' + errorField.$name + '"]';
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
   30.0 CONTROLLER - Form Elements
------------------------------- */
colorAdminApp.controller('formElementsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   31.0 CONTROLLER - Form Dropzone
------------------------------- */
colorAdminApp.controller('dropzoneController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
    new Dropzone("#demo-upload");
  });
});


/* -------------------------------
   32.0 CONTROLLER - Form Wizards
------------------------------- */
colorAdminApp.controller('formWizardsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   33.0 CONTROLLER - Form Summernote
------------------------------- */
colorAdminApp.controller('summernoteController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-summernote.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   34.0 CONTROLLER - Form WYSIWYG
------------------------------- */
colorAdminApp.controller('wysiwygController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-wysiwyg.demo.js');
    CKEDITOR.replace('editor1');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   35.0 CONTROLLER - Form Multiple File Upload
------------------------------- */
colorAdminApp.controller('multipleFileUploadController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-multiple-upload.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   36.0 CONTROLLER - Form X-Editable
------------------------------- */
colorAdminApp.controller('xEditableController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-editable.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   37.0 CONTROLLER - Table Basic
------------------------------- */
colorAdminApp.controller('tableBasicController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   38.0 CONTROLLER - Table Manage Default
------------------------------- */
colorAdminApp.controller('tableManageDefaultController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-default.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   39.0 CONTROLLER - Table Manage Autofill
------------------------------- */
colorAdminApp.controller('tableManageAutofillController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-autofill.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   40.0 CONTROLLER - Table Manage Buttons
------------------------------- */
colorAdminApp.controller('tableManageButtonsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-buttons.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   41.0 CONTROLLER - Table Manage ColReorder
------------------------------- */
colorAdminApp.controller('tableManageColReorderController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-colreorder.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   42.0 CONTROLLER - Table Manage Fixed Columns
------------------------------- */
colorAdminApp.controller('tableManageFixedColumnsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-fixed-columns.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   43.0 CONTROLLER - Table Manage Fixed Header
------------------------------- */
colorAdminApp.controller('tableManageFixedHeaderController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-fixed-header.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   44.0 CONTROLLER - Table Manage KeyTable
------------------------------- */
colorAdminApp.controller('tableManageKeyTableController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-keytable.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   45.0 CONTROLLER - Table Manage Responsive
------------------------------- */
colorAdminApp.controller('tableManageResponsiveController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-responsive.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   46.0 CONTROLLER - Table Manage RowReorder
------------------------------- */
colorAdminApp.controller('tableManageRowReorderController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-rowreorder.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   47.0 CONTROLLER - Table Manage Scroller
------------------------------- */
colorAdminApp.controller('tableManageScrollerController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-scroller.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   48.0 CONTROLLER - Table Manage Select
------------------------------- */
colorAdminApp.controller('tableManageSelectController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-select.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   49.0 CONTROLLER - Table Manage Extension Combination
------------------------------- */
colorAdminApp.controller('tableManageCombineController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-combine.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   50.0 CONTROLLER - Flot Chart
------------------------------- */
colorAdminApp.controller('chartFlotController', function ($scope, $rootScope, $state) {
	angular.element(document).ready(function () {
		$.getScript('../assets/js/demo/chart-flot.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   51.0 CONTROLLER - Chart JS
------------------------------- */
colorAdminApp.controller('chartJsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/chart-js.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   52.0 CONTROLLER - Chart d3
------------------------------- */
colorAdminApp.controller('chartD3Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/chart-d3.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   53.0 CONTROLLER - Chart Apex
------------------------------- */
colorAdminApp.controller('chartApexController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/chart-apex.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   54.0 CONTROLLER - Calendar
------------------------------- */
colorAdminApp.controller('calendarController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/calendar.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   55.0 CONTROLLER - Vector Map
------------------------------- */
colorAdminApp.controller('mapVectorController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0 position-relative';
	$rootScope.setting.layout.appContentFullHeight = true;
	
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/map-vector.demo.js');
  });
});


/* -------------------------------
   56.0 CONTROLLER - Google Map
------------------------------- */
colorAdminApp.controller('mapGoogleController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0 position-relative';
	$rootScope.setting.layout.appContentFullHeight = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/map-google.demo.js');
  });
});


/* -------------------------------
   57.0 CONTROLLER - Gallery V1
------------------------------- */
colorAdminApp.controller('galleryController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/gallery.demo.js');
  });
});


/* -------------------------------
   58.0 CONTROLLER - Gallery V2
------------------------------- */
colorAdminApp.controller('galleryV2Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/gallery-v2.demo.js');
  });
});


/* -------------------------------
   59.0 CONTROLLER - Page with Footer
------------------------------- */
colorAdminApp.controller('pageWithFooterController', function ($scope, $rootScope, $state) {
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   60.0 CONTROLLER - Page with Fixed Footer
------------------------------- */
colorAdminApp.controller('pageWithFixedFooterController', function ($scope, $rootScope, $state) {
	$rootScope.setting.layout.appContentFullHeight = true;
	$rootScope.setting.layout.appContentClass = 'p-0';
	
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   61.0 CONTROLLER - Page without Sidebar
------------------------------- */
colorAdminApp.controller('pageWithoutSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarNone = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   62.0 CONTROLLER - Page with Right Sidebar
------------------------------- */
colorAdminApp.controller('pageWithRightSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarEnd = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   63.0 CONTROLLER - Page with Minified Sidebar
------------------------------- */
colorAdminApp.controller('pageWithMinifiedSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarMinified = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   64.0 CONTROLLER - Page with Two Sidebar
------------------------------- */
colorAdminApp.controller('pageWithTwoSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarTwo = true;
  
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/page-with-two-sidebar.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   65.0 CONTROLLER - Full Height Content
------------------------------- */
colorAdminApp.controller('pageFullHeightContentController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';
  
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   66.0 CONTROLLER - Page with Wide Sidebar
------------------------------- */
colorAdminApp.controller('pageWithWideSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarWide = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   67.0 CONTROLLER - Page with Light Sidebar
------------------------------- */
colorAdminApp.controller('pageWithLightSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarLight = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   68.0 CONTROLLER - Page with Mega Menu
------------------------------- */
colorAdminApp.controller('pageWithMegaMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderMegaMenu = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   69.0 CONTROLLER - Page with Top Menu
------------------------------- */
colorAdminApp.controller('pageWithTopMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appTopMenu = true;
  $rootScope.setting.layout.appSidebarNone = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   70.0 CONTROLLER - Page with Boxed Layout
------------------------------- */
colorAdminApp.controller('pageWithBoxedLayoutController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appBoxedLayout = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   71.0 CONTROLLER - Page with Mixed Menu
------------------------------- */
colorAdminApp.controller('pageWithMixedMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appTopMenu = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   72.0 CONTROLLER - Page Boxed Layout with Mixed Menu
------------------------------- */
colorAdminApp.controller('pageBoxedLayoutWithMixedMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appBoxedLayout = true;
  $rootScope.setting.layout.appTopMenu = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   73.0 CONTROLLER - Page with Transparent Sidebar
------------------------------- */
colorAdminApp.controller('pageWithTransparentSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarTransparent = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   74.0 CONTROLLER - Page with Search Sidebar
------------------------------- */
colorAdminApp.controller('pageWithSearchSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarSearch = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   75.0 CONTROLLER - Timeline
------------------------------- */
colorAdminApp.controller('extraTimelineController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/timeline.demo.js');
  });
});


/* -------------------------------
   76.0 CONTROLLER - Coming Soon
------------------------------- */
colorAdminApp.controller('comingSoonController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appBgWhite = true;
  $rootScope.setting.layout.paceTop = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/coming-soon.demo.js');
  });
});


/* -------------------------------
   77.0 CONTROLLER - Profile Page
------------------------------- */
colorAdminApp.controller('profileController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/profile.demo.js');
  });
});


/* -------------------------------
   78.0 CONTROLLER - 404 Error
------------------------------- */
colorAdminApp.controller('errorController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';
});


/* -------------------------------
   79.0 CONTROLLER - Login V1
------------------------------- */
colorAdminApp.controller('loginV1Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };
});


/* -------------------------------
   80.0 CONTROLLER - Login V2
------------------------------- */
colorAdminApp.controller('loginV2Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/login-v2.demo.js');
  });
});


/* -------------------------------
   81.0 CONTROLLER - Login V3
------------------------------- */
colorAdminApp.controller('loginV3Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };
});


/* -------------------------------
   82.0 CONTROLLER - Register V3
------------------------------- */
colorAdminApp.controller('registerV3Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };
});


/* -------------------------------
   83.0 CONTROLLER - Widgets
------------------------------- */
colorAdminApp.controller('widgetController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/widget.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   84.0 CONTROLLER - POS Counter Checkout
------------------------------- */
colorAdminApp.controller('posCounterCheckoutController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-counter-checkout.demo.js');
  });
});


/* -------------------------------
   85.0 CONTROLLER - POS Customer Order
------------------------------- */
colorAdminApp.controller('posCustomerOrderController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-customer-order.demo.js');
  });
});


/* -------------------------------
   86.0 CONTROLLER - POS Kitchen Order
------------------------------- */
colorAdminApp.controller('posKitchenOrderController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-kitchen-order.demo.js');
  });
});


/* -------------------------------
   87.0 CONTROLLER - POS Kitchen Order
------------------------------- */
colorAdminApp.controller('posMenuStockController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-menu-stock.demo.js');
  });
});


/* -------------------------------
   88.0 CONTROLLER - POS Kitchen Order
------------------------------- */
colorAdminApp.controller('posTableBookingController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-table-booking.demo.js');
  });
});