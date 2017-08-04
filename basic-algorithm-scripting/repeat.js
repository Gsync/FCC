function repeatStringNumTimes(str, num) {
  // repeat after me
  var result = "";
  if (num <= 0) {
    return "";
  } else {
    for (var i = 1; i <= num; i++ ) {
      result = result + str;
    }
  }
  return console.log(result);
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 2);
repeatStringNumTimes("*", 8);