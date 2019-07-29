$(document).ready(function(){
    
    $("#PageList2 .title").click(function(){
        if($(this).hasClass("open")){
            $(this).removeClass("open")
        }
        else{
            $(this).addClass("open")
        }
        $("#PageList2 ul").toggle()
    })

    $("#ToWebVersion").click(function(){
        var url = $.url()
        x = "http://" + url.attr("host") + url.attr("path") + "?m=0"
        location.href = x
    })
    $("#ToMobileVersion").click(function(){
        var url = $.url()
        x = "http://" + url.attr("host") + url.attr("path") + "?m=1"
        location.href = x
    })
});
