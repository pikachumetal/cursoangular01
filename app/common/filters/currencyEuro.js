<<<<<<< HEAD
angular.module('appPhone').filter('euro', function() {
    return function(x,numberDecimals) {
        var txt = "";
        var decs = parseInt(numberDecimals) || 2;
        txt = parseFloat(x).toFixed(decs) + " €";
        return txt;
    };
=======
phonecatApp.filter('euro', function() {
    return function(x,numberDecimals) {
        var txt = "";
        var decs = parseInt(numberDecimals) || 2;
        txt = parseFloat(x).toFixed(decs) + " €";
        return txt;
    };
>>>>>>> 70465adc07f8abda15b75f39434d74f1a934f4ac
});