$(function() {
				$('.kwicks-vertical').kwicks({
					maxSize : 300,
					spacing : 5,
					isVertical: true,
					behavior: 'menu',
					selectOnClick: false
				});

				$('.kwicks-horizontal').kwicks({
					maxSize: 300,
					spacing: 5,
					behavior: 'menu',
					selectOnClick: false
				});
			});