const fs = require('fs');
let data = require('../data/data.json');

const selectAllData = () => data;

const selectDataById = (id) => {

    const databyID = data.find(item => item.id == id);
    return databyID;

}

const insertData = (newPost) => {
    const maravilhosaFind = data.find(item => item.name == newPost.name);

    /* const bodyCompleto = //ainda não descobri como posso fazer uma validação aqui */

    if(maravilhosaFind) {
        return {error: {message: "Essa Maravilhosa já existe em nosso resgistro."}}; 
    } /* else if (bodyCompleto == true) {
        return{error: {message: "Você não inseriu todos os dados necessários."}};
    } */else {
         fs.writeFileSync('./src/data/data.json', JSON.stringify([...data, newPost]), 'utf8', (err) => {
             if (err) {
                 console.log(err);
             }
         });
     
         return {error: null};
    }
}

const updateData = (id, dataToUpdate) => { 
    const idMaravilhosa = id;
    const maravilhosaFind = data.find(item => item.id == idMaravilhosa);
    const maravilhosaIndexOf = data.indexOf(maravilhosaFind);

    if (maravilhosaIndexOf >= 0) { 
        data.splice(maravilhosaIndexOf, 1, dataToUpdate)
        fs.writeFileSync('./src/data/data.json', JSON.stringify(data), 'utf8', (err) => {
            if (err) {
                console.log(err);
            }
        })

        return {error: null, data: selectDataById(id)}
    } else {
        return {error: {message: "Id não encontrado, impossível atualizar", data: null}} //Não está retornando no Insomnia - ainda não descobri como resolver
    }

}

const deleteData = (id) => {
    const idMaravilhosa = id;
    const maravilhosaFind = data.find(item => item.id == idMaravilhosa);

    const maravilhosaIndexOf = data.indexOf(maravilhosaFind);

    if(maravilhosaIndexOf >= 0){
        data.splice(maravilhosaIndexOf,1);
        fs.writeFileSync('./src/data/data.json', JSON.stringify(data), 'utf8', (err) => {
            if (err) {
                console.log(err);
            }
        })
        return {error: null};
    } else {
        return {error: {message: "Não encontrei o ID para deletar."}}
    }
}



module.exports = { 

    selectAllData,
    selectDataById, 
    insertData,
    updateData,
    deleteData
}
