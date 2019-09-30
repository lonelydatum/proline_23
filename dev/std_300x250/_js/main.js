

function start(){

	liners('.player_a.dots', .3)
	liners('.player_a.lines0', .6)
	liners('.player_a.lines1', .1)
	liners('.player_a.lines2', .7)


	liners('.player_b.lines0', .2)

	function liners(className, start){
		const tl_line = new TimelineMax({repeat:6, repeatDelay: start})
		
		tl_line.to(className, .01, {opacity:1, x:0, y:0})
		tl_line.to(className, .01, {opacity:.7, x:1, y:0, scale:1}, '+=.4')
		tl_line.to(className, .01, {opacity:.5}, '+=.2')	
	}


	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	TweenLite.from('.puck', .5, {y:"-=150"})

	tl.add('text', '+=1.2')
	tl.from(".t1a", .01, {opacity:0}, 'text')
	tl.from(".t1b", .01, {opacity:0}, 'text+=.3')
	tl.from(".t1c", .01, {opacity:0}, 'text+=.5')


	tl.add('zoomin', '+=2')
	tl.to(".t1", .5, {opacity:0, y:'-=30'}, 'zoomin')
	tl.to(".playa", .6, {x:-0, y:-0, scale:1.4, ease:Power2.easeInOut}, 'zoomin')


	tl.add('outline', '+=0')
	tl.to('.proline_outline.small', .6, { ease:Power2.easeOut, x:180, y:18, scale:.4, rotate:-40}, 'outline')
	tl.to('.proline_outline.big', .6, { ease:Power2.easeOut, x:305, y:-189, scale:.5, rotate:49}, 'outline')


	tl.add('end', '+=1')
	tl.to(".frame1", .3, {opacity:0}, 'end')
	// tl.to(['.player_a', '.proline_outline.big'], .5, {x:"-=100", opacity:0, ease:Power2.easeOut}, 'end' )
	// tl.to(['.player_b', '.proline_outline.small'], .5, {x:"+=100", opacity:0, ease:Power2.easeOut}, 'end' )
	// tl.to(['.puck', '.shadow'], .3, {opacity:0}, 'end')

	tl.set(".frame2", {opacity:1})
	tl.from(".illus", .5, {scale:0, ease:Power2.easeInOut}, '+=.5')
	tl.from(".t2", .01, {opacity:0}, '+=.5')

	tl.from(".cta_wager", .01, {opacity:0}, '+=1.5')
	tl.to(".cta_wager", .01, {opacity:0}, '+=2')
	tl.from(".cta_get", .01, {opacity:0})
}

start()

// tl.gotoAndPlay("end")

module.exports = {};

