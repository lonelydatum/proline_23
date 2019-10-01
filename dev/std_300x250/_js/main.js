

function start(){

	const pos_time = 5
	const time_scale = 3
	const scaled = 1.4
	const x = 19


	const tl_pos = new TimelineMax()
	
	tl_pos.to('.player_a.player', pos_time-.5,	 { x:`+=${x}`, ease:Power2.easeOut}, 0)
	tl_pos.to('.player_a.back', pos_time+.5,	 { x:`+=${x}`, ease:Power2.easeOut}, 0)
	tl_pos.to('.player_a.body', pos_time+.2,	 { x:`+=${x}`, ease:Power2.easeOut}, 0)
	tl_pos.to('.player_a.dots', pos_time-.6,	 { x:`+=${x}`, ease:Power1.easeOut}, 0)
	tl_pos.to('.player_a.head', pos_time+.3,	 { x:`+=${x}`, ease:Power2.easeOut}, 0)
	tl_pos.to('.player_a.leg1', pos_time+.1,	 { x:`+=${x}`, ease:Power2.easeOut}, 0)
	tl_pos.to('.player_a.leg2', pos_time+.4,	 { x:`+=${x}`, ease:Power2.easeOut}, 0)
	tl_pos.to('.player_a.skates', pos_time-.1,	 { x:`+=${x}`, ease:Power2.easeOut}, 0)

	tl_pos.to('.player_b.player', pos_time-.5,	 { x:`-=${x}`, ease:Power2.easeOut}, 0)
	tl_pos.to('.player_b.lines0', pos_time+.3,	 { x:`-=${x}`, ease:Power2.easeOut}, 0)
	tl_pos.to('.player_b.lines1', pos_time+.5,	 { x:`-=${x}`, ease:Power2.easeOut}, 0)
	tl_pos.to('.puck', time_scale-.5,	 { y:`+=${x}`, scale:scaled, ease:Power2.easeOut}, 0)

	tl_pos.add('zoomin', "-=2")
	
	tl_pos.to('.puck', time_scale-.5,	 { x:35, y:-3, scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl_pos.to('.player_b.player', time_scale-.5,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')

	tl_pos.to('.shadow', time_scale-.5,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl_pos.to('.player_a.player', time_scale-.5,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl_pos.to('.player_a.back', time_scale+.5,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl_pos.to('.player_a.body', time_scale+.2,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl_pos.to('.player_a.dots', time_scale-.6,	 { x:0, scale:scaled, ease:Power1.easeOut}, 'zoomin')
	tl_pos.to('.player_a.head', time_scale+.3,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl_pos.to('.player_a.leg1', time_scale+.1,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl_pos.to('.player_a.leg2', time_scale+.4,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl_pos.to('.player_a.skates', time_scale-.1,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')

	tl_pos.to('.player_b.lines0', time_scale+.3,	 { x:0, scale:scaled, ease:Power2.easeOut}, 'zoomin')
	tl_pos.to('.player_b.lines1', time_scale+.5,	 { x:5, scale:scaled, ease:Power2.easeOut}, 'zoomin')




	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	tl.add('text', '+=.7')
	tl.from(".t1a", .01, {opacity:0}, 'text')
	tl.from(".t1b", .01, {opacity:0}, 'text+=.4')
	tl.from(".t1c", .01, {opacity:0}, 'text+=.7')


	tl.to(".t1", .3, {opacity:0}, '+=2')	
	
	

	

	tl.to('.proline_outline.big .holder', .75, { ease:Power2.easeOut, x:0, y:"+=500"}, 'zoomin')	
	tl.to('.proline_outline.small .holder', .75, { ease:Power2.easeOut, x:0, y:0}, 'zoomin')	
	tl.to('.proline_outline.big .holder', 2, { ease:Linear.easeNone, x:0, y:"+=100"}, 'zoomin+=.7')	
	tl.to('.proline_outline.small .holder', 2, { ease:Linear.easeNone, x:0, y:"-=100"}, 'zoomin+=.7')	
	

	

	tl.add('end', '-=.8')
	tl.to(".frame1", .3, {opacity:0}, 'end')

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

