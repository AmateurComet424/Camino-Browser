/* -*- Mode: Java; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Chimera.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 2002
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *  Brian Ryner <bryner@brianryner.com>
 *  Smokey Ardisson <alqahira@ardisson.org>
 *  Sean Murphy <murph@seanmurph.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

// This file contains Camino-specific default preferences.

pref("accessibility.tabfocus", 3);

// What to load in a new tab: 0 = blank, 1 = homepage, 2 = last page
pref("browser.tabs.startPage", 0);

// What to load in a new window: 0 = blank, 1 = homepage
pref("browser.startup.page", 1);

pref("chimera.store_passwords_with_keychain", true);

// by default, Camino will take proxy settings (including PAC) from the OS.
// set this pref to false if you want to specify proxy settings by hand.
pref("camino.use_system_proxy_settings", true);

// Plugin defaults
pref("camino.enable_plugins", true);
pref("camino.enable_java", false);
pref("camino.allow_dangerous_plugins", false);
pref("camino.disabled_plugin_names", "");

// show warning when closing windows or quitting
pref("camino.warn_when_closing", true);

// show warning when attempting to open a feed to another application
pref("camino.warn_before_opening_feed", true);

// turn off dumping of JS and CSS errors to the console
pref("chimera.log_js_to_console", false);

// Identify Camino in the UA string
pref("general.useragent.vendor", "Camino");
pref("general.useragent.vendorSub", "2.1.2");

// work around stupid sites sniffing for firefox instead of gecko
pref("general.useragent.extra.notfox", "(like Firefox/3.6.28)");

pref("browser.chrome.favicons", true);
pref("browser.urlbar.autocomplete.enabled", true);
// Don't do inline autocomplete in the location bar
pref("browser.urlbar.autoFill", false);
// Autocomplete using titles as well as URLs
pref("camino.autocomplete_from_titles", true);

// Download to the system download folder by default
pref("browser.download.folderList", 1);

// Download to the default location but don't process files after downloading.
pref("browser.download.useDownloadDir", true);
pref("browser.download.manager.openDownloadedFiles", false);
pref("browser.download.manager.closeWhenDone", false);

// Download removing policy
pref("browser.download.manager.retention", 2);

// bring download window to the front when each download starts
pref("browser.download.manager.focusWhenStarting", true);

// open download window when each download starts
pref("browser.download.manager.showWhenStarting", true);

// set typeahead find to search all text by default, but not invoke
// unless you type '/'
pref("accessibility.typeaheadfind.linksonly", false);
pref("accessibility.typeaheadfind.autostart", false);

// image resizing
pref("browser.enable_automatic_image_resizing", true);

// Languages (note we try to override this with the data from System Preferences,
// this is just the emergency fall-back)
// To override the automatic generation from System Preferences,
// set camino.accept_languages in user.js
pref("intl.accept_languages", "en-us, en");

// set camino.useragent.locale to override the automatic determination of the UI
// language from the bundle

// Scrolling overrides.  For vertical: control for size, option for history.
// Shift, command, and modifierless scroll the document.  If it's a
// shift-scroll that comes from a mouse that only scrolls vertically, we get
// it from the system as a (shifted) horizontal scroll.
pref("mousewheel.withcontrolkey.action", 3);
pref("mousewheel.withcontrolkey.sysnumlines", false);
pref("mousewheel.withaltkey.action", 2);
pref("mousewheel.withaltkey.sysnumlines", false);

// We want to make sure mail URLs are handled externally...
pref("network.protocol-handler.external.mailto", true); // for mail
pref("network.protocol-handler.external.news", true);   // for news
pref("network.protocol-handler.external.snews", true);  // for secure news
pref("network.protocol-handler.external.nntp", true);   // also news
// ...without warning dialogs
pref("network.protocol-handler.warn-external.mailto", false);
pref("network.protocol-handler.warn-external.news", false);
pref("network.protocol-handler.warn-external.snews", false);
pref("network.protocol-handler.warn-external.nntp", false);

// cookies: 0 = accept all, 1 = don't accept third-party, 2 = don't accept any
pref("network.cookie.cookieBehavior", 0);
// "Remember this decision?" should be checked by default in the request sheet.
pref("cocoa_prompt.remember_cookie_decision", true);

// Enable DNS prefetch by default for http resources, but not for https ones
pref("network.dns.disablePrefetch", false);
pref("network.dns.disablePrefetchFromHTTPS", true);

// default to opening tabs instead of windows for command-click
pref("browser.tabs.opentabfor.middleclick", true);
// ... and default to opening new tabs in the foreground
pref("browser.tabs.loadInBackground", false);

// hide the tab bar when only one tab is open
pref("camino.tab_bar_always_visible", false);

// enable the tab jumpback feature
pref("camino.enable_tabjumpback", true);

// should we divert new windows into new tabs aka single window mode (SWM)?
// 1 = current window, 2 = new window, 3 = new tab
pref("browser.link.open_newwindow", 2);

// should we use SWM with window.open calls? 0 = don't use SWM at all,
// 1 = use SWM on every window.open, 2 = use SWM unless size or features specified
pref("browser.link.open_newwindow.restriction", 2);

// don't force all windows diverted by SWM to load in the background
pref("browser.tabs.loadDivertedInBackground", false);

// load links from external apps:
// 1 = current window, 2 = new window, 3 = new tab
pref("browser.link.open_external", 3);

// View source in tab (defaults to new window)
pref("camino.viewsource_in_tab", false);

// use html network error pages rather than sheets
pref("browser.xul.error_pages.enabled", true);

// Name of alternate about: page to use for certificate errors (when undefined,
// defaults to about:neterror)
pref("security.alternate_certificate_error_page", "certerror");
// ... and don't show the technical info or "add exception" button by default
pref("browser.xul.error_pages.expert_bad_cert", false);

// map delete key to back button
pref("browser.backspace_action", 0);

// 0 = spellcheck nothing, 1 = check multi-line controls, 2 = check both
// multi/single line controls
pref("layout.spellcheckDefault", 2);

// enable popup blocking
pref("dom.disable_open_during_load", true);

// disable features that allow websites to change window size and position
pref("dom.disable_window_status_change", true);
pref("dom.disable_window_move_resize", true);
pref("dom.disable_window_flip", true);

// don't hide user:pass when fixing up URIs
pref("browser.fixup.hide_user_pass", false);

// give users the option of restoring windows after a crash
pref("browser.sessionstore.resume_from_crash", true);

// should we restore tabs and windows on every launch?
pref("camino.remember_window_state", false);

// camino.check_default_browser controls the check on launch for whether Camino
// is the default browser. Set automatically just after the first launch.

// enable bonjour
pref("camino.disable_bonjour", false);

// ad-blocking and Flashblock are off by default
pref("camino.enable_ad_blocking", false);
pref("camino.enable_flashblock", false);
pref("flashblock.silverlight.blocked", false);

// do not override autocomplete=off
pref("wallet.crypto.autocompleteoverride", false);

// Camino makes its own popup windows (context menus, tooltips)
pref("ui.use_native_popup_windows", true);

// auto-update URL base
pref("app.update.url", "https://caminobrowser.org/update-check");

// obey OS font size threshold for disabling text smoothing
pref("gfx.use_text_smoothing_setting", true);

// force <select>s to display as Aqua rather than honor author styles
pref("camino.use_aqua_selects", true);

// enable full content zoom by default
pref("browser.zoom.full", true);

// Prevent loading of suspected phishing sites
pref("browser.safebrowsing.enabled", true);

// Prevent loading of suspected malware sites
pref("browser.safebrowsing.malware.enabled", true);

// The active safe browsing data provider
pref("browser.safebrowsing.dataProvider", 0);

// Properties for the safe browsing data providers
pref("browser.safebrowsing.provider.0.name", "Google");
pref("browser.safebrowsing.provider.0.updateURL", "http://safebrowsing.clients.google.com/safebrowsing/downloads?client={moz:client}&appver={moz:version}&pver=2.2");
pref("browser.safebrowsing.provider.0.gethashURL", "http://safebrowsing.clients.google.com/safebrowsing/gethash?client={moz:client}&appver={moz:version}&pver=2.2");
pref("browser.safebrowsing.provider.0.keyURL", "https://sb-ssl.google.com/safebrowsing/newkey?client={moz:client}&appver={moz:version}&pver=2.2");

// Data provider error reporting URLs
pref("browser.safebrowsing.provider.0.reportPhishingURL", "http://www.google.com/safebrowsing/report_phish/?tpl=generic&continue=%CONTINUE_TO_URL%&url=%REPORTED_URL%&hl=%LANGUAGE%");
pref("browser.safebrowsing.provider.0.reportPhishingErrorURL", "http://www.google.com/safebrowsing/report_error/?tpl=generic&continue=%CONTINUE_TO_URL%&url=%REPORTED_URL%&hl=%LANGUAGE%");
pref("browser.safebrowsing.provider.0.reportMalwareURL", "http://www.google.com/safebrowsing/report_badware/?tpl=generic&continue=%CONTINUE_TO_URL%&url=%REPORTED_URL%&hl=%LANGUAGE%");
pref("browser.safebrowsing.provider.0.reportMalwareErrorURL", "http://google.com/safebrowsing/diagnostic?tpl={moz:client}&site=%REPORTED_URL%&hl=%LANGUAGE%");

// URL the user is forwarded to after submitting an error report
pref("browser.safebrowsing.sendToURLAfterReporting", "http://caminobrowser.org/documentation/security/report-submitted/");

// Location of more information about the safe browsing feature
pref("browser.safebrowsing.warning.infoURL", "http://caminobrowser.org/documentation/security/#safebrowsing");

// Name of the about: page contributed by safebrowsing to handle display of error
// pages on phishing/malware hits.
pref("urlclassifier.alternate_error_page", "safebrowsingblocked");

// The number of random entries to send with a gethash request.
pref("urlclassifier.gethashnoise", 4);

// The list of tables that use the gethash request to confirm partial results.
pref("urlclassifier.gethashtables", "googpub-phish-shavar,goog-malware-shavar");

// If an urlclassifier table has not been updated in this number of seconds,
// a gethash request will be forced to check that the result is still in
// the database.
pref("urlclassifier.confirm-age", 2700);

// Base URL for crash report links in about:crashes
pref("breakpad.reportURL", "http://crash-stats.mozilla.com/report/index/");

// the (maximum) number of the recent visits to sample
// when calculating frecency
pref("places.frecency.numVisits", 10);

// buckets (in days) for frecency calculation
pref("places.frecency.firstBucketCutoff", 4);
pref("places.frecency.secondBucketCutoff", 14);
pref("places.frecency.thirdBucketCutoff", 31);
pref("places.frecency.fourthBucketCutoff", 90);

// weights for buckets for frecency calculations
pref("places.frecency.firstBucketWeight", 100);
pref("places.frecency.secondBucketWeight", 70);
pref("places.frecency.thirdBucketWeight", 50);
pref("places.frecency.fourthBucketWeight", 30);
pref("places.frecency.defaultBucketWeight", 10);

// bonus (in percent) for visit transition types for frecency calculations
pref("places.frecency.embedVisitBonus", 0);
pref("places.frecency.linkVisitBonus", 100);
pref("places.frecency.typedVisitBonus", 2000);
pref("places.frecency.bookmarkVisitBonus", 75);
pref("places.frecency.downloadVisitBonus", 0);
pref("places.frecency.permRedirectVisitBonus", 0);
pref("places.frecency.tempRedirectVisitBonus", 0);
pref("places.frecency.defaultVisitBonus", 0);

// bonus (in percent) for place types for frecency calculations
pref("places.frecency.unvisitedBookmarkBonus", 140);
pref("places.frecency.unvisitedTypedBonus", 200);

// Use in-content missing plug-in UI
pref("plugin.default_plugin_disabled", true);

// Prefs backported to Camino from Gecko 2.
// TODO: Remove these pref overrides after Camino upgrades to Gecko 2!
pref("network.buffer.cache.size", 32768);               // Bug 545334
pref("network.http.accept-encoding", "gzip, deflate");  // Bug 576033

