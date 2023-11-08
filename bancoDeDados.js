const sequence = {
    _id:0,
    get id() {
        return this._id++
    }
}

const items = {}

function createItem(item) {
    item.id = sequence.id
    items[item.id] = item
    return item
}

function listItems() {
    return Object.values(items)
}

function getItem() {
    return items[id]
}

function deleteItem(id) {
    if(id in items) {
        delete items[id]
        return `item ${id} removido.`
    }else {
        throw new Error(`Item ${id} não existe!`)
    }
}

module.exports = {createItem, listItems, getItem, deleteItem}