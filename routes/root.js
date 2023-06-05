'use strict'

module.exports = async function (fastify, opts) {


  fastify.get('/', async function (request, reply) {
    return { root: "it is a test" }
  })

  fastify.get('/getAnimals/:type', async function (request, reply) {
    console.log(request)
    try {
      let [res] = await fastify.mysql.query(
        'SELECT * FROM animal WHERE type=?',
        [request.query.type],
      )
      return {
        code:200,
        data:res
      }
    }catch (e) {
      return {
        code:500,
        msg:'网络请求失败!'
      }
    }

  })
}
