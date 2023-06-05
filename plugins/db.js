const fp = require('fastify-plugin')
module.exports = fp(async function(fastify,opts){
  fastify.register(require('@fastify/mysql'),{
    promise:true,
    host:'23.105.212.114',
    port:3306,
    user:'root',
    password:'ntdxsjl123',
    database:'test'
  })
})
