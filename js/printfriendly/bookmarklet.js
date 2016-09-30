(function(){
	if(typeof js==='undefined'){
		var H=window,l=H.document,firstScript=l.getElementsByTagName('script')[0],js=l.createElement('script');
		js.type='text/javascript';js.async='true';js.crossorigin='anonymous';
		js.src='https://rawgit.com/MaxMillion/mathewtyler/gh-pages/js/printfriendly/printfriendly.js#e2efbb11db8d4a67b0dbae46c7a37f5b9d48b987'+(Math.random());
		js.onload=function(){
			if(typeof inited!=='undefined'&&inited!==true&&l.readyState==='complete'){app.initialize();}else if(typeof inited!=='undefined'&&inited!==true){if(isHostMethod(l,'addEventListener')){l.addEventListener('DOMContentLoaded',app.v,false);H.addEventListener('load',app.initialize,false);}else{l.attachEvent('onreadystatechange',app.v);H.attachEvent('onload',app.initialize);}}
		};
		firstScript.parentNode.insertBefore(js,firstScript);
	}
})();
