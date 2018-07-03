// Just the starting part of the typescript side. For now I'm working on the CSS Grid part this will come later.
var dateclicked = function (item) {
    console.log('A date has been clicked! - ' + item);
};
function findtoday() {
    // a bit of javascript code to get today and first day of week / month.
    var Wday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = new Date();
    var TodayDay = Wday[day.getDay()];
    var d = day.getDay();
    var firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
    var lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);
    var firstdayofweek = new Date(day.getFullYear(), day.getMonth(), day.getDate() + (d == 0 ? -6 : 1) - d);
    var otherdayofweek = new Date(day.getFullYear(), day.getMonth(), day.getDate() + (d == 0 ? -0 : 7) - d);
    console.log('Days this month: ' + lastDay.getDate());
    console.log("First day of week: " + firstdayofweek);
    console.log("Other day of week: " + otherdayofweek);
    console.log('------------');
    console.log('Get the first and last day of the current month');
    console.log('First day: ' + firstDay + ' last day: ' + lastDay);
    document.getElementById("today-date").innerText = day.toDateString();
}
function GetSelectedMonth(iMonth) {
    // Month Array
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[iMonth];
}
function buildcalendar() {
    var dtoday = new Date();
    var dfirstDay = new Date(dtoday.getFullYear(), dtoday.getMonth(), 1);
    var dlastDay = new Date(dtoday.getFullYear(), dtoday.getMonth() + 1, 0);
    var iDays = dlastDay.getDate();
    var gridItems = "";
    var iItem = 1;
    for (iItem = 1; iItem <= iDays; iItem++) {
        var className = "day-item";
        if (dtoday.getDate() === iItem) {
            // Hightlight today!
            className += " selected";
        }
        var sDateLabel = iItem + ' ' + GetSelectedMonth(dtoday.getMonth());
        gridItems += '<div class="' + className + '" onclick="dateclicked(' + iItem + ')"><div>' + sDateLabel + '</div><div></div></div>';
    }
    document.getElementById("calendar-container").innerHTML = gridItems;
}
