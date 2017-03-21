var generateLogo=function(){
	var qr_w=document.getElementById('qr_w').value,qr_h=document.getElementById('qr_h').value,text=document.getElementById('text').value,canvas=document.getElementsByTagName('canvas')['0'],ctx=canvas.getContext('2d'),logo_width=document.getElementById('logo_w').value,logo_height=document.getElementById('logo_h').value,logo_x_offset=logo_width*2,logo_y_offset=logo_height*2,img,data,err,canvasImg=document.getElementById('canvasImg'),logo=document.getElementById('logo').value,e;

	$('#qrcode').qrcode({ width: qr_w, height: qr_h, text: text });

	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillRect(logo_x_offset,logo_y_offset,logo_width,logo_height);

	img=new Image();
	img.addEventListener('load',function(){
		ctx.drawImage(this,logo_x_offset,logo_y_offset,logo_width,logo_height);
		canvas.style.display='none';
		try{
			data=canvas.toDataURL('image/png');
		}
		catch(err){
			alert('The image '+logo+' cannot be loaded because it is from another site.\n\nTo fix this you can:\n\n1. Use chrome with the \'--disable-web-security\' argument\n\nOR\n\n2. Load the image with a URL that starts with:\n\n\t'+window.location.origin);
		}
		canvasImg.src=data;
		canvasImg.style.display='block';
	},false);

	img.src=logo;
};
$(document).ready(function(){
	generateLogo();
});
