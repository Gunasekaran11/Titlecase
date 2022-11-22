function textcase(str) {
  var splitstr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitstr.length; i++) {
    splitstr[i] =
      splitstr[i].charAt(0).toUpperCase() + splitstr[i].substring(1);
  }
  return splitstr.join(" ");
}
console.log(textcase("im a rider"));
