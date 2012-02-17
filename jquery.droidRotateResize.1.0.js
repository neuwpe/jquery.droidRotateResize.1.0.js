/*
	for Andorid Rotate Reseizer .jQuery [ $.droidRotateResize() ]
							
							***
							
	@author		:	tsuyoshi higuchi a@wpe.jp
	@copyright	:	2012 (c)wpe
	@license		:	The MIT License
	@github		:	http://github.com/neuwpe/jquery.droidRotateResize.1.0.js
	@web			:	http://b.wpe.jp/
	@modified	:	2012-02-17 22:04
	@since			:	2012-02-17 14:54
*/
(function($){
	$.fn.droidRotateResize = ( function(o)
	{
		var me = $(this);
		var ex = $.extend({}, {
			negativesize		:	0,
			callback				:	function(){}
		}, o);
		var f = {
			landscape	:	320,
			build			:	function()
			{
				if(/Android/.test(window.navigator.userAgent)){
					$(window).bind("resize", function(){
						f.rotate();
					}).trigger("resize");
				}	/* Other Browser don't work. */
			},
			rotate			:	function()
			{
				if(/Android/.test(window.navigator.userAgent)){
					f.landscape = $(window).width()-f.negativesize;
					me.css({ width: f.landscape });
					if( typeof f.callback == 'function' && f.callback ) f.callback(f.landscape);
				}
			}
		}
		f.build();
		return this;
	});
})(jQuery);