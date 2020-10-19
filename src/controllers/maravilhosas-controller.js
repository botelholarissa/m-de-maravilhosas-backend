const model = require('../models/maravilhosas-models')

//Nomes dos métodos para implementação:

//getMaravilhosas
const getMaravilhosas = (request, response) => {
    response.status(200).send(model.selectAllData())
}
//getMaravilhosaById

const getMaravilhosaById = (request, response) => {
    const id = request.params.id
    const dadoEncontrado = model.selectDataById(id)

    if(dadoEncontrado) {
        response.status(200).send(dadoEncontrado)
    } else {
        response.status(404).send({message: 'Não localizei a maravilhosa.'})
    }

} 

//addMaravilhosa 

const addMaravilhosa = (request, response) => {
    let { name, photo, subtitle, about, phrase, history, addedBy } = request.body;

    const getId = function(item) {
        if (item.length > 0 ) {
            return item[item.length -1].id +1
        } else {
            return 1
        }
    }



    let newPost = {
        id: getId(model.selectAllData()),
        name: name,
        photo: photo,
        subtitle: subtitle, 
        about: about,
        phrase: phrase, 
        history: history, 
        addedBy: addedBy
    } 

console.log(newPost)
}

//updateMaravilhosa 

//deleteMaravilhosa


module.exports = {
    getMaravilhosas, 
    getMaravilhosaById,
    addMaravilhosa
}