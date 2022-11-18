const PlantController = require('../controllers/plant.controller');
module.exports = function(app){
    app.get('/api', PlantController.index);
    app.get('/api/plants', PlantController.getAllPlants);
    app.get('/api/plants/:id', PlantController.getPlant);
    app.put('/api/plants/:id/', PlantController.updatePlant);
    app.delete('/api/plants/:id', PlantController.deletePlant);
    app.post('/api/plants', PlantController.createPlant)
    
}

