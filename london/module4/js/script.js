//declare variables
var quote1 = "I understand what you're saying, and your comments are valuable, but I'm gonna ignore your advice."
var quote2 = "We don't like you and we hate your dad. Now grab some of that mud, chew it in your mouth, and swallow it."
var quote3 = "You should probably put your bandit hat on now. Personally, I- I don't have one, but I modified this tube sock."
var quote4 = "Honey, I am seven non-fox years old. My father died at seven and a half. I don't want to live in a hole anymore, and I'm going to do something about it."

// set up the page
  $("#quote p").text(quote4);

// when this function is called it runs
// everything inside the curly brackets
function alpha() {
  $("h1").css("color", "lightyellow");
  $("#quote").css("border-color", "lightyellow");
  $("#quote p").text(quote1);

}

function beta() {
  $("h1").css("color", "pink");
  $("#quote").css("border-color", "pink");
  $("#quote p").text(quote2);
}

function charlie() {
  $("h1").css("color", "#9AE6AF");
  $("#quote").css("border-color", "#9AE6AF");
  $("#quote p").text(quote3);
}
