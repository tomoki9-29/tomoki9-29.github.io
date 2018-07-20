(function () { "use strict";
var Product = function() {
	this.currentItem = null;
	this.triggers = new js.JQuery("ul.products > li > a");
	this.triggers.on("click",$bind(this,this.switchProduct));
};
Product.main = function() {
	new js.JQuery(window).ready(function(e) {
		new Product();
	});
};
Product.prototype = {
	switchProduct: function(e) {
		var switchTo = new js.JQuery(".section-product.product-" + e.target.className);
		console.log(e.target.className);
		if(switchTo.length <= 0) return;
		if(this.currentItem != null && this.currentItem.attr("class").indexOf("product-" + e.target.className) > -1) {
			this.currentItem.slideUp();
			this.currentItem = null;
			return;
		}
		if(this.currentItem != null) this.currentItem.slideUp();
		switchTo.slideDown();
		this.currentItem = switchTo;
	}
};
var js = {};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
var q = window.jQuery;
js.JQuery = q;
Product.main();
})();
