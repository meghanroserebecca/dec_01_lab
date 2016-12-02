'use strict';


var x = document.CreateElement("ConversionCalculator");

var userChoice;

var userChoiceArray = ['inches to centimeters', 'centimeters to inches', 'ounces to mililiters', 'mililiters to ounces', 'miles to kilometers', 'kilometers to miles', 'pounds to kilograms ', 'kilograms to pounds'];

function userChoice {
 var selection = document.getElementById("convertor_select");
 for(var i =0; i < userChoiceArray.length; i++){

  if (selection === userChoiceArray[i]){
  userChoice = i;
  }
}
