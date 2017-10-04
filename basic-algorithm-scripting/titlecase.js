
function titleCase(str) {

  var split = str.toLowerCase().split(" ");
  var push = [];
  for (var i = 0; i < split.length; i++) {
    var title = split[i].replace(split[i][0], split[i][0].toUpperCase());
    push.push(title);
  }
  
  return console.log(push.join(" "));
}

titleCase("I'm a little tea pot");