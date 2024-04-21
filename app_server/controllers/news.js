const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const apiOptions = {
    server: 'http://localhost:3000' }

    const renderNewsList = (req, res, responseBody) => {
        let message = null;
        let pageTitle = packageJson.description + 'News';
    
        if (!(responseBody instanceof Array)) {
            message = 'API lookup error';
            responseBody = [];
        } else {
            if (!responseBody.length) {
                message = 'No news found';
            }
        }
    
        const latestNews = responseBody.filter(news => news.code.includes('LATEST'));
        const vacationTips = responseBody.filter(news => news.code.includes('TIPS'));
        const featured = responseBody.filter(news => news.code.includes('FEATURED'))[0];
    
        res.render('news', {
            activePage: 'news',
            title: pageTitle,
            latestNews,
            vacationTips,
            featured,
            message
        });
    };
    const newsList = (req, res) => {
        const path = '/api/news';
        const url = `${apiOptions.server}${path}`;
    
        console.log(`Inside newsController.newsList calling ${url}`);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('bruh networks down');
            })
            .then(body => {
                let news = [];
                if (body.length) {
                    news = body;
                }
                renderNewsList(req, res, news);
            })
            .catch(error => {
                console.error('this is the error:', error);
            });
    };
    
    module.exports = {
        newsList
    };