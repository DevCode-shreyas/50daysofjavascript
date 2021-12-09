function accum(s) {
  // your code goes below
  var result = "";
  for (var i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();
    for (var j = 0; j < i; j++) {
      result += s[i].toLowerCase();
    }
    if (i < s.length - 1) {
      result += "-";
    }
  }
  return result;
}
