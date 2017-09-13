(function(H, l)
{
	if( !H['priFri'] && typeof MTcoPF === 'undefined' )
	{
		var jq = (function($, dom)
		{
			var isHostMethod = function(object, methodName)
				{
					var t = typeof object[methodName];t = ((t === 'function' || t === 'object') && !!object[methodName]) || t === 'unknown';
					return t;
				}, inited = null, doAbort = null, doSitRep = null, eventMethod = null, pfstyle = null, pfBkVersion = null, pfurl = null, _pnicer_script = null, firstScript = null, body = null, style = null, host = null, hash = null, asdf = null, strlngth = null, nIntervId = null, qrImg = null, tmp = null, e = null, queryRemoves = null, analiticVars = null, uri = null, self = null, noDecampaign = null, campaign = null, campaigns = {}, httpd = httpds = 'http', where_am_i = '', app = null, MTcoPF = MTcoPF || function(){
				function app()
				{
					if( inited !== true && doAbort !== true ){
						self = this;
						self.initialize();
					}else{
						return;
					}
				};
				app.prototype.initialize = function initialize()
				{
					if( doAbort === true ){self.dropLoad();/*throw('');return;*/}
					if(inited !== true)
					{
						inited=true;doAbort=false;
						httpd+='://';httpds+='s://';

						where_am_i += top.location.href || l.href || l.location;where_am_i = where_am_i.toString();

						/*
						uri = new URI(where_am_i);
						host = uri.domain() || uri.hostname() || uri.host() || '';
						hash = uri.hash() || uri.fragment() || '';
						query = uri.search() || '';
						*/

						//eventMethod = isHostMethod(l,'addEventListener') ? 'addEventListener':'attachEvent';

						analiticVars = ['ref', 'source', 'origin', 'utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'utm_budg', 'utm_cid', 'utm_hp_ref', 'trk'];

						queryRemoves = ['et', 'inf_contact_key'];

						campaign = 'MathewTyler.co';
						campaigns.presidential = {
													hosts : 'all'
													,all : campaign
													,ref : campaign
												};

						campaigns.amazon = {
													hosts : 'amazon'
													,tag : 'hoped-20'
													,sotmprce : campaign
													,t : '0111011101110101011101000110010101110110-20'
													,others : campaign
												};
						campaigns.others = {
												hosts : 'all'
												,all : campaign
												,ref : campaign
											};
						campaign = {
										hosts : 'all'
										,ref : campaign
										,source : campaign
										,others : campaign
									};

						body = l.body || l.getElementsByTagName('body')[0];
						firstScript = l.getElementsByTagName('script')[0] || l.getElementsByTagName('head')[0] || body;
						style = l.createElement('link');
						asdf = l.createElement('div');
						qrImg = l.createElement('img');
						pfstyle = 'nbk';
						pfBkVersion = '1';
						/*pfurl = 'https://pf-cdn.printfriendly.com/ssl/main.js';*/
						_pnicer_script = l.createElement('script');
						_pnicer_script.type = 'text/javascript';
						_pnicer_script.crossorigin = 'anonymous';
						_pnicer_script.src = 'https://d3nekkt1lmmhms.cloudfront.net/printfriendly.js?x='+(Math.random());
						//tmp = l.location.protocol;
						//try{l.location.protocol = 'https';}catch(e){}
						firstScript.parentNode.insertBefore(_pnicer_script,firstScript);
						style.rel = 'stylesheet';
						style.type = 'text/css';
						style.crossorigin = 'anonymous';
						style.href = 'https://mtco.github.io/mathewtyler/js/printfriendly/printfriendly.css?#7087d7854746236fa21014956e4d35a4a49d1fbc'+(Math.random());
						firstScript.parentNode.insertBefore(style, firstScript);
						console.debug(where_am_i);
						if( self.strpos(location.host, 'blinkist.com') === false && self.strpos(location.hostname, 'blinkist.com') === false )
						{
							where_am_iB = self.campaigner(where_am_i, false);
							where_am_i = encodeURIComponent(where_am_iB);
							asdf.id = 'MTco-GoogleQR';
							qrImg.className = 'print-only print-footer pf-footer delete-off delete-no';
							qrImg.src = 'https://chart.googleapis.com/chart?cht=qr&chs=350x350&choe=UTF-8&chld=H&chl=' + where_am_i;
							asdf.innerHTML = '<img class="' + qrImg.className + '" src="' + qrImg.src + '"/>';
							body.appendChild(asdf);
						}
						/*if(!H.jQuery){document.write('<script src="https://cdn.jsdelivr.net/jquery/3.1.0/jquery.min.js"><\/script>');}var tmp=$('#pf-core').contents().find('#algo-iframe').first().contents().find('#article_content .sub .text-node').first().text();*/
						nIntervId = setTimeout((function(){
							clearInterval(nIntervId);H.print();
							//l.location.protocol=tmp;
						}),3500);
					}else{
						H.print();
					}
					return false;
				};

				app.prototype.campaigner = function campaigner(u, decampaign)
				{
					if( doAbort === true ){self.dropLoad();/*throw('');return;*/}
					/*var self = this;*/
					if( u !== '' && self.strpos(u, 'decampaigned') === false ){
						var uri = new URI(u), i = 0, queryData = uri.query(true) || {}, host = uri.domain() || uri.hostname() || uri.host() || '', hash = uri.hash() || '', defaultData = campaign.all || campaign.others || campaign.ref || '', dataVal = prop = analiticName = null;
						//u=decodeURIComponent(u);
						if( self.strpos(hash, '#.') !== false || self.strpos(hash,'#campaigned') !== false || self.strpos(hash, '#forceFresh') !== false ){
							hash = undefined;
						}else if( self.strpos(hash, '#') !== false ){
							hash = typeof uri.fragment() !== 'undefined' ? uri.fragment() : undefined;
						}
						//if( self.strpos(u, '__s') !== false ){
						if( uri.hasQuery('__s') === true ){
							analiticVars.push('__s');
						}
						/*
						if( self.strpos(host, 'craigslist.') === false ){
							u += self.strpos(u, '?') === false ? '?' : '&';
						}else{
							u += '#';hash = undefined;
						}
						if( self.strpos(uri.fragment(), 'ref') !== false || self.strpos(uri.fragment(), 'utm_') !== false ){
							u += uri.fragment();hash = undefined;
						}
						*/
						if( decampaign !== 'decampaigned' && self.strpos(u, 'amazon.') !==false )
						{
							if( strpos(u, 'smile.') !== false ){u = u.replace(/smile\.amazon\./gim, 'www.amazon.');}

							/*
							for (prop in campaigns.amazon)
							{
								if( prop !== 'hosts' && prop !== 'others' )
								{
									URI.removeQuery(queryData, prop);
									URI.addQuery(queryData, prop, campaigns.amazon.prop);
								}
							}
							queryData.ie = 'UTF8';
							queryData.tag = campaigns.amazon.tag;
							queryData.sotmprce = campaigns.amazon.sotmprce;
							queryData.source = campaigns.amazon.others;
							queryData.t = campaigns.amazon.t;
							*/
							u = self.strpos(u,'ie=') === false ? u + 'ie=UTF8' : u.replace(/([\?&])?ie=[^&]*/gim,'$1ie=UTF8');

							u = self.strpos(u, '&tag=') === false && self.strpos(u, 'tag=') === false ? u + '&tag=' + campaigns.amazon.tag : u.replace(/([\?&])?tag=[^&]+/gim, '$1tag=' + campaigns.amazon.tag);u += '&';

							u = self.strpos(u, '&sotmprce=') === false ? u + '&sotmprce=' + campaigns.amazon.sotmprce : u.replace(/([\?&])?sotmprce=[^&]+/gim,'$1sotmprce=' + campaigns.amazon.sotmprce);u += '&';

							u = self.strpos(u, '&source=') === false ? u + '&source=' + campaigns.amazon.others : u.replace(/([\?&])?source=[^&]*/gim, '$1source=' + campaigns.amazon.others);u += '&';

							u = self.strpos(u, '&t=') === false ? u + '&t=' + campaigns.amazon.t : u.replace(/([\?&])?t=[^&]+/gim,'$1t=' + campaigns.amazon.t);

							if( self.strpos(u,'&tag=') === false ){u +='&tag=' + tagA;}else if( strpos(u, '&tag=' + tagA) === false ){u = u.replace(/&tag=[^&]*/gim,'&tag=' + tagA);}

							if( self.strpos(u, '&t=') === false ){u += '&t=' + tagB;}else if( strpos(u, '&t=' + tagB) === false ){u=u.replace(/&t=[^&]*/gim, '&t=' + tagB);}
						}else if( decampaign !== 'decampaigned' && self.strpos(u,'archive.org') === false )
						{
							defaultData = campaign.all || campaign.others || campaign.ref || '';
							/*
							//queryData.et = undefined;
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
							*/

							u = u.replace(/&?et=[^&]*/gim,'');
							u = self.strpos(u, 'ref=') === false ? u + 'ref=' + campaign.ref : u.replace(/([\&])?ref=[^&]*/gim, '$1ref=' + campaign.ref);u += '&';
							u = self.strpos(u, 'utm_source=') === false ? u + 'utm_source=' + campaign.source : u.replace(/utm_source=[^&]*/gim, 'utm_source=' + campaign.source);u += '&';
							u = self.strpos(u, '&source=') === false ? u + '&source=' + campaign.source : u.replace(/\&source=[^&]*/gim, '&source=' + campaign.source);u += '&';
							u = self.strpos(u, 'utm_medium=') === false ? u + 'utm_medium=' + campaign.others : u.replace(/utm_medium=[^&]*/gim, 'utm_medium=' + campaign.others);u += '&';
							u = self.strpos(u, 'utm_term=') === false ? u + 'utm_term=' + campaign.others : u.replace(/utm_term=[^&]*/gim, 'utm_term=' + campaign.others);u += '&';
							u = self.strpos(u, 'utm_content=') === false ? u + 'utm_content=' + campaign.others : u.replace(/utm_content=[^&]*/gim, 'utm_content=' + campaign.others);u += '&';
							u = self.strpos(u, 'utm_campaign=') === false ? u + 'utm_campaign=' + campaign.others : u.replace(/utm_campaign=[^&]*/gim, 'utm_campaign=' + campaign.others);u += '&';
							u = self.strpos(u, 'utm_budg=') === false ? u + 'utm_budg=' + campaign.others : u.replace(/utm_budg=[^&]*/gim, 'utm_budg=' + campaign.others);u += '&';
							u = self.strpos(u, 'utm_cid=') === false ? u + 'utm_cid=' + campaign.others : u.replace(/utm_cid=[^&]*/gim, 'utm_cid=' + campaign.others);u += '&';
							u = self.strpos(u, 'utm_hp_ref=') === false ? u + 'utm_hp_ref=' + campaign.others : u.replace(/utm_hp_ref=[^&]*/gim, 'utm_hp_ref=' + campaign.others);u += '&';
							u = self.strpos(u, '_s=') !== false ? u.replace(/([\&\_]+)+?_s=[^&]*/gim, '$1_s=' + campaign.others + '&') : u;
							u = self.strpos(u,'trk=') === false ? u + 'trk=' + campaign.others : u.replace(/trk=[^&]*/gim, 'trk=' + campaign.others);
						}else if( decampaign === 'decampaigned' && self.strpos(u,campaign.ref ) !== false )
						{
							/*
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
							*/
							u = u.replace(/&?et=[^&]*/gim,'').replace(/&?utm_source=[^&]*/gim,'').replace(/&?source=[^&]*/gim,'').replace(/&?utm_medium=[^&]*/gim,'').replace(/&?utm_term=[^&]*/gim,'').replace(/&?utm_content=[^&]*/gim,'').replace(/&?utm_campaign=[^&]*/gim,'').replace(/&?utm_budg=[^&]*/gim,'').replace(/&?utm_cid=[^&]*/gim,'').replace(/&?utm_hp_ref=[^&]*/gim,'').replace(/&?ref=[^&]*/gim,'').replace(/&?referral=[^&]*/gim,'').replace(/&?__s=[^&]*/gim,'').replace(/&?trk=[^&]*/gim,'');
						}
						u = u.replace(/inf_contact_key=[^&]*/gim, '');
						//queryData.inf_contact_key = undefined;
						//URI.removeQuery(queryData, queryRemoves);

						//queryData = URI.buildQuery(queryData);uri.query(queryData);//u += '?' + queryData;

						//hash = hash.replace(/(\#campaigned)+?(\#decampaigned)+?/gim,'');
						//uri.hash('').fragment('');
						if( doSitRep === true ){hash = decampaign !== 'decampaigned' && self.strpos(noDecampaign, host) === false ? 'campaigned' : 'decampaigned';
						}else if( self.strpos(noDecampaign, host) !== false ){
							hash = 'decampaigned';
						}
						hash = hash !== '' ? hash : undefined;//uri.hash(hash);
						//hash = hash !== '' ? '#' + hash : '';u += hash;
						//u = new URI(u).normalizeSearch();
						//u = u.replace(/[&&]+/gm, '&').replace(/\?&/gm, '?');tmp = u.slice(-1);strlngth = u.length-1;u = u.slice(0, strlngth);u += tmp !== '&' && tmp !== '?' ? tmp : '';
					}
					u = u.toString();
					//u = uri.normalizeHostname().normalizePort().normalizePathname().normalizeSearch().normalizeHash().toString();
					return u;
				};

				app.prototype.strpos = function strpos(haystack,needle,offset){var i = (haystack + '').indexOf(needle,(offset || 0));i = i === -1 ? false : i;return i;};

				app.prototype.abort = function abort(e)
				{
					if( e.keyCode === 27 && doAbort !== true )
					{
						doAbort = true;
						if( typeof nIntervId === 'number' ){clearInterval(nIntervId);nIntervId = null;}
						bean.off(H, 'keydown', self.abort);
						self.dropLoad();
						return true;
						//nIntervId = clearInterval(nIntervId);/*var self = this;*///bean.off(H, 'keydown', self.abort);doAbort = inited = true;/*H.stopPropagation();H.removeEventListener('keydown',function(){},false);*/
						//throw('');return;
					}
					return;
				};
				app.prototype.dropLoad = function dropLoad(e)
				{
					if( doAbort !== true )
					{
						if( typeof nIntervId === 'number' ){clearInterval(nIntervId);nIntervId = null;}bean.off(H, 'keydown', self.abort);
					}
					doAbort = inited = nIntervId = true;
					bean.off(l, 'mouseenter click hover focusin', 'a');
					bean.off(H, 'beforeunload', self.dropLoad);
					throw('');return;
				};

				return app;
			}();
			if( app === null && inited !== true && doAbort !== true )
			{
				app = new MTcoPF();return true;
			}else{
				H.print();
			}
		}(H.jQuery.noConflict(true), l));
	}else{
		H.print();
	}
})(window, window.document);