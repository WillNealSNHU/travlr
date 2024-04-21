const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render room list view */
const renderRoomList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = packageJson.description + 'Rooms';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'nothing found in the DB';
        }
    }

    res.render('rooms', {
        activePage: 'rooms',
        title: pageTitle,
        rooms: responseBody,
        message
    });
};

/* GET room list. */
const roomList = (req, res) => {
    const path = '/api/rooms';
    const url = `${apiOptions.server}${path}`;

    console.log(`Inside roomsController.roomList calling ${url}`);
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('network is down');
        })
        .then(body => {
            let rooms = [];
            if (body.length) {
                rooms = body;
            }
            renderRoomList(req, res, rooms);
        })
        .catch(error => {
            console.error('fetch error here: fetch isnt a thing:', error);
        });
};

module.exports = {
    roomList
};