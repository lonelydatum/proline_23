(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {

	var pos_time = 5;
	var time_scale = 3.9;
	var scaled = 1.4;
	var x = 19;

	var tl = new TimelineMax();

	tl.set(".frame1", { opacity: 1 });

	var slow_time = 5;
	var tl_slow = new TimelineMax();
	tl_slow.from('.puck', slow_time, { y: "-=20", ease: Power2.easeOut }, 0);
	tl_slow.to('.player_a.player', slow_time, { x: 0, ease: Power2.easeOut }, 0);
	tl_slow.to('.player_b.player', slow_time, { x: 0, ease: Power2.easeOut }, 0);

	tl_slow.to('.player_a.lines', slow_time + .3, { x: 0, ease: Power2.easeOut }, 0);
	tl_slow.to('.player_b.lines', slow_time + .3, { x: 0, ease: Power2.easeOut }, 0);

	tl.from(".t1a", .3, { opacity: 0 }, "+=.3");
	tl.from(".logo", .3, { opacity: 0 }, "+=.3");

	var tl_lines = new TimelineMax();
	tl_lines.add('zoomin', 0);
	tl_lines.to('.proline_outline.big .holder', .75, { ease: Power2.easeOut, x: 0, y: "+=300" }, 'zoomin');
	tl_lines.to('.proline_outline.small .holder', .75, { ease: Power2.easeOut, x: 0, y: 0 }, 'zoomin');
	tl_lines.to('.proline_outline.big .holder', 3, { ease: Linear.easeNone, x: 0, y: "+=50" }, 'zoomin+=.7');
	tl_lines.to('.proline_outline.small .holder', 3, { ease: Linear.easeNone, x: 0, y: "-=50" }, 'zoomin+=.7');

	tl.to(".frame1", .2, { opacity: 0 }, 3);

	tl.add("f2");
	tl.set(".frame2", { opacity: 1 });
	tl.from(".phone", .4, { y: "+=90" });
	tl.from(".illus", .4, { scale: 0 });

	tl.from(".t2a", .4, { opacity: 0 });

	tl.from(".cta_wager", .3, { opacity: 0 }, "+=.7");
	tl.to(".cta_wager", .3, { opacity: 0 }, "+=2");
	tl.from(".cta_get", .3, { opacity: 0 });

	// tl.gotoAndPlay("f2")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
