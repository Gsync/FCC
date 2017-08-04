function truncateString(str, num) {
  // Clear out that junk in your trunk
  var string;
  if (num <= 3) {

    string = str.length - num;
    return console.log(str.slice(0, -1 * string) + "...");
  } else if (num >= str.length) {

    return console.log(str);
  } else {
    string = str.length - num;
    return console.log(str.slice(0, -1 * (string+3)) + "...");
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-tisket a-tasket A green and yellow basket", 3);
truncateString("Peter Piper picked a peck of pickled peppers", 14); //should return "Peter Piper..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // should return "A-tisket a-tasket A green and yellow basket
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // should return "A-tisket a-tasket A green and yellow basket