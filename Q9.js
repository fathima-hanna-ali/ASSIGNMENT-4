var word = "Javascript";
for (var i = 0; i < word.length; i++) {
  var str = "";
  for (var j = 0; j <= i; j++) {
    str += word[j];
  }
  console.log(str);
}