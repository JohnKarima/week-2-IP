var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

daysOfTheWeek[dayOfWeek];
akanMale[dayOfWeek];
akanFemale[dayOfWeek];


function addMachine(){
  var year = document.getElementById("year").value;
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
  var centDigs = parseInt(year.slice(0,2));
  var yearDigs = parseInt(year.slice(2,4));
  var gender = document.getElementById("gender").value

  //alert(gender)

  if (day<1 || day > 31){
    alert("Invalid Date")
  }if (month <1 || month > 12){
    alert("Invalid Month")}
  


  (dayOfWeek) = ( ( (centDigs/4) -2*centDigs-1) + ((5*yearDigs/4) ) + ((26*(month+1)/10)) + day ) % 7

  var useableIndex= Math.floor(dayOfWeek);


 //alert(useableIndex);

//alert(daysOfTheWeek[0])


if (useableIndex === 2){
  alert(daysOfTheWeek[useableIndex])
  alert(akanMale[useableIndex])
}


  
  }