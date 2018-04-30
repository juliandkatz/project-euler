const SUNDAY = 'SUNDAY'
const FEBRUARY = 'FEBRUARY'
MONTHS_AND_DAYS = [
  { month: 'JANUARY', days: 31 },
  { month: FEBRUARY, days: 28 },
  { month: 'MARCH', days: 31 },
  { month: 'APRIL', days: 30 },
  { month: 'MAY', days: 31 },
  { month: 'JUNE', days: 30 },
  { month: 'JULY', days: 31 },
  { month: 'AUGUST', days: 31 },
  { month: 'SEPTEMBER', days: 30 },
  { month: 'OCTOBER', days: 31 },
  { month: 'NOVEMBER', days: 30 },
  { month: 'DECEMBER', days: 31 }
]

DAYS_OF_THE_WEEK = [ SUNDAY, 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY' ]

const startingDay = 1
let thisDay = startingDay
let firstSundays = 0

const endYear = 2001
// const endYear = 2000
// const endYear = 1901

for (let year = 1900; year < endYear; year++) {
  let daysPassedThisYear = 0
  const daysThisYear = getDaysThisYear(year)

  let currentMonth = 0
  let dayInTheMonth = 1 
  let dayLeaped = false

  while (daysPassedThisYear < daysThisYear) {
    dayOfWeek = DAYS_OF_THE_WEEK[thisDay]

    if (dayOfWeek === SUNDAY && dayInTheMonth === 1) {
      if (year > 1900) {
        firstSundays++  
      }
    }

    // INCREMENT
    thisDay = getNextDayOfWeekIndex(thisDay)

    dayInTheMonth++
    // console.log(dayInTheMonth, MONTHS_AND_DAYS[currentMonth].days)
    if (dayInTheMonth > MONTHS_AND_DAYS[currentMonth].days) {
      if (MONTHS_AND_DAYS[currentMonth].month === FEBRUARY && isLeapYear(year) && !dayLeaped) {
        dayLeaped = true
        console.log('dayLeaped')
      } else {
        dayInTheMonth = 1
        currentMonth++
        // console.log('currentMonth ', currentMonth)
      }
    }

    daysPassedThisYear++
  } 
}

console.log('firstSundays ', firstSundays)

function isLeapYear (year) {
  return year % 4 === 0 && year !== 1900
}

function getDaysThisYear (year) {
  return isLeapYear(year) ? 366 : 365
}

function getNextDayOfWeekIndex (index) {
  return (index + 1) % 7
}

/*
 * We're going through a mod 7 number system (0-6).  That's what we'll use
 * for days of the week.
 */


/* 
  • 1 Jan 1900 was a Monday.
  • Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
  • A leap year occurs on any year evenly divisible by 4, but not on a
    century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth
century (1 Jan 1901 to 31 Dec 2000)?
*/
