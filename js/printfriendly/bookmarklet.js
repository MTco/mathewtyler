;(function(H,l,o,leVoid,svoid,js,x,scripts,firstScript){
	H = typeof H === 'object' ? H : window;try{H.opener=null;}catch(err){}
	if( H.self === H.top || H.parent === H.self && typeof firstScript === svoid && !H['priFri'] ){
		firstScript = Math.random();scripts = ['https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js','https://cdn.jsdelivr.net/gh/medialize/URI.js@1.19.0/src/URI.min.js','https://cdn.rawgit.com/MTco/mathewtyler/gh-pages/js/lib/bean/1.0.15/bean.min.js','https://mtco.github.io/mathewtyler/js/printfriendly/printfriendly.js?rnd='+firstScript];
		firstScript = l.getElementsByTagName(o)[0] || l.getElementsByTagName('head')[0] || l.getElementsByTagName('body')[0];
		for(x in scripts){
			js=l.createElement(o);js.type='text/javascript';js.crossorigin='anonymous';js.async=true;js.src=scripts[x];js.onload=function(){};js.onerror=function(e){};
			firstScript.parentNode.insertBefore(js, firstScript);
		}
	}else{
		return !1;
	}
})(window, window.document, 'script', void 0, '' + void 0);

/*
 * js.error = function(e)
	{
		(new Image()).src = '//v.shopify.com/internal_errors/track?error=trekkie_load';
	}
 *
(function (i, s, o, g, r, a, m)
{
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function ()
	{
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o)
		, m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
//*/
