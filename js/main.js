//Закрепление меню
$(window).scroll(function(){
    var docscroll = $(document).scrollTop();
    if(docscroll > $(window).height())
    {
        $('.main-menu').addClass('fixed-menu');
        $('.main-menu li').addClass('fixed-menu__item');
    }
    else
    {
        $('.main-menu').removeClass('fixed-menu');
        $('.main-menu li').removeClass('fixed-menu__item');
    }
});

//Создание модального окна
$(document).ready(function(){
    $(".modalbox").fancybox(); //Показать модальное окно
    $(".feedback-box__form").submit(function(){ return false; });
    $(".feedback-box__form__btn").on("click", function(){         
        // действия по обработке формы
        $(".feedback-box__form").fadeOut("fast", function(){
            $(this).before("<p><strong>Нажаль ця опція ще тестується!</strong></p>");
            setTimeout("$.fancybox.close()", 5000);
        });
    });
});

//Заглушки на ссылки
$(document).ready(function(){
    $('.link-lockup').on('click', function(){
        Swal.fire({
            title: 'Це посилання поки не активне.',
            icon: 'success'
          })
    });
});

//Обработка со спискои дисциплин  
$(document).ready(function () {
    $('.check-btn').on("click", function () {
        $(this).addClass('some');
        if ($(this).is(':checked')) {
            $(this).closest('.list-item__title').siblings('.list-item__content').css('display', 'block');
            $(this).siblings('.label').children('.fas').css('transform', 'rotate(180deg)');
        }
        else
        {
            $(this).closest('.list-item__title').siblings('.list-item__content').css('display', 'none');
            $(this).siblings('.label').children('.fas').css('transform','rotate(0deg)');
        }
    })
});

//Изменить отображение столбцов в расписании
$(document).ready(function () {
    $("#course-select" ).change(function() {
        let select = document.getElementById("course-select");
        let course = select.value.substr(0, 1);
        $('.course-1').css('display', 'none');
        $('.course-2').css('display', 'none');
        $('.course-3').css('display', 'none');
        $('.course-4').css('display', 'none');
        $('.course-5').css('display', 'none');
        $('.course-'+course).css('display', 'table-cell');
    });    
});

