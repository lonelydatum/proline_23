

function start(){

	const pos_time = 5
	const time_scale = 3.9
	const scaled = 1.4
	const x = 19


	const tl = new TimelineMax()

	tl.set(".frame1", {opacity:1})


	const slow_time = 3
	const tl_slow = new TimelineMax()
	tl_slow.from('.puck', slow_time, {y:"-=20", ease:Power2.easeOut}, 0)
	tl_slow.to('.player_a.player', slow_time, {x:0, ease:Power2.easeOut}, 0)
	tl_slow.to('.player_b.player', slow_time, {x:0, ease:Power2.easeOut}, 0)

	tl_slow.to('.player_a.lines', slow_time+.3, {x:0, ease:Power2.easeOut}, 0)
	tl_slow.to('.player_b.lines', slow_time+.3, {x:0, ease:Power2.easeOut}, 0)

	tl.from(".t1a", .3, {opacity:0}, "+=.3")
	

	tl.to(".frame1", .2, {opacity:0}, "+=1.5")


	tl.add("f2")
	tl.set(".frame2", {opacity:1})
	tl.from(".phone", .4, {y:"+=90"})
	tl.from(".illus", .4, {scale:0})

	tl.from(".t2a", .4, {opacity:0})
	



	// tl.gotoAndPlay("f2")


}

start()



module.exports = {};

