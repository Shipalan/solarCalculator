// console.log(elementID);

// console.log(elementID.length);

function showStuff(el) {
  let elementID = document.getElementById(el);
  for (i = 0; i < elementID.length; i++) {
    if (elementID[i].selected === true) {
      let x = elementID[i].text;
      return x;
    }
  }
}

function showMore(el) {
  let elementID = document.getElementsByName(el);
  // console.log(elementID.length)
  let myCheck = '';
  for (let i = 0; i < elementID.length; i++) {
    //   console.log(elementID[i].checked)
    //   console.log(elementID[i].value)
    if (elementID[i].checked === true) {
      myCheck = myCheck + elementID[i].value + '<br>';
    }
  }
  return myCheck
}

function evaluatePage() {
  let feedbackState = showStuff("state");
  let feedbackHome = showStuff("home");
  let feedbackLight = showMore("bulb");
  document.getElementById("output").innerHTML =
    feedbackState + "<br>" + feedbackHome + '<br>' + feedbackLight;
}
