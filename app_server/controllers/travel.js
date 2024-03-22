const path = require('path');
const fs = require('fs');

const tripsFilePath = path.join(__dirname, '../data/trips.json');
const trips = JSON.parse(fs.readFileSync(tripsFilePath, 'utf8'));

const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips: trips});
};

module.exports = {
    travel
};



/*
var fs = require('fs');
var trips =
JSON.parse(fs.readFileSync('data/trips.json', 'utf8'));

const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways'});
};

module.exports = {
    travel
};
*/



/*
Node.js v20.11.1
PS C:\Users\Bill\travlr> npm start

> travlr@0.0.0 start
> node ./bin/www

node:fs:453
    return binding.readFileUtf8(path, stringToFlags(options.flag));
                   ^

Error: ENOENT: no such file or directory, open 'C:\Users\Bill\travlr\data       rips.json'
    at Object.readFileSync (node:fs:453:20)
    at Object.<anonymous> (C:\Users\Bill\travlr\app_server\controllers\travel.js:3:15)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Module.require (node:internal/modules/cjs/loader:1235:19)
    at require (node:internal/modules/helpers:176:18)
    at Object.<anonymous> (C:\Users\Bill\travlr\app_server\routes\travel.js:3:20)
    at Module._compile (node:internal/modules/cjs/loader:1376:14) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\Bill\\travlr\\data\trips.json'
}

*/