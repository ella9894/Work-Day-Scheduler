var date = moment().format('dddd, MMMM Do');
var currentDay = document.querySelector('#currentDay');
var time = moment().format('hA');
console.log(time);
var taskArray = JSON.parse(localStorage.getItem(('tasks'))) || [];
console.log(taskArray);

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
        
    localStorage.setItem("tasks",JSON.stringify(taskArray));
})





    
