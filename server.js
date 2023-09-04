const fastify = require('fastify')({ logger: true })
fastify.register(require('./routes/items'))
const PORT =  4000

const start = async () => {
    try {
        await fastify.listen({port:PORT})
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()