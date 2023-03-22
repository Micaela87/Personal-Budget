import Fastify from 'fastify';
import { PrismaClient } from './prisma/generated/prisma-client-js/index.js';
const prisma = new PrismaClient();

const fastify = Fastify({
  logger: true
});

fastify.get('/categories', async (req, res) => {
  const categories = await prisma.budgetCategories.findMany();
  res.send({ categories });
});

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
});