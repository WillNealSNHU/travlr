
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// get the travel view

const travel = async function(req, res, next) {
    console.log('Travel controller starting here');

    await fetch(tripsEndpoint, options)

    .then(res => res.json())

    .then(json => {
        console.log(json)
    res.render('travel', {title: 'Travlr Getaways', trips: json});
    })
    .catch(err => res.status(500).send(e.message));
};
    module.exports = { travel };
    



/*
This is the last code I had in here, I tried commenting out 
a couple lines and just slightly tweaking according to the
guide pdf but honestly that code really outdated or straight 
up doesn't work. Not sure who is the head of the department
but they really should look at updating a lot of those documents.
Like from what I read it doesn't state anywhere to install node fetch..
I was able to figure it out, and thats part of being a developer but for someone
who isnt already working in the field it might take them a long time and a lot of 
frustration to figure out what's wrong with the code. 


const path = require('path');
//const fs = require('fs');

const tripsFilePath = path.join(__dirname, '../data/trips.json');
//const trips = JSON.parse(fs.readFileSync(tripsFilePath, 'utf8'));

const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips: trips});
};

module.exports = {
    travel
};
*/ 


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
