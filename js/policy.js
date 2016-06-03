'use strict';
$(function(){
	//document.getElementById(\'PersistentCookie\').checked=false;
	var H=window,l=H.document,hash=location.hash,e,nIntervId,didInit=false,$el,tmp;
	hash='#'+hash.substr(1,36);
	function init(){
		if(didInit===false&&typeof hash!=='undefined'&&hash!=='#'){
			clearInterval(nIntervId);
			didInit=true;
			$el=$('body',$('html')['0']).first().find(hash).first();
			tmp=$el.parents('li').first().html();
			$el.parents('li').first().html('<mark>'+tmp+'</mark>').addClass('highlight hlYellow');
			$el.parents('ol').first().parents('li').first().find('label').first().trigger('click');
			$el.trigger('click');
		}
	}
	function v(){if(l.addEventListener){l.removeEventListener('DOMContentLoaded',v,false);init();}else{if(l.readyState==='complete'){l.detachEvent('onreadystatechange',v);init();}}}if(l.readyState==='complete'){init();}else{if(l.addEventListener){l.addEventListener('DOMContentLoaded',v,false);H.addEventListener('load',init,false);}else{l.attachEvent('onreadystatechange',v);H.attachEvent('onload',init);}}
	nIntervId=setInterval(function(){var asdf=init();},600);
});
