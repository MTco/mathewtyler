/* 
 * https://www.printwhatyoulike.com/static/compressed/pwyl_bookmarklet_10.js
*/
var _pwyl_toolbar_html = "<!-- begin included body content -->  <!-- all urls must be absolute --> <div id=\"ppw_toolbar\" pwyl=\"true\">   <div id=\"ppw_toolbar_content\" class=\"ppw_toolbar_content cleanslate\">    <div id=\"ppw_logo_box\">     <div id=\"ppw_close_toolbar\" style=\"position: absolute; top: 0; right: 0;\">     <a href=\"javascript:ppw.bookmarklet.toggle()\">[X]</a>    </div>     <div id=\"ppw_logo\">     <a href=\"http://www.printwhatyoulike.com/\" target=\"_self\" id=\"ppw_logo_link\">      <img src=\"//www.printwhatyoulike.com/site/img/logo_editor.png\" />     </a>    </div>     <div id=\"ppw_logo_info\" class=\"clearfix\">      <div id=\"ppw_links_left\">      <a href=\"javascript:ppw.ui.newPagePanel.toggle()\" id=\"ppw_new_page_link\" target=\"_self\" class=\"toolbar_link_left ppw_hide_on_pro_editor\">New Page</a>      <a href=\"javascript:ppw.ui.addPagePanel.toggle()\" id=\"ppw_add_page_link\" target=\"_self\" class=\"toolbar_link_left\">Add Page</a>     </div>      <div id=\"ppw_links_right\">      <a href=\"javascript:ppw.ui.saveAsPanel.toggle()\" id=\"ppw_save_as_link\" target=\"_self\" class=\"toolbar_link_right ppw_show_on_clips_editor\">Save as &#9660;</a>      <a href=\"javascript:ppw.ui.helpPanel.toggle()\" id=\"ppw_help_link\" target=\"_self\" class=\"toolbar_link_right\">Help</a>     </div>     </div>    </div>    <div id=\"ppw_buttons\" class=\"clearfix\">     <div class=\"ppw_button_group left-cell\">     <button type=\"button\" onclick=\"ppw.ui.printPage();\" title=\"Print - Ctrl P\" class=\"ppw_fancy_button ppw_show_on_clips_editor ppw_button_fixed\">Print</button>    </div>    <div class=\"ppw_button_group  right-cell\" >     <button type=\"button\" onclick=\"ppw.util.cursorWrapper('ppw.commands.auto()')\" title=\"Automatically format the page for printing. Sometimes this works great, sometimes not so much. Help an old lady cross the street to build up karma before clicking ;-)\" id=\"ppw_auto_link\" class=\"ppw_fancy_button ppw_button_fixed\" autocomplete=\"off\">Format</button>    </div>    <div class=\"ppw_button_group left-cell\">     <!-- no line break here between buttons b/c these are inline elems, so empty space will be displayed -->     <button type=\"button\" id=\"ppw_undo_button\" onclick=\"ppw.changeset.undo()\" title=\"Undo - Ctrl Z\" class=\"ppw_double_button\" style=\"width: 59px;\" disabled=\"disabled\" autocomplete=\"off\">Undo</button><button type=\"button\" id=\"ppw_undo_select_button\" onclick=\"ppw.ui.undoListPanel.toggle()\" title=\"Undo - Select\" class=\"ppw_double_button\" style=\"width: 16px;\" disabled=\"disabled\" autocomplete=\"off\">&#9660;</button>    </div>    <div class=\"ppw_button_group right-cell\">     <button type=\"button\" id=\"ppw_redo_button\" onclick=\"ppw.changeset.redo()\" title=\"Redo - Ctrl Y\" class=\"ppw_fancy_button ppw_button_fixed\" disabled=\"disabled\" autocomplete=\"off\">Redo</button>    </div>    <div style=\"width: 162px; padding-left: 14px;\">     <button type=\"button\" id=\"ppw_add_next_page_button\" onclick=\"ppw.util.cursorWrapper('ppw.commands.addNextPage()');\" title=\"Add Next Page\" class=\"ppw_fancy_button ppw_hide_on_pro_editor\" style=\"width: 162px; display: none;\">Add Next Page</button>    </div>     <div id=\"ppw_apply_change_set\" class=\"ppw_hide_on_pro_editor\" style=\"clear:both\">     <select id=\"ppw_select_change_set_dropdown\" onchange=\"ppw.util.cursorWrapper('ppw.commands.applySelectedChangeSet()')\" title=\"Apply Change Set\" class=\"ppw_fancy_select\" style=\"width: 150px;\" autocomplete=\"off\">      <option>Apply Change Set</option>     </select>    </div>   </div> <!-- /buttons -->    <fieldset>    <legend>Page Properties&nbsp;&nbsp;<a href=\"javascript:ppw.ui.pageHelpPanel.toggle()\" id=\"ppw_page_help_link\" target=\"_self\" title=\"Page Commands Help\"><img src=\"//www.printwhatyoulike.com/editor/img/help.png\" border=\"0\" /></a></legend>    <table id=\"ppw_page_properties\">     <tbody>      <tr>       <td class=\"ppw_page_prop_label\">Text Size:</td>       <td class=\"ppw_page_prop\">        <button type=\"button\" onclick=\"ppw.util.cursorWrapper('ppw.commands.changeFontSize(1)')\" title=\"Increase Text Size - Ctrl &#8593;\" class=\"ppw_text_size ppw_fancy_button\">+</button>        <button type=\"button\" onclick=\"ppw.util.cursorWrapper('ppw.commands.changeFontSize(-1)')\" title=\"Decrease Text Size - Ctrl &#8595;\" class=\"ppw_text_size ppw_fancy_button\">-</button>       </td>      </tr>      <tr>       <td colspan=\"2\" class=\"ppw_page_prop_label ppw_radio_buttons\">        Font:        <select id=\"ppw_select_font_dropdown\" onchange=\"ppw.util.cursorWrapper('ppw.commands.changeFontType()')\" title=\"Change Font Type\" class=\"ppw_fancy_select\" autocomplete=\"off\">         <option>default</option>         <option value=\"'Times New Roman', Times, serif\" style=\"font-family: 'Times New Roman', Times, serif\">Times New Roman</option>         <option value=\"Georgia,'Times New Roman',Times,serif\" style=\"font-family: Georgia,'Times New Roman',Times,serif\">Georgia</option>         <option value=\"'Trebuchet MS', Helvetica, Arial, sans-serif\" style=\"font-family: 'Trebuchet MS', Helvetica, Arial, sans-serif\">Helvetica</option>         <option value=\"Verdana,Geneva,sans-serif\" style=\"font-family: Verdana,Geneva,sans-serif\">Verdana</option>        </select>       </td>      </tr>      <tr>       <td class=\"ppw_page_prop_label ppw_radio_buttons\">Background:</td>       <td class=\"ppw_page_prop ppw_radio_buttons\">        <span><input type=\"radio\" name=\"ppw_background\" id=\"ppw_background_show\" value=\"show\" onclick=\"ppw.util.cursorWrapper('ppw.commands.showStyle(1)')\" checked=\"checked\" autocomplete=\"off\" /> <label for=\"ppw_background_show\">Show</label></span>        <span><input type=\"radio\" name=\"ppw_background\" id=\"ppw_background_hide\" value=\"hide\" onclick=\"ppw.util.cursorWrapper('ppw.commands.removeBackground()')\" autocomplete=\"off\" /> <label for=\"ppw_background_hide\">Hide</label></span>       </td>      </tr>      <tr>       <td class=\"ppw_page_prop_label ppw_radio_buttons\">Images:</td>       <td class=\"ppw_page_prop ppw_radio_buttons\">        <span><input type=\"radio\" name=\"ppw_images\" id=\"ppw_images_show\" value=\"show\" onclick=\"ppw.util.cursorWrapper('ppw.commands.showStyle(2)')\" checked=\"checked\" autocomplete=\"off\" /> <label for=\"ppw_images_show\">Show</label></span>        <span><input type=\"radio\" name=\"ppw_images\" id=\"ppw_images_hide\" value=\"hide\" onclick=\"ppw.util.cursorWrapper('ppw.commands.removeImages()')\" autocomplete=\"off\" /> <label for=\"ppw_images_hide\">Hide</label></span>       </td>      </tr>      <tr>       <td class=\"ppw_page_prop_label ppw_radio_buttons\">Margins:</td>       <td class=\"ppw_page_prop ppw_radio_buttons\">        <span><input type=\"radio\" name=\"ppw_margins\" id=\"ppw_margins_show\" value=\"show\" onclick=\"ppw.util.cursorWrapper('ppw.commands.showStyle(3)')\" checked=\"checked\" autocomplete=\"off\" /> <label for=\"ppw_margins_show\">Show</label></span>        <span><input type=\"radio\" name=\"ppw_margins\" id=\"ppw_margins_hide\" value=\"hide\" onclick=\"ppw.util.cursorWrapper('ppw.commands.removeMargin()')\" autocomplete=\"off\" /> <label for=\"ppw_margins_hide\">Hide</label></span>       </td>      </tr>     </tbody>    </table>   </fieldset>    <!--div id=\"ppw_adver_label\" class=\"ppw_toolbar_adver\">Advertisement:</div>   <div id=\"ppw_ad_toolbar_anchor\"></div-->   </div> <!-- /toolbar_content -->   <!-- html elements used by commands -->  <div id=\"ppw_dock\" style=\"display: none\">    <!--form for save pdf, save html+ie -->   <form id=\"ppw_save_page_form\" target=\"_blank\" method=\"post\" enctype=\"multipart/form-data\" autocomplete=\"off\">    <input type=\"text\" id=\"ppw_save_page_url\" name=\"pageUrl\" />    <input type=\"text\" id=\"ppw_save_page_encoding\" name=\"encoding\" />    <textarea id=\"ppw_save_page_field\" name=\"pageSrc\" ></textarea>   </form>    <!-- attach iframes here -->   <div id=\"ppw_iframe_dock\"></div>   </div>  <!--div id=\"ppw_iframe_dock\" style=\"position: absolute; top: 0; left: 300px; width: 300px; height: 200px;\"></div--> <!-- testing -->   <!-- for some reason Safari needs font-face fonts to be invoked once before they work -->  <div id=\"ppw_ecofont_initialize\" style=\"visibility: hidden\">Yo!</div>   <div id=\"ppw_selection_commands\" class=\"cleanslate\">   <!-- formatted in this crazy way b/c these are inline elems and linebreaks here will appear on the page -->   <img id=\"ppw_selection_commands_drag\" src=\"//www.printwhatyoulike.com/editor/img/dragdrop.png\" border=\"0\"   /> <button onclick=\"ppw.util.cursorWrapper('ppw.commands.isolate()')\" title=\"Isolate Selected Elements - I\" class=\"ppw_selection_button\" id=\"ppw_isolate_link\">Isolate   </button><button onclick=\"ppw.util.cursorWrapper('ppw.commands.remove()')\" title=\"Remove Selected Elements - Del\" class=\"ppw_selection_button\" id=\"ppw_remove_link\">Remove   </button><button onclick=\"ppw.util.cursorWrapper('ppw.commands.widen()')\" title=\"Widen Selected Elements - W\" class=\"ppw_selection_button\" id=\"ppw_widen_link\">Widen   </button><button onclick=\"ppw.commands.startResizeMode()\" title=\"Resize Selected Elements - Z\" class=\"ppw_selection_button\" id=\"ppw_resize_link\">Resize   </button><button onclick=\"ppw.auth.requiresAuthentication(ppw.commands.saveClip);\" title=\"Save Clip\" id=\"ppw_save_clip_button\" class=\"ppw_selection_button ppw_hide_on_pro_editor\" autocomplete=\"off\">Save Clip   </button><button onclick=\"ppw.editor.expandSelection()\" title=\"Select Bigger Area - M\" id=\"ppw_expand_link\" class=\"ppw_selection_button\">Select More   </button><button onclick=\"ppw.editor.narrowSelection()\" title=\"Select Smaller Area - L\" id=\"ppw_narrow_link\" class=\"ppw_selection_button\" style=\"display: none\">Select Less</button>   <!--<button type=\"button\" onclick=\"ppw.util.clearSelectedElements()\" title=\"Clear Selected Elements - C\" id=\"ppw_clear_link\" class=\"ppw_selection_button\">Clear</button>-->  </div>   <div id=\"ppw_hover_border_top\" class=\"ppw_hover_border\"></div>  <div id=\"ppw_hover_border_bottom\" class=\"ppw_hover_border\"></div>  <div id=\"ppw_hover_border_left\" class=\"ppw_hover_border\"></div>  <div id=\"ppw_hover_border_right\" class=\"ppw_hover_border\"></div>   <div id=\"ppw_hover_border_drag\"></div>  <div id=\"ppw_cover_div\"></div>  <div id=\"ppw_lightbox\"></div>   <!-- Panels - must be outside of toolbar_content or will appear inside toolbar -->  <div id=\"ppw_panels\">    <div id=\"ppw_new_page\" class=\"ppw_panel ppw_panel_bd\">    <form action=\"http://www.printwhatyoulike.com/print\" method=\"get\" target=\"_self\" onsubmit=\"ppw.ui.trimUrl('ppw_new_page_url_form_field')\" style=\"float: left\">     <input type=\"text\" name=\"url\" id=\"ppw_new_page_url_form_field\" value=\"\" class=\"ppw_panel_text_input_field ppw_toolbar_input_field\"/>     <input type=\"submit\" id=\"ppw_new_page_url_form_submit\" class=\"ppw_panel_submit_button\" value=\"Go!\"/>    </form>    <button type=\"button\" class=\"ppw_panel_close\" onclick=\"javascript:ppw.ui.newPagePanel.toggle()\">&nbsp;</button>   </div>    <div id=\"ppw_add_page\" class=\"ppw_panel ppw_panel_bd\">    <form  id=\"ppw_add_page_form\" name=\"ppw_add_page\" onsubmit=\"ppw.ui.addPage(); return false;\" style=\"float: left\">     <div><input type=\"text\" name=\"url\" id=\"ppw_add_page_url_form_field\" value=\"\" onkeyup=\"ppw.ui.updateAddPageForm()\"  class=\"ppw_panel_text_input_field ppw_toolbar_input_field\" autocomplete=\"off\"/>     <input type=\"submit\" id=\"ppw_add_page_url_form_submit\" class=\"ppw_panel_submit_button\" onclick=\"\" value=\"Add\" />     <img id=\"ppw_add_page_busy_icon\" style=\"display: none\" src=\"//www.printwhatyoulike.com/lib/yui/assets/skins/sam/wait.gif\" /></div>     <div style=\"clear:both\"></div>     <div id=\"ppw_add_page_apply_changes\"><input type=\"checkbox\" id=\"ppw_add_page_apply_changes_checkbox\" name=\"ppw_add_page_apply_changes\" value=\"1\" checked=\"checked\" autocomplete=\"off\" />&nbsp;Apply current changes to added page</div>    </form>    <button type=\"button\" class=\"ppw_panel_close\" onclick=\"javascript:ppw.ui.addPagePanel.toggle()\">&nbsp;</button>   </div>    <div id=\"ppw_save_as\" class=\"ppw_panel\" style=\"width: 120px\">    <a href=\"javascript:ppw.editor.saveToPdf()\" id=\"ppw_save_to_pdf_link\" target=\"_self\" >PDF</a>    <a href=\"javascript:ppw.editor.saveToHtml()\" id=\"ppw_save_to_html_link\" target=\"_self\" class=\"\">HTML</a>    <span id=\"ppw_save_to_changeset_link_wrapper\" class=\"disabled ppw_hide_on_pro_editor\"><a href=\"javascript:void(0)\" id=\"ppw_save_to_changeset_link\" target=\"_self\" class=\"\">Change Set</a></span>   </div>    <div id=\"ppw_help\" class=\"ppw_panel\">    <div class=\"ppw_panel_hd\">     <div style=\"float: left\">Help</div>     <button type=\"button\" class=\"ppw_panel_close\" onclick=\"javascript:ppw.ui.helpPanel.toggle()\">&nbsp;</button>     <div style=\"clear: both;\"></div>    </div>    <div class=\"ppw_panel_bd\">     <div class=\"ppw_css_table\">      <div><span><b>Command</b></span><span><b>Keyboard Shortcut</b></span><b>Explanation</b></div>      <div><span>Undo</span><span class=\"ppw_help_ctrl_z\">Ctrl Z</span>Undo the last change</div>      <div class=\"ppw_odd\"><span>Redo</span><span class=\"ppw_help_ctrl_y\">Ctrl Y</span>Redo</div>      <div><span><a href=\"http://www.printwhatyoulike.com/help#how_to_isolate\" target=\"_blank\">Isolate</a></span><span>I</span>Remove everything but the current selection</div>      <div class=\"ppw_odd\"><span><a href=\"http://www.printwhatyoulike.com/help#how_to_remove\" target=\"_blank\">Remove</a></span><span class=\"ppw_help_del\">Del</span>Remove the selected elements</div>      <div><span><a href=\"http://www.printwhatyoulike.com/help#how_to_fit_to_width\" target=\"_blank\">Widen</a></span><span>W</span>Make the selected element as wide as the page</div>      <div class=\"ppw_odd\"><span><a href=\"http://www.printwhatyoulike.com/help#how_to_resize\" target=\"_blank\">Resize</a></span><span>Z</span>Resize the selected element</div>      <div><span><a href=\"http://www.printwhatyoulike.com/help#how_to_select_elements\" target=\"_blank\">Select More</a></span><span>M</span>Increase the size of the current selection</div>      <div class=\"ppw_odd\"><span><a href=\"http://www.printwhatyoulike.com/help#how_to_select_elements\" target=\"_blank\">Select Less</a></span><span>L</span>Decrease the size of the current selection</div>      <div><span><a href=\"http://www.printwhatyoulike.com/help#how_to_change_text\" target=\"_blank\">Increase Text Size</a></span><span>Ctrl &#8593;</span>&nbsp;</div>      <div class=\"ppw_odd\"><span><a href=\"http://www.printwhatyoulike.com/help#how_to_change_text\" target=\"_blank\">Decrease Text Size</a></span><span>Ctrl &#8595;</span>&nbsp;</div>      <div><span><a href=\"http://www.printwhatyoulike.com/help#how_to_remove_background\" target=\"_blank\">Hide Background</a></span><span>&nbsp;</span>Make background white and text black</div>      <div class=\"ppw_odd\"><span><a href=\"http://www.printwhatyoulike.com/help#how_to_remove_images\" target=\"_blank\">Hide Images</a></span><span>&nbsp;</span>Remove all images on the page</div>      <div><span>Auto Format</span><span>&nbsp;</span>Automatically format page for printing</div>      <div class=\"ppw_odd\"><span><a href=\"http://www.printwhatyoulike.com/help#how_to_save_elec_version\" target=\"_blank\">Save As PDF/HTML</a></span><span>&nbsp;</span>Save an electronic version of the modified page</div>      <div><span><a href=\"http://www.printwhatyoulike.com/help#how_to_add_page\" target=\"_blank\">Add Page</a></span><span>&nbsp;</span>Print several web pages together as one document</div>      <div class=\"ppw_odd\"><span><a href=\"http://www.printwhatyoulike.com/help#clip_instructions\" target=\"_blank\">Save Clip</a></span><span>&nbsp;</span>Save part of the page for later (Requires free account)</div>      <div><span><a href=\"http://www.printwhatyoulike.com/help#change_set_instructions\" target=\"_blank\">Save As Change Set</a></span><span>&nbsp;</span>Save series of changes made to the page (Requires free account)</div>      <div class=\"ppw_odd\"><span><a href=\"http://www.printwhatyoulike.com/help#change_set_instructions\" target=\"_blank\">Apply Change Set</a></span><span>&nbsp;</span>Apply series of changes to the current page (Requires free account)</div>     </div>    </div>   </div>    <div id=\"ppw_undo_list\" class=\"ppw_panel\" style=\"width: 200px\">   </div>    <div id=\"ppw_page_help\" class=\"ppw_toolbar_help ppw_panel\">    <div class=\"ppw_panel_hd\">     <div style=\"float: left\">Page Help</div>     <button type=\"button\" class=\"ppw_panel_close\" onclick=\"javascript:ppw.ui.pageHelpPanel.hide()\" id=\"ppw_page_help_panel_close\">&nbsp;</button>     <div style=\"clear: both;\"></div>    </div>    <div id=\"ppw_page_help_bd\" class=\"\">    </div>   </div>    <div id=\"ppw_ecofont_help\" class=\"ppw_panel ppw_message_panel\">    <div class=\"ppw_panel_hd\">     <div style=\"float: left\">Install EcoFont</div>     <button type=\"button\" class=\"ppw_panel_close\" onclick=\"javascript:ppw.ui.ecofontHelpPanel.toggle()\">&nbsp;</button>     <div style=\"clear: both;\"></div>    </div>    <div class=\"ppw_panel_bd\">      <div style=\"text-align: center;\">      <img src=\"//www.printwhatyoulike.com/site/img/ecofont_logo.png\" />     </div>      <h3>      This browser configuration does not currently support EcoFont.      Don't worry, there are two ways you can get EcoFont working.     </h3>     <ul>      <li>       <b>Option A: Upgrade Your Browser </b>       <br/>       EcoFont will magically work on the most recent browsers: Firefox 3.1 (beta), Opera 10 (beta), and Safari 3.1+.      </li>      <li>       <b>Option B: Install Ecofont on your system </b>       <br/>       The font download and installation instructions are available at <a href=\"http://www.ecofont.eu/downloads_en.html\" target=\"_blank\">here</a>       When your done, come back and EcoFont will work.      </li>     </ul>     <br/>     <b>About Ecofont:</b> EcoFont is ink-saving font developed by <a href=\"http://www.spranq.nl/en/\" target=\"_blank\">SPRANQ</a>.     EcoFont reduces ink consumption up to 20% by putting tiny holes in letters.     More info: <a href=\"http://www.ecofont.eu/ecofont_en.html\" target=\"_blank\">www.ecofont.eu/ecofont_en.html</a>     <div style=\"text-align: center; margin-top: 10px;\">      <button type=\"button\" class=\"ppw_full_width_button\" onclick=\"javascript:ppw.ui.ecofontHelpPanel.toggle()\">Close</button>     </div>    </div>   </div>    <div id=\"ppw_info_panel\">    <div id=\"ppw_try_bkmt_message\" class=\"ppw_info_message\" style=\"display:none;\">     Make this editor instantly available on any web page with the <a target=\"_blank\"  href=\"http://www.printwhatyoulike.com/bookmarklet\"><span style=\"color:blue;\">Bookmarklet</span></a>&nbsp;&nbsp;     <button type=\"button\" class=\"ppw_panel_close\" style=\"float:none;\" onclick=\"javascript:ppw.ui.hideBookmarkletMessage()\">&nbsp;</button>    </div>   </div>    <div id=\"ppw_save_change_set\" class=\"ppw_panel ppw_message_panel\">    <div class=\"ppw_panel_hd\">     <div style=\"float: left\">Save Change Set</div>     <button type=\"button\" class=\"ppw_panel_close\" onclick=\"javascript:ppw.ui.saveChangeSetPanel.toggle()\">&nbsp;</button>     <div style=\"clear: both;\"></div>    </div>    <div class=\"ppw_panel_bd\">     <form action=\"javascript:void(0)\" method=\"post\" id=\"ppw_save_change_set_form\" name=\"ppw_save_change_set_form\" onSubmit=\"return ppw.ui.checkSaveChangeSetForm()\" autocomplete=\"off\">      <b>Name:</b> <input id=\"ppw_change_set_name\" class=\"ppw_toolbar_input_field text\" type=\"text\" name=\"ppw_change_set_name\" value=\"\" size=\"50\" /><br/>      <b>Automatically apply change set:</b> <input type=\"checkbox\" id=\"ppw_change_set_auto_apply\" name=\"ppw_change_set_auto_apply\" value=\"1\" /><br/>      <div style=\"text-align: center; margin-top: 10px;\">       <input type=\"submit\" class=\"buttons\" value=\"Save\" class=\"ppw_fancy_button\"/>       <button type=\"button\" class=\"buttons\" onclick=\"javascript:ppw.ui.saveChangeSetPanel.toggle()\" class=\"ppw_fancy_button\">Cancel</button>      </div>     </form>    </div>   </div>    <div id=\"ppw_account_required\" class=\"ppw_panel ppw_message_panel\">    <div class=\"ppw_panel_hd\">     <div style=\"float: left\">PrintWhatYouLike Account Required</div>     <button type=\"button\" class=\"ppw_panel_close\" onclick=\"javascript:ppw.ui.accountRequiredPanel.hide()\" id=\"ppw_account_required_panel_close\">&nbsp;</button>     <div style=\"clear: both;\"></div>    </div>    <div id=\"ppw_account_required_bd\" class=\"\">    </div>   </div>    <div id=\"ppw_over_quota\" class=\"ppw_panel ppw_message_panel\">    <div class=\"ppw_panel_hd\">     <div style=\"float: left\">Free Trial Account: Over Quota</div>     <button type=\"button\" class=\"ppw_panel_close\" onclick=\"javascript:ppw.ui.overQuotaPanel.toggle()\">&nbsp;</button>     <div style=\"clear: both;\"></div>    </div>    <div id=\"ppw_over_quota_bd\" class=\"\"></div>   </div>    <div id=\"ppw_bookmark_login_form\" class=\"ppw_panel ppw_message_panel\" style=\"width: 700px;\">    <div style=\"margin: 20px 100px; width: 500px;\">     <div id=\"ppw_bookmarklet_login_new\">      <h1>Login</h1>      <h3 id=\"ppw_bookmark_login_form_subheader\">       Don't have an account?       <a style=\"font-weight: bold\" href=\"http://www.printwhatyoulike.com/users/new?source=bookmarklet\" target=\"_blank\">Sign up!</a>      </h3>      <br/>      <div id=\"ppw_bookmarklet_login_failure\">Incorrect email or password</div>       <label for=\"user_session_email\">Email address</label><br />      <input id=\"user_session_email\" class=\"ppw_toolbar_input_field\" name=\"user_session_email\" size=\"30\" tabindex=\"1\" type=\"text\" /><br />      <br />      <label for=\"user_session_password\">Password</label><br />      <input id=\"user_session_password\" class=\"ppw_toolbar_input_field\" name=\"user_session_password\" size=\"30\" tabindex=\"2\" type=\"password\" />      (<a href=\"http://www.printwhatyoulike.com/password_resets/new\" target=\"_blank\">forgot password?</a>)      <br />      <br />      <div id=\"ppw_bookmarklet_login_new_buttons\">       <button class=\"buttons\" tabindex=\"3\" onclick=\"ppw.auth.attemptLogin()\">Login</button>       <button class=\"buttons\" tabindex=\"4\" onclick=\"ppw.ui.accountRequiredPanel.hide();\">Cancel</button>      </div>      <div id=\"ppw_bookmarklet_login_new_wait\">       <img src=\"//www.printwhatyoulike.com/lib/yui/assets/skins/sam/wait.gif\">      </div>     </div>     <div id=\"ppw_bookmarklet_login_success\">      <h2 id=\"ppw_bookmarklet_login_success_full_name\"></h2>      <p>Your changes will be saved- you do not need to reload the page.</p>      <button type=\"button\" onclick=\"ppw.auth.afterAuthenticationContinueExecution()\">Close</button>     </div>    </div>   </div>    <div id=\"ppw_completion_message_panel\" class=\"ppw_panel ppw_message_panel\">    <img src=\"//www.printwhatyoulike.com/editor/img/close.png\" class=\"ppw_completion_message_panel_close\" onclick=\"javascript:ppw.ui.completionMessagePanel.hide()\">     <div id=\"ppw_completion_message_panel_print\" class=\"ppw_completion_message_panel_message\">     Your page has been sent to the printer, <a href=\"javascript:window.print();\" target=\"_self\">resend</a>    </div>    <div id=\"ppw_completion_message_panel_pdf\" class=\"ppw_completion_message_panel_message\">     Your PDF is being generated. This usually takes about 10 seconds.    </div>     <div id=\"ppw_completion_message_panel_html\" class=\"ppw_completion_message_panel_message\">     Generating a 'cleaned up' version of this page for saving.<br>The toolbar and deleted page elements are removed.    </div>    <div id=\"ppw_completion_message_panel_changeset\" class=\"ppw_completion_message_panel_message\">     Change set saved! View your change sets <a href=\"http://www.printwhatyoulike.com/dashboard\" target=\"_blank\">here</a>    </div>     <!--iframe src=\"//www.printwhatyoulike.com/editor/ads/chitika_panel.html\" style=\"width:550px; height: 250px; margin: 0 125px 10px 125px;\" class=\"ppw_ad_iframe ppw_toolbar_adver\" scrolling=\"no\" frameBorder=\"0\"></iframe-->   </div>       </div> <!-- /panels -->     </div>  <!-- Top --> <div id=\"ppw_page_top\"><div id=\"ppw_page_body\" class=\"ppw_base yui-skin-sam\"> ";
if (typeof YAHOO == "undefined" || !YAHOO) {
	var YAHOO = {}
}
YAHOO.namespace = function () {
	var A = arguments,
		E = null,
		C, B, D;
	for (C = 0; C < A.length; C = C + 1) {
		D = ("" + A[C]).split(".");
		E = YAHOO;
		for (B = (D[0] == "YAHOO") ? 1 : 0; B < D.length; B = B + 1) {
			E[D[B]] = E[D[B]] || {};
			E = E[D[B]]
		}
	}
	return E
};
YAHOO.log = function (D, A, C) {
	var B = YAHOO.widget.Logger;
	if (B && B.log) {
		return B.log(D, A, C)
	}
	else {
		return false
	}
};
YAHOO.register = function (A, E, D) {
	var I = YAHOO.env.modules,
		B, H, G, F, C;
	if (!I[A]) {
		I[A] = {
			versions: [],
			builds: []
		}
	}
	B = I[A];
	H = D.version;
	G = D.build;
	F = YAHOO.env.listeners;
	B.name = A;
	B.version = H;
	B.build = G;
	B.versions.push(H);
	B.builds.push(G);
	B.mainClass = E;
	for (C = 0; C < F.length; C = C + 1) {
		F[C](B)
	}
	if (E) {
		E.VERSION = H;
		E.BUILD = G
	}
	else {
		YAHOO.log("mainClass is undefined for module " + A, "warn")
	}
};
YAHOO.env = YAHOO.env || {
	modules: [],
	listeners: []
};
YAHOO.env.getVersion = function (A) {
	return YAHOO.env.modules[A] || null
};
YAHOO.env.ua = function () {
	var C = {
			ie: 0,
			opera: 0,
			gecko: 0,
			webkit: 0,
			mobile: null,
			air: 0,
			caja: 0
		},
		B = navigator.userAgent,
		A;
	if ((/KHTML/).test(B)) {
		C.webkit = 1
	}
	A = B.match(/AppleWebKit\/([^\s]*)/);
	if (A && A[1]) {
		C.webkit = parseFloat(A[1]);
		if (/ Mobile\//.test(B)) {
			C.mobile = "Apple"
		}
		else {
			A = B.match(/NokiaN[^\/]*/);
			if (A) {
				C.mobile = A[0]
			}
		}
		A = B.match(/AdobeAIR\/([^\s]*)/);
		if (A) {
			C.air = A[0]
		}
	}
	if (!C.webkit) {
		A = B.match(/Opera[\s\/]([^\s]*)/);
		if (A && A[1]) {
			C.opera = parseFloat(A[1]);
			A = B.match(/Opera Mini[^;]*/);
			if (A) {
				C.mobile = A[0]
			}
		}
		else {
			A = B.match(/MSIE\s([^;]*)/);
			if (A && A[1]) {
				C.ie = parseFloat(A[1])
			}
			else {
				A = B.match(/Gecko\/([^\s]*)/);
				if (A) {
					C.gecko = 1;
					A = B.match(/rv:([^\s\)]*)/);
					if (A && A[1]) {
						C.gecko = parseFloat(A[1])
					}
				}
			}
		}
	}
	A = B.match(/Caja\/([^\s]*)/);
	if (A && A[1]) {
		C.caja = parseFloat(A[1])
	}
	return C
}();
(function () {
	YAHOO.namespace("util", "widget", "example");
	if ("undefined" !== typeof YAHOO_config) {
		var B = YAHOO_config.listener,
			A = YAHOO.env.listeners,
			D = true,
			C;
		if (B) {
			for (C = 0; C < A.length; C = C + 1) {
				if (A[C] == B) {
					D = false;
					break
				}
			}
			if (D) {
				A.push(B)
			}
		}
	}
})();
YAHOO.lang = YAHOO.lang || {};
(function () {
	var B = YAHOO.lang,
		F = "[object Array]",
		C = "[object Function]",
		A = Object.prototype,
		E = ["toString", "valueOf"],
		D = {
			isArray: function (G) {
				return A.toString.apply(G) === F
			},
			isBoolean: function (G) {
				return typeof G === "boolean"
			},
			isFunction: function (G) {
				return A.toString.apply(G) === C
			},
			isNull: function (G) {
				return G === null
			},
			isNumber: function (G) {
				return typeof G === "number" && isFinite(G)
			},
			isObject: function (G) {
				return (G && (typeof G === "object" || B.isFunction(G))) || false
			},
			isString: function (G) {
				return typeof G === "string"
			},
			isUndefined: function (G) {
				return typeof G === "undefined"
			},
			_IEEnumFix: (YAHOO.env.ua.ie) ? function (I, H) {
				var G, K, J;
				for (G = 0; G < E.length; G = G + 1) {
					K = E[G];
					J = H[K];
					if (B.isFunction(J) && J != A[K]) {
						I[K] = J
					}
				}
			} : function () {},
			extend: function (J, K, I) {
				if (!K || !J) {
					throw new Error("extend failed, please check that all dependencies are included.")
				}
				var H = function () {},
					G;
				H.prototype = K.prototype;
				J.prototype = new H();
				J.prototype.constructor = J;
				J.superclass = K.prototype;
				if (K.prototype.constructor == A.constructor) {
					K.prototype.constructor = K
				}
				if (I) {
					for (G in I) {
						if (B.hasOwnProperty(I, G)) {
							J.prototype[G] = I[G]
						}
					}
					B._IEEnumFix(J.prototype, I)
				}
			},
			augmentObject: function (K, J) {
				if (!J || !K) {
					throw new Error("Absorb failed, verify dependencies.")
				}
				var G = arguments,
					I, L, H = G[2];
				if (H && H !== true) {
					for (I = 2; I < G.length; I = I + 1) {
						K[G[I]] = J[G[I]]
					}
				}
				else {
					for (L in J) {
						if (H || !(L in K)) {
							K[L] = J[L]
						}
					}
					B._IEEnumFix(K, J)
				}
			},
			augmentProto: function (J, I) {
				if (!I || !J) {
					throw new Error("Augment failed, verify dependencies.")
				}
				var G = [J.prototype, I.prototype],
					H;
				for (H = 2; H < arguments.length; H = H + 1) {
					G.push(arguments[H])
				}
				B.augmentObject.apply(this, G)
			},
			dump: function (G, L) {
				var I, K, N = [],
					O = "{...}",
					H = "f(){...}",
					M = ", ",
					J = " => ";
				if (!B.isObject(G)) {
					return G + ""
				}
				else {
					if (G instanceof Date || ("nodeType" in G && "tagName" in G)) {
						return G
					}
					else {
						if (B.isFunction(G)) {
							return H
						}
					}
				}
				L = (B.isNumber(L)) ? L : 3;
				if (B.isArray(G)) {
					N.push("[");
					for (I = 0, K = G.length; I < K; I = I + 1) {
						if (B.isObject(G[I])) {
							N.push((L > 0) ? B.dump(G[I], L - 1) : O)
						}
						else {
							N.push(G[I])
						}
						N.push(M)
					}
					if (N.length > 1) {
						N.pop()
					}
					N.push("]")
				}
				else {
					N.push("{");
					for (I in G) {
						if (B.hasOwnProperty(G, I)) {
							N.push(I + J);
							if (B.isObject(G[I])) {
								N.push((L > 0) ? B.dump(G[I], L - 1) : O)
							}
							else {
								N.push(G[I])
							}
							N.push(M)
						}
					}
					if (N.length > 1) {
						N.pop()
					}
					N.push("}")
				}
				return N.join("")
			},
			substitute: function (V, H, O) {
				var L, K, J, R, S, U, Q = [],
					I, M = "dump",
					P = " ",
					G = "{",
					T = "}",
					N;
				for (;;) {
					L = V.lastIndexOf(G);
					if (L < 0) {
						break
					}
					K = V.indexOf(T, L);
					if (L + 1 >= K) {
						break
					}
					I = V.substring(L + 1, K);
					R = I;
					U = null;
					J = R.indexOf(P);
					if (J > -1) {
						U = R.substring(J + 1);
						R = R.substring(0, J)
					}
					S = H[R];
					if (O) {
						S = O(R, S, U)
					}
					if (B.isObject(S)) {
						if (B.isArray(S)) {
							S = B.dump(S, parseInt(U, 10))
						}
						else {
							U = U || "";
							N = U.indexOf(M);
							if (N > -1) {
								U = U.substring(4)
							}
							if (S.toString === A.toString || N > -1) {
								S = B.dump(S, parseInt(U, 10))
							}
							else {
								S = S.toString()
							}
						}
					}
					else {
						if (!B.isString(S) && !B.isNumber(S)) {
							S = "~-" + Q.length + "-~";
							Q[Q.length] = I
						}
					}
					V = V.substring(0, L) + S + V.substring(K + 1)
				}
				for (L = Q.length - 1; L >= 0; L = L - 1) {
					V = V.replace(new RegExp("~-" + L + "-~"), "{" + Q[L] + "}", "g")
				}
				return V
			},
			trim: function (G) {
				try {
					return G.replace(/^\s+|\s+$/g, "")
				}
				catch (H) {
					return G
				}
			},
			merge: function () {
				var J = {},
					H = arguments,
					G = H.length,
					I;
				for (I = 0; I < G; I = I + 1) {
					B.augmentObject(J, H[I], true)
				}
				return J
			},
			later: function (N, H, O, J, K) {
				N = N || 0;
				H = H || {};
				var I = O,
					M = J,
					L, G;
				if (B.isString(O)) {
					I = H[O]
				}
				if (!I) {
					throw new TypeError("method undefined")
				}
				if (!B.isArray(M)) {
					M = [J]
				}
				L = function () {
					I.apply(H, M)
				};
				G = (K) ? setInterval(L, N) : setTimeout(L, N);
				return {
					interval: K,
					cancel: function () {
						if (this.interval) {
							clearInterval(G)
						}
						else {
							clearTimeout(G)
						}
					}
				}
			},
			isValue: function (G) {
				return (B.isObject(G) || B.isString(G) || B.isNumber(G) || B.isBoolean(G))
			}
		};
	B.hasOwnProperty = (A.hasOwnProperty) ? function (G, H) {
		return G && G.hasOwnProperty(H)
	} : function (G, H) {
		return !B.isUndefined(G[H]) && G.constructor.prototype[H] !== G[H]
	};
	D.augmentObject(B, D, true);
	YAHOO.util.Lang = B;
	B.augment = B.augmentProto;
	YAHOO.augment = B.augmentProto;
	YAHOO.extend = B.extend
})();
YAHOO.register("yahoo", YAHOO, {
	version: "2.7.0",
	build: "1799"
});
YAHOO.util.CustomEvent = function (D, C, B, A) {
	this.type = D;
	this.scope = C || window;
	this.silent = B;
	this.signature = A || YAHOO.util.CustomEvent.LIST;
	this.subscribers = [];
	if (!this.silent) {}
	var E = "_YUICEOnSubscribe";
	if (D !== E) {
		this.subscribeEvent = new YAHOO.util.CustomEvent(E, this, true)
	}
	this.lastError = null
};
YAHOO.util.CustomEvent.LIST = 0;
YAHOO.util.CustomEvent.FLAT = 1;
YAHOO.util.CustomEvent.prototype = {
	subscribe: function (A, B, C) {
		if (!A) {
			throw new Error("Invalid callback for subscriber to '" + this.type + "'")
		}
		if (this.subscribeEvent) {
			this.subscribeEvent.fire(A, B, C)
		}
		this.subscribers.push(new YAHOO.util.Subscriber(A, B, C))
	},
	unsubscribe: function (D, F) {
		if (!D) {
			return this.unsubscribeAll()
		}
		var E = false;
		for (var B = 0, A = this.subscribers.length; B < A; ++B) {
			var C = this.subscribers[B];
			if (C && C.contains(D, F)) {
				this._delete(B);
				E = true
			}
		}
		return E
	},
	fire: function () {
		this.lastError = null;
		var K = [],
			E = this.subscribers.length;
		if (!E && this.silent) {
			return true
		}
		var I = [].slice.call(arguments, 0),
			G = true,
			D, J = false;
		if (!this.silent) {}
		var C = this.subscribers.slice(),
			A = YAHOO.util.Event.throwErrors;
		for (D = 0; D < E; ++D) {
			var M = C[D];
			if (!M) {
				J = true
			}
			else {
				if (!this.silent) {}
				var L = M.getScope(this.scope);
				if (this.signature == YAHOO.util.CustomEvent.FLAT) {
					var B = null;
					if (I.length > 0) {
						B = I[0]
					}
					try {
						G = M.fn.call(L, B, M.obj)
					}
					catch (F) {
						this.lastError = F;
						if (A) {
							throw F
						}
					}
				}
				else {
					try {
						G = M.fn.call(L, this.type, I, M.obj)
					}
					catch (H) {
						this.lastError = H;
						if (A) {
							throw H
						}
					}
				}
				if (false === G) {
					if (!this.silent) {}
					break
				}
			}
		}
		return (G !== false)
	},
	unsubscribeAll: function () {
		var A = this.subscribers.length,
			B;
		for (B = A - 1; B > -1; B--) {
			this._delete(B)
		}
		this.subscribers = [];
		return A
	},
	_delete: function (A) {
		var B = this.subscribers[A];
		if (B) {
			delete B.fn;
			delete B.obj
		}
		this.subscribers.splice(A, 1)
	},
	toString: function () {
		return "CustomEvent: '" + this.type + "', context: " + this.scope
	}
};
YAHOO.util.Subscriber = function (A, B, C) {
	this.fn = A;
	this.obj = YAHOO.lang.isUndefined(B) ? null : B;
	this.overrideContext = C
};
YAHOO.util.Subscriber.prototype.getScope = function (A) {
	if (this.overrideContext) {
		if (this.overrideContext === true) {
			return this.obj
		}
		else {
			return this.overrideContext
		}
	}
	return A
};
YAHOO.util.Subscriber.prototype.contains = function (A, B) {
	if (B) {
		return (this.fn == A && this.obj == B)
	}
	else {
		return (this.fn == A)
	}
};
YAHOO.util.Subscriber.prototype.toString = function () {
	return "Subscriber { obj: " + this.obj + ", overrideContext: " + (this.overrideContext || "no") + " }"
};
if (!YAHOO.util.Event) {
	YAHOO.util.Event = function () {
		var H = false;
		var I = [];
		var J = [];
		var G = [];
		var E = [];
		var C = 0;
		var F = [];
		var B = [];
		var A = 0;
		var D = {
			63232: 38,
			63233: 40,
			63234: 37,
			63235: 39,
			63276: 33,
			63277: 34,
			25: 9
		};
		var K = YAHOO.env.ua.ie ? "focusin" : "focus";
		var L = YAHOO.env.ua.ie ? "focusout" : "blur";
		return {
			POLL_RETRYS: 2000,
			POLL_INTERVAL: 20,
			EL: 0,
			TYPE: 1,
			FN: 2,
			WFN: 3,
			UNLOAD_OBJ: 3,
			ADJ_SCOPE: 4,
			OBJ: 5,
			OVERRIDE: 6,
			lastError: null,
			isSafari: YAHOO.env.ua.webkit,
			webkit: YAHOO.env.ua.webkit,
			isIE: YAHOO.env.ua.ie,
			_interval: null,
			_dri: null,
			DOMReady: false,
			throwErrors: false,
			startInterval: function () {
				if (!this._interval) {
					var M = this;
					var N = function () {
						M._tryPreloadAttach()
					};
					this._interval = setInterval(N, this.POLL_INTERVAL)
				}
			},
			onAvailable: function (S, O, Q, R, P) {
				var M = (YAHOO.lang.isString(S)) ? [S] : S;
				for (var N = 0; N < M.length; N = N + 1) {
					F.push({
						id: M[N],
						fn: O,
						obj: Q,
						overrideContext: R,
						checkReady: P
					})
				}
				C = this.POLL_RETRYS;
				this.startInterval()
			},
			onContentReady: function (P, M, N, O) {
				this.onAvailable(P, M, N, O, true)
			},
			onDOMReady: function (M, N, O) {
				if (this.DOMReady) {
					setTimeout(function () {
						var P = window;
						if (O) {
							if (O === true) {
								P = N
							}
							else {
								P = O
							}
						}
						M.call(P, "DOMReady", [], N)
					}, 0)
				}
				else {
					this.DOMReadyEvent.subscribe(M, N, O)
				}
			},
			_addListener: function (O, M, Y, S, W, b) {
				if (!Y || !Y.call) {
					return false
				}
				if (this._isValidCollection(O)) {
					var Z = true;
					for (var T = 0, V = O.length; T < V; ++T) {
						Z = this.on(O[T], M, Y, S, W) && Z
					}
					return Z
				}
				else {
					if (YAHOO.lang.isString(O)) {
						var R = this.getEl(O);
						if (R) {
							O = R
						}
						else {
							this.onAvailable(O, function () {
								YAHOO.util.Event.on(O, M, Y, S, W)
							});
							return true
						}
					}
				}
				if (!O) {
					return false
				}
				if ("unload" == M && S !== this) {
					J[J.length] = [O, M, Y, S, W];
					return true
				}
				var N = O;
				if (W) {
					if (W === true) {
						N = S
					}
					else {
						N = W
					}
				}
				var P = function (c) {
					return Y.call(N, YAHOO.util.Event.getEvent(c, O), S)
				};
				var a = [O, M, Y, P, N, S, W];
				var U = I.length;
				I[U] = a;
				if (this.useLegacyEvent(O, M)) {
					var Q = this.getLegacyIndex(O, M);
					if (Q == -1 || O != G[Q][0]) {
						Q = G.length;
						B[O.id + M] = Q;
						G[Q] = [O, M, O["on" + M]];
						E[Q] = [];
						O["on" + M] = function (c) {
							YAHOO.util.Event.fireLegacyEvent(YAHOO.util.Event.getEvent(c), Q)
						}
					}
					E[Q].push(a)
				}
				else {
					try {
						this._simpleAdd(O, M, P, b)
					}
					catch (X) {
						this.lastError = X;
						this.removeListener(O, M, Y);
						return false
					}
				}
				return true
			},
			addListener: function (N, Q, M, O, P) {
				return this._addListener(N, Q, M, O, P, false)
			},
			addFocusListener: function (N, M, O, P) {
				return this._addListener(N, K, M, O, P, true)
			},
			removeFocusListener: function (N, M) {
				return this.removeListener(N, K, M)
			},
			addBlurListener: function (N, M, O, P) {
				return this._addListener(N, L, M, O, P, true)
			},
			removeBlurListener: function (N, M) {
				return this.removeListener(N, L, M)
			},
			fireLegacyEvent: function (R, P) {
				var T = true,
					M, V, U, N, S;
				V = E[P].slice();
				for (var O = 0, Q = V.length; O < Q; ++O) {
					U = V[O];
					if (U && U[this.WFN]) {
						N = U[this.ADJ_SCOPE];
						S = U[this.WFN].call(N, R);
						T = (T && S)
					}
				}
				M = G[P];
				if (M && M[2]) {
					M[2](R)
				}
				return T
			},
			getLegacyIndex: function (N, O) {
				var M = this.generateId(N) + O;
				if (typeof B[M] == "undefined") {
					return -1
				}
				else {
					return B[M]
				}
			},
			useLegacyEvent: function (M, N) {
				return (this.webkit && this.webkit < 419 && ("click" == N || "dblclick" == N))
			},
			removeListener: function (N, M, V) {
				var Q, T, X;
				if (typeof N == "string") {
					N = this.getEl(N)
				}
				else {
					if (this._isValidCollection(N)) {
						var W = true;
						for (Q = N.length - 1; Q > -1; Q--) {
							W = (this.removeListener(N[Q], M, V) && W)
						}
						return W
					}
				}
				if (!V || !V.call) {
					return this.purgeElement(N, false, M)
				}
				if ("unload" == M) {
					for (Q = J.length - 1; Q > -1; Q--) {
						X = J[Q];
						if (X && X[0] == N && X[1] == M && X[2] == V) {
							J.splice(Q, 1);
							return true
						}
					}
					return false
				}
				var R = null;
				var S = arguments[3];
				if ("undefined" === typeof S) {
					S = this._getCacheIndex(N, M, V)
				}
				if (S >= 0) {
					R = I[S]
				}
				if (!N || !R) {
					return false
				}
				if (this.useLegacyEvent(N, M)) {
					var P = this.getLegacyIndex(N, M);
					var O = E[P];
					if (O) {
						for (Q = 0, T = O.length; Q < T; ++Q) {
							X = O[Q];
							if (X && X[this.EL] == N && X[this.TYPE] == M && X[this.FN] == V) {
								O.splice(Q, 1);
								break
							}
						}
					}
				}
				else {
					try {
						this._simpleRemove(N, M, R[this.WFN], false)
					}
					catch (U) {
						this.lastError = U;
						return false
					}
				}
				delete I[S][this.WFN];
				delete I[S][this.FN];
				I.splice(S, 1);
				return true
			},
			getTarget: function (O, N) {
				var M = O.target || O.srcElement;
				return this.resolveTextNode(M)
			},
			resolveTextNode: function (N) {
				try {
					if (N && 3 == N.nodeType) {
						return N.parentNode
					}
				}
				catch (M) {}
				return N
			},
			getPageX: function (N) {
				var M = N.pageX;
				if (!M && 0 !== M) {
					M = N.clientX || 0;
					if (this.isIE) {
						M += this._getScrollLeft()
					}
				}
				return M
			},
			getPageY: function (M) {
				var N = M.pageY;
				if (!N && 0 !== N) {
					N = M.clientY || 0;
					if (this.isIE) {
						N += this._getScrollTop()
					}
				}
				return N
			},
			getXY: function (M) {
				return [this.getPageX(M), this.getPageY(M)]
			},
			getRelatedTarget: function (N) {
				var M = N.relatedTarget;
				if (!M) {
					if (N.type == "mouseout") {
						M = N.toElement
					}
					else {
						if (N.type == "mouseover") {
							M = N.fromElement
						}
					}
				}
				return this.resolveTextNode(M)
			},
			getTime: function (O) {
				if (!O.time) {
					var N = new Date().getTime();
					try {
						O.time = N
					}
					catch (M) {
						this.lastError = M;
						return N
					}
				}
				return O.time
			},
			stopEvent: function (M) {
				this.stopPropagation(M);
				this.preventDefault(M)
			},
			stopPropagation: function (M) {
				if (M.stopPropagation) {
					M.stopPropagation()
				}
				else {
					M.cancelBubble = true
				}
			},
			preventDefault: function (M) {
				if (M.preventDefault) {
					M.preventDefault()
				}
				else {
					M.returnValue = false
				}
			},
			getEvent: function (O, M) {
				var N = O || window.event;
				if (!N) {
					var P = this.getEvent.caller;
					while (P) {
						N = P.arguments[0];
						if (N && Event == N.constructor) {
							break
						}
						P = P.caller
					}
				}
				return N
			},
			getCharCode: function (N) {
				var M = N.keyCode || N.charCode || 0;
				if (YAHOO.env.ua.webkit && (M in D)) {
					M = D[M]
				}
				return M
			},
			_getCacheIndex: function (Q, R, P) {
				for (var O = 0, N = I.length; O < N; O = O + 1) {
					var M = I[O];
					if (M && M[this.FN] == P && M[this.EL] == Q && M[this.TYPE] == R) {
						return O
					}
				}
				return -1
			},
			generateId: function (M) {
				var N = M.id;
				if (!N) {
					N = "yuievtautoid-" + A;
					++A;
					M.id = N
				}
				return N
			},
			_isValidCollection: function (N) {
				try {
					return (N && typeof N !== "string" && N.length && !N.tagName && !N.alert && typeof N[0] !== "undefined")
				}
				catch (M) {
					return false
				}
			},
			elCache: {},
			getEl: function (M) {
				return (typeof M === "string") ? document.getElementById(M) : M
			},
			clearCache: function () {},
			DOMReadyEvent: new YAHOO.util.CustomEvent("DOMReady", this),
			_load: function (N) {
				if (!H) {
					H = true;
					var M = YAHOO.util.Event;
					M._ready();
					M._tryPreloadAttach()
				}
			},
			_ready: function (N) {
				var M = YAHOO.util.Event;
				if (!M.DOMReady) {
					M.DOMReady = true;
					M.DOMReadyEvent.fire();
					M._simpleRemove(document, "DOMContentLoaded", M._ready)
				}
			},
			_tryPreloadAttach: function () {
				if (F.length === 0) {
					C = 0;
					if (this._interval) {
						clearInterval(this._interval);
						this._interval = null
					}
					return
				}
				if (this.locked) {
					return
				}
				if (this.isIE) {
					if (!this.DOMReady) {
						this.startInterval();
						return
					}
				}
				this.locked = true;
				var S = !H;
				if (!S) {
					S = (C > 0 && F.length > 0)
				}
				var R = [];
				var T = function (V, W) {
					var U = V;
					if (W.overrideContext) {
						if (W.overrideContext === true) {
							U = W.obj
						}
						else {
							U = W.overrideContext
						}
					}
					W.fn.call(U, W.obj)
				};
				var N, M, Q, P, O = [];
				for (N = 0, M = F.length; N < M; N = N + 1) {
					Q = F[N];
					if (Q) {
						P = this.getEl(Q.id);
						if (P) {
							if (Q.checkReady) {
								if (H || P.nextSibling || !S) {
									O.push(Q);
									F[N] = null
								}
							}
							else {
								T(P, Q);
								F[N] = null
							}
						}
						else {
							R.push(Q)
						}
					}
				}
				for (N = 0, M = O.length; N < M; N = N + 1) {
					Q = O[N];
					T(this.getEl(Q.id), Q)
				}
				C--;
				if (S) {
					for (N = F.length - 1; N > -1; N--) {
						Q = F[N];
						if (!Q || !Q.id) {
							F.splice(N, 1)
						}
					}
					this.startInterval()
				}
				else {
					if (this._interval) {
						clearInterval(this._interval);
						this._interval = null
					}
				}
				this.locked = false
			},
			purgeElement: function (Q, R, T) {
				var O = (YAHOO.lang.isString(Q)) ? this.getEl(Q) : Q;
				var S = this.getListeners(O, T),
					P, M;
				if (S) {
					for (P = S.length - 1; P > -1; P--) {
						var N = S[P];
						this.removeListener(O, N.type, N.fn)
					}
				}
				if (R && O && O.childNodes) {
					for (P = 0, M = O.childNodes.length; P < M; ++P) {
						this.purgeElement(O.childNodes[P], R, T)
					}
				}
			},
			getListeners: function (O, M) {
				var R = [],
					N;
				if (!M) {
					N = [I, J]
				}
				else {
					if (M === "unload") {
						N = [J]
					}
					else {
						N = [I]
					}
				}
				var T = (YAHOO.lang.isString(O)) ? this.getEl(O) : O;
				for (var Q = 0; Q < N.length; Q = Q + 1) {
					var V = N[Q];
					if (V) {
						for (var S = 0, U = V.length; S < U; ++S) {
							var P = V[S];
							if (P && P[this.EL] === T && (!M || M === P[this.TYPE])) {
								R.push({
									type: P[this.TYPE],
									fn: P[this.FN],
									obj: P[this.OBJ],
									adjust: P[this.OVERRIDE],
									scope: P[this.ADJ_SCOPE],
									index: S
								})
							}
						}
					}
				}
				return (R.length) ? R : null
			},
			_unload: function (T) {
				var N = YAHOO.util.Event,
					Q, P, O, S, R, U = J.slice(),
					M;
				for (Q = 0, S = J.length; Q < S; ++Q) {
					O = U[Q];
					if (O) {
						M = window;
						if (O[N.ADJ_SCOPE]) {
							if (O[N.ADJ_SCOPE] === true) {
								M = O[N.UNLOAD_OBJ]
							}
							else {
								M = O[N.ADJ_SCOPE]
							}
						}
						O[N.FN].call(M, N.getEvent(T, O[N.EL]), O[N.UNLOAD_OBJ]);
						U[Q] = null
					}
				}
				O = null;
				M = null;
				J = null;
				if (I) {
					for (P = I.length - 1; P > -1; P--) {
						O = I[P];
						if (O) {
							N.removeListener(O[N.EL], O[N.TYPE], O[N.FN], P)
						}
					}
					O = null
				}
				G = null;
				N._simpleRemove(window, "unload", N._unload)
			},
			_getScrollLeft: function () {
				return this._getScroll()[1]
			},
			_getScrollTop: function () {
				return this._getScroll()[0]
			},
			_getScroll: function () {
				var M = document.documentElement,
					N = document.body;
				if (M && (M.scrollTop || M.scrollLeft)) {
					return [M.scrollTop, M.scrollLeft]
				}
				else {
					if (N) {
						return [N.scrollTop, N.scrollLeft]
					}
					else {
						return [0, 0]
					}
				}
			},
			regCE: function () {},
			_simpleAdd: function () {
				if (window.addEventListener) {
					return function (O, P, N, M) {
						O.addEventListener(P, N, (M))
					}
				}
				else {
					if (window.attachEvent) {
						return function (O, P, N, M) {
							O.attachEvent("on" + P, N)
						}
					}
					else {
						return function () {}
					}
				}
			}(),
			_simpleRemove: function () {
				if (window.removeEventListener) {
					return function (O, P, N, M) {
						O.removeEventListener(P, N, (M))
					}
				}
				else {
					if (window.detachEvent) {
						return function (N, O, M) {
							N.detachEvent("on" + O, M)
						}
					}
					else {
						return function () {}
					}
				}
			}()
		}
	}();
	(function () {
		var EU = YAHOO.util.Event;
		EU.on = EU.addListener;
		EU.onFocus = EU.addFocusListener;
		EU.onBlur = EU.addBlurListener;
		if (EU.isIE) {
			YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach, YAHOO.util.Event, true);
			var n = document.createElement("p");
			EU._dri = setInterval(function () {
				try {
					n.doScroll("left");
					clearInterval(EU._dri);
					EU._dri = null;
					EU._ready();
					n = null
				}
				catch (ex) {}
			}, EU.POLL_INTERVAL)
		}
		else {
			if (EU.webkit && EU.webkit < 525) {
				EU._dri = setInterval(function () {
					var rs = document.readyState;
					if ("loaded" == rs || "complete" == rs) {
						clearInterval(EU._dri);
						EU._dri = null;
						EU._ready()
					}
				}, EU.POLL_INTERVAL)
			}
			else {
				EU._simpleAdd(document, "DOMContentLoaded", EU._ready)
			}
		}
		EU._simpleAdd(window, "load", EU._load);
		EU._simpleAdd(window, "unload", EU._unload);
		EU._tryPreloadAttach()
	})()
}
YAHOO.util.EventProvider = function () {};
YAHOO.util.EventProvider.prototype = {
	__yui_events: null,
	__yui_subscribers: null,
	subscribe: function (A, C, F, E) {
		this.__yui_events = this.__yui_events || {};
		var D = this.__yui_events[A];
		if (D) {
			D.subscribe(C, F, E)
		}
		else {
			this.__yui_subscribers = this.__yui_subscribers || {};
			var B = this.__yui_subscribers;
			if (!B[A]) {
				B[A] = []
			}
			B[A].push({
				fn: C,
				obj: F,
				overrideContext: E
			})
		}
	},
	unsubscribe: function (C, E, G) {
		this.__yui_events = this.__yui_events || {};
		var A = this.__yui_events;
		if (C) {
			var F = A[C];
			if (F) {
				return F.unsubscribe(E, G)
			}
		}
		else {
			var B = true;
			for (var D in A) {
				if (YAHOO.lang.hasOwnProperty(A, D)) {
					B = B && A[D].unsubscribe(E, G)
				}
			}
			return B
		}
		return false
	},
	unsubscribeAll: function (A) {
		return this.unsubscribe(A)
	},
	createEvent: function (G, D) {
		this.__yui_events = this.__yui_events || {};
		var A = D || {};
		var I = this.__yui_events;
		if (I[G]) {}
		else {
			var H = A.scope || this;
			var E = (A.silent);
			var B = new YAHOO.util.CustomEvent(G, H, E, YAHOO.util.CustomEvent.FLAT);
			I[G] = B;
			if (A.onSubscribeCallback) {
				B.subscribeEvent.subscribe(A.onSubscribeCallback)
			}
			this.__yui_subscribers = this.__yui_subscribers || {};
			var F = this.__yui_subscribers[G];
			if (F) {
				for (var C = 0; C < F.length; ++C) {
					B.subscribe(F[C].fn, F[C].obj, F[C].overrideContext)
				}
			}
		}
		return I[G]
	},
	fireEvent: function (E, D, A, C) {
		this.__yui_events = this.__yui_events || {};
		var G = this.__yui_events[E];
		if (!G) {
			return null
		}
		var B = [];
		for (var F = 1; F < arguments.length; ++F) {
			B.push(arguments[F])
		}
		return G.fire.apply(G, B)
	},
	hasEvent: function (A) {
		if (this.__yui_events) {
			if (this.__yui_events[A]) {
				return true
			}
		}
		return false
	}
};
(function () {
	var A = YAHOO.util.Event,
		C = YAHOO.lang;
	YAHOO.util.KeyListener = function (D, I, E, F) {
		if (!D) {}
		else {
			if (!I) {}
			else {
				if (!E) {}
			}
		}
		if (!F) {
			F = YAHOO.util.KeyListener.KEYDOWN
		}
		var G = new YAHOO.util.CustomEvent("keyPressed");
		this.enabledEvent = new YAHOO.util.CustomEvent("enabled");
		this.disabledEvent = new YAHOO.util.CustomEvent("disabled");
		if (C.isString(D)) {
			D = document.getElementById(D)
		}
		if (C.isFunction(E)) {
			G.subscribe(E)
		}
		else {
			G.subscribe(E.fn, E.scope, E.correctScope)
		}

		function H(O, N) {
			if (!I.shift) {
				I.shift = false
			}
			if (!I.alt) {
				I.alt = false
			}
			if (!I.ctrl) {
				I.ctrl = false
			}
			if (O.shiftKey == I.shift && O.altKey == I.alt && O.ctrlKey == I.ctrl) {
				var J, M = I.keys,
					L;
				if (YAHOO.lang.isArray(M)) {
					for (var K = 0; K < M.length; K++) {
						J = M[K];
						L = A.getCharCode(O);
						if (J == L) {
							G.fire(L, O);
							break
						}
					}
				}
				else {
					L = A.getCharCode(O);
					if (M == L) {
						G.fire(L, O)
					}
				}
			}
		}
		this.enable = function () {
			if (!this.enabled) {
				A.on(D, F, H);
				this.enabledEvent.fire(I)
			}
			this.enabled = true
		};
		this.disable = function () {
			if (this.enabled) {
				A.removeListener(D, F, H);
				this.disabledEvent.fire(I)
			}
			this.enabled = false
		};
		this.toString = function () {
			return "KeyListener [" + I.keys + "] " + D.tagName + (D.id ? "[" + D.id + "]" : "")
		}
	};
	var B = YAHOO.util.KeyListener;
	B.KEYDOWN = "keydown";
	B.KEYUP = "keyup";
	B.KEY = {
		ALT: 18,
		BACK_SPACE: 8,
		CAPS_LOCK: 20,
		CONTROL: 17,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		META: 224,
		NUM_LOCK: 144,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PAUSE: 19,
		PRINTSCREEN: 44,
		RIGHT: 39,
		SCROLL_LOCK: 145,
		SHIFT: 16,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
})();
YAHOO.register("event", YAHOO.util.Event, {
	version: "2.7.0",
	build: "1799"
});
(function () {
	YAHOO.env._id_counter = YAHOO.env._id_counter || 0;
	var E = YAHOO.util,
		L = YAHOO.lang,
		m = YAHOO.env.ua,
		A = YAHOO.lang.trim,
		d = {},
		h = {},
		N = /^t(?:able|d|h)$/i,
		X = /color$/i,
		K = window.document,
		W = K.documentElement,
		e = "ownerDocument",
		n = "defaultView",
		v = "documentElement",
		t = "compatMode",
		b = "offsetLeft",
		P = "offsetTop",
		u = "offsetParent",
		Z = "parentNode",
		l = "nodeType",
		C = "tagName",
		O = "scrollLeft",
		i = "scrollTop",
		Q = "getBoundingClientRect",
		w = "getComputedStyle",
		a = "currentStyle",
		M = "CSS1Compat",
		c = "BackCompat",
		g = "class",
		F = "className",
		J = "",
		B = " ",
		s = "(?:^|\\s)",
		k = "(?= |$)",
		U = "g",
		p = "position",
		f = "fixed",
		V = "relative",
		j = "left",
		o = "top",
		r = "medium",
		q = "borderLeftWidth",
		R = "borderTopWidth",
		D = m.opera,
		I = m.webkit,
		H = m.gecko,
		T = m.ie;
	E.Dom = {
		CUSTOM_ATTRIBUTES: (!W.hasAttribute) ? {
			"for": "htmlFor",
			"class": F
		} : {
			htmlFor: "for",
			className: g
		},
		get: function (y) {
			var AA, Y, z, x, G;
			if (y) {
				if (y[l] || y.item) {
					return y
				}
				if (typeof y === "string") {
					AA = y;
					y = K.getElementById(y);
					if (y && y.id === AA) {
						return y
					}
					else {
						if (y && K.all) {
							y = null;
							Y = K.all[AA];
							for (x = 0, G = Y.length; x < G; ++x) {
								if (Y[x].id === AA) {
									return Y[x]
								}
							}
						}
					}
					return y
				}
				if (y.DOM_EVENTS) {
					y = y.get("element")
				}
				if ("length" in y) {
					z = [];
					for (x = 0, G = y.length; x < G; ++x) {
						z[z.length] = E.Dom.get(y[x])
					}
					return z
				}
				return y
			}
			return null
		},
		getComputedStyle: function (G, Y) {
			if (window[w]) {
				return G[e][n][w](G, null)[Y]
			}
			else {
				if (G[a]) {
					return E.Dom.IE_ComputedStyle.get(G, Y)
				}
			}
		},
		getStyle: function (G, Y) {
			return E.Dom.batch(G, E.Dom._getStyle, Y)
		},
		_getStyle: function () {
			if (window[w]) {
				return function (G, y) {
					y = (y === "float") ? y = "cssFloat" : E.Dom._toCamel(y);
					var x = G.style[y],
						Y;
					if (!x) {
						Y = G[e][n][w](G, null);
						if (Y) {
							x = Y[y]
						}
					}
					return x
				}
			}
			else {
				if (W[a]) {
					return function (G, y) {
						var x;
						switch (y) {
						case "opacity":
							x = 100;
							try {
								x = G.filters["DXImageTransform.Microsoft.Alpha"].opacity
							}
							catch (z) {
								try {
									x = G.filters("alpha").opacity
								}
								catch (Y) {}
							}
							return x / 100;
						case "float":
							y = "styleFloat";
						default:
							y = E.Dom._toCamel(y);
							x = G[a] ? G[a][y] : null;
							return (G.style[y] || x)
						}
					}
				}
			}
		}(),
		setStyle: function (G, Y, x) {
			E.Dom.batch(G, E.Dom._setStyle, {
				prop: Y,
				val: x
			})
		},
		_setStyle: function () {
			if (T) {
				return function (Y, G) {
					var x = E.Dom._toCamel(G.prop),
						y = G.val;
					if (Y) {
						switch (x) {
						case "opacity":
							if (L.isString(Y.style.filter)) {
								Y.style.filter = "alpha(opacity=" + y * 100 + ")";
								if (!Y[a] || !Y[a].hasLayout) {
									Y.style.zoom = 1
								}
							}
							break;
						case "float":
							x = "styleFloat";
						default:
							Y.style[x] = y
						}
					}
					else {}
				}
			}
			else {
				return function (Y, G) {
					var x = E.Dom._toCamel(G.prop),
						y = G.val;
					if (Y) {
						if (x == "float") {
							x = "cssFloat"
						}
						Y.style[x] = y
					}
					else {}
				}
			}
		}(),
		getXY: function (G) {
			return E.Dom.batch(G, E.Dom._getXY)
		},
		_canPosition: function (G) {
			return (E.Dom._getStyle(G, "display") !== "none" && E.Dom._inDoc(G))
		},
		_getXY: function () {
			if (K[v][Q]) {
				return function (y) {
					var z, Y, AA, AF, AE, AD, AC, G, x, AB = Math.floor,
						AG = false;
					if (E.Dom._canPosition(y)) {
						AA = y[Q]();
						AF = y[e];
						z = E.Dom.getDocumentScrollLeft(AF);
						Y = E.Dom.getDocumentScrollTop(AF);
						AG = [AB(AA[j]), AB(AA[o])];
						if (T && m.ie < 8) {
							AE = 2;
							AD = 2;
							AC = AF[t];
							G = S(AF[v], q);
							x = S(AF[v], R);
							if (m.ie === 6) {
								if (AC !== c) {
									AE = 0;
									AD = 0
								}
							}
							if ((AC == c)) {
								if (G !== r) {
									AE = parseInt(G, 10)
								}
								if (x !== r) {
									AD = parseInt(x, 10)
								}
							}
							AG[0] -= AE;
							AG[1] -= AD
						}
						if ((Y || z)) {
							AG[0] += z;
							AG[1] += Y
						}
						AG[0] = AB(AG[0]);
						AG[1] = AB(AG[1])
					}
					else {}
					return AG
				}
			}
			else {
				return function (y) {
					var x, Y, AA, AB, AC, z = false,
						G = y;
					if (E.Dom._canPosition(y)) {
						z = [y[b], y[P]];
						x = E.Dom.getDocumentScrollLeft(y[e]);
						Y = E.Dom.getDocumentScrollTop(y[e]);
						AC = ((H || m.webkit > 519) ? true : false);
						while ((G = G[u])) {
							z[0] += G[b];
							z[1] += G[P];
							if (AC) {
								z = E.Dom._calcBorders(G, z)
							}
						}
						if (E.Dom._getStyle(y, p) !== f) {
							G = y;
							while ((G = G[Z]) && G[C]) {
								AA = G[i];
								AB = G[O];
								if (H && (E.Dom._getStyle(G, "overflow") !== "visible")) {
									z = E.Dom._calcBorders(G, z)
								}
								if (AA || AB) {
									z[0] -= AB;
									z[1] -= AA
								}
							}
							z[0] += x;
							z[1] += Y
						}
						else {
							if (D) {
								z[0] -= x;
								z[1] -= Y
							}
							else {
								if (I || H) {
									z[0] += x;
									z[1] += Y
								}
							}
						}
						z[0] = Math.floor(z[0]);
						z[1] = Math.floor(z[1])
					}
					else {}
					return z
				}
			}
		}(),
		getX: function (G) {
			var Y = function (x) {
				return E.Dom.getXY(x)[0]
			};
			return E.Dom.batch(G, Y, E.Dom, true)
		},
		getY: function (G) {
			var Y = function (x) {
				return E.Dom.getXY(x)[1]
			};
			return E.Dom.batch(G, Y, E.Dom, true)
		},
		setXY: function (G, x, Y) {
			E.Dom.batch(G, E.Dom._setXY, {
				pos: x,
				noRetry: Y
			})
		},
		_setXY: function (G, z) {
			var AA = E.Dom._getStyle(G, p),
				y = E.Dom.setStyle,
				AD = z.pos,
				Y = z.noRetry,
				AB = [parseInt(E.Dom.getComputedStyle(G, j), 10), parseInt(E.Dom.getComputedStyle(G, o), 10)],
				AC, x;
			if (AA == "static") {
				AA = V;
				y(G, p, AA)
			}
			AC = E.Dom._getXY(G);
			if (!AD || AC === false) {
				return false
			}
			if (isNaN(AB[0])) {
				AB[0] = (AA == V) ? 0 : G[b]
			}
			if (isNaN(AB[1])) {
				AB[1] = (AA == V) ? 0 : G[P]
			}
			if (AD[0] !== null) {
				y(G, j, AD[0] - AC[0] + AB[0] + "px")
			}
			if (AD[1] !== null) {
				y(G, o, AD[1] - AC[1] + AB[1] + "px")
			}
			if (!Y) {
				x = E.Dom._getXY(G);
				if ((AD[0] !== null && x[0] != AD[0]) || (AD[1] !== null && x[1] != AD[1])) {
					E.Dom._setXY(G, {
						pos: AD,
						noRetry: true
					})
				}
			}
		},
		setX: function (Y, G) {
			E.Dom.setXY(Y, [G, null])
		},
		setY: function (G, Y) {
			E.Dom.setXY(G, [null, Y])
		},
		getRegion: function (G) {
			var Y = function (x) {
				var y = false;
				if (E.Dom._canPosition(x)) {
					y = E.Region.getRegion(x)
				}
				else {}
				return y
			};
			return E.Dom.batch(G, Y, E.Dom, true)
		},
		getClientWidth: function () {
			return E.Dom.getViewportWidth()
		},
		getClientHeight: function () {
			return E.Dom.getViewportHeight()
		},
		getElementsByClassName: function (AB, AF, AC, AE, x, AD) {
			AB = L.trim(AB);
			AF = AF || "*";
			AC = (AC) ? E.Dom.get(AC) : null || K;
			if (!AC) {
				return []
			}
			var Y = [],
				G = AC.getElementsByTagName(AF),
				z = E.Dom.hasClass;
			for (var y = 0, AA = G.length; y < AA; ++y) {
				if (z(G[y], AB)) {
					Y[Y.length] = G[y]
				}
			}
			if (AE) {
				E.Dom.batch(Y, AE, x, AD)
			}
			return Y
		},
		hasClass: function (Y, G) {
			return E.Dom.batch(Y, E.Dom._hasClass, G)
		},
		_hasClass: function (x, Y) {
			var G = false,
				y;
			if (x && Y) {
				y = E.Dom.getAttribute(x, F) || J;
				if (Y.exec) {
					G = Y.test(y)
				}
				else {
					G = Y && (B + y + B).indexOf(B + Y + B) > -1
				}
			}
			else {}
			return G
		},
		addClass: function (Y, G) {
			return E.Dom.batch(Y, E.Dom._addClass, G)
		},
		_addClass: function (x, Y) {
			var G = false,
				y;
			if (x && Y) {
				y = E.Dom.getAttribute(x, F) || J;
				if (!E.Dom._hasClass(x, Y)) {
					E.Dom.setAttribute(x, F, A(y + B + Y));
					G = true
				}
			}
			else {}
			return G
		},
		removeClass: function (Y, G) {
			return E.Dom.batch(Y, E.Dom._removeClass, G)
		},
		_removeClass: function (y, x) {
			var Y = false,
				AA, z, G;
			if (y && x) {
				AA = E.Dom.getAttribute(y, F) || J;
				E.Dom.setAttribute(y, F, AA.replace(E.Dom._getClassRegex(x), J));
				z = E.Dom.getAttribute(y, F);
				if (AA !== z) {
					E.Dom.setAttribute(y, F, A(z));
					Y = true;
					if (E.Dom.getAttribute(y, F) === "") {
						G = (y.hasAttribute && y.hasAttribute(g)) ? g : F;
						y.removeAttribute(G)
					}
				}
			}
			else {}
			return Y
		},
		replaceClass: function (x, Y, G) {
			return E.Dom.batch(x, E.Dom._replaceClass, {
				from: Y,
				to: G
			})
		},
		_replaceClass: function (y, x) {
			var Y, AB, AA, G = false,
				z;
			if (y && x) {
				AB = x.from;
				AA = x.to;
				if (!AA) {
					G = false
				}
				else {
					if (!AB) {
						G = E.Dom._addClass(y, x.to)
					}
					else {
						if (AB !== AA) {
							z = E.Dom.getAttribute(y, F) || J;
							Y = (B + z.replace(E.Dom._getClassRegex(AB), B + AA)).split(E.Dom._getClassRegex(AA));
							Y.splice(1, 0, B + AA);
							E.Dom.setAttribute(y, F, A(Y.join(J)));
							G = true
						}
					}
				}
			}
			else {}
			return G
		},
		generateId: function (G, x) {
			x = x || "yui-gen";
			var Y = function (y) {
				if (y && y.id) {
					return y.id
				}
				var z = x + YAHOO.env._id_counter++;
				if (y) {
					if (y[e].getElementById(z)) {
						return E.Dom.generateId(y, z + x)
					}
					y.id = z
				}
				return z
			};
			return E.Dom.batch(G, Y, E.Dom, true) || Y.apply(E.Dom, arguments)
		},
		isAncestor: function (Y, x) {
			Y = E.Dom.get(Y);
			x = E.Dom.get(x);
			var G = false;
			if ((Y && x) && (Y[l] && x[l])) {
				if (Y.contains && Y !== x) {
					G = Y.contains(x)
				}
				else {
					if (Y.compareDocumentPosition) {
						G = !!(Y.compareDocumentPosition(x) & 16)
					}
				}
			}
			else {}
			return G
		},
		inDocument: function (G, Y) {
			return E.Dom._inDoc(E.Dom.get(G), Y)
		},
		_inDoc: function (Y, x) {
			var G = false;
			if (Y && Y[C]) {
				x = x || Y[e];
				G = E.Dom.isAncestor(x[v], Y)
			}
			else {}
			return G
		},
		getElementsBy: function (Y, AF, AB, AD, y, AC, AE) {
			AF = AF || "*";
			AB = (AB) ? E.Dom.get(AB) : null || K;
			if (!AB) {
				return []
			}
			var x = [],
				G = AB.getElementsByTagName(AF);
			for (var z = 0, AA = G.length; z < AA; ++z) {
				if (Y(G[z])) {
					if (AE) {
						x = G[z];
						break
					}
					else {
						x[x.length] = G[z]
					}
				}
			}
			if (AD) {
				E.Dom.batch(x, AD, y, AC)
			}
			return x
		},
		getElementBy: function (x, G, Y) {
			return E.Dom.getElementsBy(x, G, Y, null, null, null, true)
		},
		batch: function (x, AB, AA, z) {
			var y = [],
				Y = (z) ? AA : window;
			x = (x && (x[C] || x.item)) ? x : E.Dom.get(x);
			if (x && AB) {
				if (x[C] || x.length === undefined) {
					return AB.call(Y, x, AA)
				}
				for (var G = 0; G < x.length; ++G) {
					y[y.length] = AB.call(Y, x[G], AA)
				}
			}
			else {
				return false
			}
			return y
		},
		getDocumentHeight: function () {
			var Y = (K[t] != M || I) ? K.body.scrollHeight : W.scrollHeight,
				G = Math.max(Y, E.Dom.getViewportHeight());
			return G
		},
		getDocumentWidth: function () {
			var Y = (K[t] != M || I) ? K.body.scrollWidth : W.scrollWidth,
				G = Math.max(Y, E.Dom.getViewportWidth());
			return G
		},
		getViewportHeight: function () {
			var G = self.innerHeight,
				Y = K[t];
			if ((Y || T) && !D) {
				G = (Y == M) ? W.clientHeight : K.body.clientHeight
			}
			return G
		},
		getViewportWidth: function () {
			var G = self.innerWidth,
				Y = K[t];
			if (Y || T) {
				G = (Y == M) ? W.clientWidth : K.body.clientWidth
			}
			return G
		},
		getAncestorBy: function (G, Y) {
			while ((G = G[Z])) {
				if (E.Dom._testElement(G, Y)) {
					return G
				}
			}
			return null
		},
		getAncestorByClassName: function (Y, G) {
			Y = E.Dom.get(Y);
			if (!Y) {
				return null
			}
			var x = function (y) {
				return E.Dom.hasClass(y, G)
			};
			return E.Dom.getAncestorBy(Y, x)
		},
		getAncestorByTagName: function (Y, G) {
			Y = E.Dom.get(Y);
			if (!Y) {
				return null
			}
			var x = function (y) {
				return y[C] && y[C].toUpperCase() == G.toUpperCase()
			};
			return E.Dom.getAncestorBy(Y, x)
		},
		getPreviousSiblingBy: function (G, Y) {
			while (G) {
				G = G.previousSibling;
				if (E.Dom._testElement(G, Y)) {
					return G
				}
			}
			return null
		},
		getPreviousSibling: function (G) {
			G = E.Dom.get(G);
			if (!G) {
				return null
			}
			return E.Dom.getPreviousSiblingBy(G)
		},
		getNextSiblingBy: function (G, Y) {
			while (G) {
				G = G.nextSibling;
				if (E.Dom._testElement(G, Y)) {
					return G
				}
			}
			return null
		},
		getNextSibling: function (G) {
			G = E.Dom.get(G);
			if (!G) {
				return null
			}
			return E.Dom.getNextSiblingBy(G)
		},
		getFirstChildBy: function (G, x) {
			var Y = (E.Dom._testElement(G.firstChild, x)) ? G.firstChild : null;
			return Y || E.Dom.getNextSiblingBy(G.firstChild, x)
		},
		getFirstChild: function (G, Y) {
			G = E.Dom.get(G);
			if (!G) {
				return null
			}
			return E.Dom.getFirstChildBy(G)
		},
		getLastChildBy: function (G, x) {
			if (!G) {
				return null
			}
			var Y = (E.Dom._testElement(G.lastChild, x)) ? G.lastChild : null;
			return Y || E.Dom.getPreviousSiblingBy(G.lastChild, x)
		},
		getLastChild: function (G) {
			G = E.Dom.get(G);
			return E.Dom.getLastChildBy(G)
		},
		getChildrenBy: function (Y, y) {
			var x = E.Dom.getFirstChildBy(Y, y),
				G = x ? [x] : [];
			E.Dom.getNextSiblingBy(x, function (z) {
				if (!y || y(z)) {
					G[G.length] = z
				}
				return false
			});
			return G
		},
		getChildren: function (G) {
			G = E.Dom.get(G);
			if (!G) {}
			return E.Dom.getChildrenBy(G)
		},
		getDocumentScrollLeft: function (G) {
			G = G || K;
			return Math.max(G[v].scrollLeft, G.body.scrollLeft)
		},
		getDocumentScrollTop: function (G) {
			G = G || K;
			return Math.max(G[v].scrollTop, G.body.scrollTop)
		},
		insertBefore: function (Y, G) {
			Y = E.Dom.get(Y);
			G = E.Dom.get(G);
			if (!Y || !G || !G[Z]) {
				return null
			}
			return G[Z].insertBefore(Y, G)
		},
		insertAfter: function (Y, G) {
			Y = E.Dom.get(Y);
			G = E.Dom.get(G);
			if (!Y || !G || !G[Z]) {
				return null
			}
			if (G.nextSibling) {
				return G[Z].insertBefore(Y, G.nextSibling)
			}
			else {
				return G[Z].appendChild(Y)
			}
		},
		getClientRegion: function () {
			var x = E.Dom.getDocumentScrollTop(),
				Y = E.Dom.getDocumentScrollLeft(),
				y = E.Dom.getViewportWidth() + Y,
				G = E.Dom.getViewportHeight() + x;
			return new E.Region(x, y, G, Y)
		},
		setAttribute: function (Y, G, x) {
			G = E.Dom.CUSTOM_ATTRIBUTES[G] || G;
			Y.setAttribute(G, x)
		},
		getAttribute: function (Y, G) {
			G = E.Dom.CUSTOM_ATTRIBUTES[G] || G;
			return Y.getAttribute(G)
		},
		_toCamel: function (Y) {
			var x = d;

			function G(y, z) {
				return z.toUpperCase()
			}
			return x[Y] || (x[Y] = Y.indexOf("-") === -1 ? Y : Y.replace(/-([a-z])/gi, G))
		},
		_getClassRegex: function (Y) {
			var G;
			if (Y !== undefined) {
				if (Y.exec) {
					G = Y
				}
				else {
					G = h[Y];
					if (!G) {
						Y = Y.replace(E.Dom._patterns.CLASS_RE_TOKENS, "\\$1");
						G = h[Y] = new RegExp(s + Y + k, U)
					}
				}
			}
			return G
		},
		_patterns: {
			ROOT_TAG: /^body|html$/i,
			CLASS_RE_TOKENS: /([\.\(\)\^\$\*\+\?\|\[\]\{\}])/g
		},
		_testElement: function (G, Y) {
			return G && G[l] == 1 && (!Y || Y(G))
		},
		_calcBorders: function (x, y) {
			var Y = parseInt(E.Dom[w](x, R), 10) || 0,
				G = parseInt(E.Dom[w](x, q), 10) || 0;
			if (H) {
				if (N.test(x[C])) {
					Y = 0;
					G = 0
				}
			}
			y[0] += G;
			y[1] += Y;
			return y
		}
	};
	var S = E.Dom[w];
	if (m.opera) {
		E.Dom[w] = function (Y, G) {
			var x = S(Y, G);
			if (X.test(G)) {
				x = E.Dom.Color.toRGB(x)
			}
			return x
		}
	}
	if (m.webkit) {
		E.Dom[w] = function (Y, G) {
			var x = S(Y, G);
			if (x === "rgba(0, 0, 0, 0)") {
				x = "transparent"
			}
			return x
		}
	}
})();
YAHOO.util.Region = function (C, D, A, B) {
	this.top = C;
	this.y = C;
	this[1] = C;
	this.right = D;
	this.bottom = A;
	this.left = B;
	this.x = B;
	this[0] = B;
	this.width = this.right - this.left;
	this.height = this.bottom - this.top
};
YAHOO.util.Region.prototype.contains = function (A) {
	return (A.left >= this.left && A.right <= this.right && A.top >= this.top && A.bottom <= this.bottom)
};
YAHOO.util.Region.prototype.getArea = function () {
	return ((this.bottom - this.top) * (this.right - this.left))
};
YAHOO.util.Region.prototype.intersect = function (E) {
	var C = Math.max(this.top, E.top),
		D = Math.min(this.right, E.right),
		A = Math.min(this.bottom, E.bottom),
		B = Math.max(this.left, E.left);
	if (A >= C && D >= B) {
		return new YAHOO.util.Region(C, D, A, B)
	}
	else {
		return null
	}
};
YAHOO.util.Region.prototype.union = function (E) {
	var C = Math.min(this.top, E.top),
		D = Math.max(this.right, E.right),
		A = Math.max(this.bottom, E.bottom),
		B = Math.min(this.left, E.left);
	return new YAHOO.util.Region(C, D, A, B)
};
YAHOO.util.Region.prototype.toString = function () {
	return ("Region {top: " + this.top + ", right: " + this.right + ", bottom: " + this.bottom + ", left: " + this.left + ", height: " + this.height + ", width: " + this.width + "}")
};
YAHOO.util.Region.getRegion = function (D) {
	var F = YAHOO.util.Dom.getXY(D),
		C = F[1],
		E = F[0] + D.offsetWidth,
		A = F[1] + D.offsetHeight,
		B = F[0];
	return new YAHOO.util.Region(C, E, A, B)
};
YAHOO.util.Point = function (A, B) {
	if (YAHOO.lang.isArray(A)) {
		B = A[1];
		A = A[0]
	}
	YAHOO.util.Point.superclass.constructor.call(this, B, A, B, A)
};
YAHOO.extend(YAHOO.util.Point, YAHOO.util.Region);
(function () {
	var B = YAHOO.util,
		A = "clientTop",
		F = "clientLeft",
		J = "parentNode",
		K = "right",
		W = "hasLayout",
		I = "px",
		U = "opacity",
		L = "auto",
		D = "borderLeftWidth",
		G = "borderTopWidth",
		P = "borderRightWidth",
		V = "borderBottomWidth",
		S = "visible",
		Q = "transparent",
		N = "height",
		E = "width",
		H = "style",
		T = "currentStyle",
		R = /^width|height$/,
		O = /^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,
		M = {
			get: function (X, Z) {
				var Y = "",
					a = X[T][Z];
				if (Z === U) {
					Y = B.Dom.getStyle(X, U)
				}
				else {
					if (!a || (a.indexOf && a.indexOf(I) > -1)) {
						Y = a
					}
					else {
						if (B.Dom.IE_COMPUTED[Z]) {
							Y = B.Dom.IE_COMPUTED[Z](X, Z)
						}
						else {
							if (O.test(a)) {
								Y = B.Dom.IE.ComputedStyle.getPixel(X, Z)
							}
							else {
								Y = a
							}
						}
					}
				}
				return Y
			},
			getOffset: function (Z, e) {
				var b = Z[T][e],
					X = e.charAt(0).toUpperCase() + e.substr(1),
					c = "offset" + X,
					Y = "pixel" + X,
					a = "",
					d;
				if (b == L) {
					d = Z[c];
					if (d === undefined) {
						a = 0
					}
					a = d;
					if (R.test(e)) {
						Z[H][e] = d;
						if (Z[c] > d) {
							a = d - (Z[c] - d)
						}
						Z[H][e] = L
					}
				}
				else {
					if (!Z[H][Y] && !Z[H][e]) {
						Z[H][e] = b
					}
					a = Z[H][Y]
				}
				return a + I
			},
			getBorderWidth: function (X, Z) {
				var Y = null;
				if (!X[T][W]) {
					X[H].zoom = 1
				}
				switch (Z) {
				case G:
					Y = X[A];
					break;
				case V:
					Y = X.offsetHeight - X.clientHeight - X[A];
					break;
				case D:
					Y = X[F];
					break;
				case P:
					Y = X.offsetWidth - X.clientWidth - X[F];
					break
				}
				return Y + I
			},
			getPixel: function (Y, X) {
				var a = null,
					b = Y[T][K],
					Z = Y[T][X];
				Y[H][K] = Z;
				a = Y[H].pixelRight;
				Y[H][K] = b;
				return a + I
			},
			getMargin: function (Y, X) {
				var Z;
				if (Y[T][X] == L) {
					Z = 0 + I
				}
				else {
					Z = B.Dom.IE.ComputedStyle.getPixel(Y, X)
				}
				return Z
			},
			getVisibility: function (Y, X) {
				var Z;
				while ((Z = Y[T]) && Z[X] == "inherit") {
					Y = Y[J]
				}
				return (Z) ? Z[X] : S
			},
			getColor: function (Y, X) {
				return B.Dom.Color.toRGB(Y[T][X]) || Q
			},
			getBorderColor: function (Y, X) {
				var Z = Y[T],
					a = Z[X] || Z.color;
				return B.Dom.Color.toRGB(B.Dom.Color.toHex(a))
			}
		},
		C = {};
	C.top = C.right = C.bottom = C.left = C[E] = C[N] = M.getOffset;
	C.color = M.getColor;
	C[G] = C[P] = C[V] = C[D] = M.getBorderWidth;
	C.marginTop = C.marginRight = C.marginBottom = C.marginLeft = M.getMargin;
	C.visibility = M.getVisibility;
	C.borderColor = C.borderTopColor = C.borderRightColor = C.borderBottomColor = C.borderLeftColor = M.getBorderColor;
	B.Dom.IE_COMPUTED = C;
	B.Dom.IE_ComputedStyle = M
})();
(function () {
	var C = "toString",
		A = parseInt,
		B = RegExp,
		D = YAHOO.util;
	D.Dom.Color = {
		KEYWORDS: {
			black: "000",
			silver: "c0c0c0",
			gray: "808080",
			white: "fff",
			maroon: "800000",
			red: "f00",
			purple: "800080",
			fuchsia: "f0f",
			green: "008000",
			lime: "0f0",
			olive: "808000",
			yellow: "ff0",
			navy: "000080",
			blue: "00f",
			teal: "008080",
			aqua: "0ff"
		},
		re_RGB: /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,
		re_hex: /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,
		re_hex3: /([0-9A-F])/gi,
		toRGB: function (E) {
			if (!D.Dom.Color.re_RGB.test(E)) {
				E = D.Dom.Color.toHex(E)
			}
			if (D.Dom.Color.re_hex.exec(E)) {
				E = "rgb(" + [A(B.$1, 16), A(B.$2, 16), A(B.$3, 16)].join(", ") + ")"
			}
			return E
		},
		toHex: function (H) {
			H = D.Dom.Color.KEYWORDS[H] || H;
			if (D.Dom.Color.re_RGB.exec(H)) {
				var G = (B.$1.length === 1) ? "0" + B.$1 : Number(B.$1),
					F = (B.$2.length === 1) ? "0" + B.$2 : Number(B.$2),
					E = (B.$3.length === 1) ? "0" + B.$3 : Number(B.$3);
				H = [G[C](16), F[C](16), E[C](16)].join("")
			}
			if (H.length < 6) {
				H = H.replace(D.Dom.Color.re_hex3, "$1$1")
			}
			if (H !== "transparent" && H.indexOf("#") < 0) {
				H = "#" + H
			}
			return H.toLowerCase()
		}
	}
}());
YAHOO.register("dom", YAHOO.util.Dom, {
	version: "2.7.0",
	build: "1799"
});
YAHOO.lang.JSON = (function () {
	var l = YAHOO.lang,
		_UNICODE_EXCEPTIONS = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		_ESCAPES = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		_VALUES = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		_BRACKETS = /(?:^|:|,)(?:\s*\[)+/g,
		_INVALID = /^[\],:{}\s]*$/,
		_SPECIAL_CHARS = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		_CHARS = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		};

	function _revive(data, reviver) {
		var walk = function (o, key) {
			var k, v, value = o[key];
			if (value && typeof value === "object") {
				for (k in value) {
					if (l.hasOwnProperty(value, k)) {
						v = walk(value, k);
						if (v === undefined) {
							delete value[k]
						}
						else {
							value[k] = v
						}
					}
				}
			}
			return reviver.call(o, key, value)
		};
		return typeof reviver === "function" ? walk({
			"": data
		}, "") : data
	}

	function _char(c) {
		if (!_CHARS[c]) {
			_CHARS[c] = "\\u" + ("0000" + (+(c.charCodeAt(0))).toString(16)).slice(-4)
		}
		return _CHARS[c]
	}

	function _prepare(s) {
		return s.replace(_UNICODE_EXCEPTIONS, _char)
	}

	function _isValid(str) {
		return l.isString(str) && _INVALID.test(str.replace(_ESCAPES, "@").replace(_VALUES, "]").replace(_BRACKETS, ""))
	}

	function _string(s) {
		return '"' + s.replace(_SPECIAL_CHARS, _char) + '"'
	}

	function _stringify(h, key, d, w, pstack) {
		var o = typeof w === "function" ? w.call(h, key, h[key]) : h[key],
			i, len, j, k, v, isArray, a;
		if (o instanceof Date) {
			o = l.JSON.dateToString(o)
		}
		else {
			if (o instanceof String || o instanceof Boolean || o instanceof Number) {
				o = o.valueOf()
			}
		}
		switch (typeof o) {
		case "string":
			return _string(o);
		case "number":
			return isFinite(o) ? String(o) : "null";
		case "boolean":
			return String(o);
		case "object":
			if (o === null) {
				return "null"
			}
			for (i = pstack.length - 1; i >= 0; --i) {
				if (pstack[i] === o) {
					return "null"
				}
			}
			pstack[pstack.length] = o;
			a = [];
			isArray = l.isArray(o);
			if (d > 0) {
				if (isArray) {
					for (i = o.length - 1; i >= 0; --i) {
						a[i] = _stringify(o, i, d - 1, w, pstack) || "null"
					}
				}
				else {
					j = 0;
					if (l.isArray(w)) {
						for (i = 0, len = w.length; i < len; ++i) {
							k = w[i];
							v = _stringify(o, k, d - 1, w, pstack);
							if (v) {
								a[j++] = _string(k) + ":" + v
							}
						}
					}
					else {
						for (k in o) {
							if (typeof k === "string" && l.hasOwnProperty(o, k)) {
								v = _stringify(o, k, d - 1, w, pstack);
								if (v) {
									a[j++] = _string(k) + ":" + v
								}
							}
						}
					}
					a.sort()
				}
			}
			pstack.pop();
			return isArray ? "[" + a.join(",") + "]" : "{" + a.join(",") + "}"
		}
		return undefined
	}
	return {
		isValid: function (s) {
			return _isValid(_prepare(s))
		},
		parse: function (s, reviver) {
			s = _prepare(s);
			if (_isValid(s)) {
				return _revive(eval("(" + s + ")"), reviver)
			}
			throw new SyntaxError("parseJSON")
		},
		stringify: function (o, w, d) {
			if (o !== undefined) {
				if (l.isArray(w)) {
					w = (function (a) {
						var uniq = [],
							map = {},
							v, i, j, len;
						for (i = 0, j = 0, len = a.length; i < len; ++i) {
							v = a[i];
							if (typeof v === "string" && map[v] === undefined) {
								uniq[(map[v] = j++)] = v
							}
						}
						return uniq
					})(w)
				}
				d = d >= 0 ? d : 1 / 0;
				return _stringify({
					"": o
				}, "", d, w, [])
			}
			return undefined
		},
		dateToString: function (d) {
			function _zeroPad(v) {
				return v < 10 ? "0" + v : v
			}
			return d.getUTCFullYear() + "-" + _zeroPad(d.getUTCMonth() + 1) + "-" + _zeroPad(d.getUTCDate()) + "T" + _zeroPad(d.getUTCHours()) + ":" + _zeroPad(d.getUTCMinutes()) + ":" + _zeroPad(d.getUTCSeconds()) + "Z"
		},
		stringToDate: function (str) {
			if (/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/.test(str)) {
				var d = new Date();
				d.setUTCFullYear(RegExp.$1, (RegExp.$2 | 0) - 1, RegExp.$3);
				d.setUTCHours(RegExp.$4, RegExp.$5, RegExp.$6);
				return d
			}
			return str
		}
	}
})();
YAHOO.register("json", YAHOO.lang.JSON, {
	version: "2.7.0",
	build: "1799"
});
(function () {
	YAHOO.util.Config = function (D) {
		if (D) {
			this.init(D)
		}
	};
	var B = YAHOO.lang,
		C = YAHOO.util.CustomEvent,
		A = YAHOO.util.Config;
	A.CONFIG_CHANGED_EVENT = "configChanged";
	A.BOOLEAN_TYPE = "boolean";
	A.prototype = {
		owner: null,
		queueInProgress: false,
		config: null,
		initialConfig: null,
		eventQueue: null,
		configChangedEvent: null,
		init: function (D) {
			this.owner = D;
			this.configChangedEvent = this.createEvent(A.CONFIG_CHANGED_EVENT);
			this.configChangedEvent.signature = C.LIST;
			this.queueInProgress = false;
			this.config = {};
			this.initialConfig = {};
			this.eventQueue = []
		},
		checkBoolean: function (D) {
			return (typeof D == A.BOOLEAN_TYPE)
		},
		checkNumber: function (D) {
			return (!isNaN(D))
		},
		fireEvent: function (D, F) {
			var E = this.config[D];
			if (E && E.event) {
				E.event.fire(F)
			}
		},
		addProperty: function (E, D) {
			E = E.toLowerCase();
			this.config[E] = D;
			D.event = this.createEvent(E, {
				scope: this.owner
			});
			D.event.signature = C.LIST;
			D.key = E;
			if (D.handler) {
				D.event.subscribe(D.handler, this.owner)
			}
			this.setProperty(E, D.value, true);
			if (!D.suppressEvent) {
				this.queueProperty(E, D.value)
			}
		},
		getConfig: function () {
			var D = {},
				F = this.config,
				G, E;
			for (G in F) {
				if (B.hasOwnProperty(F, G)) {
					E = F[G];
					if (E && E.event) {
						D[G] = E.value
					}
				}
			}
			return D
		},
		getProperty: function (D) {
			var E = this.config[D.toLowerCase()];
			if (E && E.event) {
				return E.value
			}
			else {
				return undefined
			}
		},
		resetProperty: function (D) {
			D = D.toLowerCase();
			var E = this.config[D];
			if (E && E.event) {
				if (this.initialConfig[D] && !B.isUndefined(this.initialConfig[D])) {
					this.setProperty(D, this.initialConfig[D]);
					return true
				}
			}
			else {
				return false
			}
		},
		setProperty: function (E, G, D) {
			var F;
			E = E.toLowerCase();
			if (this.queueInProgress && !D) {
				this.queueProperty(E, G);
				return true
			}
			else {
				F = this.config[E];
				if (F && F.event) {
					if (F.validator && !F.validator(G)) {
						return false
					}
					else {
						F.value = G;
						if (!D) {
							this.fireEvent(E, G);
							this.configChangedEvent.fire([E, G])
						}
						return true
					}
				}
				else {
					return false
				}
			}
		},
		queueProperty: function (S, P) {
			S = S.toLowerCase();
			var R = this.config[S],
				K = false,
				J, G, H, I, O, Q, F, M, N, D, L, T, E;
			if (R && R.event) {
				if (!B.isUndefined(P) && R.validator && !R.validator(P)) {
					return false
				}
				else {
					if (!B.isUndefined(P)) {
						R.value = P
					}
					else {
						P = R.value
					}
					K = false;
					J = this.eventQueue.length;
					for (L = 0; L < J; L++) {
						G = this.eventQueue[L];
						if (G) {
							H = G[0];
							I = G[1];
							if (H == S) {
								this.eventQueue[L] = null;
								this.eventQueue.push([S, (!B.isUndefined(P) ? P : I)]);
								K = true;
								break
							}
						}
					}
					if (!K && !B.isUndefined(P)) {
						this.eventQueue.push([S, P])
					}
				}
				if (R.supercedes) {
					O = R.supercedes.length;
					for (T = 0; T < O; T++) {
						Q = R.supercedes[T];
						F = this.eventQueue.length;
						for (E = 0; E < F; E++) {
							M = this.eventQueue[E];
							if (M) {
								N = M[0];
								D = M[1];
								if (N == Q.toLowerCase()) {
									this.eventQueue.push([N, D]);
									this.eventQueue[E] = null;
									break
								}
							}
						}
					}
				}
				return true
			}
			else {
				return false
			}
		},
		refireEvent: function (D) {
			D = D.toLowerCase();
			var E = this.config[D];
			if (E && E.event && !B.isUndefined(E.value)) {
				if (this.queueInProgress) {
					this.queueProperty(D)
				}
				else {
					this.fireEvent(D, E.value)
				}
			}
		},
		applyConfig: function (D, G) {
			var F, E;
			if (G) {
				E = {};
				for (F in D) {
					if (B.hasOwnProperty(D, F)) {
						E[F.toLowerCase()] = D[F]
					}
				}
				this.initialConfig = E
			}
			for (F in D) {
				if (B.hasOwnProperty(D, F)) {
					this.queueProperty(F, D[F])
				}
			}
		},
		refresh: function () {
			var D;
			for (D in this.config) {
				if (B.hasOwnProperty(this.config, D)) {
					this.refireEvent(D)
				}
			}
		},
		fireQueue: function () {
			var E, H, D, G, F;
			this.queueInProgress = true;
			for (E = 0; E < this.eventQueue.length; E++) {
				H = this.eventQueue[E];
				if (H) {
					D = H[0];
					G = H[1];
					F = this.config[D];
					F.value = G;
					this.eventQueue[E] = null;
					this.fireEvent(D, G)
				}
			}
			this.queueInProgress = false;
			this.eventQueue = []
		},
		subscribeToConfigEvent: function (E, F, H, D) {
			var G = this.config[E.toLowerCase()];
			if (G && G.event) {
				if (!A.alreadySubscribed(G.event, F, H)) {
					G.event.subscribe(F, H, D)
				}
				return true
			}
			else {
				return false
			}
		},
		unsubscribeFromConfigEvent: function (D, E, G) {
			var F = this.config[D.toLowerCase()];
			if (F && F.event) {
				return F.event.unsubscribe(E, G)
			}
			else {
				return false
			}
		},
		toString: function () {
			var D = "Config";
			if (this.owner) {
				D += " [" + this.owner.toString() + "]"
			}
			return D
		},
		outputEventQueue: function () {
			var D = "",
				G, E, F = this.eventQueue.length;
			for (E = 0; E < F; E++) {
				G = this.eventQueue[E];
				if (G) {
					D += G[0] + "=" + G[1] + ", "
				}
			}
			return D
		},
		destroy: function () {
			var E = this.config,
				D, F;
			for (D in E) {
				if (B.hasOwnProperty(E, D)) {
					F = E[D];
					F.event.unsubscribeAll();
					F.event = null
				}
			}
			this.configChangedEvent.unsubscribeAll();
			this.configChangedEvent = null;
			this.owner = null;
			this.config = null;
			this.initialConfig = null;
			this.eventQueue = null
		}
	};
	A.alreadySubscribed = function (E, H, I) {
		var F = E.subscribers.length,
			D, G;
		if (F > 0) {
			G = F - 1;
			do {
				D = E.subscribers[G];
				if (D && D.obj == I && D.fn == H) {
					return true
				}
			} while (G--)
		}
		return false
	};
	YAHOO.lang.augmentProto(A, YAHOO.util.EventProvider)
}());
(function () {
	YAHOO.widget.Module = function (R, Q) {
		if (R) {
			this.init(R, Q)
		}
		else {}
	};
	var F = YAHOO.util.Dom,
		D = YAHOO.util.Config,
		N = YAHOO.util.Event,
		M = YAHOO.util.CustomEvent,
		G = YAHOO.widget.Module,
		I = YAHOO.env.ua,
		H, P, O, E, A = {
			BEFORE_INIT: "beforeInit",
			INIT: "init",
			APPEND: "append",
			BEFORE_RENDER: "beforeRender",
			RENDER: "render",
			CHANGE_HEADER: "changeHeader",
			CHANGE_BODY: "changeBody",
			CHANGE_FOOTER: "changeFooter",
			CHANGE_CONTENT: "changeContent",
			DESTORY: "destroy",
			BEFORE_SHOW: "beforeShow",
			SHOW: "show",
			BEFORE_HIDE: "beforeHide",
			HIDE: "hide"
		},
		J = {
			VISIBLE: {
				key: "visible",
				value: true,
				validator: YAHOO.lang.isBoolean
			},
			EFFECT: {
				key: "effect",
				suppressEvent: true,
				supercedes: ["visible"]
			},
			MONITOR_RESIZE: {
				key: "monitorresize",
				value: true
			},
			APPEND_TO_DOCUMENT_BODY: {
				key: "appendtodocumentbody",
				value: false
			}
		};
	G.IMG_ROOT = null;
	G.IMG_ROOT_SSL = null;
	G.CSS_MODULE = "yui-module";
	G.CSS_HEADER = "hd";
	G.CSS_BODY = "bd";
	G.CSS_FOOTER = "ft";
	G.RESIZE_MONITOR_SECURE_URL = "javascript:false;";
	G.RESIZE_MONITOR_BUFFER = 1;
	G.textResizeEvent = new M("textResize");
	G.forceDocumentRedraw = function () {
		var Q = document.documentElement;
		if (Q) {
			Q.className += " ";
			Q.className = YAHOO.lang.trim(Q.className)
		}
	};

	function L() {
		if (!H) {
			H = document.createElement("div");
			H.innerHTML = ('<div class="' + G.CSS_HEADER + '"></div><div class="' + G.CSS_BODY + '"></div><div class="' + G.CSS_FOOTER + '"></div>');
			P = H.firstChild;
			O = P.nextSibling;
			E = O.nextSibling
		}
		return H
	}

	function K() {
		if (!P) {
			L()
		}
		return (P.cloneNode(false))
	}

	function B() {
		if (!O) {
			L()
		}
		return (O.cloneNode(false))
	}

	function C() {
		if (!E) {
			L()
		}
		return (E.cloneNode(false))
	}
	G.prototype = {
		constructor: G,
		element: null,
		header: null,
		body: null,
		footer: null,
		id: null,
		imageRoot: G.IMG_ROOT,
		initEvents: function () {
			var Q = M.LIST;
			this.beforeInitEvent = this.createEvent(A.BEFORE_INIT);
			this.beforeInitEvent.signature = Q;
			this.initEvent = this.createEvent(A.INIT);
			this.initEvent.signature = Q;
			this.appendEvent = this.createEvent(A.APPEND);
			this.appendEvent.signature = Q;
			this.beforeRenderEvent = this.createEvent(A.BEFORE_RENDER);
			this.beforeRenderEvent.signature = Q;
			this.renderEvent = this.createEvent(A.RENDER);
			this.renderEvent.signature = Q;
			this.changeHeaderEvent = this.createEvent(A.CHANGE_HEADER);
			this.changeHeaderEvent.signature = Q;
			this.changeBodyEvent = this.createEvent(A.CHANGE_BODY);
			this.changeBodyEvent.signature = Q;
			this.changeFooterEvent = this.createEvent(A.CHANGE_FOOTER);
			this.changeFooterEvent.signature = Q;
			this.changeContentEvent = this.createEvent(A.CHANGE_CONTENT);
			this.changeContentEvent.signature = Q;
			this.destroyEvent = this.createEvent(A.DESTORY);
			this.destroyEvent.signature = Q;
			this.beforeShowEvent = this.createEvent(A.BEFORE_SHOW);
			this.beforeShowEvent.signature = Q;
			this.showEvent = this.createEvent(A.SHOW);
			this.showEvent.signature = Q;
			this.beforeHideEvent = this.createEvent(A.BEFORE_HIDE);
			this.beforeHideEvent.signature = Q;
			this.hideEvent = this.createEvent(A.HIDE);
			this.hideEvent.signature = Q
		},
		platform: function () {
			var Q = navigator.userAgent.toLowerCase();
			if (Q.indexOf("windows") != -1 || Q.indexOf("win32") != -1) {
				return "windows"
			}
			else {
				if (Q.indexOf("macintosh") != -1) {
					return "mac"
				}
				else {
					return false
				}
			}
		}(),
		browser: function () {
			var Q = navigator.userAgent.toLowerCase();
			if (Q.indexOf("opera") != -1) {
				return "opera"
			}
			else {
				if (Q.indexOf("msie 7") != -1) {
					return "ie7"
				}
				else {
					if (Q.indexOf("msie") != -1) {
						return "ie"
					}
					else {
						if (Q.indexOf("safari") != -1) {
							return "safari"
						}
						else {
							if (Q.indexOf("gecko") != -1) {
								return "gecko"
							}
							else {
								return false
							}
						}
					}
				}
			}
		}(),
		isSecure: function () {
			if (window.location.href.toLowerCase().indexOf("https") === 0) {
				return true
			}
			else {
				return false
			}
		}(),
		initDefaultConfig: function () {
			this.cfg.addProperty(J.VISIBLE.key, {
				handler: this.configVisible,
				value: J.VISIBLE.value,
				validator: J.VISIBLE.validator
			});
			this.cfg.addProperty(J.EFFECT.key, {
				suppressEvent: J.EFFECT.suppressEvent,
				supercedes: J.EFFECT.supercedes
			});
			this.cfg.addProperty(J.MONITOR_RESIZE.key, {
				handler: this.configMonitorResize,
				value: J.MONITOR_RESIZE.value
			});
			this.cfg.addProperty(J.APPEND_TO_DOCUMENT_BODY.key, {
				value: J.APPEND_TO_DOCUMENT_BODY.value
			})
		},
		init: function (V, U) {
			var S, W;
			this.initEvents();
			this.beforeInitEvent.fire(G);
			this.cfg = new D(this);
			if (this.isSecure) {
				this.imageRoot = G.IMG_ROOT_SSL
			}
			if (typeof V == "string") {
				S = V;
				V = document.getElementById(V);
				if (!V) {
					V = (L()).cloneNode(false);
					V.id = S
				}
			}
			this.id = F.generateId(V);
			this.element = V;
			W = this.element.firstChild;
			if (W) {
				var R = false,
					Q = false,
					T = false;
				do {
					if (1 == W.nodeType) {
						if (!R && F.hasClass(W, G.CSS_HEADER)) {
							this.header = W;
							R = true
						}
						else {
							if (!Q && F.hasClass(W, G.CSS_BODY)) {
								this.body = W;
								Q = true
							}
							else {
								if (!T && F.hasClass(W, G.CSS_FOOTER)) {
									this.footer = W;
									T = true
								}
							}
						}
					}
				} while ((W = W.nextSibling))
			}
			this.initDefaultConfig();
			F.addClass(this.element, G.CSS_MODULE);
			if (U) {
				this.cfg.applyConfig(U, true)
			}
			if (!D.alreadySubscribed(this.renderEvent, this.cfg.fireQueue, this.cfg)) {
				this.renderEvent.subscribe(this.cfg.fireQueue, this.cfg, true)
			}
			this.initEvent.fire(G)
		},
		initResizeMonitor: function () {
			var R = (I.gecko && this.platform == "windows");
			if (R) {
				var Q = this;
				setTimeout(function () {
					Q._initResizeMonitor()
				}, 0)
			}
			else {
				this._initResizeMonitor()
			}
		},
		_initResizeMonitor: function () {
			var Q, S, U;

			function W() {
				G.textResizeEvent.fire()
			}
			if (!I.opera) {
				S = F.get("_yuiResizeMonitor");
				var V = this._supportsCWResize();
				if (!S) {
					S = document.createElement("iframe");
					if (this.isSecure && G.RESIZE_MONITOR_SECURE_URL && I.ie) {
						S.src = G.RESIZE_MONITOR_SECURE_URL
					}
					if (!V) {
						U = ["<html><head><script ", 'type="text/javascript">', "window.onresize=function(){window.parent.", "YAHOO.widget.Module.textResizeEvent.", "fire();};<", "/script></head>", "<body></body></html>"].join("");
						S.src = "data:text/html;charset=utf-8," + encodeURIComponent(U)
					}
					S.id = "_yuiResizeMonitor";
					S.title = "Text Resize Monitor";
					S.style.position = "absolute";
					S.style.visibility = "hidden";
					var R = document.body,
						T = R.firstChild;
					if (T) {
						R.insertBefore(S, T)
					}
					else {
						R.appendChild(S)
					}
					S.style.width = "2em";
					S.style.height = "2em";
					S.style.top = (-1 * (S.offsetHeight + G.RESIZE_MONITOR_BUFFER)) + "px";
					S.style.left = "0";
					S.style.borderWidth = "0";
					S.style.visibility = "visible";
					if (I.webkit) {
						Q = S.contentWindow.document;
						Q.open();
						Q.close()
					}
				}
				if (S && S.contentWindow) {
					G.textResizeEvent.subscribe(this.onDomResize, this, true);
					if (!G.textResizeInitialized) {
						if (V) {
							if (!N.on(S.contentWindow, "resize", W)) {
								N.on(S, "resize", W)
							}
						}
						G.textResizeInitialized = true
					}
					this.resizeMonitor = S
				}
			}
		},
		_supportsCWResize: function () {
			var Q = true;
			if (I.gecko && I.gecko <= 1.8) {
				Q = false
			}
			return Q
		},
		onDomResize: function (S, R) {
			var Q = -1 * (this.resizeMonitor.offsetHeight + G.RESIZE_MONITOR_BUFFER);
			this.resizeMonitor.style.top = Q + "px";
			this.resizeMonitor.style.left = "0"
		},
		setHeader: function (R) {
			var Q = this.header || (this.header = K());
			if (R.nodeName) {
				Q.innerHTML = "";
				Q.appendChild(R)
			}
			else {
				Q.innerHTML = R
			}
			this.changeHeaderEvent.fire(R);
			this.changeContentEvent.fire()
		},
		appendToHeader: function (R) {
			var Q = this.header || (this.header = K());
			Q.appendChild(R);
			this.changeHeaderEvent.fire(R);
			this.changeContentEvent.fire()
		},
		setBody: function (R) {
			var Q = this.body || (this.body = B());
			if (R.nodeName) {
				Q.innerHTML = "";
				Q.appendChild(R)
			}
			else {
				Q.innerHTML = R
			}
			this.changeBodyEvent.fire(R);
			this.changeContentEvent.fire()
		},
		appendToBody: function (R) {
			var Q = this.body || (this.body = B());
			Q.appendChild(R);
			this.changeBodyEvent.fire(R);
			this.changeContentEvent.fire()
		},
		setFooter: function (R) {
			var Q = this.footer || (this.footer = C());
			if (R.nodeName) {
				Q.innerHTML = "";
				Q.appendChild(R)
			}
			else {
				Q.innerHTML = R
			}
			this.changeFooterEvent.fire(R);
			this.changeContentEvent.fire()
		},
		appendToFooter: function (R) {
			var Q = this.footer || (this.footer = C());
			Q.appendChild(R);
			this.changeFooterEvent.fire(R);
			this.changeContentEvent.fire()
		},
		render: function (S, Q) {
			var T = this,
				U;

			function R(V) {
				if (typeof V == "string") {
					V = document.getElementById(V)
				}
				if (V) {
					T._addToParent(V, T.element);
					T.appendEvent.fire()
				}
			}
			this.beforeRenderEvent.fire();
			if (!Q) {
				Q = this.element
			}
			if (S) {
				R(S)
			}
			else {
				if (!F.inDocument(this.element)) {
					return false
				}
			}
			if (this.header && !F.inDocument(this.header)) {
				U = Q.firstChild;
				if (U) {
					Q.insertBefore(this.header, U)
				}
				else {
					Q.appendChild(this.header)
				}
			}
			if (this.body && !F.inDocument(this.body)) {
				if (this.footer && F.isAncestor(this.moduleElement, this.footer)) {
					Q.insertBefore(this.body, this.footer)
				}
				else {
					Q.appendChild(this.body)
				}
			}
			if (this.footer && !F.inDocument(this.footer)) {
				Q.appendChild(this.footer)
			}
			this.renderEvent.fire();
			return true
		},
		destroy: function () {
			var Q;
			if (this.element) {
				N.purgeElement(this.element, true);
				Q = this.element.parentNode
			}
			if (Q) {
				Q.removeChild(this.element)
			}
			this.element = null;
			this.header = null;
			this.body = null;
			this.footer = null;
			G.textResizeEvent.unsubscribe(this.onDomResize, this);
			this.cfg.destroy();
			this.cfg = null;
			this.destroyEvent.fire()
		},
		show: function () {
			this.cfg.setProperty("visible", true)
		},
		hide: function () {
			this.cfg.setProperty("visible", false)
		},
		configVisible: function (R, Q, S) {
			var T = Q[0];
			if (T) {
				this.beforeShowEvent.fire();
				F.setStyle(this.element, "display", "block");
				this.showEvent.fire()
			}
			else {
				this.beforeHideEvent.fire();
				F.setStyle(this.element, "display", "none");
				this.hideEvent.fire()
			}
		},
		configMonitorResize: function (S, R, T) {
			var Q = R[0];
			if (Q) {
				this.initResizeMonitor()
			}
			else {
				G.textResizeEvent.unsubscribe(this.onDomResize, this, true);
				this.resizeMonitor = null
			}
		},
		_addToParent: function (Q, R) {
			if (!this.cfg.getProperty("appendtodocumentbody") && Q === document.body && Q.firstChild) {
				Q.insertBefore(R, Q.firstChild)
			}
			else {
				Q.appendChild(R)
			}
		},
		toString: function () {
			return "Module " + this.id
		}
	};
	YAHOO.lang.augmentProto(G, YAHOO.util.EventProvider)
}());
(function () {
	YAHOO.widget.Overlay = function (P, O) {
		YAHOO.widget.Overlay.superclass.constructor.call(this, P, O)
	};
	var I = YAHOO.lang,
		M = YAHOO.util.CustomEvent,
		G = YAHOO.widget.Module,
		N = YAHOO.util.Event,
		F = YAHOO.util.Dom,
		D = YAHOO.util.Config,
		K = YAHOO.env.ua,
		B = YAHOO.widget.Overlay,
		H = "subscribe",
		E = "unsubscribe",
		C = "contained",
		J, A = {
			BEFORE_MOVE: "beforeMove",
			MOVE: "move"
		},
		L = {
			X: {
				key: "x",
				validator: I.isNumber,
				suppressEvent: true,
				supercedes: ["iframe"]
			},
			Y: {
				key: "y",
				validator: I.isNumber,
				suppressEvent: true,
				supercedes: ["iframe"]
			},
			XY: {
				key: "xy",
				suppressEvent: true,
				supercedes: ["iframe"]
			},
			CONTEXT: {
				key: "context",
				suppressEvent: true,
				supercedes: ["iframe"]
			},
			FIXED_CENTER: {
				key: "fixedcenter",
				value: false,
				supercedes: ["iframe", "visible"]
			},
			WIDTH: {
				key: "width",
				suppressEvent: true,
				supercedes: ["context", "fixedcenter", "iframe"]
			},
			HEIGHT: {
				key: "height",
				suppressEvent: true,
				supercedes: ["context", "fixedcenter", "iframe"]
			},
			AUTO_FILL_HEIGHT: {
				key: "autofillheight",
				supercedes: ["height"],
				value: "body"
			},
			ZINDEX: {
				key: "zindex",
				value: null
			},
			CONSTRAIN_TO_VIEWPORT: {
				key: "constraintoviewport",
				value: false,
				validator: I.isBoolean,
				supercedes: ["iframe", "x", "y", "xy"]
			},
			IFRAME: {
				key: "iframe",
				value: (K.ie == 6 ? true : false),
				validator: I.isBoolean,
				supercedes: ["zindex"]
			},
			PREVENT_CONTEXT_OVERLAP: {
				key: "preventcontextoverlap",
				value: false,
				validator: I.isBoolean,
				supercedes: ["constraintoviewport"]
			}
		};
	B.IFRAME_SRC = "javascript:false;";
	B.IFRAME_OFFSET = 3;
	B.VIEWPORT_OFFSET = 10;
	B.TOP_LEFT = "tl";
	B.TOP_RIGHT = "tr";
	B.BOTTOM_LEFT = "bl";
	B.BOTTOM_RIGHT = "br";
	B.CSS_OVERLAY = "yui-overlay";
	B.STD_MOD_RE = /^\s*?(body|footer|header)\s*?$/i;
	B.windowScrollEvent = new M("windowScroll");
	B.windowResizeEvent = new M("windowResize");
	B.windowScrollHandler = function (P) {
		var O = N.getTarget(P);
		if (!O || O === window || O === window.document) {
			if (K.ie) {
				if (!window.scrollEnd) {
					window.scrollEnd = -1
				}
				clearTimeout(window.scrollEnd);
				window.scrollEnd = setTimeout(function () {
					B.windowScrollEvent.fire()
				}, 1)
			}
			else {
				B.windowScrollEvent.fire()
			}
		}
	};
	B.windowResizeHandler = function (O) {
		if (K.ie) {
			if (!window.resizeEnd) {
				window.resizeEnd = -1
			}
			clearTimeout(window.resizeEnd);
			window.resizeEnd = setTimeout(function () {
				B.windowResizeEvent.fire()
			}, 100)
		}
		else {
			B.windowResizeEvent.fire()
		}
	};
	B._initialized = null;
	if (B._initialized === null) {
		N.on(window, "scroll", B.windowScrollHandler);
		N.on(window, "resize", B.windowResizeHandler);
		B._initialized = true
	}
	B._TRIGGER_MAP = {
		windowScroll: B.windowScrollEvent,
		windowResize: B.windowResizeEvent,
		textResize: G.textResizeEvent
	};
	YAHOO.extend(B, G, {
		CONTEXT_TRIGGERS: [],
		init: function (P, O) {
			B.superclass.init.call(this, P);
			this.beforeInitEvent.fire(B);
			F.addClass(this.element, B.CSS_OVERLAY);
			if (O) {
				this.cfg.applyConfig(O, true)
			}
			if (this.platform == "mac" && K.gecko) {
				if (!D.alreadySubscribed(this.showEvent, this.showMacGeckoScrollbars, this)) {
					this.showEvent.subscribe(this.showMacGeckoScrollbars, this, true)
				}
				if (!D.alreadySubscribed(this.hideEvent, this.hideMacGeckoScrollbars, this)) {
					this.hideEvent.subscribe(this.hideMacGeckoScrollbars, this, true)
				}
			}
			this.initEvent.fire(B)
		},
		initEvents: function () {
			B.superclass.initEvents.call(this);
			var O = M.LIST;
			this.beforeMoveEvent = this.createEvent(A.BEFORE_MOVE);
			this.beforeMoveEvent.signature = O;
			this.moveEvent = this.createEvent(A.MOVE);
			this.moveEvent.signature = O
		},
		initDefaultConfig: function () {
			B.superclass.initDefaultConfig.call(this);
			var O = this.cfg;
			O.addProperty(L.X.key, {
				handler: this.configX,
				validator: L.X.validator,
				suppressEvent: L.X.suppressEvent,
				supercedes: L.X.supercedes
			});
			O.addProperty(L.Y.key, {
				handler: this.configY,
				validator: L.Y.validator,
				suppressEvent: L.Y.suppressEvent,
				supercedes: L.Y.supercedes
			});
			O.addProperty(L.XY.key, {
				handler: this.configXY,
				suppressEvent: L.XY.suppressEvent,
				supercedes: L.XY.supercedes
			});
			O.addProperty(L.CONTEXT.key, {
				handler: this.configContext,
				suppressEvent: L.CONTEXT.suppressEvent,
				supercedes: L.CONTEXT.supercedes
			});
			O.addProperty(L.FIXED_CENTER.key, {
				handler: this.configFixedCenter,
				value: L.FIXED_CENTER.value,
				validator: L.FIXED_CENTER.validator,
				supercedes: L.FIXED_CENTER.supercedes
			});
			O.addProperty(L.WIDTH.key, {
				handler: this.configWidth,
				suppressEvent: L.WIDTH.suppressEvent,
				supercedes: L.WIDTH.supercedes
			});
			O.addProperty(L.HEIGHT.key, {
				handler: this.configHeight,
				suppressEvent: L.HEIGHT.suppressEvent,
				supercedes: L.HEIGHT.supercedes
			});
			O.addProperty(L.AUTO_FILL_HEIGHT.key, {
				handler: this.configAutoFillHeight,
				value: L.AUTO_FILL_HEIGHT.value,
				validator: this._validateAutoFill,
				supercedes: L.AUTO_FILL_HEIGHT.supercedes
			});
			O.addProperty(L.ZINDEX.key, {
				handler: this.configzIndex,
				value: L.ZINDEX.value
			});
			O.addProperty(L.CONSTRAIN_TO_VIEWPORT.key, {
				handler: this.configConstrainToViewport,
				value: L.CONSTRAIN_TO_VIEWPORT.value,
				validator: L.CONSTRAIN_TO_VIEWPORT.validator,
				supercedes: L.CONSTRAIN_TO_VIEWPORT.supercedes
			});
			O.addProperty(L.IFRAME.key, {
				handler: this.configIframe,
				value: L.IFRAME.value,
				validator: L.IFRAME.validator,
				supercedes: L.IFRAME.supercedes
			});
			O.addProperty(L.PREVENT_CONTEXT_OVERLAP.key, {
				value: L.PREVENT_CONTEXT_OVERLAP.value,
				validator: L.PREVENT_CONTEXT_OVERLAP.validator,
				supercedes: L.PREVENT_CONTEXT_OVERLAP.supercedes
			})
		},
		moveTo: function (O, P) {
			this.cfg.setProperty("xy", [O, P])
		},
		hideMacGeckoScrollbars: function () {
			F.replaceClass(this.element, "show-scrollbars", "hide-scrollbars")
		},
		showMacGeckoScrollbars: function () {
			F.replaceClass(this.element, "hide-scrollbars", "show-scrollbars")
		},
		_setDomVisibility: function (O) {
			F.setStyle(this.element, "visibility", (O) ? "visible" : "hidden");
			if (O) {
				F.removeClass(this.element, "yui-overlay-hidden")
			}
			else {
				F.addClass(this.element, "yui-overlay-hidden")
			}
		},
		configVisible: function (R, O, X) {
			var Q = O[0],
				S = F.getStyle(this.element, "visibility"),
				Y = this.cfg.getProperty("effect"),
				V = [],
				U = (this.platform == "mac" && K.gecko),
				g = D.alreadySubscribed,
				W, P, f, c, b, a, d, Z, T;
			if (S == "inherit") {
				f = this.element.parentNode;
				while (f.nodeType != 9 && f.nodeType != 11) {
					S = F.getStyle(f, "visibility");
					if (S != "inherit") {
						break
					}
					f = f.parentNode
				}
				if (S == "inherit") {
					S = "visible"
				}
			}
			if (Y) {
				if (Y instanceof Array) {
					Z = Y.length;
					for (c = 0; c < Z; c++) {
						W = Y[c];
						V[V.length] = W.effect(this, W.duration)
					}
				}
				else {
					V[V.length] = Y.effect(this, Y.duration)
				}
			}
			if (Q) {
				if (U) {
					this.showMacGeckoScrollbars()
				}
				if (Y) {
					if (Q) {
						if (S != "visible" || S === "") {
							this.beforeShowEvent.fire();
							T = V.length;
							for (b = 0; b < T; b++) {
								P = V[b];
								if (b === 0 && !g(P.animateInCompleteEvent, this.showEvent.fire, this.showEvent)) {
									P.animateInCompleteEvent.subscribe(this.showEvent.fire, this.showEvent, true)
								}
								P.animateIn()
							}
						}
					}
				}
				else {
					if (S != "visible" || S === "") {
						this.beforeShowEvent.fire();
						this._setDomVisibility(true);
						this.cfg.refireEvent("iframe");
						this.showEvent.fire()
					}
					else {
						this._setDomVisibility(true)
					}
				}
			}
			else {
				if (U) {
					this.hideMacGeckoScrollbars()
				}
				if (Y) {
					if (S == "visible") {
						this.beforeHideEvent.fire();
						T = V.length;
						for (a = 0; a < T; a++) {
							d = V[a];
							if (a === 0 && !g(d.animateOutCompleteEvent, this.hideEvent.fire, this.hideEvent)) {
								d.animateOutCompleteEvent.subscribe(this.hideEvent.fire, this.hideEvent, true)
							}
							d.animateOut()
						}
					}
					else {
						if (S === "") {
							this._setDomVisibility(false)
						}
					}
				}
				else {
					if (S == "visible" || S === "") {
						this.beforeHideEvent.fire();
						this._setDomVisibility(false);
						this.hideEvent.fire()
					}
					else {
						this._setDomVisibility(false)
					}
				}
			}
		},
		doCenterOnDOMEvent: function () {
			var O = this.cfg,
				P = O.getProperty("fixedcenter");
			if (O.getProperty("visible")) {
				if (P && (P !== C || this.fitsInViewport())) {
					this.center()
				}
			}
		},
		fitsInViewport: function () {
			var S = B.VIEWPORT_OFFSET,
				Q = this.element,
				T = Q.offsetWidth,
				R = Q.offsetHeight,
				O = F.getViewportWidth(),
				P = F.getViewportHeight();
			return ((T + S < O) && (R + S < P))
		},
		configFixedCenter: function (S, Q, T) {
			var U = Q[0],
				P = D.alreadySubscribed,
				R = B.windowResizeEvent,
				O = B.windowScrollEvent;
			if (U) {
				this.center();
				if (!P(this.beforeShowEvent, this.center)) {
					this.beforeShowEvent.subscribe(this.center)
				}
				if (!P(R, this.doCenterOnDOMEvent, this)) {
					R.subscribe(this.doCenterOnDOMEvent, this, true)
				}
				if (!P(O, this.doCenterOnDOMEvent, this)) {
					O.subscribe(this.doCenterOnDOMEvent, this, true)
				}
			}
			else {
				this.beforeShowEvent.unsubscribe(this.center);
				R.unsubscribe(this.doCenterOnDOMEvent, this);
				O.unsubscribe(this.doCenterOnDOMEvent, this)
			}
		},
		configHeight: function (R, P, S) {
			var O = P[0],
				Q = this.element;
			F.setStyle(Q, "height", O);
			this.cfg.refireEvent("iframe")
		},
		configAutoFillHeight: function (T, S, P) {
			var V = S[0],
				Q = this.cfg,
				U = "autofillheight",
				W = "height",
				R = Q.getProperty(U),
				O = this._autoFillOnHeightChange;
			Q.unsubscribeFromConfigEvent(W, O);
			G.textResizeEvent.unsubscribe(O);
			this.changeContentEvent.unsubscribe(O);
			if (R && V !== R && this[R]) {
				F.setStyle(this[R], W, "")
			}
			if (V) {
				V = I.trim(V.toLowerCase());
				Q.subscribeToConfigEvent(W, O, this[V], this);
				G.textResizeEvent.subscribe(O, this[V], this);
				this.changeContentEvent.subscribe(O, this[V], this);
				Q.setProperty(U, V, true)
			}
		},
		configWidth: function (R, O, S) {
			var Q = O[0],
				P = this.element;
			F.setStyle(P, "width", Q);
			this.cfg.refireEvent("iframe")
		},
		configzIndex: function (Q, O, R) {
			var S = O[0],
				P = this.element;
			if (!S) {
				S = F.getStyle(P, "zIndex");
				if (!S || isNaN(S)) {
					S = 0
				}
			}
			if (this.iframe || this.cfg.getProperty("iframe") === true) {
				if (S <= 0) {
					S = 1
				}
			}
			F.setStyle(P, "zIndex", S);
			this.cfg.setProperty("zIndex", S, true);
			if (this.iframe) {
				this.stackIframe()
			}
		},
		configXY: function (Q, P, R) {
			var T = P[0],
				O = T[0],
				S = T[1];
			this.cfg.setProperty("x", O);
			this.cfg.setProperty("y", S);
			this.beforeMoveEvent.fire([O, S]);
			O = this.cfg.getProperty("x");
			S = this.cfg.getProperty("y");
			this.cfg.refireEvent("iframe");
			this.moveEvent.fire([O, S])
		},
		configX: function (Q, P, R) {
			var O = P[0],
				S = this.cfg.getProperty("y");
			this.cfg.setProperty("x", O, true);
			this.cfg.setProperty("y", S, true);
			this.beforeMoveEvent.fire([O, S]);
			O = this.cfg.getProperty("x");
			S = this.cfg.getProperty("y");
			F.setX(this.element, O, true);
			this.cfg.setProperty("xy", [O, S], true);
			this.cfg.refireEvent("iframe");
			this.moveEvent.fire([O, S])
		},
		configY: function (Q, P, R) {
			var O = this.cfg.getProperty("x"),
				S = P[0];
			this.cfg.setProperty("x", O, true);
			this.cfg.setProperty("y", S, true);
			this.beforeMoveEvent.fire([O, S]);
			O = this.cfg.getProperty("x");
			S = this.cfg.getProperty("y");
			F.setY(this.element, S, true);
			this.cfg.setProperty("xy", [O, S], true);
			this.cfg.refireEvent("iframe");
			this.moveEvent.fire([O, S])
		},
		showIframe: function () {
			var P = this.iframe,
				O;
			if (P) {
				O = this.element.parentNode;
				if (O != P.parentNode) {
					this._addToParent(O, P)
				}
				P.style.display = "block"
			}
		},
		hideIframe: function () {
			if (this.iframe) {
				this.iframe.style.display = "none"
			}
		},
		syncIframe: function () {
			var O = this.iframe,
				Q = this.element,
				S = B.IFRAME_OFFSET,
				P = (S * 2),
				R;
			if (O) {
				O.style.width = (Q.offsetWidth + P + "px");
				O.style.height = (Q.offsetHeight + P + "px");
				R = this.cfg.getProperty("xy");
				if (!I.isArray(R) || (isNaN(R[0]) || isNaN(R[1]))) {
					this.syncPosition();
					R = this.cfg.getProperty("xy")
				}
				F.setXY(O, [(R[0] - S), (R[1] - S)])
			}
		},
		stackIframe: function () {
			if (this.iframe) {
				var O = F.getStyle(this.element, "zIndex");
				if (!YAHOO.lang.isUndefined(O) && !isNaN(O)) {
					F.setStyle(this.iframe, "zIndex", (O - 1))
				}
			}
		},
		configIframe: function (R, Q, S) {
			var O = Q[0];

			function T() {
				var V = this.iframe,
					W = this.element,
					X;
				if (!V) {
					if (!J) {
						J = document.createElement("iframe");
						if (this.isSecure) {
							J.src = B.IFRAME_SRC
						}
						if (K.ie) {
							J.style.filter = "alpha(opacity=0)";
							J.frameBorder = 0
						}
						else {
							J.style.opacity = "0"
						}
						J.style.position = "absolute";
						J.style.border = "none";
						J.style.margin = "0";
						J.style.padding = "0";
						J.style.display = "none";
						J.tabIndex = -1
					}
					V = J.cloneNode(false);
					X = W.parentNode;
					var U = X || document.body;
					this._addToParent(U, V);
					this.iframe = V
				}
				this.showIframe();
				this.syncIframe();
				this.stackIframe();
				if (!this._hasIframeEventListeners) {
					this.showEvent.subscribe(this.showIframe);
					this.hideEvent.subscribe(this.hideIframe);
					this.changeContentEvent.subscribe(this.syncIframe);
					this._hasIframeEventListeners = true
				}
			}

			function P() {
				T.call(this);
				this.beforeShowEvent.unsubscribe(P);
				this._iframeDeferred = false
			}
			if (O) {
				if (this.cfg.getProperty("visible")) {
					T.call(this)
				}
				else {
					if (!this._iframeDeferred) {
						this.beforeShowEvent.subscribe(P);
						this._iframeDeferred = true
					}
				}
			}
			else {
				this.hideIframe();
				if (this._hasIframeEventListeners) {
					this.showEvent.unsubscribe(this.showIframe);
					this.hideEvent.unsubscribe(this.hideIframe);
					this.changeContentEvent.unsubscribe(this.syncIframe);
					this._hasIframeEventListeners = false
				}
			}
		},
		_primeXYFromDOM: function () {
			if (YAHOO.lang.isUndefined(this.cfg.getProperty("xy"))) {
				this.syncPosition();
				this.cfg.refireEvent("xy");
				this.beforeShowEvent.unsubscribe(this._primeXYFromDOM)
			}
		},
		configConstrainToViewport: function (P, O, Q) {
			var R = O[0];
			if (R) {
				if (!D.alreadySubscribed(this.beforeMoveEvent, this.enforceConstraints, this)) {
					this.beforeMoveEvent.subscribe(this.enforceConstraints, this, true)
				}
				if (!D.alreadySubscribed(this.beforeShowEvent, this._primeXYFromDOM)) {
					this.beforeShowEvent.subscribe(this._primeXYFromDOM)
				}
			}
			else {
				this.beforeShowEvent.unsubscribe(this._primeXYFromDOM);
				this.beforeMoveEvent.unsubscribe(this.enforceConstraints, this)
			}
		},
		configContext: function (T, S, P) {
			var W = S[0],
				Q, O, U, R, V = this.CONTEXT_TRIGGERS;
			if (W) {
				Q = W[0];
				O = W[1];
				U = W[2];
				R = W[3];
				if (V && V.length > 0) {
					R = (R || []).concat(V)
				}
				if (Q) {
					if (typeof Q == "string") {
						this.cfg.setProperty("context", [document.getElementById(Q), O, U, R], true)
					}
					if (O && U) {
						this.align(O, U)
					}
					if (this._contextTriggers) {
						this._processTriggers(this._contextTriggers, E, this._alignOnTrigger)
					}
					if (R) {
						this._processTriggers(R, H, this._alignOnTrigger);
						this._contextTriggers = R
					}
				}
			}
		},
		_alignOnTrigger: function (P, O) {
			this.align()
		},
		_findTriggerCE: function (O) {
			var P = null;
			if (O instanceof M) {
				P = O
			}
			else {
				if (B._TRIGGER_MAP[O]) {
					P = B._TRIGGER_MAP[O]
				}
			}
			return P
		},
		_processTriggers: function (S, U, R) {
			var Q, T;
			for (var P = 0, O = S.length; P < O; ++P) {
				Q = S[P];
				T = this._findTriggerCE(Q);
				if (T) {
					T[U](R, this, true)
				}
				else {
					this[U](Q, R)
				}
			}
		},
		align: function (P, O) {
			var U = this.cfg.getProperty("context"),
				T = this,
				S, R, V;

			function Q(W, X) {
				switch (P) {
				case B.TOP_LEFT:
					T.moveTo(X, W);
					break;
				case B.TOP_RIGHT:
					T.moveTo((X - R.offsetWidth), W);
					break;
				case B.BOTTOM_LEFT:
					T.moveTo(X, (W - R.offsetHeight));
					break;
				case B.BOTTOM_RIGHT:
					T.moveTo((X - R.offsetWidth), (W - R.offsetHeight));
					break
				}
			}
			if (U) {
				S = U[0];
				R = this.element;
				T = this;
				if (!P) {
					P = U[1]
				}
				if (!O) {
					O = U[2]
				}
				if (R && S) {
					V = F.getRegion(S);
					switch (O) {
					case B.TOP_LEFT:
						Q(V.top, V.left);
						break;
					case B.TOP_RIGHT:
						Q(V.top, V.right);
						break;
					case B.BOTTOM_LEFT:
						Q(V.bottom, V.left);
						break;
					case B.BOTTOM_RIGHT:
						Q(V.bottom, V.right);
						break
					}
				}
			}
		},
		enforceConstraints: function (P, O, Q) {
			var S = O[0];
			var R = this.getConstrainedXY(S[0], S[1]);
			this.cfg.setProperty("x", R[0], true);
			this.cfg.setProperty("y", R[1], true);
			this.cfg.setProperty("xy", R, true)
		},
		getConstrainedX: function (V) {
			var S = this,
				O = S.element,
				e = O.offsetWidth,
				c = B.VIEWPORT_OFFSET,
				h = F.getViewportWidth(),
				d = F.getDocumentScrollLeft(),
				Y = (e + c < h),
				b = this.cfg.getProperty("context"),
				Q, X, j, T = false,
				f, W, g = d + c,
				P = d + h - e - c,
				i = V,
				U = {
					tltr: true,
					blbr: true,
					brbl: true,
					trtl: true
				};
			var Z = function () {
				var k;
				if ((S.cfg.getProperty("x") - d) > X) {
					k = (X - e)
				}
				else {
					k = (X + j)
				}
				S.cfg.setProperty("x", (k + d), true);
				return k
			};
			var R = function () {
				if ((S.cfg.getProperty("x") - d) > X) {
					return (W - c)
				}
				else {
					return (f - c)
				}
			};
			var a = function () {
				var k = R(),
					l;
				if (e > k) {
					if (T) {
						Z()
					}
					else {
						Z();
						T = true;
						l = a()
					}
				}
				return l
			};
			if (V < g || V > P) {
				if (Y) {
					if (this.cfg.getProperty("preventcontextoverlap") && b && U[(b[1] + b[2])]) {
						Q = b[0];
						X = F.getX(Q) - d;
						j = Q.offsetWidth;
						f = X;
						W = (h - (X + j));
						a();
						i = this.cfg.getProperty("x")
					}
					else {
						if (V < g) {
							i = g
						}
						else {
							if (V > P) {
								i = P
							}
						}
					}
				}
				else {
					i = c + d
				}
			}
			return i
		},
		getConstrainedY: function (Z) {
			var W = this,
				P = W.element,
				i = P.offsetHeight,
				h = B.VIEWPORT_OFFSET,
				d = F.getViewportHeight(),
				g = F.getDocumentScrollTop(),
				e = (i + h < d),
				f = this.cfg.getProperty("context"),
				U, a, b, X = false,
				V, Q, c = g + h,
				S = g + d - i - h,
				O = Z,
				Y = {
					trbr: true,
					tlbl: true,
					bltl: true,
					brtr: true
				};
			var T = function () {
				var k;
				if ((W.cfg.getProperty("y") - g) > a) {
					k = (a - i)
				}
				else {
					k = (a + b)
				}
				W.cfg.setProperty("y", (k + g), true);
				return k
			};
			var R = function () {
				if ((W.cfg.getProperty("y") - g) > a) {
					return (Q - h)
				}
				else {
					return (V - h)
				}
			};
			var j = function () {
				var l = R(),
					k;
				if (i > l) {
					if (X) {
						T()
					}
					else {
						T();
						X = true;
						k = j()
					}
				}
				return k
			};
			if (Z < c || Z > S) {
				if (e) {
					if (this.cfg.getProperty("preventcontextoverlap") && f && Y[(f[1] + f[2])]) {
						U = f[0];
						b = U.offsetHeight;
						a = (F.getY(U) - g);
						V = a;
						Q = (d - (a + b));
						j();
						O = W.cfg.getProperty("y")
					}
					else {
						if (Z < c) {
							O = c
						}
						else {
							if (Z > S) {
								O = S
							}
						}
					}
				}
				else {
					O = h + g
				}
			}
			return O
		},
		getConstrainedXY: function (O, P) {
			return [this.getConstrainedX(O), this.getConstrainedY(P)]
		},
		center: function () {
			var R = B.VIEWPORT_OFFSET,
				S = this.element.offsetWidth,
				Q = this.element.offsetHeight,
				P = F.getViewportWidth(),
				T = F.getViewportHeight(),
				O, U;
			if (S < P) {
				O = (P / 2) - (S / 2) + F.getDocumentScrollLeft()
			}
			else {
				O = R + F.getDocumentScrollLeft()
			}
			if (Q < T) {
				U = (T / 2) - (Q / 2) + F.getDocumentScrollTop()
			}
			else {
				U = R + F.getDocumentScrollTop()
			}
			this.cfg.setProperty("xy", [parseInt(O, 10), parseInt(U, 10)]);
			this.cfg.refireEvent("iframe");
			if (K.webkit) {
				this.forceContainerRedraw()
			}
		},
		syncPosition: function () {
			var O = F.getXY(this.element);
			this.cfg.setProperty("x", O[0], true);
			this.cfg.setProperty("y", O[1], true);
			this.cfg.setProperty("xy", O, true)
		},
		onDomResize: function (Q, P) {
			var O = this;
			B.superclass.onDomResize.call(this, Q, P);
			setTimeout(function () {
				O.syncPosition();
				O.cfg.refireEvent("iframe");
				O.cfg.refireEvent("context")
			}, 0)
		},
		_getComputedHeight: (function () {
			if (document.defaultView && document.defaultView.getComputedStyle) {
				return function (P) {
					var O = null;
					if (P.ownerDocument && P.ownerDocument.defaultView) {
						var Q = P.ownerDocument.defaultView.getComputedStyle(P, "");
						if (Q) {
							O = parseInt(Q.height, 10)
						}
					}
					return (I.isNumber(O)) ? O : null
				}
			}
			else {
				return function (P) {
					var O = null;
					if (P.style.pixelHeight) {
						O = P.style.pixelHeight
					}
					return (I.isNumber(O)) ? O : null
				}
			}
		})(),
		_validateAutoFillHeight: function (O) {
			return (!O) || (I.isString(O) && B.STD_MOD_RE.test(O))
		},
		_autoFillOnHeightChange: function (R, P, Q) {
			var O = this.cfg.getProperty("height");
			if ((O && O !== "auto") || (O === 0)) {
				this.fillHeight(Q)
			}
		},
		_getPreciseHeight: function (P) {
			var O = P.offsetHeight;
			if (P.getBoundingClientRect) {
				var Q = P.getBoundingClientRect();
				O = Q.bottom - Q.top
			}
			return O
		},
		fillHeight: function (R) {
			if (R) {
				var P = this.innerElement || this.element,
					O = [this.header, this.body, this.footer],
					V, W = 0,
					X = 0,
					T = 0,
					Q = false;
				for (var U = 0, S = O.length; U < S; U++) {
					V = O[U];
					if (V) {
						if (R !== V) {
							X += this._getPreciseHeight(V)
						}
						else {
							Q = true
						}
					}
				}
				if (Q) {
					if (K.ie || K.opera) {
						F.setStyle(R, "height", 0 + "px")
					}
					W = this._getComputedHeight(P);
					if (W === null) {
						F.addClass(P, "yui-override-padding");
						W = P.clientHeight;
						F.removeClass(P, "yui-override-padding")
					}
					T = Math.max(W - X, 0);
					F.setStyle(R, "height", T + "px");
					if (R.offsetHeight != T) {
						T = Math.max(T - (R.offsetHeight - T), 0)
					}
					F.setStyle(R, "height", T + "px")
				}
			}
		},
		bringToTop: function () {
			var S = [],
				R = this.element;

			function V(Z, Y) {
				var b = F.getStyle(Z, "zIndex"),
					a = F.getStyle(Y, "zIndex"),
					X = (!b || isNaN(b)) ? 0 : parseInt(b, 10),
					W = (!a || isNaN(a)) ? 0 : parseInt(a, 10);
				if (X > W) {
					return -1
				}
				else {
					if (X < W) {
						return 1
					}
					else {
						return 0
					}
				}
			}

			function Q(Y) {
				var X = F.hasClass(Y, B.CSS_OVERLAY),
					W = YAHOO.widget.Panel;
				if (X && !F.isAncestor(R, Y)) {
					if (W && F.hasClass(Y, W.CSS_PANEL)) {
						S[S.length] = Y.parentNode
					}
					else {
						S[S.length] = Y
					}
				}
			}
			F.getElementsBy(Q, "DIV", document.body);
			S.sort(V);
			var O = S[0],
				U;
			if (O) {
				U = F.getStyle(O, "zIndex");
				if (!isNaN(U)) {
					var T = false;
					if (O != R) {
						T = true
					}
					else {
						if (S.length > 1) {
							var P = F.getStyle(S[1], "zIndex");
							if (!isNaN(P) && (U == P)) {
								T = true
							}
						}
					}
					if (T) {
						this.cfg.setProperty("zindex", (parseInt(U, 10) + 2))
					}
				}
			}
		},
		destroy: function () {
			if (this.iframe) {
				this.iframe.parentNode.removeChild(this.iframe)
			}
			this.iframe = null;
			B.windowResizeEvent.unsubscribe(this.doCenterOnDOMEvent, this);
			B.windowScrollEvent.unsubscribe(this.doCenterOnDOMEvent, this);
			G.textResizeEvent.unsubscribe(this._autoFillOnHeightChange);
			B.superclass.destroy.call(this)
		},
		forceContainerRedraw: function () {
			var O = this;
			F.addClass(O.element, "yui-force-redraw");
			setTimeout(function () {
				F.removeClass(O.element, "yui-force-redraw")
			}, 0)
		},
		toString: function () {
			return "Overlay " + this.id
		}
	})
}());
(function () {
	YAHOO.widget.OverlayManager = function (G) {
		this.init(G)
	};
	var D = YAHOO.widget.Overlay,
		C = YAHOO.util.Event,
		E = YAHOO.util.Dom,
		B = YAHOO.util.Config,
		F = YAHOO.util.CustomEvent,
		A = YAHOO.widget.OverlayManager;
	A.CSS_FOCUSED = "focused";
	A.prototype = {
		constructor: A,
		overlays: null,
		initDefaultConfig: function () {
			this.cfg.addProperty("overlays", {
				suppressEvent: true
			});
			this.cfg.addProperty("focusevent", {
				value: "mousedown"
			})
		},
		init: function (I) {
			this.cfg = new B(this);
			this.initDefaultConfig();
			if (I) {
				this.cfg.applyConfig(I, true)
			}
			this.cfg.fireQueue();
			var H = null;
			this.getActive = function () {
				return H
			};
			this.focus = function (J) {
				var K = this.find(J);
				if (K) {
					K.focus()
				}
			};
			this.remove = function (K) {
				var M = this.find(K),
					J;
				if (M) {
					if (H == M) {
						H = null
					}
					var L = (M.element === null && M.cfg === null) ? true : false;
					if (!L) {
						J = E.getStyle(M.element, "zIndex");
						M.cfg.setProperty("zIndex", -1000, true)
					}
					this.overlays.sort(this.compareZIndexDesc);
					this.overlays = this.overlays.slice(0, (this.overlays.length - 1));
					M.hideEvent.unsubscribe(M.blur);
					M.destroyEvent.unsubscribe(this._onOverlayDestroy, M);
					M.focusEvent.unsubscribe(this._onOverlayFocusHandler, M);
					M.blurEvent.unsubscribe(this._onOverlayBlurHandler, M);
					if (!L) {
						C.removeListener(M.element, this.cfg.getProperty("focusevent"), this._onOverlayElementFocus);
						M.cfg.setProperty("zIndex", J, true);
						M.cfg.setProperty("manager", null)
					}
					if (M.focusEvent._managed) {
						M.focusEvent = null
					}
					if (M.blurEvent._managed) {
						M.blurEvent = null
					}
					if (M.focus._managed) {
						M.focus = null
					}
					if (M.blur._managed) {
						M.blur = null
					}
				}
			};
			this.blurAll = function () {
				var K = this.overlays.length,
					J;
				if (K > 0) {
					J = K - 1;
					do {
						this.overlays[J].blur()
					} while (J--)
				}
			};
			this._manageBlur = function (J) {
				var K = false;
				if (H == J) {
					E.removeClass(H.element, A.CSS_FOCUSED);
					H = null;
					K = true
				}
				return K
			};
			this._manageFocus = function (J) {
				var K = false;
				if (H != J) {
					if (H) {
						H.blur()
					}
					H = J;
					this.bringToTop(H);
					E.addClass(H.element, A.CSS_FOCUSED);
					K = true
				}
				return K
			};
			var G = this.cfg.getProperty("overlays");
			if (!this.overlays) {
				this.overlays = []
			}
			if (G) {
				this.register(G);
				this.overlays.sort(this.compareZIndexDesc)
			}
		},
		_onOverlayElementFocus: function (I) {
			var G = C.getTarget(I),
				H = this.close;
			if (H && (G == H || E.isAncestor(H, G))) {
				this.blur()
			}
			else {
				this.focus()
			}
		},
		_onOverlayDestroy: function (H, G, I) {
			this.remove(I)
		},
		_onOverlayFocusHandler: function (H, G, I) {
			this._manageFocus(I)
		},
		_onOverlayBlurHandler: function (H, G, I) {
			this._manageBlur(I)
		},
		_bindFocus: function (G) {
			var H = this;
			if (!G.focusEvent) {
				G.focusEvent = G.createEvent("focus");
				G.focusEvent.signature = F.LIST;
				G.focusEvent._managed = true
			}
			else {
				G.focusEvent.subscribe(H._onOverlayFocusHandler, G, H)
			}
			if (!G.focus) {
				C.on(G.element, H.cfg.getProperty("focusevent"), H._onOverlayElementFocus, null, G);
				G.focus = function () {
					if (H._manageFocus(this)) {
						if (this.cfg.getProperty("visible") && this.focusFirst) {
							this.focusFirst()
						}
						this.focusEvent.fire()
					}
				};
				G.focus._managed = true
			}
		},
		_bindBlur: function (G) {
			var H = this;
			if (!G.blurEvent) {
				G.blurEvent = G.createEvent("blur");
				G.blurEvent.signature = F.LIST;
				G.focusEvent._managed = true
			}
			else {
				G.blurEvent.subscribe(H._onOverlayBlurHandler, G, H)
			}
			if (!G.blur) {
				G.blur = function () {
					if (H._manageBlur(this)) {
						this.blurEvent.fire()
					}
				};
				G.blur._managed = true
			}
			G.hideEvent.subscribe(G.blur)
		},
		_bindDestroy: function (G) {
			var H = this;
			G.destroyEvent.subscribe(H._onOverlayDestroy, G, H)
		},
		_syncZIndex: function (G) {
			var H = E.getStyle(G.element, "zIndex");
			if (!isNaN(H)) {
				G.cfg.setProperty("zIndex", parseInt(H, 10))
			}
			else {
				G.cfg.setProperty("zIndex", 0)
			}
		},
		register: function (G) {
			var J = false,
				H, I;
			if (G instanceof D) {
				G.cfg.addProperty("manager", {
					value: this
				});
				this._bindFocus(G);
				this._bindBlur(G);
				this._bindDestroy(G);
				this._syncZIndex(G);
				this.overlays.push(G);
				this.bringToTop(G);
				J = true
			}
			else {
				if (G instanceof Array) {
					for (H = 0, I = G.length; H < I; H++) {
						J = this.register(G[H]) || J
					}
				}
			}
			return J
		},
		bringToTop: function (M) {
			var I = this.find(M),
				L, G, J;
			if (I) {
				J = this.overlays;
				J.sort(this.compareZIndexDesc);
				G = J[0];
				if (G) {
					L = E.getStyle(G.element, "zIndex");
					if (!isNaN(L)) {
						var K = false;
						if (G !== I) {
							K = true
						}
						else {
							if (J.length > 1) {
								var H = E.getStyle(J[1].element, "zIndex");
								if (!isNaN(H) && (L == H)) {
									K = true
								}
							}
						}
						if (K) {
							I.cfg.setProperty("zindex", (parseInt(L, 10) + 2))
						}
					}
					J.sort(this.compareZIndexDesc)
				}
			}
		},
		find: function (G) {
			var K = G instanceof D,
				I = this.overlays,
				M = I.length,
				J = null,
				L, H;
			if (K || typeof G == "string") {
				for (H = M - 1; H >= 0; H--) {
					L = I[H];
					if ((K && (L === G)) || (L.id == G)) {
						J = L;
						break
					}
				}
			}
			return J
		},
		compareZIndexDesc: function (J, I) {
			var H = (J.cfg) ? J.cfg.getProperty("zIndex") : null,
				G = (I.cfg) ? I.cfg.getProperty("zIndex") : null;
			if (H === null && G === null) {
				return 0
			}
			else {
				if (H === null) {
					return 1
				}
				else {
					if (G === null) {
						return -1
					}
					else {
						if (H > G) {
							return -1
						}
						else {
							if (H < G) {
								return 1
							}
							else {
								return 0
							}
						}
					}
				}
			}
		},
		showAll: function () {
			var H = this.overlays,
				I = H.length,
				G;
			for (G = I - 1; G >= 0; G--) {
				H[G].show()
			}
		},
		hideAll: function () {
			var H = this.overlays,
				I = H.length,
				G;
			for (G = I - 1; G >= 0; G--) {
				H[G].hide()
			}
		},
		toString: function () {
			return "OverlayManager"
		}
	}
}());
(function () {
	YAHOO.widget.Tooltip = function (P, O) {
		YAHOO.widget.Tooltip.superclass.constructor.call(this, P, O)
	};
	var E = YAHOO.lang,
		N = YAHOO.util.Event,
		M = YAHOO.util.CustomEvent,
		C = YAHOO.util.Dom,
		J = YAHOO.widget.Tooltip,
		H = YAHOO.env.ua,
		G = (H.ie && (H.ie <= 6 || document.compatMode == "BackCompat")),
		F, I = {
			PREVENT_OVERLAP: {
				key: "preventoverlap",
				value: true,
				validator: E.isBoolean,
				supercedes: ["x", "y", "xy"]
			},
			SHOW_DELAY: {
				key: "showdelay",
				value: 200,
				validator: E.isNumber
			},
			AUTO_DISMISS_DELAY: {
				key: "autodismissdelay",
				value: 5000,
				validator: E.isNumber
			},
			HIDE_DELAY: {
				key: "hidedelay",
				value: 250,
				validator: E.isNumber
			},
			TEXT: {
				key: "text",
				suppressEvent: true
			},
			CONTAINER: {
				key: "container"
			},
			DISABLED: {
				key: "disabled",
				value: false,
				suppressEvent: true
			}
		},
		A = {
			CONTEXT_MOUSE_OVER: "contextMouseOver",
			CONTEXT_MOUSE_OUT: "contextMouseOut",
			CONTEXT_TRIGGER: "contextTrigger"
		};
	J.CSS_TOOLTIP = "yui-tt";

	function K(Q, O) {
		var P = this.cfg,
			R = P.getProperty("width");
		if (R == O) {
			P.setProperty("width", Q)
		}
	}

	function D(P, O) {
		if ("_originalWidth" in this) {
			K.call(this, this._originalWidth, this._forcedWidth)
		}
		var Q = document.body,
			U = this.cfg,
			T = U.getProperty("width"),
			R, S;
		if ((!T || T == "auto") && (U.getProperty("container") != Q || U.getProperty("x") >= C.getViewportWidth() || U.getProperty("y") >= C.getViewportHeight())) {
			S = this.element.cloneNode(true);
			S.style.visibility = "hidden";
			S.style.top = "0px";
			S.style.left = "0px";
			Q.appendChild(S);
			R = (S.offsetWidth + "px");
			Q.removeChild(S);
			S = null;
			U.setProperty("width", R);
			U.refireEvent("xy");
			this._originalWidth = T || "";
			this._forcedWidth = R
		}
	}

	function B(P, O, Q) {
		this.render(Q)
	}

	function L() {
		N.onDOMReady(B, this.cfg.getProperty("container"), this)
	}
	YAHOO.extend(J, YAHOO.widget.Overlay, {
		init: function (P, O) {
			J.superclass.init.call(this, P);
			this.beforeInitEvent.fire(J);
			C.addClass(this.element, J.CSS_TOOLTIP);
			if (O) {
				this.cfg.applyConfig(O, true)
			}
			this.cfg.queueProperty("visible", false);
			this.cfg.queueProperty("constraintoviewport", true);
			this.setBody("");
			this.subscribe("changeContent", D);
			this.subscribe("init", L);
			this.subscribe("render", this.onRender);
			this.initEvent.fire(J)
		},
		initEvents: function () {
			J.superclass.initEvents.call(this);
			var O = M.LIST;
			this.contextMouseOverEvent = this.createEvent(A.CONTEXT_MOUSE_OVER);
			this.contextMouseOverEvent.signature = O;
			this.contextMouseOutEvent = this.createEvent(A.CONTEXT_MOUSE_OUT);
			this.contextMouseOutEvent.signature = O;
			this.contextTriggerEvent = this.createEvent(A.CONTEXT_TRIGGER);
			this.contextTriggerEvent.signature = O
		},
		initDefaultConfig: function () {
			J.superclass.initDefaultConfig.call(this);
			this.cfg.addProperty(I.PREVENT_OVERLAP.key, {
				value: I.PREVENT_OVERLAP.value,
				validator: I.PREVENT_OVERLAP.validator,
				supercedes: I.PREVENT_OVERLAP.supercedes
			});
			this.cfg.addProperty(I.SHOW_DELAY.key, {
				handler: this.configShowDelay,
				value: 200,
				validator: I.SHOW_DELAY.validator
			});
			this.cfg.addProperty(I.AUTO_DISMISS_DELAY.key, {
				handler: this.configAutoDismissDelay,
				value: I.AUTO_DISMISS_DELAY.value,
				validator: I.AUTO_DISMISS_DELAY.validator
			});
			this.cfg.addProperty(I.HIDE_DELAY.key, {
				handler: this.configHideDelay,
				value: I.HIDE_DELAY.value,
				validator: I.HIDE_DELAY.validator
			});
			this.cfg.addProperty(I.TEXT.key, {
				handler: this.configText,
				suppressEvent: I.TEXT.suppressEvent
			});
			this.cfg.addProperty(I.CONTAINER.key, {
				handler: this.configContainer,
				value: document.body
			});
			this.cfg.addProperty(I.DISABLED.key, {
				handler: this.configContainer,
				value: I.DISABLED.value,
				supressEvent: I.DISABLED.suppressEvent
			})
		},
		configText: function (P, O, Q) {
			var R = O[0];
			if (R) {
				this.setBody(R)
			}
		},
		configContainer: function (Q, P, R) {
			var O = P[0];
			if (typeof O == "string") {
				this.cfg.setProperty("container", document.getElementById(O), true)
			}
		},
		_removeEventListeners: function () {
			var R = this._context,
				O, Q, P;
			if (R) {
				O = R.length;
				if (O > 0) {
					P = O - 1;
					do {
						Q = R[P];
						N.removeListener(Q, "mouseover", this.onContextMouseOver);
						N.removeListener(Q, "mousemove", this.onContextMouseMove);
						N.removeListener(Q, "mouseout", this.onContextMouseOut)
					} while (P--)
				}
			}
		},
		configContext: function (T, P, U) {
			var S = P[0],
				V, O, R, Q;
			if (S) {
				if (!(S instanceof Array)) {
					if (typeof S == "string") {
						this.cfg.setProperty("context", [document.getElementById(S)], true)
					}
					else {
						this.cfg.setProperty("context", [S], true)
					}
					S = this.cfg.getProperty("context")
				}
				this._removeEventListeners();
				this._context = S;
				V = this._context;
				if (V) {
					O = V.length;
					if (O > 0) {
						Q = O - 1;
						do {
							R = V[Q];
							N.on(R, "mouseover", this.onContextMouseOver, this);
							N.on(R, "mousemove", this.onContextMouseMove, this);
							N.on(R, "mouseout", this.onContextMouseOut, this)
						} while (Q--)
					}
				}
			}
		},
		onContextMouseMove: function (P, O) {
			O.pageX = N.getPageX(P);
			O.pageY = N.getPageY(P)
		},
		onContextMouseOver: function (Q, P) {
			var O = this;
			if (O.title) {
				P._tempTitle = O.title;
				O.title = ""
			}
			if (P.fireEvent("contextMouseOver", O, Q) !== false && !P.cfg.getProperty("disabled")) {
				if (P.hideProcId) {
					clearTimeout(P.hideProcId);
					P.hideProcId = null
				}
				N.on(O, "mousemove", P.onContextMouseMove, P);
				P.showProcId = P.doShow(Q, O)
			}
		},
		onContextMouseOut: function (Q, P) {
			var O = this;
			if (P._tempTitle) {
				O.title = P._tempTitle;
				P._tempTitle = null
			}
			if (P.showProcId) {
				clearTimeout(P.showProcId);
				P.showProcId = null
			}
			if (P.hideProcId) {
				clearTimeout(P.hideProcId);
				P.hideProcId = null
			}
			P.fireEvent("contextMouseOut", O, Q);
			P.hideProcId = setTimeout(function () {
				P.hide()
			}, P.cfg.getProperty("hidedelay"))
		},
		doShow: function (Q, O) {
			var R = 25,
				P = this;
			if (H.opera && O.tagName && O.tagName.toUpperCase() == "A") {
				R += 12
			}
			return setTimeout(function () {
				var S = P.cfg.getProperty("text");
				if (P._tempTitle && (S === "" || YAHOO.lang.isUndefined(S) || YAHOO.lang.isNull(S))) {
					P.setBody(P._tempTitle)
				}
				else {
					P.cfg.refireEvent("text")
				}
				P.moveTo(P.pageX, P.pageY + R);
				if (P.cfg.getProperty("preventoverlap")) {
					P.preventOverlap(P.pageX, P.pageY)
				}
				N.removeListener(O, "mousemove", P.onContextMouseMove);
				P.contextTriggerEvent.fire(O);
				P.show();
				P.hideProcId = P.doHide()
			}, this.cfg.getProperty("showdelay"))
		},
		doHide: function () {
			var O = this;
			return setTimeout(function () {
				O.hide()
			}, this.cfg.getProperty("autodismissdelay"))
		},
		preventOverlap: function (S, R) {
			var O = this.element.offsetHeight,
				Q = new YAHOO.util.Point(S, R),
				P = C.getRegion(this.element);
			P.top -= 5;
			P.left -= 5;
			P.right += 5;
			P.bottom += 5;
			if (P.contains(Q)) {
				this.cfg.setProperty("y", (R - O - 5))
			}
		},
		onRender: function (S, R) {
			function T() {
				var W = this.element,
					V = this.underlay;
				if (V) {
					V.style.width = (W.offsetWidth + 6) + "px";
					V.style.height = (W.offsetHeight + 1) + "px"
				}
			}

			function P() {
				C.addClass(this.underlay, "yui-tt-shadow-visible");
				if (H.ie) {
					this.forceUnderlayRedraw()
				}
			}

			function O() {
				C.removeClass(this.underlay, "yui-tt-shadow-visible")
			}

			function U() {
				var X = this.underlay,
					W, V, Z, Y;
				if (!X) {
					W = this.element;
					V = YAHOO.widget.Module;
					Z = H.ie;
					Y = this;
					if (!F) {
						F = document.createElement("div");
						F.className = "yui-tt-shadow"
					}
					X = F.cloneNode(false);
					W.appendChild(X);
					this.underlay = X;
					this._shadow = this.underlay;
					P.call(this);
					this.subscribe("beforeShow", P);
					this.subscribe("hide", O);
					if (G) {
						window.setTimeout(function () {
							T.call(Y)
						}, 0);
						this.cfg.subscribeToConfigEvent("width", T);
						this.cfg.subscribeToConfigEvent("height", T);
						this.subscribe("changeContent", T);
						V.textResizeEvent.subscribe(T, this, true);
						this.subscribe("destroy", function () {
							V.textResizeEvent.unsubscribe(T, this)
						})
					}
				}
			}

			function Q() {
				U.call(this);
				this.unsubscribe("beforeShow", Q)
			}
			if (this.cfg.getProperty("visible")) {
				U.call(this)
			}
			else {
				this.subscribe("beforeShow", Q)
			}
		},
		forceUnderlayRedraw: function () {
			var O = this;
			C.addClass(O.underlay, "yui-force-redraw");
			setTimeout(function () {
				C.removeClass(O.underlay, "yui-force-redraw")
			}, 0)
		},
		destroy: function () {
			this._removeEventListeners();
			J.superclass.destroy.call(this)
		},
		toString: function () {
			return "Tooltip " + this.id
		}
	})
}());
(function () {
	YAHOO.widget.Panel = function (V, U) {
		YAHOO.widget.Panel.superclass.constructor.call(this, V, U)
	};
	var S = null;
	var E = YAHOO.lang,
		F = YAHOO.util,
		A = F.Dom,
		T = F.Event,
		M = F.CustomEvent,
		K = YAHOO.util.KeyListener,
		I = F.Config,
		H = YAHOO.widget.Overlay,
		O = YAHOO.widget.Panel,
		L = YAHOO.env.ua,
		P = (L.ie && (L.ie <= 6 || document.compatMode == "BackCompat")),
		G, Q, C, D = {
			SHOW_MASK: "showMask",
			HIDE_MASK: "hideMask",
			DRAG: "drag"
		},
		N = {
			CLOSE: {
				key: "close",
				value: true,
				validator: E.isBoolean,
				supercedes: ["visible"]
			},
			DRAGGABLE: {
				key: "draggable",
				value: (F.DD ? true : false),
				validator: E.isBoolean,
				supercedes: ["visible"]
			},
			DRAG_ONLY: {
				key: "dragonly",
				value: false,
				validator: E.isBoolean,
				supercedes: ["draggable"]
			},
			UNDERLAY: {
				key: "underlay",
				value: "shadow",
				supercedes: ["visible"]
			},
			MODAL: {
				key: "modal",
				value: false,
				validator: E.isBoolean,
				supercedes: ["visible", "zindex"]
			},
			KEY_LISTENERS: {
				key: "keylisteners",
				suppressEvent: true,
				supercedes: ["visible"]
			},
			STRINGS: {
				key: "strings",
				supercedes: ["close"],
				validator: E.isObject,
				value: {
					close: "Close"
				}
			}
		};
	O.CSS_PANEL = "yui-panel";
	O.CSS_PANEL_CONTAINER = "yui-panel-container";
	O.FOCUSABLE = ["a", "button", "select", "textarea", "input", "iframe"];

	function J(V, U) {
		if (!this.header && this.cfg.getProperty("draggable")) {
			this.setHeader("&#160;")
		}
	}

	function R(V, U, W) {
		var Z = W[0],
			X = W[1],
			Y = this.cfg,
			a = Y.getProperty("width");
		if (a == X) {
			Y.setProperty("width", Z)
		}
		this.unsubscribe("hide", R, W)
	}

	function B(V, U) {
		var Y, X, W;
		if (P) {
			Y = this.cfg;
			X = Y.getProperty("width");
			if (!X || X == "auto") {
				W = (this.element.offsetWidth + "px");
				Y.setProperty("width", W);
				this.subscribe("hide", R, [(X || ""), W])
			}
		}
	}
	YAHOO.extend(O, H, {
		init: function (V, U) {
			O.superclass.init.call(this, V);
			this.beforeInitEvent.fire(O);
			A.addClass(this.element, O.CSS_PANEL);
			this.buildWrapper();
			if (U) {
				this.cfg.applyConfig(U, true)
			}
			this.subscribe("showMask", this._addFocusHandlers);
			this.subscribe("hideMask", this._removeFocusHandlers);
			this.subscribe("beforeRender", J);
			this.subscribe("render", function () {
				this.setFirstLastFocusable();
				this.subscribe("changeContent", this.setFirstLastFocusable)
			});
			this.subscribe("show", this.focusFirst);
			this.initEvent.fire(O)
		},
		_onElementFocus: function (Z) {
			if (S === this) {
				var Y = T.getTarget(Z),
					X = document.documentElement,
					V = (Y !== X && Y !== window);
				if (V && Y !== this.element && Y !== this.mask && !A.isAncestor(this.element, Y)) {
					try {
						if (this.firstElement) {
							this.firstElement.focus()
						}
						else {
							if (this._modalFocus) {
								this._modalFocus.focus()
							}
							else {
								this.innerElement.focus()
							}
						}
					}
					catch (W) {
						try {
							if (V && Y !== document.body) {
								Y.blur()
							}
						}
						catch (U) {}
					}
				}
			}
		},
		_addFocusHandlers: function (V, U) {
			if (!this.firstElement) {
				if (L.webkit || L.opera) {
					if (!this._modalFocus) {
						this._createHiddenFocusElement()
					}
				}
				else {
					this.innerElement.tabIndex = 0
				}
			}
			this.setTabLoop(this.firstElement, this.lastElement);
			T.onFocus(document.documentElement, this._onElementFocus, this, true);
			S = this
		},
		_createHiddenFocusElement: function () {
			var U = document.createElement("button");
			U.style.height = "1px";
			U.style.width = "1px";
			U.style.position = "absolute";
			U.style.left = "-10000em";
			U.style.opacity = 0;
			U.tabIndex = -1;
			this.innerElement.appendChild(U);
			this._modalFocus = U
		},
		_removeFocusHandlers: function (V, U) {
			T.removeFocusListener(document.documentElement, this._onElementFocus, this);
			if (S == this) {
				S = null
			}
		},
		focusFirst: function (W, U, Y) {
			var V = this.firstElement;
			if (U && U[1]) {
				T.stopEvent(U[1])
			}
			if (V) {
				try {
					V.focus()
				}
				catch (X) {}
			}
		},
		focusLast: function (W, U, Y) {
			var V = this.lastElement;
			if (U && U[1]) {
				T.stopEvent(U[1])
			}
			if (V) {
				try {
					V.focus()
				}
				catch (X) {}
			}
		},
		setTabLoop: function (X, Z) {
			var V = this.preventBackTab,
				W = this.preventTabOut,
				U = this.showEvent,
				Y = this.hideEvent;
			if (V) {
				V.disable();
				U.unsubscribe(V.enable, V);
				Y.unsubscribe(V.disable, V);
				V = this.preventBackTab = null
			}
			if (W) {
				W.disable();
				U.unsubscribe(W.enable, W);
				Y.unsubscribe(W.disable, W);
				W = this.preventTabOut = null
			}
			if (X) {
				this.preventBackTab = new K(X, {
					shift: true,
					keys: 9
				}, {
					fn: this.focusLast,
					scope: this,
					correctScope: true
				});
				V = this.preventBackTab;
				U.subscribe(V.enable, V, true);
				Y.subscribe(V.disable, V, true)
			}
			if (Z) {
				this.preventTabOut = new K(Z, {
					shift: false,
					keys: 9
				}, {
					fn: this.focusFirst,
					scope: this,
					correctScope: true
				});
				W = this.preventTabOut;
				U.subscribe(W.enable, W, true);
				Y.subscribe(W.disable, W, true)
			}
		},
		getFocusableElements: function (U) {
			U = U || this.innerElement;
			var X = {};
			for (var W = 0; W < O.FOCUSABLE.length; W++) {
				X[O.FOCUSABLE[W]] = true
			}

			function V(Y) {
				if (Y.focus && Y.type !== "hidden" && !Y.disabled && X[Y.tagName.toLowerCase()]) {
					return true
				}
				return false
			}
			return A.getElementsBy(V, null, U)
		},
		setFirstLastFocusable: function () {
			this.firstElement = null;
			this.lastElement = null;
			var U = this.getFocusableElements();
			this.focusableElements = U;
			if (U.length > 0) {
				this.firstElement = U[0];
				this.lastElement = U[U.length - 1]
			}
			if (this.cfg.getProperty("modal")) {
				this.setTabLoop(this.firstElement, this.lastElement)
			}
		},
		initEvents: function () {
			O.superclass.initEvents.call(this);
			var U = M.LIST;
			this.showMaskEvent = this.createEvent(D.SHOW_MASK);
			this.showMaskEvent.signature = U;
			this.hideMaskEvent = this.createEvent(D.HIDE_MASK);
			this.hideMaskEvent.signature = U;
			this.dragEvent = this.createEvent(D.DRAG);
			this.dragEvent.signature = U
		},
		initDefaultConfig: function () {
			O.superclass.initDefaultConfig.call(this);
			this.cfg.addProperty(N.CLOSE.key, {
				handler: this.configClose,
				value: N.CLOSE.value,
				validator: N.CLOSE.validator,
				supercedes: N.CLOSE.supercedes
			});
			this.cfg.addProperty(N.DRAGGABLE.key, {
				handler: this.configDraggable,
				value: (F.DD) ? true : false,
				validator: N.DRAGGABLE.validator,
				supercedes: N.DRAGGABLE.supercedes
			});
			this.cfg.addProperty(N.DRAG_ONLY.key, {
				value: N.DRAG_ONLY.value,
				validator: N.DRAG_ONLY.validator,
				supercedes: N.DRAG_ONLY.supercedes
			});
			this.cfg.addProperty(N.UNDERLAY.key, {
				handler: this.configUnderlay,
				value: N.UNDERLAY.value,
				supercedes: N.UNDERLAY.supercedes
			});
			this.cfg.addProperty(N.MODAL.key, {
				handler: this.configModal,
				value: N.MODAL.value,
				validator: N.MODAL.validator,
				supercedes: N.MODAL.supercedes
			});
			this.cfg.addProperty(N.KEY_LISTENERS.key, {
				handler: this.configKeyListeners,
				suppressEvent: N.KEY_LISTENERS.suppressEvent,
				supercedes: N.KEY_LISTENERS.supercedes
			});
			this.cfg.addProperty(N.STRINGS.key, {
				value: N.STRINGS.value,
				handler: this.configStrings,
				validator: N.STRINGS.validator,
				supercedes: N.STRINGS.supercedes
			})
		},
		configClose: function (X, V, Y) {
			var Z = V[0],
				W = this.close,
				U = this.cfg.getProperty("strings");
			if (Z) {
				if (!W) {
					if (!C) {
						C = document.createElement("a");
						C.className = "container-close";
						C.href = "#"
					}
					W = C.cloneNode(true);
					this.innerElement.appendChild(W);
					W.innerHTML = (U && U.close) ? U.close : "&#160;";
					T.on(W, "click", this._doClose, this, true);
					this.close = W
				}
				else {
					W.style.display = "block"
				}
			}
			else {
				if (W) {
					W.style.display = "none"
				}
			}
		},
		_doClose: function (U) {
			T.preventDefault(U);
			this.hide()
		},
		configDraggable: function (V, U, W) {
			var X = U[0];
			if (X) {
				if (!F.DD) {
					this.cfg.setProperty("draggable", false);
					return
				}
				if (this.header) {
					A.setStyle(this.header, "cursor", "move");
					this.registerDragDrop()
				}
				this.subscribe("beforeShow", B)
			}
			else {
				if (this.dd) {
					this.dd.unreg()
				}
				if (this.header) {
					A.setStyle(this.header, "cursor", "auto")
				}
				this.unsubscribe("beforeShow", B)
			}
		},
		configUnderlay: function (d, c, Z) {
			var b = (this.platform == "mac" && L.gecko),
				e = c[0].toLowerCase(),
				V = this.underlay,
				W = this.element;

			function X() {
				var f = false;
				if (!V) {
					if (!Q) {
						Q = document.createElement("div");
						Q.className = "underlay"
					}
					V = Q.cloneNode(false);
					this.element.appendChild(V);
					this.underlay = V;
					if (P) {
						this.sizeUnderlay();
						this.cfg.subscribeToConfigEvent("width", this.sizeUnderlay);
						this.cfg.subscribeToConfigEvent("height", this.sizeUnderlay);
						this.changeContentEvent.subscribe(this.sizeUnderlay);
						YAHOO.widget.Module.textResizeEvent.subscribe(this.sizeUnderlay, this, true)
					}
					if (L.webkit && L.webkit < 420) {
						this.changeContentEvent.subscribe(this.forceUnderlayRedraw)
					}
					f = true
				}
			}

			function a() {
				var f = X.call(this);
				if (!f && P) {
					this.sizeUnderlay()
				}
				this._underlayDeferred = false;
				this.beforeShowEvent.unsubscribe(a)
			}

			function Y() {
				if (this._underlayDeferred) {
					this.beforeShowEvent.unsubscribe(a);
					this._underlayDeferred = false
				}
				if (V) {
					this.cfg.unsubscribeFromConfigEvent("width", this.sizeUnderlay);
					this.cfg.unsubscribeFromConfigEvent("height", this.sizeUnderlay);
					this.changeContentEvent.unsubscribe(this.sizeUnderlay);
					this.changeContentEvent.unsubscribe(this.forceUnderlayRedraw);
					YAHOO.widget.Module.textResizeEvent.unsubscribe(this.sizeUnderlay, this, true);
					this.element.removeChild(V);
					this.underlay = null
				}
			}
			switch (e) {
			case "shadow":
				A.removeClass(W, "matte");
				A.addClass(W, "shadow");
				break;
			case "matte":
				if (!b) {
					Y.call(this)
				}
				A.removeClass(W, "shadow");
				A.addClass(W, "matte");
				break;
			default:
				if (!b) {
					Y.call(this)
				}
				A.removeClass(W, "shadow");
				A.removeClass(W, "matte");
				break
			}
			if ((e == "shadow") || (b && !V)) {
				if (this.cfg.getProperty("visible")) {
					var U = X.call(this);
					if (!U && P) {
						this.sizeUnderlay()
					}
				}
				else {
					if (!this._underlayDeferred) {
						this.beforeShowEvent.subscribe(a);
						this._underlayDeferred = true
					}
				}
			}
		},
		configModal: function (V, U, X) {
			var W = U[0];
			if (W) {
				if (!this._hasModalityEventListeners) {
					this.subscribe("beforeShow", this.buildMask);
					this.subscribe("beforeShow", this.bringToTop);
					this.subscribe("beforeShow", this.showMask);
					this.subscribe("hide", this.hideMask);
					H.windowResizeEvent.subscribe(this.sizeMask, this, true);
					this._hasModalityEventListeners = true
				}
			}
			else {
				if (this._hasModalityEventListeners) {
					if (this.cfg.getProperty("visible")) {
						this.hideMask();
						this.removeMask()
					}
					this.unsubscribe("beforeShow", this.buildMask);
					this.unsubscribe("beforeShow", this.bringToTop);
					this.unsubscribe("beforeShow", this.showMask);
					this.unsubscribe("hide", this.hideMask);
					H.windowResizeEvent.unsubscribe(this.sizeMask, this);
					this._hasModalityEventListeners = false
				}
			}
		},
		removeMask: function () {
			var V = this.mask,
				U;
			if (V) {
				this.hideMask();
				U = V.parentNode;
				if (U) {
					U.removeChild(V)
				}
				this.mask = null
			}
		},
		configKeyListeners: function (X, U, a) {
			var W = U[0],
				Z, Y, V;
			if (W) {
				if (W instanceof Array) {
					Y = W.length;
					for (V = 0; V < Y; V++) {
						Z = W[V];
						if (!I.alreadySubscribed(this.showEvent, Z.enable, Z)) {
							this.showEvent.subscribe(Z.enable, Z, true)
						}
						if (!I.alreadySubscribed(this.hideEvent, Z.disable, Z)) {
							this.hideEvent.subscribe(Z.disable, Z, true);
							this.destroyEvent.subscribe(Z.disable, Z, true)
						}
					}
				}
				else {
					if (!I.alreadySubscribed(this.showEvent, W.enable, W)) {
						this.showEvent.subscribe(W.enable, W, true)
					}
					if (!I.alreadySubscribed(this.hideEvent, W.disable, W)) {
						this.hideEvent.subscribe(W.disable, W, true);
						this.destroyEvent.subscribe(W.disable, W, true)
					}
				}
			}
		},
		configStrings: function (V, U, W) {
			var X = E.merge(N.STRINGS.value, U[0]);
			this.cfg.setProperty(N.STRINGS.key, X, true)
		},
		configHeight: function (X, V, Y) {
			var U = V[0],
				W = this.innerElement;
			A.setStyle(W, "height", U);
			this.cfg.refireEvent("iframe")
		},
		_autoFillOnHeightChange: function (X, V, W) {
			O.superclass._autoFillOnHeightChange.apply(this, arguments);
			if (P) {
				var U = this;
				setTimeout(function () {
					U.sizeUnderlay()
				}, 0)
			}
		},
		configWidth: function (X, U, Y) {
			var W = U[0],
				V = this.innerElement;
			A.setStyle(V, "width", W);
			this.cfg.refireEvent("iframe")
		},
		configzIndex: function (V, U, X) {
			O.superclass.configzIndex.call(this, V, U, X);
			if (this.mask || this.cfg.getProperty("modal") === true) {
				var W = A.getStyle(this.element, "zIndex");
				if (!W || isNaN(W)) {
					W = 0
				}
				if (W === 0) {
					this.cfg.setProperty("zIndex", 1)
				}
				else {
					this.stackMask()
				}
			}
		},
		buildWrapper: function () {
			var W = this.element.parentNode,
				U = this.element,
				V = document.createElement("div");
			V.className = O.CSS_PANEL_CONTAINER;
			V.id = U.id + "_c";
			if (W) {
				W.insertBefore(V, U)
			}
			V.appendChild(U);
			this.element = V;
			this.innerElement = U;
			A.setStyle(this.innerElement, "visibility", "inherit")
		},
		sizeUnderlay: function () {
			var V = this.underlay,
				U;
			if (V) {
				U = this.element;
				V.style.width = U.offsetWidth + "px";
				V.style.height = U.offsetHeight + "px"
			}
		},
		registerDragDrop: function () {
			var V = this;
			if (this.header) {
				if (!F.DD) {
					return
				}
				var U = (this.cfg.getProperty("dragonly") === true);
				this.dd = new F.DD(this.element.id, this.id, {
					dragOnly: U
				});
				if (!this.header.id) {
					this.header.id = this.id + "_h"
				}
				this.dd.startDrag = function () {
					var X, Z, W, c, b, a;
					if (YAHOO.env.ua.ie == 6) {
						A.addClass(V.element, "drag")
					}
					if (V.cfg.getProperty("constraintoviewport")) {
						var Y = H.VIEWPORT_OFFSET;
						X = V.element.offsetHeight;
						Z = V.element.offsetWidth;
						W = A.getViewportWidth();
						c = A.getViewportHeight();
						b = A.getDocumentScrollLeft();
						a = A.getDocumentScrollTop();
						if (X + Y < c) {
							this.minY = a + Y;
							this.maxY = a + c - X - Y
						}
						else {
							this.minY = a + Y;
							this.maxY = a + Y
						}
						if (Z + Y < W) {
							this.minX = b + Y;
							this.maxX = b + W - Z - Y
						}
						else {
							this.minX = b + Y;
							this.maxX = b + Y
						}
						this.constrainX = true;
						this.constrainY = true
					}
					else {
						this.constrainX = false;
						this.constrainY = false
					}
					V.dragEvent.fire("startDrag", arguments)
				};
				this.dd.onDrag = function () {
					V.syncPosition();
					V.cfg.refireEvent("iframe");
					if (this.platform == "mac" && YAHOO.env.ua.gecko) {
						this.showMacGeckoScrollbars()
					}
					V.dragEvent.fire("onDrag", arguments)
				};
				this.dd.endDrag = function () {
					if (YAHOO.env.ua.ie == 6) {
						A.removeClass(V.element, "drag")
					}
					V.dragEvent.fire("endDrag", arguments);
					V.moveEvent.fire(V.cfg.getProperty("xy"))
				};
				this.dd.setHandleElId(this.header.id);
				this.dd.addInvalidHandleType("INPUT");
				this.dd.addInvalidHandleType("SELECT");
				this.dd.addInvalidHandleType("TEXTAREA")
			}
		},
		buildMask: function () {
			var U = this.mask;
			if (!U) {
				if (!G) {
					G = document.createElement("div");
					G.className = "mask";
					G.innerHTML = "&#160;"
				}
				U = G.cloneNode(true);
				U.id = this.id + "_mask";
				document.body.insertBefore(U, document.body.firstChild);
				this.mask = U;
				if (YAHOO.env.ua.gecko && this.platform == "mac") {
					A.addClass(this.mask, "block-scrollbars")
				}
				this.stackMask()
			}
		},
		hideMask: function () {
			if (this.cfg.getProperty("modal") && this.mask) {
				this.mask.style.display = "none";
				A.removeClass(document.body, "masked");
				this.hideMaskEvent.fire()
			}
		},
		showMask: function () {
			if (this.cfg.getProperty("modal") && this.mask) {
				A.addClass(document.body, "masked");
				this.sizeMask();
				this.mask.style.display = "block";
				this.showMaskEvent.fire()
			}
		},
		sizeMask: function () {
			if (this.mask) {
				var V = this.mask,
					W = A.getViewportWidth(),
					U = A.getViewportHeight();
				if (V.offsetHeight > U) {
					V.style.height = U + "px"
				}
				if (V.offsetWidth > W) {
					V.style.width = W + "px"
				}
				V.style.height = A.getDocumentHeight() + "px";
				V.style.width = A.getDocumentWidth() + "px"
			}
		},
		stackMask: function () {
			if (this.mask) {
				var U = A.getStyle(this.element, "zIndex");
				if (!YAHOO.lang.isUndefined(U) && !isNaN(U)) {
					A.setStyle(this.mask, "zIndex", U - 1)
				}
			}
		},
		render: function (U) {
			return O.superclass.render.call(this, U, this.innerElement)
		},
		destroy: function () {
			H.windowResizeEvent.unsubscribe(this.sizeMask, this);
			this.removeMask();
			if (this.close) {
				T.purgeElement(this.close)
			}
			O.superclass.destroy.call(this)
		},
		forceUnderlayRedraw: function () {
			var U = this.underlay;
			A.addClass(U, "yui-force-redraw");
			setTimeout(function () {
				A.removeClass(U, "yui-force-redraw")
			}, 0)
		},
		toString: function () {
			return "Panel " + this.id
		}
	})
}());
(function () {
	YAHOO.widget.Dialog = function (J, I) {
		YAHOO.widget.Dialog.superclass.constructor.call(this, J, I)
	};
	var B = YAHOO.util.Event,
		G = YAHOO.util.CustomEvent,
		E = YAHOO.util.Dom,
		A = YAHOO.widget.Dialog,
		F = YAHOO.lang,
		H = {
			BEFORE_SUBMIT: "beforeSubmit",
			SUBMIT: "submit",
			MANUAL_SUBMIT: "manualSubmit",
			ASYNC_SUBMIT: "asyncSubmit",
			FORM_SUBMIT: "formSubmit",
			CANCEL: "cancel"
		},
		C = {
			POST_METHOD: {
				key: "postmethod",
				value: "async"
			},
			POST_DATA: {
				key: "postdata",
				value: null
			},
			BUTTONS: {
				key: "buttons",
				value: "none",
				supercedes: ["visible"]
			},
			HIDEAFTERSUBMIT: {
				key: "hideaftersubmit",
				value: true
			}
		};
	A.CSS_DIALOG = "yui-dialog";

	function D() {
		var L = this._aButtons,
			J, K, I;
		if (F.isArray(L)) {
			J = L.length;
			if (J > 0) {
				I = J - 1;
				do {
					K = L[I];
					if (YAHOO.widget.Button && K instanceof YAHOO.widget.Button) {
						K.destroy()
					}
					else {
						if (K.tagName.toUpperCase() == "BUTTON") {
							B.purgeElement(K);
							B.purgeElement(K, false)
						}
					}
				} while (I--)
			}
		}
	}
	YAHOO.extend(A, YAHOO.widget.Panel, {
		form: null,
		initDefaultConfig: function () {
			A.superclass.initDefaultConfig.call(this);
			this.callback = {
				success: null,
				failure: null,
				argument: null
			};
			this.cfg.addProperty(C.POST_METHOD.key, {
				handler: this.configPostMethod,
				value: C.POST_METHOD.value,
				validator: function (I) {
					if (I != "form" && I != "async" && I != "none" && I != "manual") {
						return false
					}
					else {
						return true
					}
				}
			});
			this.cfg.addProperty(C.POST_DATA.key, {
				value: C.POST_DATA.value
			});
			this.cfg.addProperty(C.HIDEAFTERSUBMIT.key, {
				value: C.HIDEAFTERSUBMIT.value
			});
			this.cfg.addProperty(C.BUTTONS.key, {
				handler: this.configButtons,
				value: C.BUTTONS.value,
				supercedes: C.BUTTONS.supercedes
			})
		},
		initEvents: function () {
			A.superclass.initEvents.call(this);
			var I = G.LIST;
			this.beforeSubmitEvent = this.createEvent(H.BEFORE_SUBMIT);
			this.beforeSubmitEvent.signature = I;
			this.submitEvent = this.createEvent(H.SUBMIT);
			this.submitEvent.signature = I;
			this.manualSubmitEvent = this.createEvent(H.MANUAL_SUBMIT);
			this.manualSubmitEvent.signature = I;
			this.asyncSubmitEvent = this.createEvent(H.ASYNC_SUBMIT);
			this.asyncSubmitEvent.signature = I;
			this.formSubmitEvent = this.createEvent(H.FORM_SUBMIT);
			this.formSubmitEvent.signature = I;
			this.cancelEvent = this.createEvent(H.CANCEL);
			this.cancelEvent.signature = I
		},
		init: function (J, I) {
			A.superclass.init.call(this, J);
			this.beforeInitEvent.fire(A);
			E.addClass(this.element, A.CSS_DIALOG);
			this.cfg.setProperty("visible", false);
			if (I) {
				this.cfg.applyConfig(I, true)
			}
			this.showEvent.subscribe(this.focusFirst, this, true);
			this.beforeHideEvent.subscribe(this.blurButtons, this, true);
			this.subscribe("changeBody", this.registerForm);
			this.initEvent.fire(A)
		},
		doSubmit: function () {
			var P = YAHOO.util.Connect,
				Q = this.form,
				K = false,
				N = false,
				R, M, L, I;
			switch (this.cfg.getProperty("postmethod")) {
			case "async":
				R = Q.elements;
				M = R.length;
				if (M > 0) {
					L = M - 1;
					do {
						if (R[L].type == "file") {
							K = true;
							break
						}
					} while (L--)
				}
				if (K && YAHOO.env.ua.ie && this.isSecure) {
					N = true
				}
				I = this._getFormAttributes(Q);
				P.setForm(Q, K, N);
				var J = this.cfg.getProperty("postdata");
				var O = P.asyncRequest(I.method, I.action, this.callback, J);
				this.asyncSubmitEvent.fire(O);
				break;
			case "form":
				Q.submit();
				this.formSubmitEvent.fire();
				break;
			case "none":
			case "manual":
				this.manualSubmitEvent.fire();
				break
			}
		},
		_getFormAttributes: function (K) {
			var I = {
				method: null,
				action: null
			};
			if (K) {
				if (K.getAttributeNode) {
					var J = K.getAttributeNode("action");
					var L = K.getAttributeNode("method");
					if (J) {
						I.action = J.value
					}
					if (L) {
						I.method = L.value
					}
				}
				else {
					I.action = K.getAttribute("action");
					I.method = K.getAttribute("method")
				}
			}
			I.method = (F.isString(I.method) ? I.method : "POST").toUpperCase();
			I.action = F.isString(I.action) ? I.action : "";
			return I
		},
		registerForm: function () {
			var I = this.element.getElementsByTagName("form")[0];
			if (this.form) {
				if (this.form == I && E.isAncestor(this.element, this.form)) {
					return
				}
				else {
					B.purgeElement(this.form);
					this.form = null
				}
			}
			if (!I) {
				I = document.createElement("form");
				I.name = "frm_" + this.id;
				this.body.appendChild(I)
			}
			if (I) {
				this.form = I;
				B.on(I, "submit", this._submitHandler, this, true)
			}
		},
		_submitHandler: function (I) {
			B.stopEvent(I);
			this.submit();
			this.form.blur()
		},
		setTabLoop: function (I, J) {
			I = I || this.firstButton;
			J = this.lastButton || J;
			A.superclass.setTabLoop.call(this, I, J)
		},
		setFirstLastFocusable: function () {
			A.superclass.setFirstLastFocusable.call(this);
			var J, I, K, L = this.focusableElements;
			this.firstFormElement = null;
			this.lastFormElement = null;
			if (this.form && L && L.length > 0) {
				I = L.length;
				for (J = 0; J < I; ++J) {
					K = L[J];
					if (this.form === K.form) {
						this.firstFormElement = K;
						break
					}
				}
				for (J = I - 1; J >= 0; --J) {
					K = L[J];
					if (this.form === K.form) {
						this.lastFormElement = K;
						break
					}
				}
			}
		},
		configClose: function (J, I, K) {
			A.superclass.configClose.apply(this, arguments)
		},
		_doClose: function (I) {
			B.preventDefault(I);
			this.cancel()
		},
		configButtons: function (S, R, M) {
			var N = YAHOO.widget.Button,
				U = R[0],
				K = this.innerElement,
				T, P, J, Q, O, I, L;
			D.call(this);
			this._aButtons = null;
			if (F.isArray(U)) {
				O = document.createElement("span");
				O.className = "button-group";
				Q = U.length;
				this._aButtons = [];
				this.defaultHtmlButton = null;
				for (L = 0; L < Q; L++) {
					T = U[L];
					if (N) {
						J = new N({
							label: T.text
						});
						J.appendTo(O);
						P = J.get("element");
						if (T.isDefault) {
							J.addClass("default");
							this.defaultHtmlButton = P
						}
						if (F.isFunction(T.handler)) {
							J.set("onclick", {
								fn: T.handler,
								obj: this,
								scope: this
							})
						}
						else {
							if (F.isObject(T.handler) && F.isFunction(T.handler.fn)) {
								J.set("onclick", {
									fn: T.handler.fn,
									obj: ((!F.isUndefined(T.handler.obj)) ? T.handler.obj : this),
									scope: (T.handler.scope || this)
								})
							}
						}
						this._aButtons[this._aButtons.length] = J
					}
					else {
						P = document.createElement("button");
						P.setAttribute("type", "button");
						if (T.isDefault) {
							P.className = "default";
							this.defaultHtmlButton = P
						}
						P.innerHTML = T.text;
						if (F.isFunction(T.handler)) {
							B.on(P, "click", T.handler, this, true)
						}
						else {
							if (F.isObject(T.handler) && F.isFunction(T.handler.fn)) {
								B.on(P, "click", T.handler.fn, ((!F.isUndefined(T.handler.obj)) ? T.handler.obj : this), (T.handler.scope || this))
							}
						}
						O.appendChild(P);
						this._aButtons[this._aButtons.length] = P
					}
					T.htmlButton = P;
					if (L === 0) {
						this.firstButton = P
					}
					if (L == (Q - 1)) {
						this.lastButton = P
					}
				}
				this.setFooter(O);
				I = this.footer;
				if (E.inDocument(this.element) && !E.isAncestor(K, I)) {
					K.appendChild(I)
				}
				this.buttonSpan = O
			}
			else {
				O = this.buttonSpan;
				I = this.footer;
				if (O && I) {
					I.removeChild(O);
					this.buttonSpan = null;
					this.firstButton = null;
					this.lastButton = null;
					this.defaultHtmlButton = null
				}
			}
			this.changeContentEvent.fire()
		},
		getButtons: function () {
			return this._aButtons || null
		},
		focusFirst: function (K, I, M) {
			var J = this.firstFormElement;
			if (I && I[1]) {
				B.stopEvent(I[1])
			}
			if (J) {
				try {
					J.focus()
				}
				catch (L) {}
			}
			else {
				if (this.defaultHtmlButton) {
					this.focusDefaultButton()
				}
				else {
					this.focusFirstButton()
				}
			}
		},
		focusLast: function (K, I, M) {
			var N = this.cfg.getProperty("buttons"),
				J = this.lastFormElement;
			if (I && I[1]) {
				B.stopEvent(I[1])
			}
			if (N && F.isArray(N)) {
				this.focusLastButton()
			}
			else {
				if (J) {
					try {
						J.focus()
					}
					catch (L) {}
				}
			}
		},
		_getButton: function (J) {
			var I = YAHOO.widget.Button;
			if (I && J && J.nodeName && J.id) {
				J = I.getButton(J.id) || J
			}
			return J
		},
		focusDefaultButton: function () {
			var I = this._getButton(this.defaultHtmlButton);
			if (I) {
				try {
					I.focus()
				}
				catch (J) {}
			}
		},
		blurButtons: function () {
			var N = this.cfg.getProperty("buttons"),
				K, M, J, I;
			if (N && F.isArray(N)) {
				K = N.length;
				if (K > 0) {
					I = (K - 1);
					do {
						M = N[I];
						if (M) {
							J = this._getButton(M.htmlButton);
							if (J) {
								try {
									J.blur()
								}
								catch (L) {}
							}
						}
					} while (I--)
				}
			}
		},
		focusFirstButton: function () {
			var L = this.cfg.getProperty("buttons"),
				K, I;
			if (L && F.isArray(L)) {
				K = L[0];
				if (K) {
					I = this._getButton(K.htmlButton);
					if (I) {
						try {
							I.focus()
						}
						catch (J) {}
					}
				}
			}
		},
		focusLastButton: function () {
			var M = this.cfg.getProperty("buttons"),
				J, L, I;
			if (M && F.isArray(M)) {
				J = M.length;
				if (J > 0) {
					L = M[(J - 1)];
					if (L) {
						I = this._getButton(L.htmlButton);
						if (I) {
							try {
								I.focus()
							}
							catch (K) {}
						}
					}
				}
			}
		},
		configPostMethod: function (J, I, K) {
			this.registerForm()
		},
		validate: function () {
			return true
		},
		submit: function () {
			if (this.validate()) {
				this.beforeSubmitEvent.fire();
				this.doSubmit();
				this.submitEvent.fire();
				if (this.cfg.getProperty("hideaftersubmit")) {
					this.hide()
				}
				return true
			}
			else {
				return false
			}
		},
		cancel: function () {
			this.cancelEvent.fire();
			this.hide()
		},
		getData: function () {
			var Y = this.form,
				K, R, U, M, S, P, O, J, V, L, W, Z, I, N, a, X, T;

			function Q(c) {
				var b = c.tagName.toUpperCase();
				return ((b == "INPUT" || b == "TEXTAREA" || b == "SELECT") && c.name == M)
			}
			if (Y) {
				K = Y.elements;
				R = K.length;
				U = {};
				for (X = 0; X < R; X++) {
					M = K[X].name;
					S = E.getElementsBy(Q, "*", Y);
					P = S.length;
					if (P > 0) {
						if (P == 1) {
							S = S[0];
							O = S.type;
							J = S.tagName.toUpperCase();
							switch (J) {
							case "INPUT":
								if (O == "checkbox") {
									U[M] = S.checked
								}
								else {
									if (O != "radio") {
										U[M] = S.value
									}
								}
								break;
							case "TEXTAREA":
								U[M] = S.value;
								break;
							case "SELECT":
								V = S.options;
								L = V.length;
								W = [];
								for (T = 0; T < L; T++) {
									Z = V[T];
									if (Z.selected) {
										I = Z.value;
										if (!I || I === "") {
											I = Z.text
										}
										W[W.length] = I
									}
								}
								U[M] = W;
								break
							}
						}
						else {
							O = S[0].type;
							switch (O) {
							case "radio":
								for (T = 0; T < P; T++) {
									N = S[T];
									if (N.checked) {
										U[M] = N.value;
										break
									}
								}
								break;
							case "checkbox":
								W = [];
								for (T = 0; T < P; T++) {
									a = S[T];
									if (a.checked) {
										W[W.length] = a.value
									}
								}
								U[M] = W;
								break
							}
						}
					}
				}
			}
			return U
		},
		destroy: function () {
			D.call(this);
			this._aButtons = null;
			var I = this.element.getElementsByTagName("form"),
				J;
			if (I.length > 0) {
				J = I[0];
				if (J) {
					B.purgeElement(J);
					if (J.parentNode) {
						J.parentNode.removeChild(J)
					}
					this.form = null
				}
			}
			A.superclass.destroy.call(this)
		},
		toString: function () {
			return "Dialog " + this.id
		}
	})
}());
(function () {
	YAHOO.widget.SimpleDialog = function (E, D) {
		YAHOO.widget.SimpleDialog.superclass.constructor.call(this, E, D)
	};
	var C = YAHOO.util.Dom,
		B = YAHOO.widget.SimpleDialog,
		A = {
			ICON: {
				key: "icon",
				value: "none",
				suppressEvent: true
			},
			TEXT: {
				key: "text",
				value: "",
				suppressEvent: true,
				supercedes: ["icon"]
			}
		};
	B.ICON_BLOCK = "blckicon";
	B.ICON_ALARM = "alrticon";
	B.ICON_HELP = "hlpicon";
	B.ICON_INFO = "infoicon";
	B.ICON_WARN = "warnicon";
	B.ICON_TIP = "tipicon";
	B.ICON_CSS_CLASSNAME = "yui-icon";
	B.CSS_SIMPLEDIALOG = "yui-simple-dialog";
	YAHOO.extend(B, YAHOO.widget.Dialog, {
		initDefaultConfig: function () {
			B.superclass.initDefaultConfig.call(this);
			this.cfg.addProperty(A.ICON.key, {
				handler: this.configIcon,
				value: A.ICON.value,
				suppressEvent: A.ICON.suppressEvent
			});
			this.cfg.addProperty(A.TEXT.key, {
				handler: this.configText,
				value: A.TEXT.value,
				suppressEvent: A.TEXT.suppressEvent,
				supercedes: A.TEXT.supercedes
			})
		},
		init: function (E, D) {
			B.superclass.init.call(this, E);
			this.beforeInitEvent.fire(B);
			C.addClass(this.element, B.CSS_SIMPLEDIALOG);
			this.cfg.queueProperty("postmethod", "manual");
			if (D) {
				this.cfg.applyConfig(D, true)
			}
			this.beforeRenderEvent.subscribe(function () {
				if (!this.body) {
					this.setBody("")
				}
			}, this, true);
			this.initEvent.fire(B)
		},
		registerForm: function () {
			B.superclass.registerForm.call(this);
			this.form.innerHTML += '<input type="hidden" name="' + this.id + '" value=""/>'
		},
		configIcon: function (F, E, J) {
			var K = E[0],
				D = this.body,
				I = B.ICON_CSS_CLASSNAME,
				H, G;
			if (K && K != "none") {
				H = C.getElementsByClassName(I, "*", D);
				if (H) {
					G = H.parentNode;
					if (G) {
						G.removeChild(H);
						H = null
					}
				}
				if (K.indexOf(".") == -1) {
					H = document.createElement("span");
					H.className = (I + " " + K);
					H.innerHTML = "&#160;"
				}
				else {
					H = document.createElement("img");
					H.src = (this.imageRoot + K);
					H.className = I
				}
				if (H) {
					D.insertBefore(H, D.firstChild)
				}
			}
		},
		configText: function (E, D, F) {
			var G = D[0];
			if (G) {
				this.setBody(G);
				this.cfg.refireEvent("icon")
			}
		},
		toString: function () {
			return "SimpleDialog " + this.id
		}
	})
}());
(function () {
	YAHOO.widget.ContainerEffect = function (E, H, G, D, F) {
		if (!F) {
			F = YAHOO.util.Anim
		}
		this.overlay = E;
		this.attrIn = H;
		this.attrOut = G;
		this.targetElement = D || E.element;
		this.animClass = F
	};
	var B = YAHOO.util.Dom,
		C = YAHOO.util.CustomEvent,
		A = YAHOO.widget.ContainerEffect;
	A.FADE = function (D, F) {
		var G = YAHOO.util.Easing,
			I = {
				attributes: {
					opacity: {
						from: 0,
						to: 1
					}
				},
				duration: F,
				method: G.easeIn
			},
			E = {
				attributes: {
					opacity: {
						to: 0
					}
				},
				duration: F,
				method: G.easeOut
			},
			H = new A(D, I, E, D.element);
		H.handleUnderlayStart = function () {
			var K = this.overlay.underlay;
			if (K && YAHOO.env.ua.ie) {
				var J = (K.filters && K.filters.length > 0);
				if (J) {
					B.addClass(D.element, "yui-effect-fade")
				}
			}
		};
		H.handleUnderlayComplete = function () {
			var J = this.overlay.underlay;
			if (J && YAHOO.env.ua.ie) {
				B.removeClass(D.element, "yui-effect-fade")
			}
		};
		H.handleStartAnimateIn = function (K, J, L) {
			B.addClass(L.overlay.element, "hide-select");
			if (!L.overlay.underlay) {
				L.overlay.cfg.refireEvent("underlay")
			}
			L.handleUnderlayStart();
			L.overlay._setDomVisibility(true);
			B.setStyle(L.overlay.element, "opacity", 0)
		};
		H.handleCompleteAnimateIn = function (K, J, L) {
			B.removeClass(L.overlay.element, "hide-select");
			if (L.overlay.element.style.filter) {
				L.overlay.element.style.filter = null
			}
			L.handleUnderlayComplete();
			L.overlay.cfg.refireEvent("iframe");
			L.animateInCompleteEvent.fire()
		};
		H.handleStartAnimateOut = function (K, J, L) {
			B.addClass(L.overlay.element, "hide-select");
			L.handleUnderlayStart()
		};
		H.handleCompleteAnimateOut = function (K, J, L) {
			B.removeClass(L.overlay.element, "hide-select");
			if (L.overlay.element.style.filter) {
				L.overlay.element.style.filter = null
			}
			L.overlay._setDomVisibility(false);
			B.setStyle(L.overlay.element, "opacity", 1);
			L.handleUnderlayComplete();
			L.overlay.cfg.refireEvent("iframe");
			L.animateOutCompleteEvent.fire()
		};
		H.init();
		return H
	};
	A.SLIDE = function (F, D) {
		var I = YAHOO.util.Easing,
			L = F.cfg.getProperty("x") || B.getX(F.element),
			K = F.cfg.getProperty("y") || B.getY(F.element),
			M = B.getClientWidth(),
			H = F.element.offsetWidth,
			J = {
				attributes: {
					points: {
						to: [L, K]
					}
				},
				duration: D,
				method: I.easeIn
			},
			E = {
				attributes: {
					points: {
						to: [(M + 25), K]
					}
				},
				duration: D,
				method: I.easeOut
			},
			G = new A(F, J, E, F.element, YAHOO.util.Motion);
		G.handleStartAnimateIn = function (O, N, P) {
			P.overlay.element.style.left = ((-25) - H) + "px";
			P.overlay.element.style.top = K + "px"
		};
		G.handleTweenAnimateIn = function (Q, P, R) {
			var S = B.getXY(R.overlay.element),
				O = S[0],
				N = S[1];
			if (B.getStyle(R.overlay.element, "visibility") == "hidden" && O < L) {
				R.overlay._setDomVisibility(true)
			}
			R.overlay.cfg.setProperty("xy", [O, N], true);
			R.overlay.cfg.refireEvent("iframe")
		};
		G.handleCompleteAnimateIn = function (O, N, P) {
			P.overlay.cfg.setProperty("xy", [L, K], true);
			P.startX = L;
			P.startY = K;
			P.overlay.cfg.refireEvent("iframe");
			P.animateInCompleteEvent.fire()
		};
		G.handleStartAnimateOut = function (O, N, R) {
			var P = B.getViewportWidth(),
				S = B.getXY(R.overlay.element),
				Q = S[1];
			R.animOut.attributes.points.to = [(P + 25), Q]
		};
		G.handleTweenAnimateOut = function (P, O, Q) {
			var S = B.getXY(Q.overlay.element),
				N = S[0],
				R = S[1];
			Q.overlay.cfg.setProperty("xy", [N, R], true);
			Q.overlay.cfg.refireEvent("iframe")
		};
		G.handleCompleteAnimateOut = function (O, N, P) {
			P.overlay._setDomVisibility(false);
			P.overlay.cfg.setProperty("xy", [L, K]);
			P.animateOutCompleteEvent.fire()
		};
		G.init();
		return G
	};
	A.prototype = {
		init: function () {
			this.beforeAnimateInEvent = this.createEvent("beforeAnimateIn");
			this.beforeAnimateInEvent.signature = C.LIST;
			this.beforeAnimateOutEvent = this.createEvent("beforeAnimateOut");
			this.beforeAnimateOutEvent.signature = C.LIST;
			this.animateInCompleteEvent = this.createEvent("animateInComplete");
			this.animateInCompleteEvent.signature = C.LIST;
			this.animateOutCompleteEvent = this.createEvent("animateOutComplete");
			this.animateOutCompleteEvent.signature = C.LIST;
			this.animIn = new this.animClass(this.targetElement, this.attrIn.attributes, this.attrIn.duration, this.attrIn.method);
			this.animIn.onStart.subscribe(this.handleStartAnimateIn, this);
			this.animIn.onTween.subscribe(this.handleTweenAnimateIn, this);
			this.animIn.onComplete.subscribe(this.handleCompleteAnimateIn, this);
			this.animOut = new this.animClass(this.targetElement, this.attrOut.attributes, this.attrOut.duration, this.attrOut.method);
			this.animOut.onStart.subscribe(this.handleStartAnimateOut, this);
			this.animOut.onTween.subscribe(this.handleTweenAnimateOut, this);
			this.animOut.onComplete.subscribe(this.handleCompleteAnimateOut, this)
		},
		animateIn: function () {
			this.beforeAnimateInEvent.fire();
			this.animIn.animate()
		},
		animateOut: function () {
			this.beforeAnimateOutEvent.fire();
			this.animOut.animate()
		},
		handleStartAnimateIn: function (E, D, F) {},
		handleTweenAnimateIn: function (E, D, F) {},
		handleCompleteAnimateIn: function (E, D, F) {},
		handleStartAnimateOut: function (E, D, F) {},
		handleTweenAnimateOut: function (E, D, F) {},
		handleCompleteAnimateOut: function (E, D, F) {},
		toString: function () {
			var D = "ContainerEffect";
			if (this.overlay) {
				D += " [" + this.overlay.toString() + "]"
			}
			return D
		}
	};
	YAHOO.lang.augmentProto(A, YAHOO.util.EventProvider)
})();
YAHOO.register("container", YAHOO.widget.Module, {
	version: "2.7.0",
	build: "1799"
});
(function () {
	var A = YAHOO.util;
	A.Selector = {
		_foundCache: [],
		_regexCache: {},
		_re: {
			nth: /^(?:([-]?\d*)(n){1}|(odd|even)$)*([-+]?\d*)$/,
			attr: /(\[.*\])/g,
			urls: /^(?:href|src)/
		},
		document: window.document,
		attrAliases: {},
		shorthand: {
			"\\#(-?[_a-z]+[-\\w]*)": "[id=$1]",
			"\\.(-?[_a-z]+[-\\w]*)": "[class~=$1]"
		},
		operators: {
			"=": function (B, C) {
				return B === C
			},
			"!=": function (B, C) {
				return B !== C
			},
			"~=": function (B, D) {
				var C = " ";
				return (C + B + C).indexOf((C + D + C)) > -1
			},
			"|=": function (B, C) {
				return B === C || B.slice(0, C.length + 1) === C + "-"
			},
			"^=": function (B, C) {
				return B.indexOf(C) === 0
			},
			"$=": function (B, C) {
				return B.slice(-C.length) === C
			},
			"*=": function (B, C) {
				return B.indexOf(C) > -1
			},
			"": function (B, C) {
				return B
			}
		},
		pseudos: {
			root: function (B) {
				return B === B.ownerDocument.documentElement
			},
			"nth-child": function (B, C) {
				return A.Selector._getNth(B, C)
			},
			"nth-last-child": function (B, C) {
				return A.Selector._getNth(B, C, null, true)
			},
			"nth-of-type": function (B, C) {
				return A.Selector._getNth(B, C, B.tagName)
			},
			"nth-last-of-type": function (B, C) {
				return A.Selector._getNth(B, C, B.tagName, true)
			},
			"first-child": function (B) {
				return A.Selector._getChildren(B.parentNode)[0] === B
			},
			"last-child": function (C) {
				var B = A.Selector._getChildren(C.parentNode);
				return B[B.length - 1] === C
			},
			"first-of-type": function (B, C) {
				return A.Selector._getChildren(B.parentNode, B.tagName)[0]
			},
			"last-of-type": function (C, D) {
				var B = A.Selector._getChildren(C.parentNode, C.tagName);
				return B[B.length - 1]
			},
			"only-child": function (C) {
				var B = A.Selector._getChildren(C.parentNode);
				return B.length === 1 && B[0] === C
			},
			"only-of-type": function (B) {
				return A.Selector._getChildren(B.parentNode, B.tagName).length === 1
			},
			empty: function (B) {
				return B.childNodes.length === 0
			},
			not: function (B, C) {
				return !A.Selector.test(B, C)
			},
			contains: function (B, D) {
				var C = B.innerText || B.textContent || "";
				return C.indexOf(D) > -1
			},
			checked: function (B) {
				return B.checked === true
			}
		},
		test: function (F, D) {
			F = A.Selector.document.getElementById(F) || F;
			if (!F) {
				return false
			}
			var C = D ? D.split(",") : [];
			if (C.length) {
				for (var E = 0, B = C.length; E < B; ++E) {
					if (A.Selector._test(F, C[E])) {
						return true
					}
				}
				return false
			}
			return A.Selector._test(F, D)
		},
		_test: function (D, G, F, E) {
			F = F || A.Selector._tokenize(G).pop() || {};
			if (!D.tagName || (F.tag !== "*" && D.tagName !== F.tag) || (E && D._found)) {
				return false
			}
			if (F.attributes.length) {
				var B, H, C = A.Selector._re.urls;
				if (!D.attributes || !D.attributes.length) {
					return false
				}
				for (var I = 0, K; K = F.attributes[I++];) {
					H = (C.test(K[0])) ? 2 : 0;
					B = D.getAttribute(K[0], H);
					if (B === null || B === undefined) {
						return false
					}
					if (A.Selector.operators[K[1]] && !A.Selector.operators[K[1]](B, K[2])) {
						return false
					}
				}
			}
			if (F.pseudos.length) {
				for (var I = 0, J = F.pseudos.length; I < J; ++I) {
					if (A.Selector.pseudos[F.pseudos[I][0]] && !A.Selector.pseudos[F.pseudos[I][0]](D, F.pseudos[I][1])) {
						return false
					}
				}
			}
			return (F.previous && F.previous.combinator !== ",") ? A.Selector._combinators[F.previous.combinator](D, F) : true
		},
		filter: function (E, D) {
			E = E || [];
			var G, C = [],
				H = A.Selector._tokenize(D);
			if (!E.item) {
				for (var F = 0, B = E.length; F < B; ++F) {
					if (!E[F].tagName) {
						G = A.Selector.document.getElementById(E[F]);
						if (G) {
							E[F] = G
						}
						else {}
					}
				}
			}
			C = A.Selector._filter(E, A.Selector._tokenize(D)[0]);
			return C
		},
		_filter: function (E, G, H, D) {
			var C = H ? null : [],
				I = A.Selector._foundCache;
			for (var F = 0, B = E.length; F < B; F++) {
				if (!A.Selector._test(E[F], "", G, D)) {
					continue
				}
				if (H) {
					return E[F]
				}
				if (D) {
					if (E[F]._found) {
						continue
					}
					E[F]._found = true;
					I[I.length] = E[F]
				}
				C[C.length] = E[F]
			}
			return C
		},
		query: function (C, D, E) {
			var B = A.Selector._query(C, D, E);
			return B
		},
		_query: function (H, M, N, F) {
			var P = (N) ? null : [],
				E;
			if (!H) {
				return P
			}
			var D = H.split(",");
			if (D.length > 1) {
				var O;
				for (var I = 0, J = D.length; I < J; ++I) {
					O = arguments.callee(D[I], M, N, true);
					P = N ? O : P.concat(O)
				}
				A.Selector._clearFoundCache();
				return P
			}
			if (M && !M.nodeName) {
				M = A.Selector.document.getElementById(M);
				if (!M) {
					return P
				}
			}
			M = M || A.Selector.document;
			if (M.nodeName !== "#document") {
				A.Dom.generateId(M);
				H = M.tagName + "#" + M.id + " " + H;
				E = M;
				M = M.ownerDocument
			}
			var L = A.Selector._tokenize(H);
			var K = L[A.Selector._getIdTokenIndex(L)],
				B = [],
				C, G = L.pop() || {};
			if (K) {
				C = A.Selector._getId(K.attributes)
			}
			if (C) {
				E = E || A.Selector.document.getElementById(C);
				if (E && (M.nodeName === "#document" || A.Dom.isAncestor(M, E))) {
					if (A.Selector._test(E, null, K)) {
						if (K === G) {
							B = [E]
						}
						else {
							if (K.combinator === " " || K.combinator === ">") {
								M = E
							}
						}
					}
				}
				else {
					return P
				}
			}
			if (M && !B.length) {
				B = M.getElementsByTagName(G.tag)
			}
			if (B.length) {
				P = A.Selector._filter(B, G, N, F)
			}
			return P
		},
		_clearFoundCache: function () {
			var E = A.Selector._foundCache;
			for (var C = 0, B = E.length; C < B; ++C) {
				try {
					delete E[C]._found
				}
				catch (D) {
					E[C].removeAttribute("_found")
				}
			}
			E = []
		},
		_getRegExp: function (D, B) {
			var C = A.Selector._regexCache;
			B = B || "";
			if (!C[D + B]) {
				C[D + B] = new RegExp(D, B)
			}
			return C[D + B]
		},
		_getChildren: function () {
			if (document.documentElement.children) {
				return function (C, B) {
					return (B) ? C.children.tags(B) : C.children || []
				}
			}
			else {
				return function (F, C) {
					if (F._children) {
						return F._children
					}
					var E = [],
						G = F.childNodes;
					for (var D = 0, B = G.length; D < B; ++D) {
						if (G[D].tagName) {
							if (!C || G[D].tagName === C) {
								E[E.length] = G[D]
							}
						}
					}
					F._children = E;
					return E
				}
			}
		}(),
		_combinators: {
			" ": function (C, B) {
				while ((C = C.parentNode)) {
					if (A.Selector._test(C, "", B.previous)) {
						return true
					}
				}
				return false
			},
			">": function (C, B) {
				return A.Selector._test(C.parentNode, null, B.previous)
			},
			"+": function (D, C) {
				var B = D.previousSibling;
				while (B && B.nodeType !== 1) {
					B = B.previousSibling
				}
				if (B && A.Selector._test(B, null, C.previous)) {
					return true
				}
				return false
			},
			"~": function (D, C) {
				var B = D.previousSibling;
				while (B) {
					if (B.nodeType === 1 && A.Selector._test(B, null, C.previous)) {
						return true
					}
					B = B.previousSibling
				}
				return false
			}
		},
		_getNth: function (C, L, N, G) {
			A.Selector._re.nth.test(L);
			var K = parseInt(RegExp.$1, 10),
				B = RegExp.$2,
				H = RegExp.$3,
				I = parseInt(RegExp.$4, 10) || 0,
				M = [],
				E;
			var J = A.Selector._getChildren(C.parentNode, N);
			if (H) {
				K = 2;
				E = "+";
				B = "n";
				I = (H === "odd") ? 1 : 0
			}
			else {
				if (isNaN(K)) {
					K = (B) ? 1 : 0
				}
			}
			if (K === 0) {
				if (G) {
					I = J.length - I + 1
				}
				if (J[I - 1] === C) {
					return true
				}
				else {
					return false
				}
			}
			else {
				if (K < 0) {
					G = !!G;
					K = Math.abs(K)
				}
			}
			if (!G) {
				for (var D = I - 1, F = J.length; D < F; D += K) {
					if (D >= 0 && J[D] === C) {
						return true
					}
				}
			}
			else {
				for (var D = J.length - I, F = J.length; D >= 0; D -= K) {
					if (D < F && J[D] === C) {
						return true
					}
				}
			}
			return false
		},
		_getId: function (C) {
			for (var D = 0, B = C.length; D < B; ++D) {
				if (C[D][0] == "id" && C[D][1] === "=") {
					return C[D][2]
				}
			}
		},
		_getIdTokenIndex: function (D) {
			for (var C = 0, B = D.length; C < B; ++C) {
				if (A.Selector._getId(D[C].attributes)) {
					return C
				}
			}
			return -1
		},
		_patterns: {
			tag: /^((?:-?[_a-z]+[\w-]*)|\*)/i,
			attributes: /^\[([a-z]+\w*)+([~\|\^\$\*!=]=?)?['"]?([^\]]*?)['"]?\]/i,
			pseudos: /^:([-\w]+)(?:\(['"]?(.+)['"]?\))*/i,
			combinator: /^\s*([>+~]|\s)\s*/
		},
		_tokenize: function (B) {
			var D = {},
				H = [],
				I, G = false,
				F = A.Selector._patterns,
				C;
			B = A.Selector._replaceShorthand(B);
			do {
				G = false;
				for (var E in F) {
					if (YAHOO.lang.hasOwnProperty(F, E)) {
						if (E != "tag" && E != "combinator") {
							D[E] = D[E] || []
						}
						if ((C = F[E].exec(B))) {
							G = true;
							if (E != "tag" && E != "combinator") {
								if (E === "attributes" && C[1] === "id") {
									D.id = C[3]
								}
								D[E].push(C.slice(1))
							}
							else {
								D[E] = C[1]
							}
							B = B.replace(C[0], "");
							if (E === "combinator" || !B.length) {
								D.attributes = A.Selector._fixAttributes(D.attributes);
								D.pseudos = D.pseudos || [];
								D.tag = D.tag ? D.tag.toUpperCase() : "*";
								H.push(D);
								D = {
									previous: D
								}
							}
						}
					}
				}
			} while (G);
			return H
		},
		_fixAttributes: function (C) {
			var D = A.Selector.attrAliases;
			C = C || [];
			for (var E = 0, B = C.length; E < B; ++E) {
				if (D[C[E][0]]) {
					C[E][0] = D[C[E][0]]
				}
				if (!C[E][1]) {
					C[E][1] = ""
				}
			}
			return C
		},
		_replaceShorthand: function (C) {
			var D = A.Selector.shorthand;
			var E = C.match(A.Selector._re.attr);
			if (E) {
				C = C.replace(A.Selector._re.attr, "REPLACED_ATTRIBUTE")
			}
			for (var G in D) {
				if (YAHOO.lang.hasOwnProperty(D, G)) {
					C = C.replace(A.Selector._getRegExp(G, "gi"), D[G])
				}
			}
			if (E) {
				for (var F = 0, B = E.length; F < B; ++F) {
					C = C.replace("REPLACED_ATTRIBUTE", E[F])
				}
			}
			return C
		}
	};
	if (YAHOO.env.ua.ie && YAHOO.env.ua.ie < 8) {
		A.Selector.attrAliases["class"] = "className";
		A.Selector.attrAliases["for"] = "htmlFor"
	}
})();
YAHOO.register("selector", YAHOO.util.Selector, {
	version: "2.7.0",
	build: "1799"
});
if (typeof YAHOO == "undefined" || !YAHOO) {
	var YAHOO = {}
}
YAHOO.namespace = function () {
	var A = arguments,
		E = null,
		C, B, D;
	for (C = 0; C < A.length; C = C + 1) {
		D = ("" + A[C]).split(".");
		E = YAHOO;
		for (B = (D[0] == "YAHOO") ? 1 : 0; B < D.length; B = B + 1) {
			E[D[B]] = E[D[B]] || {};
			E = E[D[B]]
		}
	}
	return E
};
YAHOO.log = function (D, A, C) {
	var B = YAHOO.widget.Logger;
	if (B && B.log) {
		return B.log(D, A, C)
	}
	else {
		return false
	}
};
YAHOO.register = function (A, E, D) {
	var I = YAHOO.env.modules,
		B, H, G, F, C;
	if (!I[A]) {
		I[A] = {
			versions: [],
			builds: []
		}
	}
	B = I[A];
	H = D.version;
	G = D.build;
	F = YAHOO.env.listeners;
	B.name = A;
	B.version = H;
	B.build = G;
	B.versions.push(H);
	B.builds.push(G);
	B.mainClass = E;
	for (C = 0; C < F.length; C = C + 1) {
		F[C](B)
	}
	if (E) {
		E.VERSION = H;
		E.BUILD = G
	}
	else {
		YAHOO.log("mainClass is undefined for module " + A, "warn")
	}
};
YAHOO.env = YAHOO.env || {
	modules: [],
	listeners: []
};
YAHOO.env.getVersion = function (A) {
	return YAHOO.env.modules[A] || null
};
YAHOO.env.ua = function () {
	var C = {
			ie: 0,
			opera: 0,
			gecko: 0,
			webkit: 0,
			mobile: null,
			air: 0,
			caja: 0
		},
		B = navigator.userAgent,
		A;
	if ((/KHTML/).test(B)) {
		C.webkit = 1
	}
	A = B.match(/AppleWebKit\/([^\s]*)/);
	if (A && A[1]) {
		C.webkit = parseFloat(A[1]);
		if (/ Mobile\//.test(B)) {
			C.mobile = "Apple"
		}
		else {
			A = B.match(/NokiaN[^\/]*/);
			if (A) {
				C.mobile = A[0]
			}
		}
		A = B.match(/AdobeAIR\/([^\s]*)/);
		if (A) {
			C.air = A[0]
		}
	}
	if (!C.webkit) {
		A = B.match(/Opera[\s\/]([^\s]*)/);
		if (A && A[1]) {
			C.opera = parseFloat(A[1]);
			A = B.match(/Opera Mini[^;]*/);
			if (A) {
				C.mobile = A[0]
			}
		}
		else {
			A = B.match(/MSIE\s([^;]*)/);
			if (A && A[1]) {
				C.ie = parseFloat(A[1])
			}
			else {
				A = B.match(/Gecko\/([^\s]*)/);
				if (A) {
					C.gecko = 1;
					A = B.match(/rv:([^\s\)]*)/);
					if (A && A[1]) {
						C.gecko = parseFloat(A[1])
					}
				}
			}
		}
	}
	A = B.match(/Caja\/([^\s]*)/);
	if (A && A[1]) {
		C.caja = parseFloat(A[1])
	}
	return C
}();
(function () {
	YAHOO.namespace("util", "widget", "example");
	if ("undefined" !== typeof YAHOO_config) {
		var B = YAHOO_config.listener,
			A = YAHOO.env.listeners,
			D = true,
			C;
		if (B) {
			for (C = 0; C < A.length; C = C + 1) {
				if (A[C] == B) {
					D = false;
					break
				}
			}
			if (D) {
				A.push(B)
			}
		}
	}
})();
YAHOO.lang = YAHOO.lang || {};
(function () {
	var B = YAHOO.lang,
		F = "[object Array]",
		C = "[object Function]",
		A = Object.prototype,
		E = ["toString", "valueOf"],
		D = {
			isArray: function (G) {
				return A.toString.apply(G) === F
			},
			isBoolean: function (G) {
				return typeof G === "boolean"
			},
			isFunction: function (G) {
				return A.toString.apply(G) === C
			},
			isNull: function (G) {
				return G === null
			},
			isNumber: function (G) {
				return typeof G === "number" && isFinite(G)
			},
			isObject: function (G) {
				return (G && (typeof G === "object" || B.isFunction(G))) || false
			},
			isString: function (G) {
				return typeof G === "string"
			},
			isUndefined: function (G) {
				return typeof G === "undefined"
			},
			_IEEnumFix: (YAHOO.env.ua.ie) ? function (I, H) {
				var G, K, J;
				for (G = 0; G < E.length; G = G + 1) {
					K = E[G];
					J = H[K];
					if (B.isFunction(J) && J != A[K]) {
						I[K] = J
					}
				}
			} : function () {},
			extend: function (J, K, I) {
				if (!K || !J) {
					throw new Error("extend failed, please check that all dependencies are included.")
				}
				var H = function () {},
					G;
				H.prototype = K.prototype;
				J.prototype = new H();
				J.prototype.constructor = J;
				J.superclass = K.prototype;
				if (K.prototype.constructor == A.constructor) {
					K.prototype.constructor = K
				}
				if (I) {
					for (G in I) {
						if (B.hasOwnProperty(I, G)) {
							J.prototype[G] = I[G]
						}
					}
					B._IEEnumFix(J.prototype, I)
				}
			},
			augmentObject: function (K, J) {
				if (!J || !K) {
					throw new Error("Absorb failed, verify dependencies.")
				}
				var G = arguments,
					I, L, H = G[2];
				if (H && H !== true) {
					for (I = 2; I < G.length; I = I + 1) {
						K[G[I]] = J[G[I]]
					}
				}
				else {
					for (L in J) {
						if (H || !(L in K)) {
							K[L] = J[L]
						}
					}
					B._IEEnumFix(K, J)
				}
			},
			augmentProto: function (J, I) {
				if (!I || !J) {
					throw new Error("Augment failed, verify dependencies.")
				}
				var G = [J.prototype, I.prototype],
					H;
				for (H = 2; H < arguments.length; H = H + 1) {
					G.push(arguments[H])
				}
				B.augmentObject.apply(this, G)
			},
			dump: function (G, L) {
				var I, K, N = [],
					O = "{...}",
					H = "f(){...}",
					M = ", ",
					J = " => ";
				if (!B.isObject(G)) {
					return G + ""
				}
				else {
					if (G instanceof Date || ("nodeType" in G && "tagName" in G)) {
						return G
					}
					else {
						if (B.isFunction(G)) {
							return H
						}
					}
				}
				L = (B.isNumber(L)) ? L : 3;
				if (B.isArray(G)) {
					N.push("[");
					for (I = 0, K = G.length; I < K; I = I + 1) {
						if (B.isObject(G[I])) {
							N.push((L > 0) ? B.dump(G[I], L - 1) : O)
						}
						else {
							N.push(G[I])
						}
						N.push(M)
					}
					if (N.length > 1) {
						N.pop()
					}
					N.push("]")
				}
				else {
					N.push("{");
					for (I in G) {
						if (B.hasOwnProperty(G, I)) {
							N.push(I + J);
							if (B.isObject(G[I])) {
								N.push((L > 0) ? B.dump(G[I], L - 1) : O)
							}
							else {
								N.push(G[I])
							}
							N.push(M)
						}
					}
					if (N.length > 1) {
						N.pop()
					}
					N.push("}")
				}
				return N.join("")
			},
			substitute: function (V, H, O) {
				var L, K, J, R, S, U, Q = [],
					I, M = "dump",
					P = " ",
					G = "{",
					T = "}",
					N;
				for (;;) {
					L = V.lastIndexOf(G);
					if (L < 0) {
						break
					}
					K = V.indexOf(T, L);
					if (L + 1 >= K) {
						break
					}
					I = V.substring(L + 1, K);
					R = I;
					U = null;
					J = R.indexOf(P);
					if (J > -1) {
						U = R.substring(J + 1);
						R = R.substring(0, J)
					}
					S = H[R];
					if (O) {
						S = O(R, S, U)
					}
					if (B.isObject(S)) {
						if (B.isArray(S)) {
							S = B.dump(S, parseInt(U, 10))
						}
						else {
							U = U || "";
							N = U.indexOf(M);
							if (N > -1) {
								U = U.substring(4)
							}
							if (S.toString === A.toString || N > -1) {
								S = B.dump(S, parseInt(U, 10))
							}
							else {
								S = S.toString()
							}
						}
					}
					else {
						if (!B.isString(S) && !B.isNumber(S)) {
							S = "~-" + Q.length + "-~";
							Q[Q.length] = I
						}
					}
					V = V.substring(0, L) + S + V.substring(K + 1)
				}
				for (L = Q.length - 1; L >= 0; L = L - 1) {
					V = V.replace(new RegExp("~-" + L + "-~"), "{" + Q[L] + "}", "g")
				}
				return V
			},
			trim: function (G) {
				try {
					return G.replace(/^\s+|\s+$/g, "")
				}
				catch (H) {
					return G
				}
			},
			merge: function () {
				var J = {},
					H = arguments,
					G = H.length,
					I;
				for (I = 0; I < G; I = I + 1) {
					B.augmentObject(J, H[I], true)
				}
				return J
			},
			later: function (N, H, O, J, K) {
				N = N || 0;
				H = H || {};
				var I = O,
					M = J,
					L, G;
				if (B.isString(O)) {
					I = H[O]
				}
				if (!I) {
					throw new TypeError("method undefined")
				}
				if (!B.isArray(M)) {
					M = [J]
				}
				L = function () {
					I.apply(H, M)
				};
				G = (K) ? setInterval(L, N) : setTimeout(L, N);
				return {
					interval: K,
					cancel: function () {
						if (this.interval) {
							clearInterval(G)
						}
						else {
							clearTimeout(G)
						}
					}
				}
			},
			isValue: function (G) {
				return (B.isObject(G) || B.isString(G) || B.isNumber(G) || B.isBoolean(G))
			}
		};
	B.hasOwnProperty = (A.hasOwnProperty) ? function (G, H) {
		return G && G.hasOwnProperty(H)
	} : function (G, H) {
		return !B.isUndefined(G[H]) && G.constructor.prototype[H] !== G[H]
	};
	D.augmentObject(B, D, true);
	YAHOO.util.Lang = B;
	B.augment = B.augmentProto;
	YAHOO.augment = B.augmentProto;
	YAHOO.extend = B.extend
})();
YAHOO.register("yahoo", YAHOO, {
	version: "2.7.0",
	build: "1799"
});
(function () {
	YAHOO.env._id_counter = YAHOO.env._id_counter || 0;
	var E = YAHOO.util,
		L = YAHOO.lang,
		m = YAHOO.env.ua,
		A = YAHOO.lang.trim,
		d = {},
		h = {},
		N = /^t(?:able|d|h)$/i,
		X = /color$/i,
		K = window.document,
		W = K.documentElement,
		e = "ownerDocument",
		n = "defaultView",
		v = "documentElement",
		t = "compatMode",
		b = "offsetLeft",
		P = "offsetTop",
		u = "offsetParent",
		Z = "parentNode",
		l = "nodeType",
		C = "tagName",
		O = "scrollLeft",
		i = "scrollTop",
		Q = "getBoundingClientRect",
		w = "getComputedStyle",
		a = "currentStyle",
		M = "CSS1Compat",
		c = "BackCompat",
		g = "class",
		F = "className",
		J = "",
		B = " ",
		s = "(?:^|\\s)",
		k = "(?= |$)",
		U = "g",
		p = "position",
		f = "fixed",
		V = "relative",
		j = "left",
		o = "top",
		r = "medium",
		q = "borderLeftWidth",
		R = "borderTopWidth",
		D = m.opera,
		I = m.webkit,
		H = m.gecko,
		T = m.ie;
	E.Dom = {
		CUSTOM_ATTRIBUTES: (!W.hasAttribute) ? {
			"for": "htmlFor",
			"class": F
		} : {
			htmlFor: "for",
			className: g
		},
		get: function (y) {
			var AA, Y, z, x, G;
			if (y) {
				if (y[l] || y.item) {
					return y
				}
				if (typeof y === "string") {
					AA = y;
					y = K.getElementById(y);
					if (y && y.id === AA) {
						return y
					}
					else {
						if (y && K.all) {
							y = null;
							Y = K.all[AA];
							for (x = 0, G = Y.length; x < G; ++x) {
								if (Y[x].id === AA) {
									return Y[x]
								}
							}
						}
					}
					return y
				}
				if (y.DOM_EVENTS) {
					y = y.get("element")
				}
				if ("length" in y) {
					z = [];
					for (x = 0, G = y.length; x < G; ++x) {
						z[z.length] = E.Dom.get(y[x])
					}
					return z
				}
				return y
			}
			return null
		},
		getComputedStyle: function (G, Y) {
			if (window[w]) {
				return G[e][n][w](G, null)[Y]
			}
			else {
				if (G[a]) {
					return E.Dom.IE_ComputedStyle.get(G, Y)
				}
			}
		},
		getStyle: function (G, Y) {
			return E.Dom.batch(G, E.Dom._getStyle, Y)
		},
		_getStyle: function () {
			if (window[w]) {
				return function (G, y) {
					y = (y === "float") ? y = "cssFloat" : E.Dom._toCamel(y);
					var x = G.style[y],
						Y;
					if (!x) {
						Y = G[e][n][w](G, null);
						if (Y) {
							x = Y[y]
						}
					}
					return x
				}
			}
			else {
				if (W[a]) {
					return function (G, y) {
						var x;
						switch (y) {
						case "opacity":
							x = 100;
							try {
								x = G.filters["DXImageTransform.Microsoft.Alpha"].opacity
							}
							catch (z) {
								try {
									x = G.filters("alpha").opacity
								}
								catch (Y) {}
							}
							return x / 100;
						case "float":
							y = "styleFloat";
						default:
							y = E.Dom._toCamel(y);
							x = G[a] ? G[a][y] : null;
							return (G.style[y] || x)
						}
					}
				}
			}
		}(),
		setStyle: function (G, Y, x) {
			E.Dom.batch(G, E.Dom._setStyle, {
				prop: Y,
				val: x
			})
		},
		_setStyle: function () {
			if (T) {
				return function (Y, G) {
					var x = E.Dom._toCamel(G.prop),
						y = G.val;
					if (Y) {
						switch (x) {
						case "opacity":
							if (L.isString(Y.style.filter)) {
								Y.style.filter = "alpha(opacity=" + y * 100 + ")";
								if (!Y[a] || !Y[a].hasLayout) {
									Y.style.zoom = 1
								}
							}
							break;
						case "float":
							x = "styleFloat";
						default:
							Y.style[x] = y
						}
					}
					else {}
				}
			}
			else {
				return function (Y, G) {
					var x = E.Dom._toCamel(G.prop),
						y = G.val;
					if (Y) {
						if (x == "float") {
							x = "cssFloat"
						}
						Y.style[x] = y
					}
					else {}
				}
			}
		}(),
		getXY: function (G) {
			return E.Dom.batch(G, E.Dom._getXY)
		},
		_canPosition: function (G) {
			return (E.Dom._getStyle(G, "display") !== "none" && E.Dom._inDoc(G))
		},
		_getXY: function () {
			if (K[v][Q]) {
				return function (y) {
					var z, Y, AA, AF, AE, AD, AC, G, x, AB = Math.floor,
						AG = false;
					if (E.Dom._canPosition(y)) {
						AA = y[Q]();
						AF = y[e];
						z = E.Dom.getDocumentScrollLeft(AF);
						Y = E.Dom.getDocumentScrollTop(AF);
						AG = [AB(AA[j]), AB(AA[o])];
						if (T && m.ie < 8) {
							AE = 2;
							AD = 2;
							AC = AF[t];
							G = S(AF[v], q);
							x = S(AF[v], R);
							if (m.ie === 6) {
								if (AC !== c) {
									AE = 0;
									AD = 0
								}
							}
							if ((AC == c)) {
								if (G !== r) {
									AE = parseInt(G, 10)
								}
								if (x !== r) {
									AD = parseInt(x, 10)
								}
							}
							AG[0] -= AE;
							AG[1] -= AD
						}
						if ((Y || z)) {
							AG[0] += z;
							AG[1] += Y
						}
						AG[0] = AB(AG[0]);
						AG[1] = AB(AG[1])
					}
					else {}
					return AG
				}
			}
			else {
				return function (y) {
					var x, Y, AA, AB, AC, z = false,
						G = y;
					if (E.Dom._canPosition(y)) {
						z = [y[b], y[P]];
						x = E.Dom.getDocumentScrollLeft(y[e]);
						Y = E.Dom.getDocumentScrollTop(y[e]);
						AC = ((H || m.webkit > 519) ? true : false);
						while ((G = G[u])) {
							z[0] += G[b];
							z[1] += G[P];
							if (AC) {
								z = E.Dom._calcBorders(G, z)
							}
						}
						if (E.Dom._getStyle(y, p) !== f) {
							G = y;
							while ((G = G[Z]) && G[C]) {
								AA = G[i];
								AB = G[O];
								if (H && (E.Dom._getStyle(G, "overflow") !== "visible")) {
									z = E.Dom._calcBorders(G, z)
								}
								if (AA || AB) {
									z[0] -= AB;
									z[1] -= AA
								}
							}
							z[0] += x;
							z[1] += Y
						}
						else {
							if (D) {
								z[0] -= x;
								z[1] -= Y
							}
							else {
								if (I || H) {
									z[0] += x;
									z[1] += Y
								}
							}
						}
						z[0] = Math.floor(z[0]);
						z[1] = Math.floor(z[1])
					}
					else {}
					return z
				}
			}
		}(),
		getX: function (G) {
			var Y = function (x) {
				return E.Dom.getXY(x)[0]
			};
			return E.Dom.batch(G, Y, E.Dom, true)
		},
		getY: function (G) {
			var Y = function (x) {
				return E.Dom.getXY(x)[1]
			};
			return E.Dom.batch(G, Y, E.Dom, true)
		},
		setXY: function (G, x, Y) {
			E.Dom.batch(G, E.Dom._setXY, {
				pos: x,
				noRetry: Y
			})
		},
		_setXY: function (G, z) {
			var AA = E.Dom._getStyle(G, p),
				y = E.Dom.setStyle,
				AD = z.pos,
				Y = z.noRetry,
				AB = [parseInt(E.Dom.getComputedStyle(G, j), 10), parseInt(E.Dom.getComputedStyle(G, o), 10)],
				AC, x;
			if (AA == "static") {
				AA = V;
				y(G, p, AA)
			}
			AC = E.Dom._getXY(G);
			if (!AD || AC === false) {
				return false
			}
			if (isNaN(AB[0])) {
				AB[0] = (AA == V) ? 0 : G[b]
			}
			if (isNaN(AB[1])) {
				AB[1] = (AA == V) ? 0 : G[P]
			}
			if (AD[0] !== null) {
				y(G, j, AD[0] - AC[0] + AB[0] + "px")
			}
			if (AD[1] !== null) {
				y(G, o, AD[1] - AC[1] + AB[1] + "px")
			}
			if (!Y) {
				x = E.Dom._getXY(G);
				if ((AD[0] !== null && x[0] != AD[0]) || (AD[1] !== null && x[1] != AD[1])) {
					E.Dom._setXY(G, {
						pos: AD,
						noRetry: true
					})
				}
			}
		},
		setX: function (Y, G) {
			E.Dom.setXY(Y, [G, null])
		},
		setY: function (G, Y) {
			E.Dom.setXY(G, [null, Y])
		},
		getRegion: function (G) {
			var Y = function (x) {
				var y = false;
				if (E.Dom._canPosition(x)) {
					y = E.Region.getRegion(x)
				}
				else {}
				return y
			};
			return E.Dom.batch(G, Y, E.Dom, true)
		},
		getClientWidth: function () {
			return E.Dom.getViewportWidth()
		},
		getClientHeight: function () {
			return E.Dom.getViewportHeight()
		},
		getElementsByClassName: function (AB, AF, AC, AE, x, AD) {
			AB = L.trim(AB);
			AF = AF || "*";
			AC = (AC) ? E.Dom.get(AC) : null || K;
			if (!AC) {
				return []
			}
			var Y = [],
				G = AC.getElementsByTagName(AF),
				z = E.Dom.hasClass;
			for (var y = 0, AA = G.length; y < AA; ++y) {
				if (z(G[y], AB)) {
					Y[Y.length] = G[y]
				}
			}
			if (AE) {
				E.Dom.batch(Y, AE, x, AD)
			}
			return Y
		},
		hasClass: function (Y, G) {
			return E.Dom.batch(Y, E.Dom._hasClass, G)
		},
		_hasClass: function (x, Y) {
			var G = false,
				y;
			if (x && Y) {
				y = E.Dom.getAttribute(x, F) || J;
				if (Y.exec) {
					G = Y.test(y)
				}
				else {
					G = Y && (B + y + B).indexOf(B + Y + B) > -1
				}
			}
			else {}
			return G
		},
		addClass: function (Y, G) {
			return E.Dom.batch(Y, E.Dom._addClass, G)
		},
		_addClass: function (x, Y) {
			var G = false,
				y;
			if (x && Y) {
				y = E.Dom.getAttribute(x, F) || J;
				if (!E.Dom._hasClass(x, Y)) {
					E.Dom.setAttribute(x, F, A(y + B + Y));
					G = true
				}
			}
			else {}
			return G
		},
		removeClass: function (Y, G) {
			return E.Dom.batch(Y, E.Dom._removeClass, G)
		},
		_removeClass: function (y, x) {
			var Y = false,
				AA, z, G;
			if (y && x) {
				AA = E.Dom.getAttribute(y, F) || J;
				E.Dom.setAttribute(y, F, AA.replace(E.Dom._getClassRegex(x), J));
				z = E.Dom.getAttribute(y, F);
				if (AA !== z) {
					E.Dom.setAttribute(y, F, A(z));
					Y = true;
					if (E.Dom.getAttribute(y, F) === "") {
						G = (y.hasAttribute && y.hasAttribute(g)) ? g : F;
						y.removeAttribute(G)
					}
				}
			}
			else {}
			return Y
		},
		replaceClass: function (x, Y, G) {
			return E.Dom.batch(x, E.Dom._replaceClass, {
				from: Y,
				to: G
			})
		},
		_replaceClass: function (y, x) {
			var Y, AB, AA, G = false,
				z;
			if (y && x) {
				AB = x.from;
				AA = x.to;
				if (!AA) {
					G = false
				}
				else {
					if (!AB) {
						G = E.Dom._addClass(y, x.to)
					}
					else {
						if (AB !== AA) {
							z = E.Dom.getAttribute(y, F) || J;
							Y = (B + z.replace(E.Dom._getClassRegex(AB), B + AA)).split(E.Dom._getClassRegex(AA));
							Y.splice(1, 0, B + AA);
							E.Dom.setAttribute(y, F, A(Y.join(J)));
							G = true
						}
					}
				}
			}
			else {}
			return G
		},
		generateId: function (G, x) {
			x = x || "yui-gen";
			var Y = function (y) {
				if (y && y.id) {
					return y.id
				}
				var z = x + YAHOO.env._id_counter++;
				if (y) {
					if (y[e].getElementById(z)) {
						return E.Dom.generateId(y, z + x)
					}
					y.id = z
				}
				return z
			};
			return E.Dom.batch(G, Y, E.Dom, true) || Y.apply(E.Dom, arguments)
		},
		isAncestor: function (Y, x) {
			Y = E.Dom.get(Y);
			x = E.Dom.get(x);
			var G = false;
			if ((Y && x) && (Y[l] && x[l])) {
				if (Y.contains && Y !== x) {
					G = Y.contains(x)
				}
				else {
					if (Y.compareDocumentPosition) {
						G = !!(Y.compareDocumentPosition(x) & 16)
					}
				}
			}
			else {}
			return G
		},
		inDocument: function (G, Y) {
			return E.Dom._inDoc(E.Dom.get(G), Y)
		},
		_inDoc: function (Y, x) {
			var G = false;
			if (Y && Y[C]) {
				x = x || Y[e];
				G = E.Dom.isAncestor(x[v], Y)
			}
			else {}
			return G
		},
		getElementsBy: function (Y, AF, AB, AD, y, AC, AE) {
			AF = AF || "*";
			AB = (AB) ? E.Dom.get(AB) : null || K;
			if (!AB) {
				return []
			}
			var x = [],
				G = AB.getElementsByTagName(AF);
			for (var z = 0, AA = G.length; z < AA; ++z) {
				if (Y(G[z])) {
					if (AE) {
						x = G[z];
						break
					}
					else {
						x[x.length] = G[z]
					}
				}
			}
			if (AD) {
				E.Dom.batch(x, AD, y, AC)
			}
			return x
		},
		getElementBy: function (x, G, Y) {
			return E.Dom.getElementsBy(x, G, Y, null, null, null, true)
		},
		batch: function (x, AB, AA, z) {
			var y = [],
				Y = (z) ? AA : window;
			x = (x && (x[C] || x.item)) ? x : E.Dom.get(x);
			if (x && AB) {
				if (x[C] || x.length === undefined) {
					return AB.call(Y, x, AA)
				}
				for (var G = 0; G < x.length; ++G) {
					y[y.length] = AB.call(Y, x[G], AA)
				}
			}
			else {
				return false
			}
			return y
		},
		getDocumentHeight: function () {
			var Y = (K[t] != M || I) ? K.body.scrollHeight : W.scrollHeight,
				G = Math.max(Y, E.Dom.getViewportHeight());
			return G
		},
		getDocumentWidth: function () {
			var Y = (K[t] != M || I) ? K.body.scrollWidth : W.scrollWidth,
				G = Math.max(Y, E.Dom.getViewportWidth());
			return G
		},
		getViewportHeight: function () {
			var G = self.innerHeight,
				Y = K[t];
			if ((Y || T) && !D) {
				G = (Y == M) ? W.clientHeight : K.body.clientHeight
			}
			return G
		},
		getViewportWidth: function () {
			var G = self.innerWidth,
				Y = K[t];
			if (Y || T) {
				G = (Y == M) ? W.clientWidth : K.body.clientWidth
			}
			return G
		},
		getAncestorBy: function (G, Y) {
			while ((G = G[Z])) {
				if (E.Dom._testElement(G, Y)) {
					return G
				}
			}
			return null
		},
		getAncestorByClassName: function (Y, G) {
			Y = E.Dom.get(Y);
			if (!Y) {
				return null
			}
			var x = function (y) {
				return E.Dom.hasClass(y, G)
			};
			return E.Dom.getAncestorBy(Y, x)
		},
		getAncestorByTagName: function (Y, G) {
			Y = E.Dom.get(Y);
			if (!Y) {
				return null
			}
			var x = function (y) {
				return y[C] && y[C].toUpperCase() == G.toUpperCase()
			};
			return E.Dom.getAncestorBy(Y, x)
		},
		getPreviousSiblingBy: function (G, Y) {
			while (G) {
				G = G.previousSibling;
				if (E.Dom._testElement(G, Y)) {
					return G
				}
			}
			return null
		},
		getPreviousSibling: function (G) {
			G = E.Dom.get(G);
			if (!G) {
				return null
			}
			return E.Dom.getPreviousSiblingBy(G)
		},
		getNextSiblingBy: function (G, Y) {
			while (G) {
				G = G.nextSibling;
				if (E.Dom._testElement(G, Y)) {
					return G
				}
			}
			return null
		},
		getNextSibling: function (G) {
			G = E.Dom.get(G);
			if (!G) {
				return null
			}
			return E.Dom.getNextSiblingBy(G)
		},
		getFirstChildBy: function (G, x) {
			var Y = (E.Dom._testElement(G.firstChild, x)) ? G.firstChild : null;
			return Y || E.Dom.getNextSiblingBy(G.firstChild, x)
		},
		getFirstChild: function (G, Y) {
			G = E.Dom.get(G);
			if (!G) {
				return null
			}
			return E.Dom.getFirstChildBy(G)
		},
		getLastChildBy: function (G, x) {
			if (!G) {
				return null
			}
			var Y = (E.Dom._testElement(G.lastChild, x)) ? G.lastChild : null;
			return Y || E.Dom.getPreviousSiblingBy(G.lastChild, x)
		},
		getLastChild: function (G) {
			G = E.Dom.get(G);
			return E.Dom.getLastChildBy(G)
		},
		getChildrenBy: function (Y, y) {
			var x = E.Dom.getFirstChildBy(Y, y),
				G = x ? [x] : [];
			E.Dom.getNextSiblingBy(x, function (z) {
				if (!y || y(z)) {
					G[G.length] = z
				}
				return false
			});
			return G
		},
		getChildren: function (G) {
			G = E.Dom.get(G);
			if (!G) {}
			return E.Dom.getChildrenBy(G)
		},
		getDocumentScrollLeft: function (G) {
			G = G || K;
			return Math.max(G[v].scrollLeft, G.body.scrollLeft)
		},
		getDocumentScrollTop: function (G) {
			G = G || K;
			return Math.max(G[v].scrollTop, G.body.scrollTop)
		},
		insertBefore: function (Y, G) {
			Y = E.Dom.get(Y);
			G = E.Dom.get(G);
			if (!Y || !G || !G[Z]) {
				return null
			}
			return G[Z].insertBefore(Y, G)
		},
		insertAfter: function (Y, G) {
			Y = E.Dom.get(Y);
			G = E.Dom.get(G);
			if (!Y || !G || !G[Z]) {
				return null
			}
			if (G.nextSibling) {
				return G[Z].insertBefore(Y, G.nextSibling)
			}
			else {
				return G[Z].appendChild(Y)
			}
		},
		getClientRegion: function () {
			var x = E.Dom.getDocumentScrollTop(),
				Y = E.Dom.getDocumentScrollLeft(),
				y = E.Dom.getViewportWidth() + Y,
				G = E.Dom.getViewportHeight() + x;
			return new E.Region(x, y, G, Y)
		},
		setAttribute: function (Y, G, x) {
			G = E.Dom.CUSTOM_ATTRIBUTES[G] || G;
			Y.setAttribute(G, x)
		},
		getAttribute: function (Y, G) {
			G = E.Dom.CUSTOM_ATTRIBUTES[G] || G;
			return Y.getAttribute(G)
		},
		_toCamel: function (Y) {
			var x = d;

			function G(y, z) {
				return z.toUpperCase()
			}
			return x[Y] || (x[Y] = Y.indexOf("-") === -1 ? Y : Y.replace(/-([a-z])/gi, G))
		},
		_getClassRegex: function (Y) {
			var G;
			if (Y !== undefined) {
				if (Y.exec) {
					G = Y
				}
				else {
					G = h[Y];
					if (!G) {
						Y = Y.replace(E.Dom._patterns.CLASS_RE_TOKENS, "\\$1");
						G = h[Y] = new RegExp(s + Y + k, U)
					}
				}
			}
			return G
		},
		_patterns: {
			ROOT_TAG: /^body|html$/i,
			CLASS_RE_TOKENS: /([\.\(\)\^\$\*\+\?\|\[\]\{\}])/g
		},
		_testElement: function (G, Y) {
			return G && G[l] == 1 && (!Y || Y(G))
		},
		_calcBorders: function (x, y) {
			var Y = parseInt(E.Dom[w](x, R), 10) || 0,
				G = parseInt(E.Dom[w](x, q), 10) || 0;
			if (H) {
				if (N.test(x[C])) {
					Y = 0;
					G = 0
				}
			}
			y[0] += G;
			y[1] += Y;
			return y
		}
	};
	var S = E.Dom[w];
	if (m.opera) {
		E.Dom[w] = function (Y, G) {
			var x = S(Y, G);
			if (X.test(G)) {
				x = E.Dom.Color.toRGB(x)
			}
			return x
		}
	}
	if (m.webkit) {
		E.Dom[w] = function (Y, G) {
			var x = S(Y, G);
			if (x === "rgba(0, 0, 0, 0)") {
				x = "transparent"
			}
			return x
		}
	}
})();
YAHOO.util.Region = function (C, D, A, B) {
	this.top = C;
	this.y = C;
	this[1] = C;
	this.right = D;
	this.bottom = A;
	this.left = B;
	this.x = B;
	this[0] = B;
	this.width = this.right - this.left;
	this.height = this.bottom - this.top
};
YAHOO.util.Region.prototype.contains = function (A) {
	return (A.left >= this.left && A.right <= this.right && A.top >= this.top && A.bottom <= this.bottom)
};
YAHOO.util.Region.prototype.getArea = function () {
	return ((this.bottom - this.top) * (this.right - this.left))
};
YAHOO.util.Region.prototype.intersect = function (E) {
	var C = Math.max(this.top, E.top),
		D = Math.min(this.right, E.right),
		A = Math.min(this.bottom, E.bottom),
		B = Math.max(this.left, E.left);
	if (A >= C && D >= B) {
		return new YAHOO.util.Region(C, D, A, B)
	}
	else {
		return null
	}
};
YAHOO.util.Region.prototype.union = function (E) {
	var C = Math.min(this.top, E.top),
		D = Math.max(this.right, E.right),
		A = Math.max(this.bottom, E.bottom),
		B = Math.min(this.left, E.left);
	return new YAHOO.util.Region(C, D, A, B)
};
YAHOO.util.Region.prototype.toString = function () {
	return ("Region {top: " + this.top + ", right: " + this.right + ", bottom: " + this.bottom + ", left: " + this.left + ", height: " + this.height + ", width: " + this.width + "}")
};
YAHOO.util.Region.getRegion = function (D) {
	var F = YAHOO.util.Dom.getXY(D),
		C = F[1],
		E = F[0] + D.offsetWidth,
		A = F[1] + D.offsetHeight,
		B = F[0];
	return new YAHOO.util.Region(C, E, A, B)
};
YAHOO.util.Point = function (A, B) {
	if (YAHOO.lang.isArray(A)) {
		B = A[1];
		A = A[0]
	}
	YAHOO.util.Point.superclass.constructor.call(this, B, A, B, A)
};
YAHOO.extend(YAHOO.util.Point, YAHOO.util.Region);
(function () {
	var B = YAHOO.util,
		A = "clientTop",
		F = "clientLeft",
		J = "parentNode",
		K = "right",
		W = "hasLayout",
		I = "px",
		U = "opacity",
		L = "auto",
		D = "borderLeftWidth",
		G = "borderTopWidth",
		P = "borderRightWidth",
		V = "borderBottomWidth",
		S = "visible",
		Q = "transparent",
		N = "height",
		E = "width",
		H = "style",
		T = "currentStyle",
		R = /^width|height$/,
		O = /^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,
		M = {
			get: function (X, Z) {
				var Y = "",
					a = X[T][Z];
				if (Z === U) {
					Y = B.Dom.getStyle(X, U)
				}
				else {
					if (!a || (a.indexOf && a.indexOf(I) > -1)) {
						Y = a
					}
					else {
						if (B.Dom.IE_COMPUTED[Z]) {
							Y = B.Dom.IE_COMPUTED[Z](X, Z)
						}
						else {
							if (O.test(a)) {
								Y = B.Dom.IE.ComputedStyle.getPixel(X, Z)
							}
							else {
								Y = a
							}
						}
					}
				}
				return Y
			},
			getOffset: function (Z, e) {
				var b = Z[T][e],
					X = e.charAt(0).toUpperCase() + e.substr(1),
					c = "offset" + X,
					Y = "pixel" + X,
					a = "",
					d;
				if (b == L) {
					d = Z[c];
					if (d === undefined) {
						a = 0
					}
					a = d;
					if (R.test(e)) {
						Z[H][e] = d;
						if (Z[c] > d) {
							a = d - (Z[c] - d)
						}
						Z[H][e] = L
					}
				}
				else {
					if (!Z[H][Y] && !Z[H][e]) {
						Z[H][e] = b
					}
					a = Z[H][Y]
				}
				return a + I
			},
			getBorderWidth: function (X, Z) {
				var Y = null;
				if (!X[T][W]) {
					X[H].zoom = 1
				}
				switch (Z) {
				case G:
					Y = X[A];
					break;
				case V:
					Y = X.offsetHeight - X.clientHeight - X[A];
					break;
				case D:
					Y = X[F];
					break;
				case P:
					Y = X.offsetWidth - X.clientWidth - X[F];
					break
				}
				return Y + I
			},
			getPixel: function (Y, X) {
				var a = null,
					b = Y[T][K],
					Z = Y[T][X];
				Y[H][K] = Z;
				a = Y[H].pixelRight;
				Y[H][K] = b;
				return a + I
			},
			getMargin: function (Y, X) {
				var Z;
				if (Y[T][X] == L) {
					Z = 0 + I
				}
				else {
					Z = B.Dom.IE.ComputedStyle.getPixel(Y, X)
				}
				return Z
			},
			getVisibility: function (Y, X) {
				var Z;
				while ((Z = Y[T]) && Z[X] == "inherit") {
					Y = Y[J]
				}
				return (Z) ? Z[X] : S
			},
			getColor: function (Y, X) {
				return B.Dom.Color.toRGB(Y[T][X]) || Q
			},
			getBorderColor: function (Y, X) {
				var Z = Y[T],
					a = Z[X] || Z.color;
				return B.Dom.Color.toRGB(B.Dom.Color.toHex(a))
			}
		},
		C = {};
	C.top = C.right = C.bottom = C.left = C[E] = C[N] = M.getOffset;
	C.color = M.getColor;
	C[G] = C[P] = C[V] = C[D] = M.getBorderWidth;
	C.marginTop = C.marginRight = C.marginBottom = C.marginLeft = M.getMargin;
	C.visibility = M.getVisibility;
	C.borderColor = C.borderTopColor = C.borderRightColor = C.borderBottomColor = C.borderLeftColor = M.getBorderColor;
	B.Dom.IE_COMPUTED = C;
	B.Dom.IE_ComputedStyle = M
})();
(function () {
	var C = "toString",
		A = parseInt,
		B = RegExp,
		D = YAHOO.util;
	D.Dom.Color = {
		KEYWORDS: {
			black: "000",
			silver: "c0c0c0",
			gray: "808080",
			white: "fff",
			maroon: "800000",
			red: "f00",
			purple: "800080",
			fuchsia: "f0f",
			green: "008000",
			lime: "0f0",
			olive: "808000",
			yellow: "ff0",
			navy: "000080",
			blue: "00f",
			teal: "008080",
			aqua: "0ff"
		},
		re_RGB: /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,
		re_hex: /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,
		re_hex3: /([0-9A-F])/gi,
		toRGB: function (E) {
			if (!D.Dom.Color.re_RGB.test(E)) {
				E = D.Dom.Color.toHex(E)
			}
			if (D.Dom.Color.re_hex.exec(E)) {
				E = "rgb(" + [A(B.$1, 16), A(B.$2, 16), A(B.$3, 16)].join(", ") + ")"
			}
			return E
		},
		toHex: function (H) {
			H = D.Dom.Color.KEYWORDS[H] || H;
			if (D.Dom.Color.re_RGB.exec(H)) {
				var G = (B.$1.length === 1) ? "0" + B.$1 : Number(B.$1),
					F = (B.$2.length === 1) ? "0" + B.$2 : Number(B.$2),
					E = (B.$3.length === 1) ? "0" + B.$3 : Number(B.$3);
				H = [G[C](16), F[C](16), E[C](16)].join("")
			}
			if (H.length < 6) {
				H = H.replace(D.Dom.Color.re_hex3, "$1$1")
			}
			if (H !== "transparent" && H.indexOf("#") < 0) {
				H = "#" + H
			}
			return H.toLowerCase()
		}
	}
}());
YAHOO.register("dom", YAHOO.util.Dom, {
	version: "2.7.0",
	build: "1799"
});
YAHOO.util.CustomEvent = function (D, C, B, A) {
	this.type = D;
	this.scope = C || window;
	this.silent = B;
	this.signature = A || YAHOO.util.CustomEvent.LIST;
	this.subscribers = [];
	if (!this.silent) {}
	var E = "_YUICEOnSubscribe";
	if (D !== E) {
		this.subscribeEvent = new YAHOO.util.CustomEvent(E, this, true)
	}
	this.lastError = null
};
YAHOO.util.CustomEvent.LIST = 0;
YAHOO.util.CustomEvent.FLAT = 1;
YAHOO.util.CustomEvent.prototype = {
	subscribe: function (A, B, C) {
		if (!A) {
			throw new Error("Invalid callback for subscriber to '" + this.type + "'")
		}
		if (this.subscribeEvent) {
			this.subscribeEvent.fire(A, B, C)
		}
		this.subscribers.push(new YAHOO.util.Subscriber(A, B, C))
	},
	unsubscribe: function (D, F) {
		if (!D) {
			return this.unsubscribeAll()
		}
		var E = false;
		for (var B = 0, A = this.subscribers.length; B < A; ++B) {
			var C = this.subscribers[B];
			if (C && C.contains(D, F)) {
				this._delete(B);
				E = true
			}
		}
		return E
	},
	fire: function () {
		this.lastError = null;
		var K = [],
			E = this.subscribers.length;
		if (!E && this.silent) {
			return true
		}
		var I = [].slice.call(arguments, 0),
			G = true,
			D, J = false;
		if (!this.silent) {}
		var C = this.subscribers.slice(),
			A = YAHOO.util.Event.throwErrors;
		for (D = 0; D < E; ++D) {
			var M = C[D];
			if (!M) {
				J = true
			}
			else {
				if (!this.silent) {}
				var L = M.getScope(this.scope);
				if (this.signature == YAHOO.util.CustomEvent.FLAT) {
					var B = null;
					if (I.length > 0) {
						B = I[0]
					}
					try {
						G = M.fn.call(L, B, M.obj)
					}
					catch (F) {
						this.lastError = F;
						if (A) {
							throw F
						}
					}
				}
				else {
					try {
						G = M.fn.call(L, this.type, I, M.obj)
					}
					catch (H) {
						this.lastError = H;
						if (A) {
							throw H
						}
					}
				}
				if (false === G) {
					if (!this.silent) {}
					break
				}
			}
		}
		return (G !== false)
	},
	unsubscribeAll: function () {
		var A = this.subscribers.length,
			B;
		for (B = A - 1; B > -1; B--) {
			this._delete(B)
		}
		this.subscribers = [];
		return A
	},
	_delete: function (A) {
		var B = this.subscribers[A];
		if (B) {
			delete B.fn;
			delete B.obj
		}
		this.subscribers.splice(A, 1)
	},
	toString: function () {
		return "CustomEvent: '" + this.type + "', context: " + this.scope
	}
};
YAHOO.util.Subscriber = function (A, B, C) {
	this.fn = A;
	this.obj = YAHOO.lang.isUndefined(B) ? null : B;
	this.overrideContext = C
};
YAHOO.util.Subscriber.prototype.getScope = function (A) {
	if (this.overrideContext) {
		if (this.overrideContext === true) {
			return this.obj
		}
		else {
			return this.overrideContext
		}
	}
	return A
};
YAHOO.util.Subscriber.prototype.contains = function (A, B) {
	if (B) {
		return (this.fn == A && this.obj == B)
	}
	else {
		return (this.fn == A)
	}
};
YAHOO.util.Subscriber.prototype.toString = function () {
	return "Subscriber { obj: " + this.obj + ", overrideContext: " + (this.overrideContext || "no") + " }"
};
if (!YAHOO.util.Event) {
	YAHOO.util.Event = function () {
		var H = false;
		var I = [];
		var J = [];
		var G = [];
		var E = [];
		var C = 0;
		var F = [];
		var B = [];
		var A = 0;
		var D = {
			63232: 38,
			63233: 40,
			63234: 37,
			63235: 39,
			63276: 33,
			63277: 34,
			25: 9
		};
		var K = YAHOO.env.ua.ie ? "focusin" : "focus";
		var L = YAHOO.env.ua.ie ? "focusout" : "blur";
		return {
			POLL_RETRYS: 2000,
			POLL_INTERVAL: 20,
			EL: 0,
			TYPE: 1,
			FN: 2,
			WFN: 3,
			UNLOAD_OBJ: 3,
			ADJ_SCOPE: 4,
			OBJ: 5,
			OVERRIDE: 6,
			lastError: null,
			isSafari: YAHOO.env.ua.webkit,
			webkit: YAHOO.env.ua.webkit,
			isIE: YAHOO.env.ua.ie,
			_interval: null,
			_dri: null,
			DOMReady: false,
			throwErrors: false,
			startInterval: function () {
				if (!this._interval) {
					var M = this;
					var N = function () {
						M._tryPreloadAttach()
					};
					this._interval = setInterval(N, this.POLL_INTERVAL)
				}
			},
			onAvailable: function (S, O, Q, R, P) {
				var M = (YAHOO.lang.isString(S)) ? [S] : S;
				for (var N = 0; N < M.length; N = N + 1) {
					F.push({
						id: M[N],
						fn: O,
						obj: Q,
						overrideContext: R,
						checkReady: P
					})
				}
				C = this.POLL_RETRYS;
				this.startInterval()
			},
			onContentReady: function (P, M, N, O) {
				this.onAvailable(P, M, N, O, true)
			},
			onDOMReady: function (M, N, O) {
				if (this.DOMReady) {
					setTimeout(function () {
						var P = window;
						if (O) {
							if (O === true) {
								P = N
							}
							else {
								P = O
							}
						}
						M.call(P, "DOMReady", [], N)
					}, 0)
				}
				else {
					this.DOMReadyEvent.subscribe(M, N, O)
				}
			},
			_addListener: function (O, M, Y, S, W, b) {
				if (!Y || !Y.call) {
					return false
				}
				if (this._isValidCollection(O)) {
					var Z = true;
					for (var T = 0, V = O.length; T < V; ++T) {
						Z = this.on(O[T], M, Y, S, W) && Z
					}
					return Z
				}
				else {
					if (YAHOO.lang.isString(O)) {
						var R = this.getEl(O);
						if (R) {
							O = R
						}
						else {
							this.onAvailable(O, function () {
								YAHOO.util.Event.on(O, M, Y, S, W)
							});
							return true
						}
					}
				}
				if (!O) {
					return false
				}
				if ("unload" == M && S !== this) {
					J[J.length] = [O, M, Y, S, W];
					return true
				}
				var N = O;
				if (W) {
					if (W === true) {
						N = S
					}
					else {
						N = W
					}
				}
				var P = function (c) {
					return Y.call(N, YAHOO.util.Event.getEvent(c, O), S)
				};
				var a = [O, M, Y, P, N, S, W];
				var U = I.length;
				I[U] = a;
				if (this.useLegacyEvent(O, M)) {
					var Q = this.getLegacyIndex(O, M);
					if (Q == -1 || O != G[Q][0]) {
						Q = G.length;
						B[O.id + M] = Q;
						G[Q] = [O, M, O["on" + M]];
						E[Q] = [];
						O["on" + M] = function (c) {
							YAHOO.util.Event.fireLegacyEvent(YAHOO.util.Event.getEvent(c), Q)
						}
					}
					E[Q].push(a)
				}
				else {
					try {
						this._simpleAdd(O, M, P, b)
					}
					catch (X) {
						this.lastError = X;
						this.removeListener(O, M, Y);
						return false
					}
				}
				return true
			},
			addListener: function (N, Q, M, O, P) {
				return this._addListener(N, Q, M, O, P, false)
			},
			addFocusListener: function (N, M, O, P) {
				return this._addListener(N, K, M, O, P, true)
			},
			removeFocusListener: function (N, M) {
				return this.removeListener(N, K, M)
			},
			addBlurListener: function (N, M, O, P) {
				return this._addListener(N, L, M, O, P, true)
			},
			removeBlurListener: function (N, M) {
				return this.removeListener(N, L, M)
			},
			fireLegacyEvent: function (R, P) {
				var T = true,
					M, V, U, N, S;
				V = E[P].slice();
				for (var O = 0, Q = V.length; O < Q; ++O) {
					U = V[O];
					if (U && U[this.WFN]) {
						N = U[this.ADJ_SCOPE];
						S = U[this.WFN].call(N, R);
						T = (T && S)
					}
				}
				M = G[P];
				if (M && M[2]) {
					M[2](R)
				}
				return T
			},
			getLegacyIndex: function (N, O) {
				var M = this.generateId(N) + O;
				if (typeof B[M] == "undefined") {
					return -1
				}
				else {
					return B[M]
				}
			},
			useLegacyEvent: function (M, N) {
				return (this.webkit && this.webkit < 419 && ("click" == N || "dblclick" == N))
			},
			removeListener: function (N, M, V) {
				var Q, T, X;
				if (typeof N == "string") {
					N = this.getEl(N)
				}
				else {
					if (this._isValidCollection(N)) {
						var W = true;
						for (Q = N.length - 1; Q > -1; Q--) {
							W = (this.removeListener(N[Q], M, V) && W)
						}
						return W
					}
				}
				if (!V || !V.call) {
					return this.purgeElement(N, false, M)
				}
				if ("unload" == M) {
					for (Q = J.length - 1; Q > -1; Q--) {
						X = J[Q];
						if (X && X[0] == N && X[1] == M && X[2] == V) {
							J.splice(Q, 1);
							return true
						}
					}
					return false
				}
				var R = null;
				var S = arguments[3];
				if ("undefined" === typeof S) {
					S = this._getCacheIndex(N, M, V)
				}
				if (S >= 0) {
					R = I[S]
				}
				if (!N || !R) {
					return false
				}
				if (this.useLegacyEvent(N, M)) {
					var P = this.getLegacyIndex(N, M);
					var O = E[P];
					if (O) {
						for (Q = 0, T = O.length; Q < T; ++Q) {
							X = O[Q];
							if (X && X[this.EL] == N && X[this.TYPE] == M && X[this.FN] == V) {
								O.splice(Q, 1);
								break
							}
						}
					}
				}
				else {
					try {
						this._simpleRemove(N, M, R[this.WFN], false)
					}
					catch (U) {
						this.lastError = U;
						return false
					}
				}
				delete I[S][this.WFN];
				delete I[S][this.FN];
				I.splice(S, 1);
				return true
			},
			getTarget: function (O, N) {
				var M = O.target || O.srcElement;
				return this.resolveTextNode(M)
			},
			resolveTextNode: function (N) {
				try {
					if (N && 3 == N.nodeType) {
						return N.parentNode
					}
				}
				catch (M) {}
				return N
			},
			getPageX: function (N) {
				var M = N.pageX;
				if (!M && 0 !== M) {
					M = N.clientX || 0;
					if (this.isIE) {
						M += this._getScrollLeft()
					}
				}
				return M
			},
			getPageY: function (M) {
				var N = M.pageY;
				if (!N && 0 !== N) {
					N = M.clientY || 0;
					if (this.isIE) {
						N += this._getScrollTop()
					}
				}
				return N
			},
			getXY: function (M) {
				return [this.getPageX(M), this.getPageY(M)]
			},
			getRelatedTarget: function (N) {
				var M = N.relatedTarget;
				if (!M) {
					if (N.type == "mouseout") {
						M = N.toElement
					}
					else {
						if (N.type == "mouseover") {
							M = N.fromElement
						}
					}
				}
				return this.resolveTextNode(M)
			},
			getTime: function (O) {
				if (!O.time) {
					var N = new Date().getTime();
					try {
						O.time = N
					}
					catch (M) {
						this.lastError = M;
						return N
					}
				}
				return O.time
			},
			stopEvent: function (M) {
				this.stopPropagation(M);
				this.preventDefault(M)
			},
			stopPropagation: function (M) {
				if (M.stopPropagation) {
					M.stopPropagation()
				}
				else {
					M.cancelBubble = true
				}
			},
			preventDefault: function (M) {
				if (M.preventDefault) {
					M.preventDefault()
				}
				else {
					M.returnValue = false
				}
			},
			getEvent: function (O, M) {
				var N = O || window.event;
				if (!N) {
					var P = this.getEvent.caller;
					while (P) {
						N = P.arguments[0];
						if (N && Event == N.constructor) {
							break
						}
						P = P.caller
					}
				}
				return N
			},
			getCharCode: function (N) {
				var M = N.keyCode || N.charCode || 0;
				if (YAHOO.env.ua.webkit && (M in D)) {
					M = D[M]
				}
				return M
			},
			_getCacheIndex: function (Q, R, P) {
				for (var O = 0, N = I.length; O < N; O = O + 1) {
					var M = I[O];
					if (M && M[this.FN] == P && M[this.EL] == Q && M[this.TYPE] == R) {
						return O
					}
				}
				return -1
			},
			generateId: function (M) {
				var N = M.id;
				if (!N) {
					N = "yuievtautoid-" + A;
					++A;
					M.id = N
				}
				return N
			},
			_isValidCollection: function (N) {
				try {
					return (N && typeof N !== "string" && N.length && !N.tagName && !N.alert && typeof N[0] !== "undefined")
				}
				catch (M) {
					return false
				}
			},
			elCache: {},
			getEl: function (M) {
				return (typeof M === "string") ? document.getElementById(M) : M
			},
			clearCache: function () {},
			DOMReadyEvent: new YAHOO.util.CustomEvent("DOMReady", this),
			_load: function (N) {
				if (!H) {
					H = true;
					var M = YAHOO.util.Event;
					M._ready();
					M._tryPreloadAttach()
				}
			},
			_ready: function (N) {
				var M = YAHOO.util.Event;
				if (!M.DOMReady) {
					M.DOMReady = true;
					M.DOMReadyEvent.fire();
					M._simpleRemove(document, "DOMContentLoaded", M._ready)
				}
			},
			_tryPreloadAttach: function () {
				if (F.length === 0) {
					C = 0;
					if (this._interval) {
						clearInterval(this._interval);
						this._interval = null
					}
					return
				}
				if (this.locked) {
					return
				}
				if (this.isIE) {
					if (!this.DOMReady) {
						this.startInterval();
						return
					}
				}
				this.locked = true;
				var S = !H;
				if (!S) {
					S = (C > 0 && F.length > 0)
				}
				var R = [];
				var T = function (V, W) {
					var U = V;
					if (W.overrideContext) {
						if (W.overrideContext === true) {
							U = W.obj
						}
						else {
							U = W.overrideContext
						}
					}
					W.fn.call(U, W.obj)
				};
				var N, M, Q, P, O = [];
				for (N = 0, M = F.length; N < M; N = N + 1) {
					Q = F[N];
					if (Q) {
						P = this.getEl(Q.id);
						if (P) {
							if (Q.checkReady) {
								if (H || P.nextSibling || !S) {
									O.push(Q);
									F[N] = null
								}
							}
							else {
								T(P, Q);
								F[N] = null
							}
						}
						else {
							R.push(Q)
						}
					}
				}
				for (N = 0, M = O.length; N < M; N = N + 1) {
					Q = O[N];
					T(this.getEl(Q.id), Q)
				}
				C--;
				if (S) {
					for (N = F.length - 1; N > -1; N--) {
						Q = F[N];
						if (!Q || !Q.id) {
							F.splice(N, 1)
						}
					}
					this.startInterval()
				}
				else {
					if (this._interval) {
						clearInterval(this._interval);
						this._interval = null
					}
				}
				this.locked = false
			},
			purgeElement: function (Q, R, T) {
				var O = (YAHOO.lang.isString(Q)) ? this.getEl(Q) : Q;
				var S = this.getListeners(O, T),
					P, M;
				if (S) {
					for (P = S.length - 1; P > -1; P--) {
						var N = S[P];
						this.removeListener(O, N.type, N.fn)
					}
				}
				if (R && O && O.childNodes) {
					for (P = 0, M = O.childNodes.length; P < M; ++P) {
						this.purgeElement(O.childNodes[P], R, T)
					}
				}
			},
			getListeners: function (O, M) {
				var R = [],
					N;
				if (!M) {
					N = [I, J]
				}
				else {
					if (M === "unload") {
						N = [J]
					}
					else {
						N = [I]
					}
				}
				var T = (YAHOO.lang.isString(O)) ? this.getEl(O) : O;
				for (var Q = 0; Q < N.length; Q = Q + 1) {
					var V = N[Q];
					if (V) {
						for (var S = 0, U = V.length; S < U; ++S) {
							var P = V[S];
							if (P && P[this.EL] === T && (!M || M === P[this.TYPE])) {
								R.push({
									type: P[this.TYPE],
									fn: P[this.FN],
									obj: P[this.OBJ],
									adjust: P[this.OVERRIDE],
									scope: P[this.ADJ_SCOPE],
									index: S
								})
							}
						}
					}
				}
				return (R.length) ? R : null
			},
			_unload: function (T) {
				var N = YAHOO.util.Event,
					Q, P, O, S, R, U = J.slice(),
					M;
				for (Q = 0, S = J.length; Q < S; ++Q) {
					O = U[Q];
					if (O) {
						M = window;
						if (O[N.ADJ_SCOPE]) {
							if (O[N.ADJ_SCOPE] === true) {
								M = O[N.UNLOAD_OBJ]
							}
							else {
								M = O[N.ADJ_SCOPE]
							}
						}
						O[N.FN].call(M, N.getEvent(T, O[N.EL]), O[N.UNLOAD_OBJ]);
						U[Q] = null
					}
				}
				O = null;
				M = null;
				J = null;
				if (I) {
					for (P = I.length - 1; P > -1; P--) {
						O = I[P];
						if (O) {
							N.removeListener(O[N.EL], O[N.TYPE], O[N.FN], P)
						}
					}
					O = null
				}
				G = null;
				N._simpleRemove(window, "unload", N._unload)
			},
			_getScrollLeft: function () {
				return this._getScroll()[1]
			},
			_getScrollTop: function () {
				return this._getScroll()[0]
			},
			_getScroll: function () {
				var M = document.documentElement,
					N = document.body;
				if (M && (M.scrollTop || M.scrollLeft)) {
					return [M.scrollTop, M.scrollLeft]
				}
				else {
					if (N) {
						return [N.scrollTop, N.scrollLeft]
					}
					else {
						return [0, 0]
					}
				}
			},
			regCE: function () {},
			_simpleAdd: function () {
				if (window.addEventListener) {
					return function (O, P, N, M) {
						O.addEventListener(P, N, (M))
					}
				}
				else {
					if (window.attachEvent) {
						return function (O, P, N, M) {
							O.attachEvent("on" + P, N)
						}
					}
					else {
						return function () {}
					}
				}
			}(),
			_simpleRemove: function () {
				if (window.removeEventListener) {
					return function (O, P, N, M) {
						O.removeEventListener(P, N, (M))
					}
				}
				else {
					if (window.detachEvent) {
						return function (N, O, M) {
							N.detachEvent("on" + O, M)
						}
					}
					else {
						return function () {}
					}
				}
			}()
		}
	}();
	(function () {
		var EU = YAHOO.util.Event;
		EU.on = EU.addListener;
		EU.onFocus = EU.addFocusListener;
		EU.onBlur = EU.addBlurListener;
		if (EU.isIE) {
			YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach, YAHOO.util.Event, true);
			var n = document.createElement("p");
			EU._dri = setInterval(function () {
				try {
					n.doScroll("left");
					clearInterval(EU._dri);
					EU._dri = null;
					EU._ready();
					n = null
				}
				catch (ex) {}
			}, EU.POLL_INTERVAL)
		}
		else {
			if (EU.webkit && EU.webkit < 525) {
				EU._dri = setInterval(function () {
					var rs = document.readyState;
					if ("loaded" == rs || "complete" == rs) {
						clearInterval(EU._dri);
						EU._dri = null;
						EU._ready()
					}
				}, EU.POLL_INTERVAL)
			}
			else {
				EU._simpleAdd(document, "DOMContentLoaded", EU._ready)
			}
		}
		EU._simpleAdd(window, "load", EU._load);
		EU._simpleAdd(window, "unload", EU._unload);
		EU._tryPreloadAttach()
	})()
}
YAHOO.util.EventProvider = function () {};
YAHOO.util.EventProvider.prototype = {
	__yui_events: null,
	__yui_subscribers: null,
	subscribe: function (A, C, F, E) {
		this.__yui_events = this.__yui_events || {};
		var D = this.__yui_events[A];
		if (D) {
			D.subscribe(C, F, E)
		}
		else {
			this.__yui_subscribers = this.__yui_subscribers || {};
			var B = this.__yui_subscribers;
			if (!B[A]) {
				B[A] = []
			}
			B[A].push({
				fn: C,
				obj: F,
				overrideContext: E
			})
		}
	},
	unsubscribe: function (C, E, G) {
		this.__yui_events = this.__yui_events || {};
		var A = this.__yui_events;
		if (C) {
			var F = A[C];
			if (F) {
				return F.unsubscribe(E, G)
			}
		}
		else {
			var B = true;
			for (var D in A) {
				if (YAHOO.lang.hasOwnProperty(A, D)) {
					B = B && A[D].unsubscribe(E, G)
				}
			}
			return B
		}
		return false
	},
	unsubscribeAll: function (A) {
		return this.unsubscribe(A)
	},
	createEvent: function (G, D) {
		this.__yui_events = this.__yui_events || {};
		var A = D || {};
		var I = this.__yui_events;
		if (I[G]) {}
		else {
			var H = A.scope || this;
			var E = (A.silent);
			var B = new YAHOO.util.CustomEvent(G, H, E, YAHOO.util.CustomEvent.FLAT);
			I[G] = B;
			if (A.onSubscribeCallback) {
				B.subscribeEvent.subscribe(A.onSubscribeCallback)
			}
			this.__yui_subscribers = this.__yui_subscribers || {};
			var F = this.__yui_subscribers[G];
			if (F) {
				for (var C = 0; C < F.length; ++C) {
					B.subscribe(F[C].fn, F[C].obj, F[C].overrideContext)
				}
			}
		}
		return I[G]
	},
	fireEvent: function (E, D, A, C) {
		this.__yui_events = this.__yui_events || {};
		var G = this.__yui_events[E];
		if (!G) {
			return null
		}
		var B = [];
		for (var F = 1; F < arguments.length; ++F) {
			B.push(arguments[F])
		}
		return G.fire.apply(G, B)
	},
	hasEvent: function (A) {
		if (this.__yui_events) {
			if (this.__yui_events[A]) {
				return true
			}
		}
		return false
	}
};
(function () {
	var A = YAHOO.util.Event,
		C = YAHOO.lang;
	YAHOO.util.KeyListener = function (D, I, E, F) {
		if (!D) {}
		else {
			if (!I) {}
			else {
				if (!E) {}
			}
		}
		if (!F) {
			F = YAHOO.util.KeyListener.KEYDOWN
		}
		var G = new YAHOO.util.CustomEvent("keyPressed");
		this.enabledEvent = new YAHOO.util.CustomEvent("enabled");
		this.disabledEvent = new YAHOO.util.CustomEvent("disabled");
		if (C.isString(D)) {
			D = document.getElementById(D)
		}
		if (C.isFunction(E)) {
			G.subscribe(E)
		}
		else {
			G.subscribe(E.fn, E.scope, E.correctScope)
		}

		function H(O, N) {
			if (!I.shift) {
				I.shift = false
			}
			if (!I.alt) {
				I.alt = false
			}
			if (!I.ctrl) {
				I.ctrl = false
			}
			if (O.shiftKey == I.shift && O.altKey == I.alt && O.ctrlKey == I.ctrl) {
				var J, M = I.keys,
					L;
				if (YAHOO.lang.isArray(M)) {
					for (var K = 0; K < M.length; K++) {
						J = M[K];
						L = A.getCharCode(O);
						if (J == L) {
							G.fire(L, O);
							break
						}
					}
				}
				else {
					L = A.getCharCode(O);
					if (M == L) {
						G.fire(L, O)
					}
				}
			}
		}
		this.enable = function () {
			if (!this.enabled) {
				A.on(D, F, H);
				this.enabledEvent.fire(I)
			}
			this.enabled = true
		};
		this.disable = function () {
			if (this.enabled) {
				A.removeListener(D, F, H);
				this.disabledEvent.fire(I)
			}
			this.enabled = false
		};
		this.toString = function () {
			return "KeyListener [" + I.keys + "] " + D.tagName + (D.id ? "[" + D.id + "]" : "")
		}
	};
	var B = YAHOO.util.KeyListener;
	B.KEYDOWN = "keydown";
	B.KEYUP = "keyup";
	B.KEY = {
		ALT: 18,
		BACK_SPACE: 8,
		CAPS_LOCK: 20,
		CONTROL: 17,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		META: 224,
		NUM_LOCK: 144,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PAUSE: 19,
		PRINTSCREEN: 44,
		RIGHT: 39,
		SCROLL_LOCK: 145,
		SHIFT: 16,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
})();
YAHOO.register("event", YAHOO.util.Event, {
	version: "2.7.0",
	build: "1799"
});
YAHOO.register("yahoo-dom-event", YAHOO, {
	version: "2.7.0",
	build: "1799"
});
YAHOO.util.Attribute = function (B, A) {
	if (A) {
		this.owner = A;
		this.configure(B, true)
	}
};
YAHOO.util.Attribute.prototype = {
	name: undefined,
	value: null,
	owner: null,
	readOnly: false,
	writeOnce: false,
	_initialConfig: null,
	_written: false,
	method: null,
	setter: null,
	getter: null,
	validator: null,
	getValue: function () {
		var A = this.value;
		if (this.getter) {
			A = this.getter.call(this.owner, this.name)
		}
		return A
	},
	setValue: function (F, B) {
		var E, A = this.owner,
			C = this.name;
		var D = {
			type: C,
			prevValue: this.getValue(),
			newValue: F
		};
		if (this.readOnly || (this.writeOnce && this._written)) {
			return false
		}
		if (this.validator && !this.validator.call(A, F)) {
			return false
		}
		if (!B) {
			E = A.fireBeforeChangeEvent(D);
			if (E === false) {
				return false
			}
		}
		if (this.setter) {
			F = this.setter.call(A, F, this.name);
			if (F === undefined) {}
		}
		if (this.method) {
			this.method.call(A, F, this.name)
		}
		this.value = F;
		this._written = true;
		D.type = C;
		if (!B) {
			this.owner.fireChangeEvent(D)
		}
		return true
	},
	configure: function (B, C) {
		B = B || {};
		if (C) {
			this._written = false
		}
		this._initialConfig = this._initialConfig || {};
		for (var A in B) {
			if (B.hasOwnProperty(A)) {
				this[A] = B[A];
				if (C) {
					this._initialConfig[A] = B[A]
				}
			}
		}
	},
	resetValue: function () {
		return this.setValue(this._initialConfig.value)
	},
	resetConfig: function () {
		this.configure(this._initialConfig, true)
	},
	refresh: function (A) {
		this.setValue(this.value, A)
	}
};
(function () {
	var A = YAHOO.util.Lang;
	YAHOO.util.AttributeProvider = function () {};
	YAHOO.util.AttributeProvider.prototype = {
		_configs: null,
		get: function (C) {
			this._configs = this._configs || {};
			var B = this._configs[C];
			if (!B || !this._configs.hasOwnProperty(C)) {
				return null
			}
			return B.getValue()
		},
		set: function (D, E, B) {
			this._configs = this._configs || {};
			var C = this._configs[D];
			if (!C) {
				return false
			}
			return C.setValue(E, B)
		},
		getAttributeKeys: function () {
			this._configs = this._configs;
			var C = [],
				B;
			for (B in this._configs) {
				if (A.hasOwnProperty(this._configs, B) && !A.isUndefined(this._configs[B])) {
					C[C.length] = B
				}
			}
			return C
		},
		setAttributes: function (D, B) {
			for (var C in D) {
				if (A.hasOwnProperty(D, C)) {
					this.set(C, D[C], B)
				}
			}
		},
		resetValue: function (C, B) {
			this._configs = this._configs || {};
			if (this._configs[C]) {
				this.set(C, this._configs[C]._initialConfig.value, B);
				return true
			}
			return false
		},
		refresh: function (E, C) {
			this._configs = this._configs || {};
			var F = this._configs;
			E = ((A.isString(E)) ? [E] : E) || this.getAttributeKeys();
			for (var D = 0, B = E.length; D < B; ++D) {
				if (F.hasOwnProperty(E[D])) {
					this._configs[E[D]].refresh(C)
				}
			}
		},
		register: function (B, C) {
			this.setAttributeConfig(B, C)
		},
		getAttributeConfig: function (C) {
			this._configs = this._configs || {};
			var B = this._configs[C] || {};
			var D = {};
			for (C in B) {
				if (A.hasOwnProperty(B, C)) {
					D[C] = B[C]
				}
			}
			return D
		},
		setAttributeConfig: function (B, C, D) {
			this._configs = this._configs || {};
			C = C || {};
			if (!this._configs[B]) {
				C.name = B;
				this._configs[B] = this.createAttribute(C)
			}
			else {
				this._configs[B].configure(C, D)
			}
		},
		configureAttribute: function (B, C, D) {
			this.setAttributeConfig(B, C, D)
		},
		resetAttributeConfig: function (B) {
			this._configs = this._configs || {};
			this._configs[B].resetConfig()
		},
		subscribe: function (B, C) {
			this._events = this._events || {};
			if (!(B in this._events)) {
				this._events[B] = this.createEvent(B)
			}
			YAHOO.util.EventProvider.prototype.subscribe.apply(this, arguments)
		},
		on: function () {
			this.subscribe.apply(this, arguments)
		},
		addListener: function () {
			this.subscribe.apply(this, arguments)
		},
		fireBeforeChangeEvent: function (C) {
			var B = "before";
			B += C.type.charAt(0).toUpperCase() + C.type.substr(1) + "Change";
			C.type = B;
			return this.fireEvent(C.type, C)
		},
		fireChangeEvent: function (B) {
			B.type += "Change";
			return this.fireEvent(B.type, B)
		},
		createAttribute: function (B) {
			return new YAHOO.util.Attribute(B, this)
		}
	};
	YAHOO.augment(YAHOO.util.AttributeProvider, YAHOO.util.EventProvider)
})();
(function () {
	var B = YAHOO.util.Dom,
		C = YAHOO.util.AttributeProvider;
	var A = function (D, E) {
		this.init.apply(this, arguments)
	};
	A.DOM_EVENTS = {
		click: true,
		dblclick: true,
		keydown: true,
		keypress: true,
		keyup: true,
		mousedown: true,
		mousemove: true,
		mouseout: true,
		mouseover: true,
		mouseup: true,
		focus: true,
		blur: true,
		submit: true,
		change: true
	};
	A.prototype = {
		DOM_EVENTS: null,
		DEFAULT_HTML_SETTER: function (F, D) {
			var E = this.get("element");
			if (E) {
				E[D] = F
			}
		},
		DEFAULT_HTML_GETTER: function (D) {
			var E = this.get("element"),
				F;
			if (E) {
				F = E[D]
			}
			return F
		},
		appendChild: function (D) {
			D = D.get ? D.get("element") : D;
			return this.get("element").appendChild(D)
		},
		getElementsByTagName: function (D) {
			return this.get("element").getElementsByTagName(D)
		},
		hasChildNodes: function () {
			return this.get("element").hasChildNodes()
		},
		insertBefore: function (D, E) {
			D = D.get ? D.get("element") : D;
			E = (E && E.get) ? E.get("element") : E;
			return this.get("element").insertBefore(D, E)
		},
		removeChild: function (D) {
			D = D.get ? D.get("element") : D;
			return this.get("element").removeChild(D)
		},
		replaceChild: function (D, E) {
			D = D.get ? D.get("element") : D;
			E = E.get ? E.get("element") : E;
			return this.get("element").replaceChild(D, E)
		},
		initAttributes: function (D) {},
		addListener: function (H, G, I, F) {
			var E = this.get("element") || this.get("id");
			F = F || this;
			var D = this;
			if (!this._events[H]) {
				if (E && this.DOM_EVENTS[H]) {
					YAHOO.util.Event.addListener(E, H, function (J) {
						if (J.srcElement && !J.target) {
							J.target = J.srcElement
						}
						D.fireEvent(H, J)
					}, I, F)
				}
				this.createEvent(H, this)
			}
			return YAHOO.util.EventProvider.prototype.subscribe.apply(this, arguments)
		},
		on: function () {
			return this.addListener.apply(this, arguments)
		},
		subscribe: function () {
			return this.addListener.apply(this, arguments)
		},
		removeListener: function (E, D) {
			return this.unsubscribe.apply(this, arguments)
		},
		addClass: function (D) {
			B.addClass(this.get("element"), D)
		},
		getElementsByClassName: function (E, D) {
			return B.getElementsByClassName(E, D, this.get("element"))
		},
		hasClass: function (D) {
			return B.hasClass(this.get("element"), D)
		},
		removeClass: function (D) {
			return B.removeClass(this.get("element"), D)
		},
		replaceClass: function (E, D) {
			return B.replaceClass(this.get("element"), E, D)
		},
		setStyle: function (E, D) {
			return B.setStyle(this.get("element"), E, D)
		},
		getStyle: function (D) {
			return B.getStyle(this.get("element"), D)
		},
		fireQueue: function () {
			var E = this._queue;
			for (var F = 0, D = E.length; F < D; ++F) {
				this[E[F][0]].apply(this, E[F][1])
			}
		},
		appendTo: function (E, F) {
			E = (E.get) ? E.get("element") : B.get(E);
			this.fireEvent("beforeAppendTo", {
				type: "beforeAppendTo",
				target: E
			});
			F = (F && F.get) ? F.get("element") : B.get(F);
			var D = this.get("element");
			if (!D) {
				return false
			}
			if (!E) {
				return false
			}
			if (D.parent != E) {
				if (F) {
					E.insertBefore(D, F)
				}
				else {
					E.appendChild(D)
				}
			}
			this.fireEvent("appendTo", {
				type: "appendTo",
				target: E
			});
			return D
		},
		get: function (D) {
			var F = this._configs || {},
				E = F.element;
			if (E && !F[D] && !YAHOO.lang.isUndefined(E.value[D])) {
				this._setHTMLAttrConfig(D)
			}
			return C.prototype.get.call(this, D)
		},
		setAttributes: function (J, G) {
			var E = {},
				H = this._configOrder;
			for (var I = 0, D = H.length; I < D; ++I) {
				if (J[H[I]] !== undefined) {
					E[H[I]] = true;
					this.set(H[I], J[H[I]], G)
				}
			}
			for (var F in J) {
				if (J.hasOwnProperty(F) && !E[F]) {
					this.set(F, J[F], G)
				}
			}
		},
		set: function (E, G, D) {
			var F = this.get("element");
			if (!F) {
				this._queue[this._queue.length] = ["set", arguments];
				if (this._configs[E]) {
					this._configs[E].value = G
				}
				return
			}
			if (!this._configs[E] && !YAHOO.lang.isUndefined(F[E])) {
				this._setHTMLAttrConfig(E)
			}
			return C.prototype.set.apply(this, arguments)
		},
		setAttributeConfig: function (D, E, F) {
			this._configOrder.push(D);
			C.prototype.setAttributeConfig.apply(this, arguments)
		},
		createEvent: function (E, D) {
			this._events[E] = true;
			return C.prototype.createEvent.apply(this, arguments)
		},
		init: function (E, D) {
			this._initElement(E, D)
		},
		destroy: function () {
			var D = this.get("element");
			YAHOO.util.Event.purgeElement(D, true);
			this.unsubscribeAll();
			if (D && D.parentNode) {
				D.parentNode.removeChild(D)
			}
			this._queue = [];
			this._events = {};
			this._configs = {};
			this._configOrder = []
		},
		_initElement: function (F, E) {
			this._queue = this._queue || [];
			this._events = this._events || {};
			this._configs = this._configs || {};
			this._configOrder = [];
			E = E || {};
			E.element = E.element || F || null;
			var H = false;
			var D = A.DOM_EVENTS;
			this.DOM_EVENTS = this.DOM_EVENTS || {};
			for (var G in D) {
				if (D.hasOwnProperty(G)) {
					this.DOM_EVENTS[G] = D[G]
				}
			}
			if (typeof E.element === "string") {
				this._setHTMLAttrConfig("id", {
					value: E.element
				})
			}
			if (B.get(E.element)) {
				H = true;
				this._initHTMLElement(E);
				this._initContent(E)
			}
			YAHOO.util.Event.onAvailable(E.element, function () {
				if (!H) {
					this._initHTMLElement(E)
				}
				this.fireEvent("available", {
					type: "available",
					target: B.get(E.element)
				})
			}, this, true);
			YAHOO.util.Event.onContentReady(E.element, function () {
				if (!H) {
					this._initContent(E)
				}
				this.fireEvent("contentReady", {
					type: "contentReady",
					target: B.get(E.element)
				})
			}, this, true)
		},
		_initHTMLElement: function (D) {
			this.setAttributeConfig("element", {
				value: B.get(D.element),
				readOnly: true
			})
		},
		_initContent: function (D) {
			this.initAttributes(D);
			this.setAttributes(D, true);
			this.fireQueue()
		},
		_setHTMLAttrConfig: function (D, F) {
			var E = this.get("element");
			F = F || {};
			F.name = D;
			F.setter = F.setter || this.DEFAULT_HTML_SETTER;
			F.getter = F.getter || this.DEFAULT_HTML_GETTER;
			F.value = F.value || E[D];
			this._configs[D] = new YAHOO.util.Attribute(F, this)
		}
	};
	YAHOO.augment(A, C);
	YAHOO.util.Element = A
})();
YAHOO.register("element", YAHOO.util.Element, {
	version: "2.7.0",
	build: "1799"
});
if (!YAHOO.util.DragDropMgr) {
	YAHOO.util.DragDropMgr = function () {
		var A = YAHOO.util.Event,
			B = YAHOO.util.Dom;
		return {
			useShim: false,
			_shimActive: false,
			_shimState: false,
			_debugShim: false,
			_createShim: function () {
				var C = document.createElement("div");
				C.id = "yui-ddm-shim";
				if (document.body.firstChild) {
					document.body.insertBefore(C, document.body.firstChild)
				}
				else {
					document.body.appendChild(C)
				}
				C.style.display = "none";
				C.style.backgroundColor = "red";
				C.style.position = "absolute";
				C.style.zIndex = "99999";
				B.setStyle(C, "opacity", "0");
				this._shim = C;
				A.on(C, "mouseup", this.handleMouseUp, this, true);
				A.on(C, "mousemove", this.handleMouseMove, this, true);
				A.on(window, "scroll", this._sizeShim, this, true)
			},
			_sizeShim: function () {
				if (this._shimActive) {
					var C = this._shim;
					C.style.height = B.getDocumentHeight() + "px";
					C.style.width = B.getDocumentWidth() + "px";
					C.style.top = "0";
					C.style.left = "0"
				}
			},
			_activateShim: function () {
				if (this.useShim) {
					if (!this._shim) {
						this._createShim()
					}
					this._shimActive = true;
					var C = this._shim,
						D = "0";
					if (this._debugShim) {
						D = ".5"
					}
					B.setStyle(C, "opacity", D);
					this._sizeShim();
					C.style.display = "block"
				}
			},
			_deactivateShim: function () {
				this._shim.style.display = "none";
				this._shimActive = false
			},
			_shim: null,
			ids: {},
			handleIds: {},
			dragCurrent: null,
			dragOvers: {},
			deltaX: 0,
			deltaY: 0,
			preventDefault: true,
			stopPropagation: true,
			initialized: false,
			locked: false,
			interactionInfo: null,
			init: function () {
				this.initialized = true
			},
			POINT: 0,
			INTERSECT: 1,
			STRICT_INTERSECT: 2,
			mode: 0,
			_execOnAll: function (E, D) {
				for (var F in this.ids) {
					for (var C in this.ids[F]) {
						var G = this.ids[F][C];
						if (!this.isTypeOfDD(G)) {
							continue
						}
						G[E].apply(G, D)
					}
				}
			},
			_onLoad: function () {
				this.init();
				A.on(document, "mouseup", this.handleMouseUp, this, true);
				A.on(document, "mousemove", this.handleMouseMove, this, true);
				A.on(window, "unload", this._onUnload, this, true);
				A.on(window, "resize", this._onResize, this, true)
			},
			_onResize: function (C) {
				this._execOnAll("resetConstraints", [])
			},
			lock: function () {
				this.locked = true
			},
			unlock: function () {
				this.locked = false
			},
			isLocked: function () {
				return this.locked
			},
			locationCache: {},
			useCache: true,
			clickPixelThresh: 3,
			clickTimeThresh: 1000,
			dragThreshMet: false,
			clickTimeout: null,
			startX: 0,
			startY: 0,
			fromTimeout: false,
			regDragDrop: function (D, C) {
				if (!this.initialized) {
					this.init()
				}
				if (!this.ids[C]) {
					this.ids[C] = {}
				}
				this.ids[C][D.id] = D
			},
			removeDDFromGroup: function (E, C) {
				if (!this.ids[C]) {
					this.ids[C] = {}
				}
				var D = this.ids[C];
				if (D && D[E.id]) {
					delete D[E.id]
				}
			},
			_remove: function (E) {
				for (var D in E.groups) {
					if (D) {
						var C = this.ids[D];
						if (C && C[E.id]) {
							delete C[E.id]
						}
					}
				}
				delete this.handleIds[E.id]
			},
			regHandle: function (D, C) {
				if (!this.handleIds[D]) {
					this.handleIds[D] = {}
				}
				this.handleIds[D][C] = C
			},
			isDragDrop: function (C) {
				return (this.getDDById(C)) ? true : false
			},
			getRelated: function (H, D) {
				var G = [];
				for (var F in H.groups) {
					for (var E in this.ids[F]) {
						var C = this.ids[F][E];
						if (!this.isTypeOfDD(C)) {
							continue
						}
						if (!D || C.isTarget) {
							G[G.length] = C
						}
					}
				}
				return G
			},
			isLegalTarget: function (G, F) {
				var D = this.getRelated(G, true);
				for (var E = 0, C = D.length; E < C; ++E) {
					if (D[E].id == F.id) {
						return true
					}
				}
				return false
			},
			isTypeOfDD: function (C) {
				return (C && C.__ygDragDrop)
			},
			isHandle: function (D, C) {
				return (this.handleIds[D] && this.handleIds[D][C])
			},
			getDDById: function (D) {
				for (var C in this.ids) {
					if (this.ids[C][D]) {
						return this.ids[C][D]
					}
				}
				return null
			},
			handleMouseDown: function (E, D) {
				this.currentTarget = YAHOO.util.Event.getTarget(E);
				this.dragCurrent = D;
				var C = D.getEl();
				this.startX = YAHOO.util.Event.getPageX(E);
				this.startY = YAHOO.util.Event.getPageY(E);
				this.deltaX = this.startX - C.offsetLeft;
				this.deltaY = this.startY - C.offsetTop;
				this.dragThreshMet = false;
				this.clickTimeout = setTimeout(function () {
					var F = YAHOO.util.DDM;
					F.startDrag(F.startX, F.startY);
					F.fromTimeout = true
				}, this.clickTimeThresh)
			},
			startDrag: function (C, E) {
				if (this.dragCurrent && this.dragCurrent.useShim) {
					this._shimState = this.useShim;
					this.useShim = true
				}
				this._activateShim();
				clearTimeout(this.clickTimeout);
				var D = this.dragCurrent;
				if (D && D.events.b4StartDrag) {
					D.b4StartDrag(C, E);
					D.fireEvent("b4StartDragEvent", {
						x: C,
						y: E
					})
				}
				if (D && D.events.startDrag) {
					D.startDrag(C, E);
					D.fireEvent("startDragEvent", {
						x: C,
						y: E
					})
				}
				this.dragThreshMet = true
			},
			handleMouseUp: function (C) {
				if (this.dragCurrent) {
					clearTimeout(this.clickTimeout);
					if (this.dragThreshMet) {
						if (this.fromTimeout) {
							this.fromTimeout = false;
							this.handleMouseMove(C)
						}
						this.fromTimeout = false;
						this.fireEvents(C, true)
					}
					else {}
					this.stopDrag(C);
					this.stopEvent(C)
				}
			},
			stopEvent: function (C) {
				if (this.stopPropagation) {
					YAHOO.util.Event.stopPropagation(C)
				}
				if (this.preventDefault) {
					YAHOO.util.Event.preventDefault(C)
				}
			},
			stopDrag: function (E, D) {
				var C = this.dragCurrent;
				if (C && !D) {
					if (this.dragThreshMet) {
						if (C.events.b4EndDrag) {
							C.b4EndDrag(E);
							C.fireEvent("b4EndDragEvent", {
								e: E
							})
						}
						if (C.events.endDrag) {
							C.endDrag(E);
							C.fireEvent("endDragEvent", {
								e: E
							})
						}
					}
					if (C.events.mouseUp) {
						C.onMouseUp(E);
						C.fireEvent("mouseUpEvent", {
							e: E
						})
					}
				}
				if (this._shimActive) {
					this._deactivateShim();
					if (this.dragCurrent && this.dragCurrent.useShim) {
						this.useShim = this._shimState;
						this._shimState = false
					}
				}
				this.dragCurrent = null;
				this.dragOvers = {}
			},
			handleMouseMove: function (F) {
				var C = this.dragCurrent;
				if (C) {
					if (YAHOO.util.Event.isIE && !F.button) {
						this.stopEvent(F);
						return this.handleMouseUp(F)
					}
					else {
						if (F.clientX < 0 || F.clientY < 0) {}
					}
					if (!this.dragThreshMet) {
						var E = Math.abs(this.startX - YAHOO.util.Event.getPageX(F));
						var D = Math.abs(this.startY - YAHOO.util.Event.getPageY(F));
						if (E > this.clickPixelThresh || D > this.clickPixelThresh) {
							this.startDrag(this.startX, this.startY)
						}
					}
					if (this.dragThreshMet) {
						if (C && C.events.b4Drag) {
							C.b4Drag(F);
							C.fireEvent("b4DragEvent", {
								e: F
							})
						}
						if (C && C.events.drag) {
							C.onDrag(F);
							C.fireEvent("dragEvent", {
								e: F
							})
						}
						if (C) {
							this.fireEvents(F, false)
						}
					}
					this.stopEvent(F)
				}
			},
			fireEvents: function (V, L) {
				var a = this.dragCurrent;
				if (!a || a.isLocked() || a.dragOnly) {
					return
				}
				var N = YAHOO.util.Event.getPageX(V),
					M = YAHOO.util.Event.getPageY(V),
					P = new YAHOO.util.Point(N, M),
					K = a.getTargetCoord(P.x, P.y),
					F = a.getDragEl(),
					E = ["out", "over", "drop", "enter"],
					U = new YAHOO.util.Region(K.y, K.x + F.offsetWidth, K.y + F.offsetHeight, K.x),
					I = [],
					D = {},
					Q = [],
					c = {
						outEvts: [],
						overEvts: [],
						dropEvts: [],
						enterEvts: []
					};
				for (var S in this.dragOvers) {
					var d = this.dragOvers[S];
					if (!this.isTypeOfDD(d)) {
						continue
					}
					if (!this.isOverTarget(P, d, this.mode, U)) {
						c.outEvts.push(d)
					}
					I[S] = true;
					delete this.dragOvers[S]
				}
				for (var R in a.groups) {
					if ("string" != typeof R) {
						continue
					}
					for (S in this.ids[R]) {
						var G = this.ids[R][S];
						if (!this.isTypeOfDD(G)) {
							continue
						}
						if (G.isTarget && !G.isLocked() && G != a) {
							if (this.isOverTarget(P, G, this.mode, U)) {
								D[R] = true;
								if (L) {
									c.dropEvts.push(G)
								}
								else {
									if (!I[G.id]) {
										c.enterEvts.push(G)
									}
									else {
										c.overEvts.push(G)
									}
									this.dragOvers[G.id] = G
								}
							}
						}
					}
				}
				this.interactionInfo = {
					out: c.outEvts,
					enter: c.enterEvts,
					over: c.overEvts,
					drop: c.dropEvts,
					point: P,
					draggedRegion: U,
					sourceRegion: this.locationCache[a.id],
					validDrop: L
				};
				for (var C in D) {
					Q.push(C)
				}
				if (L && !c.dropEvts.length) {
					this.interactionInfo.validDrop = false;
					if (a.events.invalidDrop) {
						a.onInvalidDrop(V);
						a.fireEvent("invalidDropEvent", {
							e: V
						})
					}
				}
				for (S = 0; S < E.length; S++) {
					var Y = null;
					if (c[E[S] + "Evts"]) {
						Y = c[E[S] + "Evts"]
					}
					if (Y && Y.length) {
						var H = E[S].charAt(0).toUpperCase() + E[S].substr(1),
							X = "onDrag" + H,
							J = "b4Drag" + H,
							O = "drag" + H + "Event",
							W = "drag" + H;
						if (this.mode) {
							if (a.events[J]) {
								a[J](V, Y, Q);
								a.fireEvent(J + "Event", {
									event: V,
									info: Y,
									group: Q
								})
							}
							if (a.events[W]) {
								a[X](V, Y, Q);
								a.fireEvent(O, {
									event: V,
									info: Y,
									group: Q
								})
							}
						}
						else {
							for (var Z = 0, T = Y.length; Z < T; ++Z) {
								if (a.events[J]) {
									a[J](V, Y[Z].id, Q[0]);
									a.fireEvent(J + "Event", {
										event: V,
										info: Y[Z].id,
										group: Q[0]
									})
								}
								if (a.events[W]) {
									a[X](V, Y[Z].id, Q[0]);
									a.fireEvent(O, {
										event: V,
										info: Y[Z].id,
										group: Q[0]
									})
								}
							}
						}
					}
				}
			},
			getBestMatch: function (E) {
				var G = null;
				var D = E.length;
				if (D == 1) {
					G = E[0]
				}
				else {
					for (var F = 0; F < D; ++F) {
						var C = E[F];
						if (this.mode == this.INTERSECT && C.cursorIsOver) {
							G = C;
							break
						}
						else {
							if (!G || !G.overlap || (C.overlap && G.overlap.getArea() < C.overlap.getArea())) {
								G = C
							}
						}
					}
				}
				return G
			},
			refreshCache: function (D) {
				var F = D || this.ids;
				for (var C in F) {
					if ("string" != typeof C) {
						continue
					}
					for (var E in this.ids[C]) {
						var G = this.ids[C][E];
						if (this.isTypeOfDD(G)) {
							var H = this.getLocation(G);
							if (H) {
								this.locationCache[G.id] = H
							}
							else {
								delete this.locationCache[G.id]
							}
						}
					}
				}
			},
			verifyEl: function (D) {
				try {
					if (D) {
						var C = D.offsetParent;
						if (C) {
							return true
						}
					}
				}
				catch (E) {}
				return false
			},
			getLocation: function (H) {
				if (!this.isTypeOfDD(H)) {
					return null
				}
				var F = H.getEl(),
					K, E, D, M, L, N, C, J, G;
				try {
					K = YAHOO.util.Dom.getXY(F)
				}
				catch (I) {}
				if (!K) {
					return null
				}
				E = K[0];
				D = E + F.offsetWidth;
				M = K[1];
				L = M + F.offsetHeight;
				N = M - H.padding[0];
				C = D + H.padding[1];
				J = L + H.padding[2];
				G = E - H.padding[3];
				return new YAHOO.util.Region(N, C, J, G)
			},
			isOverTarget: function (K, C, E, F) {
				var G = this.locationCache[C.id];
				if (!G || !this.useCache) {
					G = this.getLocation(C);
					this.locationCache[C.id] = G
				}
				if (!G) {
					return false
				}
				C.cursorIsOver = G.contains(K);
				var J = this.dragCurrent;
				if (!J || (!E && !J.constrainX && !J.constrainY)) {
					return C.cursorIsOver
				}
				C.overlap = null;
				if (!F) {
					var H = J.getTargetCoord(K.x, K.y);
					var D = J.getDragEl();
					F = new YAHOO.util.Region(H.y, H.x + D.offsetWidth, H.y + D.offsetHeight, H.x)
				}
				var I = F.intersect(G);
				if (I) {
					C.overlap = I;
					return (E) ? true : C.cursorIsOver
				}
				else {
					return false
				}
			},
			_onUnload: function (D, C) {
				this.unregAll()
			},
			unregAll: function () {
				if (this.dragCurrent) {
					this.stopDrag();
					this.dragCurrent = null
				}
				this._execOnAll("unreg", []);
				this.ids = {}
			},
			elementCache: {},
			getElWrapper: function (D) {
				var C = this.elementCache[D];
				if (!C || !C.el) {
					C = this.elementCache[D] = new this.ElementWrapper(YAHOO.util.Dom.get(D))
				}
				return C
			},
			getElement: function (C) {
				return YAHOO.util.Dom.get(C)
			},
			getCss: function (D) {
				var C = YAHOO.util.Dom.get(D);
				return (C) ? C.style : null
			},
			ElementWrapper: function (C) {
				this.el = C || null;
				this.id = this.el && C.id;
				this.css = this.el && C.style
			},
			getPosX: function (C) {
				return YAHOO.util.Dom.getX(C)
			},
			getPosY: function (C) {
				return YAHOO.util.Dom.getY(C)
			},
			swapNode: function (E, C) {
				if (E.swapNode) {
					E.swapNode(C)
				}
				else {
					var F = C.parentNode;
					var D = C.nextSibling;
					if (D == E) {
						F.insertBefore(E, C)
					}
					else {
						if (C == E.nextSibling) {
							F.insertBefore(C, E)
						}
						else {
							E.parentNode.replaceChild(C, E);
							F.insertBefore(E, D)
						}
					}
				}
			},
			getScroll: function () {
				var E, C, F = document.documentElement,
					D = document.body;
				if (F && (F.scrollTop || F.scrollLeft)) {
					E = F.scrollTop;
					C = F.scrollLeft
				}
				else {
					if (D) {
						E = D.scrollTop;
						C = D.scrollLeft
					}
					else {}
				}
				return {
					top: E,
					left: C
				}
			},
			getStyle: function (D, C) {
				return YAHOO.util.Dom.getStyle(D, C)
			},
			getScrollTop: function () {
				return this.getScroll().top
			},
			getScrollLeft: function () {
				return this.getScroll().left
			},
			moveToEl: function (C, E) {
				var D = YAHOO.util.Dom.getXY(E);
				YAHOO.util.Dom.setXY(C, D)
			},
			getClientHeight: function () {
				return YAHOO.util.Dom.getViewportHeight()
			},
			getClientWidth: function () {
				return YAHOO.util.Dom.getViewportWidth()
			},
			numericSort: function (D, C) {
				return (D - C)
			},
			_timeoutCount: 0,
			_addListeners: function () {
				var C = YAHOO.util.DDM;
				if (YAHOO.util.Event && document) {
					C._onLoad()
				}
				else {
					if (C._timeoutCount > 2000) {}
					else {
						setTimeout(C._addListeners, 10);
						if (document && document.body) {
							C._timeoutCount += 1
						}
					}
				}
			},
			handleWasClicked: function (C, E) {
				if (this.isHandle(E, C.id)) {
					return true
				}
				else {
					var D = C.parentNode;
					while (D) {
						if (this.isHandle(E, D.id)) {
							return true
						}
						else {
							D = D.parentNode
						}
					}
				}
				return false
			}
		}
	}();
	YAHOO.util.DDM = YAHOO.util.DragDropMgr;
	YAHOO.util.DDM._addListeners()
}(function () {
	var A = YAHOO.util.Event;
	var B = YAHOO.util.Dom;
	YAHOO.util.DragDrop = function (E, C, D) {
		if (E) {
			this.init(E, C, D)
		}
	};
	YAHOO.util.DragDrop.prototype = {
		events: null,
		on: function () {
			this.subscribe.apply(this, arguments)
		},
		id: null,
		config: null,
		dragElId: null,
		handleElId: null,
		invalidHandleTypes: null,
		invalidHandleIds: null,
		invalidHandleClasses: null,
		startPageX: 0,
		startPageY: 0,
		groups: null,
		locked: false,
		lock: function () {
			this.locked = true
		},
		unlock: function () {
			this.locked = false
		},
		isTarget: true,
		padding: null,
		dragOnly: false,
		useShim: false,
		_domRef: null,
		__ygDragDrop: true,
		constrainX: false,
		constrainY: false,
		minX: 0,
		maxX: 0,
		minY: 0,
		maxY: 0,
		deltaX: 0,
		deltaY: 0,
		maintainOffset: false,
		xTicks: null,
		yTicks: null,
		primaryButtonOnly: true,
		available: false,
		hasOuterHandles: false,
		cursorIsOver: false,
		overlap: null,
		b4StartDrag: function (C, D) {},
		startDrag: function (C, D) {},
		b4Drag: function (C) {},
		onDrag: function (C) {},
		onDragEnter: function (C, D) {},
		b4DragOver: function (C) {},
		onDragOver: function (C, D) {},
		b4DragOut: function (C) {},
		onDragOut: function (C, D) {},
		b4DragDrop: function (C) {},
		onDragDrop: function (C, D) {},
		onInvalidDrop: function (C) {},
		b4EndDrag: function (C) {},
		endDrag: function (C) {},
		b4MouseDown: function (C) {},
		onMouseDown: function (C) {},
		onMouseUp: function (C) {},
		onAvailable: function () {},
		getEl: function () {
			if (!this._domRef) {
				this._domRef = B.get(this.id)
			}
			return this._domRef
		},
		getDragEl: function () {
			return B.get(this.dragElId)
		},
		init: function (F, C, D) {
			this.initTarget(F, C, D);
			A.on(this._domRef || this.id, "mousedown", this.handleMouseDown, this, true);
			for (var E in this.events) {
				this.createEvent(E + "Event")
			}
		},
		initTarget: function (E, C, D) {
			this.config = D || {};
			this.events = {};
			this.DDM = YAHOO.util.DDM;
			this.groups = {};
			if (typeof E !== "string") {
				this._domRef = E;
				E = B.generateId(E)
			}
			this.id = E;
			this.addToGroup((C) ? C : "default");
			this.handleElId = E;
			A.onAvailable(E, this.handleOnAvailable, this, true);
			this.setDragElId(E);
			this.invalidHandleTypes = {
				A: "A"
			};
			this.invalidHandleIds = {};
			this.invalidHandleClasses = [];
			this.applyConfig()
		},
		applyConfig: function () {
			this.events = {
				mouseDown: true,
				b4MouseDown: true,
				mouseUp: true,
				b4StartDrag: true,
				startDrag: true,
				b4EndDrag: true,
				endDrag: true,
				drag: true,
				b4Drag: true,
				invalidDrop: true,
				b4DragOut: true,
				dragOut: true,
				dragEnter: true,
				b4DragOver: true,
				dragOver: true,
				b4DragDrop: true,
				dragDrop: true
			};
			if (this.config.events) {
				for (var C in this.config.events) {
					if (this.config.events[C] === false) {
						this.events[C] = false
					}
				}
			}
			this.padding = this.config.padding || [0, 0, 0, 0];
			this.isTarget = (this.config.isTarget !== false);
			this.maintainOffset = (this.config.maintainOffset);
			this.primaryButtonOnly = (this.config.primaryButtonOnly !== false);
			this.dragOnly = ((this.config.dragOnly === true) ? true : false);
			this.useShim = ((this.config.useShim === true) ? true : false)
		},
		handleOnAvailable: function () {
			this.available = true;
			this.resetConstraints();
			this.onAvailable()
		},
		setPadding: function (E, C, F, D) {
			if (!C && 0 !== C) {
				this.padding = [E, E, E, E]
			}
			else {
				if (!F && 0 !== F) {
					this.padding = [E, C, E, C]
				}
				else {
					this.padding = [E, C, F, D]
				}
			}
		},
		setInitPosition: function (F, E) {
			var G = this.getEl();
			if (!this.DDM.verifyEl(G)) {
				if (G && G.style && (G.style.display == "none")) {}
				else {}
				return
			}
			var D = F || 0;
			var C = E || 0;
			var H = B.getXY(G);
			this.initPageX = H[0] - D;
			this.initPageY = H[1] - C;
			this.lastPageX = H[0];
			this.lastPageY = H[1];
			this.setStartPosition(H)
		},
		setStartPosition: function (D) {
			var C = D || B.getXY(this.getEl());
			this.deltaSetXY = null;
			this.startPageX = C[0];
			this.startPageY = C[1]
		},
		addToGroup: function (C) {
			this.groups[C] = true;
			this.DDM.regDragDrop(this, C)
		},
		removeFromGroup: function (C) {
			if (this.groups[C]) {
				delete this.groups[C]
			}
			this.DDM.removeDDFromGroup(this, C)
		},
		setDragElId: function (C) {
			this.dragElId = C
		},
		setHandleElId: function (C) {
			if (typeof C !== "string") {
				C = B.generateId(C)
			}
			this.handleElId = C;
			this.DDM.regHandle(this.id, C)
		},
		setOuterHandleElId: function (C) {
			if (typeof C !== "string") {
				C = B.generateId(C)
			}
			A.on(C, "mousedown", this.handleMouseDown, this, true);
			this.setHandleElId(C);
			this.hasOuterHandles = true
		},
		unreg: function () {
			A.removeListener(this.id, "mousedown", this.handleMouseDown);
			this._domRef = null;
			this.DDM._remove(this)
		},
		isLocked: function () {
			return (this.DDM.isLocked() || this.locked)
		},
		handleMouseDown: function (J, I) {
			var D = J.which || J.button;
			if (this.primaryButtonOnly && D > 1) {
				return
			}
			if (this.isLocked()) {
				return
			}
			var C = this.b4MouseDown(J),
				F = true;
			if (this.events.b4MouseDown) {
				F = this.fireEvent("b4MouseDownEvent", J)
			}
			var E = this.onMouseDown(J),
				H = true;
			if (this.events.mouseDown) {
				H = this.fireEvent("mouseDownEvent", J)
			}
			if ((C === false) || (E === false) || (F === false) || (H === false)) {
				return
			}
			this.DDM.refreshCache(this.groups);
			var G = new YAHOO.util.Point(A.getPageX(J), A.getPageY(J));
			if (!this.hasOuterHandles && !this.DDM.isOverTarget(G, this)) {}
			else {
				if (this.clickValidator(J)) {
					this.setStartPosition();
					this.DDM.handleMouseDown(J, this);
					this.DDM.stopEvent(J)
				}
				else {}
			}
		},
		clickValidator: function (D) {
			var C = YAHOO.util.Event.getTarget(D);
			return (this.isValidHandleChild(C) && (this.id == this.handleElId || this.DDM.handleWasClicked(C, this.id)))
		},
		getTargetCoord: function (E, D) {
			var C = E - this.deltaX;
			var F = D - this.deltaY;
			if (this.constrainX) {
				if (C < this.minX) {
					C = this.minX
				}
				if (C > this.maxX) {
					C = this.maxX
				}
			}
			if (this.constrainY) {
				if (F < this.minY) {
					F = this.minY
				}
				if (F > this.maxY) {
					F = this.maxY
				}
			}
			C = this.getTick(C, this.xTicks);
			F = this.getTick(F, this.yTicks);
			return {
				x: C,
				y: F
			}
		},
		addInvalidHandleType: function (C) {
			var D = C.toUpperCase();
			this.invalidHandleTypes[D] = D
		},
		addInvalidHandleId: function (C) {
			if (typeof C !== "string") {
				C = B.generateId(C)
			}
			this.invalidHandleIds[C] = C
		},
		addInvalidHandleClass: function (C) {
			this.invalidHandleClasses.push(C)
		},
		removeInvalidHandleType: function (C) {
			var D = C.toUpperCase();
			delete this.invalidHandleTypes[D]
		},
		removeInvalidHandleId: function (C) {
			if (typeof C !== "string") {
				C = B.generateId(C)
			}
			delete this.invalidHandleIds[C]
		},
		removeInvalidHandleClass: function (D) {
			for (var E = 0, C = this.invalidHandleClasses.length; E < C; ++E) {
				if (this.invalidHandleClasses[E] == D) {
					delete this.invalidHandleClasses[E]
				}
			}
		},
		isValidHandleChild: function (F) {
			var E = true;
			var H;
			try {
				H = F.nodeName.toUpperCase()
			}
			catch (G) {
				H = F.nodeName
			}
			E = E && !this.invalidHandleTypes[H];
			E = E && !this.invalidHandleIds[F.id];
			for (var D = 0, C = this.invalidHandleClasses.length; E && D < C; ++D) {
				E = !B.hasClass(F, this.invalidHandleClasses[D])
			}
			return E
		},
		setXTicks: function (F, C) {
			this.xTicks = [];
			this.xTickSize = C;
			var E = {};
			for (var D = this.initPageX; D >= this.minX; D = D - C) {
				if (!E[D]) {
					this.xTicks[this.xTicks.length] = D;
					E[D] = true
				}
			}
			for (D = this.initPageX; D <= this.maxX; D = D + C) {
				if (!E[D]) {
					this.xTicks[this.xTicks.length] = D;
					E[D] = true
				}
			}
			this.xTicks.sort(this.DDM.numericSort)
		},
		setYTicks: function (F, C) {
			this.yTicks = [];
			this.yTickSize = C;
			var E = {};
			for (var D = this.initPageY; D >= this.minY; D = D - C) {
				if (!E[D]) {
					this.yTicks[this.yTicks.length] = D;
					E[D] = true
				}
			}
			for (D = this.initPageY; D <= this.maxY; D = D + C) {
				if (!E[D]) {
					this.yTicks[this.yTicks.length] = D;
					E[D] = true
				}
			}
			this.yTicks.sort(this.DDM.numericSort)
		},
		setXConstraint: function (E, D, C) {
			this.leftConstraint = parseInt(E, 10);
			this.rightConstraint = parseInt(D, 10);
			this.minX = this.initPageX - this.leftConstraint;
			this.maxX = this.initPageX + this.rightConstraint;
			if (C) {
				this.setXTicks(this.initPageX, C)
			}
			this.constrainX = true
		},
		clearConstraints: function () {
			this.constrainX = false;
			this.constrainY = false;
			this.clearTicks()
		},
		clearTicks: function () {
			this.xTicks = null;
			this.yTicks = null;
			this.xTickSize = 0;
			this.yTickSize = 0
		},
		setYConstraint: function (C, E, D) {
			this.topConstraint = parseInt(C, 10);
			this.bottomConstraint = parseInt(E, 10);
			this.minY = this.initPageY - this.topConstraint;
			this.maxY = this.initPageY + this.bottomConstraint;
			if (D) {
				this.setYTicks(this.initPageY, D)
			}
			this.constrainY = true
		},
		resetConstraints: function () {
			if (this.initPageX || this.initPageX === 0) {
				var D = (this.maintainOffset) ? this.lastPageX - this.initPageX : 0;
				var C = (this.maintainOffset) ? this.lastPageY - this.initPageY : 0;
				this.setInitPosition(D, C)
			}
			else {
				this.setInitPosition()
			}
			if (this.constrainX) {
				this.setXConstraint(this.leftConstraint, this.rightConstraint, this.xTickSize)
			}
			if (this.constrainY) {
				this.setYConstraint(this.topConstraint, this.bottomConstraint, this.yTickSize)
			}
		},
		getTick: function (I, F) {
			if (!F) {
				return I
			}
			else {
				if (F[0] >= I) {
					return F[0]
				}
				else {
					for (var D = 0, C = F.length; D < C; ++D) {
						var E = D + 1;
						if (F[E] && F[E] >= I) {
							var H = I - F[D];
							var G = F[E] - I;
							return (G > H) ? F[D] : F[E]
						}
					}
					return F[F.length - 1]
				}
			}
		},
		toString: function () {
			return ("DragDrop " + this.id)
		}
	};
	YAHOO.augment(YAHOO.util.DragDrop, YAHOO.util.EventProvider)
})();
YAHOO.util.DD = function (C, A, B) {
	if (C) {
		this.init(C, A, B)
	}
};
YAHOO.extend(YAHOO.util.DD, YAHOO.util.DragDrop, {
	scroll: true,
	autoOffset: function (C, B) {
		var A = C - this.startPageX;
		var D = B - this.startPageY;
		this.setDelta(A, D)
	},
	setDelta: function (B, A) {
		this.deltaX = B;
		this.deltaY = A
	},
	setDragElPos: function (C, B) {
		var A = this.getDragEl();
		this.alignElWithMouse(A, C, B)
	},
	alignElWithMouse: function (C, G, F) {
		var E = this.getTargetCoord(G, F);
		if (!this.deltaSetXY) {
			var H = [E.x, E.y];
			YAHOO.util.Dom.setXY(C, H);
			var D = parseInt(YAHOO.util.Dom.getStyle(C, "left"), 10);
			var B = parseInt(YAHOO.util.Dom.getStyle(C, "top"), 10);
			this.deltaSetXY = [D - E.x, B - E.y]
		}
		else {
			YAHOO.util.Dom.setStyle(C, "left", (E.x + this.deltaSetXY[0]) + "px");
			YAHOO.util.Dom.setStyle(C, "top", (E.y + this.deltaSetXY[1]) + "px")
		}
		this.cachePosition(E.x, E.y);
		var A = this;
		setTimeout(function () {
			A.autoScroll.call(A, E.x, E.y, C.offsetHeight, C.offsetWidth)
		}, 0)
	},
	cachePosition: function (B, A) {
		if (B) {
			this.lastPageX = B;
			this.lastPageY = A
		}
		else {
			var C = YAHOO.util.Dom.getXY(this.getEl());
			this.lastPageX = C[0];
			this.lastPageY = C[1]
		}
	},
	autoScroll: function (J, I, E, K) {
		if (this.scroll) {
			var L = this.DDM.getClientHeight();
			var B = this.DDM.getClientWidth();
			var N = this.DDM.getScrollTop();
			var D = this.DDM.getScrollLeft();
			var H = E + I;
			var M = K + J;
			var G = (L + N - I - this.deltaY);
			var F = (B + D - J - this.deltaX);
			var C = 40;
			var A = (document.all) ? 80 : 30;
			if (H > L && G < C) {
				window.scrollTo(D, N + A)
			}
			if (I < N && N > 0 && I - N < C) {
				window.scrollTo(D, N - A)
			}
			if (M > B && F < C) {
				window.scrollTo(D + A, N)
			}
			if (J < D && D > 0 && J - D < C) {
				window.scrollTo(D - A, N)
			}
		}
	},
	applyConfig: function () {
		YAHOO.util.DD.superclass.applyConfig.call(this);
		this.scroll = (this.config.scroll !== false)
	},
	b4MouseDown: function (A) {
		this.setStartPosition();
		this.autoOffset(YAHOO.util.Event.getPageX(A), YAHOO.util.Event.getPageY(A))
	},
	b4Drag: function (A) {
		this.setDragElPos(YAHOO.util.Event.getPageX(A), YAHOO.util.Event.getPageY(A))
	},
	toString: function () {
		return ("DD " + this.id)
	}
});
YAHOO.util.DDProxy = function (C, A, B) {
	if (C) {
		this.init(C, A, B);
		this.initFrame()
	}
};
YAHOO.util.DDProxy.dragElId = "ygddfdiv";
YAHOO.extend(YAHOO.util.DDProxy, YAHOO.util.DD, {
	resizeFrame: true,
	centerFrame: false,
	createFrame: function () {
		var B = this,
			A = document.body;
		if (!A || !A.firstChild) {
			setTimeout(function () {
				B.createFrame()
			}, 50);
			return
		}
		var F = this.getDragEl(),
			E = YAHOO.util.Dom;
		if (!F) {
			F = document.createElement("div");
			F.id = this.dragElId;
			var D = F.style;
			D.position = "absolute";
			D.visibility = "hidden";
			D.cursor = "move";
			D.border = "2px solid #aaa";
			D.zIndex = 999;
			D.height = "25px";
			D.width = "25px";
			var C = document.createElement("div");
			E.setStyle(C, "height", "100%");
			E.setStyle(C, "width", "100%");
			E.setStyle(C, "background-color", "#ccc");
			E.setStyle(C, "opacity", "0");
			F.appendChild(C);
			A.insertBefore(F, A.firstChild)
		}
	},
	initFrame: function () {
		this.createFrame()
	},
	applyConfig: function () {
		YAHOO.util.DDProxy.superclass.applyConfig.call(this);
		this.resizeFrame = (this.config.resizeFrame !== false);
		this.centerFrame = (this.config.centerFrame);
		this.setDragElId(this.config.dragElId || YAHOO.util.DDProxy.dragElId)
	},
	showFrame: function (E, D) {
		var C = this.getEl();
		var A = this.getDragEl();
		var B = A.style;
		this._resizeProxy();
		if (this.centerFrame) {
			this.setDelta(Math.round(parseInt(B.width, 10) / 2), Math.round(parseInt(B.height, 10) / 2))
		}
		this.setDragElPos(E, D);
		YAHOO.util.Dom.setStyle(A, "visibility", "visible")
	},
	_resizeProxy: function () {
		if (this.resizeFrame) {
			var H = YAHOO.util.Dom;
			var B = this.getEl();
			var C = this.getDragEl();
			var G = parseInt(H.getStyle(C, "borderTopWidth"), 10);
			var I = parseInt(H.getStyle(C, "borderRightWidth"), 10);
			var F = parseInt(H.getStyle(C, "borderBottomWidth"), 10);
			var D = parseInt(H.getStyle(C, "borderLeftWidth"), 10);
			if (isNaN(G)) {
				G = 0
			}
			if (isNaN(I)) {
				I = 0
			}
			if (isNaN(F)) {
				F = 0
			}
			if (isNaN(D)) {
				D = 0
			}
			var E = Math.max(0, B.offsetWidth - I - D);
			var A = Math.max(0, B.offsetHeight - G - F);
			H.setStyle(C, "width", E + "px");
			H.setStyle(C, "height", A + "px")
		}
	},
	b4MouseDown: function (B) {
		this.setStartPosition();
		var A = YAHOO.util.Event.getPageX(B);
		var C = YAHOO.util.Event.getPageY(B);
		this.autoOffset(A, C)
	},
	b4StartDrag: function (A, B) {
		this.showFrame(A, B)
	},
	b4EndDrag: function (A) {
		YAHOO.util.Dom.setStyle(this.getDragEl(), "visibility", "hidden")
	},
	endDrag: function (D) {
		var C = YAHOO.util.Dom;
		var B = this.getEl();
		var A = this.getDragEl();
		C.setStyle(A, "visibility", "");
		C.setStyle(B, "visibility", "hidden");
		YAHOO.util.DDM.moveToEl(B, A);
		C.setStyle(A, "visibility", "hidden");
		C.setStyle(B, "visibility", "")
	},
	toString: function () {
		return ("DDProxy " + this.id)
	}
});
YAHOO.util.DDTarget = function (C, A, B) {
	if (C) {
		this.initTarget(C, A, B)
	}
};
YAHOO.extend(YAHOO.util.DDTarget, YAHOO.util.DragDrop, {
	toString: function () {
		return ("DDTarget " + this.id)
	}
});
YAHOO.register("dragdrop", YAHOO.util.DragDropMgr, {
	version: "2.7.0",
	build: "1799"
});
(function () {
	var E = YAHOO.util.Dom,
		A = YAHOO.util.Event,
		C = YAHOO.lang;
	var B = function (F, D) {
		var G = {
			element: F,
			attributes: D || {}
		};
		B.superclass.constructor.call(this, G.element, G.attributes)
	};
	B._instances = {};
	B.getResizeById = function (D) {
		if (B._instances[D]) {
			return B._instances[D]
		}
		return false
	};
	YAHOO.extend(B, YAHOO.util.Element, {
		CSS_RESIZE: "yui-resize",
		CSS_DRAG: "yui-draggable",
		CSS_HOVER: "yui-resize-hover",
		CSS_PROXY: "yui-resize-proxy",
		CSS_WRAP: "yui-resize-wrap",
		CSS_KNOB: "yui-resize-knob",
		CSS_HIDDEN: "yui-resize-hidden",
		CSS_HANDLE: "yui-resize-handle",
		CSS_STATUS: "yui-resize-status",
		CSS_GHOST: "yui-resize-ghost",
		CSS_RESIZING: "yui-resize-resizing",
		_resizeEvent: null,
		dd: null,
		browser: YAHOO.env.ua,
		_locked: null,
		_positioned: null,
		_dds: null,
		_wrap: null,
		_proxy: null,
		_handles: null,
		_currentHandle: null,
		_currentDD: null,
		_cache: null,
		_active: null,
		_createProxy: function () {
			if (this.get("proxy")) {
				this._proxy = document.createElement("div");
				this._proxy.className = this.CSS_PROXY;
				this._proxy.style.height = this.get("element").clientHeight + "px";
				this._proxy.style.width = this.get("element").clientWidth + "px";
				this._wrap.parentNode.appendChild(this._proxy)
			}
			else {
				this.set("animate", false)
			}
		},
		_createWrap: function () {
			this._positioned = false;
			if (this.get("wrap") === false) {
				switch (this.get("element").tagName.toLowerCase()) {
				case "img":
				case "textarea":
				case "input":
				case "iframe":
				case "select":
					this.set("wrap", true);
					break
				}
			}
			if (this.get("wrap") === true) {
				this._wrap = document.createElement("div");
				this._wrap.id = this.get("element").id + "_wrap";
				this._wrap.className = this.CSS_WRAP;
				if (this.get("element").tagName.toLowerCase() == "textarea") {
					E.addClass(this._wrap, "yui-resize-textarea")
				}
				E.setStyle(this._wrap, "width", this.get("width") + "px");
				E.setStyle(this._wrap, "height", this.get("height") + "px");
				E.setStyle(this._wrap, "z-index", this.getStyle("z-index"));
				this.setStyle("z-index", 0);
				var F = E.getStyle(this.get("element"), "position");
				E.setStyle(this._wrap, "position", ((F == "static") ? "relative" : F));
				E.setStyle(this._wrap, "top", E.getStyle(this.get("element"), "top"));
				E.setStyle(this._wrap, "left", E.getStyle(this.get("element"), "left"));
				if (E.getStyle(this.get("element"), "position") == "absolute") {
					this._positioned = true;
					E.setStyle(this.get("element"), "position", "relative");
					E.setStyle(this.get("element"), "top", "0");
					E.setStyle(this.get("element"), "left", "0")
				}
				var D = this.get("element").parentNode;
				D.replaceChild(this._wrap, this.get("element"));
				this._wrap.appendChild(this.get("element"))
			}
			else {
				this._wrap = this.get("element");
				if (E.getStyle(this._wrap, "position") == "absolute") {
					this._positioned = true
				}
			}
			if (this.get("draggable")) {
				this._setupDragDrop()
			}
			if (this.get("hover")) {
				E.addClass(this._wrap, this.CSS_HOVER)
			}
			if (this.get("knobHandles")) {
				E.addClass(this._wrap, this.CSS_KNOB)
			}
			if (this.get("hiddenHandles")) {
				E.addClass(this._wrap, this.CSS_HIDDEN)
			}
			E.addClass(this._wrap, this.CSS_RESIZE)
		},
		_setupDragDrop: function () {
			E.addClass(this._wrap, this.CSS_DRAG);
			this.dd = new YAHOO.util.DD(this._wrap, this.get("id") + "-resize", {
				dragOnly: true,
				useShim: this.get("useShim")
			});
			this.dd.on("dragEvent", function () {
				this.fireEvent("dragEvent", arguments)
			}, this, true)
		},
		_createHandles: function () {
			this._handles = {};
			this._dds = {};
			var G = this.get("handles");
			for (var F = 0; F < G.length; F++) {
				this._handles[G[F]] = document.createElement("div");
				this._handles[G[F]].id = E.generateId(this._handles[G[F]]);
				this._handles[G[F]].className = this.CSS_HANDLE + " " + this.CSS_HANDLE + "-" + G[F];
				var D = document.createElement("div");
				D.className = this.CSS_HANDLE + "-inner-" + G[F];
				this._handles[G[F]].appendChild(D);
				this._wrap.appendChild(this._handles[G[F]]);
				A.on(this._handles[G[F]], "mouseover", this._handleMouseOver, this, true);
				A.on(this._handles[G[F]], "mouseout", this._handleMouseOut, this, true);
				this._dds[G[F]] = new YAHOO.util.DragDrop(this._handles[G[F]], this.get("id") + "-handle-" + G, {
					useShim: this.get("useShim")
				});
				this._dds[G[F]].setPadding(15, 15, 15, 15);
				this._dds[G[F]].on("startDragEvent", this._handleStartDrag, this._dds[G[F]], this);
				this._dds[G[F]].on("mouseDownEvent", this._handleMouseDown, this._dds[G[F]], this)
			}
			this._status = document.createElement("span");
			this._status.className = this.CSS_STATUS;
			document.body.insertBefore(this._status, document.body.firstChild)
		},
		_ieSelectFix: function () {
			return false
		},
		_ieSelectBack: null,
		_setAutoRatio: function (D) {
			if (this.get("autoRatio")) {
				if (D && D.shiftKey) {
					this.set("ratio", true)
				}
				else {
					this.set("ratio", this._configs.ratio._initialConfig.value)
				}
			}
		},
		_handleMouseDown: function (D) {
			if (this._locked) {
				return false
			}
			if (E.getStyle(this._wrap, "position") == "absolute") {
				this._positioned = true
			}
			if (D) {
				this._setAutoRatio(D)
			}
			if (this.browser.ie) {
				this._ieSelectBack = document.body.onselectstart;
				document.body.onselectstart = this._ieSelectFix
			}
		},
		_handleMouseOver: function (G) {
			if (this._locked) {
				return false
			}
			E.removeClass(this._wrap, this.CSS_RESIZE);
			if (this.get("hover")) {
				E.removeClass(this._wrap, this.CSS_HOVER)
			}
			var D = A.getTarget(G);
			if (!E.hasClass(D, this.CSS_HANDLE)) {
				D = D.parentNode
			}
			if (E.hasClass(D, this.CSS_HANDLE) && !this._active) {
				E.addClass(D, this.CSS_HANDLE + "-active");
				for (var F in this._handles) {
					if (C.hasOwnProperty(this._handles, F)) {
						if (this._handles[F] == D) {
							E.addClass(D, this.CSS_HANDLE + "-" + F + "-active");
							break
						}
					}
				}
			}
			E.addClass(this._wrap, this.CSS_RESIZE)
		},
		_handleMouseOut: function (G) {
			E.removeClass(this._wrap, this.CSS_RESIZE);
			if (this.get("hover") && !this._active) {
				E.addClass(this._wrap, this.CSS_HOVER)
			}
			var D = A.getTarget(G);
			if (!E.hasClass(D, this.CSS_HANDLE)) {
				D = D.parentNode
			}
			if (E.hasClass(D, this.CSS_HANDLE) && !this._active) {
				E.removeClass(D, this.CSS_HANDLE + "-active");
				for (var F in this._handles) {
					if (C.hasOwnProperty(this._handles, F)) {
						if (this._handles[F] == D) {
							E.removeClass(D, this.CSS_HANDLE + "-" + F + "-active");
							break
						}
					}
				}
			}
			E.addClass(this._wrap, this.CSS_RESIZE)
		},
		_handleStartDrag: function (G, F) {
			var D = F.getDragEl();
			if (E.hasClass(D, this.CSS_HANDLE)) {
				if (E.getStyle(this._wrap, "position") == "absolute") {
					this._positioned = true
				}
				this._active = true;
				this._currentDD = F;
				if (this._proxy) {
					this._proxy.style.visibility = "visible";
					this._proxy.style.zIndex = "1000";
					this._proxy.style.height = this.get("element").clientHeight + "px";
					this._proxy.style.width = this.get("element").clientWidth + "px"
				}
				for (var H in this._handles) {
					if (C.hasOwnProperty(this._handles, H)) {
						if (this._handles[H] == D) {
							this._currentHandle = H;
							var I = "_handle_for_" + H;
							E.addClass(D, this.CSS_HANDLE + "-" + H + "-active");
							F.on("dragEvent", this[I], this, true);
							F.on("mouseUpEvent", this._handleMouseUp, this, true);
							break
						}
					}
				}
				E.addClass(D, this.CSS_HANDLE + "-active");
				if (this.get("proxy")) {
					var J = E.getXY(this.get("element"));
					E.setXY(this._proxy, J);
					if (this.get("ghost")) {
						this.addClass(this.CSS_GHOST)
					}
				}
				E.addClass(this._wrap, this.CSS_RESIZING);
				this._setCache();
				this._updateStatus(this._cache.height, this._cache.width, this._cache.top, this._cache.left);
				this.fireEvent("startResize", {
					type: "startresize",
					target: this
				})
			}
		},
		_setCache: function () {
			this._cache.xy = E.getXY(this._wrap);
			E.setXY(this._wrap, this._cache.xy);
			this._cache.height = this.get("clientHeight");
			this._cache.width = this.get("clientWidth");
			this._cache.start.height = this._cache.height;
			this._cache.start.width = this._cache.width;
			this._cache.start.top = this._cache.xy[1];
			this._cache.start.left = this._cache.xy[0];
			this._cache.top = this._cache.xy[1];
			this._cache.left = this._cache.xy[0];
			this.set("height", this._cache.height, true);
			this.set("width", this._cache.width, true)
		},
		_handleMouseUp: function (F) {
			this._active = false;
			var G = "_handle_for_" + this._currentHandle;
			this._currentDD.unsubscribe("dragEvent", this[G], this, true);
			this._currentDD.unsubscribe("mouseUpEvent", this._handleMouseUp, this, true);
			if (this._proxy) {
				this._proxy.style.visibility = "hidden";
				this._proxy.style.zIndex = "-1";
				if (this.get("setSize")) {
					this.resize(F, this._cache.height, this._cache.width, this._cache.top, this._cache.left, true)
				}
				else {
					this.fireEvent("resize", {
						ev: "resize",
						target: this,
						height: this._cache.height,
						width: this._cache.width,
						top: this._cache.top,
						left: this._cache.left
					})
				}
				if (this.get("ghost")) {
					this.removeClass(this.CSS_GHOST)
				}
			}
			if (this.get("hover")) {
				E.addClass(this._wrap, this.CSS_HOVER)
			}
			if (this._status) {
				E.setStyle(this._status, "display", "none")
			}
			if (this.browser.ie) {
				document.body.onselectstart = this._ieSelectBack
			}
			if (this.browser.ie) {
				E.removeClass(this._wrap, this.CSS_RESIZE)
			}
			for (var D in this._handles) {
				if (C.hasOwnProperty(this._handles, D)) {
					E.removeClass(this._handles[D], this.CSS_HANDLE + "-active")
				}
			}
			if (this.get("hover") && !this._active) {
				E.addClass(this._wrap, this.CSS_HOVER)
			}
			E.removeClass(this._wrap, this.CSS_RESIZING);
			E.removeClass(this._handles[this._currentHandle], this.CSS_HANDLE + "-" + this._currentHandle + "-active");
			E.removeClass(this._handles[this._currentHandle], this.CSS_HANDLE + "-active");
			if (this.browser.ie) {
				E.addClass(this._wrap, this.CSS_RESIZE)
			}
			this._resizeEvent = null;
			this._currentHandle = null;
			if (!this.get("animate")) {
				this.set("height", this._cache.height, true);
				this.set("width", this._cache.width, true)
			}
			this.fireEvent("endResize", {
				ev: "endResize",
				target: this,
				height: this._cache.height,
				width: this._cache.width,
				top: this._cache.top,
				left: this._cache.left
			})
		},
		_setRatio: function (K, N, Q, I) {
			var O = K,
				G = N;
			if (this.get("ratio")) {
				var P = this._cache.height,
					H = this._cache.width,
					F = parseInt(this.get("height"), 10),
					L = parseInt(this.get("width"), 10),
					M = this.get("maxHeight"),
					R = this.get("minHeight"),
					D = this.get("maxWidth"),
					J = this.get("minWidth");
				switch (this._currentHandle) {
				case "l":
					K = F * (N / L);
					K = Math.min(Math.max(R, K), M);
					N = L * (K / F);
					Q = (this._cache.start.top - (-((F - K) / 2)));
					I = (this._cache.start.left - (-((L - N))));
					break;
				case "r":
					K = F * (N / L);
					K = Math.min(Math.max(R, K), M);
					N = L * (K / F);
					Q = (this._cache.start.top - (-((F - K) / 2)));
					break;
				case "t":
					N = L * (K / F);
					K = F * (N / L);
					I = (this._cache.start.left - (-((L - N) / 2)));
					Q = (this._cache.start.top - (-((F - K))));
					break;
				case "b":
					N = L * (K / F);
					K = F * (N / L);
					I = (this._cache.start.left - (-((L - N) / 2)));
					break;
				case "bl":
					K = F * (N / L);
					N = L * (K / F);
					I = (this._cache.start.left - (-((L - N))));
					break;
				case "br":
					K = F * (N / L);
					N = L * (K / F);
					break;
				case "tl":
					K = F * (N / L);
					N = L * (K / F);
					I = (this._cache.start.left - (-((L - N))));
					Q = (this._cache.start.top - (-((F - K))));
					break;
				case "tr":
					K = F * (N / L);
					N = L * (K / F);
					I = (this._cache.start.left);
					Q = (this._cache.start.top - (-((F - K))));
					break
				}
				O = this._checkHeight(K);
				G = this._checkWidth(N);
				if ((O != K) || (G != N)) {
					Q = 0;
					I = 0;
					if (O != K) {
						G = this._cache.width
					}
					if (G != N) {
						O = this._cache.height
					}
				}
			}
			return [O, G, Q, I]
		},
		_updateStatus: function (K, G, J, F) {
			if (this._resizeEvent && (!C.isString(this._resizeEvent))) {
				K = ((K === 0) ? this._cache.start.height : K);
				G = ((G === 0) ? this._cache.start.width : G);
				var I = parseInt(this.get("height"), 10),
					D = parseInt(this.get("width"), 10);
				if (isNaN(I)) {
					I = parseInt(K, 10)
				}
				if (isNaN(D)) {
					D = parseInt(G, 10)
				}
				var L = (parseInt(K, 10) - I);
				var H = (parseInt(G, 10) - D);
				this._cache.offsetHeight = L;
				this._cache.offsetWidth = H;
				if (this.get("status")) {
					E.setStyle(this._status, "display", "inline");
					this._status.innerHTML = "<strong>" + parseInt(K, 10) + " x " + parseInt(G, 10) + "</strong><em>" + ((L > 0) ? "+" : "") + L + " x " + ((H > 0) ? "+" : "") + H + "</em>";
					E.setXY(this._status, [A.getPageX(this._resizeEvent) + 12, A.getPageY(this._resizeEvent) + 12])
				}
			}
		},
		lock: function (D) {
			this._locked = true;
			if (D && this.dd) {
				E.removeClass(this._wrap, "yui-draggable");
				this.dd.lock()
			}
			return this
		},
		unlock: function (D) {
			this._locked = false;
			if (D && this.dd) {
				E.addClass(this._wrap, "yui-draggable");
				this.dd.unlock()
			}
			return this
		},
		isLocked: function () {
			return this._locked
		},
		reset: function () {
			this.resize(null, this._cache.start.height, this._cache.start.width, this._cache.start.top, this._cache.start.left, true);
			return this
		},
		resize: function (M, J, P, Q, H, F, K) {
			if (this._locked) {
				return false
			}
			this._resizeEvent = M;
			var G = this._wrap,
				I = this.get("animate"),
				O = true;
			if (this._proxy && !F) {
				G = this._proxy;
				I = false
			}
			this._setAutoRatio(M);
			if (this._positioned) {
				if (this._proxy) {
					Q = this._cache.top - Q;
					H = this._cache.left - H
				}
			}
			var L = this._setRatio(J, P, Q, H);
			J = parseInt(L[0], 10);
			P = parseInt(L[1], 10);
			Q = parseInt(L[2], 10);
			H = parseInt(L[3], 10);
			if (Q == 0) {
				Q = E.getY(G)
			}
			if (H == 0) {
				H = E.getX(G)
			}
			if (this._positioned) {
				if (this._proxy && F) {
					if (!I) {
						G.style.top = this._proxy.style.top;
						G.style.left = this._proxy.style.left
					}
					else {
						Q = this._proxy.style.top;
						H = this._proxy.style.left
					}
				}
				else {
					if (!this.get("ratio") && !this._proxy) {
						Q = this._cache.top + -(Q);
						H = this._cache.left + -(H)
					}
					if (Q) {
						if (this.get("minY")) {
							if (Q < this.get("minY")) {
								Q = this.get("minY")
							}
						}
						if (this.get("maxY")) {
							if (Q > this.get("maxY")) {
								Q = this.get("maxY")
							}
						}
					}
					if (H) {
						if (this.get("minX")) {
							if (H < this.get("minX")) {
								H = this.get("minX")
							}
						}
						if (this.get("maxX")) {
							if ((H + P) > this.get("maxX")) {
								H = (this.get("maxX") - P)
							}
						}
					}
				}
			}
			if (!K) {
				var N = this.fireEvent("beforeResize", {
					ev: "beforeResize",
					target: this,
					height: J,
					width: P,
					top: Q,
					left: H
				});
				if (N === false) {
					return false
				}
			}
			this._updateStatus(J, P, Q, H);
			if (this._positioned) {
				if (this._proxy && F) {}
				else {
					if (Q) {
						E.setY(G, Q);
						this._cache.top = Q
					}
					if (H) {
						E.setX(G, H);
						this._cache.left = H
					}
				}
			}
			if (J) {
				if (!I) {
					O = true;
					if (this._proxy && F) {
						if (!this.get("setSize")) {
							O = false
						}
					}
					if (O) {
						G.style.height = J + "px"
					}
					if ((this._proxy && F) || !this._proxy) {
						if (this._wrap != this.get("element")) {
							this.get("element").style.height = J + "px"
						}
					}
				}
				this._cache.height = J
			}
			if (P) {
				this._cache.width = P;
				if (!I) {
					O = true;
					if (this._proxy && F) {
						if (!this.get("setSize")) {
							O = false
						}
					}
					if (O) {
						G.style.width = P + "px"
					}
					if ((this._proxy && F) || !this._proxy) {
						if (this._wrap != this.get("element")) {
							this.get("element").style.width = P + "px"
						}
					}
				}
			}
			if (I) {
				if (YAHOO.util.Anim) {
					var D = new YAHOO.util.Anim(G, {
						height: {
							to: this._cache.height
						},
						width: {
							to: this._cache.width
						}
					}, this.get("animateDuration"), this.get("animateEasing"));
					if (this._positioned) {
						if (Q) {
							D.attributes.top = {
								to: parseInt(Q, 10)
							}
						}
						if (H) {
							D.attributes.left = {
								to: parseInt(H, 10)
							}
						}
					}
					if (this._wrap != this.get("element")) {
						D.onTween.subscribe(function () {
							this.get("element").style.height = G.style.height;
							this.get("element").style.width = G.style.width
						}, this, true)
					}
					D.onComplete.subscribe(function () {
						this.set("height", J);
						this.set("width", P);
						this.fireEvent("resize", {
							ev: "resize",
							target: this,
							height: J,
							width: P,
							top: Q,
							left: H
						})
					}, this, true);
					D.animate()
				}
			}
			else {
				if (this._proxy && !F) {
					this.fireEvent("proxyResize", {
						ev: "proxyresize",
						target: this,
						height: J,
						width: P,
						top: Q,
						left: H
					})
				}
				else {
					this.fireEvent("resize", {
						ev: "resize",
						target: this,
						height: J,
						width: P,
						top: Q,
						left: H
					})
				}
			}
			return this
		},
		_handle_for_br: function (F) {
			var G = this._setWidth(F.e);
			var D = this._setHeight(F.e);
			this.resize(F.e, D, G, 0, 0)
		},
		_handle_for_bl: function (G) {
			var H = this._setWidth(G.e, true);
			var F = this._setHeight(G.e);
			var D = (H - this._cache.width);
			this.resize(G.e, F, H, 0, D)
		},
		_handle_for_tl: function (G) {
			var I = this._setWidth(G.e, true);
			var F = this._setHeight(G.e, true);
			var H = (F - this._cache.height);
			var D = (I - this._cache.width);
			this.resize(G.e, F, I, H, D)
		},
		_handle_for_tr: function (F) {
			var H = this._setWidth(F.e);
			var D = this._setHeight(F.e, true);
			var G = (D - this._cache.height);
			this.resize(F.e, D, H, G, 0)
		},
		_handle_for_r: function (D) {
			this._dds.r.setYConstraint(0, 0);
			var F = this._setWidth(D.e);
			this.resize(D.e, 0, F, 0, 0)
		},
		_handle_for_l: function (F) {
			this._dds.l.setYConstraint(0, 0);
			var G = this._setWidth(F.e, true);
			var D = (G - this._cache.width);
			this.resize(F.e, 0, G, 0, D)
		},
		_handle_for_b: function (F) {
			this._dds.b.setXConstraint(0, 0);
			var D = this._setHeight(F.e);
			this.resize(F.e, D, 0, 0, 0)
		},
		_handle_for_t: function (F) {
			this._dds.t.setXConstraint(0, 0);
			var D = this._setHeight(F.e, true);
			var G = (D - this._cache.height);
			this.resize(F.e, D, 0, G, 0)
		},
		_setWidth: function (H, J) {
			var I = this._cache.xy[0],
				G = this._cache.width,
				D = A.getPageX(H),
				F = (D - I);
			if (J) {
				F = (I - D) + parseInt(this.get("width"), 10)
			}
			F = this._snapTick(F, this.get("xTicks"));
			F = this._checkWidth(F);
			return F
		},
		_checkWidth: function (D) {
			if (this.get("minWidth")) {
				if (D <= this.get("minWidth")) {
					D = this.get("minWidth")
				}
			}
			if (this.get("maxWidth")) {
				if (D >= this.get("maxWidth")) {
					D = this.get("maxWidth")
				}
			}
			return D
		},
		_checkHeight: function (D) {
			if (this.get("minHeight")) {
				if (D <= this.get("minHeight")) {
					D = this.get("minHeight")
				}
			}
			if (this.get("maxHeight")) {
				if (D >= this.get("maxHeight")) {
					D = this.get("maxHeight")
				}
			}
			return D
		},
		_setHeight: function (G, I) {
			var H = this._cache.xy[1],
				F = this._cache.height,
				J = A.getPageY(G),
				D = (J - H);
			if (I) {
				D = (H - J) + parseInt(this.get("height"), 10)
			}
			D = this._snapTick(D, this.get("yTicks"));
			D = this._checkHeight(D);
			return D
		},
		_snapTick: function (G, F) {
			if (!G || !F) {
				return G
			}
			var H = G;
			var D = G % F;
			if (D > 0) {
				if (D > (F / 2)) {
					H = G + (F - D)
				}
				else {
					H = G - D
				}
			}
			return H
		},
		init: function (H, F) {
			this._locked = false;
			this._cache = {
				xy: [],
				height: 0,
				width: 0,
				top: 0,
				left: 0,
				offsetHeight: 0,
				offsetWidth: 0,
				start: {
					height: 0,
					width: 0,
					top: 0,
					left: 0
				}
			};
			B.superclass.init.call(this, H, F);
			this.set("setSize", this.get("setSize"));
			if (F.height) {
				this.set("height", parseInt(F.height, 10))
			}
			else {
				var G = this.getStyle("height");
				if (G == "auto") {
					this.set("height", parseInt(this.get("element").offsetHeight, 10))
				}
			}
			if (F.width) {
				this.set("width", parseInt(F.width, 10))
			}
			else {
				var D = this.getStyle("width");
				if (D == "auto") {
					this.set("width", parseInt(this.get("element").offsetWidth, 10))
				}
			}
			var I = H;
			if (!C.isString(I)) {
				I = E.generateId(I)
			}
			B._instances[I] = this;
			this._active = false;
			this._createWrap();
			this._createProxy();
			this._createHandles()
		},
		getProxyEl: function () {
			return this._proxy
		},
		getWrapEl: function () {
			return this._wrap
		},
		getStatusEl: function () {
			return this._status
		},
		getActiveHandleEl: function () {
			return this._handles[this._currentHandle]
		},
		isActive: function () {
			return ((this._active) ? true : false)
		},
		initAttributes: function (D) {
			B.superclass.initAttributes.call(this, D);
			this.setAttributeConfig("useShim", {
				value: ((D.useShim === true) ? true : false),
				validator: YAHOO.lang.isBoolean,
				method: function (F) {
					for (var G in this._dds) {
						if (C.hasOwnProperty(this._dds, G)) {
							this._dds[G].useShim = F
						}
					}
					if (this.dd) {
						this.dd.useShim = F
					}
				}
			});
			this.setAttributeConfig("setSize", {
				value: ((D.setSize === false) ? false : true),
				validator: YAHOO.lang.isBoolean
			});
			this.setAttributeConfig("wrap", {
				writeOnce: true,
				validator: YAHOO.lang.isBoolean,
				value: D.wrap || false
			});
			this.setAttributeConfig("handles", {
				writeOnce: true,
				value: D.handles || ["r", "b", "br"],
				validator: function (F) {
					if (C.isString(F) && F.toLowerCase() == "all") {
						F = ["t", "b", "r", "l", "bl", "br", "tl", "tr"]
					}
					if (!C.isArray(F)) {
						F = F.replace(/, /g, ",");
						F = F.split(",")
					}
					this._configs.handles.value = F
				}
			});
			this.setAttributeConfig("width", {
				value: D.width || parseInt(this.getStyle("width"), 10),
				validator: YAHOO.lang.isNumber,
				method: function (F) {
					F = parseInt(F, 10);
					if (F > 0) {
						if (this.get("setSize")) {
							this.setStyle("width", F + "px")
						}
						this._cache.width = F;
						this._configs.width.value = F
					}
				}
			});
			this.setAttributeConfig("height", {
				value: D.height || parseInt(this.getStyle("height"), 10),
				validator: YAHOO.lang.isNumber,
				method: function (F) {
					F = parseInt(F, 10);
					if (F > 0) {
						if (this.get("setSize")) {
							this.setStyle("height", F + "px")
						}
						this._cache.height = F;
						this._configs.height.value = F
					}
				}
			});
			this.setAttributeConfig("minWidth", {
				value: D.minWidth || 15,
				validator: YAHOO.lang.isNumber
			});
			this.setAttributeConfig("minHeight", {
				value: D.minHeight || 15,
				validator: YAHOO.lang.isNumber
			});
			this.setAttributeConfig("maxWidth", {
				value: D.maxWidth || 10000,
				validator: YAHOO.lang.isNumber
			});
			this.setAttributeConfig("maxHeight", {
				value: D.maxHeight || 10000,
				validator: YAHOO.lang.isNumber
			});
			this.setAttributeConfig("minY", {
				value: D.minY || false
			});
			this.setAttributeConfig("minX", {
				value: D.minX || false
			});
			this.setAttributeConfig("maxY", {
				value: D.maxY || false
			});
			this.setAttributeConfig("maxX", {
				value: D.maxX || false
			});
			this.setAttributeConfig("animate", {
				value: D.animate || false,
				validator: function (G) {
					var F = true;
					if (!YAHOO.util.Anim) {
						F = false
					}
					return F
				}
			});
			this.setAttributeConfig("animateEasing", {
				value: D.animateEasing || function () {
					var F = false;
					if (YAHOO.util.Easing && YAHOO.util.Easing.easeOut) {
						F = YAHOO.util.Easing.easeOut
					}
					return F
				}()
			});
			this.setAttributeConfig("animateDuration", {
				value: D.animateDuration || 0.5
			});
			this.setAttributeConfig("proxy", {
				value: D.proxy || false,
				validator: YAHOO.lang.isBoolean
			});
			this.setAttributeConfig("ratio", {
				value: D.ratio || false,
				validator: YAHOO.lang.isBoolean
			});
			this.setAttributeConfig("ghost", {
				value: D.ghost || false,
				validator: YAHOO.lang.isBoolean
			});
			this.setAttributeConfig("draggable", {
				value: D.draggable || false,
				validator: YAHOO.lang.isBoolean,
				method: function (F) {
					if (F && this._wrap) {
						this._setupDragDrop()
					}
					else {
						if (this.dd) {
							E.removeClass(this._wrap, this.CSS_DRAG);
							this.dd.unreg()
						}
					}
				}
			});
			this.setAttributeConfig("hover", {
				value: D.hover || false,
				validator: YAHOO.lang.isBoolean
			});
			this.setAttributeConfig("hiddenHandles", {
				value: D.hiddenHandles || false,
				validator: YAHOO.lang.isBoolean
			});
			this.setAttributeConfig("knobHandles", {
				value: D.knobHandles || false,
				validator: YAHOO.lang.isBoolean
			});
			this.setAttributeConfig("xTicks", {
				value: D.xTicks || false
			});
			this.setAttributeConfig("yTicks", {
				value: D.yTicks || false
			});
			this.setAttributeConfig("status", {
				value: D.status || false,
				validator: YAHOO.lang.isBoolean
			});
			this.setAttributeConfig("autoRatio", {
				value: D.autoRatio || false,
				validator: YAHOO.lang.isBoolean
			})
		},
		destroy: function () {
			for (var F in this._handles) {
				if (C.hasOwnProperty(this._handles, F)) {
					A.purgeElement(this._handles[F]);
					this._handles[F].parentNode.removeChild(this._handles[F])
				}
			}
			if (this._proxy) {
				this._proxy.parentNode.removeChild(this._proxy)
			}
			if (this._status) {
				this._status.parentNode.removeChild(this._status)
			}
			if (this.dd) {
				this.dd.unreg();
				E.removeClass(this._wrap, this.CSS_DRAG)
			}
			if (this._wrap != this.get("element")) {
				this.setStyle("position", "");
				this.setStyle("top", "");
				this.setStyle("left", "");
				this._wrap.parentNode.replaceChild(this.get("element"), this._wrap)
			}
			this.removeClass(this.CSS_RESIZE);
			delete YAHOO.util.Resize._instances[this.get("id")];
			for (var D in this) {
				if (C.hasOwnProperty(this, D)) {
					this[D] = null;
					delete this[D]
				}
			}
		},
		toString: function () {
			if (this.get) {
				return "Resize (#" + this.get("id") + ")"
			}
			return "Resize Utility"
		}
	});
	YAHOO.util.Resize = B
})();
YAHOO.register("resize", YAHOO.util.Resize, {
	version: "2.7.0",
	build: "1799"
});
YAHOO.namespace("util");
YAHOO.util.Cookie = {
	_createCookieString: function (B, D, C, A) {
		var F = YAHOO.lang;
		var E = encodeURIComponent(B) + "=" + (C ? encodeURIComponent(D) : D);
		if (F.isObject(A)) {
			if (A.expires instanceof Date) {
				E += "; expires=" + A.expires.toGMTString()
			}
			if (F.isString(A.path) && A.path != "") {
				E += "; path=" + A.path
			}
			if (F.isString(A.domain) && A.domain != "") {
				E += "; domain=" + A.domain
			}
			if (A.secure === true) {
				E += "; secure"
			}
		}
		return E
	},
	_createCookieHashString: function (B) {
		var D = YAHOO.lang;
		if (!D.isObject(B)) {
			throw new TypeError("Cookie._createCookieHashString(): Argument must be an object.")
		}
		var C = new Array();
		for (var A in B) {
			if (D.hasOwnProperty(B, A) && !D.isFunction(B[A]) && !D.isUndefined(B[A])) {
				C.push(encodeURIComponent(A) + "=" + encodeURIComponent(String(B[A])))
			}
		}
		return C.join("&")
	},
	_parseCookieHash: function (E) {
		var D = E.split("&"),
			F = null,
			C = new Object();
		if (E.length > 0) {
			for (var B = 0, A = D.length; B < A; B++) {
				F = D[B].split("=");
				C[decodeURIComponent(F[0])] = decodeURIComponent(F[1])
			}
		}
		return C
	},
	_parseCookieString: function (J, A) {
		var K = new Object();
		if (YAHOO.lang.isString(J) && J.length > 0) {
			var B = (A === false ? function (L) {
				return L
			} : decodeURIComponent);
			if (/[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(J)) {
				var H = J.split(/;\s/g),
					I = null,
					C = null,
					E = null;
				for (var D = 0, F = H.length; D < F; D++) {
					E = H[D].match(/([^=]+)=/i);
					if (E instanceof Array) {
						try {
							I = decodeURIComponent(E[1]);
							C = B(H[D].substring(E[1].length + 1))
						}
						catch (G) {}
					}
					else {
						I = decodeURIComponent(H[D]);
						C = I
					}
					K[I] = C
				}
			}
		}
		return K
	},
	get: function (A, B) {
		var D = YAHOO.lang;
		var C = this._parseCookieString(document.cookie);
		if (!D.isString(A) || A === "") {
			throw new TypeError("Cookie.get(): Cookie name must be a non-empty string.")
		}
		if (D.isUndefined(C[A])) {
			return null
		}
		if (!D.isFunction(B)) {
			return C[A]
		}
		else {
			return B(C[A])
		}
	},
	getSub: function (A, C, B) {
		var E = YAHOO.lang;
		var D = this.getSubs(A);
		if (D !== null) {
			if (!E.isString(C) || C === "") {
				throw new TypeError("Cookie.getSub(): Subcookie name must be a non-empty string.")
			}
			if (E.isUndefined(D[C])) {
				return null
			}
			if (!E.isFunction(B)) {
				return D[C]
			}
			else {
				return B(D[C])
			}
		}
		else {
			return null
		}
	},
	getSubs: function (A) {
		if (!YAHOO.lang.isString(A) || A === "") {
			throw new TypeError("Cookie.getSubs(): Cookie name must be a non-empty string.")
		}
		var B = this._parseCookieString(document.cookie, false);
		if (YAHOO.lang.isString(B[A])) {
			return this._parseCookieHash(B[A])
		}
		return null
	},
	remove: function (B, A) {
		if (!YAHOO.lang.isString(B) || B === "") {
			throw new TypeError("Cookie.remove(): Cookie name must be a non-empty string.")
		}
		A = A || {};
		A.expires = new Date(0);
		return this.set(B, "", A)
	},
	removeSub: function (B, D, A) {
		if (!YAHOO.lang.isString(B) || B === "") {
			throw new TypeError("Cookie.removeSub(): Cookie name must be a non-empty string.")
		}
		if (!YAHOO.lang.isString(D) || D === "") {
			throw new TypeError("Cookie.removeSub(): Subcookie name must be a non-empty string.")
		}
		var C = this.getSubs(B);
		if (YAHOO.lang.isObject(C) && YAHOO.lang.hasOwnProperty(C, D)) {
			delete C[D];
			return this.setSubs(B, C, A)
		}
		else {
			return ""
		}
	},
	set: function (B, C, A) {
		var E = YAHOO.lang;
		if (!E.isString(B)) {
			throw new TypeError("Cookie.set(): Cookie name must be a string.")
		}
		if (E.isUndefined(C)) {
			throw new TypeError("Cookie.set(): Value cannot be undefined.")
		}
		var D = this._createCookieString(B, C, true, A);
		document.cookie = D;
		return D
	},
	setSub: function (B, D, C, A) {
		var F = YAHOO.lang;
		if (!F.isString(B) || B === "") {
			throw new TypeError("Cookie.setSub(): Cookie name must be a non-empty string.")
		}
		if (!F.isString(D) || D === "") {
			throw new TypeError("Cookie.setSub(): Subcookie name must be a non-empty string.")
		}
		if (F.isUndefined(C)) {
			throw new TypeError("Cookie.setSub(): Subcookie value cannot be undefined.")
		}
		var E = this.getSubs(B);
		if (!F.isObject(E)) {
			E = new Object()
		}
		E[D] = C;
		return this.setSubs(B, E, A)
	},
	setSubs: function (B, C, A) {
		var E = YAHOO.lang;
		if (!E.isString(B)) {
			throw new TypeError("Cookie.setSubs(): Cookie name must be a string.")
		}
		if (!E.isObject(C)) {
			throw new TypeError("Cookie.setSubs(): Cookie value must be an object.")
		}
		var D = this._createCookieString(B, this._createCookieHashString(C), false, A);
		document.cookie = D;
		return D
	}
};
YAHOO.register("cookie", YAHOO.util.Cookie, {
	version: "2.7.0",
	build: "1799"
});

function PwylApplyChangeSet() {
	this.appliedChangeSet = null;
	this.newChangeSetNum = null
}
PwylApplyChangeSet.prototype.saveChangeSet = function (key, name, auto_apply) {
	var params = {};
	params.key = key || ppw.server.id;
	params.user_id = ppw.props.proAccountId;
	params.url = ppw.props.pageUrl;
	if (name) {
		params.name = name
	}
	if (auto_apply) {
		params.auto_apply = auto_apply
	}
	if (ppw.props.enforceQuotas) {
		ppw.props.changeSetsSaved++
	}
	params = ppw.acs.serializeCommandObjects(params);
	ppw.ui.completionMessagePanel.showMessage("ppw_completion_message_panel_changeset");
	ppw.server.ajaxCall("/change_sets/save", params, null, "post", {
		forceMultipart: true
	})
};
PwylApplyChangeSet.prototype.serializeCommandObjects = function (params) {
	var changes = ppw.changeset.doStack;
	params.num_changes = changes.length;
	var i = 0,
		j = 0,
		change;
	for (i = 0; i < changes.length; i++) {
		change = changes[i];
		if (change instanceof PwylCommand) {
			change.undoable = true;
			params["change" + j] = encodeURIComponent(change.serialize());
			j++
		}
		else {
			if (change instanceof PwylMultiCommand) {
				for (var k = 0; k < change.commands.length; k++) {
					var command = change.commands[k];
					command.undoable = true;
					params["change" + j] = encodeURIComponent(command.serialize());
					j++
				}
				params.num_changes += change.commands.length - 1
			}
		}
	}
	return params
};
PwylApplyChangeSet.prototype.getChangeSetsForUrl = function () {
	var _addChangeSets = function (response) {
		if (response) {
			var changeSetDropdown = document.getElementById("ppw_select_change_set_dropdown");
			var rawChangeSets = response.split(ppw.server.htmlDelimiter);
			var pageTitle = ppw.util.getPageTitle();
			var regexp = new RegExp(pageTitle + "( ?[0-9]+)?");
			var maxChangeSetNum = 0;
			for (var i = 0; i < rawChangeSets.length; i++) {
				var rawChangeSet = rawChangeSets[i];
				var changeSet = eval("(" + rawChangeSet + ")");
				var option = document.createElement("option");
				option.text = changeSet.name;
				option.value = changeSet.id;
				try {
					changeSetDropdown.add(option, null)
				}
				catch (ex) {
					changeSetDropdown.add(option)
				}
				var result = changeSet.name.match(regexp);
				if (result != null) {
					var changeSetNum = 0;
					if (result[1] == undefined) {
						changeSetNum = 1
					}
					else {
						changeSetNum = parseInt(result[1])
					}
					if (changeSetNum > maxChangeSetNum) {
						maxChangeSetNum = changeSetNum
					}
				}
			}
			if (maxChangeSetNum > 0) {
				ppw.acs.newChangeSetNum = maxChangeSetNum + 1
			}
			if (rawChangeSets.length == 0) {
				ppw.ui.hideChangeSetDropdown()
			}
		}
		else {
			ppw.ui.hideChangeSetDropdown()
		}
	};
	var params = {
		user_id: ppw.props.proAccountId,
		url: ppw.server.pageUrl.encodedUrl
	};
	ppw.server.ajaxCall("/change_sets/get_for_url", params, _addChangeSets)
};
PwylApplyChangeSet.prototype.getChangeSet = function (callback, changeSetId) {
	ppw.server.ajaxCall("/change_sets/" + changeSetId + "/get", {}, callback)
};
PwylApplyChangeSet.prototype.extractCommandsFromResponse = function (response) {
	var cmds = [],
		cmdsStr, i, cmd;
	if (response) {
		cmdsStr = response.split(ppw.server.htmlDelimiter);
		if (cmdsStr.length > 0) {
			for (i = 0; i < cmdsStr.length; i++) {
				cmd = PwylCommand.deserialize(decodeURIComponent(cmdsStr[i]));
				cmds.push(cmd)
			}
		}
	}
	return cmds
};
PwylApplyChangeSet.prototype.applyChangeSetFromResponse = function (response) {
	if (response) {
		ppw.changeset.undoStack = [];
		var commands = ppw.acs.extractCommandsFromResponse(response);
		var multiCommand = ppw.changeset.buildChangeSetMultiCommand("Apply Change Set", commands, false);
		multiCommand.changeSetId = ppw.acs.appliedChangeSet;
		multiCommand.afterDoAction = function () {
			if (!ppw.print_button) {
				var changeSetSelection = document.getElementById("ppw_select_change_set_dropdown");
				changeSetSelection.disabled = true;
				ppw.ui.setSelfDestructingInfoMessage("Change set applied.");
				ppw.acs.appliedChangeSet = multiCommand.changeSetId
			}
		};
		multiCommand.afterUndoAction = function () {
			ppw.acs.appliedChangeSet = null
		};
		ppw.changeset.doAction(multiCommand)
	}
};
PwylApplyChangeSet.prototype.applyChangeSet = function (changeSetId) {
	ppw.acs.getChangeSet(ppw.acs.applyChangeSetFromResponse, changeSetId);
	this.appliedChangeSet = changeSetId
};
PwylApplyChangeSet.prototype.applyChangeSetForEditing = function (changeSetId) {
	var _applyChangeSet = function (response) {
		ppw.changeset.executeCommandsSet(ppw.acs.extractCommandsFromResponse(response))
	};
	ppw.acs.getChangeSet(_applyChangeSet, changeSetId)
};
PwylApplyChangeSet.prototype.autoApplyChangeSet = function () {
	var _applyChangeSet = function (response) {
		if (response && response.length > 0) {
			ppw.acs.applyChangeSet(response)
		}
	};
	var params = {
		user_id: ppw.props.proAccountId,
		url: ppw.server.pageUrl.encodedUrl
	};
	ppw.server.ajaxCall("/change_sets/get_auto_for_url", params, _applyChangeSet)
};

function PwylAuth() {}
PwylAuth.prototype.requiresAuthentication = function (callback) {
	ppw.ui.saveAsPanel.hide();
	if (!ppw.props.proAccountId) {
		ppw.auth.stashedFunction = callback;
		ppw.ui.accountRequiredPanel.show()
	}
	else {
		callback()
	}
};
PwylAuth.prototype.afterAuthenticationContinueExecution = function () {
	ppw.ui.accountRequiredPanel.hide();
	if (ppw.auth.stashedFunction) {
		setTimeout("ppw.auth._afterAuthenticationContinueExecution()", 0)
	}
};
PwylAuth.prototype._afterAuthenticationContinueExecution = function () {
	ppw.auth.stashedFunction();
	ppw.auth.stashedFunction = null
};
PwylAuth.prototype.releaseQuotas = function () {
	ppw.props.enforceQuotas = false
};
PwylAuth.prototype.attemptLogin = function () {
	ppw.auth.showWaitMsg();
	params = {
		"user_session[email]": YAHOO.util.Dom.get("user_session_email").value,
		"user_session[password]": YAHOO.util.Dom.get("user_session_password").value,
		source: "bookmarklet"
	};
	var onComplete = function (response, params) {
		response ? ppw.auth.successfulLogin(params) : ppw.auth.unsuccessfulLogin(params)
	};
	ppw.server.ajaxCall("/user_sessions/bookmarklet_login", params, onComplete, "get")
};
PwylAuth.prototype.successfulLogin = function (params) {
	ppw.props.proAccountId = params.pro_id;
	YAHOO.util.Dom.get("ppw_bookmarklet_login_new").style.display = "none";
	YAHOO.util.Dom.get("ppw_bookmarklet_login_success").style.display = "block";
	YAHOO.util.Dom.get("ppw_bookmarklet_login_success_full_name").innerHTML = "Welcome " + params.full_name + "!"
};
PwylAuth.prototype.unsuccessfulLogin = function (params) {
	ppw.auth.stopWaitMsg();
	YAHOO.util.Dom.get("ppw_bookmarklet_login_failure").style.display = "block"
};
PwylAuth.prototype.showWaitMsg = function () {
	YAHOO.util.Dom.get("ppw_bookmarklet_login_new_buttons").style.display = "none";
	YAHOO.util.Dom.get("ppw_bookmarklet_login_new_wait").style.display = "block"
};
PwylAuth.prototype.stopWaitMsg = function () {
	YAHOO.util.Dom.get("ppw_bookmarklet_login_new_wait").style.display = "none";
	YAHOO.util.Dom.get("ppw_bookmarklet_login_new_buttons").style.display = "block"
};

function PwylAuto() {
	this.badTags = {
		form: 1,
		object: 1,
		embed: 1,
		iframe: 1
	};
	this.ignoreTags = {
		h1: 1,
		br: 1
	}
}
PwylAuto.prototype.scrub = function (currCommand, args) {
	args.content = ppw.auto.getTitles();
	var mainContent = ppw.auto.getMainContentBlock();
	if (mainContent) {
		args.content.push(mainContent)
	}
	ppw.commands.isolateElems(args.content);
	args.cruft = ppw.auto.getCruft(mainContent);
	for (var i = 0; i < args.cruft.length; i++) {
		ppw.util.applyProperty(args.cruft[i], "display", "none")
	}
	ppw.auto.cleanAfterScrub();
	ppw.commands._doRemoveBackground();
	if (!ppw.print_button) {
		ppw.ui.enableOrDisableButton("ppw_auto_link", false)
	}
};
PwylAuto.prototype.unscrub = function (currCommand, args) {
	ppw.commands._undoRemoveBackground();
	for (var i = 0; i < args.cruft.length; i++) {
		ppw.util.undoApplyProperty(args.cruft[i], "display")
	}
	ppw.commands.unIsolateElems(args.content);
	if (!ppw.print_button) {
		ppw.ui.enableOrDisableButton("ppw_auto_link", true)
	}
};
PwylAuto.prototype.getMainContentBlock = function () {
	var allElemScores = [],
		tmpPs = [],
		i, currP, mainElem = null;
	ppw.auto.depthFirstRecursion(ppw.util.pageTop, function (elem) {
		elem.score = ppw.auto.scoreElement(elem);
		if (elem.score) {
			elem.setAttribute("cscore", elem.score.compositeScore);
			if (elem.score.compositeScore > 1 && !elem.score.isInline) {
				allElemScores.push(elem.score)
			}
		}
	});
	allElemScores.sort(function (a, b) {
		return b.compositeScore - a.compositeScore
	});
	for (i = 0; i < allElemScores.length; i++) {
		currP = allElemScores[i].elem.parentNode;
		if (!currP.subsScore) {
			currP.subsScore = 0;
			tmpPs.push(currP)
		}
		currP.subsScore++;
		if (currP.subsScore >= 3) {
			mainElem = currP;
			break
		}
	}
	for (i = 0; i < tmpPs.length; i++) {
		tmpPs[i].subsScore = null
	}
	if (!mainElem && allElemScores.length > 0) {
		mainElem = allElemScores[0].elem
	}
	return mainElem
};
PwylAuto.prototype.getCruft = function (elem) {
	var e, cruft = [];
	for (var i = 0; i < elem.childNodes.length; i++) {
		e = elem.childNodes[i];
		if (e.nodeType != 1 || ppw.auto.ignoreTags[e.tagName.toLowerCase()] == 1) {
			continue
		}
		if (e.getAttribute("cscore") < 1 || ppw.auto.badTags[e.tagName.toLowerCase()] == 1) {
			cruft.push(e)
		}
	}
	return cruft
};
PwylAuto.prototype.cleanAfterScrub = function (e) {
	ppw.auto.depthFirstRecursion(ppw.util.pageTop, function (elem) {
		if (elem.score) {
			elem.score = null
		}
		if (elem.getAttribute("cscore")) {
			elem.removeAttribute("cscore")
		}
	})
};
PwylAuto.prototype.scoreElement = function (elem) {
	var score = {
		visibleChars: 0,
		invisibleChars: 0,
		numChildren: 0,
		compositeScore: 0,
		elem: elem,
		isInline: false
	};
	var e, count, hasTextNodes = false,
		elemStyle = YAHOO.util.Dom.getStyle(elem, "display");
	if (elemStyle == "none") {
		return null
	}
	for (var i = 0; i < elem.childNodes.length; i++) {
		e = elem.childNodes[i];
		if (ppw.util.isNonEmptyText(e)) {
			score.visibleChars += e.nodeValue.strip().length;
			hasTextNodes = true
		}
		else {
			if (e.nodeType == 1 && e.score && !e.score.isInline) {
				score.visibleChars += e.score.visibleChars;
				score.invisibleChars += e.score.invisibleChars;
				score.numChildren += e.score.numChildren + 1
			}
		}
	}
	score.invisibleChars += ppw.auto.getOuterHtmlTagLength(elem);
	if (hasTextNodes) {
		score.numChildren++
	}
	if (ppw.auto.isInline(elem, elemStyle)) {
		score.invisibleChars = 0;
		score.isInline = true
	}
	score.compositeScore = score.invisibleChars == 0 ? score.visibleChars : (score.visibleChars / score.invisibleChars);
	return score
};
PwylAuto.prototype.getTitles = function () {
	return ppw.util.toArray(ppw.util.top.getElementsByTagName("h1"))
};
PwylAuto.prototype.depthFirstRecursion = function (rootNode, callback, notFirst) {
	for (var i = 0; i < rootNode.childNodes.length; i++) {
		if (rootNode.childNodes[i].nodeType == 1 && rootNode.childNodes[i].tagName.toUpperCase() != "IFRAME") {
			ppw.auto.depthFirstRecursion(rootNode.childNodes[i], callback, true)
		}
	}
	if (notFirst) {
		callback(rootNode)
	}
};
PwylAuto.prototype.checkAdjacent = function (elem, forward) {
	var next = forward ? elem.nextSibling : elem.previousSibling;
	var trimmed;
	while (next != null) {
		if (next.nodeType != 3) {
			return false
		}
		trimmed = next.nodeValue.strip();
		if (trimmed.length > 0) {
			var touchingChar = forward ? trimmed.slice(0, 1) : trimmed.slice(trimmed.length - 1, trimmed.length);
			return touchingChar.match(/[\w\!\?"'()\-\.,\:]/) != null
		}
		next = forward ? next.nextSibling : next.previousSibling
	}
	return false
};
PwylAuto.prototype.isInline = function (elem, elemStyle) {
	elemStyle = elemStyle || YAHOO.util.Dom.getStyle(elem, "display");
	if (elem.nodeType != 1 || elemStyle != "inline") {
		return false
	}
	return ppw.auto.checkAdjacent(elem, false) || ppw.auto.checkAdjacent(elem, true)
};
PwylAuto.prototype.getElemName = function (elem) {
	return elem.tagName + "." + elem.id + "." + elem.className
};
PwylAuto.prototype.getOuterHtmlTagLength = function (elem) {
	var len = 0;
	var attrs = elem.attributes;
	for (var i = 0; i < attrs.length; i++) {
		if (attrs[i].specified) {
			len += attrs[i].name.length + attrs[i].value.length + 2
		}
	}
	len += ((elem.tagName.length + 2) * 2) + 1;
	return len
};

function PwylChangeSet() {
	this.doStack = [];
	this.undoStack = [];
	this.resumeCommands;
	this.resumeCallback
}
PwylChangeSet.prototype.doAction = function (command) {
	ppw.init.beforeDo();
	if (command.addPage) {
		switch (command.name) {
		case "Increase Font Size":
		case "Decrease Font Size":
			break;
		default:
			command.doAction()
		}
	}
	else {
		ppw.editor.fixTop();
		command.doAction()
	}
	if (command.undoable) {
		this.doStack.push(command);
		if (!ppw.print_button) {
			ppw.ui.addToUndoList(command)
		}
		if (ppw.props.editChangeSet) {
			ppw.ui.addToChangeList(command)
		}
	}
	ppw.init.afterDo()
};
PwylChangeSet.prototype.undo = function (change, specificCommand) {
	if (this.doStack.length > 0) {
		ppw.editor.changeCursorStyle("progress");
		if (change == undefined) {
			change = this.doStack.length - 1
		}
		if (!ppw.print_button) {
			ppw.ui.undoListPanel.hide()
		}
		setTimeout("ppw.changeset._undo(" + change + ", " + specificCommand + ")", 0)
	}
};
PwylChangeSet.prototype._undo = function (changeId, specificCommand) {
	ppw.init.beforeUndo();
	if (specificCommand) {
		var command = this.doStack[changeId];
		this.doStack.splice(changeId, 1);
		command.undoAction();
		this.undoStack.push(command);
		if (!ppw.print_button) {
			ppw.changeset.updateChangesLists(changeId)
		}
	}
	else {
		var numChanges = this.doStack.length - 1;
		for (var i = numChanges; i >= changeId; i--) {
			var command = this.doStack[i];
			this.doStack.splice(i, 1);
			command.undoAction();
			this.undoStack.push(command);
			if (!ppw.print_button) {
				ppw.changeset.updateChangesLists()
			}
		}
	}
	if (ppw.print_button && this.doStack.length == 0) {
		ppw.print_button.showPrintButton()
	}
	ppw.init.afterUndo();
	ppw.editor.changeCursorStyle("auto")
};
PwylChangeSet.prototype.updateChangesLists = function (changeId) {
	ppw.ui.removeFromUndoList(changeId);
	if (ppw.props.editChangeSet) {
		ppw.ui.removeFromChangeList(changeId)
	}
};
PwylChangeSet.prototype.redo = function () {
	if (this.undoStack.length > 0) {
		ppw.editor.changeCursorStyle("progress");
		setTimeout("ppw.changeset._redo()", 0)
	}
};
PwylChangeSet.prototype._redo = function () {
	this.doAction(this.undoStack.pop())
};
PwylChangeSet.prototype.executeUndoAll = function () {
	if (this.doStack.length > 0) {
		ppw.editor.changeCursorStyle("progress");
		setTimeout("ppw.changeset.undoAll()", 0)
	}
};
PwylChangeSet.prototype.undoAll = function () {
	while (this.doStack.length > 0) {
		ppw.changeset._undo()
	}
};
PwylChangeSet.prototype.executeCommandsSet = function (commands, onComplete, addPage) {
	var i = 0,
		currCmd;
	for (i = 0; i < commands.length; i++) {
		currCmd = commands[i];
		currCmd.addPage = addPage;
		if (currCmd.name == "Add Page" || currCmd.name == "Add Next Page") {
			ppw.changeset.resumeCommands = commands.slice(i + 1);
			ppw.changeset.resumeCallback = onComplete;
			ppw.changeset.doAction(currCmd);
			break
		}
		ppw.changeset.doAction(currCmd)
	}
	if (i == commands.length && onComplete) {
		onComplete()
	}
};
PwylChangeSet.prototype.resumeExecutingCommandSetIfRequired = function () {
	if (ppw.changeset.resumeCommands) {
		var cmds = ppw.changeset.resumeCommands;
		var callback = ppw.changeset.resumeCallback;
		ppw.changeset.resumeCommands = null;
		ppw.changeset.resumeCallback = null;
		ppw.changeset.executeCommandsSet(cmds, callback)
	}
};
PwylChangeSet.prototype.getExistingCommandsToApplyToAddedPage = function () {
	var baseCmds = [],
		newCmds = [];
	if (ppw.changeset.doStack.length < 1) {
		return []
	}
	var currCmd = ppw.changeset.doStack[ppw.changeset.doStack.length - 1];
	if (currCmd.name == "Add Page" || currCmd.name == "Add Next Page") {
		baseCmds = ppw.changeset.doStack
	}
	else {
		if (currCmd.name == "Apply Change Set") {
			baseCmds = currCmd.commands.slice(0, (currCmd.commands.length - ppw.changeset.resumeCommands.length - 1))
		}
	}
	newCmds = ppw.util.filter(baseCmds, function (cmd) {
		return (cmd.name != "Add Page" && cmd.name != "Add Next Page")
	});
	return newCmds
};
PwylChangeSet.prototype.buildChangeSetMultiCommand = function (name, commands, isApplyChanges) {
	var multi = new PwylMultiCommand();
	multi.name = name;
	multi.undoable = !isApplyChanges;
	multi.addPage = isApplyChanges;
	if (!commands) {
		commands = []
	}
	for (var i = 0; i < commands.length; i++) {
		commands[i].undoable = false;
		if (isApplyChanges) {
			commands[i].addPage = true
		}
		multi.setCommand(commands[i])
	}
	return multi
};
PwylChangeSet.prototype.executeInNewPageContext = function (newPage, callback) {
	var realTopId = ppw.util.topId;
	var realTop = ppw.util.top;
	var realPageTopId = ppw.util.pageTopId;
	var realPageTop = ppw.util.pageTop;
	ppw.util.topId = newPage.parentNode.id;
	ppw.util.top = newPage.parentNode;
	if (!newPage.id) {
		newPage.id = "ppw_apply_changes_" + ppw.util.generateUniqueId()
	}
	ppw.util.pageTopId = newPage.id;
	ppw.util.pageTop = newPage;
	ppw.paths.overrideBase = newPage;
	try {
		callback()
	}
	catch (ex) {
		if (window.console) {
			console.log("Error executing command: " + ex.message)
		}
	}
	ppw.util.topId = realTopId;
	ppw.util.top = realTop;
	ppw.util.pageTopId = realPageTopId;
	ppw.util.pageTop = realPageTop;
	ppw.paths.overrideBase = null
};

function PwylCommand() {
	this.name = "";
	this.doFunctions = [];
	this.undoFunctions = [];
	this.selectedElementPaths = [];
	this.args = [];
	this.undoable = true;
	this.addPage = false
}
PwylCommand.prototype.doAction = function (undoable) {
	this._executeAll(this.doFunctions)
};
PwylCommand.prototype.undoAction = function () {
	this._executeAll(this.undoFunctions)
};
PwylCommand.prototype._executeAll = function (functions) {
	for (var i = 0; i < functions.length; i++) {
		if ((this.args.length - 1) < i) {
			this.args[i] = []
		}
		var vars = functions[i].split(".");
		window[vars[0]][vars[1]][vars[2]](this, this.args[i])
	}
};
PwylCommand.prototype.setDoFunction = function () {
	for (var i = 0; i < arguments.length; i++) {
		this.doFunctions.push(arguments[i])
	}
};
PwylCommand.prototype.setUndoFunction = function () {
	for (var i = 0; i < arguments.length; i++) {
		this.undoFunctions.push(arguments[i])
	}
};
PwylCommand.prototype.stashSelectedElements = function () {
	ppw.editor.fixTop();
	var elems = ppw.util.clearSelectedElements();
	for (var i = 0; i < elems.length; i++) {
		this.selectedElementPaths[i] = ppw.paths.getPath(elems[i])
	}
};
PwylCommand.prototype.executeOnSelectedElements = function (functionCallback) {
	for (var i = 0; i < this.selectedElementPaths.length; i++) {
		var elem = ppw.paths.getElem(this.selectedElementPaths[i]);
		if (elem) {
			functionCallback(elem)
		}
	}
};
PwylCommand.prototype.serialize = function () {
	return YAHOO.lang.JSON.stringify(this)
};
PwylCommand.deserialize = function (str) {
	var command = new PwylCommand();
	try {
		var obj = YAHOO.lang.JSON.parse(str);
		YAHOO.lang.augmentObject(command, obj, true)
	}
	catch (e) {
		if (window.console) {
			console.log("error deserializing: " + e)
		}
	}
	return command
};

function PwylMultiCommand() {
	this.name = "";
	this.commands = [];
	this.undoable = true;
	this.addPage = false;
	this.afterDoAction = null;
	this.afterUndoAction = null
}
PwylMultiCommand.prototype.doAction = function () {
	ppw.changeset.executeCommandsSet(this.commands, this.afterDoAction, this.addPage)
};
PwylMultiCommand.prototype.undoAction = function () {
	for (var i = this.commands.length - 1; i >= 0; i--) {
		this.commands[i].undoAction()
	}
	if (this.afterUndoAction) {
		this.afterUndoAction()
	}
};
PwylMultiCommand.prototype.setCommand = function (cmd, selectedElems) {
	this.commands.push(cmd)
};

function PwylCommands() {}
PwylCommands.prototype._doChangeProperty = function (command, args) {
	element = ppw.paths.getElem(args.element_id);
	if (args.includeSubelements) {
		ppw.util.depthFirstRecursion(element, function (elem) {
			for (var i = 0; i < args.properties.length; i++) {
				ppw.util.applyProperty(elem, args.properties[i].name, args.properties[i].value, false, true)
			}
		}, [], true)
	}
	else {
		for (var i = 0; i < args.properties.length; i++) {
			ppw.util.applyProperty(element, args.properties[i].name, args.properties[i].value, false, true)
		}
	}
};
PwylCommands.prototype._undoChangeProperty = function (command, args) {
	element = ppw.paths.getElem(args.element_id);
	if (args.includeSubelements) {
		ppw.util.depthFirstRecursion(element, function (elem) {
			for (var i = 0; i < args.properties.length; i++) {
				ppw.util.undoApplyProperty(elem, args.properties[i].name)
			}
		}, [], true)
	}
	else {
		for (var i = 0; i < args.properties.length; i++) {
			ppw.util.undoApplyProperty(element, args.properties[i].name)
		}
	}
};
PwylCommands.prototype.changeProperty = function (element, name, value, includeSubelements, command) {
	ppw.commands.changeMultipleProperties(element, [{
		name: name,
		value: value
	}], includeSubelements, command)
};
PwylCommands.prototype.changeMultipleProperties = function (element, properties, includeSubelements, command) {
	element_id = ppw.paths.getPath(element);
	command.args.push({
		element_id: element_id,
		properties: properties,
		includeSubelements: includeSubelements
	});
	command.setDoFunction("ppw.commands._doChangeProperty");
	command.setUndoFunction("ppw.commands._undoChangeProperty")
};
PwylCommands.prototype._doChangePropertyOnSelectedElements = function (command, args) {
	command.executeOnSelectedElements(function (elem) {
		ppw.util.applyProperty(elem, args.propertyName, args.value)
	})
};
PwylCommands.prototype._undoChangePropertyOnSelectedElements = function (command, args) {
	command.executeOnSelectedElements(function (elem) {
		ppw.util.undoApplyProperty(elem, args.propertyName)
	})
};
PwylCommands.prototype.changePropertyOnSelectedElements = function (propertyName, value, command) {
	if (value) {
		value = value.replace(/'/g, "\\'")
	}
	command.args.push({
		propertyName: propertyName,
		value: value
	});
	command.setDoFunction("ppw.commands._doChangePropertyOnSelectedElements");
	command.setUndoFunction("ppw.commands._undoChangePropertyOnSelectedElements")
};
PwylCommands.prototype._doChangePropertyOnTags = function (command, args) {
	ppw.util.executeOnAllElementsOfTag(args.tags, function (elem) {
		ppw.util.applyProperty(elem, args.propertyName, args.value)
	})
};
PwylCommands.prototype._undoChangePropertyOnTags = function (command, args) {
	ppw.util.executeOnAllElementsOfTag(args.tags, function (elem) {
		ppw.util.undoApplyProperty(elem, args.propertyName)
	})
};
PwylCommands.prototype.changePropertyOnTags = function (tags, propertyName, value, command) {
	if (value) {
		value = value.replace(/'/g, "\\'")
	}
	command.args.push({
		tags: tags,
		propertyName: propertyName,
		value: value
	});
	command.setDoFunction("ppw.commands._doChangePropertyOnTags");
	command.setUndoFunction("ppw.commands._undoChangePropertyOnTags")
};
PwylCommands.prototype.changeFontSize = function (amount) {
	var command = new PwylCommand();
	command.name = (amount > 0 ? "Increase" : "Decrease") + " Font Size";
	command.args.push({
		amount: amount
	});
	command.setDoFunction("ppw.commands._doChangeFontSize");
	command.setUndoFunction("ppw.commands._undoChangeFontSize");
	ppw.changeset.doAction(command)
};
PwylCommands.prototype._doChangeFontSize = function (currCommand, args) {
	ppw.util.depthFirstRecursion(ppw.util.top, function (elem) {
		var newFontSize = ppw.commands.incrementFontSize(YAHOO.util.Dom.getStyle(elem, "fontSize"), args.amount);
		ppw.util.applyProperty(elem, "fontSize", newFontSize, false, true)
	}, [], true)
};
PwylCommands.prototype._undoChangeFontSize = function (currCommand, args) {
	ppw.util.getElementAndSubelements(ppw.util.top).each(function (elem) {
		ppw.util.undoApplyProperty(elem, "fontSize")
	})
};
PwylCommands.prototype.incrementFontSize = function (fontSize, fontChange) {
	var size = 12;
	var units = "px";
	var results = /^(\d*)([a-z]*)$/i.exec(fontSize);
	if (results && results.length >= 2) {
		size = parseInt(results[1])
	}
	if (results && results.length >= 3) {
		units = results[2]
	}
	return (size + fontChange) + units
};
PwylCommands.prototype.changeFontType = function () {
	var select = document.getElementById("ppw_select_font_dropdown");
	var fontType = select.options[select.selectedIndex].value;
	if (fontType) {
		fontType = fontType.replace(/'/g, "\\'")
	}
	if (fontType == "Spranq eco sans" && !ppw.editor.hasEcoFontInstalled()) {
		ppw.ui.ecofontHelpPanel.toggle();
		return
	}
	var command = new PwylCommand();
	command.name = "Change Font Type to " + fontType;
	ppw.commands.changeProperty(ppw.util.pageTop, "fontFamily", fontType, true, command);
	ppw.changeset.doAction(command)
};
PwylCommands.prototype._doRemoveBackground = function () {
	YAHOO.util.Dom.addClass(ppw.util.top, "ppw_clear_bg");
	YAHOO.util.Dom.addClass(document.body, "ppw_remove_bg");
	YAHOO.util.Dom.addClass(document.getElementsByTagName("html")[0], "ppw_remove_bg");
	if (!ppw.print_button) {
		ppw.ui.disableRemoveBackground()
	}
};
PwylCommands.prototype._undoRemoveBackground = function () {
	YAHOO.util.Dom.removeClass(document.getElementsByTagName("html")[0], "ppw_remove_bg");
	YAHOO.util.Dom.removeClass(document.body, "ppw_remove_bg");
	YAHOO.util.Dom.removeClass(ppw.util.top, "ppw_clear_bg");
	if (!ppw.print_button) {
		ppw.ui.enableRemoveBackground()
	}
};
PwylCommands.prototype.removeBackground = function () {
	var command = new PwylCommand();
	command.name = "Remove Background";
	command.setDoFunction("ppw.commands._doRemoveBackground");
	command.setUndoFunction("ppw.commands._undoRemoveBackground");
	ppw.changeset.doAction(command)
};
PwylCommands.prototype._doRemoveImages = function () {
	YAHOO.util.Dom.addClass(ppw.util.top, "ppw_remove_images");
	YAHOO.util.Dom.addClass(document.body, "ppw_remove_images_body");
	if (!ppw.print_button) {
		ppw.ui.disableRemoveImages()
	}
};
PwylCommands.prototype._undoRemoveImages = function () {
	YAHOO.util.Dom.removeClass(ppw.util.top, "ppw_remove_images");
	YAHOO.util.Dom.removeClass(document.body, "ppw_remove_images_body");
	if (!ppw.print_button) {
		ppw.ui.enableRemoveImages()
	}
};
PwylCommands.prototype.removeImages = function () {
	var command = new PwylCommand();
	command.name = "Remove Images";
	command.setDoFunction("ppw.commands._doRemoveImages");
	command.setUndoFunction("ppw.commands._undoRemoveImages");
	ppw.changeset.doAction(command)
};
PwylCommands.prototype._doRemoveMargin = function () {
	YAHOO.util.Dom.addClass(ppw.util.top, "ppw_remove_margin");
	ppw.ui.toggleButtons("ppw_margins_hide", "ppw_margins_show")
};
PwylCommands.prototype._undoRemoveMargin = function () {
	YAHOO.util.Dom.removeClass(ppw.util.top, "ppw_remove_margin");
	ppw.ui.toggleButtons("ppw_margins_show", "ppw_margins_hide")
};
PwylCommands.prototype.removeMargin = function () {
	var command = new PwylCommand();
	command.name = "Remove Margin";
	command.setDoFunction("ppw.commands._doRemoveMargin");
	command.setUndoFunction("ppw.commands._undoRemoveMargin");
	ppw.changeset.doAction(command)
};
PwylCommands.prototype.showStyle = function (styleId) {
	var command, i, styleCmd;
	switch (styleId) {
	case 1:
		styleCmd = "Remove Background";
		break;
	case 2:
		styleCmd = "Remove Images";
		break;
	case 3:
		styleCmd = "Remove Margin";
		break
	}
	for (i = 0; i < ppw.changeset.doStack.length; i++) {
		command = ppw.changeset.doStack[i];
		if (command.name == styleCmd) {
			ppw.changeset.undo(i, true);
			return
		}
	}
};
PwylCommands.prototype.remove = function () {
	var command = new PwylCommand();
	command.name = "Remove Selection";
	command.stashSelectedElements();
	ppw.commands.changePropertyOnSelectedElements("display", "none", command);
	ppw.changeset.doAction(command)
};
PwylCommands.prototype._doIsolate = function (currCommand, args) {
	args.isolatedElems = [];
	currCommand.executeOnSelectedElements(function (currElem) {
		args.isolatedElems.push(currElem)
	});
	ppw.commands.isolateElems(args.isolatedElems)
};
PwylCommands.prototype.isolateElems = function (elems) {
	if (ppw.commands._containsPageTop(elems)) {
		return
	}
	for (var i = 0; i < elems.length; i++) {
		var currElem = elems[i];
		if (!currElem.parentNode) {
			continue
		}
		var currElemBgColor = ppw.util.getBackgroundColor(currElem);
		var currElemStyleRules = ppw.cssutil.getStyleAttributes(currElem);
		var origParent = currElem.parentNode;
		var origPos = ppw.util.toArray(currElem.parentNode.childNodes).indexOf(currElem);
		currElem = currElem.parentNode.removeChild(currElem);
		var modifiedCurrElem = ppw.commands.cleanElement(currElem);
		modifiedCurrElem.origElem = currElem;
		modifiedCurrElem.origParent = origParent;
		modifiedCurrElem.origPos = origPos;
		ppw.cssutil.applyStyleAttributesToElement(modifiedCurrElem, currElemStyleRules);
		ppw.cssutil.removePositionProperties(modifiedCurrElem);
		ppw.util.applyProperty(modifiedCurrElem, "backgroundColor", currElemBgColor);
		elems[i] = modifiedCurrElem
	}
	ppw.util.toArray(ppw.util.pageTop.childNodes).each(function (child) {
		ppw.util.makeInvisible(child)
	});
	elems.each(function (elem) {
		var base = ppw.paths.getBase(elem.origParent);
		var div = document.createElement("div");
		div.id = "ppw_isolate_" + ppw.paths.countIsolatedElems(base);
		div.className = "ppw_isolate";
		base.appendChild(div);
		div.appendChild(elem)
	});
	window.scroll(0, 0)
};
PwylCommands.prototype._undoIsolate = function (currCommand, args) {
	ppw.commands.unIsolateElems(args.isolatedElems)
};
PwylCommands.prototype.unIsolateElems = function (elems) {
	if (ppw.commands._containsPageTop(elems)) {
		return
	}
	for (var i = elems.length; i > 0; i--) {
		var currElem = elems[i - 1];
		if (!currElem.parentNode) {
			continue
		}
		currElem.parentNode.parentNode.removeChild(currElem.parentNode);
		ppw.cssutil.undoRemovePositionProperties(currElem);
		ppw.util.undoApplyProperty(currElem, "backgroundColor");
		if (currElem.origParent.childNodes.length == 0 || currElem.origPos >= currElem.origParent.childNodes.length) {
			currElem.origParent.appendChild(currElem.origElem)
		}
		else {
			var followingElem = currElem.origParent.childNodes[currElem.origPos];
			currElem.origParent.insertBefore(currElem.origElem, followingElem)
		}
	}
	ppw.util.toArray(ppw.util.pageTop.childNodes).each(function (child) {
		ppw.util.makeVisible(child)
	})
};
PwylCommands.prototype.cleanElement = function (elem) {
	var tagName = elem.tagName.toLowerCase();
	if (tagName == "tr" || tagName == "tfoot" || tagName == "thead") {
		var table = document.createElement("table");
		var tbody = document.createElement("tbody");
		table.appendChild(tbody);
		tbody.appendChild(elem);
		return table
	}
	if (tagName == "td" || tagName == "th") {
		var table = document.createElement("table");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		table.appendChild(tbody);
		tbody.appendChild(tr);
		tr.appendChild(elem);
		return table
	}
	return elem
};
PwylCommands.prototype._containsPageTop = function (elems) {
	for (var i = 0; i < elems.length; i++) {
		if (elems[i] == ppw.util.pageTop) {
			return true
		}
	}
	return false
};
PwylCommands.prototype.isolate = function () {
	if (ppw.editor.selectedElems <= 0) {
		ppw.init.afterDo();
		return false
	}
	var command = new PwylCommand();
	command.name = "Isolate";
	ppw.editor.selectedElems = ppw.util.orderPageElements(ppw.editor.selectedElems);
	command.stashSelectedElements();
	command.setDoFunction("ppw.commands._doIsolate");
	command.setUndoFunction("ppw.commands._undoIsolate");
	ppw.changeset.doAction(command)
};
PwylCommands.prototype._doWiden = function (command, args) {
	command.executeOnSelectedElements(function (elem) {
		ppw.util.applyToElementAndParents(elem, function (elem2) {
			ppw.util.applyProperty(elem2, "width", "100%");
			if (elem2.getAttribute("width")) {
				ppw.util.applyProperty(elem2, "width", "100%", true)
			}
			var ml = YAHOO.util.Dom.getStyle(elem2, "marginLeft"),
				mr = YAHOO.util.Dom.getStyle(elem2, "marginRight"),
				pl = YAHOO.util.Dom.getStyle(elem2, "paddingLeft"),
				pr = YAHOO.util.Dom.getStyle(elem2, "paddingRight");
			if (ml != "auto" && !ml.startsWith("0")) {
				ppw.util.applyProperty(elem2, "marginLeft", "0")
			}
			if (mr != "auto" && !mr.startsWith("0")) {
				ppw.util.applyProperty(elem2, "marginRight", "0")
			}
			if (pl != "auto" && !pl.startsWith("0")) {
				ppw.util.applyProperty(elem2, "paddingLeft", "0")
			}
			if (pr != "auto" && !pr.startsWith("0")) {
				ppw.util.applyProperty(elem2, "paddingRight", "0")
			}
			if (YAHOO.util.Dom.getStyle(elem2, "left") != "auto") {
				ppw.util.applyProperty(elem2, "left", "0", false, true)
			}
		})
	})
};
PwylCommands.prototype._undoWiden = function (command, args) {
	command.executeOnSelectedElements(function (elem) {
		ppw.util.applyToElementAndParents(elem, function (elem2) {
			ppw.util.undoApplyProperty(elem2, "width");
			ppw.util.undoApplyProperty(elem2, "width", true);
			ppw.util.undoApplyProperty(elem2, "marginLeft");
			ppw.util.undoApplyProperty(elem2, "marginRight");
			ppw.util.undoApplyProperty(elem2, "paddingLeft");
			ppw.util.undoApplyProperty(elem2, "paddingRight");
			ppw.util.undoApplyProperty(elem2, "left")
		})
	})
};
PwylCommands.prototype.widen = function () {
	var command = new PwylCommand();
	command.name = "Widen";
	command.stashSelectedElements();
	command.setDoFunction("ppw.commands._doWiden");
	command.setUndoFunction("ppw.commands._undoWiden");
	ppw.changeset.doAction(command)
};
PwylCommands.prototype.insideSelectedAreas = function (x, y, command) {
	command.executeOnSelectedElements(function (curr) {
		var pos = YAHOO.util.Dom.getXY(curr);
		if ((pos[0] - 15) <= x && x <= (pos[0] + curr.offsetWidth + 15) && (pos[1] - 15) <= y && y <= (pos[1] + curr.offsetHeight + 15)) {
			return true
		}
	});
	return false
};
PwylCommands.prototype.startResizeMode = function () {
	if (ppw.editor.selectedElems <= 0) {
		ppw.init.afterDo();
		return false
	}
	var command = new PwylCommand();
	command.name = "Resize";
	command.stashSelectedElements();
	var resizeObjs = [];
	var lightbox = document.getElementById("ppw_lightbox");
	command.executeOnSelectedElements(function (curr) {
		ppw.util.saveCurrentValueOfProperty(curr, "width");
		ppw.util.saveCurrentValueOfProperty(curr, "height");
		ppw.util.applyProperty(curr, "backgroundColor", ppw.util.getBackgroundColor(curr));
		ppw.util.applyProperty(curr, "zIndex", "11000");
		resizeObjs.push(new YAHOO.util.Resize(curr, {
			handles: "all",
			knobHandles: true
		}))
	});
	lightbox.style.left = "210px";
	lightbox.style.width = (ppw.util.top.offsetWidth + 2) + "px";
	lightbox.style.height = YAHOO.util.Dom.getDocumentHeight() + "px";
	lightbox.style.display = "block";
	ppw.editor.unInitializeHandlers(true);
	lightbox.onclick = function (event) {
		event = ppw.util.captureEvent(event);
		ppw.util.noBubble(event);
		var m = ppw.editor.getMousePosition(event);
		if (!ppw.commands.insideSelectedAreas(m.x, m.y, command)) {
			ppw.commands.endResizeMode(command, resizeObjs)
		}
		return false
	};
	return false
};
PwylCommands.prototype.endResizeMode = function (command, resizeObjs) {
	for (var i = 0; i < resizeObjs.length; i++) {
		resizeObjs[i].destroy()
	}
	ppw.commands.resize(command);
	command.executeOnSelectedElements(function (curr) {
		ppw.util.undoApplyProperty(curr, "backgroundColor");
		ppw.util.undoApplyProperty(curr, "zIndex")
	});
	document.getElementById("ppw_lightbox").style.display = "none";
	ppw.editor.initializeHandlers()
};
PwylCommands.prototype.resize = function (command) {
	command.executeOnSelectedElements(function (curr) {
		var resizedWidth = curr.style.width;
		var resizedHeight = curr.style.height;
		ppw.editor.fixTop();
		var resizedWidthAmt = parseFloat(resizedWidth.replace("px", ""));
		var resizedHeightAmt = parseFloat(resizedHeight.replace("px", ""));
		ppw.util.undoApplyProperty(curr, "width");
		ppw.util.undoApplyProperty(curr, "height");
		var origWidth = curr.offsetWidth;
		var origHeight = curr.offsetHeight;
		var widthPercent = 1;
		var heightPercent = 1;
		if (origWidth > 0) {
			widthPercent = resizedWidthAmt / origWidth
		}
		if (origHeight > 0) {
			heightPercent = resizedHeightAmt / origHeight
		}
		var element_id = ppw.paths.getPath(curr);
		command.args.push({
			element_id: element_id,
			widthPercent: widthPercent,
			heightPercent: heightPercent
		});
		command.setDoFunction("ppw.commands._doResizeElement");
		command.setUndoFunction("ppw.commands._undoResizeElement")
	});
	ppw.changeset.doAction(command)
};
PwylCommands.prototype._doResizeElement = function (command, args) {
	var element = ppw.paths.getElem(args.element_id);
	var newWidth = args.widthPercent * element.offsetWidth + "px";
	var newHeight = args.heightPercent * element.offsetHeight + "px";
	ppw.util.applyProperty(element, "width", newWidth, false, true);
	ppw.util.applyProperty(element, "height", newHeight, false, true)
};
PwylCommands.prototype._undoResizeElement = function (command, args) {
	var element = ppw.paths.getElem(args.element_id);
	ppw.util.undoApplyProperty(element, "width");
	ppw.util.undoApplyProperty(element, "height")
};
PwylCommands.prototype.auto = function () {
	var command = new PwylCommand();
	command.name = "Auto Format";
	command.setDoFunction("ppw.auto.scrub");
	command.setUndoFunction("ppw.auto.unscrub");
	ppw.changeset.doAction(command)
};
PwylCommands.prototype.addPage = function (newPageUrl) {
	var applyChangesCheckbox = document.getElementById("ppw_add_page_apply_changes_checkbox");
	var applyChanges = (applyChangesCheckbox.checked && newPageUrl && (ppw.server.pageUrl.host == new ppw.server.URLManager(newPageUrl).host));
	var command = new PwylCommand();
	command.name = "Add Page";
	command.args.push({
		url: newPageUrl,
		id: ppw.paths.getNewPageId(),
		applyChanges: applyChanges,
		origHeight: ppw.ui.orig_doc_height
	});
	command.setDoFunction("ppw.commands._doAddPage");
	command.setUndoFunction("ppw.commands._undoAddPage");
	ppw.changeset.doAction(command)
};
PwylCommands.prototype._doAddPage = function (command, args) {
	ppw.ui.before_add_page_height = YAHOO.util.Dom.getDocumentHeight();
	var requestedUrl;
	try {
		requestedUrl = new ppw.server.URLManager(args.url)
	}
	catch (e) {
		alert("hmmmm. " + url + " does not seem to be a valid url. Are you sure you entered it correctly?");
		return
	}
	if (ppw.bookmarklet) {
		if (ppw.server.url.host == requestedUrl.host) {
			ppw.loader.requestIFrame(requestedUrl.url, "ppw.commands._addPage", false, args.id, args.applyChanges)
		}
		else {
			ppw.loader.requestPageUsingJS(requestedUrl.url, ppw.commands._addPageJsBkmt, args.id, args.applyChanges)
		}
	}
	else {
		ppw.loader.requestIFrame(args.url, "ppw.commands._addPage", true, args.id, args.applyChanges)
	}
};
PwylCommands.prototype._addPage = function (ifr, pageBodyId, applyChanges) {
	var hr = document.createElement("hr");
	hr.id = pageBodyId + "_hr";
	hr.className = "ppw_page_divider";
	ppw.util.pageTop.appendChild(hr);
	var newPage = ppw.paths.getNewPage(pageBodyId);
	ppw.util.pageTop.appendChild(newPage);
	var customHeadAttributes = {
		addpage: pageBodyId
	};
	var copyOptions = {
		dontCopyJs: true,
		cloneElements: false,
		dontCopyPwylElements: false,
		applyTemplate: applyChanges,
		customHeadAttributes: customHeadAttributes,
		dontCopyIdAttribute: true
	};
	ppw.loader.copyPage(document.getElementsByTagName("head")[0], newPage, ifr.head, ifr.body, copyOptions);
	ppw.init.afterPageLoad();
	var nextPage = pgzp().buildPage(pgzp().doc.body, ifr.destUrl);
	pgzp().pages.push(nextPage);
	nextPage.nextLink = pgzp().getNextLink(nextPage.page);
	var new_page_height = YAHOO.util.Dom.getDocumentHeight();
	var add_page_height = new_page_height - ppw.ui.before_add_page_height;
	ppw.ui.orig_doc_height += (new_page_height - ppw.ui.before_add_page_height);
	ppw.changeset.resumeExecutingCommandSetIfRequired()
};
PwylCommands.prototype._addPageJsBkmt = function (src, args) {
	var ifr = ppw.loader.requestInPageIFrame(src);
	ppw.commands._addPage(ifr, args.pageBodyId, args.applyChanges)
};
PwylCommands.prototype._undoAddPage = function (command, args) {
	ppw.util.removeElement(args.id + "_hr");
	var addPageBody = document.getElementById(args.id);
	addPageBody.parentNode.removeChild(addPageBody);
	var head = document.getElementsByTagName("head")[0];
	var elementsToRemove = [];
	for (var i = 0; i < head.childNodes.length; i++) {
		var node = head.childNodes[i];
		if (node.nodeType == Node.ELEMENT_NODE) {
			var addPageId = node.getAttribute("addpage");
			if (addPageId && addPageId == args.id) {
				elementsToRemove.push(node)
			}
		}
	}
	for (var i = 0; i < elementsToRemove.length; i++) {
		var el = elementsToRemove[i];
		el.parentNode.removeChild(el)
	}
	ppw.ui.orig_doc_height = args.origHeight
};
PwylCommands.prototype.addNextPage = function () {
	var currPage = pgzp().pages.length - 1;
	var newPageUrl = pgzp().pages[currPage].nextLink.url;
	pgzp().url_list.push(newPageUrl);
	var command = new PwylCommand();
	command.name = "Add Next Page";
	command.args.push({
		url: newPageUrl,
		id: ppw.paths.getNewPageId(),
		applyChanges: true,
		origHeight: ppw.ui.orig_doc_height
	});
	command.setDoFunction("ppw.commands._doAddNextPage");
	command.setUndoFunction("ppw.commands._undoAddNextPage");
	ppw.changeset.doAction(command)
};
PwylCommands.prototype._doAddNextPage = function (command, args) {
	ppw.commands._doAddPage(command, args)
};
PwylCommands.prototype._undoAddNextPage = function (command, args) {
	pgzp().pages.pop();
	pgzp().url_list.pop();
	ppw.commands._undoAddPage(command, args)
};
PwylCommands.prototype.applySelectedChangeSet = function () {
	var changeSetDropdown = document.getElementById("ppw_select_change_set_dropdown");
	var changeSetId = changeSetDropdown.options[changeSetDropdown.selectedIndex].value;
	if (changeSetId == "Apply Change Set") {
		ppw.init.afterDo()
	}
	else {
		ppw.acs.applyChangeSet(changeSetId)
	}
};
PwylCommands.prototype.saveClip = function () {
	var totalClipsSaved = ppw.props.clipsSaved + ppw.editor.selectedElems.length;
	if (ppw.props.enforceQuotas) {
		ppw.props.clipsSaved = totalClipsSaved
	}
	var params = {
		user_id: ppw.props.proAccountId,
		name: document.title.replace("PrintWhatYouLike on ", ""),
		url: ppw.props.pageUrl,
		num_clips: ppw.editor.selectedElems.length
	};
	for (var i = 0; i < ppw.editor.selectedElems.length; i++) {
		params["html" + i] = ppw.util.getHtmlClip(ppw.editor.selectedElems[i])
	}
	var onComplete = function (response) {
		var msg = ppw.editor.selectedElems.length + " clip" + (ppw.editor.selectedElems.length > 1 ? "s" : "") + " saved";
		ppw.ui.setSelfDestructingInfoMessage(msg)
	};
	ppw.server.ajaxCall("clips", params, onComplete, "post", {
		forceMultipart: true
	})
};

function PwylCssUtil() {
	this.defaultBrowserCssRules;
	this.defaultElements = {};
	this.dontCopyTheseStyles = ["length", "cursor", "position", "top", "bottom", "left", "right", "outline", "outlineWidth"];
	this.dimensionStyles = ["height", "width"];
	this.positionStyles = ["marginTop", "marginRight", "marginBottom", "marginLeft", "overflow"];
	this.defaultIfr = null;
	this.removedCssRules = []
}
PwylCssUtil.prototype.copyStyleAttributes = function (dest, src, includeBrowserDefaults, includeDimensions, includePositions) {
	var styles = ppw.cssutil.getStyleAttributes(src, includeBrowserDefaults, includeDimensions, includePositions);
	ppw.cssutil.applyStyleAttributesToElement(dest, styles)
};
PwylCssUtil.prototype.applyStyleAttributesToElement = function (dest, styles) {
	var key, val;
	for (key in styles) {
		val = styles[key];
		if (typeof (val) == "number") {
			val = val + ""
		}
		if (val && typeof (val) == "string") {
			if (val.charAt(0) == '"' || val.charAt(0) == "'") {
				val = val.replace(/^["'](.*?)["']$/g, "$1")
			}
			YAHOO.util.Dom.setStyle(dest, key, val)
		}
	}
};
PwylCssUtil.prototype.getStyleAttributes = function (src, includeBrowserDefaults, includeDimensions, includePositions) {
	var dest = {},
		cs;
	if (document.defaultView) {
		cs = document.defaultView.getComputedStyle(src, null);
		ppw.cssutil._copyStylesFromCSSStyleDeclaration(cs, dest)
	}
	if (src.currentStyle) {
		ppw.cssutil._copyStylesFromCSSCurrentStyleDeclaration(src.currentStyle, dest)
	}
	ppw.cssutil._removeBadProps(dest, src, includeBrowserDefaults, includeDimensions, includePositions);
	if (dest.direction != undefined) {
		dest.unicodeBidi = "embed"
	}
	return dest
};
PwylCssUtil.prototype._copyStylesFromCSSStyleDeclaration = function (styleList, dest) {
	if (!styleList) {
		return
	}
	var i = 0,
		key, val;
	while (i < styleList.length) {
		try {
			key = styleList.item(i);
			val = styleList.getPropertyValue(key);
			if (val && (typeof (val) == "string" || typeof (val) == "number")) {
				dest[key] = val
			}
		}
		catch (ex) {}
		i++
	}
};
PwylCssUtil.prototype._copyStylesFromCSSCurrentStyleDeclaration = function (styleList, dest) {
	if (!styleList) {
		return
	}
	var i = 0,
		key, val;
	for (key in styleList) {
		try {
			val = styleList[key];
			if (val && (typeof (val) == "string" || typeof (val) == "number")) {
				dest[key] = val
			}
		}
		catch (ex) {}
	}
};
PwylCssUtil.prototype._removeBadProps = function (dest, src, includeBrowserDefaults, includeDimensions, includePositions) {
	var removeValues = function (ar) {
		for (var i = 0; i < ar.length; i++) {
			var key = ar[i];
			if (key in dest) {
				delete dest[key]
			}
		}
	};
	removeValues(ppw.cssutil.dontCopyTheseStyles);
	if (!includeDimensions) {
		removeValues(ppw.cssutil.dimensionStyles)
	}
	if (!includePositions) {
		removeValues(ppw.cssutil.positionStyles)
	}
	if (!includeBrowserDefaults) {
		try {
			for (var j in dest) {
				if (ppw.cssutil.isDefaultBrowserValue(src, j, dest[j])) {
					delete dest[j]
				}
			}
		}
		catch (ex) {}
	}
};
PwylCssUtil.prototype._isCopyProp = function (key) {
	return ppw.cssutil.dontCopyTheseStyles[key] != 1
};
PwylCssUtil.prototype.isDefaultBrowserValue = function (elem, cssName, cssValue) {
	if (typeof (cssValue) != "string" && typeof (cssValue) != "number") {
		return false
	}
	if (!ppw.cssutil.defaultIfr) {
		ppw.cssutil.defaultIfr = ppw.loader.requestBlankInPageIFrame(ppw.util.toolbar)
	}
	var defaultDoc = ppw.cssutil.defaultIfr.doc;
	var currDefault = ppw.cssutil.defaultElements[elem.tagName];
	if (!currDefault) {
		var tmpElem = defaultDoc.createElement(elem.tagName);
		try {
			tmpElem.appendChild(defaultDoc.createTextNode("hi!"))
		}
		catch (ex) {}
		defaultDoc.body.appendChild(tmpElem);
		ppw.cssutil.defaultElements[elem.tagName] = tmpElem;
		currDefault = tmpElem
	}
	var defaultValue = YAHOO.util.Dom.getStyle(currDefault, cssName);
	return ppw.cssutil._isUndefined(defaultValue) || defaultValue == cssValue
};
PwylCssUtil.prototype._isUndefined = function (value) {
	return (value + "") == "undefined"
};
PwylCssUtil.prototype.positionProperties = {
	position: "static",
	top: "0px",
	bottom: "0px",
	left: "0px",
	right: "0px",
	marginLeft: "0px",
	marginRight: "0px",
	marginTop: "0px",
	marginBottom: "0px",
	overflow: "visible"
};
PwylCssUtil.prototype.removePositionProperties = function (elem) {
	var value, i, good_value;
	try {
		for (i in ppw.cssutil.positionProperties) {
			value = YAHOO.util.Dom.getStyle(elem, i);
			good_value = ppw.cssutil.positionProperties[i];
			if (value && value != good_value && !ppw.cssutil.isDefaultBrowserValue(elem, i, value)) {
				ppw.util.applyProperty(elem, i, good_value, false, true)
			}
		}
	}
	catch (ex) {}
};
PwylCssUtil.prototype.undoRemovePositionProperties = function (elem) {
	for (var i in ppw.cssutil.positionProperties) {
		ppw.util.undoApplyProperty(elem, i)
	}
};
PwylCssUtil.prototype.removeCssHoverRules = function () {
	var i, currStyleSheet, currRules, j, cssOwner;
	var isHoverRule = function (selector) {
		var results;
		if (selector.search(/\:hover/i) > -1) {
			results = selector.match(/,/g);
			var numSelectors = (results ? results.length : 0) + 1;
			results = selector.match(/\:/g);
			var numPseudoClasses = results ? results.length : 0;
			if (numSelectors == numPseudoClasses) {
				return true
			}
		}
		return false
	};
	for (i = 0; i < document.styleSheets.length; i++) {
		try {
			currStyleSheet = document.styleSheets[i];
			cssOwner = currStyleSheet.ownerNode ? currStyleSheet.ownerNode : currStyleSheet.owningElement;
			if (!cssOwner.getAttribute("pwyl") && (!currStyleSheet.href || !currStyleSheet.href.startsWith("http") || ppw.server.pageUrl.hostName == new ppw.server.URLManager(currStyleSheet.href).hostName) && (!cssOwner.media || cssOwner.media.toLowerCase() == "screen" || cssOwner.media.toLowerCase() == "all")) {
				currRules = currStyleSheet.cssRules ? currStyleSheet.cssRules : currStyleSheet.rules;
				for (j = 0; j < currRules.length; j++) {
					if (isHoverRule(currRules[j].selectorText)) {
						if (currStyleSheet.deleteRule) {
							ppw.cssutil.removedCssRules.push({
								cssIndex: i,
								index: j,
								cssText: currRules[j].cssText
							});
							currStyleSheet.deleteRule(j)
						}
						else {
							var cssText = currRules[j].style.cssText ? currRules[j].style.cssText : "";
							ppw.cssutil.removedCssRules.push({
								cssIndex: i,
								selector: currRules[j].selectorText,
								style: cssText
							});
							currStyleSheet.removeRule(j)
						}
					}
				}
			}
		}
		catch (ex) {}
	}
};
PwylCssUtil.prototype.restoreCssHoverRules = function () {
	var currRule, currCss;
	while (ppw.cssutil.removedCssRules.length > 0) {
		currRule = ppw.cssutil.removedCssRules.pop();
		currCss = document.styleSheets[currRule.cssIndex];
		try {
			if (currCss.insertRule) {
				currCss.insertRule(currRule.cssText, currRule.index)
			}
			else {
				if (currRule.selector && currRule.style) {
					currCss.addRule(currRule.selector, currRule.style)
				}
			}
		}
		catch (ex) {}
	}
};

function PwylDragSelect() {
	this.mouseDown = false;
	this.isStartOfDrag = true;
	this.startCoords = {
		x: 0,
		y: 0
	};
	this.moveCoords = {
		x: 0,
		y: 0
	};
	this.selectBox;
	this.isProcessing = false
}
PwylDragSelect.prototype.initializeDragSelect = function () {
	if (document.body.attachEvent) {
		ppw.util.top.attachEvent("onmousedown", ppw.drag.onMouseDown);
		document.body.attachEvent("onmouseup", ppw.drag.onMouseUp)
	}
	else {
		ppw.util.top.onmousedown = this.onMouseDown;
		document.onmouseup = this.onMouseUp
	}
	this.selectBox = document.getElementById("ppw_hover_border_drag");
	if (typeof ppw.util.top.onselectstart != "undefined") {
		ppw.util.top.onselectstart = function () {
			return false
		}
	}
	else {
		if (typeof ppw.util.top.style.MozUserSelect != "undefined") {
			ppw.util.top.style.MozUserSelect = "none"
		}
	}
};
PwylDragSelect.prototype.onMouseDown = function (event) {
	event = ppw.util.captureEvent(event);
	if (ppw.drag.isPointerButton(event)) {
		ppw.drag.mouseDown = true;
		ppw.drag.startCoords = ppw.editor.getMousePosition(event);
		if (document.body.attachEvent) {
			document.body.attachEvent("onmousemove", ppw.drag.onMouseMove)
		}
		else {
			document.onmousemove = ppw.drag.onMouseMove
		}
		return false
	}
};
PwylDragSelect.prototype.onMouseMove = function (event) {
	if (ppw.drag.mouseDown) {
		event = ppw.util.captureEvent(event);
		var currCoords = ppw.editor.getMousePosition(event);
		if (Math.abs(currCoords.x - ppw.drag.startCoords.x) > 5 || Math.abs(currCoords.y - ppw.drag.startCoords.y) > 5) {
			if (currCoords.x < 212) {
				currCoords.x = 212
			}
			if (currCoords.y < 0) {
				currCoords.y = 0
			}
			var rightEdge = Math.max(ppw.util.pageTop.offsetWidth, YAHOO.util.Dom.getViewportWidth());
			var bottomEdge = YAHOO.util.Dom.getViewportHeight() + ppw.editor.getScrollPosition().y - 4;
			if (currCoords.x > rightEdge) {
				currCoords.x = rightEdge - 4
			}
			if (currCoords.y > bottomEdge) {
				currCoords.y = bottomEdge - 4
			}
			if (ppw.drag.isStartOfDrag) {
				ppw.drag.isStartOfDrag = false;
				ppw.editor.clearHover(event);
				ppw.editor.hoverElementsActive = false;
				ppw.drag.selectBox.style.display = "block"
			}
			if (!ppw.drag.isProcessing && (Math.abs(currCoords.x - ppw.drag.moveCoords.x) > 10 || Math.abs(currCoords.y - ppw.drag.moveCoords.y) > 10)) {
				ppw.drag.moveCoords = currCoords;
				ppw.drag.isProcessing = true;
				setTimeout("ppw.drag.selectElementsInSelectionBox();", 0)
			}
			ppw.drag.checkForScrolling(currCoords, {
				x: event.clientX,
				y: event.clientY
			});
			ppw.util.moveElement(ppw.drag.selectBox, Math.min(ppw.drag.startCoords.x, currCoords.x), Math.min(ppw.drag.startCoords.y, currCoords.y));
			ppw.drag.selectBox.style.width = Math.abs(currCoords.x - ppw.drag.startCoords.x) + "px";
			ppw.drag.selectBox.style.height = Math.abs(currCoords.y - ppw.drag.startCoords.y) + "px";
			return false
		}
	}
};
PwylDragSelect.prototype.onMouseUp = function (event) {
	event = ppw.util.captureEvent(event);
	var currCoords = ppw.editor.getMousePosition(event);
	if (ppw.drag.mouseDown && ppw.drag.isPointerButton(event)) {
		ppw.drag.mouseDown = false;
		ppw.drag.isStartOfDrag = true;
		ppw.editor.hoverElementsActive = true;
		ppw.drag.scrollAmt = null;
		if (document.body.detachEvent) {
			document.body.detachEvent("onmousemove", ppw.drag.onMouseMove)
		}
		else {
			document.onmousemove = null
		}
		if (Math.abs(currCoords.x - ppw.drag.startCoords.x) > 5 || Math.abs(currCoords.y - ppw.drag.startCoords.y) > 5) {
			ppw.drag.selectBox.style.display = "none";
			ppw.drag.selectBox.style.width = 0;
			ppw.drag.selectBox.style.height = 0;
			for (var i = 0; i < ppw.editor.selectedElems.length; i++) {
				ppw.editor.selectedElems[i].isDragSelect = null
			}
			ppw.editor.disableSelecting = true;
			setTimeout("ppw.editor.disableSelecting=false", 100)
		}
	}
};
PwylDragSelect.prototype.selectElementsInSelectionBox = function () {
	var i, curr;
	var selectedElems = ppw.drag.getElementsInSelectionBox();
	for (i = 0; i < ppw.editor.selectedElems.length; i++) {
		curr = ppw.editor.selectedElems[i];
		if (curr.isDragSelect && !selectedElems.contains(curr)) {
			ppw.editor.unSelect(curr);
			curr.isDragSelect = null;
			i--
		}
	}
	for (i = 0; i < selectedElems.length; i++) {
		selectedElems[i].isDragSelect = true;
		if (!selectedElems[i].isSelected) {
			ppw.editor.select(selectedElems[i])
		}
	}
	ppw.drag.isProcessing = false
};
PwylDragSelect.prototype.getElementsInSelectionBox = function () {
	var selectedElems = [];
	var addIfSelected = function (currElem) {
		var currElemPos = YAHOO.util.Dom.getXY(currElem);
		if (currElem.offsetHeight != 0 && ppw.editor.outside(ppw.drag.selectBox, currElem, selectBoxPos, currElemPos)) {
			return false
		}
		if (ppw.drag.inSelectBox(currElem, currElemPos, selectBoxPos) && ppw.drag.isSelectable(currElem)) {
			selectedElems.push(currElem);
			return false
		}
		return true
	};
	var selectBoxPos = YAHOO.util.Dom.getXY(ppw.drag.selectBox);
	ppw.util.topDownDepthFirstRecursion(ppw.util.pageTop, addIfSelected, null, true);
	return selectedElems
};
PwylDragSelect.prototype.isSelectable = function (elem) {
	return elem.offsetWidth > 0 && elem.offsetHeight > 0
};
PwylDragSelect.prototype.hasCornerInSelectionBox = function (elem) {
	var posA = YAHOO.util.Dom.getXY(elem);
	var pos = {
		x: posA[0],
		y: posA[1]
	};
	var sbPosA = YAHOO.util.Dom.getXY(ppw.drag.selectBox);
	var sbPos = {
		x: sbPosA[0],
		y: sbPosA[1]
	};
	return ppw.drag.isPointInSelectionBox(pos, sbPos) || ppw.drag.isPointInSelectionBox({
		x: pos.x,
		y: (pos.y + elem.offsetHeight)
	}, sbPos) || ppw.drag.isPointInSelectionBox({
		x: (pos.x + elem.offsetWidth),
		y: pos.y
	}, sbPos) || ppw.drag.isPointInSelectionBox({
		x: (pos.x + elem.offsetWidth),
		y: (pos.y + elem.offsetHeight)
	}, sbPos)
};
PwylDragSelect.prototype.isPointInSelectionBox = function (pointPos, sbPos) {
	var leeway = 0;
	return (sbPos.x - leeway) <= pointPos.x && pointPos.x <= (sbPos.x + ppw.drag.selectBox.offsetWidth + leeway) && (sbPos.y - leeway) <= pointPos.y && pointPos.y <= (sbPos.y + ppw.drag.selectBox.offsetHeight + leeway)
};
PwylDragSelect.prototype.inSelectBox = function (currElem, currElemPos, selectBoxPos) {
	return ppw.editor.inside(currElem, ppw.drag.selectBox, currElemPos, selectBoxPos) || ppw.drag.hasEdgeCrossing(currElem, ppw.drag.selectBox, currElemPos, selectBoxPos)
};
PwylDragSelect.prototype.hasEdgeCrossing = function (currElem, selectBox, currElemPos, selectBoxPos) {
	var ceul = {
		x: currElemPos[0],
		y: currElemPos[1]
	};
	var ceur = {
		x: (currElemPos[0] + currElem.offsetWidth),
		y: currElemPos[1]
	};
	var cebl = {
		x: currElemPos[0],
		y: (currElemPos[1] + currElem.offsetHeight)
	};
	var cebr = {
		x: (currElemPos[0] + currElem.offsetWidth),
		y: (currElemPos[1] + currElem.offsetHeight)
	};
	var sbul = {
		x: selectBoxPos[0],
		y: selectBoxPos[1]
	};
	var sbur = {
		x: (selectBoxPos[0] + selectBox.offsetWidth),
		y: selectBoxPos[1]
	};
	var sbbl = {
		x: selectBoxPos[0],
		y: (selectBoxPos[1] + selectBox.offsetHeight)
	};
	var sbbr = {
		x: (selectBoxPos[0] + selectBox.offsetWidth),
		y: (selectBoxPos[1] + selectBox.offsetHeight)
	};
	var edgeCrossings = 0;
	if (ppw.drag.doEdgesCross([ceul, ceur], [sbul, sbbl])) {
		edgeCrossings++
	}
	if (ppw.drag.doEdgesCross([ceul, ceur], [sbur, sbbr])) {
		edgeCrossings++
	}
	if (ppw.drag.doEdgesCross([cebl, cebr], [sbul, sbbl])) {
		edgeCrossings++
	}
	if (ppw.drag.doEdgesCross([cebl, cebr], [sbur, sbbr])) {
		edgeCrossings++
	}
	if (ppw.drag.doEdgesCross([ceul, cebl], [sbul, sbur])) {
		edgeCrossings++
	}
	if (ppw.drag.doEdgesCross([ceul, cebl], [sbbl, sbbr])) {
		edgeCrossings++
	}
	if (ppw.drag.doEdgesCross([ceur, cebr], [sbul, sbur])) {
		edgeCrossings++
	}
	if (ppw.drag.doEdgesCross([ceur, cebr], [sbbl, sbbr])) {
		edgeCrossings++
	}
	return edgeCrossings >= 3
};
PwylDragSelect.prototype.doEdgesCross = function (a, b) {
	return ppw.drag.doEdgesCrossOneDimension([a[0].x, a[1].x], [b[0].x, b[1].x]) && ppw.drag.doEdgesCrossOneDimension([a[0].y, a[1].y], [b[0].y, b[1].y])
};
PwylDragSelect.prototype.doEdgesCrossOneDimension = function (a, b) {
	var longer, shorter;
	a = (a[0] <= a[1]) ? a : [a[1], a[0]];
	b = (b[0] <= b[1]) ? b : [b[1], b[0]];
	if ((a[1] - a[0]) >= (b[1] - b[0])) {
		longer = a, shorter = b
	}
	else {
		longer = b, shorter = a
	}
	return (longer[0] <= shorter[0] && shorter[0] <= longer[1]) || (longer[0] <= shorter[1] && shorter[1] <= longer[1])
};
PwylDragSelect.prototype.insideSelectionBox = function (elem) {
	var posA = YAHOO.util.Dom.getXY(elem);
	var pos = {
		x: posA[0],
		y: posA[1]
	};
	var sbPosA = YAHOO.util.Dom.getXY(ppw.drag.selectBox);
	var sbPos = {
		x: sbPosA[0],
		y: sbPosA[1]
	};
	return ppw.drag.isPointInSelectionBox(pos, sbPos) && ppw.drag.isPointInSelectionBox({
		x: pos.x,
		y: (pos.y + elem.offsetHeight)
	}, sbPos) && ppw.drag.isPointInSelectionBox({
		x: (pos.x + elem.offsetWidth),
		y: pos.y
	}, sbPos) && ppw.drag.isPointInSelectionBox({
		x: (pos.x + elem.offsetWidth),
		y: (pos.y + elem.offsetHeight)
	}, sbPos)
};
PwylDragSelect.prototype.checkForScrolling = function (currCoords, mouseCoords) {
	var scrollW = 0,
		scrollH = 0,
		scrollAmt = 10;
	if (mouseCoords.y <= 20 && currCoords.y > 20) {
		scrollH = scrollAmt * -1
	}
	if ((YAHOO.util.Dom.getViewportHeight() - mouseCoords.y) <= 20 && (ppw.util.pageTop.offsetHeight - currCoords.y) > 20) {
		scrollH = scrollAmt
	}
	if ((mouseCoords.x < (212 + 20)) && (currCoords.x > (212 + 20))) {
		scrollW = scrollAmt * -1
	}
	if ((YAHOO.util.Dom.getViewportWidth() - mouseCoords.x) <= 20 && (ppw.util.pageTop.offsetWidth - currCoords.x) > 20) {
		scrollW = scrollAmt
	}
	if (scrollW != 0 || scrollH != 0) {
		ppw.drag.scrollAmt = {
			w: scrollW,
			h: scrollH
		};
		ppw.drag.scroll()
	}
	else {
		ppw.drag.scrollAmt = null
	}
};
PwylDragSelect.prototype.scroll = function () {
	if (!ppw.drag.scrollAmt) {
		return
	}
	window.scrollBy(ppw.drag.scrollAmt.w, ppw.drag.scrollAmt.h);
	if (ppw.drag.scrollAmt.h > 0) {
		ppw.drag.increaseSelectBoxSize(ppw.drag.scrollAmt.h, "height")
	}
	if (ppw.drag.scrollAmt.h < 0) {
		ppw.drag.increaseSelectBoxSize(ppw.drag.scrollAmt.h, "height");
		var selectBoxPos = YAHOO.util.Dom.getXY(ppw.drag.selectBox);
		ppw.util.moveElement(ppw.drag.selectBox, selectBoxPos[0], selectBoxPos[1] - Math.abs(ppw.drag.scrollAmt.h))
	}
	if (ppw.drag.scrollAmt.w > 0) {
		ppw.drag.increaseSelectBoxSize(ppw.drag.scrollAmt.w, "width")
	}
	if (ppw.drag.scrollAmt.w < 0) {
		ppw.drag.increaseSelectBoxSize(ppw.drag.scrollAmt.w, "width");
		var selectBoxPos = YAHOO.util.Dom.getXY(ppw.drag.selectBox);
		ppw.util.moveElement(ppw.drag.selectBox, selectBoxPos[0] - Math.abs(ppw.drag.scrollAmt.w), selectBoxPos[1])
	}
	setTimeout("ppw.drag.scroll()", 100);
	if (ppw.drag.selectBoxAtPageEdge()) {
		ppw.drag.scrollAmt = null
	}
};
PwylDragSelect.prototype.increaseSelectBoxSize = function (amount, dimension) {
	var newL = parseInt(ppw.util.getStyle(ppw.drag.selectBox, dimension), 10) + Math.abs(amount);
	ppw.drag.selectBox.style[dimension] = newL + "px"
};
PwylDragSelect.prototype.selectBoxAtPageEdge = function () {
	var sbPos = YAHOO.util.Dom.getXY(ppw.drag.selectBox);
	var atEdge = sbPos[0] <= 212 || (sbPos[0] + ppw.drag.selectBox.offsetWidth) >= ppw.util.pageTop.offsetWidth || sbPos[1] <= 0 || (sbPos[1] + ppw.drag.selectBox.offsetHeight) >= ppw.util.pageTop.offsetHeight;
	return atEdge
};
PwylDragSelect.prototype.isPointerButton = function (event) {
	return (event.which ? event.which : event.button) == 1
};

function PwylEditor() {
	this.selectedElems = [];
	this.isCntrlKeyPressed = false;
	this.enableKeyboardShortcuts = true;
	this.isCoverBoxOpen = false;
	this.hoverElementsActive = true;
	this.undisplayableElements = {
		map: 1,
		area: 1,
		tbody: 1
	};
	this.unmodifyableElements = ["iframe", "embed", "object", "applet", "input", "button", "select", "textarea"];
	this.currHoverElem;
	this.disableSelecting = false
}
PwylEditor.prototype.initializeEditorComponents = function () {
	if (!ppw.bookmarklet) {
		ppw.editor.fixTop()
	}
	ppw.editor.borderTop = document.getElementById("ppw_hover_border_top");
	ppw.editor.borderTop.onclick = ppw.editor.mouseClick;
	ppw.editor.borderBottom = document.getElementById("ppw_hover_border_bottom");
	ppw.editor.borderBottom.onclick = ppw.editor.mouseClick;
	ppw.editor.borderLeft = document.getElementById("ppw_hover_border_left");
	ppw.editor.borderLeft.onclick = ppw.editor.mouseClick;
	ppw.editor.borderRight = document.getElementById("ppw_hover_border_right");
	ppw.editor.borderRight.onclick = ppw.editor.mouseClick
};
PwylEditor.prototype.initializeHandlers = function () {
	ppw.editor.convertTextToElements();
	ppw.editor.clearBadAttributes(ppw.util.pageTop);
	ppw.editor.initializeHandlersOnElement(ppw.util.pageTop);
	document.onkeydown = this.keyDown;
	document.onkeyup = this.keyUp;
	ppw.util.toolbarContent.onmouseover = this.clearHover;
	ppw.util.top.onmouseover = this.clearHover
};
PwylEditor.prototype.unInitializeHandlers = function (preventDefaults) {
	document.onkeydown = null;
	document.onkeyup = null;
	ppw.editor.initializeHandlersOnElement(ppw.util.pageTop, true, preventDefaults);
	ppw.editor.clearBadAttributes(ppw.util.pageTop, true)
};
PwylEditor.prototype.convertTextToElements = function () {
	for (var i = 0; i < ppw.util.pageTop.childNodes.length; i++) {
		var child = ppw.util.pageTop.childNodes[i];
		if (child.nodeType == Node.TEXT_NODE) {
			var text = child.nodeValue.strip();
			if (text.length > 0) {
				var span = document.createElement("span");
				span.innerHTML = text;
				ppw.util.pageTop.replaceChild(span, child)
			}
		}
	}
};
PwylEditor.prototype.initializeHandlersOnElement = function (currElem, uninitialize, preventDefaults) {
	var mouseOverFunction = (uninitialize) ? null : this.mouseOver;
	var mouseClickFunction;
	if (uninitialize) {
		mouseClickFunction = (preventDefaults) ? this.mouseClickPreventDefaults : null
	}
	else {
		mouseClickFunction = this.mouseClick
	}
	if (!currElem) {
		return
	}
	var allElems = ppw.util.getElementAndSubelements(currElem);
	for (var i = 0; i < allElems.length; i++) {
		allElems[i].onmouseover = mouseOverFunction;
		allElems[i].onclick = mouseClickFunction
	}
};
PwylEditor.prototype.clearBadAttributes = function (start, restore) {
	var documentAttributesToClear = ["onkeydown", "onkeyup", "onkeypress", "onclick"];
	var i;
	var modifyAttribute = restore ? ppw.util.restoreAttribute : ppw.util.removeAttribute;
	for (i = 0; i < documentAttributesToClear.length; i++) {
		modifyAttribute(document, documentAttributesToClear[i])
	}
	var allElems = ppw.util.getElementAndSubelements(start);
	for (i = 0; i < allElems.length; i++) {
		modifyAttribute(allElems[i], "onmouseover");
		modifyAttribute(allElems[i], "onmouseout");
		modifyAttribute(allElems[i], "onmousedown");
		modifyAttribute(allElems[i], "onmouseup");
		modifyAttribute(allElems[i], "onclick")
	}
};
PwylEditor.prototype.fixTop = function () {
	var i, e;
	if (!ppw.editor.isSane()) {
		if (ppw.util.toolbar.parentNode != document.body) {
			document.body.appendChild(ppw.util.toolbar)
		}
		if (ppw.util.top.parentNode != document.body) {
			document.body.appendChild(ppw.util.top)
		}
		if (ppw.util.pageTop.parentNode != ppw.util.top) {
			ppw.util.top.appendChild(ppw.util.pageTop)
		}
		var toolbarPosition = null;
		var pageTopFirstChild = ppw.util.pageTop.firstChild;
		for (i = 0; i < document.body.childNodes.length; i++) {
			e = document.body.childNodes[i];
			if (e == ppw.util.toolbar) {
				toolbarPosition = i
			}
			else {
				if (e != ppw.util.top) {
					if (toolbarPosition == null || i < toolbarPosition) {
						ppw.util.pageTop.insertBefore(e, pageTopFirstChild)
					}
					else {
						ppw.util.pageTop.appendChild(e)
					}
					i--
				}
			}
		}
		for (i = 0; i < ppw.util.top.childNodes.length; i++) {
			e = ppw.util.top.childNodes[i];
			if (e != ppw.util.pageTop) {
				ppw.util.pageTop.appendChild(e);
				i--
			}
		}
	}
};
PwylEditor.prototype.isSane = function () {
	for (var i = 0; i < document.body.childNodes.length; i++) {
		var e = document.body.childNodes[i];
		if (e.nodeType == Node.ELEMENT_NODE && e != ppw.util.toolbar && e != ppw.util.top) {
			return false
		}
	}
	if (ppw.util.getChildElements(ppw.util.top).length > 1) {
		return false
	}
	return true
};
PwylEditor.prototype.getValidElement = function (elem) {
	if (elem.orig_layer) {
		return ppw.editor.getValidElement(elem.orig_layer)
	}
	if (!ppw.util.isParent(elem, ppw.util.pageTop)) {
		return null
	}
	if (ppw.editor.undisplayableElements[elem.tagName.toLowerCase()] || ppw.editor.hasCoverSpan(elem) || elem.offsetWidth == 0 || elem.offsetHeight == 0) {
		return ppw.editor.getValidElement(elem.parentNode)
	}
	return elem
};
PwylEditor.prototype.inside = function (innerElem, outerElem, innerElemPos, outerElemPos) {
	innerElemPos = innerElemPos ? innerElemPos : YAHOO.util.Dom.getXY(innerElem);
	outerElemPos = outerElemPos ? outerElemPos : YAHOO.util.Dom.getXY(outerElem);
	return outerElemPos[0] <= innerElemPos[0] && ((outerElemPos[0] + outerElem.offsetWidth) >= (innerElemPos[0] + innerElem.offsetWidth)) && outerElemPos[1] <= innerElemPos[1] && ((outerElemPos[1] + outerElem.offsetHeight) >= (innerElemPos[1] + innerElem.offsetHeight))
};
PwylEditor.prototype.outside = function (elemA, elemB, elemAPos, elemBPos) {
	elemAPos = elemAPos ? elemAPos : YAHOO.util.Dom.getXY(elemA);
	elemBPos = elemBPos ? elemBPos : YAHOO.util.Dom.getXY(elemB);
	var narrower, narrowerPos, wider, widerPos, shorter, shorterPos, taller, tallerPos;
	if (elemA.offsetWidth <= elemB.offsetWidth) {
		narrower = elemA, narrowerPos = elemAPos, wider = elemB, widerPos = elemBPos
	}
	else {
		narrower = elemB, narrowerPos = elemBPos, wider = elemA, widerPos = elemAPos
	}
	if (elemA.offsetHeight <= elemB.offsetHeight) {
		shorter = elemA, shorterPos = elemAPos, taller = elemB, tallerPos = elemBPos
	}
	else {
		shorter = elemB, shorterPos = elemBPos, taller = elemA, tallerPos = elemAPos
	}
	var a = (!ppw.editor.between(widerPos[0], widerPos[0] + wider.offsetWidth, narrowerPos[0]) && !ppw.editor.between(widerPos[0], widerPos[0] + wider.offsetWidth, narrowerPos[0] + narrower.offsetWidth)) || (!ppw.editor.between(tallerPos[1], tallerPos[1] + taller.offsetHeight, shorterPos[1]) && !ppw.editor.between(tallerPos[1], tallerPos[1] + taller.offsetHeight, shorterPos[1] + shorter.offsetHeight));
	return a
};
PwylEditor.prototype.between = function (a, b, y) {
	var x1, x2;
	if (a <= b) {
		x1 = a, x2 = b
	}
	else {
		x1 = b, x2 = a
	}
	return x1 <= y && y <= x2
};
PwylEditor.prototype.hasCoverSpan = function (elem) {
	if (ppw.editor.countChildren(elem.parentNode) != 1 || elem == ppw.util.pageTop || elem.parentNode == ppw.util.top) {
		return false
	}
	return ppw.editor.inside(elem, elem.parentNode) && ((elem.parentNode.offsetWidth - elem.offsetWidth) <= 5) && ((elem.parentNode.offsetHeight - elem.offsetHeight) <= 5)
};
PwylEditor.prototype.countChildren = function (p) {
	var count = 0;
	for (var i = 0; i < p.childNodes.length; i++) {
		if (p.childNodes[i].nodeType == Node.ELEMENT_NODE || (p.childNodes[i].nodeType == Node.TEXT_NODE && p.childNodes[i].nodeValue.strip().length > 0)) {
			count++
		}
	}
	return count
};
PwylEditor.prototype.mouseOver = function (event) {
	ppw.util.noBubble(event);
	if (!this.isCoverBox) {
		ppw.editor.clearCoverBoxes()
	}
	ppw.editor.hoverElement(ppw.editor.getValidElement(this))
};
PwylEditor.prototype.hoverElement = function (elem) {
	if (!ppw.editor.hoverElementsActive) {
		return
	}
	if (ppw.editor.currHoverElem == elem) {
		return false
	}
	ppw.editor.currHoverElem = elem;
	ppw.editor.placeHoverBorder(elem)
};
PwylEditor.prototype.placeHoverBorder = function (elem) {
	var pos = YAHOO.util.Dom.getXY(elem);
	pos.x = pos[0];
	pos.y = pos[1];
	ppw.editor.setHoverBorderVisibility(false);
	ppw.util.moveElement(ppw.editor.borderTop, pos.x, (elem.offsetHeight <= 4 ? pos.y - 2 : pos.y));
	ppw.editor.borderTop.style.width = elem.offsetWidth + "px";
	ppw.util.moveElement(ppw.editor.borderBottom, pos.x, (elem.offsetHeight <= 4 ? pos.y : pos.y - 2) + elem.offsetHeight);
	ppw.editor.borderBottom.style.width = elem.offsetWidth + "px";
	ppw.util.moveElement(ppw.editor.borderLeft, (elem.offsetWidth <= 4 ? pos.x - 2 : pos.x), pos.y);
	ppw.editor.borderLeft.style.height = elem.offsetHeight + "px";
	ppw.util.moveElement(ppw.editor.borderRight, (elem.offsetWidth <= 4 ? pos.x : pos.x - 2) + elem.offsetWidth, pos.y);
	ppw.editor.borderRight.style.height = elem.offsetHeight + "px";
	ppw.editor.borderTop.orig_layer = elem;
	ppw.editor.borderBottom.orig_layer = elem;
	ppw.editor.borderLeft.orig_layer = elem;
	ppw.editor.borderRight.orig_layer = elem;
	ppw.editor.setHoverBorderVisibility(true)
};
PwylEditor.prototype.setHoverBorderVisibility = function (visible) {
	var css = visible ? "visible" : "hidden";
	ppw.editor.borderTop.style.visibility = css;
	ppw.editor.borderBottom.style.visibility = css;
	ppw.editor.borderLeft.style.visibility = css;
	ppw.editor.borderRight.style.visibility = css
};
PwylEditor.prototype.clearHover = function (event) {
	ppw.editor.setHoverBorderVisibility(false);
	ppw.editor.currHoverElem = null
};
PwylEditor.prototype.mouseClickPreventDefaults = function (event) {
	event = ppw.util.captureEvent(event);
	ppw.util.noBubble(event);
	return false
};
PwylEditor.prototype.mouseClick = function (event) {
	event = ppw.util.captureEvent(event);
	ppw.util.noBubble(event);
	if (ppw.editor.disableSelecting) {
		ppw.editor.disableSelecting = false;
		return false
	}
	var elem = ppw.editor.getValidElement(this);
	if (elem == null) {
		return false
	}
	if (elem.isSelected) {
		ppw.editor.unSelect(elem, false, event)
	}
	else {
		if (p = ppw.util.hasSelectedParent(elem)) {
			ppw.editor.unSelect(p, false, event)
		}
		else {
			ppw.editor.select(elem, event)
		}
	}
	return false
};
PwylEditor.prototype.keyDown = function (event) {
	if (!ppw.editor.enableKeyboardShortcuts) {
		return
	}
	event = ppw.util.captureEvent(event);
	switch (event.keyCode) {
	case 90:
		if (ppw.editor.isCntrlKeyPressed) {
			ppw.changeset.undo()
		}
		else {
			ppw.commands.startResizeMode()
		}
		break;
	case 89:
		if (ppw.editor.isCntrlKeyPressed) {
			ppw.changeset.redo()
		}
		return false;
		break;
	case 77:
		ppw.editor.expandSelection();
		break;
	case 76:
		ppw.editor.narrowSelection();
		break;
	case 67:
		ppw.util.clearSelectedElements();
		break;
	case 27:
		ppw.util.clearSelectedElements();
		ppw.ui.closeAllPanels();
		break;
	case 46:
		ppw.util.cursorWrapper("ppw.commands.remove()");
		break;
	case 82:
		if (ppw.util.os == "mac") {
			ppw.util.cursorWrapper("ppw.commands.remove()")
		}
		break;
	case 73:
		ppw.util.cursorWrapper("ppw.commands.isolate()");
		break;
	case 87:
		ppw.util.cursorWrapper("ppw.commands.widen()");
		break;
	case 38:
		if (ppw.editor.isCntrlKeyPressed) {
			ppw.util.cursorWrapper("ppw.commands.changeFontSize(1)")
		}
		return false;
		break;
	case 40:
		if (ppw.editor.isCntrlKeyPressed) {
			ppw.util.cursorWrapper("ppw.commands.changeFontSize(-1)")
		}
		return false;
		break;
	case 17:
	case 224:
	case 91:
		ppw.editor.isCntrlKeyPressed = true;
		break
	}
};
PwylEditor.prototype.keyUp = function (event) {
	event = ppw.util.captureEvent(event);
	switch (event.keyCode) {
	case 17:
	case 224:
	case 91:
		ppw.editor.isCntrlKeyPressed = false;
		break
	}
};
PwylEditor.prototype.select = function (elem, event) {
	elem = ppw.editor.getValidElement(elem);
	var unselect = [];
	if (elem == null || elem.isSelected) {
		return
	}
	for (var i = 0; i < ppw.editor.selectedElems.length; i++) {
		var selectedElem = ppw.editor.selectedElems[i];
		if (ppw.util.isParent(selectedElem, elem)) {
			unselect.push(selectedElem)
		}
	}
	for (var i = 0; i < unselect.length; i++) {
		ppw.editor.unSelect(unselect[i], true)
	}
	ppw.editor.placeSelectBox(ppw.editor.generateSelectBox(elem, "ppw_select_box", "select_box"), 0);
	ppw.editor.placeSelectBox(ppw.editor.generateSelectBox(elem, "ppw_select_box_border", "select_box_border"), 1);
	elem.isSelected = true;
	this.selectedElems.push(elem);
	if (event) {
		ppw.editor.positionSelectionCommands(event)
	}
	ppw.editor.setSelectLessButtonVisibility();
	ppw.editor.clearCoverBoxes();
	ppw.init.onSelect()
};
PwylEditor.prototype.unSelect = function (elem, ignoreUnselectEvent, event) {
	YAHOO.util.Dom.removeClass(elem, "ppw_select");
	if (elem.select_box) {
		elem.select_box.parentNode.removeChild(elem.select_box)
	}
	if (elem.select_box_border) {
		elem.select_box_border.parentNode.removeChild(elem.select_box_border)
	}
	elem.isSelected = false;
	this.selectedElems.remove(elem);
	if (this.selectedElems.length > 0) {
		if (event) {
			ppw.editor.positionSelectionCommands(event)
		}
	}
	else {
		ppw.editor.hideSelectionCommands()
	}
	ppw.editor.setSelectLessButtonVisibility();
	if (YAHOO.env.ua.ie && ppw.editor.currHoverElem) {
		ppw.editor.currHoverElem.onmouseover()
	}
	if (ignoreUnselectEvent === undefined || ignoreUnselectEvent === false) {
		ppw.init.onUnselect()
	}
};
PwylEditor.prototype.generateSelectBox = function (elem, className, attributeName) {
	var div = document.createElement("div");
	div.className = className;
	ppw.util.toolbar.appendChild(div);
	elem[attributeName] = div;
	div.orig_layer = elem;
	div.onmouseover = this.mouseOver;
	div.onclick = this.mouseClick;
	return div
};
PwylEditor.prototype.placeSelectBox = function (box, borderWidth) {
	var elem = box.orig_layer;
	var pos = YAHOO.util.Dom.getXY(elem);
	var w = elem.offsetWidth - (borderWidth * 2);
	w = (w > 0 ? w : 0);
	box.style.width = w + "px";
	var h = elem.offsetHeight - (borderWidth * 2);
	h = (h > 0 ? h : 0);
	box.style.height = h + "px";
	ppw.util.moveElement(box, pos[0], pos[1])
};
PwylEditor.prototype.expandSelection = function () {
	if (ppw.editor.selectedElems.length > 0) {
		var elem = ppw.editor.selectedElems[ppw.editor.selectedElems.length - 1];
		var parent = ppw.editor.getValidElement(elem.parentNode);
		if (parent == null) {
			return
		}
		parent.expand_orig_selection = elem;
		parent.expand_selected_siblings = [];
		for (var i = 0; i < ppw.editor.selectedElems.length; i++) {
			if (ppw.editor.selectedElems[i] != elem && ppw.util.isParent(ppw.editor.selectedElems[i], parent)) {
				parent.expand_selected_siblings.push(ppw.editor.selectedElems[i])
			}
		}
		ppw.editor.clearHover();
		ppw.editor.select(parent, null);
		ppw.editor.showSelectionCommands()
	}
};
PwylEditor.prototype.narrowSelection = function () {
	if (ppw.editor.selectedElems.length > 0) {
		var elem = ppw.editor.selectedElems[ppw.editor.selectedElems.length - 1];
		var origElem = elem.expand_orig_selection;
		if (origElem) {
			ppw.editor.unSelect(elem, true);
			for (var i = 0; elem.expand_selected_siblings && i < elem.expand_selected_siblings.length; i++) {
				ppw.editor.select(elem.expand_selected_siblings[i], null, true)
			}
			ppw.editor.select(origElem, null);
			ppw.editor.showSelectionCommands();
			elem.expand_orig_selection = null;
			elem.expand_selected_siblings = null
		}
	}
};
PwylEditor.prototype.setSelectLessButtonVisibility = function () {
	if (this.selectedElems.length > 0 && this.selectedElems[this.selectedElems.length - 1].expand_orig_selection) {
		var selectLess = document.getElementById("ppw_narrow_link");
		selectLess.style.display = "inline";
		var menu = document.getElementById("ppw_selection_commands");
		var s = ppw.editor.getScrollPosition();
		var left = parseInt(menu.style.left);
		if ((left + menu.offsetWidth) >= (YAHOO.util.Dom.getViewportWidth() + s.x)) {
			left -= selectLess.offsetWidth + 15;
			menu.style.left = left + "px"
		}
	}
	else {
		document.getElementById("ppw_narrow_link").style.display = "none"
	}
};
PwylEditor.prototype.initializeCoverBoxes = function () {
	ppw.editor.applyOnMouseOverToAllCoverElements(this.coverElement);
	var div = document.getElementById("ppw_cover_div");
	div.isCoverBox = true;
	div.onmouseover = ppw.editor.mouseOver;
	div.onclick = ppw.editor.mouseClick
};
PwylEditor.prototype.applyOnMouseOverToAllCoverElements = function (onMouseOver) {
	var elemsToCover = [];
	for (var i = 0; i < ppw.editor.unmodifyableElements.length; i++) {
		elemsToCover.concatArray(ppw.util.top.getElementsByTagName(ppw.editor.unmodifyableElements[i]))
	}
	for (var i = 0; i < elemsToCover.length; i++) {
		elemsToCover[i].onmouseover = onMouseOver
	}
};
PwylEditor.prototype.coverElement = function (event) {
	ppw.util.noBubble(event);
	var elem = ppw.editor.getValidElement(this);
	ppw.editor.isCoverBoxOpen = true;
	ppw.editor.placeCoverBox(ppw.editor.getCoverBox(elem));
	ppw.editor.hoverElement(elem)
};
PwylEditor.prototype.getCoverBox = function (origElem) {
	var div = document.getElementById("ppw_cover_div");
	div.orig_layer = origElem;
	return div
};
PwylEditor.prototype.placeCoverBox = function (box) {
	var origElem = box.orig_layer;
	var pos = ppw.util.toArray(YAHOO.util.Dom.getXY(origElem));
	box.style.width = origElem.offsetWidth + "px";
	box.style.height = origElem.offsetHeight + "px";
	if (!pos[0]) {
		pos[0] = 0
	}
	if (!pos[1]) {
		pos[1] = 0
	}
	ppw.util.moveElement(box, pos[0], pos[1]);
	box.style.visibility = "visible"
};
PwylEditor.prototype.clearCoverBoxes = function () {
	if (ppw.editor.isCoverBoxOpen) {
		ppw.editor.isCoverBoxOpen = false;
		document.getElementById("ppw_cover_div").style.visibility = "hidden"
	}
};
PwylEditor.prototype.positionSelectionCommands = function (event) {
	this.hideSelectionCommands();
	var offset = 2;
	var m = ppw.editor.getMousePosition(event);
	var s = ppw.editor.getScrollPosition();
	var menu = document.getElementById("ppw_selection_commands");
	var top = m.y + offset,
		left = m.x + offset;
	if ((top + menu.offsetHeight) > (YAHOO.util.Dom.getViewportHeight() + s.y)) {
		top = top - menu.offsetHeight - offset
	}
	if ((left + menu.offsetWidth) > (YAHOO.util.Dom.getViewportWidth() + s.x)) {
		left = YAHOO.util.Dom.getViewportWidth() + s.x - menu.offsetWidth - 2
	}
	if (left < 212) {
		left = 212
	}
	menu.style.left = left + "px";
	menu.style.top = top + "px";
	menu.style.visibility = "visible";
	return false
};
PwylEditor.prototype.hideSelectionCommands = function () {
	document.getElementById("ppw_selection_commands").style.visibility = "hidden"
};
PwylEditor.prototype.showSelectionCommands = function () {
	document.getElementById("ppw_selection_commands").style.visibility = "visible"
};
PwylEditor.prototype.getMousePosition = function (event) {
	var s = ppw.editor.getScrollPosition(event);
	return {
		x: (event.clientX + s.x),
		y: (event.clientY + s.y)
	}
};
PwylEditor.prototype.getScrollPosition = function () {
	var x = 0;
	var y = 0;
	if (typeof (window.pageYOffset) == "number") {
		x = window.pageXOffset;
		y = window.pageYOffset
	}
	else {
		if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
			x = document.documentElement.scrollLeft;
			y = document.documentElement.scrollTop
		}
		else {
			if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
				x = document.body.scrollLeft;
				y = document.body.scrollTop
			}
		}
	}
	return {
		x: x,
		y: y
	}
};
PwylEditor.prototype.getScrollOffset = function (elem) {
	return {
		x: elem.scrollLeft,
		y: elem.scrollTop
	}
};
PwylEditor.prototype.redrawHoverBox = function () {
	if (ppw.editor.currHoverElem) {
		ppw.editor.placeHoverBorder(ppw.editor.currHoverElem)
	}
};
PwylEditor.prototype.redrawSelections = function () {
	for (var i = 0; i < this.selectedElems.length; i++) {
		ppw.editor.placeSelectBox(this.selectedElems[i].select_box, 0);
		ppw.editor.placeSelectBox(this.selectedElems[i].select_box_border, 1)
	}
};
PwylEditor.prototype.changeCursorStyle = function (style) {
	YAHOO.util.Dom.setStyle(document.body, "cursor", style);
	YAHOO.util.Dom.setStyle(ppw.util.toolbar, "cursor", style);
	var elems = ppw.util.toolbar.getElementsByTagName("button");
	for (var i = 0; i < elems.length; i++) {
		YAHOO.util.Dom.setStyle(elems[i], "cursor", style)
	}
};
PwylEditor.prototype.arePopupsEnabled = function () {
	var newWin = window.open("", "pwyl_test_window", "height=1,width=1,left=0,top=0,location=no,menubar=no,toolbar=no,scrollbars=no");
	self.focus();
	if (newWin) {
		newWin.close();
		return true
	}
	else {
		alert("A pop-up blocker is preventing this feature from working. Please disble your pop-up blocker for this site.");
		return false
	}
};
PwylEditor.prototype.hasEcoFontInstalled = function () {
	var d = document.createElement("DIV"),
		s = document.createElement("SPAN");
	d.appendChild(s);
	d.style.fontFamily = "serif";
	s.style.fontFamily = "serif";
	s.style.fontSize = "20px";
	s.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	ppw.util.toolbar.appendChild(d);
	var defaultWidth = s.offsetWidth,
		defaultHeight = s.offsetHeight;
	s.style.fontFamily = "Spranq eco sans";
	var fontW = s.offsetWidth,
		fontH = s.offsetHeight;
	ppw.util.toolbar.removeChild(d);
	return (fontW != defaultWidth || fontH != defaultHeight)
};
PwylEditor.prototype.saveToHtml = function () {
	if (!ppw.print_button) {
		ppw.ui.saveAsPanel.hide()
	}
	ppw.ui.completionMessagePanel.showMessage("ppw_completion_message_panel_html");
	var encoding = ppw.util.getRelevantDocEncoding();
	var ifr = ppw.loader.requestBlankInPageIFrame(null, encoding);
	ppw.loader.copyPage(ifr.head, ifr.body, document.getElementsByTagName("head")[0], document.body, {
		dontCopyJs: true,
		cloneElements: true,
		dontCopyPwylElements: true
	});
	ppw.loader.removePwylFrame(ifr.doc);
	ppw.editor.removeElementsByCssValue("display", "none", ifr.body);
	ppw.editor.postSrc(ifr.doc, ppw.props.home + "print/savehtml", false, false, encoding)
};
PwylEditor.prototype.saveToPdf = function () {
	if (!ppw.print_button) {
		ppw.ui.saveAsPanel.hide()
	}
	if (!ppw.print_button) {
		ppw.ui.completionMessagePanel.showMessage("ppw_completion_message_panel_pdf")
	}
	var encoding = ppw.util.getRelevantDocEncoding();
	var ifr = ppw.loader.requestBlankInPageIFrame(null, encoding);
	ppw.loader.copyPage(ifr.head, ifr.body, document.getElementsByTagName("head")[0], document.body, {
		dontCopyJs: true,
		cloneElements: true,
		dontCopyPwylElements: true
	});
	ppw.loader.removePwylFrame(ifr.doc);
	ppw.loader.addSpacerDiv(ifr.doc);
	ppw.editor.removeElementsByCssValue("display", "none", ifr.body);
	ifr.doc.getElementById("ppw_spacer").style.margin = ".3in";
	ppw.editor.postSrc(ifr.doc, ppw.props.home + "html_to_pdf", false, false, encoding)
};
PwylEditor.prototype.postSrc = function (srcDoc, destUrl, openNewWindow, checkPopupsBlocked, srcDocEncoding) {
	var form = document.getElementById("ppw_save_page_form");
	if (openNewWindow) {
		if (checkPopupsBlocked && !ppw.editor.arePopupsEnabled()) {
			return false
		}
		form.target = "_blank"
	}
	else {
		form.target = "_self"
	}
	var html = srcDoc.getElementsByTagName("html")[0].outerHTML ? srcDoc.getElementsByTagName("html")[0].outerHTML : "<html>" + srcDoc.getElementsByTagName("html")[0].innerHTML + "</html>";
	form.action = destUrl;
	document.getElementById("ppw_save_page_url").value = ppw.props.pageUrl;
	document.getElementById("ppw_save_page_field").value = html;
	srcDocEncoding = srcDocEncoding ? srcDocEncoding : "";
	document.getElementById("ppw_save_page_encoding").value = srcDocEncoding;
	form.submit()
};
PwylEditor.prototype.copySrcToNewWindow = function (srcDoc) {
	var width = Math.floor(YAHOO.util.Dom.getViewportWidth() * 0.5);
	var height = Math.floor(YAHOO.util.Dom.getViewportHeight() * 0.5);
	var locLeft = Math.floor((YAHOO.util.Dom.getViewportWidth() - width) / 2);
	var locTop = Math.floor((YAHOO.util.Dom.getViewportHeight() - height) / 2);
	var newWin = window.open("", "pwyl_save_html", "height=" + height + ",width=" + width + ",left=" + locLeft + ",top=" + locTop + ",location=yes,menubar=yes,toolbar=yes,scrollbars=yes");
	if (!newWin) {
		alert("A pop-up blocker is preventing this feature from working. Please disble your pop-up blocker for this site.");
		return
	}
	var html = srcDoc.getElementsByTagName("html")[0].outerHTML ? srcDoc.getElementsByTagName("html")[0].outerHTML : "<html>" + srcDoc.getElementsByTagName("html")[0].innerHTML + "</html>";
	var newDoc = newWin.document;
	newDoc.open();
	newDoc.write(html);
	newDoc.close()
};
PwylEditor.prototype.powerOffEditor = function (doc) {
	if (!doc) {
		doc = document
	}
};
PwylEditor.prototype.removeElementsByCssValue = function (cssRule, cssValue, rootNode) {
	var matchingElems = [];
	var callback = function (currElem) {
		if (YAHOO.util.Dom.getStyle(currElem, cssRule) == cssValue) {
			matchingElems.push(currElem);
			return false
		}
		return true
	};
	ppw.util.topDownDepthFirstRecursion(rootNode, callback);
	for (var i = 0; i < matchingElems.length; i++) {
		matchingElems[i].parentNode.removeChild(matchingElems[i])
	}
};
PwylEditor.prototype.fixCssMediaTypes = function (header) {
	var i;
	var cssElems = ppw.editor.getCssTagsOfMedia(header, "screen");
	for (i = 0; i < cssElems.length; i++) {
		cssElems[i].media = "all"
	}
	cssElems = ppw.editor.getCssTagsOfMedia(header, "print");
	for (i = 0; i < cssElems.length; i++) {
		if (cssElems[i].parentNode) {
			cssElems[i].parentNode.removeChild(cssElems[i])
		}
	}
};
PwylEditor.prototype.getCssTagsOfMedia = function (header, media) {
	var elems = [],
		i, e;
	var results = YAHOO.util.Selector.query("link[rel][type][media]", header);
	for (i = 0; i < results.length; i++) {
		e = results[i];
		if (!e.getAttribute("pwyl") && e.rel.toLowerCase() == "stylesheet" && e.type.toLowerCase() == "text/css" && e.media.toLowerCase() == media) {
			elems.push(e)
		}
	}
	results = YAHOO.util.Selector.query("style[media]", header);
	for (i = 0; i < results.length; i++) {
		if (results[0]["media"].toLowerCase() == media) {
			elems.push(results[0])
		}
	}
	return elems
};

function PwylExtApis() {
	this.is_local = (ppw.props.home.indexOf("localhost") >= 0)
}
PwylExtApis.prototype.initializeToolbarAd = function (messageId) {
	return
};
PwylExtApis.prototype.initializeAnalytics = function () {
	if (ppw.bookmarklet || ppw.ads.is_local) {
		return
	}
	var editor_src;
	if (ppw.bookmarklet) {
		editor_src = "bookmarklet"
	}
	else {
		if (ppw.print_button) {
			editor_src = "print_button"
		}
		else {
			editor_src = "editor"
		}
	}
	var _gaq = _gaq || [];
	_gaq.push(["_setAccount", "UA-5329881-1"]);
	_gaq.push(["_setCustomVar", 1, "pwyl_src", editor_src, 3]);
	_gaq.push(["_trackPageview"]);
	(function () {
		var ga = document.createElement("script");
		ga.type = "text/javascript";
		ga.async = true;
		ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
		(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(ga)
	})()
};

function pwylInitialize() {
	window.ppw = new Object();
	window.ppw.util = new PwylUtil();
	window.ppw.props = new PwylProperties();
	window.ppw.cssutil = new PwylCssUtil();
	window.ppw.commands = new PwylCommands();
	window.ppw.multicommand = new PwylMultiCommand();
	window.ppw.editor = new PwylEditor();
	window.ppw.drag = new PwylDragSelect();
	window.ppw.changeset = new PwylChangeSet();
	window.ppw.server = new PwylServer();
	window.ppw.ui = new PwylUI();
	window.ppw.panel = new PwylPanel();
	window.ppw.loader = new PwylLoader();
	window.ppw.auto = new PwylAuto();
	window.ppw.paths = new PwylPaths();
	window.ppw.init = new PwylInitializer();
	window.ppw.auth = new PwylAuth();
	window.ppw.acs = new PwylApplyChangeSet();
	window.ppw.ads = new PwylExtApis();
	window.ppw.savings = new PwylSavings();
	if (window.ppw.props.pageFromClips) {
		window.ppw.pro = new PwylPro()
	}
}

function pwylInitializeWithEditor() {
	pwylInitialize();
	ppw.init.onEditorLoad();
	ppw.init.afterPageLoad()
}

function PwylInitializer() {}
PwylInitializer.prototype.stopToolbar = function () {
	ppw.init.onEditorUnload();
	ppw.loader.removePwylFrame(document)
};
PwylInitializer.prototype.onEditorLoad = function () {
	ppw.ads.initializeAnalytics();
	ppw.ads.initializeToolbarAd();
	ppw.util.initializeEditorComponents();
	ppw.editor.initializeEditorComponents();
	ppw.drag.initializeDragSelect();
	ppw.ui.instantiateUI();
	document.getElementById("ppw_add_page_url_form_field").value = ppw.server.pageUrl.url;
	document.getElementById("ppw_new_page_url_form_field").value = ppw.server.pageUrl.url;
	ppw.ui.updateHelpMenuForMac();
	ppw.ui.addFontFace();
	ppw.ui.setPageWidth();
	ppw.ui.initializeProAccount();
	_pgzpInitPwyl()
};
PwylInitializer.prototype.onEditorUnload = function () {
	ppw.editor.unInitializeHandlers();
	ppw.editor.applyOnMouseOverToAllCoverElements(null);
	ppw.cssutil.restoreCssHoverRules()
};
PwylInitializer.prototype.afterPageLoad = function () {
	ppw.editor.initializeHandlers();
	ppw.cssutil.removeCssHoverRules();
	ppw.ui.setOverflow();
	ppw.ui.setBackgroundColor();
	ppw.editor.initializeCoverBoxes();
	ppw.editor.fixCssMediaTypes(document.getElementsByName("head")[0]);
	ppw.ui.addPageNormal();
	if (ppw.ui.orig_doc_height == null) {
		ppw.ui.orig_doc_height = YAHOO.util.Dom.getDocumentHeight();
		ppw.ui.before_add_page_height = ppw.ui.orig_doc_height
	}
	if (!ppw.props.editChangeSet && !ppw.props.pageFromClips) {
		YAHOO.util.Event.addListener(window, "beforeunload", ppw.savings.recordSavings)
	}
	if (ppw.props.proAccountId && !ppw.props.editChangeSet && !ppw.props.pageFromClips) {
		setTimeout("ppw.acs.autoApplyChangeSet()", 200)
	}
	var printButton = parent.document.getElementById("printer_layouts_new");
	if (!ppw.bookmarklet && (printButton == null) && !ppw.props.editChangeSet && !ppw.props.pageFromClips) {
		ppw.ui.displayBookmarkletMessage()
	}
};
PwylInitializer.prototype.afterRedraw = function () {
	ppw.editor.redrawHoverBox();
	ppw.editor.redrawSelections()
};
PwylInitializer.prototype.beforeAction = function () {
	ppw.editor.clearHover()
};
PwylInitializer.prototype.afterAction = function () {
	ppw.ui.setEnableUndoRedo((ppw.changeset.doStack.length > 0), (ppw.changeset.undoStack.length > 0));
	ppw.editor.changeCursorStyle("auto");
	ppw.ui.setPageWidth();
	ppw.init.afterRedraw()
};
PwylInitializer.prototype.beforeDo = function () {
	if (!ppw.print_button) {
		ppw.init.beforeAction()
	}
};
PwylInitializer.prototype.afterDo = function () {
	if (!ppw.print_button) {
		ppw.init.afterAction()
	}
};
PwylInitializer.prototype.beforeUndo = function () {
	if (!ppw.print_button) {
		ppw.init.beforeAction()
	}
};
PwylInitializer.prototype.afterUndo = function () {
	if (!ppw.print_button) {
		ppw.init.afterAction()
	}
};
PwylInitializer.prototype.onSelect = function () {};
PwylInitializer.prototype.onUnselect = function () {};

function PwylLoadJx() {
	return {
		http: false,
		format: "text",
		callback: function (data) {},
		handler: false,
		error: false,
		opt: new Object(),
		getHTTPObject: function () {
			var http = false;
			if (typeof ActiveXObject != "undefined") {
				try {
					http = new ActiveXObject("Msxml2.XMLHTTP")
				}
				catch (e) {
					try {
						http = new ActiveXObject("Microsoft.XMLHTTP")
					}
					catch (E) {
						http = false
					}
				}
			}
			else {
				if (window.XMLHttpRequest) {
					try {
						http = new XMLHttpRequest()
					}
					catch (e) {
						http = false
					}
				}
			}
			return http
		},
		load: function (url, callback, format, method, opt) {
			var http = this.init();
			if (!http || !url) {
				return
			}
			if (http.overrideMimeType) {
				http.overrideMimeType("text/xml")
			}
			if (!method) {
				method = "GET"
			}
			if (!format) {
				format = "text"
			}
			if (!opt) {
				opt = {}
			}
			format = format.toLowerCase();
			method = method.toUpperCase();
			var now = "uid=" + new Date().getTime();
			url += (url.indexOf("?") + 1) ? "&" : "?";
			url += now;
			var parameters = null;
			if (method == "POST") {
				var parts = url.split("?");
				url = parts[0];
				parameters = parts[1]
			}
			http.open(method, url, true);
			if (method == "POST") {
				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http.setRequestHeader("Content-length", parameters.length);
				http.setRequestHeader("Connection", "close")
			}
			var ths = this;
			if (opt.handler) {
				http.onreadystatechange = function () {
					opt.handler(http)
				}
			}
			else {
				http.onreadystatechange = function () {
					if (http.readyState == 4) {
						if (http.status == 200) {
							var result = "";
							if (http.responseText) {
								result = http.responseText
							}
							if (format.charAt(0) == "j") {
								result = result.replace(/[\n\r]/g, "");
								result = eval("(" + result + ")")
							}
							else {
								if (format.charAt(0) == "x") {
									result = http.responseXML
								}
							}
							if (callback) {
								callback(result)
							}
						}
						else {
							if (opt.loadingIndicator) {
								document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator)
							}
							if (opt.loading) {
								document.getElementById(opt.loading).style.display = "none"
							}
							if (error) {
								error(http.status)
							}
						}
					}
				}
			}
			http.send(parameters)
		},
		bind: function (user_options) {
			var opt = {
				url: "",
				onSuccess: false,
				onError: false,
				format: "text",
				method: "GET",
				update: "",
				loading: "",
				loadingIndicator: ""
			};
			for (var key in opt) {
				if (user_options[key]) {
					opt[key] = user_options[key]
				}
			}
			if (!opt.url) {
				return
			}
			var div = false;
			if (opt.loadingIndicator) {
				div = document.createElement("div");
				div.setAttribute("style", "position:absolute;top:0px;left:0px;");
				div.setAttribute("class", "loading-indicator");
				div.innerHTML = opt.loadingIndicator;
				document.getElementsByTagName("body")[0].appendChild(div);
				this.opt.loadingIndicator = div
			}
			if (opt.loading) {
				document.getElementById(opt.loading).style.display = "block"
			}
			this.load(opt.url, function (data) {
				if (opt.onSuccess) {
					opt.onSuccess(data)
				}
				if (opt.update) {
					document.getElementById(opt.update).innerHTML = data
				}
				if (div) {
					document.getElementsByTagName("body")[0].removeChild(div)
				}
				if (opt.loading) {
					document.getElementById(opt.loading).style.display = "none"
				}
			}, opt.format, opt.method, opt)
		},
		init: function () {
			return this.getHTTPObject()
		}
	}
};

function PwylLoader() {
	this.addPage = false
}
PwylLoader.prototype.requestInPageIFrame = function (html, attachPoint) {
	var ifr = document.createElement("iframe");
	ifr.style.width = "1px";
	ifr.style.height = "1px";
	ifr.id = "id" + new Date().getMilliseconds();
	if (!attachPoint) {
		attachPoint = document.getElementById("ppw_iframe_dock")
	}
	attachPoint.appendChild(ifr);
	var ifrObj = ppw.loader.getIFrame(ifr);
	ifrObj.doc.open();
	ifrObj.doc.write(html);
	ifrObj.doc.close();
	return ppw.loader.getIFrame(ifr.id)
};
PwylLoader.prototype.requestBlankInPageIFrame = function (attachPoint, encoding) {
	encoding = encoding ? encoding : "UTF-8";
	var html = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=' + encoding + '"/><base target="_blank" href="' + ppw.props.pageBaseUrl + '"/></head><body></body></html>';
	return ppw.loader.requestInPageIFrame(html, attachPoint)
};
PwylLoader.prototype.requestIFrame = function (requestedUrl, onLoadCallback, useProxy, pageBodyId, applyChanges) {
	var ifr;
	var ifrId = "id" + new Date().getMilliseconds();
	var ifrspan = document.createElement("span");
	ifrspan.innerHTML = '<iframe id="' + ifrId + '" onload="ppw.loader.loadIFrame(\'' + ifrId + "','" + pageBodyId + "'," + applyChanges + ')" onloadcallback="' + onLoadCallback + '"></iframe>';
	ifr = ifrspan.childNodes[0];
	ifr.destUrl = requestedUrl;
	var ifrSrc = useProxy ? (ppw.props.home + "get_page?url=" + new ppw.server.URLManager(requestedUrl).encodedUrl) : requestedUrl;
	if (ifrSrc == document.URL) {
		ifrSrc = ifrSrc + ((ifrSrc.indexOf("?") == -1) ? "?" : "&") + "uid=" + ifrId
	}
	ifr.src = ifrSrc;
	document.getElementById("ppw_iframe_dock").appendChild(ifr);
	return false
};
PwylLoader.prototype.loadIFrame = function (ifrId, pageBodyId, applyChanges) {
	var ifr = document.getElementById(ifrId);
	var callback = ppw.util.getAttribute(ifr, "onloadcallback");
	if (callback) {
		var vars = callback.split(".");
		window[vars[0]][vars[1]][vars[2]](ppw.loader.getIFrame(ifr), pageBodyId, applyChanges)
	}
};
PwylLoader.prototype.getIFrame = function (ifrOrId) {
	var ifrObj = new Object();
	var ifr = ppw.paths.get(ifrOrId);
	ifrObj.iframe = ifr;
	ifrObj.destUrl = ifr.destUrl;
	if (ifr.contentDocument) {
		ifrObj.win = ifr.contentWindow;
		ifrObj.doc = ifr.contentDocument
	}
	else {
		if (ifr.contentWindow) {
			ifrObj.win = ifr.contentWindow;
			ifrObj.doc = ifrObj.win.document
		}
	}
	try {
		if (ifrObj.doc.getElementsByTagName("head")) {
			ifrObj.head = ifrObj.doc.getElementsByTagName("head")[0]
		}
		if (ifrObj.doc.getElementsByTagName("body")) {
			ifrObj.body = ifrObj.doc.getElementsByTagName("body")[0]
		}
	}
	catch (ex) {}
	return ifrObj
};
PwylLoader.prototype.requestPageUsingJS = function (url, callback, pageBodyId, applyChanges) {
	var params = {
		url: new ppw.server.URLManager(url).encodedUrl,
		js: "true",
		pageBodyId: pageBodyId,
		applyChanges: applyChanges
	};
	ppw.server.getViaJs("get_page", params, callback)
};
PwylLoader.prototype.copyPage = function (destHead, destBody, srcHead, srcBody, options) {
	ppw.loader._copyOptions = (options) ? options : {};
	try {
		if (!ppw.loader.canHandleHeaderInnerHtml()) {
			srcHead = ppw.loader.unbreakIEHead(srcHead, destHead.ownerDocument);
			srcBody = ppw.loader.unbreakIEBody(srcBody, destBody.ownerDocument);
			if (ppw.loader._copyOptions.cloneElements) {
				ppw.loader._copyOptions.cloneElements = false
			}
		}
		ppw.loader.copyPageElements(destHead, srcHead, ppw.loader.getProperHeaderElement, ppw.loader._copyOptions.customHeadAttributes);
		ppw.loader.copyPageElements(destBody, srcBody, ppw.loader.getProperElement);
		if (ppw.loader._copyOptions.applyTemplate) {
			ppw.loader.applyCurrentChangesToNewPage(destBody)
		}
		ppw.loader.copyAttributes(destBody, srcBody)
	}
	catch (ex) {
		if (window.console) {
			console.error(ex.message)
		}
	}
};
PwylLoader.prototype.copyPageElements = function (dest, src, filter, customAttributes) {
	var i = 0;
	var firstToCopy = 0;
	var removeJs = function (elem) {
		var js = elem.getElementsByTagName("script");
		while (js.length > 0) {
			ppw.util.removeElement(js[0])
		}
	};
	var getNextElem = function () {
		if (ppw.loader._copyOptions.cloneElements) {
			if (i < src.childNodes.length) {
				if (ppw.loader._copyOptions.copyExcludesAttrib && src.childNodes[i][ppw.loader._copyOptions.copyExcludesAttrib]) {
					i++;
					return getNextElem
				}
				var cloned = src.childNodes[i].cloneNode(true);
				if (cloned.nodeType == Node.ELEMENT_NODE && ppw.loader._copyOptions.dontCopyJs) {
					removeJs(cloned)
				}
				return cloned
			}
			else {
				return null
			}
		}
		else {
			if (src.childNodes.length > firstToCopy) {
				if (ppw.loader._copyOptions.copyExcludesAttrib && src.childNodes[firstToCopy][ppw.loader._copyOptions.copyExcludesAttrib]) {
					firstToCopy++;
					return getNextElem()
				}
				var elem = src.removeChild(src.childNodes[firstToCopy]);
				if (elem.nodeType == Node.ELEMENT_NODE && ppw.loader._copyOptions.dontCopyJs) {
					removeJs(elem)
				}
				return elem
			}
			else {
				return null
			}
		}
	};
	var currElem = getNextElem();
	while (currElem) {
		try {
			currElem = filter(currElem, dest);
			if (currElem) {
				if (customAttributes) {
					for (var key in customAttributes) {
						currElem.setAttribute(key, customAttributes[key])
					}
				}
				dest.appendChild(currElem)
			}
		}
		catch (ex) {
			if (window.console) {
				console.error("exception: " + ex.message)
			}
		}
		i++;
		currElem = getNextElem()
	}
};
PwylLoader.prototype.getProperElement = function (elem) {
	if (!elem) {
		return null
	}
	var bannedElementIds = {
		_yuiResizeMonitor: 1
	};
	if (elem.nodeType == Node.ELEMENT_NODE) {
		var tag = elem.tagName.toLowerCase();
		if ((ppw.loader._copyOptions.dontCopyJs && tag == "script") || (ppw.loader._copyOptions.dontCopyPwylElements && ppw.util.getAttribute(elem, "pwyl")) || (bannedElementIds[elem.id])) {
			return null
		}
		return elem
	}
	if (elem.nodeType == Node.TEXT_NODE && elem.nodeValue && elem.nodeValue.strip().length > 0) {
		var span = document.createElement("span");
		span.appendChild(elem);
		return span
	}
	return null
};
PwylLoader.prototype.getProperHeaderElement = function (elem, dest) {
	var elem = ppw.loader.getProperElement(elem);
	if (!elem) {
		return null
	}
	if (ppw.loader.isAllowableHeaderElem(elem)) {
		return elem
	}
	return null
};
PwylLoader.prototype.isAllowableHeaderElem = function (elem) {
	if (!elem.tagName) {
		return false
	}
	var tag = elem.tagName.toLowerCase();
	return tag == "script" || tag == "style" || tag == "title" || (tag == "link" && elem.rel && elem.rel.toLowerCase() == "stylesheet")
};
PwylLoader.prototype.copyAttributes = function (dest, src) {
	var attrs = src.attributes;
	for (var i = 0; i < attrs.length; i++) {
		if (attrs[i].specified) {
			if (attrs[i].name.toLowerCase() == "id" && ppw.loader._copyOptions.dontCopyIdAttribute) {
				continue
			}
			dest.setAttribute(attrs[i].name, attrs[i].value)
		}
	}
};
PwylLoader.prototype.unbreakIEHead = function (head, destDoc) {
	var newHead = destDoc.createElement("span");
	for (var i = 0; i < head.childNodes.length; i++) {
		var srcElem = head.childNodes[i];
		if (srcElem.nodeType == Node.ELEMENT_NODE) {
			var srcTagName = srcElem.tagName.toLowerCase();
			if (srcTagName == "script" && ppw.loader._copyOptions.dontCopyJs) {
				continue
			}
			var destElem = destDoc.createElement(srcTagName);
			ppw.loader.copyAttributes(destElem, srcElem);
			if (srcElem.innerHTML) {
				var currHtml = ppw.loader.removeCDataTags(ppw.loader.removeAtRules(srcElem.innerHTML));
				if (srcTagName == "style") {
					if (!ppw.util.getAttribute(destElem, "type")) {
						destElem.setAttribute("type", "text/css")
					}
					destElem.styleSheet.cssText = currHtml
				}
				else {
					if (srcTagName == "script") {
						destElem.text = currHtml
					}
					else {
						destElem.innerHTML = currHtml
					}
				}
			}
			newHead.appendChild(destElem)
		}
		else {
			if (srcElem.nodeType == Node.TEXT_NODE) {
				newHead.appendChild(destDoc.createTextNode(srcElem.nodeValue))
			}
		}
	}
	return newHead
};
PwylLoader.prototype.unbreakIEBody = function (srcBody, destDoc) {
	var tmpBody = destDoc.createElement("span");
	tmpBody.innerHTML = ppw.loader.removeCDataTags(ppw.loader.removeAtRules(srcBody.innerHTML));
	ppw.loader.copyAttributes(tmpBody, srcBody);
	return tmpBody
};
PwylLoader.prototype.removeCDataTags = function (str) {
	return str.replace("<![CDATA[", "").replace("]]>", "")
};
PwylLoader.prototype.removeAtRules = function (str) {
	return str.replace(/@\w+\s+\{[^\}]*\}/g, "").replace(/@\w+\s+[\s\S]+?;/g, "")
};
PwylLoader.prototype.canHandleHeaderInnerHtml = function () {
	var span = document.createElement("span");
	span.innerHTML = "<meta />";
	return span.childNodes.length > 0
};
PwylLoader.prototype.applyCurrentChangesToNewPage = function (elemToModify) {
	var multiCommand = ppw.changeset.buildChangeSetMultiCommand("Add Page: Apply Changes", ppw.changeset.getExistingCommandsToApplyToAddedPage(), true);
	ppw.changeset.executeInNewPageContext(elemToModify, function () {
		ppw.changeset.doAction(multiCommand)
	});
	return elemToModify
};
PwylLoader.prototype.removePwylFrame = function (doc) {
	var destBody = doc.body;
	var destTop = doc.getElementById(ppw.util.topId);
	var destPageTop = doc.getElementById(ppw.util.pageTopId);
	var destToolbar = doc.getElementById(ppw.util.toolbarId);
	while (destPageTop.childNodes.length > 0) {
		destBody.appendChild(destPageTop.childNodes[0])
	}
	ppw.loader.copyCssStyle(destBody, destTop);
	destBody.removeChild(destTop);
	if (destToolbar) {
		destBody.removeChild(destToolbar)
	}
};
PwylLoader.prototype.addSpacerDiv = function (doc) {
	var destBody = doc.body;
	var spacer = doc.createElement("div");
	spacer.id = "ppw_spacer";
	while (destBody.childNodes.length > 0) {
		spacer.appendChild(destBody.childNodes[0])
	}
	destBody.appendChild(spacer)
};
PwylLoader.prototype.copyCssStyle = function (dest, src, removeOld) {
	var styles = ["ppw_clear_bg", "ppw_remove_images", "ppw_remove_margin"];
	for (var i = 0; i < styles.length; i++) {
		if (YAHOO.util.Dom.hasClass(src, styles[i])) {
			YAHOO.util.Dom.addClass(dest, styles[i]);
			if (removeOld) {
				YAHOO.util.Dom.removeClass(src, styles[i])
			}
		}
	}
};

function PageZipper() {
	this.nextSynonyms = [{
		syn: "next",
		weight: 100
	}, {
		syn: "older",
		weight: 80
	}, {
		syn: "previous",
		weight: 60
	}, {
		syn: "forward",
		weight: 50
	}, {
		syn: "continue",
		weight: 45
	}, {
		syn: ">",
		weight: 40,
		humanReadableOnly: true
	}, {
		syn: ">>",
		weight: 30,
		humanReadableOnly: true
	}, {
		syn: "more",
		weight: 20
	}, {
		syn: "page",
		weight: 10
	}, {
		syn: "-1",
		weight: 0,
		humanReadableOnly: true,
		pageBar: true
	}];
	this.minimumPageBuffer = 1;
	this.poster_image_margin_top = 10;
	this.poster_image_margin_bottom = 10;
	this.pages = [];
	this.is_running = false;
	this.is_loading_page = false;
	this.is_bookmarklet = false;
	this.is_extension = false;
	this.ctrl_key_pressed = false;
	this.curr_next_synonym = null;
	this.onePosterPerPageMode = false;
	this.displayMode = "text";
	this.currDomain;
	this.url_list;
	this.media_path;
	this.debug = false
}
PageZipper.prototype.loadPageZipper = function () {
	if (!window.Node) {
		window.Node = {
			ELEMENT_NODE: 1,
			TEXT_NODE: 3
		}
	}
	var currDoc = pgzp().is_extension ? document.getElementById("content").contentWindow.wrappedJSObject.document : pgzp().doc;
	currDoc.write = currDoc.writeln = currDoc.open = currDoc.close = function (str) {
		return
	};
	pgzp().currDomain = pgzp().getDomain(pgzp().win.location.href);
	pgzp().url_list = [pgzp().win.location.href];
	pgzp().addExistingPage(pgzp().doc.body, pgzp().win.location.href);
	pgzp().displayMode = pgzp().calculateDisplayMode(pgzp().pages[0]);
	if (pgzp().displayMode == "image" && pgzp().pages[0].posterImgs.length == 1) {
		pgzp().onePosterPerPageMode = true
	}
	if (pgzp().currDomain == "boston.com") {
		pgzp().poster_image_margin_bottom = 60
	}
	if (pgzp().currDomain == "nytimes.com") {
		pgzp().poster_image_margin_top = 40
	}
};
PageZipper.prototype.runPageZipper = function () {
	pgzp().addEventListener(pgzp().doc, "keydown", this.keyDown);
	pgzp().addEventListener(pgzp().doc, "keyup", this.keyUp);
	pgzp().addEventListener(pgzp().win, "resize", this.positionMenu);
	pgzp().addMenu();
	this.is_running = pgzp().win.setInterval(pgzp().mainBlock, 250)
};
PageZipper.prototype.stopPageZipper = function () {
	if (this.is_running) {
		pgzp().win.clearInterval(this.is_running);
		this.is_running = null;
		pgzp().removeMenu();
		pgzp().removeEventListener(pgzp().doc, "keydown", this.keyDown);
		pgzp().removeEventListener(pgzp().doc, "keyup", this.keyUp);
		pgzp().removeEventListener(pgzp().win, "resize", this.positionMenu)
	}
};
PageZipper.prototype.mainBlock = function () {
	if (!pgzp()) {
		return
	}
	var currPageIndex = pgzp().getCurrentPage();
	var currViewablePage = pgzp().getViewableCurrentPage(currPageIndex);
	pgzp().menuSetCurrPageNumber(currViewablePage + 1);
	if (!pgzp().is_loading_page && pgzp().pages[pgzp().pages.length - 1]["nextLink"] && ((pgzp().pages.length - currPageIndex - 1) < pgzp().minimumPageBuffer || (pgzp().onePosterPerPageMode && ((pgzp().pages.length - currPageIndex) < 4)))) {
		pgzp().is_loading_page = true;
		pgzp().url_list.push(pgzp().pages[pgzp().pages.length - 1].nextLink.url);
		pgzp().loadPage(pgzp().pages[pgzp().pages.length - 1].nextLink.url)
	}
};
PageZipper.prototype.getCurrentPage = function () {
	var i, currPage, currPagePos, currPageTop, currPageBottom;
	var currViewBottom = pgzp().screen.getScrollTop() + pgzp().screen.getViewportHeight();
	for (i = 0; i < pgzp().pages.length; i++) {
		currPage = pgzp().pages[i].page;
		currPagePos = pgzp().findPos(currPage);
		currPageTop = currPagePos.y;
		if (i == (pgzp().pages.length - 1)) {
			currPageBottom = pgzp().screen.getDocumentHeight()
		}
		else {
			currPageBottom = pgzp().findPos(pgzp().pages[(i + 1)].page).y
		}
		if (i == (pgzp().pages.length - 1) && currPageBottom < currViewBottom) {
			currPageBottom = currViewBottom
		}
		if (currPageTop <= currViewBottom && currViewBottom <= currPageBottom) {
			return i
		}
	}
	return pgzp().pages.length + 1
};
PageZipper.prototype.getViewableCurrentPage = function (currPage) {
	var currPageObj = pgzp().pages[currPage];
	if ((pgzp().findPos(currPageObj.page).y - Math.abs(pgzp().screen.getScrollTop())) > (pgzp().screen.getViewportHeight() / 2)) {
		return currPage - 1
	}
	return currPage
};
PageZipper.prototype.loadPage = function (url) {
	pgzp().jx.load(url, function (data) {
		var results = data.match(/<body.*?>([\w\W]*?)<\/body>/i);
		data = (results && results.length >= 2) ? results[1] : data;
		pgzp().processPageAdd(data, url)
	})
};
PageZipper.prototype.processPageAdd = function (nextPageData, url) {
	var nextPage = pgzp().buildPageFromData(nextPageData, url);
	pgzp().pages.push(nextPage);
	pgzp().copyPage(nextPage.page);
	pgzp().removeAbsolutePositioning(nextPage.page);
	pgzp().menuIncrementPagesLoaded();
	nextPage.nextLink = pgzp().getNextLink(nextPage.page);
	pgzp().is_loading_page = false;
	pgzp().mainBlock()
};
PageZipper.prototype.addExistingPage = function (body, url) {
	var nextPage = pgzp().buildPage(body, url);
	pgzp().pages.push(nextPage);
	pgzp().removeAbsolutePositioning(nextPage.page);
	nextPage.posterImgs = pgzp().getPosterImagesOnPage(nextPage.page);
	nextPage.nextLink = pgzp().getNextLink(nextPage.page)
};
PageZipper.prototype.buildPageFromData = function (data, url) {
	var page = pgzp().doc.createElement("div");
	page.id = "pgzp_page" + pgzp().pages.length;
	page.style.clear = "both";
	page.innerHTML = data;
	return pgzp().buildPage(page, url)
};
PageZipper.prototype.buildPage = function (page, url) {
	return {
		page: page,
		nextLink: null,
		posterImgs: null,
		url: url
	}
};
PageZipper.prototype.copyPage = function (body) {
	pgzp().doc.body.appendChild(body)
};
PageZipper.prototype.removeAbsolutePositioning = function (body) {
	for (var i = 0; i < body.childNodes.length; i++) {
		if (body.childNodes[i].nodeType == 1 && pgzp().css.getStyle(body.childNodes[i], "position") == "absolute") {
			pgzp().css.setStyle(body.childNodes[i], "position", "static")
		}
	}
};
PageZipper.prototype.calculateDisplayMode = function (currPage) {
	var textArea = 0,
		imgArea = 0;
	var i = 0,
		txtP, imgs = {};
	txtP = pgzp().getAllTextOnPage(currPage.page);
	pgzp().doc.body.appendChild(txtP);
	textArea = txtP.offsetWidth * txtP.offsetHeight;
	pgzp().doc.body.removeChild(txtP);
	if (currPage.posterImgs == null) {
		currPage.posterImgs = pgzp().getPosterImagesOnPage(currPage.page)
	}
	for (i = 0; i < currPage.posterImgs.length; i++) {
		imgs[currPage.posterImgs[i].src] = currPage.posterImgs[i]
	}
	for (imgUrl in imgs) {
		var img = imgs[imgUrl];
		imgArea += img.offsetHeight * img.offsetWidth
	}
	return (textArea >= imgArea) ? "text" : "image"
};
PageZipper.prototype.getAllTextOnPage = function (pageHtml) {
	var str = "";
	pgzp().depthFirstRecursion(pageHtml, function (curr) {
		if (curr.nodeType == 3 && curr.parentNode.nodeType == 1) {
			var tagName = curr.parentNode.tagName.toLowerCase();
			if (tagName == "div" || tagName == "span" || tagName == "p" || tagName == "td") {
				str += curr.nodeValue + "\n"
			}
		}
	});
	var p = pgzp().doc.createElement("p");
	p.appendChild(pgzp().doc.createTextNode(str));
	return p
};
PageZipper.prototype.goToNext = function (inc) {
	var currPageIndex = pgzp().getViewableCurrentPage(pgzp().getCurrentPage());
	if (pgzp().displayMode == "text") {
		pgzp().goToNextPage(inc, currPageIndex)
	}
	else {
		if (inc > 0) {
			pgzp().goToNextPosterImage()
		}
		else {
			pgzp().goToPreviousPosterImage()
		}
	}
};
PageZipper.prototype.nextArrow = function () {
	pgzp().goToNext(1)
};
PageZipper.prototype.prevArrow = function () {
	pgzp().goToNext(-1)
};
PageZipper.prototype.goToNextPage = function (inc, currPageIndex) {
	var currPage, pos, amountToScroll, ps;
	currPageIndex += inc;
	if (currPageIndex in pgzp().pages) {
		currPage = pgzp().pages[currPageIndex].page;
		amountToScroll = pgzp().findPos(currPage).y - pgzp().screen.getScrollTop();
		pgzp().win.scrollBy(0, amountToScroll)
	}
};
PageZipper.prototype.getPosterImagesOnPage = function (page) {
	var posterImgs = [],
		filteredImages = [];
	var okImgDomains = {
		"www.flickr.com": 1
	};
	var isFillerImg = function (img) {
		if ((img.offsetWidth * img.offsetHeight) < (100 * 100)) {
			filteredImages.push(img);
			return true
		}
		var p = img.parentNode;
		if (p.nodeType == Node.ELEMENT_NODE && p.tagName.toLowerCase() == "a") {
			if (pgzp().getDomain(p.href) != pgzp().currDomain && okImgDomains[pgzp().getDomain(p.href)] != 1) {
				return true
			}
		}
		return false
	};
	var getBiggestImg = function (imgs) {
		var biggestImg = null;
		for (var i = 0; i < imgs.length; i++) {
			if (biggestImg == null || ((imgs[i].offsetWidth * imgs[i].offsetHeight) > (biggestImg.offsetWidth * biggestImg.offsetHeight))) {
				biggestImg = imgs[i]
			}
		}
		return biggestImg
	};
	var imgs = pgzp().convertToArray(page.getElementsByTagName("img"));
	pgzp().filter(imgs, isFillerImg);
	if (imgs.length < 2) {
		return imgs
	}
	imgs.sort(function (a, b) {
		var sizeA = a.offsetWidth * a.offsetHeight;
		var sizeB = b.offsetWidth * b.offsetHeight;
		return sizeB - sizeA
	});
	if (pgzp().onePosterPerPageMode) {
		return [imgs[0]]
	}
	var biggestSmallImg = getBiggestImg(filteredImages);
	if (biggestSmallImg) {
		imgs.push(biggestSmallImg)
	}
	var biggestGap = [0, 1];
	for (var i = 1; i < imgs.length; i++) {
		var bigger = imgs[i - 1],
			biggerSize = bigger.offsetHeight * bigger.offsetWidth;
		var smaller = imgs[i],
			smallerSize = smaller.offsetHeight * smaller.offsetWidth;
		var relGap = (biggerSize == 0 || smallerSize == 0 ? 0 : (biggerSize / smallerSize)),
			absGap = (biggerSize - smallerSize),
			totalGap = (relGap * absGap);
		if (totalGap >= biggestGap[0]) {
			biggestGap = [totalGap, i]
		}
	}
	imgs.splice(biggestGap[1], (imgs.length - biggestGap[1]));
	imgs.sort(function (a, b) {
		return pgzp().findPos(a).y - pgzp().findPos(b).y
	});
	return imgs
};
PageZipper.prototype.resizeImageToViewport = function (img) {
	var usableViewport = pgzp().screen.getViewportHeight() - pgzp().poster_image_margin_top - pgzp().poster_image_margin_bottom;
	if (img.offsetHeight > usableViewport) {
		img.style.width = (usableViewport / img.offsetHeight) * img.offsetWidth + "px";
		img.style.height = usableViewport + "px"
	}
};
PageZipper.prototype.goToNextPosterImage = function () {
	var browserBorderTop = pgzp().screen.getScrollTop() + pgzp().poster_image_margin_top + 1;
	for (var i = 0; i < pgzp().pages.length; i++) {
		if (pgzp().pages[i].posterImgs == null) {
			pgzp().pages[i].posterImgs = pgzp().getPosterImagesOnPage(pgzp().pages[i].page)
		}
		for (var j = 0; j < pgzp().pages[i].posterImgs.length; j++) {
			var currPosterImg = pgzp().pages[i].posterImgs[j];
			var pos = pgzp().findPos(currPosterImg);
			if (pos.y > browserBorderTop) {
				pgzp().resizeImageToViewport(currPosterImg);
				var amountToScroll = (pos.y - pgzp().poster_image_margin_top) - pgzp().screen.getScrollTop();
				pgzp().win.scrollBy(0, amountToScroll);
				return
			}
		}
	}
};
PageZipper.prototype.goToPreviousPosterImage = function () {
	var browserBorderTop = pgzp().screen.getScrollTop() + pgzp().poster_image_margin_top - 1;
	for (var i = (pgzp().pages.length - 1); i >= 0; i--) {
		if (pgzp().pages[i].posterImgs == null) {
			pgzp().pages[i].posterImgs = pgzp().getPosterImagesOnPage(pgzp().pages[i].page)
		}
		for (var j = (pgzp().pages[i].posterImgs.length - 1); j >= 0; j--) {
			var currPosterImg = pgzp().pages[i].posterImgs[j];
			var pos = pgzp().findPos(currPosterImg);
			if (pos.y < browserBorderTop) {
				pgzp().resizeImageToViewport(currPosterImg);
				var amountToScroll = (pos.y - pgzp().poster_image_margin_top) - pgzp().screen.getScrollTop();
				pgzp().win.scrollBy(0, amountToScroll);
				return
			}
		}
	}
};
PageZipper.prototype.keyDown = function (event) {
	event = pgzp().captureEvent(event);
	switch (event.keyCode) {
	case 40:
	case 190:
		if (pgzp().ctrl_key_pressed) {
			pgzp().goToNext(1);
			pgzp().noBubble(event)
		}
		break;
	case 38:
	case 188:
		if (pgzp().ctrl_key_pressed) {
			pgzp().goToNext(-1);
			pgzp().noBubble(event)
		}
		break;
	case 17:
	case 224:
		pgzp().ctrl_key_pressed = true;
		break
	}
};
PageZipper.prototype.keyUp = function (event) {
	event = pgzp().captureEvent(event);
	switch (event.keyCode) {
	case 17:
	case 224:
		pgzp().ctrl_key_pressed = false;
		break
	}
};
PageZipper.prototype.addMenu = function () {
	var css = "																																								#pgzp_menu a, #pgzp_menu a * {border: 0; text-decoration: none;}																										#pgzp_menu {position: fixed; top: 0px; float:left; padding: 0px 5px; background-color: #D3D3D3; color: black; z-index: 10000;}														.pgzp_block {display: block; float: left;}																																.pgzp_button {display: block; width: 32px; height: 32px;}																												a.pgzp_button_prev_active {background: transparent url('${media_path}32-gnome-prev.png') no-repeat scroll top left; }					a:hover.pgzp_button_prev_active {background-image: url('${media_path}32-gnome-prev_red.png'); }											a.pgzp_button_prev_inactive {background: transparent url('${media_path}32-gnome-prev_gray.png') no-repeat scroll top left; }			a.pgzp_button_next_active {background: transparent url('${media_path}32-gnome-next.png') no-repeat scroll top left; }					a:hover.pgzp_button_next_active {background-image: url('${media_path}32-gnome-next_red.png'); }											a.pgzp_button_next_inactive {background: transparent url('${media_path}32-gnome-next_gray.png') no-repeat scroll top left; }			#pgzp_curr_page {font-size: 24px;}																																		#pgzp_loaded_pages {font-size: 18px;}																																";
	var html = "																																									<div id='pgzp_menu'>																																							<a href='javascript:pgzp().goToNext(-1)' id='pgzp_button_prev' class='pgzp_block pgzp_button pgzp_button_prev_active' title='Previous - Cntrl Up or Cntrl <'></a>				<a href='javascript:pgzp().goToNext(1)' id='pgzp_button_next' class='pgzp_block pgzp_button pgzp_button_next_active' title='Next - Cntrl Down or Cntrl >'></a>				<div class='pgzp_block' style='padding-left: 5px;'><span id='pgzp_curr_page' title='Current Page'>1</span><span id='pgzp_loaded_pages' title='Pages Loaded'>/1</span></div>											<a href='http://www.printwhatyoulike.com/pagezipper' target='_blank' title='PageZipper Home' class='pgzp_block pgzp_button' style='padding-left: 5px'>																<img src='${media_path}zipper_32.png' alt='PageZipper!' style='border-width: 0px' />													</a>																																									</div>																																									";
	css = pgzp().strip(css.replace(/\$\{media_path\}/g, pgzp().media_path));
	html = pgzp().strip(html.replace(/\$\{media_path\}/g, pgzp().media_path));
	var cssElem = pgzp().doc.createElement("style");
	cssElem.setAttribute("type", "text/css");
	if (cssElem.styleSheet) {
		cssElem.styleSheet.cssText = css
	}
	else {
		cssElem.appendChild(pgzp().doc.createTextNode(css))
	}
	pgzp().doc.getElementsByTagName("head")[0].appendChild(cssElem);
	var div = pgzp().doc.createElement("div");
	div.innerHTML = html;
	div = div.childNodes[0];
	pgzp().doc.body.appendChild(div);
	pgzp().positionMenu();
	if (pgzp().is_extension) {
		var fixLink = function (linkId, eventHandler) {
			var link = pgzp().doc.getElementById(linkId);
			link.removeAttribute("href");
			pgzp().addEventListener(link, "click", eventHandler)
		};
		fixLink("pgzp_button_prev", pgzp().prevArrow);
		fixLink("pgzp_button_next", pgzp().nextArrow)
	}
};
PageZipper.prototype.positionMenu = function () {
	var div = pgzp().doc.getElementById("pgzp_menu");
	div.style.left = (pgzp().screen.getViewportWidth() - div.offsetWidth - 30) + "px"
};
PageZipper.prototype.removeMenu = function () {
	var menu = pgzp().doc.getElementById("pgzp_menu");
	if (menu) {
		pgzp().doc.body.removeChild(menu)
	}
};
PageZipper.prototype.menuIncrementPagesLoaded = function () {
	var loadedPages = pgzp().doc.getElementById("pgzp_loaded_pages"),
		num;
	if (loadedPages) {
		num = parseInt(loadedPages.innerHTML.replace("/", "", "g"), 10);
		num++;
		loadedPages.innerHTML = "/" + num
	}
};
PageZipper.prototype.menuSetCurrPageNumber = function (currPage) {
	var currPageObj = pgzp().pages[currPage - 1];
	pgzp().doc.getElementById("pgzp_curr_page").innerHTML = currPage;
	if (pgzp().displayMode == "text") {
		pgzp().updateButtonState((currPage != 1), "prev");
		pgzp().updateButtonState((currPage != pgzp().pages.length), "next")
	}
	else {
		var top = pgzp().screen.getScrollTop();
		var displayPrev = (pgzp().findPos(pgzp().pages[0].posterImgs[0]).y < top);
		pgzp().updateButtonState(displayPrev, "prev");
		var disableNext = (currPage == pgzp().pages.length && currPageObj.posterImgs && pgzp().findPos(currPageObj.posterImgs[currPageObj.posterImgs.length - 1]).y < (top + pgzp().poster_image_margin_top + 1));
		pgzp().updateButtonState(!disableNext, "next")
	}
};
PageZipper.prototype.updateButtonState = function (enable, buttonName) {
	var button = pgzp().doc.getElementById("pgzp_button_" + buttonName);
	var activeClass = "pgzp_button_" + buttonName + "_active";
	var inactiveClass = "pgzp_button_" + buttonName + "_inactive";
	if (enable) {
		pgzp().css.replaceClass(button, inactiveClass, activeClass)
	}
	else {
		pgzp().css.replaceClass(button, activeClass, inactiveClass)
	}
};
PageZipper.prototype.NextLink = function (text, link, alreadyLoaded, isHumanReadableText) {
	this.text = text;
	this.link = link;
	this.syn = "";
	this.isHumanReadableText = (isHumanReadableText == undefined) ? true : isHumanReadableText;
	this.isVisibleText = false;
	this.alreadyLoaded = alreadyLoaded;
	this.url = link.href;
	this.finalScore = null;
	this.trialScores = {};
	this.addScore = function (trialName, score, isNormalized) {
		var normalizedKey = isNormalized ? "normalizedScore" : "unnormalizedScore";
		if (!this.trialScores[trialName]) {
			this.trialScores[trialName] = {}
		}
		this.trialScores[trialName][normalizedKey] = score
	};
	this.getScore = function (trialName, isNormalized) {
		if (isNormalized && pgzp().trials[trialName].noNormailization) {
			isNormalized = false
		}
		var normalizedKey = isNormalized ? "normalizedScore" : "unnormalizedScore";
		return this.trialScores[trialName][normalizedKey]
	};
	this.calculateTotalScore = function () {
		this.finalScore = 0;
		if (pgzp().debug) {
			var debugStr = "Calculate Final Score: " + this.text + ": " + this.url
		}
		for (var trial in this.trialScores) {
			if (pgzp().trials.hasOwnProperty(trial)) {
				var nScore = this.getScore(trial, true);
				var weight = pgzp().trials[trial].weight;
				this.finalScore += nScore * weight;
				if (pgzp().debug) {
					debugStr += "\n\t" + trial + "\t\t\t" + nScore + "\tx\t" + weight + "\t=\t" + (nScore * weight)
				}
			}
		}
		if (pgzp().debug) {
			pgzp().log(debugStr + "\nFinal Score:\t" + this.finalScore)
		}
		return this.finalScore
	};
	this.isSynNumber = function () {
		return pgzp().isNumber(this.syn)
	}
};
PageZipper.prototype.trials = {
	contains_next_syn: {
		doScore: function (nextLink) {
			var i, currWord, score = 0;
			for (i = 0; i < pgzp().nextSynonyms.length; i++) {
				currWord = pgzp().nextSynonyms[i];
				if (nextLink.text.toLowerCase().indexOf(currWord.syn) >= 0) {
					if (currWord.humanReadableOnly) {
						if (!nextLink.isHumanReadableText || nextLink.text.toLowerCase().indexOf("comment") >= 0) {
							continue
						}
					}
					if (currWord.syn != "next" && !pgzp().isStandaloneWord(currWord.syn, nextLink.text, nextLink.isHumanReadableText)) {
						continue
					}
					if (currWord.pageBar && !nextLink.isPageBar) {
						continue
					}
					if (currWord.weight >= score) {
						score = currWord.weight;
						nextLink.syn = currWord.syn
					}
				}
				else {
					if (!currWord.humanReadableOnly && nextLink.url.toLowerCase().indexOf(currWord.syn) >= 0) {
						if (!pgzp().isStandaloneWord(currWord.syn, nextLink.url, false)) {
							continue
						}
						if (currWord.weight >= score) {
							score = currWord.weight;
							nextLink.syn = currWord.syn
						}
					}
				}
			}
			return score
		},
		weight: 100,
		noNormailization: true
	},
	url_similarity: {
		doScore: function (nextLink) {
			var lastUrl, currUrl, shorter, longer, score = 0,
				notMatchingPos = -1,
				i;
			lastUrl = pgzp().pages[pgzp().pages.length - 1].url;
			currUrl = nextLink.url;
			if (lastUrl.length <= currUrl.length) {
				shorter = lastUrl;
				longer = currUrl
			}
			else {
				shorter = currUrl;
				longer = lastUrl
			}
			score = shorter.length - longer.length;
			for (i = 0; i < shorter.length; i++) {
				if (shorter.charAt(i) == longer.charAt(i)) {
					score++
				}
				else {
					score--;
					if (notMatchingPos < 0) {
						notMatchingPos = i
					}
				}
			}
			if (notMatchingPos > 0 && pgzp().isNumber(longer.charAt(notMatchingPos)) && pgzp().isNumber(shorter.charAt(notMatchingPos)) && (Math.abs(pgzp().getNumberAtPos(shorter, notMatchingPos) - pgzp().getNumberAtPos(longer, notMatchingPos)) == 1)) {
				score += 100
			}
			return score
		},
		weight: 70
	},
	duplicate_text: {
		doScore: function (nextLink) {
			var score = 100;
			if (pgzp().linkTextIndex[nextLink.text] && pgzp().linkTextIndex[nextLink.text].length > 0) {
				score = score - (pgzp().linkTextIndex[nextLink.text].length - 1) * 20
			}
			return score
		},
		weight: 60
	},
	url_ends_in_number: {
		doScore: function (nextLink) {
			var results = nextLink.url.match(/^.*?(\d+)(\/+|\.\w+)?$/);
			if (results && (parseInt(results[1], 10) < 99)) {
				return 100
			}
			else {
				return 0
			}
		},
		weight: 20
	},
	begins_or_ends_with_next_syn: {
		doScore: function (nextLink) {
			if (nextLink.syn && (pgzp().startsWith(nextLink.syn, nextLink.text.toLowerCase()) || pgzp().endsWith(nextLink.syn, nextLink.text.toLowerCase()))) {
				return 100
			}
			else {
				return 0
			}
		},
		weight: 20
	},
	text_size: {
		doScore: function (nextLink) {
			return Math.floor((nextLink.link.offsetWidth * nextLink.link.offsetHeight) / nextLink.text.length)
		},
		weight: 10
	},
	chars_in_text: {
		doScore: function (nextLink) {
			return nextLink.text.length * -1
		},
		weight: 10
	}
};
PageZipper.prototype.getNextLink = function (body) {
	var allNextLinks = pgzp().getAllNextLinks(body);
	var pageBarInfo = pgzp().getCurrentPageNumberFromPageBar(allNextLinks);
	pgzp().log("looking for page #: " + (pageBarInfo[0] + 1) + " w/confidence: " + pageBarInfo[1]);
	pgzp().nextSynonyms[pgzp().nextSynonyms.length - 1].syn = (pageBarInfo[0] + 1) + "";
	pgzp().nextSynonyms[pgzp().nextSynonyms.length - 1].weight = pageBarInfo[1];
	pgzp().linkTextIndex = pgzp().indexDuplicateLinks(allNextLinks);
	pgzp().filter(allNextLinks, function (link) {
		return link.alreadyLoaded
	});
	pgzp().scoreLinks(allNextLinks);
	pgzp().normalizeLinks(allNextLinks);
	if (allNextLinks.length <= 0) {
		return null
	}
	var highestLink = pgzp().getHighestTotalScore(allNextLinks);
	if (pgzp().pages.length > 1 && !pgzp().pages[0].nextLink.isSynNumber() && !highestLink.isSynNumber() && pgzp().pages[0].nextLink.syn != highestLink.syn) {
		return null
	}
	return highestLink
};
PageZipper.prototype.scoreLinks = function (allNextLinks) {
	if (pgzp().debug) {
		var debugMsg = ""
	}
	for (var trial in pgzp().trials) {
		if (pgzp().trials.hasOwnProperty(trial)) {
			for (var i = 0; i < allNextLinks.length; i++) {
				allNextLinks[i].addScore(trial, pgzp().trials[trial].doScore(allNextLinks[i]));
				if (pgzp().debug) {
					debugMsg += "\nScore " + trial + " " + allNextLinks[i].text + ": " + allNextLinks[i].getScore(trial)
				}
				if (trial == "contains_next_syn" && allNextLinks[i].getScore("contains_next_syn") <= 0) {
					allNextLinks.splice(i, 1);
					i--
				}
			}
		}
	}
	if (pgzp().debug) {
		pgzp().log(debugMsg)
	}
};
PageZipper.prototype.normalizeLinks = function (allLinks) {
	for (var trial in pgzp().trials) {
		if (pgzp().trials.hasOwnProperty(trial) && !pgzp().trials[trial].noNormailization) {
			pgzp().normalizeTrialSet(trial, allLinks)
		}
	}
};
PageZipper.prototype.normalizeTrialSet = function (trialName, allLinks) {
	var highest, lowest = null;
	for (var i = 0; i < allLinks.length; i++) {
		var score = allLinks[i].getScore(trialName);
		if (highest == null || score > highest) {
			highest = score
		}
		if (lowest == null || score < lowest) {
			lowest = score
		}
	}
	if (pgzp().debug) {
		var debugMsg = "Normalizing Trial Set: " + trialName
	}
	var curve = (highest == lowest) ? 0 : (100 / (highest - lowest));
	for (var i = 0; i < allLinks.length; i++) {
		var score = allLinks[i].getScore(trialName);
		var nScore = Math.floor((score - lowest) * curve);
		allLinks[i].addScore(trialName, nScore, true);
		if (pgzp().debug) {
			debugMsg += "\nNScore " + i + ": " + allLinks[i].text + ": score: " + score + " curve: " + curve + " higest: " + highest + " lowest: " + lowest + " nscore: " + nScore
		}
	}
	if (pgzp().debug) {
		pgzp().log(debugMsg)
	}
};
PageZipper.prototype.getHighestTotalScore = function (allNextLinks) {
	var highestScoringLink = null;
	for (var i = 0; i < allNextLinks.length; i++) {
		var score = allNextLinks[i].calculateTotalScore();
		if (highestScoringLink == null || score >= highestScoringLink.finalScore) {
			highestScoringLink = allNextLinks[i]
		}
	}
	if (pgzp().debug) {
		var debugMsg = "Final Score " + allNextLinks.length;
		allNextLinks.sort(function (a, b) {
			return b.finalScore - a.finalScore
		});
		for (i = 0; i < allNextLinks.length; i++) {
			debugMsg += "\n" + allNextLinks[i].finalScore + ": " + allNextLinks[i].text + ": " + allNextLinks[i].url
		}
		pgzp().log(debugMsg)
	}
	return highestScoringLink
};
PageZipper.prototype.getAllNextLinks = function (body) {
	var allNextLinks = [];
	var links = body.getElementsByTagName("a");
	var pageUrl = pgzp().getUrlWOutAnchors(pgzp().pages[pgzp().pages.length - 1].url);
	for (var i = 0; i < links.length; i++) {
		if (pgzp().getDomain(links[i].href) == pgzp().currDomain && (links[i].href.indexOf("#") < 0 || pageUrl != pgzp().getUrlWOutAnchors(links[i].href))) {
			pgzp().addLinkComponents(links[i], allNextLinks, pgzp().contains(pgzp().url_list, links[i].href))
		}
	}
	return allNextLinks
};
PageZipper.prototype.addLinkComponents = function (link, allNextLinks, alreadyLoaded) {
	var NextLink = pgzp().NextLink;
	var search = function (rootNode) {
		for (var i = 0; i < rootNode.childNodes.length; i++) {
			var curr = rootNode.childNodes[i];
			if (curr.nodeType == Node.TEXT_NODE && curr.nodeValue && pgzp().strip(curr.nodeValue).length > 0) {
				var nl = new NextLink(curr.nodeValue, link, alreadyLoaded);
				nl.isVisibleText = true;
				allNextLinks.push(nl)
			}
			else {
				if (curr.nodeType == Node.ELEMENT_NODE && curr.tagName.toLowerCase() == "img") {
					if (curr.alt) {
						allNextLinks.push(new NextLink(curr.alt, link, alreadyLoaded))
					}
					if (curr.title) {
						allNextLinks.push(new NextLink(curr.title, link, alreadyLoaded))
					}
					if (curr.src) {
						allNextLinks.push(new NextLink(curr.src, link, alreadyLoaded, false))
					}
				}
				else {
					search(curr)
				}
			}
		}
	};
	if (link.title) {
		allNextLinks.push(new NextLink(link.title, link))
	}
	if (link.alt) {
		allNextLinks.push(new NextLink(link.alt, link))
	}
	search(link)
};
PageZipper.prototype.getCurrentPageNumberFromPageBar = function (allNextLinks) {
	var allSequences = [],
		i = 0,
		currSeq = [],
		currNextLink, pageBar, pageBarScore = 0,
		pageNum, tmpPageBarScore;
	var currPageUrl = pgzp().pages[pgzp().pages.length - 1].url;
	for (i = 0; i < allNextLinks.length; i++) {
		currNextLink = allNextLinks[i];
		if (currNextLink.isVisibleText) {
			if (pgzp().isNumber(currNextLink.text)) {
				pageNum = parseInt(currNextLink.text, 10);
				if (pageNum >= 0 && pageNum < 1000) {
					currNextLink.pageNum = pageNum;
					currSeq.push(currNextLink)
				}
			}
			else {
				if (currSeq.length > 0) {
					allSequences.push(currSeq);
					currSeq = []
				}
			}
		}
	}
	if (currSeq.length > 0) {
		allSequences.push(currSeq)
	}
	for (i = 0; i < allSequences.length; i++) {
		tmpPageBarScore = pgzp().__scorePageBar(allSequences[i]);
		if (tmpPageBarScore >= pageBarScore) {
			pageBarScore = tmpPageBarScore;
			pageBar = allSequences[i]
		}
	}
	if (!pageBar) {
		return [-1, 0]
	}
	pageBar.sort(function (a, b) {
		return a.pageNum - b.pageNum
	});
	pgzp().logList(pageBar, "indexes ordered by size", "#{o.pageNum}\t#{o.text}");
	for (i = 0; i < pageBar.length; i++) {
		pageBar[i].isPageBar = true
	}
	for (i = 0; i < pageBar.length; i++) {
		if (pageBar[i].url == currPageUrl) {
			return [pageBar[i].pageNum, 120]
		}
	}
	if (pageBar.length >= 2) {
		var currPageNum, prevPageNum = pageBar[0].pageNum;
		for (i = 1; i < pageBar.length; i++) {
			currPageNum = pageBar[i].pageNum;
			if (Math.abs(currPageNum - prevPageNum) == 2) {
				return [currPageNum - 1, 120]
			}
			else {
				prevPageNum = currPageNum
			}
		}
	}
	if (pageBar[0].pageNum == 2) {
		return [1, 30]
	}
	if (pageBar[0].pageNum == 1) {
		return [0, 30]
	}
	return [pageBar[pageBar.length - 1].pageNum, 20]
};
PageZipper.prototype.__scorePageBar = function (pageBar) {
	var similarityScore = pgzp().trials.url_similarity.doScore(pageBar[0]);
	var totalScore = pageBar.length + (similarityScore / 20);
	pgzp().log("page bar length: " + pageBar.length + " sim score: " + similarityScore + " total score: " + totalScore);
	return totalScore
};
PageZipper.prototype.indexDuplicateLinks = function (allNextLinks) {
	var textIndex = {};
	var currLink;
	for (var i = 0; i < allNextLinks.length; i++) {
		currLink = allNextLinks[i];
		if (textIndex[currLink.text]) {
			if (!pgzp().contains(textIndex[currLink.text], currLink.url)) {
				textIndex[currLink.text].push(currLink.url)
			}
		}
		else {
			textIndex[currLink.text] = [currLink.url]
		}
	}
	return textIndex
};
PageZipper.prototype.strip = function (str) {
	return str.replace(/^\s+/, "").replace(/\s+$/, "")
};
PageZipper.prototype.startsWith = function (pattern, str) {
	return str.indexOf(pattern) === 0
};
PageZipper.prototype.endsWith = function (pattern, str) {
	var d = str.length - pattern.length;
	return d >= 0 && str.lastIndexOf(pattern) === d
};
PageZipper.prototype.log = function (html, override) {
	if (pgzp().debug || override) {
		if (pgzp().win.console) {
			pgzp().win.console.log(html);
			return
		}
		var div = pgzp().doc.createElement("textarea");
		pgzp().doc.body.appendChild(div);
		div.value = html
	}
};
PageZipper.prototype.logList = function (list, initialStr, listStr) {
	var interpolate = function (s, o) {
		return s.replace(/\#\{([^}]+)\}/g, function (match, exp) {
			return eval(exp)
		})
	};
	for (var i = 0; i < list.length; i++) {
		initialStr += "\n" + interpolate(listStr, list[i])
	}
	pgzp().log(initialStr)
};
PageZipper.prototype.captureEvent = function (event) {
	if (!event) {
		event = pgzp().win.event
	}
	return event
};
PageZipper.prototype.noBubble = function (event) {
	if (event) {
		event.cancelBubble = true;
		if (event.stopPropagation) {
			event.stopPropagation()
		}
		event.returnValue = false
	}
	return event
};
PageZipper.prototype.getRemaningBufferSize = function () {
	var left = pgzp().screen.getDocumentHeight() - pgzp().screen.getScrollTop() - pgzp().screen.getViewportHeight();
	if (left < 0) {
		return 0
	}
	return Math.floor(left)
};
PageZipper.prototype.findPos = function (obj) {
	var curleft = 0,
		curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop
		} while (obj = obj.offsetParent)
	}
	return {
		x: curleft,
		y: curtop
	}
};
PageZipper.prototype.isNumber = function (str) {
	return str && (typeof (str) == "number" || (typeof (str) == "string" && (str.search(/^\d+$/) >= 0)))
};
PageZipper.prototype.getDomain = function (url) {
	var hna = url.match(/^http\:\/\/([\S]+?\.\w+)(\/.*)?$/i);
	if (hna) {
		var parts = hna[1].split(".");
		if (parts.length > 2) {
			return parts[parts.length - 2] + "." + parts[parts.length - 1]
		}
		return hna[1]
	}
	hna = url.match(/^javascript\:.*$/i);
	if (hna) {
		return null
	}
	return pgzp().currDomain
};
PageZipper.prototype.getUrlWOutAnchors = function (url) {
	if (url.indexOf("#") >= 0) {
		var results = url.match(/(.*?)#.*/);
		if (results.length > 0) {
			return results[1]
		}
	}
	return url
};
PageZipper.prototype.convertToArray = function (a) {
	var b = [];
	for (var i = 0; i < a.length; i++) {
		b.push(a[i])
	}
	return b
};
PageZipper.prototype.filter = function (arr, filter) {
	for (var i = 0; i < arr.length; i++) {
		if (filter(arr[i])) {
			arr.splice(i, 1);
			i--
		}
	}
};
PageZipper.prototype.depthFirstRecursion = function (root, callback) {
	for (var i = 0; i < root.childNodes.length; i++) {
		if (root.childNodes[i].nodeType == 3 || (root.childNodes[i].nodeType == 1 && pgzp().css.getStyle(root.childNodes[i], "display") != "none")) {
			pgzp().depthFirstRecursion(root.childNodes[i], callback)
		}
	}
	callback(root)
};
PageZipper.prototype.addEventListener = function (obj, type, callback) {
	if (document.addEventListener) {
		obj.addEventListener(type, callback, false)
	}
	else {
		obj.attachEvent("on" + type, callback)
	}
};
PageZipper.prototype.removeEventListener = function (obj, type, callback) {
	if (document.removeEventListener) {
		obj.removeEventListener(type, callback, false)
	}
	else {
		obj.detachEvent("on" + type, callback)
	}
};
PageZipper.prototype.contains = function (ar, obj) {
	if (Array.indexOf) {
		return ar.indexOf(obj) != -1
	}
	else {
		for (var i = 0; i < ar.length; i++) {
			if (ar[i] == obj) {
				return true
			}
		}
		return false
	}
};
PageZipper.prototype.getContentType = function () {
	var metas = pgzp().doc.getElementsByTagName("head")[0].getElementsByTagName("meta");
	for (var i = 0; i < metas.length; i++) {
		if (metas[i].getAttribute("http-equiv") && metas[i].getAttribute("http-equiv").toLowerCase() == "content-type" && metas[i].getAttribute("content")) {
			return metas[i].getAttribute("content")
		}
	}
	return null
};
PageZipper.prototype.isStandaloneWord = function (word, text, humanReadable) {
	var delimiter = humanReadable ? "\\s" : "[^a-zA-Z]";
	return new RegExp("^(.*" + delimiter + "+)?" + word + "(" + delimiter + "+.*)?$", "i").test(text)
};
PageZipper.prototype.getNumberAtPos = function (str, pos) {
	var currNum = "" + str.charAt(pos);
	var currPos = pos - 1;
	while (currPos >= 0 && pgzp().isNumber(str.charAt(currPos))) {
		currNum = str.charAt(currPos) + currNum;
		currPos--
	}
	currPos = pos + 1;
	while (currPos < str.length && pgzp().isNumber(str.charAt(currPos))) {
		currNum += str.charAt(currPos);
		currPos++
	}
	return pgzp().isNumber(currNum) ? parseInt(currNum, 10) : -1
};
PageZipper.prototype.jx = {
	http: false,
	format: "text",
	callback: function (data) {},
	error: false,
	getHTTPObject: function () {
		var http = false;
		if (typeof ActiveXObject != "undefined") {
			try {
				http = new ActiveXObject("Msxml2.XMLHTTP")
			}
			catch (e) {
				try {
					http = new ActiveXObject("Microsoft.XMLHTTP")
				}
				catch (E) {
					http = false
				}
			}
		}
		else {
			if (XMLHttpRequest) {
				try {
					http = new XMLHttpRequest()
				}
				catch (e) {
					http = false
				}
			}
		}
		return http
	},
	load: function (url, callback, format) {
		this.init();
		if (!this.http || !url) {
			return
		}
		var contentType = pgzp().getContentType();
		if (this.http.overrideMimeType && contentType) {
			this.http.overrideMimeType(contentType)
		}
		this.callback = callback;
		if (!format) {
			format = "text"
		}
		this.format = format.toLowerCase();
		var ths = this;
		this.http.open("GET", url, true);
		this.http.onreadystatechange = function () {
			if (!ths) {
				return
			}
			var http = ths.http;
			if (http.readyState == 4) {
				if (http.status == 200) {
					var result = "";
					if (http.responseText) {
						result = http.responseText
					}
					if (ths.callback) {
						ths.callback(result)
					}
				}
				else {
					if (ths.error) {
						ths.error(http.status)
					}
				}
			}
		};
		this.http.send(null)
	},
	init: function () {
		this.http = this.getHTTPObject()
	}
};
PageZipper.prototype.zero = function (n) {
	return (!pgzp().defined(n) || isNaN(n)) ? 0 : n
};
PageZipper.prototype.defined = function (o) {
	return (typeof (o) != "undefined")
};
PageZipper.prototype.css = (function () {
	var css = {};
	css.rgb2hex = function (rgbString) {
		if (typeof (rgbString) != "string" || !pgzp().defined(rgbString.match)) {
			return null
		}
		var result = rgbString.match(/^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*/);
		if (result == null) {
			return rgbString
		}
		var rgb = +result[1] << 16 | +result[2] << 8 | +result[3];
		var hex = "";
		var digits = "0123456789abcdef";
		while (rgb != 0) {
			hex = digits.charAt(rgb & 15) + hex;
			rgb >>>= 4
		}
		while (hex.length < 6) {
			hex = "0" + hex
		}
		return "#" + hex
	};
	css.hyphen2camel = function (property) {
		if (!pgzp().defined(property) || property == null) {
			return null
		}
		if (property.indexOf("-") < 0) {
			return property
		}
		var str = "";
		var c = null;
		var l = property.length;
		for (var i = 0; i < l; i++) {
			c = property.charAt(i);
			str += (c != "-") ? c : property.charAt(++i).toUpperCase()
		}
		return str
	};
	css.getStyle = function (o, property) {
		if (o == null) {
			return null
		}
		var val = null;
		var camelProperty = css.hyphen2camel(property);
		if (property == "float") {
			val = css.getStyle(o, "cssFloat");
			if (val == null) {
				val = css.getStyle(o, "styleFloat")
			}
		}
		else {
			if (o.currentStyle && pgzp().defined(o.currentStyle[camelProperty])) {
				val = o.currentStyle[camelProperty]
			}
			else {
				if (pgzp().win.getComputedStyle) {
					val = pgzp().win.getComputedStyle(o, null).getPropertyValue(property)
				}
				else {
					if (o.style && pgzp().defined(o.style[camelProperty])) {
						val = o.style[camelProperty]
					}
				}
			}
		}
		if (/^\s*rgb\s*\(/.test(val)) {
			val = css.rgb2hex(val)
		}
		if (/^#/.test(val)) {
			val = val.toLowerCase()
		}
		return val
	};
	css.setStyle = function (o, property, value) {
		if (o == null || !pgzp().defined(o.style) || !pgzp().defined(property) || property == null || !pgzp().defined(value)) {
			return false
		}
		if (property == "float") {
			o.style.cssFloat = value;
			o.style.styleFloat = value
		}
		else {
			if (property == "opacity") {
				o.style["-moz-opacity"] = value;
				o.style["-khtml-opacity"] = value;
				o.style.opacity = value;
				if (pgzp().defined(o.style.filter)) {
					o.style.filter = "alpha(opacity=" + value * 100 + ")"
				}
			}
			else {
				o.style[css.hyphen2camel(property)] = value
			}
		}
		return true
	};
	css.hasClass = function (obj, className) {
		if (!pgzp().defined(obj) || obj == null || !RegExp) {
			return false
		}
		var re = new RegExp("(^|\\s)" + className + "(\\s|$)");
		if (typeof (obj) == "string") {
			return re.test(obj)
		}
		else {
			if (typeof (obj) == "object" && obj.className) {
				return re.test(obj.className)
			}
		}
		return false
	};
	css.addClass = function (obj, className) {
		if (typeof (obj) != "object" || obj == null || !pgzp().defined(obj.className)) {
			return false
		}
		if (obj.className == null || obj.className == "") {
			obj.className = className;
			return true
		}
		if (pgzp().css.hasClass(obj, className)) {
			return true
		}
		obj.className = obj.className + " " + className;
		return true
	};
	css.removeClass = function (obj, className) {
		if (typeof (obj) != "object" || obj == null || !pgzp().defined(obj.className) || obj.className == null) {
			return false
		}
		if (!pgzp().css.hasClass(obj, className)) {
			return false
		}
		var re = new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		obj.className = obj.className.replace(re, " ");
		return true
	};
	css.replaceClass = function (obj, className, newClassName) {
		if (typeof (obj) != "object" || obj == null || !pgzp().defined(obj.className) || obj.className == null) {
			return false
		}
		pgzp().css.removeClass(obj, className);
		pgzp().css.addClass(obj, newClassName);
		return true
	};
	return css
})();
PageZipper.prototype.screen = (function () {
	var screen = {};
	screen.getBody = function () {
		if (pgzp().doc.body) {
			return pgzp().doc.body
		}
		if (pgzp().doc.getElementsByTagName) {
			var bodies = pgzp().doc.getElementsByTagName("BODY");
			if (bodies != null && bodies.length > 0) {
				return bodies[0]
			}
		}
		return null
	};
	screen.getScrollTop = function () {
		if (pgzp().doc.documentElement && pgzp().defined(pgzp().doc.documentElement.scrollTop) && pgzp().doc.documentElement.scrollTop > 0) {
			return pgzp().doc.documentElement.scrollTop
		}
		if (pgzp().doc.body && pgzp().defined(pgzp().doc.body.scrollTop)) {
			return pgzp().doc.body.scrollTop
		}
		return null
	};
	screen.getDocumentHeight = function () {
		var body = pgzp().screen.getBody();
		var innerHeight = (pgzp().defined(self.innerHeight) && !isNaN(self.innerHeight)) ? self.innerHeight : 0;
		if (pgzp().doc.documentElement && (!pgzp().doc.compatMode || pgzp().doc.compatMode == "CSS1Compat")) {
			var topMargin = parseInt(pgzp().css.getStyle(body, "margin-top"), 10) || 0;
			var bottomMargin = parseInt(pgzp().css.getStyle(body, "margin-bottom"), 10) || 0;
			return Math.max(body.offsetHeight + topMargin + bottomMargin, pgzp().doc.documentElement.clientHeight, pgzp().doc.documentElement.scrollHeight, pgzp().zero(self.innerHeight))
		}
		return Math.max(body.scrollHeight, body.clientHeight, pgzp().zero(self.innerHeight))
	};
	screen.getViewportWidth = function () {
		if (pgzp().doc.documentElement && (!pgzp().doc.compatMode || pgzp().doc.compatMode == "CSS1Compat")) {
			return pgzp().doc.documentElement.clientWidth
		}
		else {
			if (pgzp().doc.compatMode && pgzp().doc.body) {
				return pgzp().doc.body.clientWidth
			}
		}
		return screen.zero(self.innerWidth)
	};
	screen.getViewportHeight = function () {
		if (!pgzp().win.opera && pgzp().doc.documentElement && (!pgzp().doc.compatMode || pgzp().doc.compatMode == "CSS1Compat")) {
			return pgzp().doc.documentElement.clientHeight
		}
		else {
			if (pgzp().doc.compatMode && !pgzp().win.opera && pgzp().doc.body) {
				return pgzp().doc.body.clientHeight
			}
		}
		return pgzp().zero(self.innerHeight)
	};
	return screen
})();

function pgzp() {
	return window._page_zipper_is_bookmarklet ? window.currPgzp : window.content.currPgzp
}

function _pgzpOnTabChange() {
	if (window.content._pgzpTab && window.content._pgzpTab.selected) {
		_pgzpSetButtonStatus(pgzp().is_running)
	}
	else {
		_pgzpSetButtonStatus(false)
	}
}

function _pgzpUnloadPgzp() {
	_pgzpSetButtonStatus(false)
}

function _pgzpSetButtonStatus(active) {
	var pgzpButton = document.getElementById("pagezipper-button");
	pgzpButton.style.listStyleImage = "url('chrome://pagezipper/skin/zipper_24" + (active ? "_green" : "") + ".png')"
}

function _pgzpInitExtension() {
	window.content.currPgzp = new PageZipper();
	pgzp().win = window.content;
	pgzp().doc = pgzp().win.document;
	pgzp().is_extension = true;
	pgzp().media_path = "chrome://pagezipper/skin/";
	pgzp().loadPageZipper();
	gBrowser.tabContainer.onselect = _pgzpOnTabChange;
	window.content._pgzpTab = gBrowser.selectedTab;
	pgzp().addEventListener(pgzp().win, "unload", _pgzpUnloadPgzp)
}

function _pgzpToggleExtension() {
	if (!window.content.currPgzp) {
		_pgzpInitExtension()
	}
	if (pgzp().is_running) {
		pgzp().stopPageZipper();
		_pgzpSetButtonStatus(false)
	}
	else {
		pgzp().runPageZipper();
		_pgzpSetButtonStatus(true)
	}
}

function _pgzpInitBookmarklet() {
	window.currPgzp = new PageZipper();
	pgzp().win = window;
	pgzp().doc = window.document;
	pgzp().is_bookmarklet = true;
	pgzp().media_path = "http://www.printwhatyoulike.com/static/pagezipper/ui/";
	pgzp().loadPageZipper()
}

function _pgzpToggleBookmarklet() {
	if (!pgzp().is_running) {
		pgzp().runPageZipper()
	}
}
if (window._page_zipper_is_bookmarklet) {
	_pgzpInitBookmarklet();
	_pgzpToggleBookmarklet()
}

function pgzp() {
	return window.currPgzp
}

function _pgzpInitPwyl() {
	window.currPgzp = new PageZipper();
	pgzp().win = window;
	pgzp().doc = window.document;
	if (!window.Node) {
		window.Node = {
			ELEMENT_NODE: 1,
			TEXT_NODE: 3
		}
	}
	pgzp().currDomain = pgzp().getDomain(ppw.props.pageUrl);
	pgzp().url_list = [ppw.props.pageUrl];
	var nextPage = pgzp().buildPage(pgzp().doc.body, ppw.props.pageUrl);
	pgzp().pages.push(nextPage);
	nextPage.nextLink = pgzp().getNextLink(nextPage.page);
	if (nextPage.nextLink && nextPage.nextLink.finalScore > 17000) {
		var addNextPageButton = document.getElementById("ppw_add_next_page_button");
		addNextPageButton.style.display = ""
	}
};

function PwylPanel() {
	this.slideRemoveVars = []
}
PwylPanel.prototype.Panel = function (elemId, anchorId) {
	this.anchor = document.getElementById(anchorId);
	this.panelElem = document.getElementById(elemId);
	this.isDisplayed = false;
	this.toggle = function () {
		if (this.isDisplayed) {
			this.hide()
		}
		else {
			var posAnchor = YAHOO.util.Dom.getXY(this.anchor);
			var toolbar = ppw.util.getFirstParentWithClass(this.anchor, "ppw_toolbar_content");
			var scrollY = ppw.editor.getScrollPosition().y;
			var relH = ppw.util.getOffsetHeight(this.anchor, toolbar);
			var absH = relH - ppw.editor.getScrollOffset(toolbar).y + scrollY;
			this.panelElem.style.top = (absH + this.anchor.offsetHeight) + "px";
			this.panelElem.style.left = posAnchor[0] + "px";
			this.panelElem.style.display = "block";
			if ((relH + this.anchor.offsetHeight + this.panelElem.offsetHeight) > YAHOO.util.Dom.getViewportHeight()) {
				if ((relH - this.panelElem.offsetHeight) < 0) {
					this.panelElem.style.top = scrollY + "px"
				}
				else {
					this.panelElem.style.top = (absH - this.panelElem.offsetHeight) + "px"
				}
				this.panelElem.style.left = posAnchor[0] + this.anchor.offsetWidth + "px"
			}
			if ((posAnchor[0] + this.anchor.offsetWidth + this.panelElem.offsetWidth) > YAHOO.util.Dom.getViewportWidth()) {
				this.panelElem.style.left = (posAnchor[0] - this.panelElem.offsetWidth) + "px"
			}
			this.isDisplayed = true
		}
	};
	this.hide = function () {
		this.panelElem.style.display = "none";
		this.isDisplayed = false
	}
};
PwylPanel.prototype.MessagePanel = function (panelId) {
	this.panelElem = document.getElementById(panelId);
	this.isDisplayed = false;
	this.toggle = function () {
		this.isDisplayed ? this.hide() : this.show()
	};
	this.show = function () {
		var lightbox = document.getElementById("ppw_lightbox");
		lightbox.style.left = "0";
		lightbox.style.width = YAHOO.util.Dom.getDocumentWidth() + "px";
		lightbox.style.height = YAHOO.util.Dom.getDocumentHeight() + "px";
		lightbox.style.display = "block";
		this.panelElem.style.display = "block";
		var panelLeft = ((YAHOO.util.Dom.getViewportWidth() - this.panelElem.offsetWidth) / 2) + ppw.editor.getScrollPosition().x;
		var panelTop = ((YAHOO.util.Dom.getViewportHeight() - this.panelElem.offsetHeight) / 2) + ppw.editor.getScrollPosition().y - 50;
		ppw.util.moveElement(this.panelElem, panelLeft, panelTop);
		this.isDisplayed = true
	};
	this.hide = function () {
		this.panelElem.style.display = "none";
		document.getElementById("ppw_lightbox").style.display = "none";
		this.isDisplayed = false;
		ppw.editor.changeCursorStyle("auto")
	}
};
PwylPanel.prototype.IFramePanel = function (url, attachPointId, panelId, regularPanel) {
	var messagePanel, ifr = false;
	this.displaying = false;
	this.toggle = function () {
		this.displaying ? this.hide() : this.show()
	}, this.show = function () {
		ifr = document.createElement("iframe");
		ifr.src = url;
		document.getElementById(attachPointId).appendChild(ifr);
		ifr.style.height = (YAHOO.util.Dom.getViewportHeight() * 0.7) + "px";
		if (regularPanel) {
			messagePanel = new ppw.panel.Panel(panelId, panelId + "_link")
		}
		else {
			messagePanel = new ppw.panel.MessagePanel(panelId)
		}
		messagePanel.toggle();
		this.displaying = true
	}, this.hide = function () {
		ifr.parentNode.removeChild(ifr);
		messagePanel.hide();
		messagePanel = null;
		this.displaying = false
	}
};
PwylPanel.prototype.slideRemove = function (elem) {
	elem.style.overflow = "hidden";
	var l = ppw.panel.slideRemoveVars.length;
	ppw.panel.slideRemoveVars[l] = {};
	ppw.panel.slideRemoveVars[l].elem = elem;
	ppw.panel.slideRemoveVars[l].id = setInterval("ppw.panel._slideRemoveIncrement(" + l + ")", 20)
};
PwylPanel.prototype._slideRemoveIncrement = function (l) {
	var inc = 1;
	var elem = ppw.panel.slideRemoveVars[l].elem;
	if (!elem.style.height) {
		elem.style.height = (elem.offsetHeight - ppw.util.getStyle(elem, "paddingTop") - ppw.util.getStyle(elem, "paddingBottom") - ppw.util.getStyle(elem, "borderTopWidth") - ppw.util.getStyle(elem, "borderBottomWidth")) + "px"
	}
	if (ppw.util.getStyle(elem, "paddingBottom") >= inc) {
		elem.style.paddingBottom = (ppw.util.getStyle(elem, "paddingBottom") - inc) + "px"
	}
	else {
		if (ppw.util.getStyle(elem, "height") >= inc) {
			elem.style.paddingBottom = "0px";
			elem.style.height = (ppw.util.getStyle(elem, "height") - inc) + "px"
		}
		else {
			if (ppw.util.getStyle(elem, "paddingTop") >= inc) {
				elem.style.height = "0px";
				elem.style.paddingTop = (ppw.util.getStyle(elem, "paddingTop") - inc) + "px"
			}
			else {
				clearInterval(ppw.panel.slideRemoveVars[l].id);
				elem.parentNode.removeChild(elem);
				ppw.panel.slideRemoveVars[l] = null
			}
		}
	}
};

function PwylPaths() {
	this.numPages = 1;
	this.overrideBase = null
}
PwylPaths.prototype.getPath = function (elem, alt) {
	return YAHOO.lang.JSON.stringify(ppw.paths.getPathArray(elem))
};
PwylPaths.prototype.getPathArray = function (elem, alt) {
	var fragments = [];
	var currElem, currFrag;
	var base = ppw.paths.getBase(elem);
	currElem = elem;
	while (currElem != base) {
		currFrag = ppw.paths._getPathFragment(currElem, alt);
		fragments.push(currFrag);
		if (ppw.paths._isAbsoluteFragment(currFrag)) {
			break
		}
		currElem = currElem.parentNode;
		alt = false
	}
	fragments.push(ppw.paths.getBasePathFragment(base));
	fragments.reverse();
	return fragments
};
PwylPaths.prototype._getPathFragment = function (elem, alt) {
	var frag = {};
	var par, i, currChild, currTagCount, isUnique = false;
	frag.tag = elem.tagName.toLowerCase();
	if (elem.id && ppw.paths._isIdValid(elem) && alt != true) {
		frag.id = elem.id;
		if (!isUnique) {
			frag.alt = ppw.paths.getPathArray(elem, true)
		}
		isUnique = true
	}
	if (!isUnique) {
		par = elem.parentNode, currTagCount = 0;
		for (i = 0; i < par.childNodes.length; i++) {
			currChild = par.childNodes[i];
			if (currChild == elem) {
				frag.child = currTagCount;
				break
			}
			else {
				if (currChild.tagName == elem.tagName) {
					currTagCount++
				}
			}
		}
	}
	return frag
};
PwylPaths.prototype._isAbsoluteFragment = function (fragment) {
	return ("id" in fragment)
};
PwylPaths.prototype._isIdValid = function (elem) {
	var elemById = document.getElementById(elem.id);
	return (elemById == elem)
};
PwylPaths.prototype.getBasePathFragment = function (base) {
	return {
		tag: base.tagName.toLowerCase(),
		id: base.id
	}
};
PwylPaths.prototype.getElem = function (path) {
	var fragments = YAHOO.lang.JSON.parse(path);
	return ppw.paths.getElemArray(fragments)
};
PwylPaths.prototype.getElemArray = function (fragments) {
	if (fragments.length == 0) {
		return null
	}
	var parentElem = ppw.paths._getBaseElemFromFragment(fragments[0]);
	for (var i = 1; i < fragments.length; i++) {
		if (parentElem == null) {
			return parentElem
		}
		parentElem = ppw.paths._getElemFromFragment(fragments[i], parentElem)
	}
	return parentElem
};
PwylPaths.prototype._getElemFromFragment = function (fragment, root) {
	if (fragment.id) {
		var tmpE = ppw.paths.getElementById(fragment.id, fragment.tag, root);
		if (tmpE == null && fragment.alt) {
			tmpE = ppw.paths.getElemArray(fragment.alt)
		}
		if (tmpE == null && fragment.id.toLowerCase().startsWith("post-")) {
			tmpE = ppw.paths.getPostId(fragment.id, fragment.tag, root)
		}
		return tmpE
	}
	var tagCount = 0,
		currChild;
	for (var i = 0; i < root.childNodes.length; i++) {
		currChild = root.childNodes[i];
		if (currChild.nodeType == Node.ELEMENT_NODE && currChild.tagName.toLowerCase() == fragment.tag.toLowerCase()) {
			if (tagCount == parseInt(fragment.child, 10)) {
				return currChild
			}
			else {
				tagCount++
			}
		}
	}
	return null
};
PwylPaths.prototype._getBaseElemFromFragment = function (fragment) {
	if (ppw.paths.overrideBase) {
		return ppw.paths.overrideBase
	}
	else {
		return document.getElementById(fragment.id)
	}
};
PwylPaths.prototype.getElementById = function (id, tag, root) {
	var elem = document.getElementById(id);
	if (elem && ppw.util.isParent(elem, root)) {
		return elem
	}
	var elems = root.getElementsByTagName(tag.toLowerCase());
	for (var i = 0; i < elems.length; i++) {
		var curr = elems[i];
		if (elems[i].id == id) {
			return elems[i]
		}
	}
	return null
};
PwylPaths.prototype.getPostId = function (id, tag, root) {
	var isPost = function (elem) {
		return (elem.id && elem.id.match(/post-\d+/gi) != null)
	};
	return YAHOO.util.Dom.getElementBy(isPost, tag, root)
};
PwylPaths.prototype.get = function (idOrElem) {
	if (typeof (idOrElem) == "string") {
		return document.getElementById(idOrElem)
	}
	return idOrElem
};
PwylPaths.prototype.getNewPage = function (baseId) {
	var newBase = document.createElement("div");
	newBase.id = (baseId ? baseId : ppw.paths.getNewPageId());
	newBase.className = "ppw_base";
	return newBase
};
PwylPaths.prototype.getNewPageId = function () {
	ppw.paths.numPages++;
	return "ppw_page_" + ppw.paths.numPages
};
PwylPaths.prototype.getBase = function (elem) {
	if (ppw.paths.overrideBase) {
		return ppw.paths.overrideBase
	}
	while (elem != ppw.util.top) {
		if (YAHOO.util.Dom.hasClass(elem, "ppw_base")) {
			return elem
		}
		else {
			elem = elem.parentNode
		}
	}
	return ppw.util.pageTop
};
PwylPaths.prototype.countIsolatedElems = function (base) {
	var count = 0;
	for (var i = 0; i < base.childNodes.length; i++) {
		if (base.childNodes[i].nodeType == Node.ELEMENT_NODE && YAHOO.util.Dom.hasClass(base.childNodes[i], "ppw_isolate")) {
			count++
		}
	}
	return count
};
Array.prototype.each = function (callback) {
	for (var i = 0; i < this.length; i++) {
		callback(this[i])
	}
};
Array.prototype.remove = function (object) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == object) {
			this.splice(i, 1);
			return object
		}
	}
	return false
};
Array.prototype.indexOf = function (object) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == object) {
			return i
		}
	}
	return -1
};
Array.prototype.contains = function (object) {
	return this.indexOf(object) > -1
};
Array.prototype.firstMatch = function (toArray) {
	for (var i = 0; i < this.length; i++) {
		for (var j = 0; j < toArray.length; j++) {
			if (this[i] == toArray[j]) {
				return toArray[j]
			}
		}
	}
};
Array.prototype.between = function (start, end) {
	var reachedStart = false;
	var betweenNodes = [];
	for (var i = 0; i < this.length; i++) {
		if (!reachedStart) {
			if (start == this[i]) {
				reachedStart = true
			}
		}
		else {
			if (this[i] == end) {
				return betweenNodes
			}
			else {
				betweenNodes.push(this[i])
			}
		}
	}
	return betweenNodes
};
Array.prototype.concatArray = function () {
	for (var i = 0; i < arguments.length; i++) {
		for (var j = 0; j < arguments[i].length; j++) {
			this.push(arguments[i][j])
		}
	}
};
String.prototype.camelize = function () {
	var parts = this.split("-"),
		len = parts.length;
	if (len == 1) {
		return parts[0]
	}
	var camelized = this.charAt(0) == "-" ? parts[0].charAt(0).toUpperCase() + parts[0].substring(1) : parts[0];
	for (var i = 1; i < len; i++) {
		camelized += parts[i].charAt(0).toUpperCase() + parts[i].substring(1)
	}
	return camelized
};
String.prototype.startsWith = function (pattern) {
	return this.indexOf(pattern) === 0
};
String.prototype.strip = function () {
	return this.replace(/^\s+/, "").replace(/\s+$/, "")
};
if (!window.console) {
	window.console = {
		log: function (str) {}
	}
}
if (!window.Node) {
	window.Node = new Object();
	Node.ELEMENT_NODE = 1;
	Node.ATTRIBUTE_NODE = 2;
	Node.TEXT_NODE = 3;
	Node.CDATA_SECTION_NODE = 4;
	Node.ENTITY_REFERENCE_NODE = 5;
	Node.ENTITY_NODE = 6;
	Node.PROCESSING_INSTRUCTION_NODE = 7;
	Node.COMMENT_NODE = 8;
	Node.DOCUMENT_NODE = 9;
	Node.DOCUMENT_TYPE_NODE = 10;
	Node.DOCUMENT_FRAGMENT_NODE = 11;
	Node.NOTATION_NODE = 12
};

function PwylSavings() {}
PwylSavings.prototype.recordSavings = function () {
	var modified_doc_height = YAHOO.util.Dom.getDocumentHeight();
	var params = {
		key: ppw.server.id,
		original_height: ppw.ui.orig_doc_height,
		modified_height: modified_doc_height
	};
	if (ppw.props.proAccountId) {
		params.user_id = ppw.props.proAccountId
	}
	ppw.server.ajaxCall("/savings/save", params, null, "get", {
		handler: function (http) {}
	});
	ppw.util.sleep(100)
};

function PwylServer() {
	this.id = ppw.util.generateUniqueId();
	this.url = new this.URLManager(document.URL);
	this.pageUrl = new this.URLManager(ppw.props.pageUrl);
	this.jx = PwylLoadJx();
	this.htmlDelimiter = "--- 941587982 244932647 867248554 ---";
	this.waitingCallbacks = {}
}
PwylServer.prototype.ajaxCall = function (relUrl, params, onSuccess, method, opt) {
	if (!method) {
		method = "get"
	}
	if (ppw.bookmarklet || ppw.print_button) {
		if (method == "get") {
			ppw.server.getViaJs(relUrl, params, onSuccess)
		}
		else {
			ppw.server.postViaForm(relUrl, params, onSuccess)
		}
	}
	else {
		if (opt && opt.forceMultipart) {
			ppw.server.postViaForm(relUrl, params, onSuccess)
		}
		else {
			ppw.server.jx.load(ppw.server.getAbsUrl(relUrl, params), onSuccess, "text", method, opt)
		}
	}
};
PwylServer.prototype.postViaForm = function (relUrl, params, callback, defaultResponse) {
	var url = ppw.server.getAbsUrl(relUrl);
	if (!params) {
		params = {}
	}
	var formHtml = "<form id='ppw_save_data_form' method='post' target='ppw_hidden_frame' enctype='multipart/form-data' charset='utf-8' autocomplete='off'></form>						 <iframe name='ppw_hidden_frame' id='ppw_hidden_frame' onload='ppw.server._postViaForm()'></iframe>";
	if (document.getElementById("ppw_save_data_form_iframe")) {
		ppw.util.removeElement("ppw_save_data_form_iframe")
	}
	var div = document.createElement("div");
	div.id = "ppw_save_data_form_iframe";
	div.innerHTML = formHtml;
	document.getElementById("ppw_dock").appendChild(div);
	if (!ppw.bookmarklet) {
		params.callbackId = ppw.server.waitlistCallback(callback)
	}
	var i, field, form = document.getElementById("ppw_save_data_form");
	form.action = url;
	for (var key in params) {
		field = document.createElement("input");
		field.type = "hidden";
		field.name = key;
		field.value = params[key];
		form.appendChild(field)
	}
	form.submit();
	if (ppw.bookmarklet) {
		callback(defaultResponse)
	}
};
PwylServer.prototype._postViaForm = function () {
	if (ppw.bookmarklet) {
		return
	}
	var ifr = ppw.loader.getIFrame("ppw_hidden_frame");
	var params;
	if (ifr.win.response_loaded) {
		ifr.win.response_loaded = false;
		params = ifr.win.response_args;
		if (params.callbackId) {
			var callback = ppw.server.retrieveCallback(params.callbackId);
			if (callback) {
				callback(params.response, params)
			}
		}
	}
};
PwylServer.prototype.getViaJs = function (relUrl, params, callback) {
	var id = ppw.server.waitlistCallback(callback);
	if (!params) {
		params = {}
	}
	params.callbackId = id;
	params.js = 1;
	var js = document.createElement("script");
	js.setAttribute("type", "text/javascript");
	js.setAttribute("src", ppw.server.getAbsUrl(relUrl, params));
	js.setAttribute("pwyl", "true");
	document.getElementsByTagName("head")[0].appendChild(js)
};
PwylServer.prototype._handleJsResponse = function (id, response, args) {
	if (response) {
		response = response.replace(/&lt;/g, "<");
		response = response.replace(/&gt;/g, ">")
	}
	var callback = ppw.server.retrieveCallback(id);
	if (callback) {
		callback(response, args)
	}
};
PwylServer.prototype.getAbsUrl = function (relUrl, params) {
	if (relUrl.charAt(0) == "/") {
		relUrl = relUrl.slice(1)
	}
	var absUrl = ppw.props.home + relUrl;
	var paramStr = ppw.server.parametersToString(params);
	if (paramStr.length > 0) {
		absUrl += (absUrl.indexOf("?") > -1) ? "&" : "?";
		absUrl += paramStr
	}
	return absUrl
};
PwylServer.prototype.parametersToString = function (params) {
	var isFirst = true;
	var paramsStr = "";
	for (var key in params) {
		if (isFirst) {
			isFirst = false
		}
		else {
			paramsStr += "&"
		}
		paramsStr += key + "=" + params[key]
	}
	return paramsStr
};
PwylServer.prototype.waitlistCallback = function (callback) {
	var curr = new Date().getTime();
	ppw.server.waitingCallbacks[curr] = callback;
	return curr
};
PwylServer.prototype.retrieveCallback = function (id) {
	return ppw.server.waitingCallbacks[id]
};
PwylServer.prototype.URLManager = function (url) {
	this.url = url;
	var hna = this.url.match(/^(http\:\/\/)?([\S]+?)(\/.*)?$/i);
	this.hostName = hna[hna.length - 2];
	this.host = "http://" + this.hostName;
	this.parameters = [];
	this.encodedUrl = "";
	if (this.url.indexOf("?") >= 0) {
		var results = this.url.match(/^.*\?(.*)$/i);
		var pairs = results[1].split("&");
		for (var i = 0; i < pairs.length; i++) {
			var keyValue = pairs[i].split("=");
			this.parameters[keyValue[0]] = keyValue[1]
		}
	}
	this.encodedUrl = encodeURIComponent(this.url)
};

function PwylUI() {
	this.saveVars = [];
	this.proToolbar = null
}
PwylUI.prototype.instantiateUI = function () {
	var buttons = [];
	buttons.concatArray(YAHOO.util.Dom.getElementsByClassName("ppw_fancy_button", null, ppw.util.toolbar));
	buttons.concatArray(YAHOO.util.Dom.getElementsByClassName("ppw_double_button", null, ppw.util.toolbar));
	for (var i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		button.onmouseover = ppw.ui.buttonMouseOver;
		button.onmouseout = ppw.ui.buttonMouseOut;
		button.onmousedown = ppw.ui.buttonMouseDown;
		button.onmouseup = ppw.ui.buttonMouseUp
	}
	var textFields = YAHOO.util.Dom.getElementsByClassName("ppw_toolbar_input_field", "input", ppw.util.toolbar);
	for (var i = 0; i < textFields.length; i++) {
		textFields[i].onfocus = function () {
			ppw.editor.enableKeyboardShortcuts = false
		};
		textFields[i].onblur = function () {
			ppw.editor.enableKeyboardShortcuts = true
		}
	}
	new Image().src = ppw.props.home + "editor/img/button_hover1.jpeg";
	this.addPagePanel = new ppw.panel.Panel("ppw_add_page", "ppw_add_page_link");
	this.newPagePanel = new ppw.panel.Panel("ppw_new_page", "ppw_new_page_link");
	this.saveAsPanel = new ppw.panel.Panel("ppw_save_as", "ppw_save_as_link");
	this.helpPanel = new ppw.panel.Panel("ppw_help", "ppw_help_link");
	this.undoListPanel = new ppw.panel.Panel("ppw_undo_list", "ppw_undo_select_button");
	this.pageHelpPanel = new ppw.panel.IFramePanel(ppw.props.home + "help/page", "ppw_page_help_bd", "ppw_page_help", true);
	this.ecofontHelpPanel = new ppw.panel.MessagePanel("ppw_ecofont_help");
	this.saveChangeSetPanel = new ppw.panel.MessagePanel("ppw_save_change_set");
	this.accountRequiredPanel = ppw.bookmarklet ? new ppw.panel.MessagePanel("ppw_bookmark_login_form") : new ppw.panel.IFramePanel(ppw.props.home + "user_sessions/authorize_frame?source=" + (ppw.bookmarklet ? "bookmarklet" : "toolbar"), "ppw_account_required_bd", "ppw_account_required");
	this.overQuotaPanel = new ppw.panel.IFramePanel(ppw.props.home + "subscriptions/new?source=" + (ppw.bookmarklet ? "bookmarklet" : "toolbar"), "ppw_over_quota_bd", "ppw_over_quota");
	if (ppw.util.onProEditPage()) {
		this.createPageHelpPanel = new ppw.panel.IFramePanel(ppw.props.home + "help/page_from_clips", "ppw_create_page_help_bd", "ppw_create_page_help", true)
	}
	this.completionMessagePanel = new ppw.panel.MessagePanel("ppw_completion_message_panel");
	this.completionMessagePanel.showMessage = function (messageId) {
		var elems = YAHOO.util.Dom.getElementsByClassName("ppw_completion_message_panel_message", "div", "ppw_completion_message_panel");
		for (var i = 0; i < elems.length; i++) {
			elems[i].style.display = "none"
		}
		YAHOO.util.Dom.get(messageId).style.display = "block";
		ppw.ui.completionMessagePanel.show()
	};
	draggableMenu = new YAHOO.util.DD("ppw_selection_commands");
	draggableMenu.setHandleElId("ppw_selection_commands_drag")
};
PwylUI.prototype.buttonMouseOver = function () {
	YAHOO.util.Dom.addClass(this, "ppw_button_onhover")
};
PwylUI.prototype.buttonMouseOut = function () {
	YAHOO.util.Dom.removeClass(this, "ppw_button_onhover");
	YAHOO.util.Dom.removeClass(this, "ppw_button_onclick")
};
PwylUI.prototype.buttonMouseDown = function () {
	YAHOO.util.Dom.addClass(this, "ppw_button_onclick")
};
PwylUI.prototype.buttonMouseUp = function () {
	YAHOO.util.Dom.removeClass(this, "ppw_button_onclick")
};
PwylUI.prototype.addPage = function () {
	ppw.ui.addPageBusy();
	ppw.commands.addPage(document.getElementById("ppw_add_page_url_form_field").value.strip())
};
PwylUI.prototype.printPage = function () {
	ppw.ui.completionMessagePanel.showMessage("ppw_completion_message_panel_print");
	window.print();
	try {
		ppw.savings.recordSavings()
	}
	catch (e) {}
};
PwylUI.prototype.addPageBusy = function () {
	document.getElementById("ppw_add_page_url_form_submit").blur();
	document.getElementById("ppw_add_page_url_form_submit").style.display = "none";
	document.getElementById("ppw_add_page_busy_icon").style.display = "inline"
};
PwylUI.prototype.addPageNormal = function () {
	ppw.ui.addPagePanel.hide();
	ppw.ui.addPagePanel.isVisible = false;
	document.getElementById("ppw_add_page_busy_icon").style.display = "none";
	document.getElementById("ppw_add_page_url_form_submit").style.display = "inline"
};
PwylUI.prototype.setToolbarCloseButton = function () {
	document.getElementById("ppw_close_toolbar").style.display = "block"
};
PwylUI.prototype.updateHelpMenuForMac = function () {
	if (ppw.util.os == "mac") {
		YAHOO.util.Dom.getElementsByClassName("ppw_help_ctrl_z", "span", null, function (el) {
			el.innerHTML = "&#8984; Z"
		});
		YAHOO.util.Dom.getElementsByClassName("ppw_help_ctrl_y", "span", null, function (el) {
			el.innerHTML = "&#8984; Y"
		});
		YAHOO.util.Dom.getElementsByClassName("ppw_help_del", "span", null, function (el) {
			el.innerHTML = "R"
		})
	}
};
PwylUI.prototype.setPageWidth = function () {
	var clipsList = document.getElementById("ppw_clips");
	if (clipsList) {
		var height = (YAHOO.util.Dom.getViewportHeight() - YAHOO.util.Dom.getXY(clipsList)[1]) + "px";
		clipsList.style.setProperty("height", height, "important")
	}
	var topW = YAHOO.util.Dom.getViewportWidth() - 210 - 2 - 0;
	if (ppw.util.onProEditPage()) {
		topW = topW - 210 - 2
	}
	ppw.util.top.style.width = topW + "px"
};
PwylUI.prototype.setBackgroundColor = function () {
	var bgcolor = YAHOO.util.Dom.getStyle(document.body, "backgroundColor");
	ppw.util.pageTop.style.backgroundColor = bgcolor
};
PwylUI.prototype.setOverflow = function () {
	if (YAHOO.util.Dom.getStyle(document.body, "overflow") == "hidden") {
		document.body.style.overflow = "visible"
	}
};
PwylUI.prototype.addFontFace = function () {
	if (ppw.bookmarklet) {
		return
	}
	var cssElem = document.createElement("link");
	cssElem.setAttribute("rel", "stylesheet");
	cssElem.setAttribute("type", "text/css");
	cssElem.setAttribute("pwyl", "true");
	cssElem.setAttribute("href", ppw.props.home + "editor/css/toolbar_all_" + (YAHOO.env.ua.ie ? "ie" : "w3c") + ".css");
	document.getElementsByTagName("head")[0].appendChild(cssElem);
	var opt = document.createElement("option");
	opt.text = "Vera Sans Ecofont";
	opt.value = "Spranq eco sans";
	if (!YAHOO.env.ua.webkit) {
		opt.style.fontFamily = "'Spranq eco sans'"
	}
	var selectM = document.getElementById("ppw_select_font_dropdown");
	try {
		selectM.add(opt, null)
	}
	catch (ex) {
		selectM.add(opt)
	}
};
PwylUI.prototype.trimUrl = function (idOfUrl) {
	var elem = document.getElementById(idOfUrl);
	elem.value = elem.value.strip();
	return true
};
PwylUI.prototype.removeFocus = function () {
	var inputs = ppw.util.top.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		try {
			inputs[i].blur()
		}
		catch (e) {}
	}
};
PwylUI.prototype.setEnableUndoRedo = function (hasCommandsOnStack, hasUndoCommandsOnStack) {
	var undo = document.getElementById("ppw_undo_button");
	var undoSelect = document.getElementById("ppw_undo_select_button");
	var redo = document.getElementById("ppw_redo_button");
	var saveChangeSetLink = document.getElementById("ppw_save_to_changeset_link");
	var saveChangeSetWrapper = document.getElementById("ppw_save_to_changeset_link_wrapper");
	var changeSetSelection = document.getElementById("ppw_select_change_set_dropdown");
	if (hasCommandsOnStack) {
		undo.disabled = false;
		undoSelect.disabled = false;
		saveChangeSetLink.href = "javascript:ppw.auth.requiresAuthentication(ppw.ui.showSaveChangeSetForm)";
		saveChangeSetWrapper.className = saveChangeSetWrapper.className.replace(/disabled/g, "");
		changeSetSelection.disabled = true
	}
	else {
		undo.onmouseout();
		undo.disabled = true;
		undoSelect.onmouseout();
		undoSelect.disabled = true;
		saveChangeSetLink.href = "javascript:void(0)";
		if (saveChangeSetWrapper.className.indexOf("disabled") == -1) {
			saveChangeSetWrapper.className += " disabled"
		}
		changeSetSelection.disabled = false
	}
	if (hasUndoCommandsOnStack) {
		redo.disabled = false
	}
	else {
		redo.onmouseout();
		redo.disabled = true
	}
};
PwylUI.prototype.enableOrDisableButton = function (button_id, enable) {
	var button = document.getElementById(button_id);
	button.onmouseout();
	button.disabled = !enable
};
PwylUI.prototype.toggleButtons = function (to_check_button_id, to_uncheck_button_id) {
	ppw.util.$(to_uncheck_button_id).checked = "";
	ppw.util.$(to_check_button_id).checked = "checked"
};
PwylUI.prototype.disableRemoveBackground = function () {
	var hide_button = document.getElementById("ppw_background_hide");
	hide_button.onclick = null;
	hide_button.checked = "checked";
	var show_button = document.getElementById("ppw_background_show");
	show_button.checked = ""
};
PwylUI.prototype.enableRemoveBackground = function () {
	var hide_button = document.getElementById("ppw_background_hide");
	hide_button.onclick = function (event) {
		ppw.util.cursorWrapper("ppw.commands.removeBackground()")
	};
	hide_button.checked = "";
	var show_button = document.getElementById("ppw_background_show");
	show_button.checked = "checked"
};
PwylUI.prototype.disableRemoveImages = function () {
	var hide_button = document.getElementById("ppw_images_hide");
	hide_button.onclick = null;
	hide_button.checked = "checked";
	var show_button = document.getElementById("ppw_images_show");
	show_button.checked = ""
};
PwylUI.prototype.enableRemoveImages = function () {
	var hide_button = document.getElementById("ppw_images_hide");
	hide_button.onclick = function (event) {
		ppw.util.cursorWrapper("ppw.commands.removeImages()")
	};
	hide_button.checked = "";
	var show_button = document.getElementById("ppw_images_show");
	show_button.checked = "checked"
};
PwylUI.prototype.updateAddPageForm = function () {
	var applyChanges = document.getElementById("ppw_add_page_apply_changes");
	var applyChangesCheckbox = document.getElementById("ppw_add_page_apply_changes_checkbox");
	var url = document.getElementById("ppw_add_page_url_form_field").value;
	var urlHost = "";
	try {
		urlHost = new ppw.server.URLManager(url).host
	}
	catch (e) {}
	if (url && (ppw.server.pageUrl.host == urlHost)) {
		applyChanges.style.display = "inline";
		applyChangesCheckbox.disabled = false
	}
	else {
		applyChanges.style.display = "none";
		applyChangesCheckbox.disabled = true
	}
};
PwylUI.prototype.closeAllPanels = function () {
	var panels = [ppw.ui.addPagePanel, ppw.ui.newPagePanel, ppw.ui.saveAsPanel, ppw.ui.helpPanel, ppw.ui.undoListPanel, ppw.ui.pageHelpPanel, ppw.ui.ecofontHelpPanel, ppw.ui.changeSetHelpPanel, ppw.ui.accountRequiredPanel, ppw.ui.overQuotaPanel, ppw.ui.createPageHelpPanel, ppw.ui.completionMessagePanel];
	for (var i = 0; i < panels.length; i++) {
		if (panels[i] && panels[i].isDisplayed) {
			panels[i].hide()
		}
	}
};
PwylUI.prototype.addToUndoList = function (command) {
	var undoChangeLink = document.createElement("a");
	var changeIndex = ppw.changeset.doStack.length - 1;
	undoChangeLink.href = "javascript:ppw.changeset.undo(" + changeIndex + ")";
	undoChangeLink.target = "_self";
	undoChangeLink.innerHTML = command.name;
	var undoList = document.getElementById("ppw_undo_list");
	if (undoList.childNodes.length == 0) {
		undoList.appendChild(undoChangeLink)
	}
	else {
		undoList.insertBefore(undoChangeLink, undoList.firstChild)
	}
};
PwylUI.prototype.removeFromUndoList = function (changeId) {
	if (changeId) {
		changeId = ppw.changeset.doStack.length - changeId
	}
	changeId = changeId || 0;
	var undoList = document.getElementById("ppw_undo_list");
	var undoListElements = ppw.util.toArray(undoList.getElementsByTagName("a"));
	undoList.removeChild(undoListElements[changeId])
};
PwylUI.prototype.addToChangeList = function (command) {
	var newChange = document.createElement("li");
	var newChangeWrapper = document.createElement("span");
	newChangeWrapper.innerHTML = command.name;
	newChange.appendChild(newChangeWrapper);
	if (ppw.props.editChangeSet || ppw.props.editPrintLayout) {
		var changesList = document.getElementById("ppw_edit_change_set_changes");
		changesList.appendChild(newChange)
	}
};
PwylUI.prototype.removeFromChangeList = function (changeId) {
	var changesList = document.getElementById("ppw_edit_change_set_changes");
	var changesListElements = ppw.util.toArray(changesList.getElementsByTagName("li"));
	changeId = changeId || (changesListElements.length - 1);
	changesList.removeChild(changesListElements[changeId])
};
PwylUI.prototype.initializeProAccount = function () {
	if (ppw.props.editChangeSet) {
		var changeSetId = ppw.props.editChangeSet;
		ppw.acs.applyChangeSetForEditing(changeSetId)
	}
	else {
		if (ppw.props.editPrintLayout && typeof (ppw.props.editPrintLayout) == "number") {
			ppw.acs.applyChangeSetForEditing(ppw.props.editPrintLayout)
		}
		else {
			if (ppw.props.pageFromClips) {
				var clips = YAHOO.util.Dom.getElementsByClassName("ppw_clip", "div");
				for (i = 0; i < clips.length; i++) {
					var clip = clips[i];
					clip.onmousedown = ppw.pro.startDragOnClone
				}
			}
			else {
				if (ppw.props.proAccountId) {
					ppw.acs.getChangeSetsForUrl()
				}
				else {
					ppw.ui.hideChangeSetDropdown()
				}
			}
		}
	}
	if (ppw.props.proAccountId) {
		var logoLink = document.getElementById("ppw_logo_link");
		logoLink.href = logoLink.href + "dashboard"
	}
};
PwylUI.prototype.hideChangeSetDropdown = function () {
	var applyChangeSet = document.getElementById("ppw_apply_change_set");
	applyChangeSet.style.display = "none"
};
PwylUI.prototype.showSaveChangeSetForm = function () {
	if (ppw.props.proAccountId) {
		if (ppw.acs.appliedChangeSet) {
			ppw.acs.saveChangeSet(ppw.acs.appliedChangeSet)
		}
		else {
			var changeSetName = document.getElementById("ppw_change_set_name");
			if (changeSetName.value.length == 0) {
				var title = document.title.replace("PrintWhatYouLike on ", "");
				if (ppw.server.newChangeSetNum) {
					title += " " + ppw.server.newChangeSetNum
				}
				changeSetName.value = title
			}
			ppw.ui.saveChangeSetPanel.toggle()
		}
	}
	else {
		ppw.ui.accountRequiredPanel.toggle()
	}
};
PwylUI.prototype.checkSaveChangeSetForm = function () {
	var changeSetName = document.getElementById((ppw.props.editChangeSet ? "ppw_edit_change_set_name" : "ppw_change_set_name"));
	if (changeSetName.value.length == 0) {
		alert("Please enter the name of the change set.");
		return false
	}
	var key = null,
		changeSetAutoApply = null,
		autoApply = "0";
	if (ppw.props.editChangeSet) {
		key = document.getElementById("ppw_edit_change_set_key").value;
		changeSetAutoApply = document.getElementById("ppw_edit_change_set_auto_apply_yes")
	}
	else {
		changeSetAutoApply = document.getElementById("ppw_change_set_auto_apply");
		ppw.ui.saveChangeSetPanel.toggle()
	}
	if (changeSetAutoApply.checked) {
		autoApply = "1"
	}
	ppw.acs.saveChangeSet(key, changeSetName.value, autoApply);
	return false
};
PwylUI.prototype.addInfoMessage = function (messageStr, alignRight) {
	var m = document.createElement("div");
	m.className = "ppw_info_message";
	m.innerHTML = messageStr;
	document.getElementById("ppw_info_panel").appendChild(m);
	if (alignRight) {
		var infoPanel = document.getElementById("ppw_info_panel");
		infoPanel.style.left = (YAHOO.util.Dom.getViewportWidth() - infoPanel.offsetWidth - 20) + "px";
		m.style.cssFloat = "right";
		m.style.styleFloat = "right"
	}
	var l = ppw.ui.saveVars.length;
	ppw.ui.saveVars[l] = m;
	return l
};
PwylUI.prototype.clearInfoMessage = function (l, fast) {
	if (fast) {
		ppw.util.removeElement(ppw.ui.saveVars[l])
	}
	else {
		ppw.panel.slideRemove(ppw.ui.saveVars[l])
	}
};
PwylUI.prototype.setSelfDestructingInfoMessage = function (msg, timeout) {
	if (!timeout) {
		timeout = 3000
	}
	var l = ppw.ui.addInfoMessage(msg);
	setTimeout("ppw.ui.clearInfoMessage(" + l + ");", timeout)
};
PwylUI.prototype.displayBookmarkletMessage = function () {
	var numVisits = YAHOO.util.Cookie.get("numVisits", Number);
	if (numVisits == null) {
		YAHOO.util.Cookie.set("numVisits", "1", {
			expires: new Date("January 1, 2025")
		})
	}
	else {
		numVisits += 1;
		if (numVisits == 3) {
			var bkmtMessage = document.getElementById("ppw_try_bkmt_message");
			bkmtMessage.style.display = ""
		}
		YAHOO.util.Cookie.set("numVisits", numVisits.toString(), {
			expires: new Date("January 1, 2025")
		})
	}
};
PwylUI.prototype.hideBookmarkletMessage = function () {
	var bkmtMessage = document.getElementById("ppw_try_bkmt_message");
	bkmtMessage.style.display = "none"
};

function PwylUtil() {
	this.topId = "ppw_page_top";
	this.pageTopId = "ppw_page_body";
	this.toolbarId = "ppw_toolbar";
	this.elemsExcludedFromDomPath = {
		script: 1
	};
	this.os = "win"
}
PwylUtil.prototype.initializeEditorComponents = function () {
	this.top = document.getElementById(this.topId);
	this.pageTop = document.getElementById(this.pageTopId);
	this.toolbar = document.getElementById(this.toolbarId);
	this.toolbarContent = document.getElementById("ppw_toolbar_content");
	if (navigator.appVersion.indexOf("Win") > -1) {
		this.os = "win"
	}
	if (navigator.appVersion.indexOf("Mac") > -1) {
		this.os = "mac"
	}
	if (navigator.appVersion.indexOf("X11") > -1 || navigator.appVersion.indexOf("Linux") > -1) {
		this.os = "linix"
	}
};
PwylUtil.prototype.toArray = function (nodeList) {
	var a = [];
	if (!nodeList) {
		return a
	}
	for (var i = 0; i < nodeList.length; i++) {
		a.push(nodeList[i])
	}
	return a
};
PwylUtil.prototype.getPosition = function (elem) {
	var leftX = 0;
	var leftY = 0;
	if (elem.offsetParent) {
		while (elem.offsetParent) {
			leftX += elem.offsetLeft;
			leftY += elem.offsetTop;
			elem = elem.offsetParent
		}
	}
	else {
		if (elem.x) {
			leftX += elem.x;
			leftY += elem.y
		}
	}
	return {
		x: leftX,
		y: leftY
	}
};
PwylUtil.prototype.moveElement = function (elem, x, y) {
	if (YAHOO.env.ua.gecko >= 1.9) {
		elem.style.left = x + "px";
		elem.style.top = y + "px"
	}
	else {
		YAHOO.util.Dom.setXY(elem, [x, y])
	}
};
PwylUtil.prototype.getOffsetHeight = function (elem, parent) {
	var currOffset = 0,
		e = elem;
	while (e != null && e != parent && e != document.body) {
		currOffset += e.offsetTop;
		e = e.offsetParent
	}
	return currOffset
};
PwylUtil.prototype.getFirstParentWithClass = function (elem, parentClass) {
	var e = elem;
	while (e != document.body) {
		if (YAHOO.util.Dom.hasClass(e, parentClass)) {
			return e
		}
		e = e.offsetParent
	}
	return null
};
PwylUtil.prototype.getElementAndSubelements = function (idOrElem, includeSubelements) {
	var elem = (typeof (idOrElem) == "string") ? ppw.paths.get(idOrElem) : idOrElem;
	var elems = [elem];
	if (elem.nodeType == Node.ELEMENT_NODE && (includeSubelements == undefined || includeSubelements)) {
		elems.concatArray(elem.getElementsByTagName("*"))
	}
	return elems
};
PwylUtil.prototype.areSiblings = function (node1, node2) {
	return node1 && node2 && ppw.util.toArray(node1.parentNode.childNodes).contains(node2)
};
PwylUtil.prototype.toString = function (obj) {
	if (typeof (obj) == "object") {
		var str = "{\n";
		for (var key in obj) {
			str += "\n" + key + "= " + obj[key]
		}
		return str + "\n}"
	}
	return obj + ""
};
PwylUtil.prototype.getChildElements = function (elem) {
	var children = [];
	for (var i = 0; i < elem.childNodes.length; i++) {
		if (elem.childNodes[i].nodeType == Node.ELEMENT_NODE) {
			children.push(elem.childNodes[i])
		}
	}
	return children
};
PwylUtil.prototype.depthFirstRecursion = function (rootNode, callback, args, onlyVisible, cloneNode) {
	for (var i = 0; i < rootNode.childNodes.length; i++) {
		if (rootNode.childNodes[i].nodeType == Node.ELEMENT_NODE) {
			if (onlyVisible && (YAHOO.util.Dom.getStyle(rootNode.childNodes[i], "display") == "none" || YAHOO.util.Dom.getStyle(rootNode.childNodes[i], "visible") == "hidden")) {
				continue
			}
			ppw.util.depthFirstRecursion(rootNode.childNodes[i], callback, args, onlyVisible, (cloneNode ? cloneNode.childNodes[i] : null))
		}
	}
	callback(rootNode, args, cloneNode)
};
PwylUtil.prototype.topDownDepthFirstRecursion = function (root, callback, cloneNode, onlyVisible) {
	if (callback(root, cloneNode)) {
		ppw.util._topDownDepthFirstRecursion(root, callback, cloneNode, onlyVisible)
	}
};
PwylUtil.prototype._topDownDepthFirstRecursion = function (root, callback, cloneNode, onlyVisible) {
	var currElem, currClone, i;
	for (i = 0; i < root.childNodes.length; i++) {
		currElem = root.childNodes[i];
		if (cloneNode) {
			currClone = cloneNode.childNodes[i]
		}
		if (currElem.nodeType == Node.ELEMENT_NODE) {
			if (onlyVisible && (YAHOO.util.Dom.getStyle(currElem, "display") == "none" || YAHOO.util.Dom.getStyle(currElem, "visible") == "hidden")) {
				continue
			}
			if (callback(currElem, currClone)) {
				ppw.util._topDownDepthFirstRecursion(currElem, callback, currClone)
			}
		}
	}
};
PwylUtil.prototype.getAttribute = function (node, attrName) {
	if (node.nodeType != Node.ELEMENT_NODE) {
		return null
	}
	if (node[attrName]) {
		return node[attrName]
	}
	for (var i = 0; i < node.attributes.length; i++) {
		var currAttr = node.attributes[i];
		if (currAttr.specified && currAttr.name == attrName) {
			return currAttr.value
		}
	}
	return null
};
PwylUtil.prototype.removeElementsOfType = function (tagName, root) {
	if (!root) {
		root = document
	}
	var elems = root.getElementsByTagName(tagName);
	while (elems.length > 0) {
		elems[0].parentNode.removeChild(elems[0])
	}
};
PwylUtil.prototype.generateUniqueId = function () {
	return new Date().getTime() + "" + Math.round(Math.random() * 10000000000)
};
PwylUtil.prototype.isNonEmptyText = function (e) {
	return e.nodeType == 3 && e.nodeValue.strip().length > 0
};
PwylUtil.prototype.removeElement = function (elem) {
	if (typeof (elem) == "string") {
		elem = document.getElementById(elem)
	}
	elem.parentNode.removeChild(elem)
};
PwylUtil.prototype.filter = function (elems, callback) {
	var filteredElems = [];
	for (var i = 0; i < elems.length; i++) {
		if (callback(elems[i])) {
			filteredElems.push(elems[i])
		}
	}
	return filteredElems
};
PwylUtil.prototype.$ = function (id) {
	return document.getElementById(id)
};
PwylUtil.prototype.makeInvisible = function (object) {
	switch (object.nodeType) {
	case Node.ELEMENT_NODE:
		ppw.util.applyProperty(object, "display", "none");
		break;
	case Node.TEXT_NODE:
		if (object.nodeType == Node.TEXT_NODE && object.nodeValue.strip().length > 0) {
			var span = document.createElement("span");
			span.innerHTML = object.nodeValue.strip();
			object.parentNode.replaceChild(span, object);
			ppw.util.applyProperty(span, "display", "none")
		}
		break
	}
};
PwylUtil.prototype.makeVisible = function (object) {
	if (object.nodeType == Node.ELEMENT_NODE) {
		ppw.util.undoApplyProperty(object, "display")
	}
};
PwylUtil.prototype.isVisible = function (elem) {
	return YAHOO.util.Dom.getStyle(elem, "display") != "none"
};
PwylUtil.prototype.applyProperty = function (elem, propertyName, value, isAttribute, saveCurrentValue) {
	if (!elem || elem.nodeType != Node.ELEMENT_NODE) {
		return
	}
	if (saveCurrentValue == undefined || saveCurrentValue) {
		ppw.util.saveCurrentValueOfProperty(elem, propertyName, isAttribute)
	}
	if (isAttribute) {
		elem[propertyName] = value
	}
	else {
		elem.style[propertyName] = value
	}
};
PwylUtil.prototype.removeAttribute = function (elem, propertyName) {
	if (elem.nodeType != Node.ELEMENT_NODE || !elem.getAttribute(propertyName)) {
		return
	}
	ppw.util.saveCurrentValueOfProperty(elem, propertyName, true);
	elem.removeAttribute(propertyName)
};
PwylUtil.prototype.restoreAttribute = function (elem, propertyName) {
	ppw.util.undoApplyProperty(elem, propertyName, true)
};
PwylUtil.prototype.saveCurrentValueOfProperty = function (elem, propertyName, isAttribute) {
	var currValueOfProperty = isAttribute ? elem.getAttribute(propertyName) : YAHOO.util.Dom.getStyle(elem, propertyName);
	var oldPropName = "old_" + (isAttribute ? "attrib" : "style") + "_" + propertyName;
	if (!elem[oldPropName]) {
		elem[oldPropName] = []
	}
	elem[oldPropName].push(currValueOfProperty + "")
};
PwylUtil.prototype.undoApplyProperty = function (elem, propertyName, isAttribute) {
	if (!elem || elem.nodeType != Node.ELEMENT_NODE) {
		return
	}
	var oldPropName = "old_" + (isAttribute ? "attrib" : "style") + "_" + propertyName;
	var value = (elem[oldPropName] && elem[oldPropName].length > 0) ? elem[oldPropName].pop() : "";
	if (value) {
		if (isAttribute) {
			elem.setAttribute(propertyName, value)
		}
		else {
			elem.style[propertyName] = value
		}
	}
};
PwylUtil.prototype.applyToElementAndParents = function (elem, callback) {
	if (elem == ppw.util.top) {
		return
	}
	if (elem.nodeType == Node.ELEMENT_NODE) {
		callback(elem)
	}
	ppw.util.applyToElementAndParents(elem.parentNode, callback)
};
PwylUtil.prototype.isParent = function (child, parent) {
	if (child == ppw.util.top || child == document) {
		return false
	}
	if (child == parent) {
		return true
	}
	return ppw.util.isParent(child.parentNode, parent)
};
PwylUtil.prototype.executeOnAllElementsOfTag = function (tags, functionCallback) {
	for (var i = 0; i < tags.length; i++) {
		var elements = ppw.util.top.getElementsByTagName(tags[i]);
		for (var j = 0; j < elements.length; j++) {
			functionCallback(elements[j])
		}
	}
};
PwylUtil.prototype.clearSelectedElements = function () {
	var selected = [];
	var currElem;
	while (currElem = ppw.editor.selectedElems.pop()) {
		ppw.editor.unSelect(currElem);
		selected.push(currElem)
	}
	return selected.reverse()
};
PwylUtil.prototype.hasSelectedParent = function (elem) {
	if (elem.isSelected) {
		return elem
	}
	else {
		if (elem.parentNode == ppw.util.top || elem.parentNode == document.body) {
			return false
		}
		else {
			return ppw.util.hasSelectedParent(elem.parentNode)
		}
	}
};
PwylUtil.prototype.hasParent = function (elem, parents) {
	if (elem == ppw.util.top || elem == document.body) {
		return false
	}
	if (parents.contains(elem)) {
		return true
	}
	else {
		return ppw.util.hasParent(elem, parents)
	}
};
PwylUtil.prototype.firstSubelement = function (node, args) {
	for (var i = 0; i < args.length; i++) {
		if (node == args[i]) {
			return args[i]
		}
	}
	for (var i = 0; i < node.childNodes.length; i++) {
		var result = ppw.util.firstSubelement(node.childNodes[i], args);
		if (result) {
			return result
		}
	}
	return false
};
PwylUtil.prototype.selectAllSubelementsBetween = function (rootElement, startElement, lastElement, callback, params) {
	var o = new Object();
	o.firstReached = false;
	o.lastReached = false;
	o.first = startElement;
	o.last = lastElement;
	o.callback = callback;
	if (startElement == null) {
		o.firstReached = true
	}
	if (lastElement == null) {
		o.lastReached = false
	}
	o.selectSubelements = function (node) {
		for (var i = 0; i < node.childNodes.length; i++) {
			o.selectSubelements(node.childNodes[i])
		}
		if (!o.firstReached && (o.first != null && node == o.first)) {
			o.firstReached = true
		}
		else {
			if (o.firstReached && !o.lastReached) {
				if (o.last != null && node == o.last) {
					o.lastReached = true
				}
				else {
					callback(node, params)
				}
			}
			else {
				if (o.firstReached && o.lastReached) {
					return
				}
			}
		}
	};
	o.selectSubelements(rootElement)
};
PwylUtil.prototype.getFirstCommonParent = function (first, second) {
	var getParentsArray = function (node) {
		var parents = [];
		while (node != ppw.util.top) {
			node = node.parentNode;
			parents.push(node)
		}
		return parents
	};
	return getParentsArray(first).firstMatch(getParentsArray(second))
};
PwylUtil.prototype.getElementContainingNode = function (elements, node) {
	for (var i = 0; i < elements.length; i++) {
		if (node == elements[i]) {
			return elements[i]
		}
	}
	if (node.parentNode == ppw.util.top) {
		return null
	}
	return ppw.util.getElementContainingNode(elements, node.parentNode)
};
PwylUtil.prototype.executeOnSubelements = function (node, callback, params) {
	for (var i = 0; i < node.childNodes.length; i++) {
		ppw.util.executeOnSubelements(node.childNodes[i], callback, params)
	}
	callback(node, params)
};
PwylUtil.prototype.orderPageElements = function (elems) {
	var initArgs = {
		elems: elems,
		sortedElems: []
	};
	var checkElem = function (e, args) {
		if (args.elems.contains(e)) {
			args.sortedElems.push(e)
		}
	};
	ppw.util.depthFirstRecursion(ppw.util.pageTop, checkElem, initArgs);
	return initArgs.sortedElems
};
PwylUtil.prototype.getPageTitle = function () {
	return document.title.replace("PrintWhatYouLike on ", "")
};
PwylUtil.prototype.getHtmlClip = function (orig_elem) {
	var elem = ppw.util.inlineCss(orig_elem);
	elem = ppw.commands.cleanElement(elem);
	elem.style.backgroundColor = ppw.util.getBackgroundColor(orig_elem);
	ppw.util.makeRelativeUrlsAbsolute(elem);
	return ppw.util.getOuterHtml(elem)
};
PwylUtil.prototype.inlineCss = function (elem) {
	var clone = elem.cloneNode(true);
	var cloneElemsToRemove = [];
	var includeDimensions = elem.offsetWidth < 500;
	var callback = function (e, cloneE) {
		if (YAHOO.util.Dom.getStyle(e, "display") == "none" || YAHOO.util.Dom.getStyle(e, "visible") == "hidden") {
			cloneElemsToRemove.push(cloneE);
			return false
		}
		else {
			ppw.cssutil.copyStyleAttributes(cloneE, e, false, includeDimensions);
			return true
		}
	};
	ppw.util.topDownDepthFirstRecursion(elem, callback, clone);
	for (var i = 0; i < cloneElemsToRemove.length; i++) {
		cloneElemsToRemove[i].parentNode.removeChild(cloneElemsToRemove[i])
	}
	return clone
};
PwylUtil.prototype.makeRelativeUrlsAbsolute = function (elem) {
	var imgs = elem.getElementsByTagName("img");
	for (var i = 0; i < imgs.length; i++) {
		if (imgs[i].src != imgs[i].getAttribute("src")) {
			imgs[i].setAttribute("src", imgs[i].src)
		}
	}
};
PwylUtil.prototype.getOuterHtml = function (elem) {
	var div = document.createElement("div");
	div.appendChild(elem);
	return div.innerHTML
};
PwylUtil.prototype.noBubble = function (event) {
	event = this.captureEvent(event);
	if (event) {
		event.cancelBubble = true;
		if (event.stopPropagation) {
			event.stopPropagation()
		}
	}
	return event
};
PwylUtil.prototype.captureEvent = function (event) {
	if (!event) {
		event = window.event
	}
	return event
};
PwylUtil.prototype.cursorWrapper = function (func) {
	ppw.editor.changeCursorStyle("progress");
	if (typeof (func) == "string") {
		setTimeout(func, 0)
	}
	else {
		func()
	}
};
PwylUtil.prototype.getStyle = function (elem, style) {
	var st = YAHOO.util.Dom.getStyle(elem, style);
	if (st) {
		st = st.replace("px", "")
	}
	return st
};
PwylUtil.prototype.getInheritedProperty = function (elem, property, defaultValues, ifNotFound) {
	var value;
	var valueMatchesDefaults = function () {
		if (!value) {
			return true
		}
		for (var i = 0; i < defaultValues.length; i++) {
			if (value == defaultValues[i]) {
				return true
			}
		}
		return false
	};
	while (elem != document) {
		value = ppw.util.getStyle(elem, property);
		if (!valueMatchesDefaults()) {
			return value
		}
		elem = elem.parentNode
	}
	return ifNotFound
};
PwylUtil.prototype.getBackgroundColor = function (elem) {
	return ppw.util.getInheritedProperty(elem, "backgroundColor", ["transparent", "rgba(0, 0, 0, 0)"], "white")
};
PwylUtil.prototype.sleep = function (milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 10000000; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break
		}
	}
};
PwylUtil.prototype.getDocEncoding = function (doc) {
	doc = doc ? doc : document;
	if (doc.inputEncoding) {
		return doc.inputEncoding
	}
	if (doc.characterSet) {
		return doc.characterSet
	}
	if (doc.charset) {
		return doc.charset
	}
	if (doc.defaultCharset) {
		return doc.defaultCharset
	}
	return null
};
PwylUtil.prototype.getRelevantDocEncoding = function (doc) {
	var parentEncoding, encoding = null;
	if (ppw.bookmarklet) {
		parentEncoding = ppw.util.getDocEncoding();
		if (parentEncoding && parentEncoding.toLowerCase() != "utf-8") {
			encoding = parentEncoding
		}
	}
	return encoding
};
PwylUtil.prototype.onProEditPage = function () {
	return document.getElementById("ppw_pro_toolbar_content") != null
};

function PwylBookmarklet() {
	this.numJsToLoad = 0;
	this.numJsLoaded = 0;
	this.isRunning = false;
	this.headers = [["link", {
		rel: "stylesheet",
		type: "text/css",
		media: "all",
		id: "ppw_css_all",
		href: _pwyl_home + "editor/css/toolbar_all.css"
	}], ["link", {
		rel: "stylesheet",
		type: "text/css",
		media: "screen",
		id: "ppw_css_screen",
		href: _pwyl_home + "editor/css/toolbar_screen.css"
	}], ["link", {
		rel: "stylesheet",
		type: "text/css",
		media: "print",
		id: "ppw_css_print",
		href: _pwyl_home + "editor/css/toolbar_print.css"
	}], ["link", {
		rel: "stylesheet",
		type: "text/css",
		media: "screen",
		href: _pwyl_home + "lib/yui/container/assets/skins/sam/container.css"
	}], ["link", {
		rel: "stylesheet",
		type: "text/css",
		media: "screen",
		href: _pwyl_home + "lib/yui/resize/assets/skins/sam/resize.css"
	}]]
}

function PwylProperties() {
	var calculateBaseUri = function (url) {
		if (!url.match(/http:\/\/.*\//)) {
			url = url + "/"
		}
		return url.replace(/^(.*\/).*$/, "$1")
	};
	this.pageUrl = document.URL;
	this.pageBaseUrl = document.baseURI ? document.baseURI : calculateBaseUri(document.URL);
	this.home = _pwyl_home;
	this.proAccountId = window._pwyl_pro_id ? window._pwyl_pro_id : null
}

function pwylLoadBookmarklet() {
	var framesets = document.getElementsByTagName("frameset");
	if (framesets.length > 0) {
		frame_url = _pwyl_home + "print/frames?url=" + encodeURIComponent(document.URL);
		if (!window.open(frame_url)) {
			window.location.href = frame_url
		}
		return
	}
	window._pwyl_bookmarklet = new PwylBookmarklet();
	var docHead = document.getElementsByTagName("head")[0];
	for (var i = 0; i < _pwyl_bookmarklet.headers.length; i++) {
		var tagName = _pwyl_bookmarklet.headers[i][0];
		var attribs = _pwyl_bookmarklet.headers[i][1];
		var elem = document.createElement(tagName);
		for (var name in attribs) {
			elem.setAttribute(name, attribs[name])
		}
		if (attribs.id != "ppw_css_all") {
			elem.setAttribute("pwyl", "true")
		}
		docHead.appendChild(elem)
	}
	pwylInitialize();
	ppw.bookmarklet = _pwyl_bookmarklet;
	if (window._pwyl_do_not_load_editor) {
		return
	}
	ppw.bookmarklet.run()
}
PwylBookmarklet.prototype.run = function () {
	ppw.bookmarklet.isRunning = true;
	document.getElementById("ppw_css_screen").media = "screen";
	document.getElementById("ppw_css_print").media = "print";
	var toolbar = document.createElement("div");
	toolbar.innerHTML = _pwyl_toolbar_html;
	while (toolbar.childNodes.length > 0) {
		var e = toolbar.removeChild(toolbar.childNodes[0]);
		if (e.nodeType == Node.ELEMENT_NODE) {
			e.bookmarklet_no_copy = true;
			if (e.id == ppw.util.toolbarId) {
				e.style.display = "none"
			}
			document.body.appendChild(e)
		}
	}
	ppw.loader._copyOptions = {
		copyExcludesAttrib: "bookmarklet_no_copy"
	};
	ppw.loader.copyPageElements(document.getElementById(ppw.util.pageTopId), document.body, ppw.loader.getProperElement);
	ppw.loader.copyCssStyle(document.getElementById(ppw.util.topId), document.body, true);
	setTimeout("document.getElementById(ppw.util.toolbarId).style.display = ''", 0);
	ppw.init.onEditorLoad();
	ppw.init.afterPageLoad();
	ppw.ui.setToolbarCloseButton()
};
PwylBookmarklet.prototype.stop = function () {
	ppw.init.stopToolbar();
	document.getElementById("ppw_css_screen").media = "none";
	document.getElementById("ppw_css_print").media = "none";
	ppw.bookmarklet.isRunning = false
};
PwylBookmarklet.prototype.toggle = function () {
	ppw.bookmarklet.isRunning ? ppw.bookmarklet.stop() : ppw.bookmarklet.run()
};
pwylLoadBookmarklet();