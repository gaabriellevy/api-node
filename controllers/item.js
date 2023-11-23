const itemModel = require('../models/item')

async function listItems() {
    const items = await itemModel.findAll()
    return items
}

async function createItem(item) {
    return itemModel.create(item)
}

module.exports = {listItems, createItem}