/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 5
Version: 5.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
*/

/* Global Setting
------------------------------------------------ */

colorAdminApp.factory('setting', ['$rootScope', function($rootScope) {
	var setting = {
		layout: {
			paceTop: false,
			appBoxedLayout: false,
			appTopMenu: false,
			appSidebarMinified: false,
			appSidebarEnd: false,
			appSidebarTwo: false,
			appSidebarNone: false,
			appSidebarTransparent: false,
			appSidebarLight: false,
			appSidebarSearch: false,
			appHeaderMegaMenu: false,
			appHeaderLanguageBar: false,
			appHeaderNone: false,
			appContentFullHeight: false,
			appContentClass: '',
			appFooterFixed: false,
		}
	};

	return setting;
}]);