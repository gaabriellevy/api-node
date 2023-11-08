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

module.exports = {createItem, listItems, getItem}