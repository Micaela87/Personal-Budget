import Fastify from 'fastify';
import { PrismaClient } from './prisma/generated/prisma-client-js/index.js';
import { bodyPutSchema, bodyPostSchema, responseSchema } from './schemas.js';
const prisma = new PrismaClient();

const fastify = Fastify({
  logger: true
});

fastify.get('/categories', async (req, res) => {

  try {

    const categories = await prisma.budgetCategories.findMany();
    res.send({ categories });

  } catch(error) {

    fastify.log.error(error);
    process.exit(1);

  }
  
});

fastify.get('/category/:id', async (req, res) => {

  try {

    const category = await prisma.budgetCategories.findUnique({
      where: { id: Number(req.params.id) }
    });

    res.send({ category });

  } catch(error) {

    fastify.log.error(error);
    res.status(500).send({ ok: false, message: error.message });
    process.exit(1);

  }

});

fastify.post('/category', { handler: async (req, res) => {

  try {

    const bodyValidationFunction = req.getValidationFunction('body');
    const validationResult = bodyValidationFunction(req.body);

    const category = await prisma.budgetCategories.create({data: req.body});

    const responseSerializationFunction = res.getSerializationFunction(200);
    const serializedResponse = responseSerializationFunction({category});
  
    res.status(200).send(serializedResponse);

  } catch(error) {

    fastify.log.error(error);
    res.status(500).send({ ok: false, message: error.message });
    process.exit(1);

  }

}, schema: { body: bodyPostSchema, response: { 200: responseSchema }}});

fastify.put('/category/:id', { handler: async (req, res) => {

  const { id } = req.params;

    try {

      const bodyValidationFunction = req.getValidationFunction('body');
      const validationResult = bodyValidationFunction(req.body);

      const category = await prisma.budgetCategories.update({
        where: { id: Number(id) },
        data: req.body
      });
  
      const responseSerializationFunction = res.getSerializationFunction(200);
      const serializedResponse = responseSerializationFunction({category});
  
      res.status(200).send(serializedResponse);
  
    } catch(error) {
  
      fastify.log.error(error);
      res.status(500).send({ ok: false, message: error.message });
      process.exit(1);
  
    }

}, schema: { body: bodyPutSchema, response: { 200: responseSchema }}});

fastify.delete('/category/:id', async (req, res) => {

  try {

    const category = await prisma.budgetCategories.delete({
      where: { id: Number(req.params.id) }
    });

    res.send({ category });

  } catch(error) {

    fastify.log.error(error);
    process.exit(1);

  }
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
});