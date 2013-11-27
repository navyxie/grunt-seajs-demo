define("appjs/application-debug", [ "./util-debug", "sea-modules/jquery/jquery/2.0.3/jquery-debug-debug" ], function(require, exports, module) {
    var util = require("./util-debug");
    var helloSeaJS = document.getElementById("hello-seajs");
    helloSeaJS.style.color = util.randomColor();
    window.setInterval(function() {
        helloSeaJS.style.color = util.randomColor();
    }, 1500);
    var $ = require("sea-modules/jquery/jquery/2.0.3/jquery-debug-debug");
    $(function() {
        console.log(111111);
    });
    console.log($);
});

define("appjs/util-debug", [], function(require, exports, module) {
    var util = {};
    var colorRange = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];
    util.randomColor = function() {
        return "#" + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)];
    };
    module.exports = util;
});
