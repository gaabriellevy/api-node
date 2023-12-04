const itemModel = require('../models/item')

async function listItems() {
    const items = await itemModel.findAll()
    return items
}

async function createItem(item) {
    return itemModel.create(item)
}

async function getItem(id_param) {
    const item = await itemModel.findOne({where: {id: id_param}})
    return item;
}

async function deleteItem(id_param) {
    await itemModel.destroy({
        where: {
            id: id_param
        }
    })
}

async function updateItem(id_param, item) {
    item = await itemModel.update(item, {
        where: {
            id: id_param
        }
    });

    return getItem(id_param)
}

module.exports = {listItems, createItem, getItem, deleteItem, updateItem}