(function(H,l)
{
	if(!H['priFri'] && typeof jq === 'undefined'){
		var inited=doAbort=false,jq=(function($,dom){
			var isHostMethod=function(object,methodName)
			{
				var t=typeof object[methodName];
				return ((t === 'function' || t=== 'object') && !!object[methodName]) || t === 'unknown';
			},inited=doAbort=false,eventMethod=isHostMethod(l,'addEventListener')?'addEventListener':'attachEvent',pfstyle=pfBkVersion=pfurl=_pnicer_script=firstScript=body=style=app=campaign=tagA=tagB=where_am_i=host=hash=asdf=strlngth=qrImg=tmp=e=null,httpd=httpds='http',MTcoPF=MTcoPF || function(){
				function app(){
					if(inited !== true && doAbort !== true){
						var self=this;
						self.initialize();
					}else{
						return;
					}
				};
				app.prototype.initialize=function initialize(){
					if(doAbort === true){return;}
					if(inited !== true){
						var self=this;
						inited=true;//doAbort=false;
						httpd+='://';httpds+='s://';
						host=location.host || location.hostname || location.href;
						hash=location.hash || '';
						where_am_i=top.location.href || l.href || l.location;
						body=l.body || l.getElementsByTagName('body')[0];
						firstScript=l.getElementsByTagName('script')[0] || l.getElementsByTagName('head')[0] || body;
						style=l.createElement('link');
						asdf=l.createElement('div');
						qrImg=l.createElement('img');
						pfstyle='nbk';
						pfBkVersion='1';
						/*pfurl='https://pf-cdn.printfriendly.com/ssl/main.js';*/
						campaign='MathewTyler.co';
						tagA='hoped-20';
						tagB='0111011101110101011101000110010101110110-20';
						_pnicer_script=l.createElement('script');
						_pnicer_script.type='text/javascript';
						_pnicer_script.crossorigin='anonymous';
						_pnicer_script.src='https://d3nekkt1lmmhms.cloudfront.net/printfriendly.js?x='+(Math.random());
						//tmp=l.location.protocol;
						//try{l.location.protocol='https';}catch(e){}
						firstScript.parentNode.insertBefore(_pnicer_script,firstScript);
						style.rel='stylesheet';
						style.type='text/css';
						style.crossorigin='anonymous';
						style.href='https://mtco.github.io/mathewtyler/js/printfriendly/printfriendly.css?#7087d7854746236fa21014956e4d35a4a49d1fbc'+(Math.random());
						firstScript.parentNode.insertBefore(style,firstScript);
						where_am_iB=app.campaigner(where_am_i);
						where_am_i=encodeURIComponent(where_am_iB);
						asdf.id='MTco-GoogleQR';
						qrImg.className='print-only print-footer pf-footer delete-off delete-no';
						qrImg.src='https://chart.googleapis.com/chart?cht=qr&chs=350x350&choe=UTF-8&chld=H&chl='+where_am_i;
						asdf.innerHTML='<img class="'+qrImg.className+'" src="'+qrImg.src+'"/>';
						body.appendChild(asdf);
						/*if(!H.jQuery){document.write('<script src="https://cdn.jsdelivr.net/jquery/3.1.0/jquery.min.js"><\/script>');}var tmp=$('#pf-core').contents().find('#algo-iframe').first().contents().find('#article_content .sub .text-node').first().text();*/
						setTimeout((function(){
							H.print();
							//l.location.protocol=tmp;
						}),3500);
					}else{
						H.print();
					}
					return false;
				};
				app.prototype.campaigner=function campaigner(u)
				{
					if(doAbort === true){return;}
					var self=this;
					if(self.strpos(u,'about:reader?url=') !==false ){u=u.split('about:reader?url=');u=decodeURIComponent(u['1']);}
					if(self.strpos(u,httpd) === false && self.strpos(u,httpds) === false){u=httpd+'www.'+u;}
					if(self.strpos(u,'#.') === false){u=u.split('#');hash=typeof u['1']!=='undefined'?'#'+u['1']:'';u=u['0'];}else if(self.strpos(u,'#.') !== false){u=u.split('#');u=u['0'];}
					if(self.strpos(u,'.craigslist.org/') === false){u+=self.strpos(u,'?')===false?'?':'&';}else{u+='#';hash='';}
					if(self.strpos(hash,'ref') !== false || self.strpos(hash,'utm_') !== false){
						u+=hash;hash='';
					}
					if(self.strpos(u,'amazon.com') !== false){
						if(self.strpos(u,'smile.amazon.') !== false){u=u.replace(/smile\.amazon\./gim,'www.amazon.');}
						u=self.strpos(u,'ie=') === false?u+'ie=UTF8':u.replace(/ie=[^&]*/gim,'ie=UTF8');
						u=self.strpos(tmp,'&tag=') === false && self.strpos(tmp,'tag=') === false?u+'&tag='+tagA:u.replace(/&?tag=[^&]+/gim,'&tag='+tagA);u+='&';
						u=self.strpos(u,'&t=') === false?u+'&t='+tagB:u.replace(/&t=[^&]+/gim,'&t='+tagB);
						//if(self.strpos(u,'&tag=') === false){u+='&tag='+tagA;}else if(strpos(u,'&tag='+tagA) === false){u=u.replace(/&tag=[^&]*/gim,'&tag='+tagA);}
						//if(self.strpos(u,'&t=') === false){u+='&t='+tagB;}else if(strpos(u,'&t='+tagB) === false){u=u.replace(/&t=[^&]*/gim,'&t='+tagB);}
					}else if(self.strpos(u,'archive.org') === false){
						u=u.replace(/&?et=[^&]*/gim,'');
						u=self.strpos(u,'__s=') === false?u:u.replace(/__s=[^&]*/gim,'__s='+campaign)+'&';
						u=self.strpos(u,'ref=') === false?u+'ref='+campaign:u.replace(/ref=[^&]*/gim,'ref='+campaign);u+='&';
						u=self.strpos(u,'source=') === false?u+'source='+campaign:u.replace(/source=[^&]*/gim,'source='+campaign);u+='&';
						u=self.strpos(u,'utm_source=') === false?u+'utm_source='+campaign:u.replace(/utm_source=[^&]*/gim,'utm_source='+campaign);u+='&';
						u=self.strpos(u,'utm_medium=') === false?u+'utm_medium='+campaign:u.replace(/utm_medium=[^&]*/gim,'utm_medium='+campaign);u+='&';
						u=self.strpos(u,'utm_term=') === false?u+'utm_term='+campaign:u.replace(/utm_term=[^&]*/gim,'utm_term='+campaign);u+='&';
						u=self.strpos(u,'utm_content=') === false?u+'utm_content='+campaign:u.replace(/utm_content=[^&]*/gim,'utm_content='+campaign);u+='&';
						//u=self.strpos(u,'utm_campaign=')===false?u+'utm_campaign='+campaign:u.replace(/utm_campaign=[^&]*/gim,'utm_campaign='+campaign);u+='&';
						//u=self.strpos(u,'utm_cid=')===false?u+'utm_cid='+campaign:u.replace(/utm_cid=[^&]*/gim,'utm_cid='+campaign);u+='&';
						//u=self.strpos(u,'utm_hp_ref=')===false?u+'utm_hp_ref='+campaign:u.replace(/utm_hp_ref=[^&]*/gim,'utm_hp_ref='+campaign);u+='&';

						u=self.strpos(u,'trk=') === false?u+'trk='+campaign:u.replace(/trk=[^&]*/gim,'trk='+campaign);
					}
					u+=hash;u=u.replace(/[&&]+/gm,'&').replace(/\?&/gm,'?');tmp=u.slice(-1);strlngth=u.length-1;u=u.slice(0,strlngth);u+=tmp!=='&'&&tmp!=='?'?tmp:'';
					return u;
				};
				app.prototype.strpos=function strpos(haystack,needle,offset){var i=(haystack+'').indexOf(needle,(offset || 0));return i === -1?false:i;};

				return app;
			}();
		}(H.jQuery.noConflict(true),l));
		H.addEventListener('keydown',function(e){
			if(e.keyCode === 27){doAbort=inited=true;/*window.stopPropagation();*/return;}
		});
		if(inited !== true && doAbort !== true){
			app=new MTcoPF();return true;
		}else{
			H.print();
		}
	}else{
		H.print();
	}
})(window,document);
//
