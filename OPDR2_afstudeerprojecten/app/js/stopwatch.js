// #################### STOPWATCH #################### //

// 325 days 19h 16m 14s
// till next acadedmix year 2023-24

var x = setInterval(function () {
  // Datum naar waar we moeten aftellen
  const startDate = new Date(1663569900000); // Output = 2022-09-19T06:45:00.000Z
  // Huidige datum selecteren
  const dateStopwatchNow = new Date().getTime(); // Output (variabel) = 1668423635580
  const dateRightFormat2 = new Date(dateStopwatchNow); // Output = 2022-11-14T09:34:16.517Z

  // Verschil berekenen tussen 2 datums
  const distanceStopWatch = dateRightFormat2 - startDate; // Output 26600836183
  console.log(distanceStopWatch);
  const distanceStopwatchRightFormat =
    distanceStopWatch / (1000 * 60 * 60 * 24); // Output = XXX (days)
  console.log(distanceStopwatchRightFormat);

  // dagen, uren, minuten en seconden berekenen

  var days1 = Math.floor(distanceStopWatch / (24 * 60 * 60 * 1000));
  var hours1 = Math.floor(
    (distanceStopWatch % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  var minutes1 = Math.floor(
    (distanceStopWatch % (1000 * 60 * 60)) / (60 * 1000)
  );
  var seconds1 = Math.floor((distanceStopWatch % (60 * 1000)) / 1000);

  // test

  let a = "";
  let b = "";
  let c = "";
  if (hours1 < 10) {
    a = "0";
  } else {
    a = "";
  }
  if (minutes1 < 10) {
    b = "0";
  } else {
    b = "";
  }
  if (seconds1 < 10) {
    c = "0";
  } else {
    c = "";
  }

  // dagen, uren, minuten en seconden samenvoegen
  var finalStopwatch =
    days1 +
    "days " +
    hours1.toLocaleString("nl-BE", {
      minimumIntegerDigits: 2,
      useGrouping: true,
    }) +
    "h " +
    minutes1 +
    "m " +
    c +
    seconds1 +
    "s " +
    "\n running in current academic year 2022-2023";

  const $clockCurrentYear = document.querySelector(".clock-current-year");
  $clockCurrentYear.innerHTML = finalStopwatch;
  // console.log(finalStopwatch);
}, 1000);

// #################### COUNTDOWN #################### //

// 325 days 19h 16m 14s
// till next acadedmix year 2023-24

var y = setInterval(function () {
  // Datum naar waar we moeten aftellen
  const countdownDate = new Date(1695019500000); // Output = 2023-09-18T06:45:00.000Z

  // Huidige datum selecteren
  const dateCountdownNow = new Date().getTime();
  const dateRightFormat = new Date(dateCountdownNow); // Output = 2022-11-14T09:34:16.517Z

  // Verschil berekenen tussen 2 datums
  const distanceCountdown = countdownDate - dateRightFormat; // Output 26600836183
  const distanceRightFormat = distanceCountdown / (24 * 360 * 1000); // Output = XXX (days)

  // dagen, uren, minuten en seconden berekenen
  let days2 = Math.floor(distanceCountdown / (1000 * 360 * 24));
  let hours2 = Math.floor(
    (distanceCountdown % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  let minutes2 = Math.floor(
    (distanceCountdown % (1000 * 60 * 60)) / (1000 * 60)
  );
  let seconds2 = Math.floor((distanceCountdown % (1000 * 60)) / 1000);

  // dagen, uren, minuten en seconden samenvoegen

  let finalTimer =
    days2 + "days " + hours2 + "h " + minutes2 + "m " + seconds2 + "s";

  const $clockNextYear = document.querySelector(".clock-next-year");
  $clockNextYear.innerHTML = finalTimer;

  const extraStringCountdown = "\n till next academic year 2023-24";
  $clockNextYear.append(extraStringCountdown);
}, 1000);
