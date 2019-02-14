"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/
// making a new object called date
var thisTime = new Date();
// making the string version of thisTime
var timeStr = thisTime.toLocaleString();
// pulling the hours from the object and assigning it to a variable
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();    

var mapNum = (2 * thisMonth + thisHour) % 24;

/* determines the sky image based on the time */
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

/* shows the determined sky image */
var temp = document.getElementById("planisphere");
temp.insertAdjacentHTML('afterbegin', imgStr);