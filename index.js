import Fastify from 'fastify';
import { PrismaClient } from './prisma/generated/prisma-client-js/index.js';
import { getAllCategories, getCategoryByID, postNewCategory, updateCategory, deleteCategory } from './routes/categories.js';
const prisma = new PrismaClient();

const fastify = Fastify({
  logger: true
});

fastify.register(getAllCategories);
fastify.register(getCategoryByID);
fastify.register(postNewCategory);
fastify.register(updateCategory);
fastify.register(deleteCategory);

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
});