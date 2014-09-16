//start Facebook conversation code
var fb_param = {};
fb_param.pixel_id = '6010727242402';
fb_param.value = '0.01';
fb_param.currency = 'USD';
(function(){
    var fpw = document.createElement('script');
    fpw.async = true;
    fpw.src = '//connect.facebook.net/en_US/fp.js';
    var ref = document.getElementsByTagName('script')[0];
    ref.parentNode.insertBefore(fpw, ref);
})();
//end Facebook code