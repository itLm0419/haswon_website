$(function(){
    //轮播图
    var iNow=0;
    var timerB=null;
    var $oOl=$('.ad_LBT').children().eq(3);//ol
    var $oUl=$('.ad_LBT').children().eq(0);//ul
    $oUl.children().eq(0).css({
        left:0,opacity:1
    });
    function tab(iNow){
        $oOl.children().attr('class','');
        $oOl.children().eq(iNow).attr('class','active');
    }
    var zIndex=100;
    function next(){
        zIndex++;
        $oUl.children().eq(iNow).animate({
            left:0,opacity:0
        });
        iNow++;
        if(iNow==$oUl.children().length)iNow=0;
        $oUl.children().eq(iNow).css({
            left:0,zIndex:zIndex
        });
        $oUl.children().eq(iNow).animate({
            left:0,opacity:1
        });
      /*  $('.prev').css('zIndex',zIndex);
        $('.next').css('zIndex',zIndex);*/
        $oOl.css('zIndex',zIndex);
        tab(iNow);
    }
    function prev(){
        zIndex++;
        $oUl.children().eq(iNow).animate({
            left:0,opacity:0
        });
        iNow--;
        if(iNow==-1)iNow=$oUl.children().length-1;
        $oUl.children().eq(iNow).css({
            left:0,zIndex:zIndex
        });
        $oUl.children().eq(iNow).animate({
            left:0,opacity:1
        });
        $('.prev').css('zIndex',zIndex);
        $('.next').css('zIndex',zIndex);
        $oOl.css('zIndex',zIndex);
        tab(iNow);
    }
   /* $('.prev').click(function(){
        prev();
    });
    $('.next').click(function(){
        next();
    });*/
    $oOl.children().click(function(){
        if($(this).index()>iNow){
            $oUl.children().eq(iNow).animate({
               left:180,opacity:0
            });
            $oUl.children().eq($(this).index()).css('left',-180);
            $oUl.children().eq($(this).index()).animate({
                left:0,opacity:1
            });
        }else if($(this).index()<iNow){
            $oUl.children().eq(iNow).animate({
                left:-180,opacity:0
            });
            $oUl.children().eq($(this).index()).css('left',180);
            $oUl.children().eq($(this).index()).animate({
                left:0,opacity:1
            });
        }
        tab($(this).index());
        iNow=$(this).index();
    });
    $('.ad_LBT').children(0).mousemove(function(){
        clearInterval(timerB);
    });
    clearInterval(timerB);
    timerB=setInterval(next,3000);
    $('.ad_LBT').children(0).mouseout(function(){
        clearInterval(timerB);
        timerB=setInterval(next,3000);
    });

});

