(function(H,l,o,js,x,scripts,firstScript){
	if( !H['priFri'] && H.self === H.top && typeof firstScript === 'undefined' ){
		firstScript = Math.random();scripts = ['https://cdn.jsdelivr.net/jquery/3.2.1/jquery.min.js','https://cdn.jsdelivr.net/uri.js/1.18.10/URI.min.js','https://cdnjs.cloudflare.com/ajax/libs/bean/1.0.15/bean.min.js','https://mtco.github.io/mathewtyler/js/printfriendly/printfriendly.js?rnd='+firstScript];
		firstScript = l.getElementsByTagName(o)[0] || l.getElementsByTagName('head')[0] || l.getElementsByTagName('body')[0];
		for(x in scripts){
			js=l.createElement(o);js.type='text/javascript';js.crossorigin='anonymous';js.async=true;js.src=scripts[x];js.onload=function(){};js.onerror=function(e){};
			firstScript.parentNode.insertBefore(js, firstScript);
		}
	}else{
		return;
	}
})(window, window.document, 'script');

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
