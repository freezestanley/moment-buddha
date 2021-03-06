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
		var isBuddha = new Date().getFullYear() + (543/2)
    return {
      year: isBuddha < Number(this.format('YYYY')) ? this.format('YYYY') : Number(this.format('YYYY')) + 543 ,
      month: this.format('MM'),
      day: this.format('DD')
    }
  }
  moment.fn.isBuddha = function () {
    return (new Date().getFullYear() + (543/2)) < Number(this.format('YYYY'))
  }
	moment.fn.buddha = function () {
    var isBuddha = new Date().getFullYear() + (543/2)
    return {
      year: isBuddha < Number(this.format('YYYY')) ? this.format('YYYY') : Number(this.format('YYYY')) + 543 ,
      month: this.format('MM'),
      day: this.format('DD')
    }
	}

	return moment;
}));
