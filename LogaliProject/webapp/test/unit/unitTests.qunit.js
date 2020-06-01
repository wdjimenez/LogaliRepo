/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/logali/LogaliProject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});