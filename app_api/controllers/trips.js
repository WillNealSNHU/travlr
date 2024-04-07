/* 
const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {
    tripsList,
};

This is what I built out, this works.


const { Model } = require("mongoose")

const tripsFindByCode = async(req, res) => {
    const q = await Model.find({'code' : req.params.tripCode})
    .exec();

    console.log(q);

    if(!q){
        return res
            .status(404)
            .json(err);

    } else {
        return res
            .status(200)
            .json(q);

    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};

This is what SNHU tried to get me to use which is useless
*/

const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        return res.status(200).json(trips); 
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};


const tripsFindByCode = async (req, res) => {
    const q = await Model.find({ 'code': req.params.tripCode }).exec();

    console.log(q);

    if (!q) {
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
