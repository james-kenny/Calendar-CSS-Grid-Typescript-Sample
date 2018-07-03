// Just the starting part of the typescript side. For now I'm working on the CSS Grid part this will come later.

var dateclicked = function (item) {
    console.log('A date has been clicked! - '+ item);
};

function findtoday() {
    
    var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = new Date();
    var TodayDay = Wday[day.getDay()];   
    document.getElementById("today-date").innerText = day.toDateString();


}