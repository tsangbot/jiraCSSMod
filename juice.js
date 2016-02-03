// ==UserScript==
// @name       JIRA User Interface CSS Edits
// @namespace  http://corpupsource01.corp.theplatform.com/andrew.dicks/juice
// @version    0.1.5
// @description  Modifies the stylesheet to improve JIRA UI
// @include    /https?\:\/\/theplatform\.jira\.com\/.*RapidBoard\.jspa.*/
// @include    /https?\:\/\/theplatform\.jira\.com\/browse/[A-Z]*-[0-9]*/
// @updateURL  http://corpupsource01.corp.theplatform.com/andrew.dicks/juice/raw/master/juice.js
// ==/UserScript==

// Helper function to insert the styles into the page
// Nabbed from here: https://gist.github.com/Geruhn/7644599
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// Make completed JIRA issues mosly transparent to reduce clutter in the Agile planning view
addGlobalStyle('.ghx-done { opacity: 0.3; }');

// Prefix the JIRA ID to the front of subtasks
jQuery('div.subtask-table-container').find('td.stsummary > a.issue-link').each(function(idx, obj) { var $this = jQuery(obj); $this.prepend('[' + $this.data('issue-key') + '] '); });

