var queryString = window.location.search;

var urlParams = new URLSearchParams(queryString);
var is_campaign = urlParams.get('utm_campaign');
var is_source = urlParams.get('utm_source');
var is_medium = urlParams.get('utm_medium');

document.getElementById('100432765').value = is_source;
document.getElementById('100488551').value = is_medium;
document.getElementById('100488555').value = is_campaign;

