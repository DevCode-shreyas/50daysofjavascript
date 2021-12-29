function formatDuration(seconds) {
  // your code here
  var result = "";
  var arr = [];
  var hour = Math.floor(seconds / 3600);
  var min = Math.floor((seconds % 3600) / 60);
  var sec = (seconds % 3600) % 60;
  if (hour > 0) {
    arr.push(hour + " hour" + (hour > 1 ? "s" : ""));
  }
  if (min > 0) {
    arr.push(min + " minute" + (min > 1 ? "s" : ""));
  }
  if (sec > 0) {
    arr.push(sec + " second" + (sec > 1 ? "s" : ""));
  }
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      result = arr[i];
    } else if (i === arr.length - 1) {
      result += " and " + arr[i];
    } else {
      result += ", " + arr[i];
    }
  }
  return result;
}
