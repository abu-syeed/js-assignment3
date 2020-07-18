// 1st PROBLEM -- feetToMile function
function feetToMile(feet) {
  if (feet < 0) {
    var mileResult = "Error! Negetive Value is not accepted";
  }
  else {
    var mile = feet / 5280;
    var mileResult= mile.toFixed(2);
  }
  console.log("length in Mile: ", mileResult);
  return mileResult;
}


// 2nd PROBLEM -- woodCalculator is here--
function woodCalculator(chair, table, bed){
    var totalWoodForChair = chair * 1;
    var totalWoodForTable = table * 3;
    var totalWoodForBed = bed * 5;
    var totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBed;
    return totalWood;
}

var result = woodCalculator(10, 5, 3);
console.log(result);

}


//3rd PROBLEM -- brickCalculator

function brickCalculation(floor) {
  if (floor < 0) {
    var brickResult = "Error! Negetive Value is not accepted";
  }
  else if (floor > 0 && floor <= 10) {
    var firstTenFloor = 1000 * 15 * floor;
    var brickResult = firstTenFloor;
  }
  else if (floor >= 11 && floor <= 20) {
    var nextTenFloor = (1000 * 15 * 10) + (1000 * 12 * (floor - 10));
    var brickResult = nextTenFloor;
  }
  else {
    var finalFloors = (1000 * 15 * 10) + (1000 * 12 * 10) + (1000 * 10 * (floor - 20));
    var brickResult = finalFloors;
  }
  console.log("Required number of bricks: ", brickResult);
  return brickResult;
}


// 4th PROBLEM -- tinyFriend is here

function tinyFriends(name) {

    var smallestName = name[0];

    for (var i = 1; i < name.length; i++) {
        var compareName = name[i];
        if (compareName.length < smallestName.length) {
            smallestName = compareName;
        }
    }

    return smallestName;
}
var result = tinyFriends(["jamal", "kamal", "rakibul"]);
console.log("Smallest Name : ", result);

}