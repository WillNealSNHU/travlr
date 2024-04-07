const Mongoose = require('./db');
const Trip = require('./travlr');
// alright so you have to build out the actual paths, the given code returns
// nothing but errors in powershell for the filepath to trips.json
// i have found this same problem time and time again in the given code
// for this course. someone should probably update that information
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'trips.json');

const seedDB = async () => {
    try {
        const trips = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        await Trip.deleteMany({});
        await Trip.insertMany(trips);
        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error reading or seeding database:', error);
    } finally {
        await Mongoose.connection.close();
        process.exit(0);
    }
};

seedDB();
