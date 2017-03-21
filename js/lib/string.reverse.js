String.prototype.reverse=function(){for(var i=this.length-1,o='';i>=0;o+=this[i--]){}return o;}
	//return this.split('').reverse().join('');


String.prototype.reverse=function(){for(var i=this.length-1,o='';i>=0;o+=this[i--]){}return o;}
var asdf='http://j.mp/1neVmgg';asdf=asdf.split('mp/');
asdf='_via: ☹ http://dlike.co/'+asdf['1'].reverse()+' ._';
alert(asdf+'');
///**/

function escapeHtml(text){
	var map={
			'&':'&amp;',
			'<':'&lt;',
			'>':'&gt;',
			'"':'&quot;',
			"'":'&#039;'
		};
	return text.replace(/[&<>"']/g,function(m){return map[m];});
}

String.prototype.toUnicode=function(){
	var result='';
	for(var i=0;i<this.length;i++){
		var partial=this[i].charCodeAt(0).toString(16);
		while(partial.length!==4) partial="0"+partial;
		result+="\\u"+partial;
	}
	return result;
};
