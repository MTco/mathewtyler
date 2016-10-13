'use strict';
var e;try{window.opener=null;}catch(e){}
(function (window){
	if(typeof inited==='undefined'){
		var inited=false,jq=(function($){
			var isHostMethod=function(object,methodName)
			{
				var t=typeof object[methodName];
				return ((t==='function'||t==='object')&&!!object[methodName])||t==='unknown';
			},inited=false,H=window,l=H.document,where_am_i=top.location||l.href||l.location,hash=location.hash,e,nIntervId,didInit=false,$el,tmp,eventMethod=isHostMethod(l,'addEventListener')?'addEventListener':'attachEvent',$body,e,asdf,app={
				initialize:function(){
					if(didInit===false)
					{
						if(typeof hash!=='undefined'&&hash!=='#')
						{
							clearInterval(nIntervId);
							$el=$('body',$('html')['0']).first().find(hash).first();
							tmp=$el.parents('li').first().html();
							$el.parents('li').first().html('<mark class="highlight hlYellow">'+tmp+'</mark>').end().parents('ol').first().parents('li').first().find('label').first().trigger('click');
							$el.trigger('click');
						}
						didInit=true;
					}
					return false;
				},
				strpos:function(haystack,needle,offset){var i=(haystack+'').indexOf(needle,(offset||0));return i===-1?false:i;},
				v:function(){if(didInit!==true){var asdf=app.initialize();}if(eventMethod==='addEventListener'){l.removeEventListener('DOMContentLoaded',app.v,false);H.removeEventListener('load',app.initialize,false);}else{if(l.readyState==='complete'){l.detachEvent('onreadystatechange',app.v);H.detachEvent('onload',app.initialize);}}}
			};
			if(didInit!==true&&l.readyState==='complete'){var asdf=app.initialize();}else if(didInit!==true){if(eventMethod==='addEventListener'){l.addEventListener('DOMContentLoaded',app.v,false);H.addEventListener('load',app.initialize,false);}else{l.attachEvent('onreadystatechange',app.v);H.attachEvent('onload',app.initialize);}}
		}(jQuery.noConflict(true)));
	}else{
		return false;
	}
})(window);
