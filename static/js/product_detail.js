function showSizes() {
    option = document.getElementById("size-option");
    if(option.classList.contains("show")) {
        option.style.display = "none"
    } else {
        option.style.display = "flex"
    }
    option.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.size')) {
        option = document.getElementById("size-option");
        option.style.display = "none"
        option.classList.remove("show");
    }
}

$(document).ready(function () {
    $('.choose-option').click(function () {
        size = document.getElementById("size");
        size.innerText = $(this).html();
        size.style.opacity = "1";
    });
});

var afterWeek = new Date(+new Date + 6048e5);
Month = afterWeek.getMonth();
Day = afterWeek.getDate();
switch (Month) {
    case 0: fMonth = "января"; break;
    case 1: fMonth = "февраля"; break;
    case 2: fMonth = "марта"; break;
    case 3: fMonth = "апреля"; break;
    case 4: fMonth = "мая"; break;
    case 5: fMonth = "июня"; break;
    case 6: fMonth = "июля"; break;
    case 7: fMonth = "августа"; break;
    case 8: fMonth = "сентября"; break;
    case 9: fMonth = "октября"; break;
    case 10: fMonth = "ноября"; break;
    case 11: fMonth = "декабря"; break;
}
orderDate = document.getElementById("order-date");
orderDate.innerText = Day + " " + fMonth;

var colorList = ['000000', 'FF6633', '666633', 'CC66FF', 'FFFF66', '99FF66', 'FFFFFF'];
var picker = $('#color-picker');

for (var i = 0; i < colorList.length; i++) {
    picker.append('<li class="color-item" data-hex="' + '#' + colorList[i] + '" style="background-color:' + '#' + colorList[i] + ';"></li>');
}

$('body').click(function () {
    picker.fadeOut();
});

$('.call-picker').click(function (event) {
    event.stopPropagation();
    picker.fadeIn();
    picker.children('li').hover(function () {
        var codeHex = $(this).data('hex');

        $('.color-holder').css('background-color', codeHex);
        $('#pickcolor').val(codeHex);
    });
});