const { response } = require('express');
const { Plant } = require('../models/plant.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//Create one

module.exports.createPlant = (request, response) => {
    const { name, water, notes, link, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = request.body;
    Plant.create({
        name,
        water,
        notes,
        link,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday    
    })
        .then(plant => response.json(plant))
        .catch(err => response.status(400).json(err));
}

//Get all

module.exports.getAllPlants = (request, response) => {
    Plant.find({})
        .then(plants => response.json(plants))
        .catch(err => response.json(err))
}

//Get One by id

module.exports.getPlant = (request, response) => {
    Plant.findOne({ _id: request.params.id })
        .then(plant => response.json(plant))
        .catch(err => response.json(err))
}

//Update one by ID

module.exports.updatePlant = (request, response) => {
    Plant.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedPlant => response.json(updatedPlant))
        .catch(err => response.status(400).json(err))
}

//delete one by ID

module.exports.deletePlant = (request, response) => {
    Plant.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}








