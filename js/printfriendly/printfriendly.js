;(function(uw,H,l,err,leVoid,svoid,opts){
	leVoid = opts.script.leVoid === void 0 ? opts.script.leVoid : void 0;opts.script.leVoid = leVoid;svoid = typeof svoid === opts.script.svoid ? svoid : ''+void 0;opts.script.svoid = svoid;
	H = typeof H === 'object' ? H : window;uw = H;
	// uw = typeof uw !== svoid ? uw : H;
	var e = null, jq = jq || null;

	// var pfHeaderImgUrl = 'URL';
	// var pfHeaderTagline = 'text';
	var pfdisableClickToDel = 0;
	var pfHideImages = 0;
	var pfImageDisplayStyle = 'right';
	var pfDisablePDF = 0;
	var pfDisableEmail = 0;
	var pfDisablePrint = 0;
	// var pfCustomCSS = 'URL';
	var pfBtVersion='2';
	
	try{uw.opener=null;}catch(err){}
	if( uw.self !== uw.top || uw.parent !== uw.self ){jq = false;return false;
	}else if( jq === null && !H['priFri'] )
	{
		/*!*
		* The document of the unsafe window.
		* @property l
		//	*/
		l = uw.document;
		jq = (function($, dom)
		{
			var app = null, self = null, opts = {script:{debug:false, leVoid:leVoid, svoid:svoid}}, uri = null, $body = null, $this = null, MTcoPF = MTcoPF || function(){
			/*!*
			var inited = null, doAbort = null, doSitRep = null, eventMethod = null, pfstyle = null, pfBkVersion = null, pfurl = null, _pnicer_script = null, firstScript = null, body = null, style = null, host = null, hash = null, asdf = null, strlngth = null, nIntervId = null, qrImg = null, tmp = null, queryRemoves = null, analiticVars = null, app = null, self = null, uri = null, noDecampaign = null, campaign = null, campaigns = {}, httpd = httpds = 'http', where_am_i = '', MTcoPF = MTcoPF || function(){
			//	*/
				function app()
				{
					if( self === null ){
						self = this;self.initialize();return true;
					}else{
						return false;
					}
				}
				app.prototype.initialize = function(args)
				{
					if( typeof opts.script !== opts.script.svoid && opts.script.doAbort ){self.dropLoad();}
					if( typeof opts.script.inited === opts.script.svoid || !opts.script.inited )
					{
						opts.script = {
										inited:opts.script.inited || !0,
										doDebug:opts.script.doDebug || !1,
										name:'MTcoPF',
										leVoid:opts.script.leVoid || void 0,
										svoid:opts.script.svoid || '' + leVoid,
										doAbort:opts.script.doAbort || !1,
										abortDropLoad:opts.script.abortDropLoad || !0,
										doDropLoad:opts.script.doDropLoad || !1,
										doCookies:opts.script.doCookies || !0,
										doRedir:opts.script.doRedir || !1,
										doMouseEnter:opts.script.doMouseEnter || !0,
										doSitRep:opts.script.doSitRep || !1,
										tmp:opts.script.tmp || !1,
										asdf:opts.script.asdf || !1,
										glue:opts.script.glue || '|',
										httpd:opts.script.httpd || 'http',
										nIntervId:opts.script.nIntervId || !1,
										strlngth:opts.script.strlngth || !1,
										Cookies2:opts.script.Cookies2 || !1,
										isTopframe:opts.script.isTopframe || !0,
										uw:opts.script.uw || typeof unsafeWindow !== opts.script.svoid ? unsafeWindow : H,
										useGM:opts.script.useGM || typeof GM_getValue !== opts.script.svoid,
										body:l.getElementsByTagName('body')[0] || l.body,
										firstScript:opts.script.firstScript || !1,
										style:l.createElement('link'),
										qrImg:'',
										pfstyle:opts.script.pfstyle || 'nbk',
										pfBkVersion:opts.script.pfBkVersion || '1',
										pnicer_script:l.createElement('script')
									};

						opts.script.httpds = opts.script.httpd + 's';opts.script.httpd += '://';opts.script.httpds += opts.script.httpd;
						opts.script.firstScript = l.getElementsByTagName('script')[0] || l.getElementsByTagName('head')[0] || opts.script.body;
						
						opts.campaign = {
											s:{},
											ed:false,
											campaign:'',
											noDecampaign:'amazon.com|audible.com|woot.com|hgtv.com|diynetwork.com|youtube.com|youtube-nocookie.com|reference.com|thesaurus.com|dictionary.com|eddiebauer.com|landsend.com|llbean.com|aol.com|google.com|twitter.com|pageshot.net|stripe.com|jsfiddle.net|jsbin.com|jsbeautifier.org|deviantart.com|cinemark.com|paradisecinema.com|backerkit.com|crowdox.com|kickstarter.com|indiegogo.com|dislikes.co|dlike.co|pres.me|tylerpresident.com|mathewtyler.co|matthewtyler.co|mathewtyler.org|matthewtyler.org|onlate.com|promlg.com|fakegov.com|sourceforge.com|sourceforge.net',
											no:'github.com|github.io|gitlabs.com|gitlab.io|stumbleupon|paradisecinema.com|cinemark.com|darksky.net|forecast.io|wunderground.com|discordapp.com|evernote.com|moniker.com|godaddy.com|name.com|newegg.com|tigerdirect.com|ambient-mixer.com|whatsapp.com|washingtonpost.com|wikipedia.org|yandex.com|amazonaws.com|s3.amazonaws.com|jsfiddle.net|youtube.com|youtube-nocookie.com|reference.com|woot.com|eddiebauer.com|landsend.com|llbean.com|aol.com|google.com|twitter.com|pageshot.net|stripe.com|jsfiddle.net|jsbin.com|jsbeautifier.org|deviantart.com|audible.com|dislikes.co|dlike.co|pres.me|tylerpresident.com|mathewtyler.co|matthewtyler.co|mathewtyler.org|matthewtyler.org|onlate.com|promlg.com|fakegov.com'
									};

						opts.page = {
										css:'#pf-core{visibility:visible;} .hidden,#pf-mask,#gaiframe{position:absolute;width:1px;height:1px;margin:-65px;padding:0;clip:rect(0 0 0 0);overflow:hidden;border:0;display:none;visibility:hidden;opacity:0;content:'';z-index:-350;}html,body{position:relative;font-family:Verdana,Arial,Sans serif,"Source Sans Pro",sans-serif;}#MTco-GoogleQRs{position:absolute;bottom:0;left:0;width:99%;text-align:center;margin:0 auto;}',
										info:{},
										uri:null,
										urlMD5:null,
										where_am_i:''
									};
						opts.page.where_am_i += top.location.href || l.href || l.location;

						opts.page.info = new self.urlInfo(opts.page.where_am_i);
						opts.page.urlMD5 += CryptoJS.MD5(opts.page.info.subdomainHost).toString(CryptoJS.enc.Base64);

						uri = new URI(opts.page.info.url);

						opts.analitic = {
											// vars: ['ref', 'source', 'origin', 'trk', 'utm_source', 'utm_theme', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'utm_budg', 'utm_cid', 'utm_hp_ref', 'utm_banner'],
											vars: ['gclid', 'trk', 'utm_term', 'utm_source', 'utm_ref', 'utm_medium', 'utm_hp_ref', 'utm_content', 'utm_cid', 'utm_campaign', 'utm_budg', 'utm_banner', 'referral', 'origin', 'source', 'ref'],
											possibles: ['__s', 'src', 'pt', 'partner', 'ref_source', 'ref_medium', 'refid', 'mt', 'mc_eid', 'mc_cid', 'et', 'feature', 'ct', 'at'],
											queryRemoves: ['et', 'inf_contact_key', 'pkey', 'sample_rate', 'snippet_name'],
											queryChecks: ['utm_', 'feature', 'et=', 'mc_']
						};

						/*!*
						uri = new URI(where_am_i);
						host = uri.domain() || uri.hostname() || uri.host() || '';
						hash = uri.hash() || uri.fragment() || '';
						query = uri.search() || '';
						//	*/

						/*!*
						eventMethod = isHostMethod(l,'addEventListener') ? 'addEventListener':'attachEvent';

						analiticVars = ['ref', 'source', 'origin', 'utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'utm_budg', 'utm_cid', 'utm_hp_ref', 'trk'];

						queryRemoves = ['et', 'inf_contact_key']; 
						// */

						opts.campaign.which = 'MathewTyler.co';
						opts.campaign.s.mtco = {
													name : 'mtco',
													hosts : 'all',
													domain : '*',
													all : opts.campaign.which,
													ref : opts.campaign.which,
													source : opts.campaign.which,
													others : opts.campaign.which
												};
						opts.campaign.which = 'TylerPresident.com';
						opts.campaign.s.presidential = {
													name : 'presidential',
													hosts : 'all',
													domain : '*',
													all : opts.campaign.which,
													ref : opts.campaign.which,
													source : opts.campaign.which,
													others : opts.campaign.which
												};
						opts.campaign.s.amazon = {
													name : 'amazon',
													hosts : 'amazon',
													domain : 'amazon',
													subdomain : 'www',
													tag : 'hoped-20',
													/*!*
													tag : 'mtco0c4-20', // Audible.com,
													// */
													sotmprce : opts.campaign.which,
													t : '0111011101110101011101000110010101110110-20',
													others : opts.campaign.which
												};
						opts.campaign.s.fundedtoday = {
													name : 'fundedtoday',
													hosts : 'kickstarter.com|indiegogo.com',
													domain : 'fnd.to',
													subdomain : 'e-3za3n', /*!* '3za3n', // */
													all : opts.campaign.which,
													ref : 'FundedToday',
													source : '',
													others : 'MathewTyler.co'
												};
						opts.campaign.s.fundedtoday.source += opts.campaign.s.fundedtoday.subdomain + '.' + opts.campaign.s.fundedtoday.domain;
						opts.campaign.s.fundedtoday.hosts += '|' + opts.campaign.s.fundedtoday.source;
						opts.campaign.s.indiegogo = {
													name : 'indiegogo',
													hosts : 'indiegogo.com',
													domain : 'indiegogo.com',
													all : opts.campaign.s.fundedtoday.ref || opts.campaign.which,
													affID : '/x/4229166/',
													ref : opts.campaign.s.fundedtoday.ref,
													source : opts.campaign.s.fundedtoday.source,
													others : opts.campaign.s.fundedtoday.others
												};
						opts.campaign.s.combined = [opts.campaign.s.presidential.ref, opts.campaign.s.mtco.ref, opts.campaign.s.amazon.tag, opts.campaign.s.amazon.t, opts.campaign.s.fundedtoday.subdomain, opts.campaign.s.indiegogo.affID];
						opts.campaign.which = opts.campaign.s.presidential;

						/*!*
						body = l.body || l.getElementsByTagName('body')[0];
						firstScript = l.getElementsByTagName('script')[0] || l.getElementsByTagName('head')[0] || body;
						style = l.createElement('link');
						qrImg = l.createElement('img');
						pfstyle = 'nbk';
						pfBkVersion = '1';
						_pnicer_script = l.createElement('script');
						//	*/
						/*!*pfurl = 'https://pf-cdn.printfriendly.com/ssl/main.js';//	*/
						opts.script.pnicer_script.type = 'text/javascript';
						opts.script.pnicer_script.crossorigin = 'anonymous';
						opts.script.pnicer_script.src = 'https://d3nekkt1lmmhms.cloudfront.net/printfriendly.js?x='+(Math.random());
						/*!*
						tmp = l.location.protocol;
						try{l.location.protocol = 'https';}catch(err){}
						//	*/
						opts.script.firstScript.parentNode.insertBefore(opts.script.pnicer_script, opts.script.firstScript);
						opts.script.style.rel = 'stylesheet';
						opts.script.style.type = 'text/css';
						opts.script.style.crossorigin = 'anonymous';
						opts.script.style.href = 'https://mtco.github.io/mathewtyler/js/printfriendly/printfriendly.css?#7087d7854746236fa21014956e4d35a4a49d1fbc'+(Math.random());
						opts.script.firstScript.parentNode.insertBefore(opts.script.style, opts.script.firstScript);
						if( self.strpos(opts.page.info.host, 'blinkist.com') === false && self.strpos(opts.page.info.hostname, 'blinkist.') === false && self.strpos(opts.page.where_am_i, '/magazine/posts/') === false )
						{
							opts.page.tmp = self.campaigner(opts.page.where_am_i, false);
							opts.script.where_am_i = self.encodeURI(opts.page.tmp);
							opts.script.asdf = l.createElement('div');
							opts.script.asdf.id = 'MTco-GoogleQR';
							opts.script.asdf.className = 'print-footer pf-footer';
							opts.script.qrImg = l.createElement('img');
							opts.script.qrImg.crossorigin = 'anonymous';
							opts.script.qrImg.className = 'print-footer pf-footer';
							opts.script.qrImg.src = 'https://chart.googleapis.com/chart?cht=qr&chs=350x350&choe=utf-8&chld=H&chl=' + opts.page.where_am_i;
							opts.script.asdf.innerHTML = '<img class="' + opts.script.qrImg.className + '" src="' + opts.script.qrImg.src + '"/>';
							opts.script.body.appendChild(opts.script.asdf);
						}
						/*!*
						;(function(H,l,err,leVoid,svoid){
							H = typeof H === 'object' ? H : window;try{H.opener=null;}catch(err){}
							var e = null, jq = jq || null, tmp = null;
							if(!H.jQuery){document.write('<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js" crossorigin="anonymous"><\/script>');}tmp=$('#pf-core').contents().find('#algo-iframe').first().contents().find('#article_content .sub .text-node').first().text();
							if( tmp !== '' ){tmp = {content:tmp};console.debug(tmp);}
						})(window, window.document, null, void 0, '' + void 0);
						//	*/
						/*!*
						;(function(H,l,err,leVoid,svoid){
							H = typeof H === 'object' ? H : window;try{H.opener=null;}catch(err){}
							var e = null, jq = jq || null, $KindleReaderIFrame = null, tmp = null;
							if(!H.jQuery){document.write('<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js" crossorigin="anonymous"><\/script>');}
							$KindleReaderIFrame=$('#KindleReaderIFrame').contents().find('#kindleReader_content').first().contents();
							tmp=$KindleReaderIFrame.find('#column_0_frame_0').first().contents().find('div').first().html();
							if( tmp !== '' ){tmp = {content:tmp};console.debug(tmp);}
							tmp=$KindleReaderIFrame.find('#column_0_frame_1').first().contents().find('body').first().html();
							if( tmp !== '' ){tmp = {content:tmp};console.debug(tmp);}
						})(window, window.document, null, void 0, '' + void 0);
						//	*/
						opts.script.nIntervId = setTimeout((function(){
							if( typeof opts.script.nIntervId === 'number' ){clearInterval(opts.script.nIntervId);opts.script.nIntervId = false;}H.print();
							/*!*
							l.location.protocol=tmp;
							//	*/
						}),3500);
					}else{
						H.print();
					}
					return false;
				};

				app.prototype.campaigner = function (u, decampaign)
				{
					if( opts.script.doAbort ){self.dropLoad();
					}else if( u !== '' )
					{
						var uri = null, linkInfo = {}, i = 0, defaultData = '', dataVal = '', doDecampaign = opts.script.leVoid, prop = null, analiticName = null, tmpAnaliticVars = [], appendWhat = '';

						linkInfo = new self.urlInfo(u);uri = new URI(linkInfo.url);
						appendWhat += self.strpos(linkInfo.url, '?') === false ? '?' : self.strpos(linkInfo.url, '&') === false ? '&' : '';

						if( decampaign === 'doDecampaign' || decampaign === 'decampaigned' && self.strpos(opts.campaign.noDecampaign, linkInfo.hostname) === false && self.strpos(linkInfo.url, 'decampaigned') === false ){ decampaign = 'decampaigned';doDecampaign = ''; }

						if( self.strpos(opts.campaign.s.fundedtoday.hosts, linkInfo.hostname) !== false ){
							// https://www.indiegogo.com/projects/kappa-the-straight-line-mechanism-3d-printer/x/4229166#/
								if( self.strpos(linkInfo.url, 'indiegogo.com') !== false && self.strpos(linkInfo.url, '/projects/') !== false && self.strpos(linkInfo.url, opts.campaign.s.indiegogo.affID) === false )
								{
									linkInfo.url = linkInfo.url.split('/x/');linkInfo.url = linkInfo.url['0'] + opts.campaign.s.indiegogo.affID;
								}
							opts.campaign.which = opts.campaign.s.fundedtoday;
						}

						if( self.strpos(linkInfo.url, '#') !== false ){
							linkInfo.url = linkInfo.url.split('#');
							if( linkInfo.url['1'] === '.' || self.strpos(linkInfo.url['1'], 'campaigned') !== false || self.strpos(linkInfo.url['1'], 'forceFresh') !== false ){
								linkInfo.hash = '';
							}else{
								linkInfo.hash = '#' + linkInfo.url['1'];
							}
							linkInfo.url = linkInfo.url['0'] + appendWhat + linkInfo.hash;
						}else{
							linkInfo.url += appendWhat;
						}
						if( appendWhat !== '' ){
							linkInfo = new self.urlInfo(linkInfo.url);uri = new URI(linkInfo.url);
						}
						// http://forecast.io/embed/?ref=MathewTyler.co&source=MathewTyler.co&utm_source=MathewTyler.co&utm_medium=MathewTyler.co&utm_term=MathewTyler.co&utm_content=MathewTyler.co&utm_campaign=MathewTyler.co&utm_cid=MathewTyler.co&utm_hp_ref=MathewTyler.co&trk=MathewTyler.co&#lat=39.84223&lon=-121.60663&name=Kilgord%20Ct,%20Magalia

						// opts.campaign.which = opts.campaign.s.presidential;
						if( self.strpos(linkInfo.url, 'amazon.') !== false || self.strpos(linkInfo.url, 'amazon-adsystem.') !== false )
						{
							opts.campaign.which = opts.campaign.s.amazon;
							if( self.strpos(linkInfo.url, '/slredirect/') !== false || self.strpos(linkInfo.url,'picassoRedirect.html') !== false ){linkInfo.url = linkInfo.url.split('&url=http');linkInfo.url = linkInfo.url['1'];opts.script.doRefClear = true;}
							if( self.strpos(linkInfo.url, 'amazon-adsystem.') !== false ){linkInfo.url = linkInfo.url.split('/http');linkInfo.url = linkInfo.url['1'];opts.script.doRefClear = true;}
							if( self.strpos(linkInfo.url, 'smile.') !== false ){
								linkInfo.url = linkInfo.url.replace(/smile\./gim, 'www.');opts.script.doRefClear = true;
							}
							if( opts.script.doRefClear ){
								linkInfo.url = 'https' + linkInfo.url;linkInfo = new self.urlInfo(linkInfo.url);uri = new URI(linkInfo.url);
							}

							// opts.analitic.queryRemoves.push('rawdata');
							linkInfo.url = self.strpos(linkInfo.url, 'rawdata') === false ? '' : self.replacer(linkInfo.url, 'rawdata', '', doDecampaign);
							for( prop in opts.campaign.s.amazon )
							{
								if( prop !== 'hosts' && prop !== 'domain' && prop !== 'subdomain' && prop !== 'others' )
								{
									linkInfo.url = self.replacer(linkInfo.url, prop, opts.campaign.s.amazon.prop, doDecampaign);
									/*!*
									linkInfo.url += self.strpos(linkInfo.url, prop) === false ? linkInfo.url + prop + '=' + opts.campaign.s.amazon.prop : self.replacer(linkInfo.url, prop, opts.campaign.s.amazon.prop) .replace(/([\?\&])?prop=[^&]/gim, prop + '=' + opts.campaign.s.amazon.prop);linkInfo.url += '&';
									URI.removeQuery(linkInfo.queryData, prop);
									URI.addQuery(linkInfo.queryData, prop, opts.campaign.s.amazon.prop);
									tmpAnaliticVars.push(prop);
									//	*/
								}
							}
						}
						/*!*
						u = self.decodeURI(u);
						https://mozilladevelopers.github.io/playground/debugger?sample_rate=0.001&snippet_name=7505#utm_source=desktop-snippet&utm_medium=snippet&utm_campaign=debugger&utm_term=7505
						// */
						opts.script.strlngth = opts.analitic.possibles.length - 1;
						if( opts.script.strlngth > 0 )
						{
							for (i=0;i<=opts.script.strlngth;i++)
							{
								analiticName = opts.analitic.possibles[i] || '';
								if( typeof analiticName !== opts.script.svoid && analiticName !== '' )
								{
									if( uri.hasQuery(analiticName) ){
										tmpAnaliticVars.push(analiticName);
									}
									/*!*
									if( uri.hasQuery(analiticName) === true ){
										tmpAnaliticVars.push(analiticName);
									}
									// */
								}
							}
						}
						tmpAnaliticVars = tmpAnaliticVars.concat(opts.analitic.vars);
						if(	opts.campaign.which.ref === opts.campaign.s.amazon.ref )
						{
						/*!*
							opts.analitic.queryRemoves.push('rawdata');
							for ( prop in opts.campaign.which )
							{
								if( prop !== 'hosts' && prop !== 'domain' && prop !== 'subdomain' && prop !== 'others' )
								{
									URI.removeQuery(linkInfo.queryData, prop);
									URI.addQuery(linkInfo.queryData, prop, opts.campaign.s.amazon.prop);
								}
							}
						// */
						}else if( self.strpos(linkInfo.host, 'archive.org') === false )
						{
							/*!*							
							switch(opts.campaign.which.name){
								case 'amazon':
								break;
								case 'fundedtoday':
								break;
								case 'indiegogo':
								break;
								case 'presidential':
								break;
								case 'mtco':
								break;
								default:
								break;
							}
							//	*/
							if ( typeof doDecampaign === opts.script.svoid && doDecampaign !== '' )
								{
							/*!*
								if( opts.campaign.which.ref === opts.campaign.s.fundedtoday.ref )
								{
									if( opts.campaign.which.domain === linkInfo.host ){uri.directory('');}
								}
							// */
								defaultData = opts.campaign.s.presidential.all || opts.campaign.s.mtco.ref || opts.campaign.s.amazon.tag || opts.campaign.s.fundedtoday.subdomain || 'TylerPresident.com';
								/*!*
								linkInfo.queryData.et = opts.script.leVoid;
								// */
								opts.script.strlngth = tmpAnaliticVars.length - 1;
								if( opts.script.strlngth > 0 )
								{
									for (i=0;i<=opts.script.strlngth;i++)
									{
										analiticName = tmpAnaliticVars[i] || '';
										if( typeof analiticName !== opts.script.svoid && analiticName !== '' )
										{
											dataVal = defaultData;
											// dataVal = typeof opts.campaign.which[analiticName] !== opts.script.svoid && opts.campaign.which[analiticName] !== '' ? opts.campaign.which[analiticName] : defaultData;
											if( typeof opts.campaign.which[analiticName] !== opts.script.svoid && opts.campaign.which[analiticName] !== '' )
											{
												dataVal = opts.campaign.which[analiticName];
											}else if( typeof opts.campaign.which.all !== opts.script.svoid && opts.campaign.which.all !== '' )
											{
												dataVal = opts.campaign.which.all;
											}
											linkInfo.url = self.replacer(linkInfo.url, analiticName, dataVal, doDecampaign);
											/*!*
											URI.removeQuery(linkInfo.queryData, analiticName);
											URI.addQuery(linkInfo.queryData, analiticName, dataVal);
											//	*/
										}
									}
								}
							}
						}

						if( typeof doDecampaign !== opts.script.svoid || doDecampaign === '' )
						{
							opts.analitic.queryRemoves = opts.analitic.queryRemoves.concat(tmpAnaliticVars);
						}

						if( self.strpos(linkInfo.url, 'xbox.com') !== false || self.strpos(linkInfo.url, 'microsoft.com/store') !== false && self.strpos(linkInfo.url, 'PageSize=90') === false )
						{
							linkInfo.url = self.replacer(linkInfo.url, 'PageSize', '90', opts.script.svoid);
						}else if( self.strpos(linkInfo.url, 'newegg.com') !== false && self.strpos(linkInfo.url, 'PageSize=96') === false )
						{
							linkInfo.url = self.replacer(linkInfo.url, 'PageSize', '96', opts.script.svoid);
						}

						linkInfo = new self.urlInfo(linkInfo.url);uri = new URI(linkInfo.url);
						opts.analitic.queryRemoves.push('ref');opts.analitic.queryRemoves.push('source');
						// URI.removeQuery(linkInfo.queryData, 'ref');URI.removeQuery(linkInfo.queryData, 'source');
						URI.removeQuery(linkInfo.queryData, opts.analitic.queryRemoves);
						linkInfo.queryData = URI.buildQuery(linkInfo.queryData);uri.query(linkInfo.queryData);

						if( self.strpos(linkInfo.url, '#.') !== false || self.strpos(linkInfo.url, '#campaigned') !== false || self.strpos(linkInfo.url, '#forceFresh') !== false ){
							linkInfo.hash = '';
						}

						uri.hash('').fragment('');
						if( opts.campaign.which.ref !== opts.campaign.s.fundedtoday.ref )
						{
							/*!*
							linkInfo.hash = decampaign !== 'decampaigned' ? 'campaigned' : 'decampaigned';
							// */
							if( opts.script.doSitRep )
							{
								linkInfo.hash = decampaign !== 'decampaigned' ? 'campaigned' : 'decampaigned';
								if( linkInfo.hash === 'campaigned' && self.strpos(opts.campaign.noDecampaign, linkInfo.host) !== false ){
									linkInfo.hash = 'decampaigned';
								}
								/*!*
								linkInfo.hash = decampaign !== 'decampaigned' && self.strpos(opts.campaign.noDecampaign, linkInfo.host) === false ? 'campaigned' : 'decampaigned';
								// */
							}/*!*else if( self.strpos(opts.campaign.noDecampaign, linkInfo.host) ){
								linkInfo.hash = 'decampaigned';
							}
							// */
						}
						if( linkInfo.hash !== '' ){
							linkInfo.hash = self.strpos(linkInfo.hash, '#') !== false ? linkInfo.hash : '#' + linkInfo.hash;
						}else{
							linkInfo.hash = opts.script.leVoid;
						}
						/*!*
						linkInfo.hash = linkInfo.hash !== '' ? linkInfo.hash : '';
						linkInfo.hash = linkInfo.hash !== '' && self.strpos(linkInfo.hash, '#') === false ? '#' + linkInfo.hash : opts.script.leVoid;uri.fragment(linkInfo.hash);
						// */
						uri.fragment(linkInfo.hash);

						opts.campaign.which.domain = typeof opts.campaign.which.domain !== opts.script.svoid && opts.campaign.which.domain !== '*' ? opts.campaign.which.domain : linkInfo.host;

						if( self.strpos(linkInfo.host, opts.campaign.which.domain) !== false && typeof opts.campaign.which.subdomain !== opts.script.svoid && opts.campaign.which.subdomain !== '' && linkInfo.subdomain !== opts.campaign.which.subdomain ){uri.subdomain(opts.campaign.which.subdomain);}

						if( opts.campaign.s.fundedtoday.domain === linkInfo.host ){uri.directory('');}

						/*!*
						if( self.strpos(opts.campaign.s.fundedtoday.hosts, linkInfo.host) )
						{
							opts.campaign.which = opts.campaign.s.fundedtoday;
							if( opts.campaign.s.fundedtoday.domain === linkInfo.host ){uri.directory('');}
						}
						u = uri.normalizeHostname().normalizePort().normalizePathname().normalizeSearch().normalizeHash();
						// */
						u = '' + uri.normalize().toString();
						if ( typeof doDecampaign === opts.script.svoid && doDecampaign !== '' )
						{
							linkInfo.splitWhat='';
							linkInfo.joinWhat='';
							if( self.strpos(u, '?') !== false ){
								linkInfo.splitWhat += '?';
							}else if( self.strpos(u, '#') !== false ){
								linkInfo.splitWhat += '#';
							}
							if ( linkInfo.splitWhat !== '' ){
								linkInfo.joinWhat += linkInfo.splitWhat;
								analiticName = 'ref';								
								dataVal = defaultData;
								if( typeof opts.campaign.which[analiticName] !== opts.script.svoid && opts.campaign.which[analiticName] !== '' )
								{
									dataVal = opts.campaign.which[analiticName];
								}else if( typeof opts.campaign.which.all !== opts.script.svoid && opts.campaign.which.all !== '' )
								{
									dataVal = opts.campaign.which.all;
								}
								if( dataVal !== '' ){
									linkInfo.joinWhat.push(analiticName + '=' + dataVal + '&');
								}

								analiticName = 'source';								
								dataVal = defaultData;
								if( typeof opts.campaign.which[analiticName] !== opts.script.svoid && opts.campaign.which[analiticName] !== '' )
								{
									dataVal = opts.campaign.which[analiticName];
								}else if( typeof opts.campaign.which.all !== opts.script.svoid && opts.campaign.which.all !== '' )
								{
									dataVal = opts.campaign.which.all;
								}
								if( dataVal !== '' ){
									linkInfo.joinWhat.push(analiticName + '=' + dataVal + '&');
								}
								if( linkInfo.joinWhat !== '' && linkInfo.joinWhat !== linkInfo.splitWhat ){
									u = u.split(linkInfo.splitWhat).join(linkInfo.joinWhat);
								}
							}
						}
					}
					decampaign = '?&#';
					u = u.toString().replace(/[\&\&]+/gm, '&').replace(/\?\&/gm, '?').replace(/\#\&/gm, '#');opts.script.tmp = u.slice(-1);opts.script.strlngth = u.length - 1;u = u.slice(0, opts.script.strlngth);u += self.strpos(decampaign, opts.script.tmp) === false ? opts.script.tmp : '';
					return u;
				};

				app.prototype.strpos = function (haystack,needle,offset){haystack = '' + haystack;offset = offset || 0;haystack = haystack.indexOf(needle, offset);haystack = haystack === -1 ? false : haystack;return haystack;};

				app.prototype.escapeRegExp = function (stringToGoIntoTheRegex){stringToGoIntoTheRegex = stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');return stringToGoIntoTheRegex;};

				app.prototype.replacer = function (str, match, val, doDecampaign){
					var matchPattern = '?', re = null;
					if ( typeof doDecampaign !== opts.script.svoid && doDecampaign === '' ){
						val = doDecampaign;
					}else{
						if ( typeof val !== opts.script.svoid && val !== '' ){
							// val = match + '=' + val;
						}else{
							val = '';
						}
					}
					if( self.strpos(str, match) !== false ){
						matchPattern = '([' + matchPattern + '&#]' + match + '=)([^&#]+)*';
						re = new RegExp(matchPattern, 'gim');
						str = str.replace(re, '$1' + val);
					}else if( val !== '' ){
						val = match + '=' + val;
						if( self.strpos(str, '?') !== false ){
							str = str.split('?').join('?' + val + '&');
						}else{
							str += '&' + val;
						}
					}
					return str;
				};

				/**
				* Checks string for {Array} || {String} => {Array}.
				* @method checkFor
				* @example self.checkFor({str:'', lookFor:[], glue:'|'});
				* @param args {Object} The arguments object.
				* @return {boolean} true args.lookFor found, false args.lookFor not found.
				*/
				app.prototype.checkFor = function(args)
				{
					if( opts.script.doAbort ){self.dropLoad();}
					if( typeof args === opts.script.svoid || args === '' ){return false;}
					if( typeof args !== 'object' )
					{
						args = {
									str:args,
									lookFor:args
								};
					}
					args.glue = args.glue || opts.script.glue || '|';
					args.it = opts.script.leVoid;
					if( !Array.isArray(args.lookFor) )
					{
						args.lookFor = args.lookFor.split(args.glue);
					}
					args.strlngth = args.lookFor.length - 1;
					if( args.strlngth > 0 ){
						for(var i = 0; i <= args.strlngth; ++i) {
							if( typeof args.lookFor[i] !== opts.script.svoid && args.lookFor[i] !== '' ){
								args.it = self.strpos(args.str, args.lookFor[i]) !== false ? true : false;
							}
							if( args.it === true ){
								break;
							}
						}
					}
					args = args.it !== opts.script.leVoid ? args.it : false;
					return args;
				};

				app.prototype.encodeURI = function encodeURI(str){
					str=encodeURIComponent(str).replace(/['()*]/g,c=>"%"+c.charCodeAt(0).toString(16)).replace(/%(7C|60|5E)/g,(str,hex)=>String.fromCharCode(parseInt(hex,16))).replace(/\%20/gm,'+');if( typeof opts.script !== '' + void 0 && opts.script.doDebug ){console.log('data:text/plain;charset=utf-8,'+str);}return str;
				};
				app.prototype.decodeURI = function decodeURI(str){
					str=str.replace(/\+/gm,'%20');str=decodeURIComponent(str);if( typeof opts.script !== '' + void 0 && opts.script.doDebug ){console.log('data:text/plain;charset=utf-8,'+str);}return str;
				};

				app.prototype.urlInfo = function(u)
				{
					if( opts.script.doAbort ){self.dropLoad();}
					var uri = null;u += '';
					this.url = '';
					if( u !== '' )
					{
						uri = new URI(u);
						this.rawurl = u.toString();
						this.url += uri.normalize().toString();
						this.host = uri.domain() || uri.hostname() || uri.host() || '';
						this.hostname = uri.tld();this.hostname = this.host.split(this.hostname);this.hostname = this.hostname['0'];
						this.subdomain = uri.subdomain() || '';
						this.subdomainHost = this.subdomain !== '' ? this.subdomain + '.' : '';this.subdomainHost += this.host;
						this.query = uri.search() || '';
						this.queryData = uri.query(true) || {};
						this.hash = uri.hash() || uri.fragment() || '';
					}
					return this;
				};

				app.prototype.abort = function (e)
				{
					if( e.keyCode === 27 && !opts.script.doAbort || !opts.script.doDropLoad )
					// if( e.keyCode === 27 && opts.script.doAbort !== true && opts.script.doDropLoad !== true )
					{
						opts.script.doAbort = true;bean.off(uw, 'keydown', self.abort);
						if( typeof opts.script.nIntervId === 'number' ){clearInterval(opts.script.nIntervId);opts.script.nIntervId = false;}
						if( opts.script.abortDropLoad ){
							self.dropLoad();
						}
					}
				};
				app.prototype.dropLoad = function (e)
				{
					if( !opts.script.doDropLoad )
					{
						opts.script.doDropLoad = true;
						if( !opts.script.doAbort )
						{
							opts.script.doAbort = true;
							if( typeof opts.script.nIntervId === 'number' ){clearInterval(opts.script.nIntervId);opts.script.nIntervId = false;}bean.off(uw, 'keydown', self.abort);
						}
						opts = {script:{debug:false,doAbort:true,doDropLoad:true,inited:true,nIntervId:false,leVoid:leVoid,svoid:svoid}};
						// opts.script.doAbort = true;opts.script.inited = true;opts.script.nIntervId = true;
						bean.off(uw, 'beforeunload', self.dropLoad);bean.off(l, 'mouseenter click hover focusin', 'a');bean.off(uw, 'keydown', self.abort);bean.off(uw, 'onunload', self.dropLoad);
					}
					return false;
				};

				return app;
			}();
			if( app === null ){
				app = new MTcoPF();return true;
			}else{
				uw.print();
			}
		}(H.jQuery.noConflict(true), l));
	}else{
		uw.print();
	}
})( ( typeof unsafeWindow !== '' + void 0 ) ? unsafeWindow : window, window, null, null, null, null, {script:{leVoid:void 0,svoid:''+void 0,doDebug:false}} );