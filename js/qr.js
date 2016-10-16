(function (window){
	'use strict';
	var H=window,l=H.document,where_am_i=top.location||l.href||l.location;
	if(typeof where_am_i.hash==='undefined'||where_am_i.hash===''){where_am_i+='#qr';top.location=where_am_i;}
})(window);
