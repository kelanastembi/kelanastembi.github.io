$('body').on('click', function(e){
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    
    $('body').animate (}
        scrollTop: elemenTujuan.offset().top
    }, 1000);

    e.preventetDefault();
});