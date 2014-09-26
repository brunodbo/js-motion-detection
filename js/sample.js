(function(){

	// Arduino and Johnny Five
	var j5 = require("johnny-five"),
    board,
    leds = [],
    // ledPins = [2,3,4,5,6,7,8,9];
    loopTime = 4500,
    ledPins = [9, 10, 11];


    // initialize Arduino board
    board = new j5.Board();
    // initialize LEDs using a for loop
	  for (var i = 0; i < ledPins.length; i++){
	      var myLed = new j5.Led(ledPins[i]);
	      leds.push(myLed);
	  }

	// consider using a debounce utility if you get too many consecutive events
	$(window).on('motion', function(ev, data){
		console.log('detected motion at', new Date(), 'with data:', data);
		var spot = $(data.spot.el);
		spot.addClass('active');
		leds[9].pulse(1000);
		console.log(leds[9]);
		setTimeout(function(){
			spot.removeClass('active');
		}, 230);
	});

	// example using a class
	$('.link').on('motion', function(ev, data){
		console.log('motion detected on a link to', data.spot.el.href);
	});

	// examples for id usage
	$('#one').on('motion', function(){
		console.log('touched one');
	});

	$('#another').on('motion', function(){
		console.log('another');
	});
})();