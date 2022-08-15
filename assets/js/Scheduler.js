var date = moment().format('dddd, MMMM Do');
var currentDay = document.querySelector('#currentDay');
var time = moment().format('hA');

$("#currentDay").html(date);

$(".time-block").each(function () {
    var blockHour = $(this).children(".hour").text().trim();
    console.log(blockHour);
    if (blockHour < time) {
        $(this).removeClass("present future")
        $(this).addClass("past");
    } else if (blockHour === time) {
        $(this).removeClass("past future");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past present");
        $(this).addClass("future");
    }
});

$(".saveBtn").click(function () {
    var text = $(".description");
    // var savedTime = $("this").parent("text");
        
    localStorage.setItem("task",JSON.stringify(text));
})

$(".description").each(function () {
    localStorage.getItem('test');
})

    
