const KahootModel = require("./../database/models/kahoot_model")

async function index(req, res){
    const kahoots = await KahootModel.find();
    res.json(kahoots)
}

async function create(req, res){
    let { winner, kahootDate} = req.body;
    let kahoot = await KahootModel.create({ winner, kahootDate })
        .catch(err => res.status(500).send(err));
    res.json(kahoot)
}

module.exports = {
    index,
    create
}