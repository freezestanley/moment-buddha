'use strict';

(function(root, factory) {
	/*global define*/
	if (typeof define === 'function' && define.amd) {
		define(['moment'], factory);                          // AMD
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('moment')); // Node
	} else {
		factory(root.moment);                                    // Browser
	}
}(this, function(moment) {
	moment.buddha = function () {
		debugger
		
	}
	moment.fn.buddha = function () {
		debugger
	}

	return moment;
}));
