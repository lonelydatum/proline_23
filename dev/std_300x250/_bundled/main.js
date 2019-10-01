(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function start() {

	var pos_time = 5;
	var time_scale = 3;
	var scaled = 1.4;
	var x = 19;

	var tl_pos = new TimelineMax();

	tl_pos.to('.player_a.player', pos_time - .5, { x: '+=' + x, ease: Power2.easeOut }, 0);
	tl_pos.to('.player_a.back', pos_time + .5, { x: '+=' + x, ease: Power2.easeOut }, 0);
	tl_pos.to('.player_a.body', pos_time + .2, { x: '+=' + x, ease: Power2.easeOut }, 0);
	tl_pos.to('.player_a.dots', pos_time - .6, { x: '+=' + x, ease: Power1.easeOut }, 0);
	tl_pos.to('.player_a.head', pos_time + .3, { x: '+=' + x, ease: Power2.easeOut }, 0);
	tl_pos.to('.player_a.leg1', pos_time + .1, { x: '+=' + x, ease: Power2.easeOut }, 0);
	tl_pos.to('.player_a.leg2', pos_time + .4, { x: '+=' + x, ease: Power2.easeOut }, 0);
	tl_pos.to('.player_a.skates', pos_time - .1, { x: '+=' + x, ease: Power2.easeOut }, 0);

	tl_pos.to('.player_b.player', pos_time - .5, { x: '-=' + x, ease: Power2.easeOut }, 0);
	tl_pos.to('.player_b.lines0', pos_time + .3, { x: '-=' + x, ease: Power2.easeOut }, 0);
	tl_pos.to('.player_b.lines1', pos_time + .5, { x: '-=' + x, ease: Power2.easeOut }, 0);
	tl_pos.to('.puck', time_scale - .5, { y: '+=' + x, scale: scaled, ease: Power2.easeOut }, 0);

	tl_pos.add('zoomin', "-=2");

	tl_pos.to('.puck', time_scale - .5, { x: 35, y: -3, scale: scaled, ease: Power2.easeOut }, 'zoomin');
	tl_pos.to('.player_b.player', time_scale - .5, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');

	tl_pos.to('.shadow', time_scale - .5, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');
	tl_pos.to('.player_a.player', time_scale - .5, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');
	tl_pos.to('.player_a.back', time_scale + .5, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');
	tl_pos.to('.player_a.body', time_scale + .2, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');
	tl_pos.to('.player_a.dots', time_scale - .6, { x: 0, scale: scaled, ease: Power1.easeOut }, 'zoomin');
	tl_pos.to('.player_a.head', time_scale + .3, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');
	tl_pos.to('.player_a.leg1', time_scale + .1, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');
	tl_pos.to('.player_a.leg2', time_scale + .4, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');
	tl_pos.to('.player_a.skates', time_scale - .1, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');

	tl_pos.to('.player_b.lines0', time_scale + .3, { x: 0, scale: scaled, ease: Power2.easeOut }, 'zoomin');
	tl_pos.to('.player_b.lines1', time_scale + .5, { x: 5, scale: scaled, ease: Power2.easeOut }, 'zoomin');

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.add('text', '+=.7');
	tl.from(".t1a", .01, { opacity: 0 }, 'text');
	tl.from(".t1b", .01, { opacity: 0 }, 'text+=.4');
	tl.from(".t1c", .01, { opacity: 0 }, 'text+=.7');

	tl.to(".t1", .3, { opacity: 0 }, '+=2');

	tl.to('.proline_outline.big .holder', 1, { ease: Power2.easeOut, x: 0, y: "+=500" }, 'zoomin');
	tl.to('.proline_outline.small .holder', 1, { ease: Power2.easeOut, x: 0, y: 0 }, 'zoomin');
	tl.to('.proline_outline.big .holder', 3, { ease: Linear.easeNone, x: 0, y: "+=200" }, 'zoomin+=.7');
	tl.to('.proline_outline.small .holder', 3, { ease: Linear.easeNone, x: 0, y: "-=200" }, 'zoomin+=.7');

	// tl.from('.proline_outline.big', 1.8, { ease:Power2.easeInOut, x:475, y:-369, scale:.5, rotate:49}, 'outline+=.3')

	tl.add('end', '+=1');
	tl.to(".frame1", .3, { opacity: 0 }, 'end');

	tl.set(".frame2", { opacity: 1 });
	tl.from(".phone", .5, { y: 250, ease: Power2.easeInOut }, '+=.1');
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
