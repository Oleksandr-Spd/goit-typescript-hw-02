/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DAY {
  Sunday = "DAYOF",
  Monday = "WORKDAY",
  Tuesday = "WORKDAY",
  Wednesday = "WORKDAY",
  Thursday = "WORKDAY",
  Friday = "WORKDAY",
  Saturday = "DAYOF",
}

function isWeekend(status: DAY) {
  console.log(DAY);
}

isWeekend(DAY.Sunday);
