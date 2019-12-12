const KahootModel = require("./../database/models/kahoot_model")

//GET: Show all Kahoot records
async function index(req, res) {
    try {
        const kahoots = await KahootModel.find();
        res.json(kahoots);
    } catch(error){
        res.status(500).send(error);
    }
}

//POST: Create new Kahoot records
async function create(req, res) {
    const { winner, date} = req.body;
    try {
        const kahoot = await KahootModel.create({ winner, date });
        res.json(kahoot)
    } catch(error) {
        res.status(500).send(error);
    }
}

//GET: Show a Kahoot record
async function show(req, res) {
    const { id } = req.params;
    try { 
        const kahoot = await KahootModel.findById(id);
        res.json(kahoot);
    } catch(error) {
        res.status(500).send(error);
    }
}

//PUT & PATCH: Update a Kahoot record
async function update(req, res) {
    const { id } = req.params;
    const { winner, date } = req.body;
    try {
        const kahoot = await KahootModel.findByIdAndUpdate(id, { winner, date });
        res.json(kahoot);
    } catch(error){
        res.status(500).send(error);
    }
}

//DELETE: Delete a Kahoot record
async function destroy(req, res) {
    const { id } = req.params;
    try {
        const kahoot = await KahootModel.findByIdAndRemove(id);
        res.json(kahoot);
    } catch(error){
        res.status(500).send(error);
    }
}

//Remember to export all the functions
module.exports = {
    index,
    create,
    show,
    update,
    destroy
}
