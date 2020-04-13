
// var workDay = {
//     "9 AM": "",
//     "10 AM": "",
//     "11 AM": "",
//     "12 PM": "",
//     "1 PM": "",
//     "2 PM": "",
//     "3 PM": "",
//     "4 PM": "",
//     "5 PM": "",
// };

$(document).ready(function () {

    $(".saveBtn").on("click", function () {

        var value = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);

    })


    // if (!localStorage.getItem('workDay')) {

    //     updateCalendarTasks(workDay);

    // } else {

    //     updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));

    // }

    function hourUpdater() {

        var currentHour = moment().hours();

        // $(".time-block").each(function () {

        //     var blockHour

            $(".time-block").each(function () {

                var blockHour = parseInt($(this).attr("id").split("-")[1])

            // })

            if (blockHour < currentHour) {

                $(this).addClass("past")

            } else if

                (blockHour === currentHour) {

                $(this).removeClass("past")

                $(this).addClass("present")


            } else {

                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).removeClass("future")
            }


        })


    }

    hourUpdater();

    var interval = setInterval(hourUpdater, 15000)

    $("#hour-9 .description").val(localStorage.getItem("hour-9"))

    $("#hour-9 .description").val(localStorage.getItem("hour-9"))

    $("#hour-10 .description").val(localStorage.getItem("hour-10"))

    $("#hour-11 .description").val(localStorage.getItem("hour-11"))

    $("#hour-12 .description").val(localStorage.getItem("hour-12"))

    $("#hour-13 .description").val(localStorage.getItem("hour-13"))

    $("#hour-14 .description").val(localStorage.getItem("hour-14"))

    $("#hour-15 .description").val(localStorage.getItem("hour-15"))

    $("#hour-16 .description").val(localStorage.getItem("hour-16"))

    $("#hour-17 .description").val(localStorage.getItem("hour-17"))

    $("#currentDay").text(moment().format("dddd, MMMM, Do"))


})

// $("#date-today h-6").text(moment().format('dddd') + " , " + moment().format("MMMM Do YYYY"));

// var counter = 1;

// for (const property in workDay) {

//     var textEntry = "#text-entry" + counter;

//     $(textEntry).text(workDay[property]);

//     var timeId = "#time" + counter;

//     var presentHour = moment().hour();

//     var timeString = $(timeId).text();

//     var timeNumber = hourNumberFromHourString(timeString);

//     if (timeNumber < presentHour) {

//         $(textEntry).addClass("past-hour");

//     } else if (timeNumber > presentHour) {

//         $(textEntry).addClass("future-hour");

//     } else {

//         $(textEntry).addClass("present-hour");

//     }

//     counter++;

// }

// $("button").click(function () {

//     value = $(this).siblings("text area").val();

//     hourString = $(this).siblings("div").text();

//     saveSchedule(hourString, value);

// });

// function hourNumberFromHourString(hourString) {

//     switch (hourString) {

//         case "9 AM": return 9;
//         case "10 AM": return 10;
//         case "11 AM": return 11;
//         case "12 AM": return 12;
//         case "1 PM": return 13;
//         case "2 PM": return 14;
//         case "3 PM": return 15;
//         case "4 PM": return 16;
//         case "5 PM": return 17;
//     }

// }

// function loadCorrectDataset() {

//     result = localStorage.getItem('workDay')
//     return (result ? result : workDay);

// }

// function initializeLocalStorage() {

//     localStorage.setItem('workDay', JSON.stringify(workDay));

// }

// function saveToLocalStorage(dayObject) {

//     localStorage.setItem('workDay', JSON.stringify(dayObj));

// }

// function saveSchedule(hourString, val) {

//     if (!localStorage.getItem('workDay')) {

//         initializeLocalStorage();
//     }

//     var workHours = JSON.parse(localStorage.getItem('workDay'));

//     workHours[hourString] = val

//     saveToLocalStorage(workHours);

// }

// function updateCalendarTasks(dayObject) {

//     $(".calendar-row").each(function (index) {

//         var res = $(this).append("div");

//         $(this).children("text area").text(dayObject[res.text()]);

//     })
// }

