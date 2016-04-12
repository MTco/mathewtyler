<?php
//http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever
setcookie('foo',$_GET['foo']);
header('Content-Type: image/gif');
echo base64_decode('R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
?>
