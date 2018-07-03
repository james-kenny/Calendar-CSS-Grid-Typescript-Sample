// Just the starting part of the typescript side. For now I'm working on the CSS Grid part this will come later.
var dateclicked = function (iYear, iMonth, iDay) {
    var dSelected = new Date(iYear, iMonth, iDay);
    console.log('A date has been clicked! - ' + dSelected + ' - ' + iYear + ' - ' + iMonth + ' - ' + iDay);
};
function buildcalendar(iMaxDays, dYear, dMonth, dDay) {
    console.log('Building our Calendar with Javascript');
    // Set a default day
    if (dYear === 0) {
        dYear = new Date().getFullYear();
    }
    if (dMonth === 0) {
        dMonth = new Date().getMonth();
    }
    else {
        dMonth -= 1;
    }
    if (dDay === 0) {
        dDay = new Date().getDate();
    }
    // Set the number of days to show on our new calendar.
    if (iMaxDays === 0) {
        // 0 is the default and will build for 1 month.
        iMaxDays = 36;
    }
    else {
        // Always add 1 to the requested amount.
        iMaxDays += 1;
    }
    var dSelectedDay = new Date(dYear, dMonth, dDay);
    var dToday = new Date();
    document.getElementById("today-date").innerText = dSelectedDay.toDateString();
    var d = dSelectedDay.getDay();
    var mondayOfWeek = new Date(dSelectedDay.getFullYear(), dSelectedDay.getMonth(), dSelectedDay.getDate() + (d == 0 ? -6 : 1) - d);
    var iDays = iMaxDays; // I want 35 days filled in from the first Monday, I count from 1 not 0 so 36 is our target.
    var iDayofWeek = 1; // Monday
    // Build the date we will use for the label.
    var dCurrentDate = new Date(mondayOfWeek.getFullYear(), mondayOfWeek.getMonth(), mondayOfWeek.getDate());
    var gridItems = "";
    for (var iItem = 1; iItem <= iDays; iItem++) {
        var className = "day-item";
        if (dToday.getFullYear() === dCurrentDate.getFullYear()) {
            if (dToday.getMonth() === dCurrentDate.getMonth()) {
                if (dToday.getDate() === dCurrentDate.getDate()) {
                    // Hightlight today!
                    className += " selected";
                }
            }
        }
        var sMonthLabel = "";
        var sDateLabel = "";
        var sDayLabel = "";
        if (iDayofWeek <= 7) {
            sDayLabel = GetDayLabel(iDayofWeek);
        }
        if (dSelectedDay.getMonth() !== dCurrentDate.getMonth()) {
            sMonthLabel = getshortmonth(dCurrentDate.getMonth());
            sDateLabel += sMonthLabel + " " + dCurrentDate.getDate();
        }
        else {
            sDateLabel += dCurrentDate.getDate().toString();
        }
        // Build the day item
        var grdItemHTML = '';
        if (iDayofWeek <= 7) {
            grdItemHTML += '<div class="day-header-label">' + sDayLabel + '</div>';
        }
        grdItemHTML += '<div class="date-label">' + sDateLabel + '</div>';
        grdItemHTML += '<div></div>';
        gridItems += '<div class="' + className + '" onclick="dateclicked(' + dCurrentDate.getFullYear() + ',' + dCurrentDate.getMonth() + ',' + dCurrentDate.getDate() + ')">' + grdItemHTML + '</div>';
        // Next day!
        dCurrentDate = addDays(dCurrentDate, 1);
        iDayofWeek++;
    }
    document.getElementById("calendar-days-container").innerHTML = gridItems;
}
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
function getshortmonth(iMonth) {
    // Month Array
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    return month[iMonth];
}
function GetDayLabel(iDay) {
    var days = new Array();
    days[1] = "Mon";
    days[2] = "Tue";
    days[3] = "Wed";
    days[4] = "Thr";
    days[5] = "Fri";
    days[6] = "Sat";
    days[7] = "Sun";
    return days[iDay];
}
function GetLongMonth(iMonth) {
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
