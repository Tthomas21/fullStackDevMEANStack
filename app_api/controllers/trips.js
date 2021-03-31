const mongoose = require('mongoose'); //.set('debug', true);
const model = mongoose.model('trips');


// GET: /trips - list all of the trips
const tripsList = async(req, res) => {
    model
        .find({}) // this empty filter will find all trips
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({"message": "trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);

            }
            else {
                return res
                    .status(200)
                    .json(trips);

            }

        });
};


// GET: /trips/:tripCode - returns a single trip
const tripsFindByCode = async(req, res) => {
    model
        .find({ 'code': req.params.tripCode }) 
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({"message": "trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json(trip);

            }

        });
};

module.exports = {
    tripsList,
    tripsFindByCode
};