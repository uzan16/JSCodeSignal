/**
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it
 * 
 * Example:
 *      - For picture = ["abc",
 *                       "ded"]
 *        the output should be
 *          addBorder(picture) = ["*****",
 *                                "*abc*",
 *                                "*ded*",
 *                                "*****"]
 * 
 *  */ 

function addBorder(picture) {
  let xBorder = "";

  for (let i = 0; i < picture.length; i++) {
      picture[i] = `*${picture[i]}*`;
      
      if (i === 0) {
          for (let y = 0; y < picture[i].length; y++) {
              xBorder += "*";
          }
      }
  }
  
  picture.unshift(xBorder);
  picture.push(xBorder);
  
  return picture;
}
