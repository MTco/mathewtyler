(function(H,l,e){
	H = typeof H === 'object' ? H : window;l = typeof l === 'object' ? l : H.document;
	try{H.opener=null;}catch(e){}
	try{FastClick.attach(l.body);}catch(e){}
	try{
		l.documentElement.classList.add('js');
		// fit all demos
		fitty('.fit', {
			minSize:1
		});
  	}catch(e){}
	try{
		/*var ao=Date.now?Date.now():+(new Date());*/
		/*var R = ("undefined" !== typeof (LUX) && LUX.ns ? LUX.ns : (Date.now ? Date.now() : +(new Date())));*/
	  	var jq = jq || null;
		if( jq === null && H.self === H.top )
		{
			jq = (function($, dom)
			{
				var isHostMethod = function(object, methodName)
				{
					var t = typeof object[methodName];t = ((t === 'function' || t === 'object') && !!object[methodName]) || t === 'unknown';return t;
				}, $body = null, $el = null, asdf = null, app = null, opts = {}, self = null, MTcoApp = MTcoApp || function(){
					function app(){
						if( opts.inited !== true && opts.doAbort !== true ){
							self = this;self.initialize();
							return true;
						}else{
							return false;
						}
					}
					app.prototype.initialize = function initialize(){
						if( opts.doAbort === true ){self.dropLoad();}
						if( opts.inited !== true ){
							opts.inited = true;

							opts.eventMethod = opts.nIntervId = opts.tmp = null;

							opts.doAbort = opts.doDropLoad = false;

							opts.where_am_i = '';opts.where_am_i += l.location || l.href;

							// opts.eventMethod = isHostMethod(l ,'addEventListener') ? 'addEventListener' : 'attachEvent';

							try{bean.on(H, 'keydown', self.abort);}catch(e){}
							try{bean.one(H, 'beforeunload', self.dropLoad);}catch(e){}

							opts.host = location.host || location.hostname || location.href || '';
							opts.hash = location.hash || '';opts.hash=opts.hash.substr(1, 36);opts.hash='#'+opts.hash;
							$body = $('body',$('html')['0']).first();
							if( opts.hash !== '#' ){
								if( typeof opts.nIntervId === 'number' ){clearInterval(opts.nIntervId);opts.nIntervId = null;}
								$el = $body.find(opts.hash).first();
								opts.tmp = $el.parents('li').first().html();
								$el.parents('li').first().html('<mark class="highlight hlYellow">' + opts.tmp + '</mark>').end().parents('ol').first().parents('li').first().find('label').first().trigger('click');
								$el.trigger('click');
							}
							return true;
						}
						return false;
					};
					app.prototype.escapeRegExp=function escapeRegExp(stringToGoIntoTheRegex){stringToGoIntoTheRegex=stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');return stringToGoIntoTheRegex;};
					app.prototype.strpos = function strpos(haystack,needle,offset){haystack=haystack+'';offset=offset || 0;var i=haystack.indexOf(needle,offset);i=i===-1?false:i;return i;};

					app.prototype.abort = function abort(e)
					{
						if( e.keyCode === 27 && opts.doAbort !== true ){
							opts.doAbort = true;
							bean.off(H, 'keydown', self.abort);
							if( typeof opts.nIntervId === 'number' ){clearInterval(opts.nIntervId);opts.nIntervId = null;}
							self.dropLoad();
						}
					};
					app.prototype.dropLoad = function dropLoad(e)
					{
						if( opts.doDropLoad !== true ){
							if( opts.doAbort !== true ){
								opts.doAbort = true;bean.off(H, 'keydown', self.abort);
								if( typeof opts.nIntervId === 'number' ){clearInterval(opts.nIntervId);opts.nIntervId = null;}
							}
							opts.inited = opts.doAbort = opts.doDropLoad = opts.nIntervId = true;
							bean.off(H, 'beforeunload', self.dropLoad);
							return null;
							// throw('');return;
						}
					};

					return app;
				}();
				if( app === null ){
					app = new MTcoApp();return true;
				}else{
					return false;
				}
			}(H.jQuery.noConflict(true),l));
			return true;
		}else{
			return false;
		}
	}catch(e){}
})(window,window.document,null);