var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ForIns = /** @class */ (function (_super) {
    __extends(ForIns, _super);
    function ForIns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ForIns;
}(Array));
var items = new ForIns();
items.push("spoons", 254, "gallery");
for (var item in items)
    console.log(items[item]);
for (var i = 0; i < items.length; i++)
    console.log(items[i]);
var greeting = function (message) { return console.log(message); };
greeting('hello kamar');
function test(no1, no2, func) {
    var res = func(no1, no2);
    return res;
}
function tree(number1, number2) {
    var res = number1 * number2;
    return res;
}
var res = test(2, 3, tree);
console.log(res);
