var e;try{window.opener=null;}catch(e){}
(function (H,l){
	'use strict';
	/*var ao=Date.now?Date.now():+(new Date());*/
	/*var R = ("undefined" !== typeof (LUX) && LUX.ns ? LUX.ns : (Date.now ? Date.now() : +(new Date())));*/
	try{FastClick.attach(l.body);}catch(e){}
	try{
		l.documentElement.classList.add('js');
		// fit all demos
		fitty('.fit', {
			minSize:1
		});
  	}catch(e){}
	if(typeof jq === 'undefined'){
		var jq = (function($, dom){
			var isHostMethod = function(object,methodName)
			{
				var t = typeof object[methodName];
				return ((t === 'function' || t === 'object') && !!object[methodName]) || t === 'unknown';
			},inited=false,doAbort=false,app,where_am_i='',hash,e,nIntervId,$el,tmp,eventMethod=isHostMethod(l,'addEventListener')?'addEventListener':'attachEvent',$body,e,asdf,MTcoApp=function(){
				function app(){
					if(inited !== true && doAbort !== true){
						var self=this;
						self.initialize();
					}else{
						return;
					}
				};
				app.prototype.initialize=function initialize(){
					if(doAbort !== true && inited !== true){
						var self=this;
						inited=true;
						where_am_i+=l.location || l.href;
						host=location.host || location.hostname || location.href;
						hash=location.hash || '';hash='#'+hash.substr(1,36);
						if(hash !== '#')
						{
							clearInterval(nIntervId);
							$el=$('body',$('html')['0']).first().find(hash).first();
							tmp=$el.parents('li').first().html();
							$el.parents('li').first().html('<mark class="highlight hlYellow">'+tmp+'</mark>').end().parents('ol').first().parents('li').first().find('label').first().trigger('click');
							$el.trigger('click');
						}
						return true;
					}else{
						return;
					}
				};
				app.prototype.escapeRegExp=function escapeRegExp(stringToGoIntoTheRegex){return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');};
				app.prototype.strpos=function strpos(haystack,needle,offset){var i=(haystack+'').indexOf(needle,(offset||0));return i===-1?false:i;};
				return app;
			}();
			H.addEventListener('keydown',function(e){
				if(e.keyCode === 27){doAbort=inited=true;/*window.stopPropagation();*/return;}
			});
			if(inited !== true && doAbort !== true){
				app = new MTcoApp();return true;
			}else{
				return;
			}
		}(H.jQuery.noConflict(true),l));
		return true;
	}else{
		return false;
	}
})(window,window.document);
