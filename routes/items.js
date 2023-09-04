const {getItems, getItem,addItem,deleteItem,updateItem} = require('../controllers/items')

const item = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        completed: { type: 'boolean' },
        dateOfCreation: { type: 'string' },
        dateOfCompletion: { type: 'string' },
        createdBy: { type: 'string' },
        imageLink: { type: 'string' }
    },
}

const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                item,
            },
        },
    },
    handler: getItems
}

const getItemOpts = {
    schema: {
        response: {
            200: item,
        },
    },
    handler: getItem
}
const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['title'],
            properties: {
                title: { type: 'string' },
            },
        },
        response: {
            201: item,
        },
    },
    handler: addItem
}

const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },

                }
            },    
        },
    },
    handler: deleteItem
}

const updateItemOpts = {
    schema: {
        response: {
            200: item
        }
    },
    handler: updateItem,
}
function itemRoutes (fastify, options, done) {
    //Get all items
    fastify.get('/', getItemsOpts)
    
    //Get a single item
    fastify.get('//:id', getItemOpts)
    
    //Add an item
    fastify.post('/', postItemOpts)

    //Delete an item
    fastify.delete('//:id', deleteItemOpts)

    //update an item
    fastify.put('//:id', updateItemOpts)
    done()
}

module.exports = itemRoutes