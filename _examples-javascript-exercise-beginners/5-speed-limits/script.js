console.log('5-speed-limits');

/*
<h3>Write a function which checks given input/parameter:</h3>

<ul>
  <li>If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'</li>
  <li>If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point </li>
  <li>If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'</li>
</ul>
*/

const SPEEDLIMIT = 70;
const KMPERPOINT = 5;

function checkSpeedLimit(curSpeed) {
  if (curSpeed <= SPEEDLIMIT) {
    return ('Good Safe Driving!');
  } else {
    let penaltyPoint = Math.floor((curSpeed - SPEEDLIMIT) / KMPERPOINT);
    if (penaltyPoint < 10) {
      return ('Speed Limit Crossed by Penalty Point: ' + penaltyPoint);
    } else {
      return ('License Suspended!');
    }
  }
}

let checkPoint1 = checkSpeedLimit(40);
console.log(checkPoint1);

let checkPoint2 = checkSpeedLimit(70);
console.log(checkPoint2);

let checkPoint3 = checkSpeedLimit(75);
console.log(checkPoint3);

let checkPoint4 = checkSpeedLimit(99);
console.log(checkPoint4);

let checkPoint5 = checkSpeedLimit(120);
console.log(checkPoint5);
