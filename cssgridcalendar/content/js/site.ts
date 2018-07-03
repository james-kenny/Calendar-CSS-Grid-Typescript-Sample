// Just the starting part of the typescript side. For now I'm working on the CSS Grid part this will come later.

var dateclicked = function (item) {
    console.log('A date has been clicked! - '+ item);
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

function buildcalendar() {
    var dtoday = new Date();
    var dfirstDay = new Date(dtoday.getFullYear(), dtoday.getMonth(), 1);
    var dlastDay = new Date(dtoday.getFullYear(), dtoday.getMonth() + 1, 0);
    var iDays = dlastDay.getDate();

    var iItem = 0;
    for (iItem = 0; iItem <= iDays; iItem++) {
        if (dtoday.getDate() === iItem){
            console.log("TODAY!!! - " + iItem   );
        }
        else{
            console.log('Boom Day - ' + iItem);
        }
        

    }

}