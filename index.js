function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else { // distance > 2500
    return 'No can do.';
  }
}

function ternaryCheckCity(){
  // Write your code here!
}function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(){
  // Write your code here!
}function switchOnCharmFromTip(tipStatus) {
  switch (tipStatus) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default: // This handles any other tipStatus
      return 'Bye.';
  }
}