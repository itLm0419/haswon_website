// header 导航切换
$(function(){
    $('nav a').click(function(){
        $(' nav a').removeClass('active');
        $(this).addClass('active');
    })
})
