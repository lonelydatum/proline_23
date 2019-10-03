(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {

	var pos_time = 5;
	var time_scale = 3.9;
	var scaled = 1.4;
	var x = 19;

	var tl = new TimelineMax();

	tl.set(".frame1", { opacity: 1 });

	var slow_time = 3;
	var tl_slow = new TimelineMax();
	tl_slow.from('.puck', slow_time, { y: "-=20", ease: Power2.easeOut }, 0);
	tl_slow.to('.player_a.player', slow_time, { x: 0, ease: Power2.easeOut }, 0);
	tl_slow.to('.player_b.player', slow_time, { x: 0, ease: Power2.easeOut }, 0);

	tl_slow.to('.player_a.lines', slow_time + .3, { x: 0, ease: Power2.easeOut }, 0);
	tl_slow.to('.player_b.lines', slow_time + .3, { x: 0, ease: Power2.easeOut }, 0);

	tl.to(".t1a", .3, { opacity: 0 }, "+=1.8");
	tl.from(".t2", .3, { opacity: 0 });

	tl.add("down", "+=1.9");
	tl.from(".t2.t2bb", .15, { y: "-=60" }, "down");
	tl.to(".t2.t2b", .15, { y: "+=70" }, "down");
	tl.to(".t2.t2a", .3, { x: "+=5" }, "down");
	tl.to(".t2.t2c", .3, { x: "-=7" }, "down");

	tl.to(".frame1", .2, { opacity: 0 }, "+=1.5");

	tl.add("f2");
	tl.set(".frame2", { opacity: 1 });
	tl.from(".phone", .4, { y: "+=90" });
	tl.from(".illus", .4, { scale: 0 });

	tl.from(".t3a", .4, { opacity: 0 });
	tl.from(".cta_wager", .3, { opacity: 0 }, "+=.2");
	tl.to(".cta_wager", .3, { opacity: 0 }, "+=1.7");
	tl.from(".cta_get", .3, { opacity: 0 });

	// tl.gotoAndPlay("f2")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
