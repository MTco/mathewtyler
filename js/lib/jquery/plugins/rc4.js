function rc4(k,f,g){
	for (var b = [], c = 0, d = "", h = "", a = 0, e = d = 0, e = "", a = 0; 256 > a; a += 1) b[a] = a;
	for (a = 0; 256 > a; a += 1) c = (c + b[a] + k.charCodeAt(a % k.length)) % 256, d = b[a], b[a] = b[c], b[c] = d;
	if (void 0 !== g && null !== g && g.length && "undefined" !== g && "hex" === g) {
		for (d = 0; d < f.length; d += 2) e += String.fromCharCode(parseInt(f.substr(d, 2), 16));
		f = e
	}
	for (e = c = a = 0; e < f.length; e += 1) a = (a + 1) % 256, c = (c + b[a]) % 256, d = b[a], b[a] = b[c], b[c] = d, h += String.fromCharCode(f.charCodeAt(e) ^ b[(b[a] + b[c]) % 256]);
	return h
};
