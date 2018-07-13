var blinkstick = require("blinkstick");
var argv = require("yargs").argv;
var args = argv._.map(function(arg) {
  try {
    return JSON5.parse(arg);
  } catch (error) {}
  return arg;
});
if (args.length === 0) {
  console.log(
    [
      "BLINKSTICK",
      "",
      "invoke a blinkstick method from the commandline",
      "",
      "USAGE:",
      "",
      "blinkstick [method] <color> [options]",
      "",
      "method: \tdefaults to 'setColor'",
      "color:  \tname, hexadecimal or RGB values (0-255)",
      "options:\tJSON string or named commandline arguments",
      "",
      "EXAMPLES:",
      "",
      'blinkstick "#FF0088"',
      "blinkstick 255 100 0",
      "blinkstick red",
      "blinkstick morph green",
      "blinkstick blink red --duration 500 --repeats 5",
      "blinkstick pulse red {duration:500}",
      "blinkstick getSerial",
      "blinkstick getDescription",
      "blinkstick turnOff",
      "",
      "See: https://github.com/aril-spetalen/blinkstick-node/blob/master/blinkstick.js for all methods."
    ].join("\n")
  );
} else {
  var device = blinkstick.findFirst();
  var JSON5 = require("json5");
  var method = "setColor";
  if (args[0] in device) {
    method = args.shift();
  }
  if (
    Object.keys(argv).filter(function(key) {
      return key[0] !== "$" && key !== "_";
    }).length > 0
  ) {
    args.push(argv);
  }
  args.push(function(err, value) {
    if (err) {
      console.error(err);
    } else {
      console.log(value);
    }
  });
  device[method].apply(device, args);
}
