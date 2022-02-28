function startScript() 
{ 
var queryString = window.location.search; 
var urlParams = new URLSearchParams(queryString); 
var is_campaign = urlParams.get('utm_campaign'); 
var is_source = urlParams.get('utm_source'); 
var is_medium = urlParams.get('utm_medium'); 
loader.engine.document.getElementById(100432765).setValue({ value: is_campaign}); loader.engine.document.getElementById(100488551).setValue({ value: is_source}); loader.engine.document.getElementById(100488555).setValue({ value: is_medium}); 
} 
window.onclick = startScript;

