// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Calculate Trapezoid
 */
function Calculate() {
  // Get input values
  const lengthA = parseFloat(document.getElementById("Length-Of-Base").value)
  const lengthB = parseFloat(document.getElementById("Width-Of-Base").value)
  const height = parseFloat(document.getElementById("Height-Of-Pyramid").value)
  const resultDisplay = document.getElementById("Answer")

  // Calculate area of trapezoid: ((a + b) / 2) * h
  const volume = (lengthA * lengthB * height) / 3

  // Display the result
  resultDisplay.innerHTML = `The volume of the pyramid is: <strong>${volume.toFixed(2)}</strong> cm³`
}
