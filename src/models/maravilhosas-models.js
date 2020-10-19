const fs = require('fs')
let data = require('../data/data.json')

// selectAllData
const selectAllData = () => data

/* //selectDataById
const selectDataById = (request, response) => {
    const id = request.params.id
    const databyID = data.find(item => item.id == id) }

    if(!databyID) {
        response.status(404).send({message: 'Não localizei a maravilhosa.'})
    } else {
        response.status(200).send(databyID)
    } */


const selectDataById = (id) => {

    const databyID = data.find(item => item.id == id) 
    return databyID

}

//insertData
const insertData = () => {
   //fs.writeFileSync
}

//updateData

//deleteData

module.exports = { 
    data,
    selectAllData,
    selectDataById
}

