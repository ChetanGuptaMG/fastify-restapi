const { v4: uuidv4 } = require('uuid')
let items = require('../item')

const getItems = (request, reply) => {
    reply.send(items)
}

const getItem = (request, reply) => {
    const { id } = request.params
    return items.find(item => item.id === Number(id))
}

const addItem = (request, reply) => {
    const {title} = request.body

    const item = {
        id: uuidv4(),
        title,
    }
    items = [...items, item]
    reply.code(201).send(item)
}
const deleteItem = (request, reply) => {
    const { id } = request.params
    items = items.filter(item => item.id !== Number(id))
    reply.send({ message: `Item ${id} has been removed` })
}
const updateItem = (request, reply) => {
    const { id } = request.params
    const { title } = request.body
    items = items.map(item => (item.id === Number(id) ? { id, title } : item))
    item = items.find(item => item.id === Number(id))
    reply.send(item)

}

module.exports = {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem
}
