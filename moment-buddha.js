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
		var day = this.day()
    var month = this.month()
    return {
      year: this.year() + 543,
      month: month>9 ? month :'0'+ month,
      day: day > 9 ? day: '0' + day
    }
	}
	moment.fn.buddha = function () {
    var day = this.day()
    var month = this.month()
    return {
      year: this.year() + 543,
      month: month>9 ? month :'0'+ month,
      day: day > 9 ? day: '0' + day
    }
	}

	return moment;
}));
