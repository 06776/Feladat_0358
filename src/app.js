/*
 * File: app.js
 * Author: Hajdara Patrik
 * Copyright: 2023, Hajdara Patrik
 * Group: SZOFT I/II/N
 * Date: 2023-03-24
 * Github: https://github.com/06776/
 * Licenc: GNU GPL
 */

var aElhosszInput = document.querySelector("#aElhossz");
var bElhosszInput = document.querySelector("#bElhossz");
var cElhosszInput = document.querySelector("#cElhossz");
var volumeInput = document.querySelector("#volume");
var calcButton = document.querySelector("#calcButton");

if (calcButton) {
  calcButton.addEventListener("click", () => {
    workInput();
  });
}

function workInput() {
  let res1 = checkInput(aElhosszInput.value);
  let res2 = checkInput(bElhosszInput.value);
  let res3 = checkInput(cElhosszInput.value);
  if (res1 && res2 && res3) {
    alert("A megadott adatok megfelelőek!");
  } else {
    alert("A megadott adatok sajnos nem megfelelőek!");
  }
  let aElhossz = Number(aElhosszInput.value);
  let bElhossz = Number(bElhosszInput.value);
  let cElhossz = Number(cElhosszInput.value);
  let volume = calculateVolume(aElhossz, bElhossz, cElhossz);
  volumeInput.value = volume + " cm³";
}

function calculateVolume(aElhossz, bElhossz, cElhossz) {
  return aElhossz * bElhossz * cElhossz;
}

function checkInput(input) {
  let res = input.match(/^[0-9]+$/);
  return res;
}

