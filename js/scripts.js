var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var AkanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function addMachine(){
  var year = document.getElementById("year").value;
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
  var cc = parseInt(year.slice(0,2));
  var yy = parseInt(year.slice(2,4));

  alert(cc)
  alert(yy)


}


  // (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

  //alert(year + month + day)}

//   var answerCalc = numero1 + numero2;
//   alert(answerCalc);
// 

