(function(H,l,o,js,x,scripts,firstScript){
	if(H.self === H.top && typeof firstScript === 'undefined'){
		firstScript = Math.random();scripts = ['https://cdn.jsdelivr.net/jquery/3.2.1/jquery.min.js','https://cdn.jsdelivr.net/uri.js/1.18.10/URI.min.js','https://cdnjs.cloudflare.com/ajax/libs/bean/1.0.15/bean.min.js','https://mtco.github.io/mathewtyler/js/printfriendly/printfriendly.js?'+firstScript];
		firstScript = l.getElementsByTagName(o)[0] || l.getElementsByTagName('head')[0] || l.getElementsByTagName('body')[0];
		for(x in scripts){
			js=l.createElement(o);js.type='text/javascript';js.crossorigin='anonymous';js.async=true;js.src=scripts[x];js.onload=function(){};js.onerror=function(e){};
			firstScript.parentNode.insertBefore(js, firstScript);
		}
	}else{
		return;
	}
})(window, window.document, 'script');
