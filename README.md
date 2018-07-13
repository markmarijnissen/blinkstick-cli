# BLINKSTICK

invoke a blinkstick method from the commandline

## INSTALATION:

See https://github.com/arvydas/blinkstick-node#readme

```bash
npm install -g blinkstick-cli
```

## USAGE:

```bash
blinkstick [method] <color> [options]
```

- `method`: 	defaults to 'setColor'
- `color`:  	name, hexadecimal or RGB values (0-255)
- `options`:	JSON string or named commandline arguments

## EXAMPLES:

```bash
blinkstick "#FF0088"
blinkstick 255 100 0
blinkstick red
blinkstick morph green
blinkstick blink red --duration 500 --repeats 5
blinkstick pulse red {duration:500}
blinkstick getDescription
bliknstick getSerial
```

See: https://github.com/arvydas/blinkstick-node/blob/master/blinkstick.js for all methods.