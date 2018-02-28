;(function(H,l,err){
	// 'use strict';
	try{
		var where_am_i = '', hash = location.hash || '';
		if( hash !== '' && hash !== '#!qr' )
		{
			H = typeof H === 'object' ? H : window;l = typeof l === 'object' ? l : H.document;
			where_am_i = hash.indexOf('#!', 0) !== -1 ? 2 : 1;
			hash = hash.substr(where_am_i, 64);hash = '#!' + hash;
			if( hash !== '#!qr' )
			{
				where_am_i = top.location || l.href || l.location;where_am_i += '#!qr';
				top.location = where_am_i;return !0;
			}
		}else{
			return !1;
		}
	}catch(err){}
	return !1;
})(window,window.document,null);