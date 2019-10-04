(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function start() {

	var pos_time = 5;
	var time_scale = 3.9;
	var scaled = 1.4;
	var x = 19;

	var slow_time = 4;

	var tl_slow = new TimelineMax();
	tl_slow.from('.puck', slow_time, { y: "-=50", ease: Power2.easeOut }, 0);
	tl_slow.to('.player_a.player', slow_time, { x: 0, ease: Power2.easeOut }, 0);
	tl_slow.to('.player_b.player', slow_time, { x: 0, ease: Power2.easeOut }, 0);

	tl_slow.to('.player_a.lines', slow_time + .3, { x: 0, ease: Power2.easeOut }, 0);
	tl_slow.to('.player_b.lines', slow_time + .3, { x: 0, ease: Power2.easeOut }, 0);

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.add('text', '+=.7');
	tl.from(".t1a", .01, { opacity: 0 }, 'text');
	tl.from(".t1b", .01, { opacity: 0 }, 'text+=.4');
	tl.from(".t1c", .01, { opacity: 0 }, 'text+=.7');

	tl.add('end', 3);
	tl.to(".frame1", .2, { opacity: 0 }, 'end');

	tl.set(".frame2", { opacity: 1 });
	tl.from(".phone", .5, { y: 250, ease: Power2.easeInOut }, '-=.1');
	tl.from(".illus", .5, { scale: 0, ease: Power3.easeOut }, '-=.1');
	tl.from(".t2", .3, { opacity: 0 }, '+=.1');

	tl.from(".cta_wager", .3, { opacity: 0 }, '+=1');
	tl.to(".cta_wager", .01, { opacity: 0 }, '+=2');
	tl.from(".cta_get", .3, { opacity: 0 });

	// tl.gotoAndPlay("zoomin")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
