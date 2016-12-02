'use strict';
var convertButton = document.getElementById('conver_button'); // varriable pointing at convert button HTML element
convertButton.addEventListener ( click, conversionHandler);

function inchesToCentemeter (input) {};
function centimetersToTnches (input) {};
function fluidOuncesToMilliliters (input) {};
function millilitersToFluidOunces (input) {};
function milesToKilometers (input) {};
function kilometersToMiles (input) {};
function poundsToKilograms (input) {};
function kilogramsToPoundst (input) {};


var arrayOfConversionFunction = [inchesToCentemeter, centimetersToTnches, fluidOuncesToMilliliters, millilitersToFluidOunces, , milesToKilometers, kilometersToMiles, poundsToKilograms, kilogramsToPounds];

function conversionHandler (event){

var x = document.CreateElement("ConversionCalculator");

var userChoice;

var userChoiceArray = ['inches to centimeters', 'centimeters to inches', 'ounces to mililiters', 'mililiters to ounces', 'miles to kilometers', 'kilometers to miles', 'pounds to kilograms ', 'kilograms to pounds'];

function userChoice () {
 var selection = document.getElementById("convertor_select");
 for(var i =0; i < userChoiceArray.length; i++){

  if (selection === userChoiceArray[i]){
  userChoice = i;
  }
}
