var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// var akanMale = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"]
// var akanFemale = ["Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama","Akosua"]

var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

daysOfTheWeek[dayOfWeek];
akanMale[dayOfWeek];
akanFemale[dayOfWeek];



function addMachine(){
  var year = document.getElementById("year").value;
  var centDigs = parseInt(year.substring(0,2));
  var yearDigs = parseInt(year.substring(2,4));
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
  
  // var gender = document.getElementById("gender").value
  // var gender = document.getElementsByName('gender');
  var gender = document.querySelector('input[name="gender"]:checked').value;

}
//   function getGender(){
//     if(genders[0].checked == true)
//     var gender = "male";
//     alert(gender)
//   }
// getGender();

  //alert(gender)

  if (day<1 || day > 31){
    alert("Invalid Date")
  }if (month <1 || month > 12){
    alert("Invalid Month")}
  


  (dayOfWeek) = ( ( (centDigs/4) -2*centDigs-1) + ((5*yearDigs/4) ) + ((26*(month+1)/10)) + day ) % 7

  var useableIndex= Math.floor(day);



  // if (gender.value = "male" && useableIndex === 0){
  //   alert(akanMale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "male" && useableIndex === 1){
  //   alert(akanMale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "male" && useableIndex === 2){
  //   alert(akanMale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "male" && useableIndex === 3){
  //   alert(akanMale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "male" && useableIndex === 4){
  //   alert(akanMale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "male" && useableIndex === 5){
  //   alert(akanMale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "male" && useableIndex === 6){
  //   alert(akanMale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }


  // if (gender.value = "female" && useableIndex === 0){
  //   alert(akanFemale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "female" && useableIndex === 1){
  //   alert(akanFemale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "female" && useableIndex === 2){
  //   alert(akanFemale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "female" && useableIndex === 3){
  //   alert(akanFemale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "female" && useableIndex === 4){
  //   alert(akanFemale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "female" && useableIndex === 5){
  //   alert(akanFemale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }else if (gender.value = "female" && useableIndex === 6){
  //   alert(akanFemale[useableIndex])
  //   alert(daysOfTheWeek[useableIndex])
  // }
   // function getGender(){
  //   var genders = document.getElementsByName("gender");
  //   if(genders[0].checked == true){
  //     var gender = "male";
  //   }
  //   else if(genders[1].checked == true){
  //     var gender = "female";
  //   }
  //   else{
  //     return false;

  // if ( gender === male){
  //   alert(akanMale[useableIndex])
  // }

  // if (useableIndex === 2 && gender === male){
  //   alert(daysOfTheWeek[useableIndex])
  //   alert(akanMale[useableIndex])
  // }
  
 //alert(useableIndex);

//alert(daysOfTheWeek[0])

// if (gender === male){
//   alert("Male")
// }
switch(gender){
  case "male":
    if (useableIndex == 0){
      alert(akanMale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 1){
      alert(akanMale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 2){
      alert(akanMale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 3){
      alert(akanMale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 4){
      alert(akanMale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 5){
      alert(akanMale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 6){
      alert(akanMale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
  break;
  case "female":
    if (useableIndex == 0){
      alert(akanFemale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 1){
      alert(akanFemale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 2){
      alert(akanFemale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 3){
      alert(akanFemale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 4){
      alert(akanFemale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 5){
      alert(akanFemale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
    else if(useableIndex == 6){
      alert(akanFemale[useableIndex])
      alert(daysOfTheWeek[useableIndex])
    }
  break
  default:
        
}

//  if (useableIndex === 0){
//    alert(daysOfTheWeek[useableIndex])
//   //  alert(akanMale[useableIndex])
//  } else if(useableIndex === 1){
//    alert(daysOfTheWeek[useableIndex])
//  }else if(useableIndex === 2){
//   alert(daysOfTheWeek[useableIndex])
// }else if(useableIndex === 3){
//   alert(daysOfTheWeek[useableIndex])
// }else if(useableIndex === 4){
//   alert(daysOfTheWeek[useableIndex])
// }else if(useableIndex === 5){
//   alert(daysOfTheWeek[useableIndex])
// }else if(useableIndex === 6){
//   alert(daysOfTheWeek[useableIndex])
// }


  
  //}

  function getGender() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    //alert(gender)
    var qwerty = h;
    alert(qwerty)
  
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


    function getGender() {
      var gender = document.querySelector('input[name="gender"]:checked').value;
    
      
    
      switch (gender) {
        case "male":
          if (h == 0) {
            alert(daysOfTheWeek[0] + akanMale[0]);
          }
          else if (h == 1) {
            alert("You were born on " + daysOfTheWeek[1] + " and Your akan name is " + akanMale[1] + "!");
          }
    
          else if (h == 2) {
            alert("You were born on " + daysOfTheWeek[2] + " and Your akan name is " + akanMale[2] + "!");
          }
          else if (h == 3) {
            alert("You were born on " + daysOfTheWeek[3] + " and Your akan name is " + akanMale[3] + "!");
          }
          else if (h == 4) {
            alert("You were born on " + daysOfTheWeek[4] + " and Your akan name is " + akanMale[4] + "!");
          }
          else if (h == 5) {
            alert("You were born on " + daysOfTheWeek[5] + " and Your akan name is " + akanMale[5] + "!");
          }
          else if (h == 6) {
            alert("You were born on " + daysOfTheWeek[6] + " and Your akan name is " + akanMale[6] + "!");
          }
          break;
        case "female":
          if (h == 0) {
            alert("You were born on " + daysOfTheWeek[0] + " and Your akan name is " + akanFemale[0] + "!");
          }
          else if (h == 1) {
            alert("You were born on " + daysOfTheWeek[1] + " and Your akan name is " + akanFemale[1] + "!");
          }
          else if (h == 2) {
            alert("You were born on " + daysOfTheWeek[2] + " and Your akan name is " + akanFemale[2] + "!");
          }
          else if (h == 3) {
            alert("You were born on " + daysOfTheWeek[3] + " and Your akan name is " + akanFemale[3] + "!");
          }
          else if (h == 4) {
            alert("You were born on " + daysOfTheWeek[4] + " and Your akan name is " + akanFemale[4] + "!");
          }
          else if (h == 5) {
            alert("You were born on " + daysOfTheWeek[5] + " and Your akan name is " + akanFemale[5] + "!");
          }
          else if (h == 6) {
            alert("You were born on " + daysOfTheWeek[6] + " and Your akan name is " + akanFemale[6] + "!");
          }
          break
        default:
    
      }
    }
    function findName(){
     // zeller();
      //getGender();
    }

    <!-- <div class="form-group">
    <label for="month">Gender</label><br>
    <div class="form-check-inline">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="gender" id="male">&nbsp; Male 
      </label>
    </div>
    <div class="form-check-inline">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="gender" id="female">&nbsp; Female 
      </label>
    </div> -->



    <!-- <div>
      <select id="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select> -->

    <!-- <input type="radio"  name="gender" value="male">
  <label for="male">Male</label><br>
  <input type="radio"  name="gender" value="female">
  <label for="female">Female</label><br> -->
<!-- </div> -->