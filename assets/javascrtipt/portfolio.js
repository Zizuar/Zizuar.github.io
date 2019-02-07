// *****Set the unit values in milliseconds.*****

var msecPerMinute = 1000 * 60;
var msecPerHour = msecPerMinute * 60;
var msecPerDay = msecPerHour * 24;

// *****Setting dates*****

var today = new Date();
var startDate = new Date('03/01/2006 11:00:00');

// *****Calculate time elapsed, in MS*****
var interval = today.getTime() - startDate.getTime();

var days = Math.floor(interval / msecPerDay );
interval = interval - (days * msecPerDay );

var weeks = 0;
while(days >= 7)
{
days = days - 7;
weeks = weeks + 1;
}

var months = 0;
while(weeks >= 4)
{
weeks = weeks - 4;
months = months + 1;
}

var years = 0;
while(months >= 12)
{
months = months - 12;
years = years + 1;
}

// Calculate the hours, minutes, and seconds.
var hours = Math.floor(interval / msecPerHour );
interval = interval - (hours * msecPerHour );

var minutes = Math.floor(interval / msecPerMinute );
interval = interval - (minutes * msecPerMinute );

var seconds = Math.floor(interval / 1000 );
