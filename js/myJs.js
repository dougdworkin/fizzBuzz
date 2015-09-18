$(document).ready(function() {

	var $container = $('p.countContainer');

	for ( var i = 1; i < 101; i++) {
		if((i % 3) === 0 && (i % 5)!==0) {
			$container.append('Fizz' + '<br>');
		} else if ((i % 3)!== 0 && (i % 5) === 0) {
			$container.append('Buzz' + '<br>');
		} else if ((i % 3) === 0 && (i % 5) === 0) {
			$container.append('Fizz Buzz' + '<br>');
		} else {
			$container.append(i + '<br>');
		}

	}


});