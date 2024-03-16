/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DAY {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(day: DAY): boolean {
  console.log(DAY);
  return day === DAY.Saturday || day === DAY.Sunday;
}

isWeekend(DAY.Sunday);
