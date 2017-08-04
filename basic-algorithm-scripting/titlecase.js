
function titleCase(str) {

  var split = str.toLowerCase().split(" ");
  var push = [];
  console.log(split);
  for (var i = 0; i < split.length; i++) {
    var title = split[i].replace(split[i][0], split[i][0].toUpperCase());
    push.push(title);
  }
  console.log(push.join(" "));
  return str;
}

titleCase("I'm a little tea pot");