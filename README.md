pi-temperature
==============

Measure the temperature of a Raspberry Pi.

## Usage
```js
var temp = require("pi-temperature");
temp.measure(function(err, temp) {
	if (err) console.error(err);
	else console.log("It's " + temp + " celsius.");
});
```

## API
### measure(function callback(err, temperature))
Measures the temperature and calls the callback with the error and temperature.

**Note:** Temperature is in celsius.
