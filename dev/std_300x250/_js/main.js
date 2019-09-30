

function start(){

	liners('.player_a.dots', .3)
	liners('.player_a.lines0', .6)
	liners('.player_a.lines1', .1)
	liners('.player_a.lines2', .7)


	liners('.player_b.lines0', .2)

	function liners(className, start){
		const tl_line = new TimelineMax({repeat:6, repeatDelay: start})
		
		tl_line.to(className, .01, {opacity:1})
		tl_line.to(className, .1, {opacity:.7}, '+=.4')
		tl_line.to(className, .1, {opacity:1}, '+=.2')	
	}


	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	

	tl.add('text', '+=.7')
	tl.from(".t1a", .01, {opacity:0}, 'text')
	tl.from(".t1b", .01, {opacity:0}, 'text+=.6')
	tl.from(".t1c", .01, {opacity:0}, 'text+=.9')

	const time_scale = 3
	const scaled = 1.4
	tl.add('zoomin', '+=3')
	tl.to(".t1", .5, {opacity:0, y:'-=30'}, 'zoomin')
	tl.to(".playa", time_scale, {scale:1.4, ease:Power2.easeOut}, 'zoomin')
	tl.from('.puck', 2, {y:"-=250"}, 'zoomin')

	
	tl.to('.player_a.lines0', time_scale-.5,	 { scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl.to('.player_a.lines1', time_scale-.3,	 { scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl.to('.player_a.lines2', time_scale-.6,	 { scale:scaled, ease:Power1.easeOut}, 'zoomin')
	tl.to('.player_b.lines0', time_scale-.3,	 { scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl.to('.player_a.dots', time_scale-.4,	 { scale:scaled, ease:Power2.easeOut}, 'zoomin')


	tl.add('outline', '-=1.5')
	tl.to('.proline_outline.small', 1.8, { ease:Power2.easeInOut, x:70, y:-143, scale:.4, rotate:-40}, 'outline')	
	tl.to('.proline_outline.big', 1.8, { ease:Power2.easeInOut, x:-47, y:111, scale:.5, rotate:49}, 'outline+=.3')

	// tl.from('.proline_outline.big', 1.8, { ease:Power2.easeInOut, x:475, y:-369, scale:.5, rotate:49}, 'outline+=.3')




	tl.add('end', '+=1')
	tl.to(".frame1", .3, {opacity:0}, 'end')
	// tl.to(['.player_a', '.proline_outline.big'], .5, {x:"-=100", opacity:0, ease:Power2.easeOut}, 'end' )
	// tl.to(['.player_b', '.proline_outline.small'], .5, {x:"+=100", opacity:0, ease:Power2.easeOut}, 'end' )
	// tl.to(['.puck', '.shadow'], .3, {opacity:0}, 'end')

	tl.set(".frame2", {opacity:1})
	tl.from(".phone", .5, {y:250, ease:Power2.easeInOut}, '+=.1')
	tl.from(".illus", .5, {scale:0, ease:Power2.easeInOut}, '-=.1')
	tl.from(".t2", .3, {opacity:0}, '+=.1')

	tl.from(".cta_wager", .3, {opacity:0}, '+=1.5')
	tl.to(".cta_wager", .01, {opacity:0}, '+=2')
	tl.from(".cta_get", .3, {opacity:0})

	// tl.gotoAndPlay("zoomin")

}

start()



module.exports = {};

