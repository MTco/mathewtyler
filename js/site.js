;(function(H,l,err,leVoid,svoid){
	H = typeof H === 'object' ? H : window;
	if( H.self === H.top || H.parent === H.self )
	{
		leVoid = leVoid === void 0 ? leVoid : void 0;svoid = typeof svoid === 'string' ? svoid : '' + leVoid;
		try{H.opener=null;}catch(err){}
		l = typeof l === 'object' ? l : H.document;
		try{FastClick.attach(l.body);}catch(err){}
		/*!*
		try{
			l.documentElement.classList.add('js');
			// fit all demos
			fitty('.fit', {
				minSize:1
			});
	  	}catch(err){}
	  	// */
		try
		{
			/*!*var ao=Date.now?Date.now():+(new Date());*/
			/*!*var R = ("undefined" !== typeof (LUX) && LUX.ns ? LUX.ns : (Date.now ? Date.now() : +(new Date())));// */
		  	var jq = jq || null;
			if( jq === null )
			{
				jq = (function($, dom)
				{
					if ( !String.prototype.trim ) {
						String.prototype.trim = function (str) {
							str = this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');return str;
						};
						/*!**************************************************************************************
						Function:      trim(),ltrim(),rtrim()
						Author:        Joan.huang
						Create Date:   2009.10.06
						Modify Date:   2009.10.06
						Purpose:       trim string
						************************************************************************************** */
						/*!*
						//trim string space
						String.prototype.trim = function trim(str){
							str = str.replace(/(^\s*)|(\s*$)/g, '');return str;
						}
						//trim string left
						String.prototype.ltrim = function ltrim(str){
							str = str.replace(/(^\s*)/g, '');return str;
						}
						//trim string right
						String.prototype.rtrim = function rtrim(str){
							str = str.replace(/(\s*$)/g, '');return str;
						}
						// */
					}
					var isHostMethod = function(object, methodName, t)
					{
						t = typeof object[methodName];t = ((t === 'function' || t === 'object') && !!object[methodName]) || t === 'unknown';return t;
					}, app = null, self = null, opts = {script:{debug:!1, leVoid:leVoid, svoid:svoid}}, $body = null, $el = null, MTcoApp = MTcoApp || function(){
						function app(){
							if( self === null ){
								self = this;self.initialize();
								return !0;
							}else{
								return !1;
							}
						}
						app.prototype.console = function(args)
						{
							if( typeof opts.script !== '' + void 0 && opts.script.debug === !0 ){
								console.debug(args + ' | ' + opts.script.name);opts.script.debug = !0;
								return !0;
							}
							return !1;
						};
						app.prototype.initialize = function()
						{
							if( typeof opts.script.doAbort !== opts.script.svoid && opts.script.doAbort ){self.dropLoad();}
							if( typeof opts.script.inited === opts.script.svoid || !opts.script.inited )
							{
								opts.script = {
												inited:opts.script.inited || !0,
												debug:opts.script.debug || !1,
												name:'MTco',
												leVoid:opts.script.leVoid || void 0,
												svoid:opts.script.svoid || '' + void 0,
												doAbort:opts.script.doAbort || !1,
												doDropLoad:opts.script.doDropLoad || !1,
												doCookies:opts.script.doCookies || !0,
												doRedir:opts.script.doRedir || !1,
												doMouseEnter:opts.script.doMouseEnter || !0,
												doSitRep:opts.script.doSitRep || !1,
												tmp:opts.script.tmp || null,
												asdf:opts.script.asdf || null,
												nIntervId:opts.script.nIntervId || null,
												strlngth:opts.script.strlngth || null,
												isTopframe:opts.script.isTopframe || !0
											};

								try{bean.on(H, 'keydown', self.abort);}catch(err){}
								try{bean.one(H, 'beforeunload', self.dropLoad);}catch(err){}

								opts.page = {
												css:'.hidden{display:none;visibility:hidden;}',
												info:{
														hash:location.hash || '',
														host:location.host || location.hostname || location.href || '',
														query:null
												},
												where_am_i:'' + l.location || l.href
											};
								opts.script.tmp = self.strpos(opts.page.where_am_i, '#!') !== !1 ? 2 : 1;
								opts.page.info.hash = opts.page.info.hash.substr(opts.script.tmp, 64);opts.page.info.hash = '#' + opts.page.info.hash;
								
								if( opts.page.info.hash !== '' && opts.page.info.hash !== '#' )
								{
									$body = $('body',$('html')['0']).first();
									if( typeof opts.script.nIntervId === 'number' ){clearInterval(opts.script.nIntervId);opts.script.nIntervId = null;}
									$el = $body.find(opts.page.info.hash).first();
									opts.script.tmp = $el.parents('li').first().html();
									$el.parents('li').first().html('<mark class="highlight hlYellow">' + opts.script.tmp + '</mark>').end().parents('ol').first().parents('li').first().find('label').first().trigger('click');
									$el.trigger('click');
								}
								return !0;
							}
							return !1;
						};
						app.prototype.escapeRegExp = function(stringToGoIntoTheRegex){stringToGoIntoTheRegex=stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');return stringToGoIntoTheRegex;};
						app.prototype.strpos = function(haystack,needle,offset){haystack=haystack+'';offset=offset || 0;haystack=haystack.indexOf(needle,offset);haystack=haystack===-1?false:haystack;return haystack;};

						app.prototype.abort = function(e)
						{
							if( e.keyCode === 27 && !opts.script.doDropLoad && !opts.script.doAbort ){
								opts.script.doAbort = !0;
								if( typeof opts.script.nIntervId === 'number' ){clearInterval(opts.script.nIntervId);opts.script.nIntervId = null;}bean.off(H, 'keydown', self.abort);
								self.dropLoad();
							}
						};
						app.prototype.dropLoad = function(e)
						{
							if( !opts.script.doDropLoad )
							{
								opts.script.doDropLoad = !0;
								if( !opts.script.doAbort ){
									opts.script.doAbort = !0;
									if( typeof opts.script.nIntervId === 'number' ){clearInterval(opts.script.nIntervId);opts.script.nIntervId = null;}bean.off(H, 'keydown', self.abort);
								}
								opts = {script:{doAbort:!0,debug:!1,doDropLoad:!0,inited:!0,nIntervId:!1,leVoid:leVoid,svoid:svoid}};
								// opts.script.doAbort = !0;opts.script.inited = !0;opts.script.nIntervId = !0;
								bean.off(H, 'beforeunload', self.dropLoad);self = !1;app = !1;
								return !1;
							}
						};

						return app;
					}();
					if( app === null ){
						app = new MTcoApp();return !0;
					}else{
						return !1;
					}
				}(H.jQuery.noConflict(!0),l));
				return !0;
			}else{
				return !1;
			}
		}catch(err){}
	}else{
		return !1;
	}
})(window, window.document, null, void 0, '' + void 0);