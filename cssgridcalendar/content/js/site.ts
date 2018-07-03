// Just the starting part of the typescript side. For now I'm working on the CSS Grid part this will come later.

var dateclicked = function (iYear, iMonth, iDay) {
    var dSelected = new Date(iYear, iMonth, iDay);

    console.log('A date has been clicked! - ' + dSelected + ' - '+ iYear + ' - ' + iMonth + ' - ' + iDay);


};

function findtoday() {
    // a bit of javascript code to get today and first day of week / month.
    var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = new Date();
    var TodayDay = Wday[day.getDay()];  
    var d = day.getDay(); 

    var firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
    var lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);

    var firstdayofweek = new Date(day.getFullYear(), day.getMonth(), day.getDate() + (d == 0?-6:1)-d );
    var otherdayofweek = new Date(day.getFullYear(), day.getMonth(), day.getDate() + (d == 0?-0:7)-d );

    console.log('Days this month: ' + lastDay.getDate());
    console.log("First day of week: " + firstdayofweek);
    console.log("Other day of week: " + otherdayofweek);
    console.log('------------');
    console.log('Get the first and last day of the current month');
    console.log('First day: ' + firstDay + ' last day: ' + lastDay);

    document.getElementById("today-date").innerText = day.toDateString();
}

function GetSelectedWeekDay(day){    
    var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return Wday[day.getDay()];
}

function GetSelectedMonth(iMonth)
{
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

function buildcalendarformonth() {
    var dtoday = new Date();
    
    var dfirstDay = new Date(dtoday.getFullYear(), dtoday.getMonth(), 1);

    var dlastDay = new Date(dtoday.getFullYear(), dtoday.getMonth() + 1, 0);
    var iDays = dlastDay.getDate();
    var gridItems = getDayLabels();
    var iItem = 1;

    for (iItem = 1; iItem <= iDays; iItem++) {
        var className = "day-item";

        if (dtoday.getDate() === iItem){
            // Hightlight today!
            className += " selected";
        }

        var sDateLabel = iItem + ' ' + GetSelectedMonth(dtoday.getMonth());
        gridItems += '<div class="' + className + '" onclick="dateclicked('  + iItem +  ')"><div>' + sDateLabel + '</div><div></div></div>';
    }

    
    document.getElementById("calendar-days-container").innerHTML = gridItems;
}


function buildcalendarforweek() {
    var dtoday = new Date();
    
    var d = dtoday.getDay(); 

    var mondayOfWeek = new Date(dtoday.getFullYear(), dtoday.getMonth(), dtoday.getDate() + (d == 0?-6:1)-d );

    var gridItems = getDayLabels();

    var iDays = mondayOfWeek.getDate() + 6;
    for (var iItem = mondayOfWeek.getDate(); iItem <= iDays; iItem++) {
        var className = "day-item";

        if (dtoday.getDate() === iItem){
            // Hightlight today!
            className += " selected";
        }

        var sDateLabel = iItem;


        gridItems += '<div class="' + className + '" onclick="dateclicked('  + iItem +  ')"><div>' + sDateLabel + '</div><div></div></div>';
    }

    
    document.getElementById("calendar-days-container").innerHTML = gridItems;
}

function buildcalendar(){    
    var dtoday = new Date();    
    var d = dtoday.getDay();
    var mondayOfWeek = new Date(dtoday.getFullYear(), dtoday.getMonth(), dtoday.getDate() + (d == 0?-6:1)-d );
    var iDays = 36; // I want 35 days filled in from the first Monday, I count from 1 not 0 so 36 is our target.

    // Build the date we will use for the label.
    var dCurrentDate = new Date(mondayOfWeek.getFullYear(), mondayOfWeek.getMonth(), mondayOfWeek.getDate());
    
    var gridItems = getDayLabels();

    for (var iItem = mondayOfWeek.getDate(); iItem <= iDays; iItem++) {
        var className = "day-item";
                
        if (dtoday.getDate() === iItem){
            // Hightlight today!
            className += " selected";
        }

        var sMonthLabel = "";
        var sDateLabel = "";

        if (dtoday.getMonth() !== dCurrentDate.getMonth()){
            sMonthLabel = getshortmonth(dCurrentDate.getMonth());
            sDateLabel = sMonthLabel + " " + dCurrentDate.getDate();
        }
        else{
            sDateLabel = dCurrentDate.getDate().toString();
        }


        gridItems += '<div class="' + className + '" onclick="dateclicked('  + dCurrentDate.getFullYear() + ',' + dCurrentDate.getMonth() + ',' + dCurrentDate.getDate() +  ')"><div>' + sDateLabel + '</div><div></div></div>';
        
        // Next day!
        dCurrentDate = addDays(dCurrentDate, 1);
    }


    document.getElementById("calendar-days-container").innerHTML = gridItems;
    
    
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function getshortmonth(iMonth)
  {
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

  function getDayLabels(){



      return '<div class="day-header">Mon</div><div class="day-header">Tue</div><div  class="day-header"> Wed</div><div class="day-header">Thu</div><div class="day-header">Fri</div><div class="day-header">Sat</div><div class="day-header">Sun</div>';
  }