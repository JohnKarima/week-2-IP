var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var key;

function zeller() {
  var year = parseInt(document.getElementById("year").value);
  if (year < 1582 || year > 4902) {
    alert("Please fill in a valid year to continue")
    return (false)
  } else if (year > 1581 && year < 4903) {
    var yearAuth = year;
  }
  var month = parseInt(document.getElementById("month").value);
  if (month < 1 || month > 12) {
    alert("Please fill in a valid month to continue")
    return (false)
  } else if (month > 0 && month < 13) {
    var monthAuth = month;
  }
  var day = parseInt(document.getElementById("day").value);
  if (day < 1 || day > 31) {
    alert("Please fill in a valid day to continue")
    return (false)
  } else if (day > 0 && day < 32) {
    var dayAuth = day;
  }

  if (monthAuth < 3) {
    monthAuth += 12; yearAuth -= 1;
  }
  var h = (dayAuth + parseInt(((monthAuth + 1) * 26) / 10) +
    yearAuth + parseInt(yearAuth / 4) + 6 * parseInt(yearAuth / 100) +
    parseInt(yearAuth / 400) - 1) % 7;
  key = h

  var gender = document.querySelector('input[name="gender"]:checked').value;

  switch (gender) {
    case "male":
      if (key == 0) {
        alert(akanMale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 1) {
        alert(akanMale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 2) {
        alert(akanMale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 3) {
        alert(akanMale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 4) {
        alert(akanMale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 5) {
        alert(akanMale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 6) {
        alert(akanMale[key])
        alert(daysOfTheWeek[key])
      }
      break;
    case "female":
      if (key == 0) {
        alert(akanFemale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 1) {
        alert(akanFemale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 2) {
        alert(akanFemale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 3) {
        alert(akanFemale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 4) {
        alert(akanFemale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 5) {
        alert(akanFemale[key])
        alert(daysOfTheWeek[key])
      }
      else if (key == 6) {
        alert(akanFemale[key])
        alert(daysOfTheWeek[key])
      }
      break
    default:
  }
}