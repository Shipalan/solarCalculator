function floor(diameter) {
  let radius = diameter / 2;
  let floorArea = Math.PI * (radius * radius);
//   console.log(floorArea);
  return floorArea
} //end of function

function walls(diameter, height) {
  let radius = diameter / 2;
  let cuircumference = 2 * Math.PI * radius;
  let wallArea = cuircumference * height;
//   console.log(wallArea);
return wallArea
} //end of function

function materialsNeeded() {
    let d = document.getElementById("across").value;
    let h = document.getElementById("height").value;

    let carpetNeeded = Math.ceil(floor(d))
    let paintNeeded = Math.ceil(walls(d,h))
    console.log('Carpet needed is ' + carpetNeeded + ' sqft')
    console.log('Paint needed is ' + paintNeeded + ' sqft')

} //end of function


