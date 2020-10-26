const model = require('../models/maravilhosas-models');

const getMaravilhosas = (request, response) => {
    response.status(200).send(model.selectAllData());
}

const getMaravilhosaById = (request, response) => {
    const id = request.params.id;
    const dadoEncontrado = model.selectDataById(id);

    if(dadoEncontrado) {
        response.status(200).send(dadoEncontrado);
    } else {
        response.status(404).send({message: 'Não localizei a maravilhosa.'});
    }

}

const addMaravilhosa = (request, response) => {
    let { name, photo, subtitle, about, phrase, history, addedBy } = request.body;

    const getId = item => {
        if (item.length > 0 ) {
            return item[item.length -1].id +1;
        } else {
            return 1;
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

    const {error} = model.insertData(newPost);

    if(error === null) {
        response.status(201).json("Maravilhosa adicionada com sucesso");
    } else {
        response.status(400).json({"message": error.message});
    }

}

const updateMaravilhosa = (request, response) =>  {
    const {error, data} = model.updateData(request.params.id, request.body);

    if(error === null){
        response.status(201).send(data);
    } else {
        //response.status(400).json({"message": error.message}) Feito assim não retorna mensagem de erro
        response.status(400).json({message: "Id não encontrado, impossível atualizar"})
    }

}

//deleteMaravilhosa

const deleteMaravilhosa = (request, response) => {
    const {error} = model.deleteData(request.params.id);

    if(error === null) {
        response.status(204).send("Maravilhosa removida!");
    } else {
        response.status(404).json({"message:": error.message});
    }
}



module.exports = {
    getMaravilhosas, 
    getMaravilhosaById,
    addMaravilhosa,
    updateMaravilhosa,
    deleteMaravilhosa
}