/**...Task 1: Feet to Mile Conversion...*/
function feetToMile(feet) {
  if (feet <= 0) {
    return "Distance can not be Nagative or Zero. Please enter value again.";
  } else {
    var mile = feet * 0.00018939;

    return mile;
  }
}

/**...Task 2: Wood Calculator...*/
function woodCalculator(chairNumber, tableNumber, bedNumber) {
  if (chairNumber < 0 || tableNumber < 0 || bedNumber < 0) {
    return "Number of furniture can not be nagative. Please insert Number again.";
  } else {
    var woodForChair = chairNumber * 1;
    var woodForTable = tableNumber * 3;
    var woodForBed = bedNumber * 5;

    var totalWood = woodForChair + woodForTable + woodForBed;

    return totalWood;
  }
}

/**...Task 3: Brick Calculator... */
function brickCalculator(floors) {
  const brickPerFeet = 1000;
  if (floors <= 0) {
    return "Number of floors can not be Nagative or Zero. Please Enter valid value again.";
  } else if (floors <= 10) {
    var totalBrick = floors * 15 * brickPerFeet;
    return totalBrick;
  } else if (floors <= 20) {
    var brickFirstSection = 10 * 15 * brickPerFeet;
    var brickSecondSection = (floors - 10) * 12 * brickPerFeet;
    var totalBrick = brickFirstSection + brickSecondSection;

    return totalBrick;
  } else {
    var brickFirstSection = 10 * 15 * brickPerFeet;
    var brickSecondSection = 10 * 12 * brickPerFeet;
    var brickThirdSection = (floors - 20) * 10 * brickPerFeet;
    var totalBrick = brickFirstSection + brickSecondSection + brickThirdSection;

    return totalBrick;
  }
}

/**...Task 4: Tiny Friend Name... */
function tinyFriend(names) {
  var tinyName = names[0];
  if (names.length == 0) {
    return "Empty Array. Please Enter some value in Array";
  } else {
    for (i = 0; i < names.length; i++) {
      if (names[i] == "") {
        return " Empty String is not allowed";
      } else if (names[i].length < tinyName.length) {
        tinyName = names[i];
      }
    }
  }
  return tinyName;
}
