(function(){
	if(!window['priFri']&&typeof inited==='undefined'){
		var isHostMethod=function(object,methodName)
		{
			var t=typeof object[methodName];
			return ((t==='function'||t==='object')&&!!object[methodName])||t==='unknown';
		};
		var inited=false,H=window,l=H.document,where_am_i,head,body,style,qrImg,pfstyle,pfBkVersion,pfurl,_pnicer_script,hash='',campaign,tagA,tagB,strlngth,httpd='http://',httpds='https://',asdf,app={
			campaigner:function(u)
			{
				if(app.strpos(u,'about:reader?url=')!==false){u=u.split('about:reader?url=');u=decodeURIComponent(u['1']);}
				if(app.strpos(u,httpd)===false&&app.strpos(u,httpds)===false){u=httpd+'www.'+u;}
				if(app.strpos(u,'#.')!==false){u=u.split('#');u=u['0'];}else if(app.strpos(u,'#')!==false){u=u.split('#');hash=typeof u['1']!=='undefined'?'#'+u['1']:'';u=u['0'];}
				if(app.strpos(u,'.craigslist.org/')===false){u+=app.strpos(u,'?')===false?'?':'&';}else{u+='#';hash='';}
				if(app.strpos(u,'amazon.com')!==false){
					if(app.strpos(u,'smile.amazon.')!==false){u=u.replace(/smile\.amazon\./gim,'www.amazon.');}
					u=app.strpos(u,'ie=')===false?u+'ie=UTF8':u.replace(/ie=[^&]*/gim,'ie=UTF8');
					u=app.strpos(tmp,'&tag=')===false&&app.strpos(tmp,'tag=')===false?u+'&tag='+tagA:u.replace(/&?tag=[^&]+/gim,'&tag='+tagA);u+='&';
					u=app.strpos(u,'&t=')===false?u+'&t='+tagB:u.replace(/&t=[^&]+/gim,'&t='+tagB);
					//if(app.strpos(u,'&tag=')===false){u+='&tag='+tagA;}else if(strpos(u,'&tag='+tagA)===false){u=u.replace(/&tag=[^&]*/gim,'&tag='+tagA);}
					//if(app.strpos(u,'&t=')===false){u+='&t='+tagB;}else if(strpos(u,'&t='+tagB)===false){u=u.replace(/&t=[^&]*/gim,'&t='+tagB);}
				}else if(app.strpos(u,'archive.org')===false){
					if(app.strpos(u,'jamesclear.com/')!==false&&app.strpos(u,campaign)===false)
					{
						u=app.strpos(u,'__s=')===false?u+'__s='+campaign:u.replace(/__s=[^&]*/gim,'__s='+campaign);u+='&';
					}
					u=app.strpos(u,'ref=')===false?u+'ref='+campaign:u.replace(/ref=[^&]*/gim,'ref='+campaign);u+='&';
					u=app.strpos(u,'source=')===false?u+'source='+campaign:u.replace(/source=[^&]*/gim,'source='+campaign);u+='&';
					u=app.strpos(u,'utm_source=')===false?u+'utm_source='+campaign:u.replace(/utm_source=[^&]*/gim,'utm_source='+campaign);u+='&';
					u=app.strpos(u,'utm_medium=')===false?u+'utm_medium='+campaign:u.replace(/utm_medium=[^&]*/gim,'utm_medium='+campaign);u+='&';
					u=app.strpos(u,'utm_term=')===false?u+'utm_term='+campaign:u.replace(/utm_term=[^&]*/gim,'utm_term='+campaign);u+='&';
					u=app.strpos(u,'utm_content=')===false?u+'utm_content='+campaign:u.replace(/utm_content=[^&]*/gim,'utm_content='+campaign);u+='&';
					//u=app.strpos(u,'utm_campaign=')===false?u+'utm_campaign='+campaign:u.replace(/utm_campaign=[^&]*/gim,'utm_campaign='+campaign);u+='&';
					//u=app.strpos(u,'utm_cid=')===false?u+'utm_cid='+campaign:u.replace(/utm_cid=[^&]*/gim,'utm_cid='+campaign);u+='&';
					//u=app.strpos(u,'utm_hp_ref=')===false?u+'utm_hp_ref='+campaign:u.replace(/utm_hp_ref=[^&]*/gim,'utm_hp_ref='+campaign);u+='&';

					u=app.strpos(u,'trk=')===false?u+'trk='+campaign:u.replace(/trk=[^&]*/gim,'trk='+campaign);
				}
				u+=hash;u=u.replace(/[&&]+/gm,'&');tmp=u.slice(-1);strlngth=u.length-1;u=u.slice(0,strlngth);u+=tmp!=='&'?tmp:'';
				return u;
			},
			initialize:function()
			{
				if(inited!==true){
					inited=true;
					where_am_i=top.location.href||l.href||l.location;
					head=l.head||l.getElementsByTagName('head')[0];
					body=l.body||l.getElementsByTagName('body')[0];
					style=l.createElement('link');
					asdf=l.createElement('div');
					qrImg=l.createElement('img');
					pfstyle='nbk';
					pfBkVersion='1';
					/*pfurl='https://pf-cdn.printfriendly.com/ssl/main.js';*/
					pfurl='https://d3nekkt1lmmhms.cloudfront.net/printfriendly.js';
					campaign='MathewTyler.co';
					tagA='hoped-20';
					tagB='0111011101110101011101000110010101110110-20';
					_pnicer_script=l.createElement('script');
					_pnicer_script.type='text/javascript';
					_pnicer_script.async='true';
					_pnicer_script.crossorigin='anonymous';
					_pnicer_script.src=pfurl+'?x='+(Math.random());
					head.appendChild(_pnicer_script);
					style.rel='stylesheet';
					style.type='text/css';
					style.crossorigin='anonymous';
					style.href='https://rawgit.com/MaxMillion/mathewtyler/gh-pages/js/printfriendly/printfriendly.css?#xe2efbb11db8d4a67b0dbae46c7a37f5b9d48b987'+(Math.random());
					head.appendChild(style);
					where_am_iB=app.campaigner(where_am_i);
					where_am_i=encodeURIComponent(where_am_iB);
					asdf.id='MTco-GoogleQR';
					body.appendChild(asdf);
					qrImg.className='print-only print-footer pf-footer delete-off delete-no';
					qrImg.src='https://chart.googleapis.com/chart?cht=qr&chs=350x350&choe=UTF-8&chld=H&chl='+where_am_i;
					asdf.innerHTML=qrImg; /*if(!H.jQuery){document.write('<script src="https://cdn.jsdelivr.net/jquery/3.1.0/jquery.min.js"><\/script>');}var tmp=$('#pf-core').contents().find('#algo-iframe').first().contents().find('#article_content .sub .text-node').first().text();*/
					setTimeout((function(){
						window.print();
					}),3500);
				}else{
					window.print();
				}
				return false;
			},
			strpos:function(haystack,needle,offset)
			{
				var i=(haystack+'').indexOf(needle,(offset||0));return i===-1?false:i;
			},
			v:function()
			{
				if(inited!==true){if(isHostMethod(l,'addEventListener')){l.removeEventListener('DOMContentLoaded',app.v,false);H.removeEventListener('load',app.initialize,false);app.initialize();}else{if(l.readyState==='complete'){l.detachEvent('onreadystatechange',app.v);H.detachEvent('onload',app.initialize);app.initialize();}}}
			}
		};
		if(inited!==true&&l.readyState==='complete'){app.initialize();}else if(inited!==true){if(isHostMethod(l,'addEventListener')){l.addEventListener('DOMContentLoaded',app.v,false);H.addEventListener('load',app.initialize,false);}else{l.attachEvent('onreadystatechange',app.v);H.attachEvent('onload',app.initialize);}}
	}else{
		window.print();
	}
})();
