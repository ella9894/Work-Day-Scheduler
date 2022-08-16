var date = moment().format('dddd, MMMM Do');
var time = moment().hour();
console.log(typeof time, time);
var taskArray = JSON.parse(localStorage.getItem(('tasks'))) || [];



$("#currentDay").html(date);

$(".time-block").each(function () {
    // var blockHour = parseInt($(this).children(".hour").text().trim());
    var block = parseInt($(this).children("id").text().trim());
    console.log(block);
    // console.log(typeof blockHour, blockHour);
        
    if (block < time) {
        // $(this).removeClass("present")
        // $(this).removeClass("future")
        $(this).addClass("past");
    } else if (block === time) {
        // $(this).removeClass("past future");
        $(this).addClass("present");
    } else {
        // $(this).removeClass("past present");
        $(this).addClass("future");
    }

    // taskArray.forEach(element => {
    //     if (element.savedTime === blockHour) {
    //         $(this).children(".description").val(element.text);
    //     }
        
    // });
});

$(".saveBtn").click(function () {
    var text = $(this).siblings(".description").val();
   
    var savedTime = $(this).siblings(".hour").text().trim();
    var TimeText = { text, savedTime };
    taskArray.push(TimeText);
        
    localStorage.setItem("tasks",JSON.stringify(taskArray));
})





    
