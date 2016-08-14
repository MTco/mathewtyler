function printTitle(){

<!-- Top Graphic  -->
document.write('<tr align="left" valign="top">');
document.write('    <td width="625" height="60" colspan="2">');
document.write('	<img src="../images/top.gif" width=625 height=60 alt="" border="0" USEMAP="#top">');
document.write('	</td>');
document.write('</tr>');
document.write('<!-- Menu Graphic  -->');
document.write('<tr>');
document.write('    <td width="625" height="20" colspan="2">');
document.write('	<img src="../images/menu.gif" width=625 height=20 alt="" border="0" USEMAP="#menu">');
document.write('	</td>');
document.write('</tr>');
document.write('<!-- Page Title Graphic  -->');
document.write('<tr align="left">');
document.write('    <td width="425" height="100" colspan="1">');
document.write('	<img src="images/title.gif" width=425 height=100 alt="" border="0">');
document.write('	</td>');
document.write('	<td align="left" colspan="1">');
document.write('	<script Language="JavaScript">');
document.write('		printMenu();');
document.write('	</script>');
document.write('	</td>');
document.write('</tr>');
document.write('<MAP NAME="top">');
document.write('<AREA SHAPE="rect" COORDS="445,36,489,53" HREF="../events/index.html" onMouseOver="window.status=\'News\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="490,36,523,53" HREF="../faq/index.html" onMouseOver="window.status=\'Frequently Asked Questions\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="524,36,567,53" HREF="../links/index.html" onMouseOver="window.status=\'Links\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="568,37,615,53" HREF="../index2.html" onMouseOver="window.status=\'Home\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="4,2,42,57" HREF="../index2.html" onMouseOver="window.status=\'Home\';return true" onMouseOut="window.status=\' \';return true">');
document.write('</MAP> ');
document.write('<MAP NAME="menu">');
document.write('<AREA SHAPE="rect" COORDS="0,0,85,20" href="../council/index.html" onMouseOver="window.status=\'City Council\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="85,0,178,20" href="../departments/index.html" onMouseOver="window.status=\'Departments\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="178,0,270,20" href="../citymanager/index.html" onMouseOver="window.status=\'City Manager\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="270,0,362,20" href="../cityattorney/index.html" onMouseOver="window.status=\'City Attorney\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="362,0,435,20" href="../cityclerk/index.html" onMouseOver="window.status=\'City Clerk\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="435,0,561,20" href="../events/index.html" onMouseOver="window.status=\'Community Events\';return true" onMouseOut="window.status=\' \';return true">');
document.write('<AREA SHAPE="rect" COORDS="561,0,625,20" href="../contact/index.html" onMouseOver="window.status=\'Contact Information\';return true" onMouseOut="window.status=\' \';return true">');
document.write('</MAP> ');
}