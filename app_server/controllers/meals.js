const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render meal list view */
const renderMealList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = packageJson.description + 'Meals';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No meals found';
        }
    }

    res.render('meals', {
        activePage: 'meals',
        title: pageTitle,
        meals: responseBody,
        message
    });
};

const mealList = (req, res) => {
    const path = '/api/meals';
    const url = `${apiOptions.server}${path}`;

    console.log(`Inside mealsController.mealList calling ${url}`);
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('network is down');
        })
        .then(body => {
            let meals = [];
            if (body.length) {
                meals = body;
            }
            renderMealList(req, res, meals);
        })
        .catch(error => {
            console.error('fetch error:', error);
        });
};

module.exports = {
    mealList
};