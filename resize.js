$(window).resize(function(){
    var win_w = $(window).width();
    // 设计稿宽度
    var psd_w = 750;
    // 页面宽度极值
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
    // rem处理页面字体自适应
    $("html").css("font-size", w/psd_w*100+"px");
    $("body").css("font-size", "16.1px");
}).resize();