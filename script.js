document.getElementById("main-form").addEventListener("submit", findMatches);

function findMatches(e) {
  e.preventDefault();

  var el = document.getElementById("main-form");

  const userInput = el.elements["input-text"].value;

  const template = el.elements["pattern"].value;

  var match = template.match(new RegExp("^/(.*?)/([gimy]*)$"));
  var regEx = new RegExp(match[1], match[2]);
  console.log(userInput.match(regEx));

  var result = userInput.match(regEx);
  console.log(result);
  if (result ===null)
  {
    document.getElementById("resultMatch").innerHTML = "не знайдено";
  }
  else
  {
    document.getElementById("resultMatch").innerHTML = result.join(";");
  }
}
