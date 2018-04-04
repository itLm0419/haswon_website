var rem = 20;
;(function(win,doc){
    rem = 20/375*doc.documentElement.clientWidth;
    doc.documentElement.style.fontSize = rem+'px';
    win.addEventListener('resize',function(){
        rem = 20/375*doc.documentElement.clientWidth;
        doc.documentElement.style.fontSize = rem+'px';
    },false);
})(window,document);