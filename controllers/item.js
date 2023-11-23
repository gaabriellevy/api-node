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

module.exports = {listItems, createItem, getItem}