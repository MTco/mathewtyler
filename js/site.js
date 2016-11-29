var e;try{window.opener=null;}catch(e){}
(function (window){
	'use strict';
	if(typeof inited==='undefined'){
		var inited=false,H=window,l=H.document,jq=(function($,dom){
			var isHostMethod=function(object,methodName)
			{
				var t=typeof object[methodName];
				return ((t==='function'||t==='object')&&!!object[methodName])||t==='unknown';
			},inited=false,where_am_i=top.location||l.href||l.location,hash=location.hash||'',e,nIntervId,$el,tmp,eventMethod=isHostMethod(l,'addEventListener')?'addEventListener':'attachEvent',$body,e,asdf,MTcoApp=function(){
				function app(){
					if(inited!==true){
						var self=this;
						self.initialize();
					}else{
						return false;
					}
				};
				app.prototype.initialize=function initialize(){
					var self=this;
					if(inited!==true){
						inited=true;
						hash='#'+hash.substr(1,36);
						if(hash!=='#')
						{
							clearInterval(nIntervId);
							$el=$('body',$('html')['0']).first().find(hash).first();
							tmp=$el.parents('li').first().html();
							$el.parents('li').first().html('<mark class="highlight hlYellow">'+tmp+'</mark>').end().parents('ol').first().parents('li').first().find('label').first().trigger('click');
							$el.trigger('click');
						}
						return true;
					}
					return false;
				};
				app.prototype.strpos=function strpos(haystack,needle,offset){var i=(haystack+'').indexOf(needle,(offset||0));return i===-1?false:i;};
				return app;
			}();
			var app=new MTcoApp();return true;
		}(H.jQuery.noConflict(true),l));
		FastClick.attach(l.body);
		return true;
	}else{
		return false;
	}
})(window);
