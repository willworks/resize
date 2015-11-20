$(window).resize(function(){
    var win_w = $(window).width();
    console.log(win_w);
    var psd_w = 750;
    var max_w = 640;
    var min_w = 320;
    var w = win_w;
    if(win_w<min_w){
        w = min_w;
    }
    else{
        if(win_w>max_w){
            w = max_w;
        }
    }
    $("html").css("font-size", w/psd_w*100+"px");
    $("body").css("font-size", "16.1px");
}).resize();