(function(){
	if(typeof js==='undefined'){
		var H=window,l=H.document,firstScript=l.getElementsByTagName('script')[0],js,scripts=['https://cdn.jsdelivr.net/jquery/3.1.0/jquery.min.js','https://rawgit.com/MaxMillion/mathewtyler/gh-pages/js/printfriendly/printfriendly.js#28e85e5be420cc9ccee9c0cfd00d80916cd2fa8c'+(Math.random())];
		for(x in scripts){
			js=l.createElement('script');
			js.type='text/javascript';js.crossorigin='anonymous';
			js.src=scripts[x];
			js.onload=function(){};
			firstScript.parentNode.insertBefore(js,firstScript);
		}
	}
	return false;
})();
