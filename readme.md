This is a quick experimental project I am working on for building a CSS Grid calendar and using type script to power the functions. 

It might never come to anything or the start of something really bad. 

The idea of building this is for a function I need in another project, but also to expand my own skills in CSS Grid and Type script. 

The calendar is built from a javascript function. You can pass in a date or it will use today. It goes to the start of the week. Then builds the calendar from there based on the number of days you want to see. If you set it to only show 0 it will use a default of 35 days. Or you can tell it to give you a full year or just 10 days. It will then render the HTML in the javascript and load the grid onto the screen.

`
    buildcalendar(0, 0, 0, 0);
`

By default this will load 35 days from the Monday of the current week.

`
buildcalendar(7, 0, 0, 0);
`

This will show just this week.

