const mongoose = require('mongoose');
const PlantSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Must be 3 or longer"] 
    },
    water: {
        type: String,
        // required: [true, "Gotta give it some water!"],
        // minlength: [.5]
    },
    
    notes: {
        type: String,
        // required: [true, "Gimme a note!"],
        // minlength: [1, "You gotta do better than that!"]
    },
    link: {
        type: String,
        
    },
    monday: {
        type: Boolean,
        default: true,
    },
    tuesday: {
        type: Boolean,
        default: true,
    },
    wednesday: {
        type: Boolean,
        default: true
    },
    thursday: {
        type: Boolean,
        default: true,
    },
    friday: {
        type: Boolean,
        default: true,
    },
    saturday: {
        type: Boolean,
        default: true
    },
    sunday: {
        type: Boolean,
        default: true
    }

    
}, { timestamps: true });
module.exports.Plant = mongoose.model('Plant', PlantSchema);