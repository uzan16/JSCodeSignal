/**
 * Given two strings, find the number of common characters between them.
 * 
 * Example:
 *      - For s1 = "aabcc" and s2 = "adcaa", the output should be
 *          commonCharacterCount(s1, s2) = 3
 *          Strings have 3 common characters - 2 "a"s and 1 "c"
 * 
 *  */ 

function commonCharacterCount(s1, s2) {
  let str = s1.length < s2.length ? s1 : s2;
  let strElse = s1.length < s2.length ? s2 : s1;
  let commonChar = 0;
  for (let i = 0; i < str.length; i++) {
      if (strElse.indexOf(str[i]) >= 0) {
          commonChar += 1;
          strElse = remove_character(strElse, strElse.indexOf(str[i]));
          
      }
  }
  return commonChar;
}

function remove_character(str, char_pos)  {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
}