/*jslint browser:true */
"use strict";

function addMonths(el) {
  let annualUseKw = 0,
    dailyUseKw = 0,
    i = 0,
    x = 0;
  let months = document.getElementById(el).getElementsByTagName("input");

  for (i = 0; i < months.length; i++) {
    x = +months[i].value;
    annualUseKw += x;
  }
  dailyUseKw = annualUseKw / 365;
  return dailyUseKw;
}

function sunHrs() {
  let hrs;
  let theZone = document.forms.solarForm.zone.selectedIndex;
  theZone += 1;
  switch (theZone) {
    case 1:
      hrs = 6;
      break;
    case 2:
      hrs = 5.5;
      break;
    case 3:
      hrs = 5;
      break;
    case 4:
      hrs = 4.5;
      break;
    case 5:
      hrs = 4.2;
      break;
    case 6:
      hrs = 3.5;
      break;
    default:
      hrs = 0;
  }
  return hrs;
}

function calculatePanel() {
  let userChoice = document.forms.solarForm.panel.selectedIndex;
  let panelOptions = document.forms.solarForm.panel.options;
  let power = panelOptions[userChoice].value;
  let name = panelOptions[userChoice].text;
  let x = [power, name];
  return x;
}

function calculateSolar() {
  let dailyUseKw = addMonths("mpc");
  //   console.log(dailyUseKw);

  let sunHrsPerDay = sunHrs();
  //   console.log(sunHrsPerDay);

  let minKwNeeds = dailyUseKw / sunHrsPerDay;
  //   console.log(minKwNeeds)

  let realKwNeeds = minKwNeeds * 1.25;
  //   console.log(realKwNeeds)

  let realWattNeeds = realKwNeeds * 1000;
  //   console.log(realWattNeeds)

  let panelInfo = calculatePanel();
  //   console.log(panelInfo);
  let panelOutput = panelInfo[0];
  let panelName = panelInfo[1];
//   console.log(panelOutput);
//   console.log(panelName);

  let panelsNeeded = Math.ceil(realWattNeeds / panelOutput);
//   console.log(panelsNeeded);

  let feedback = "";
  feedback +=
    "<p> Based on your average daily use of " +
    Math.round(dailyUseKw) +
    " kwh, you will need to purchase " +
    panelsNeeded +
    " " +
    panelName +
    " solar panels to offset 100% of your electric bill.</p>";
  feedback += "<h2>Additional Details</h2>";
  feedback +=
    "<p>Your average daily electricity consumption: " +
    Math.round(dailyUseKw) +
    " kwh per day.</p>";
  feedback +=
    "<p>Average sunshine hours per day: " + sunHrsPerDay + " hours.</p>";
  feedback +=
    "<p>Realistic watts needed per hour: " +
    Math.round(realWattNeeds) +
    " watts/hr.</p>";
  feedback +=
    "<p>The " +
    panelName +
    " panel you selected generates about " +
    panelOutput +
    " watts per hour.</p>";

  document.getElementById("feedback").innerHTML = feedback;
}
