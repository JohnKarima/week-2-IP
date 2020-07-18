var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var year = parseInt(document.getElementById("year").value);
var month = parseInt(document.getElementById("month").value);
var day = parseInt(document.getElementById("day").value);

function zeller(month, day, year) {
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);


  if (month < 3) {
    month += 12; year -= 1;
  }
  var h = (day + parseInt(((month + 1) * 26) / 10) +
    year + parseInt(year / 4) + 6 * parseInt(year / 100) +
    parseInt(year / 400) - 1) % 7;
  //return h;
  //alert(h);

  var qwerty = h;
  alert(qwerty)




function getGender() {
  var gender = document.querySelector('input[name="gender"]:checked').value;

  switch (gender) {
    case "male":
      if (qwerty == 0) {
        alert("You were born on " + daysOfTheWeek[0] + " and Your akan name is " + akanMale[0] + "!");
      }
      else if (qwerty == 1) {
        alert("You were born on " + daysOfTheWeek[1] + " and Your akan name is " + akanMale[1] + "!");
      }
      
      else if (qwerty == 2) {
        alert("You were born on " + daysOfTheWeek[2] + " and Your akan name is " + akanMale[2] + "!");
      }
      else if (qwerty == 3) {
        alert("You were born on " + daysOfTheWeek[3] + " and Your akan name is " + akanMale[3] + "!");
      }
      else if (qwerty == 4) {
        alert("You were born on " + daysOfTheWeek[4] + " and Your akan name is " + akanMale[4] + "!");
      }
      else if (qwerty == 5) {
        alert("You were born on " + daysOfTheWeek[5] + " and Your akan name is " + akanMale[5] + "!");
      }
      else if (qwerty == 6) {
        alert("You were born on " + daysOfTheWeek[6] + " and Your akan name is " + akanMale[6] + "!");
      }
      break;
      case "female":
        if (qwerty == 0) {
          alert("You were born on " + daysOfTheWeek[0] + " and Your akan name is " + akanFemale[0] + "!");
        }
        else if (qwerty == 1) {
          alert("You were born on " + daysOfTheWeek[1] + " and Your akan name is " + akanFemale[1] + "!");
        }
        else if (qwerty == 2) {
          alert("You were born on " + daysOfTheWeek[2] + " and Your akan name is " + akanFemale[2] + "!");
        }
        else if (qwerty == 3) {
          alert("You were born on " + daysOfTheWeek[3] + " and Your akan name is " + akanFemale[3] + "!");
        }
        else if (qwerty == 4) {
          alert("You were born on " + daysOfTheWeek[4] + " and Your akan name is " + akanFemale[4] + "!");
        }
        else if (qwerty == 5) {
          alert("You were born on " + daysOfTheWeek[5] + " and Your akan name is " + akanFemale[5] + "!");
        }
        else if (qwerty == 6) {
          alert("You were born on " + daysOfTheWeek[6] + " and Your akan name is " + akanFemale[6] + "!");
      }
      break
    default:

  }
}

// function findName(){
//   qwerty = zeller();
//   getGender();

//getGender();
//  switch(gender){
//   case "male":
//     if (useableIndex == 0){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 1){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 2){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 3){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 4){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 5){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 6){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//   break;
//   case "female":
//     if (useableIndex == 0){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 1){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 2){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 3){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 4){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 5){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 6){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//   break
//   default:

// }




// function calcDayOfTheWeek(){
//   year = document.getElementById("year").value;

//   CC = parseInt(year.substring(0,2));
//   YY = parseInt(year.substring(2,4));
//   //alert(CC)

//   MM = parseInt(document.getElementById("month").value);
//   DD = parseInt(document.getElementById("day").value);
//   d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  // if (d < 0) {
  //   d = d * -1;
  // }
  // else if (d > 0) {
  //   return d;
  // }
  //alert(d)







  //console.log(d);
  //return (Math.floor(d));



  // var year = document.getElementById("year").value;
  // var centDigs = parseInt(year.substring(0,2));
  // var yearDigs = parseInt(year.substring(2,4));
  // var month = parseInt(document.getElementById("month").value);
  // var day = parseInt(document.getElementById("day").value);
  // (dayOfWeek) = ( ( (centDigs/4) -2*centDigs-1) + ((5*yearDigs/4) ) + ((26*(month+1)/10)) + day ) % 7;
  // var useableIndex = Math.floor(dayOfWeek);
  // alert(useableIndex);
//}

//calcDayOfTheWeek();


//   var gender = document.querySelector('input[name="gender"]:checked').value;



//   if (day<1 || day > 31){
//     alert("Invalid Date")
//   }if (month <1 || month > 12){
//     alert("Invalid Month")}






// switch(gender){
//   case "male":
//     if (useableIndex == 0){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 1){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 2){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 3){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 4){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 5){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 6){
//       alert(akanMale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//   break;
//   case "female":
//     if (useableIndex == 0){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 1){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 2){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 3){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 4){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 5){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//     else if(useableIndex == 6){
//       alert(akanFemale[useableIndex])
//       alert(daysOfTheWeek[useableIndex])
//     }
//   break
//   default:

// }




//   }