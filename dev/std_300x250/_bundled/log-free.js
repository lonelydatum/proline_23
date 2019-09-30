(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function start() {

	liners('.player_a.dots', .3);
	liners('.player_a.lines0', .6);
	liners('.player_a.lines1', .1);
	liners('.player_a.lines2', .7);

	liners('.player_b.lines0', .2);

	function liners(className, start) {
		var tl_line = new TimelineMax({ repeat: 6, repeatDelay: start });

		tl_line.to(className, .01, { opacity: 1, x: 0, y: 0 });
		tl_line.to(className, .01, { opacity: .7, x: 1, y: 0, scale: 1 }, '+=.4');
		tl_line.to(className, .01, { opacity: .5 }, '+=.2');
	}

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.add('text', '+=.7');
	tl.from(".t1a", .01, { opacity: 0 }, 'text');
	tl.from(".t1b", .01, { opacity: 0 }, 'text+=.6');
	tl.from(".t1c", .01, { opacity: 0 }, 'text+=.9');

	tl.add('zoomin', '+=3');
	tl.to(".t1", .5, { opacity: 0, y: '-=30' }, 'zoomin');
	tl.to(".playa", 1, { x: -0, y: -0, scale: 1.4, ease: Power2.easeInOut }, 'zoomin');
	tl.from('.puck', 1, { y: "-=250" }, 'zoomin');

	tl.add('outline', '-=.3');
	tl.to('.proline_outline.small', 1.8, { ease: Power2.easeInOut, x: 70, y: -143, scale: .4, rotate: -40 }, 'outline');
	tl.to('.proline_outline.big', 1.8, { ease: Power2.easeInOut, x: -47, y: 111, scale: .5, rotate: 49 }, 'outline+=.3');
	// tl.from('.proline_outline.big', 1.8, { ease:Power2.easeInOut, x:475, y:-369, scale:.5, rotate:49}, 'outline+=.3')

	tl.add('end', '+=1');
	tl.to(".frame1", .3, { opacity: 0 }, 'end');
	// tl.to(['.player_a', '.proline_outline.big'], .5, {x:"-=100", opacity:0, ease:Power2.easeOut}, 'end' )
	// tl.to(['.player_b', '.proline_outline.small'], .5, {x:"+=100", opacity:0, ease:Power2.easeOut}, 'end' )
	// tl.to(['.puck', '.shadow'], .3, {opacity:0}, 'end')

	tl.set(".frame2", { opacity: 1 });
	tl.from(".phone", .5, { y: 250, ease: Power2.easeInOut }, '+=.1');
	tl.from(".illus", .5, { scale: 0, ease: Power2.easeInOut }, '-=.1');
	tl.from(".t2", .3, { opacity: 0 }, '+=.1');

	tl.from(".cta_wager", .3, { opacity: 0 }, '+=1.5');
	tl.to(".cta_wager", .01, { opacity: 0 }, '+=2');
	tl.from(".cta_get", .3, { opacity: 0 });
}

start();

// tl.gotoAndPlay("outline")

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
