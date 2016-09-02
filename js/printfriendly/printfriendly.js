(function(){
	var inited=false,H,l,where_am_i,head,body,style,qrImg,pfstyle,pfBkVersion,pfurl,_pnicer_script,hash,campaign,tagA,tagB,strlngth,cerebro={
		campaigner:function(u)
		{
			u=u.split('#');hash=typeof u['1']!=='undefined'?'#'+u['1']:'';u=u['0'];
			u+=cerebro.strpos(u,'?')===false?'?':'&';
			if(cerebro.strpos(u,'amazon.com')!==false){
				if(cerebro.strpos(u,'smile.amazon.')!==false){
					u=u.replace(/smile\.amazon\./gim,'www.amazon.');
				}
				u=cerebro.strpos(u,'ie=')===false?u+'ie=UTF8':u.replace(/ie=[^&]*/gim,'ie=UTF8');
				if(cerebro.strpos(u,'&tag=')===false){u+='&tag='+tagA;}else if(strpos(u,'&tag='+tagA)===false){u=u.replace(/&tag=[^&]*/gim,'&tag='+tagA);}
				if(cerebro.strpos(u,'&t=')===false){u+='&t='+tagB;}else if(strpos(u,'&t='+tagB)===false){u=u.replace(/&t=[^&]*/gim,'&t='+tagB);}
			}else if(cerebro.strpos(u,'archive.org')===false){
				u=cerebro.strpos(u,'ref=')===false?u+'ref='+campaign:u.replace(/ref=[^&]*/gim,'ref='+campaign);u+='&';
				u=cerebro.strpos(u,'source=')===false?u+'source='+campaign:u.replace(/source=[^&]*/gim,'source='+campaign);u+='&';
				u=cerebro.strpos(u,'utm_source=')===false?u+'utm_source='+campaign:u.replace(/utm_source=[^&]*/gim,'utm_source='+campaign);u+='&';
				u=cerebro.strpos(u,'utm_medium=')===false?u+'utm_medium='+campaign:u.replace(/utm_medium=[^&]*/gim,'utm_medium='+campaign);u+='&';
				u=cerebro.strpos(u,'utm_term=')===false?u+'utm_term='+campaign:u.replace(/utm_term=[^&]*/gim,'utm_term='+campaign);u+='&';
				u=cerebro.strpos(u,'utm_content=')===false?u+'utm_content='+campaign:u.replace(/utm_content=[^&]*/gim,'utm_content='+campaign);u+='&';
				u=cerebro.strpos(u,'utm_campaign=')===false?u+'utm_campaign='+campaign:u.replace(/utm_campaign=[^&]*/gim,'utm_campaign='+campaign);u+='&';
				//u=cerebro.strpos(u,'utm_cid=')===false?u+'utm_cid='+campaign:u.replace(/utm_cid=[^&]*/gim,'utm_cid='+campaign);u+='&';
				//u=cerebro.strpos(u,'utm_hp_ref=')===false?u+'utm_hp_ref='+campaign:u.replace(/utm_hp_ref=[^&]*/gim,'utm_hp_ref='+campaign);u+='&';

				u=cerebro.strpos(u,'trk=')===false?u+'trk='+campaign:u.replace(/trk=[^&]*/gim,'trk='+campaign);
			}
			u+=hash;u=u.replace(/[&&]+/gm,'&');tmp=u.slice(-1);strlngth=u.length-1;u=u.slice(0,strlngth);u+=tmp!=='&'?tmp:'';
			return u;
		},
		initialize:function()
		{
			if(inited!==true){
				inited=true;
				H=window;l=H.document;where_am_i=top.location.href||l.href||l.location;
				head=l.head||l.getElementsByTagName('head')[0];
				body=l.body||l.getElementsByTagName('body')[0];
				style=l.createElement('link');
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
				_pnicer_script.crossorigin='anonymous';
				_pnicer_script.src=pfurl+'?x='+(Math.random());
				head.appendChild(_pnicer_script);
				style.rel='stylesheet';
				style.type='text/css';
				style.crossorigin='anonymous';
				style.href='https://rawgit.com/MaxMillion/mathewtyler/gh-pages/js/printfriendly/printfriendly.css?#x'+(Math.random());
				head.appendChild(style);
				where_am_iB=cerebro.campaigner(where_am_i);
				where_am_i=encodeURIComponent(where_am_iB);
				qrImg.id='MTco-GoogleQR';
				qrImg.className='print-only print-footer pf-footer delete-off delete-no';
				qrImg.src='https://chart.googleapis.com/chart?cht=qr&chs=350x350&choe=UTF-8&chld=H&chl='+where_am_i;
				body.appendChild(qrImg); /*if(!H.jQuery){document.write('<script src="https://cdn.jsdelivr.net/jquery/3.1.0/jquery.min.js"><\/script>');}var tmp=$('#pf-core').contents().find('#algo-iframe').first().contents().find('#article_content .sub .text-node').first().text();*/
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
			if(l.addEventListener){l.removeEventListener('DOMContentLoaded',cerebro.v(),false);cerebro.initialize();}else{if(l.readyState==='complete'){l.detachEvent('onreadystatechange',cerebro.v());cerebro.initialize();}}
		}
	};
	if(l.readyState==='complete'){cerebro.initialize();}else{if(l.addEventListener){l.addEventListener('DOMContentLoaded',cerebro.v(),false);H.addEventListener('load',cerebro.initialize(),false);}else{l.attachEvent('onreadystatechange',cerebro.v());H.attachEvent('onload',cerebro.initialize());}}
})();
