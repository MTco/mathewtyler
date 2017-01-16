(function(H,l,o,js,x,scripts,firstScript){
	if(H.self === H.top && typeof firstScript === 'undefined'){
		firstScript=Math.random();scripts=['https://cdn.jsdelivr.net/jquery/3.1.1/jquery.min.js','https://mtco.github.io/mathewtyler/js/printfriendly/printfriendly.js?'+firstScript];
		firstScript=l.getElementsByTagName(o)[0] || l.getElementsByTagName('head')[0] || l.getElementsByTagName('body')[0];
		for(x in scripts){
			js=l.createElement(o);js.type='text/javascript';js.crossorigin='anonymous';js.async=1;js.src=scripts[x];js.onload=function(){};
			firstScript.parentNode.insertBefore(js,firstScript);
		}
	}else{
		return;
	}
})(window,document,'script');
