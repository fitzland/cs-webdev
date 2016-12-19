//declare variables
var quote = [
  "I understand what you're saying, and your comments are valuable, but I'm gonna ignore your advice.",
  "We don't like you and we hate your dad. Now grab some of that mud, chew it in your mouth, and swallow it.",
  "You should probably put your bandit hat on now. Personally, I- I don't have one, but I modified this tube sock.",
  "Honey, I am seven non-fox years old. My father died at seven and a half. I don't want to live in a hole anymore, and I'm going to do something about it.",
  "But you're nocturnal, Phil. Your eyes barely open on a good day.",
  "If you're gonna cuss with somebody, you're not gonna cuss with me, you little cuss!",
  "I don't know what you're talking about, but it sounds illegal.",
  "Tails don't grow back. I'm gonna be tail-less for the rest of my life."
]

var qlen = quote.length;

var message = [
    "Oh. Hey I'm Ash. I'm not a wet sandwich. And welcome to the page.",
    "This is Kylie. It's hard to tell if he's listening.",
    "This is Mr. Fox. Don't cuss with him.",
    "Nope. You have to click a button below."
]

// initialize or set up the page
  $("#quote p").text(quote[3]);

// when this function is called it runs
// everything inside the curly brackets

// this is first button function
function click1() {
  $("h1").css("color", "lightyellow");
  $("#quote").css("border-color", "lightyellow");
  $("#quote p").text(quote[0]);
}

// second button function
function click2() {
  $("h1").css("color", "pink");
  $("#quote").css("border-color", "pink");
  $("#quote p").text(quote[1]);
}

// third button function
function click3() {
  $("h1").css("color", "#9AE6AF");
  $("#quote").css("border-color", "#9AE6AF");
  $("#quote p").text(quote[2]);
}

function click0() {
  counter = Math.floor(Math.random() * qlen);
  // $("#debug-console").text(counter);
  $("#quote p").text(quote[counter]);
}

function welcome() {
  $("#details").text(message[0]);
}

function alpha() {
  $("#details").text(message[1]);
}

function bravo() {
  $("#details").text(message[2]);
}

function charlie() {
  $("#details").text(message[3]);
}
