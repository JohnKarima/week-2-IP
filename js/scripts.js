var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var key;

function zeller() {
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
  if (month < 3) {
    month += 12; year -= 1;
  }
  var h = (day + parseInt(((month + 1) * 26) / 10) +
    year + parseInt(year / 4) + 6 * parseInt(year / 100) +
    parseInt(year / 400) - 1) % 7;
  key = h
  //return(h);

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