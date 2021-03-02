/* 
	Author URL: http://webthemez.com
*/
$( function() {
	// Add background image
	$('body').vegas({
		delay: 20000,
		transitionDuration: 3000,
		slides: [
			{ src: 'images/datePalm01.jpg' },
			{ src: 'images/datePalm02.jpg' },
			{ src: 'images/datePalm03.jpg' },
			{ src: 'images/datePalm04.jpg' },
			{ src: 'images/datePalm05.jpg' },
			{ src: 'images/datePalm06.jpg' },
			{ src: 'images/datePalm07.jpg' },
			{ src: 'images/datePalm08.jpg' },
			{ src: 'images/datePalm09.jpg' },	
			{ src: 'images/datePalm10.jpg' },
			{ src: 'images/datePalm11.jpg' },
			{ src: 'images/datePalm12.jpg' },
			{ src: 'images/datePalm13.jpg' },
			{ src: 'images/datePalm14.jpg' },
			{ src: 'images/datePalm15.jpg' },
			{ src: 'images/datePalm16.jpg' },
			{ src: 'images/datePalm17.jpg' },
			{ src: 'images/datePalm18.jpg' },
			{ src: 'images/datePalm19.jpg' },
			{ src: 'images/datePalm20.jpg' },
			{ src: 'images/datePalm21.jpg' },
			{ src: 'images/datePalm22.jpg' },
			{ src: 'images/datePalm23.jpg' },
			{ src: 'images/datePalm24.jpg' },
			{ src: 'images/datePalm25.jpg' },
			{ src: 'images/datePalm26.jpg' },
			{ src: 'images/datePalm27.jpg' },
			{ src: 'images/datePalm28.jpg' },
			{ src: 'images/datePalm29.jpg' },
			{ src: 'images/datePalm30.jpg' },
			{ src: 'images/datePalm31.jpg' },
			{ src: 'images/datePalm32.jpg' },
			{ src: 'images/datePalm33.jpg' },
			{ src: 'images/datePalm34.jpg' },
			{ src: 'images/datePalm35.jpg' },
			{ src: 'images/datePalm36.jpg' },
			{ src: 'images/datePalm37.jpg' },
			{ src: 'images/datePalm38.jpg' },
			{ src: 'images/datePalm39.jpg' },
			{ src: 'images/datePalm40.jpg' },
			{ src: 'images/datePalm41.jpg' },
			{ src: 'images/datePalm42.jpg' },
			{ src: 'images/datePalm43.jpg' },
			{ src: 'images/datePalm44.jpg' },
			{ src: 'images/datePalm45.jpg' }
/*			
				{ src: '../images/datePalm1.jpg' },
				{ src: '../images/road2.jpg' },
				{ src: '../images/datePalm.jpg' }
*/				
		],
		//overlay: 'vegas/overlays/08.png',
		animation: 'random'
	});
	
	var endDate = "September 30, 2021 15:03:25";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});

});
