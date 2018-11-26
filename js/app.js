//
//
//
var app = {

    version : '1.0.0',

    onButtonClick : function  () {
        alert("button clicked.");
    },
    //
    onExitButton : function  () {
        navigator.app.exitApp();
    },
    //
    onDOMContentLoaded : function () {
    },
    //
    onDeviceReady : function () {
        alert("device ready.");
        if (device.platform === "iOS") {
            alert("got iOS.");
            // hide Exit button. They don't have one on iOS devices.
            document.getElementById('exitApp').classList.add("hidden");
            // deals with post-iOS-7 change that covers the status bar
            // http://coenraets.org/blog/2013/09/phonegap-and-cordova-with-ios-7/
            document.body.style.marginTop = "20px";
            // hide the Splash Screen for iOS only
            navigator.splashscreen.hide();
        } else if (device.platform == 'Android') {
            // Get rid of 300ms delay 
            document.addEventListener('DOMContentLoaded', function() { FastClick.attach(document.body); }, false);
        }
    }
};
