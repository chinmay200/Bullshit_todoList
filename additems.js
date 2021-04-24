$(function () {
    var tskbtn = $('.newtsk');
    $('.task-detail').hide();

    var doc = $(document);
    var addtskbtn = $('.add');
    var list = $('.list');
    var del = $('.del')


    //COUNT NUMBER OF ITEMS
    function cntupdate() {
        var cnt = 0;
        for (cnt; cnt < $('.list-elem').length; cnt++);
        $('.taskcount strong').text(cnt);
        var num = cnt;
        return ++num;
    }
    //ADD NEW TASK;
    tskbtn.on('click', function () {
        tskbtn.hide();
        $('.task-detail').fadeIn(500);
    });
    //TASK FILTER
    var urgency = '';
    $('#urgent').on('click', (e) => {
        urgency = (e.target.value);
    });
    $('#not-urgent').on('click', (e) => {
        urgency = (e.target.value);
    });
    addtskbtn.on('click', function () {
        if (urgency.length == 0) {
            urgency = 'noturgent';
        }
        $('.deletek').show();
        var txt = $('.task').val();
        if (txt.length != 0) {
            if (urgency == 'urgent') {
                $('.list-urgent').append('<li class = "list-elem">' + cntupdate() + " . " + txt + '<div class=\"delete\">' +
                    '<div class=\"delete1\">' + '</div>' +
                    '<div class=\"delete2\">' + '</div>' +
                    '</div>' + '</li>');
            }
            else {
                $('.list-noturgent').append('<li class = "list-elem">' + cntupdate() + " . " + txt + '<div class=\"delete\">' +
                    '<div class=\"delete1\">' + '</div>' +
                    '<div class=\"delete2\">' + '</div>' +
                    '</div>' + '</li>');
            }
        };
        $('.task-detail').hide();
        $('.task').val('');
        tskbtn.fadeIn(500);
        cntupdate();
    });
    //END OF ADD TASK BUTTON

    //DELETE TASK
    $(del).on('click', '.delete', function (e) {
        $(this).parent('li').animate({
            // paddingBottom: '+=100px',
            opacity: 0.0
        }, 100 , () => {
            $(this).parent('li').remove();
        });
    });
    setInterval(() => {
        cntupdate();
    }, 1000);
    //END OF DELETE TASK BUTTON
});