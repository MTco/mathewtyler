(function(){
	if(typeof inited==='undefined'||inited!==true){
		var inited=true,H=window,l=H.document,where_am_i=top.location.href||l.href||l.location,head=l.head||l.getElementsByTagName('head')[0],_pnicer_script=l.createElement('script');
		_pnicer_script.type='text/javascript';
		_pnicer_script.crossorigin='anonymous';
		_pnicer_script.src='https://rawgit.com/MaxMillion/mathewtyler/gh-pages/js/printfriendly/printfriendly.js#1c96dc0412b9a12d3ad0482a4b76696e1759cb14'+(Math.random());
		head.appendChild(_pnicer_script);
	}
})();
