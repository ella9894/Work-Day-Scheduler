var date = moment().format('dddd, MMMM Do');
var time = moment().hour();
var taskArray = JSON.parse(localStorage.getItem(("tasks"))) || [];

$("#currentDay").html(date);

$(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split('-')[1]);
    if (blockHour < time) {
        $(this).addClass("past");
    } else if (blockHour === time) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");    
    }
    
    taskArray.forEach(element => {
        if (element.savedTime === blockHour) {
            $(this).children(".description").val(element.text);
        }
    });
});

$(".saveBtn").click(function () {
    var text = $(this).siblings(".description").val();
    var savedTime = $(this).siblings(".hour").text().trim();
    var TimeText = { text, savedTime };
    taskArray.push(TimeText);
        
    localStorage.setItem("tasks", JSON.stringify(taskArray));
});





    
