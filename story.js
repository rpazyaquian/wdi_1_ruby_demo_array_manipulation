var story = function() {

  function trace() { for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);} };

  var dragons = [];
  trace("A long time ago, in a land far away there were four young dragons with magical names. What were their names?");

  for (var i = 0; i < 4; i++) {
    dragons.push(prompt("Enter a name for a dragon:"));
  };

  trace("It seems these dragons are named:");

  for (var i = dragons.length - 1; i >= 0; i--) {
    trace(dragons[i]);
  };

  trace("Sadly, the first dragon died of a cold.");
  var died_of_cold = dragons.shift();

  var dragons_left = function() {
    trace("And now there are "+dragons.length+" dragons left")
  }

  dragons_left();

  trace("The last dragon died crossing the river");
  var died_fjording_river = dragons.pop();

  dragons_left();

  trace("The second dragon left died listening to Bach");
  var died_of_bach = dragons.splice(1, 1);

  dragons_left();

  trace("Another died by eating its own tail");
  var died_of_auto_canabalisim = dragons.pop();

  dragons_left();
  trace("But an egg was found and a new dragon was born");
  trace("Its name is:");
  dragons.push(prompt("Enter a new dragon name:"));

  trace("Now there is "+dragons.length+" named "+dragons.first);
  trace("THE END");
  trace(" ");
  trace("---- CAST AND CREDITS -----");
  trace(died_of_auto_canabalisim+" died from eating itself");
  trace(died_of_bach+" died of bach");
  trace(died_fjording_river+" fjording the river");
  trace(died_of_cold+" of cold");
  trace("And now just "+dragons[0]+" is left");


}

story();