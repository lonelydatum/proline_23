

function start(){

	const pos_time = 5
	const time_scale = 3.9
	const scaled = 1.4
	const x = 19

	const slow_time = 4

	const tl_slow = new TimelineMax()
	tl_slow.from('.puck', slow_time, {y:"-=50", ease:Power2.easeOut}, 0)
	tl_slow.to('.player_a.player', slow_time, {x:0, ease:Power2.easeOut}, 0)
	tl_slow.to('.player_b.player', slow_time, {x:0, ease:Power2.easeOut}, 0)

	tl_slow.to('.player_a.lines', slow_time+.3, {x:0, ease:Power2.easeOut}, 0)
	tl_slow.to('.player_b.lines', slow_time+.3, {x:0, ease:Power2.easeOut}, 0)
	
	



	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	tl.add('text', '+=.7')
	tl.from(".t1a", .01, {opacity:0}, 'text')
	tl.from(".t1b", .01, {opacity:0}, 'text+=.4')
	tl.from(".t1c", .01, {opacity:0}, 'text+=.7')


	
	
	

	
	

	

	tl.add('end', 3)
	tl.to(".frame1", .2, {opacity:0}, 'end')

	tl.set(".frame2", {opacity:1})
	tl.from(".phone", .5, {y:250, ease:Power2.easeInOut}, '-=.1')
	tl.from(".illus", .5, {scale:0, ease:Power3.easeOut}, '-=.1')
	tl.from(".t2", .3, {opacity:0}, '+=.1')

	tl.from(".cta_wager", .3, {opacity:0}, '+=1')
	tl.to(".cta_wager", .01, {opacity:0}, '+=2')
	tl.from(".cta_get", .3, {opacity:0})

	// tl.gotoAndPlay("zoomin")

}

start()



module.exports = {};

