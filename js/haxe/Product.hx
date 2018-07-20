package ;
import js.JQuery;
import js.Browser;
class Product {
    public var currentItem:JQuery = null;
    public var triggers:JQuery;
    public function new() {
        this.triggers = new JQuery("ul.products > li > a");
        this.triggers.on("click", this.switchProduct);
    }

    public function switchProduct(e:JqEvent) {
        var switchTo = new JQuery(".section-product.product-"+e.target.className);
        trace(e.target.className);
        if(switchTo.length <= 0) {
            return;
        }
        if (this.currentItem != null && this.currentItem.attr("class").indexOf("product-"+e.target.className) > -1) {
            this.currentItem.slideUp();
            this.currentItem = null;
            return;
        }
        if(this.currentItem != null){
            this.currentItem.slideUp();
        }

        switchTo.slideDown();
        this.currentItem = switchTo;
    }
    public static function main() {
        new JQuery(Browser.window).ready(function(e:JqEvent) {
            new Product();
        });
    }
}
