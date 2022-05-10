/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'avanticon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'avanticon-phone': '&#x1f4de;',
		'avanticon-globe': '&#x1f310;',
		'avanticon-heart': '&#x1f499;',
		'avanticon-mail': '&#x1f4e7;',
		'avanticon-menu': '&#xe904;',
		'avanticon-filter': '&#xe905;',
		'avanticon-dots': '&#xe906;',
		'avanticon-user-circle': '&#xe907;',
		'avanticon-user': '&#xe908;',
		'avanticon-frame': '&#xe909;',
		'avanticon-home': '&#xe90a;',
		'avanticon-settings': '&#xe90b;',
		'avanticon-share': '&#xe90c;',
		'avanticon-edit': '&#xe90d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/avanticon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
