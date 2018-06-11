;(function(H,l,err,leVoid,svoid)
{
	H = typeof H === 'object' ? H : window;try{H.opener=null;}catch(err){}
	var e = null, jq = jq || null;
	if( jq === null && !H['priFri'] )
	{
		leVoid = typeof leVoid === void 0 ? leVoid : void 0;svoid = typeof svoid === 'string' ? svoid : '' + leVoid;
		l = typeof l === 'object' ? l : H.document;
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
					if( typeof opts.script.doAbort !== opts.script.svoid && opts.script.doAbort === true ){self.dropLoad();}
					if( typeof opts.script.inited === opts.script.svoid || !opts.script.inited )
					{
						opts.script = {
										inited:opts.script.inited || !0,
										debug:opts.script.debug || !1,
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
											noDecampaign:'amazon.|www.hgtv.com|www.diynetwork.com|youtube.com|reference.com|thesaurus.com|dictionary.com|woot.com|eddiebauer.com|landsend.com|llbean.com|aol.com|google.com|twitter.com|pageshot.net|stripe.com|jsfiddle.net|jsbin.com|jsbeautifier.org|deviantart.com',
											no:'github.com|github.io|gitlabs.com|gitlabs.io|stumbleupon|paradisecinema.com|cinemark.com|darksky.net|forecast.io|wunderground.com|discordapp.com|evernote.com|moniker.com|godaddy.com|name.com|newegg.com|tigerdirect.com|ambient-mixer.com|whatsapp.com|washingtonpost.com|wikipedia.org|yandex.com|s3.amazonaws.com|jsfiddle.net|youtube.com|amazon.com|reference.com|thesaurus.com|dictionary.com|woot.com|eddiebauer.com|landsend.com|llbean.com|aol.com|google.com|twitter.com|pageshot.net|stripe.com|jsfiddle.net|jsbin.com|jsbeautifier.org|deviantart.com'
									};

						opts.page = {
										css:'.hidden{display:none;visibility:hidden;opacity:0;z-index:-350;}',
										info:{},
										uri:null,
										urlMD5:null,
										where_am_i:''
									};
						opts.page.where_am_i += top.location.href || l.href || l.location;

						uri = new URI(opts.page.where_am_i);
						opts.page.info.url = uri.normalize().toString();
						opts.page.info.host = uri.domain() || uri.hostname() || uri.host() || '';
						opts.page.info.hostname = uri.tld();opts.page.info.hostname = opts.page.info.host.split(opts.page.info.hostname);opts.page.info.hostname = opts.page.info.hostname['0'];
						opts.page.info.subdomain = uri.subdomain() || '';
						opts.page.info.hash = uri.hash() || uri.fragment() || '';
						opts.page.info.query = uri.search() || '';

						opts.page.info.subdomainHost = opts.page.info.subdomain !== '' ? opts.page.info.subdomain + '.' : '';
						opts.page.info.subdomainHost += opts.page.info.host;

						opts.analitic = {
											// vars: ['ref', 'source', 'origin', 'trk', 'utm_source', 'utm_theme', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'utm_budg', 'utm_cid', 'utm_hp_ref', 'utm_banner'],
											vars: ['trk', 'utm_term', 'utm_source', 'utm_ref', 'utm_medium', 'utm_hp_ref', 'utm_content', 'utm_cid', 'utm_campaign', 'utm_budg', 'utm_banner', 'referral', 'origin', 'source', 'ref'],
											possibles: ['__s', 'src', 'partner', 'refid', 'mc_cid', 'mc_eid', 'et', 'ref_source', 'ref_medium', 'feature'],
											queryRemoves: ['et', 'inf_contact_key', 'pkey']
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

						campaign = 'MathewTyler.co';
						campaigns.presidential = {
													hosts : 'all',
													all : campaign,
													ref : campaign
												};

						campaigns.amazon = {
													hosts : 'amazon',
													tag : 'hoped-20',
													sotmprce : campaign,
													t : '0111011101110101011101000110010101110110-20',
													others : campaign
												};
						campaigns.others = {
												hosts : 'all',
												all : campaign,
												ref : campaign
											};
						campaign = {
										hosts : 'all',
										ref : campaign,
										source : campaign,
										others : campaign
									};
						
						opts.campaign.which = 'TylerPresident.com';
						opts.campaign.s.presidential = {
													hosts : 'all',
													domain : '*',
													all : opts.campaign.which,
													ref : opts.campaign.which,
													source : opts.campaign.which,
													others : opts.campaign.which
												};
						opts.campaign.s.fundedtoday = {
													hosts : 'kickstarter.com|indiegogo.com|fnd.to',
													domain : 'fnd.to',
													subdomain : 'e-3za3n', /*! * '3za3n', // */
													ref : 'FundedToday',
													source : '',
													others : opts.campaign.which
												};
						opts.campaign.s.fundedtoday.source = opts.campaign.s.fundedtoday.subdomain + '.' + opts.campaign.s.fundedtoday.domain;

						opts.campaign.noDecampaign += '|' + opts.campaign.s.fundedtoday.hosts;

						opts.campaign.s.amazon = {
													hosts : 'amazon',
													domain : 'amazon',
													subdomain : 'www',
													tag : 'hoped-20',
													/*! *
													tag : 'mtco0c4-20',	// Audible.com,
													// */
													sotmprce : opts.campaign.which,
													t : '0111011101110101011101000110010101110110-20',
													others : opts.campaign.which
												};
						opts.campaign.which = 'MathewTyler.co';
						opts.campaign.s.others = {
													hosts : 'all',
													domain : '*',
													all : opts.campaign.which,
													ref : opts.campaign.which,
													source : opts.campaign.which,
													others : opts.campaign.which
												};
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
							opts.script.where_am_i = encodeURIComponent(opts.page.tmp);
							opts.script.asdf = l.createElement('div');
							opts.script.asdf.id = 'MTco-GoogleQR';
							opts.script.qrImg = l.createElement('img');
							opts.script.qrImg.className = 'print-only print-footer pf-footer delete-off delete-no';
							opts.script.qrImg.src = 'https://chart.googleapis.com/chart?cht=qr&chs=350x350&choe=UTF-8&chld=H&chl=' + opts.page.where_am_i;
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
							if( typeof opts.script.nIntervId === 'number' ){clearInterval(opts.script.nIntervId);opts.script.nIntervId = null;}H.print();
							/*!*
							l.location.protocol=tmp;
							//	*/
						}),3500);
					}else{
						H.print();
					}
					return false;
				};

				app.prototype.campaigner = function(u, decampaign)
				{
					if( opts.script.doAbort === true ){self.dropLoad();}
					if( u !== '' )
					{
						var uri = new URI(u), linkInfo = [], i = 0, queryData = uri.query(true) || {}, defaultData = null, dataVal = null, prop = null, analiticName = null, tmpAnaliticVars = [];
						linkInfo.url = uri.normalize().toString();
						linkInfo.host = uri.domain() || uri.hostname() || uri.host() || '';
						linkInfo.hostname = uri.tld();linkInfo.hostname = linkInfo.host.split(linkInfo.hostname);linkInfo.hostname = linkInfo.hostname['0'];
						linkInfo.subdomain = uri.subdomain() || '';
						linkInfo.hash = uri.fragment() || uri.hash() || '';
						linkInfo.query = uri.search() || '';

						linkInfo.subdomainHost = linkInfo.subdomain !== '' ? linkInfo.subdomain + '.' : '';
						linkInfo.subdomainHost += linkInfo.host;

						opts.campaign.which = opts.campaign.s.presidential;

						if( self.strpos(linkInfo.hash, '#.') !== false || self.strpos(linkInfo.hash,'#campaigned') !== false || self.strpos(hash, '#forceFresh') !== false ){
							linkInfo.hash = leVoid;
						}else if( self.strpos(linkInfo.hash, '#') !== false ){
							linkInfo.hash = typeof uri.fragment() !== svoid ? uri.fragment() : leVoid;
						}
						/*!*
						if( self.strpos(u, '__s') !== false ){
						//	*/
						if( uri.hasQuery('__s') === true ){
							analiticVars.push('__s');
						}
						/*!*
						if( self.strpos(host, 'craigslist.') === false ){
							u += self.strpos(u, '?') === false ? '?' : '&';
						}else{
							u += '#';hash = leVoid;
						}
						if( self.strpos(uri.fragment(), 'ref') !== false || self.strpos(uri.fragment(), 'utm_') !== false ){
							u += uri.fragment();hash = leVoid;
						}
						//	*/
						if( decampaign !== 'doDecampaign' && decampaign !== 'decampaigned' && self.strpos(linkInfo.url, 'decampaigned') === false )
						{
							opts.campaign.which = opts.campaign.s.presidential;
							if( self.strpos(linkInfo.url, 'amazon.') !== false )
							{
								opts.campaign.which = opts.campaign.s.amazon;
								opts.analitic.queryRemoves.push('rawdata');
								if( strpos(linkInfo.url, 'smile.') !== false ){linkInfo.url = linkInfo.url.replace(/smile\.amazon\./gim, 'www.amazon.');}

								/*!*
								for (prop in campaigns.amazon)
								{
									if( prop !== 'hosts' && prop !== 'others' )
									{
										URI.removeQuery(queryData, prop);
										URI.addQuery(queryData, prop, opts.campaign.s.amazon.prop);
									}
								}
								queryData.ie = 'UTF8';
								queryData.tag = opts.campaign.s.amazon.tag;
								queryData.sotmprce = opts.campaign.s.amazon.sotmprce;
								queryData.source = opts.campaign.s.amazon.others;
								queryData.t = opts.campaign.s.amazon.t;
								//	*/
								linkInfo.url = self.strpos(linkInfo.url, 'ie=') === false ? linkInfo.url + 'ie=UTF8' : linkInfo.url.replace(/([\?&])?ie=[^&]*/gim,'$1ie=UTF8');

								linkInfo.url = self.strpos(linkInfo.url, '&tag=') === false && self.strpos(linkInfo.url, 'tag=') === false ? linkInfo.url + '&tag=' + opts.campaign.s.amazon.tag : linkInfo.url.replace(/([\?&])?tag=[^&]+/gim, '$1tag=' + opts.campaign.s.amazon.tag);linkInfo.url += '&';

								linkInfo.url = self.strpos(linkInfo.url, '&sotmprce=') === false ? linkInfo.url + '&sotmprce=' + opts.campaign.s.amazon.sotmprce : linkInfo.url.replace(/([\?&])?sotmprce=[^&]+/gim,'$1sotmprce=' + opts.campaign.s.amazon.sotmprce);linkInfo.url += '&';

								linkInfo.url = self.strpos(linkInfo.url, '&source=') === false ? linkInfo.url + '&source=' + opts.campaign.s.amazon.others : linkInfo.url.replace(/([\?&])?source=[^&]*/gim, '$1source=' + opts.campaign.s.amazon.others);linkInfo.url += '&';

								linkInfo.url = self.strpos(linkInfo.url, '&t=') === false ? linkInfo.url + '&t=' + opts.campaign.s.amazon.t : linkInfo.url.replace(/([\?&])?t=[^&]+/gim,'$1t=' + opts.campaign.s.amazon.t);

								if( self.strpos(linkInfo.url, '&tag=') === false ){linkInfo.url +='&tag=' + opts.campaign.s.amazon.tag;}else if( strpos(linkInfo.url, '&tag=' + opts.campaign.s.amazon.tag) === false ){linkInfo.url = linkInfo.url.replace(/&tag=[^&]*/gim,'&tag=' + opts.campaign.s.amazon.tag);}

								if( self.strpos(linkInfo.url, '&t=') === false ){linkInfo.url += '&t=' + opts.campaign.s.amazon.t;}else if( strpos(linkInfo.url, '&t=' + opts.campaign.s.amazon.t) === false ){linkInfo.url = linkInfo.url.replace(/&t=[^&]*/gim, '&t=' + opts.campaign.s.amazon.t);}
							}else if( self.strpos(opts.campaign.s.fundedtoday.hosts, linkInfo.host) !== false )
							{
								opts.campaign.which = opts.campaign.s.fundedtoday;
								if( opts.campaign.which.domain === linkInfo.host ){uri.directory('');}
							}else if( self.strpos(linkInfo.url, 'archive.org') === false )
							{
								defaultData = opts.campaign.s.presidential.all || opts.campaign.s.others.all || opts.campaign.s.amazon.tag || 'TylerPresident.com';

								opts.campaign = opts.campaign.s.presidential;
								/*!*
								queryData.et = undefined;
								strlngth = analiticVars.length - 1;
								for (i; i <= strlngth; i++)
								{
									analiticName = analiticVars[i] || '';
									if( typeof analiticName !== 'undefined' && analiticName !== '' )
									{
										dataVal = typeof campaign[analiticName] !== 'undefined' && campaign[analiticName] !== '' ? campaign[analiticName] : defaultData;
										URI.removeQuery(queryData, analiticName)
										URI.addQuery(queryData, analiticName, dataVal);
									}
								}
								//	*/

								linkInfo.url = linkInfo.url.replace(/&?et=[^&]*/gim,'');
								linkInfo.url = self.strpos(linkInfo.url, 'ref=') === false ? linkInfo.url + 'ref=' + opts.campaign.ref : linkInfo.url.replace(/([\&])?ref=[^&]*/gim, '$1ref=' + opts.campaign.ref);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, 'utm_source=') === false ? linkInfo.url + 'utm_source=' + opts.campaign.source : linkInfo.url.replace(/utm_source=[^&]*/gim, 'utm_source=' + opts.campaign.source);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, '&source=') === false ? linkInfo.url + '&source=' + opts.campaign.source : linkInfo.url.replace(/\&source=[^&]*/gim, '&source=' + opts.campaign.source);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, 'utm_medium=') === false ? linkInfo.url + 'utm_medium=' + opts.campaign.others : linkInfo.url.replace(/utm_medium=[^&]*/gim, 'utm_medium=' + opts.campaign.others);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, 'utm_term=') === false ? linkInfo.url + 'utm_term=' + opts.campaign.others : linkInfo.url.replace(/utm_term=[^&]*/gim, 'utm_term=' + opts.campaign.others);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, 'utm_content=') === false ? linkInfo.url + 'utm_content=' + opts.campaign.others : linkInfo.url.replace(/utm_content=[^&]*/gim, 'utm_content=' + opts.campaign.others);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, 'utm_campaign=') === false ? linkInfo.url + 'utm_campaign=' + opts.campaign.others : linkInfo.url.replace(/utm_campaign=[^&]*/gim, 'utm_campaign=' + opts.campaign.others);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, 'utm_budg=') === false ? linkInfo.url + 'utm_budg=' + opts.campaign.others : linkInfo.url.replace(/utm_budg=[^&]*/gim, 'utm_budg=' + opts.campaign.others);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, 'utm_cid=') === false ? linkInfo.url + 'utm_cid=' + opts.campaign.others : linkInfo.url.replace(/utm_cid=[^&]*/gim, 'utm_cid=' + opts.campaign.others);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, 'utm_hp_ref=') === false ? linkInfo.url + 'utm_hp_ref=' + opts.campaign.others : linkInfo.url.replace(/utm_hp_ref=[^&]*/gim, 'utm_hp_ref=' + opts.campaign.others);linkInfo.url += '&';
								linkInfo.url = self.strpos(linkInfo.url, '_s=') !== false ? linkInfo.url.replace(/([\&\_]+)+?_s=[^&]*/gim, '$1_s=' + opts.campaign.others + '&') : u;
								linkInfo.url = self.strpos(linkInfo.url,'trk=') === false ? linkInfo.url + 'trk=' + opts.campaign.others : linkInfo.url.replace(/trk=[^&]*/gim, 'trk=' + opts.campaign.others);
							}
						}else if( self.strpos(linkInfo.url, opts.campaign.ref ) !== false )
						{
							/*!*
							strlngth = analiticVars.length - 1;
							for (i; i <= strlngth; i++)
							{
								if( typeof analiticVars[i] !== 'undefined' && analiticVars[i] !== '' )
								{
									queryData.analiticVars[i] = undefined;
								}
							}
							URI.removeQuery(queryData, analiticVars);
							queryRemoves = queryRemoves.concat(analiticVars);
							//	*/
							linkInfo.url = linkInfo.url.replace(/&?et=[^&]*/gim,'').replace(/&?utm_source=[^&]*/gim,'').replace(/&?source=[^&]*/gim,'').replace(/&?utm_medium=[^&]*/gim,'').replace(/&?utm_term=[^&]*/gim,'').replace(/&?utm_content=[^&]*/gim,'').replace(/&?utm_campaign=[^&]*/gim,'').replace(/&?utm_budg=[^&]*/gim,'').replace(/&?utm_cid=[^&]*/gim,'').replace(/&?utm_hp_ref=[^&]*/gim,'').replace(/&?ref=[^&]*/gim,'').replace(/&?referral=[^&]*/gim,'').replace(/&?__s=[^&]*/gim,'').replace(/&?trk=[^&]*/gim,'');
						}
						URI.removeQuery(queryData, opts.analitic.queryRemoves);

						queryData = URI.buildQuery(queryData);uri.query(queryData);

						uri.hash('').fragment('');
						/*!*
						queryData.inf_contact_key = undefined;
						URI.removeQuery(queryData, queryRemoves);

						queryData = URI.buildQuery(queryData);uri.query(queryData);//u += '?' + queryData;

						hash = hash.replace(/(\#campaigned)+?(\#decampaigned)+?/gim,'');
						uri.hash('').fragment('');
						//	*/
						if( opts.script.doSitRep === true ){
							linkInfo.hash = decampaign !== 'decampaigned' ? 'campaigned' : 'decampaigned';
								if( linkInfo.hash === 'campaigned' && self.strpos(opts.campaign.noDecampaign, linkInfo.host) === false ){
									linkInfo.hash = 'decampaigned';
								}
						}else if( self.strpos(noDecampaign, linkInfo.host) !== false ){
							linkInfo.hash = 'decampaigned';
						}
						linkInfo.hash = linkInfo.hash !== '' ? linkInfo.hash : leVoid;
						uri.fragment(linkInfo.hash);
						/*!*
						uri.hash(hash);
						hash = hash !== '' ? '#' + hash : '';u += hash;
						u = new URI(u).normalizeSearch();
						u = u.replace(/[&&]+/gm, '&').replace(/\?&/gm, '?');tmp = u.slice(-1);strlngth = u.length-1;u = u.slice(0, strlngth);u += tmp !== '&' && tmp !== '?' ? tmp : '';
						//	*/
						u = uri.normalize();
					}
					u = u.toString();return u;
					/*!*
					u = uri.normalizeHostname().normalizePort().normalizePathname().normalizeSearch().normalizeHash().toString();	
					//	*/				
				};

				app.prototype.strpos = function (haystack,needle,offset){haystack = '' + haystack;offset = offset || 0;haystack = haystack.indexOf(needle, offset);haystack = haystack === -1 ? false : haystack;return haystack;};

				app.prototype.abort = function (e)
				{
					if( e.keyCode === 27 && !opts.script.doAbort || !opts.script.doDropLoad )
					// if( e.keyCode === 27 && opts.script.doAbort !== true && opts.script.doDropLoad !== true )
					{
						opts.script.doAbort = true;
						if( typeof opts.script.nIntervId === 'number' ){clearInterval(opts.script.nIntervId);opts.script.nIntervId = false;}bean.off(H, 'keydown', self.abort);
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
							if( typeof opts.script.nIntervId === 'number' ){clearInterval(opts.script.nIntervId);opts.script.nIntervId = false;}bean.off(H, 'keydown', self.abort);
						}
						opts = {script:{debug:false,doAbort:true,doDropLoad:true,inited:true,nIntervId:false,leVoid:leVoid,svoid:svoid}};
						// opts.script.doAbort = true;opts.script.inited = true;opts.script.nIntervId = true;
						bean.off(l, 'mouseenter click hover focusin', 'a');bean.off(H, 'beforeunload', self.dropLoad);
					}
					return false;
				};

				return app;
			}();
			if( app === null ){
				app = new MTcoPF();return true;
			}else{
				H.print();
			}
		}(H.jQuery.noConflict(true), l));
	}else{
		H.print();
	}
})(window, window.document, null, void 0, '' + void 0);