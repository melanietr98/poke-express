const pokemon = require('../models/pokemon')
const Pokemon = require('../models/pokemonModel')

module.exports.index = async (req, res) => {
    const pokeData = await Pokemon.find()
    res.render('Index', { pokemon: pokeData })
}

module.exports.show = async(req, res) => {
   const pokeData = await Pokemon.findById(req.params.id)
    res.render('Show', { pokemon: pokeData })
}

module.exports.new = async(req, res) => {
     res.render('New')
 }

 module.exports.create = async (req, res) => {
    try {
         await Pokemon.create(req.body)
    } catch (err) {
        console.log('error')
    }
    res.redirect('/pokemon')
}