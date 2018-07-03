This is a quick experimental project I am working on for building a CSS Grid calendar and using type script to power the functions. 

The calendar is built from a vanilla javascript function. You can pass in a date or it will use today. It goes to the start of the week. Then builds the calendar from there based on the number of days you want to see. If you set it to only show 0 it will use a default of 35 days. Or you can tell it to give you a full year or just 10 days. It will then render the HTML in the javascript and load the grid onto the screen.

![sample Grid image](https://raw.githubusercontent.com/mordin/Calendar-CSS-Grid-Typescript-Sample/master/sample.png)

`
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            buildcalendar(0, 0, 0, 0);
        });
    </script>
`

By default this will load 35 days from the Monday of the current week.

`

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            buildcalendar(0, 0, 0, 0);
        });
    </script>

`

This will show just this week.

