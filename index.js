import Fastify from 'fastify';
import cors from '@fastify/cors'
import { PrismaClient } from './prisma/generated/prisma-client-js/index.js';
import { getAllCategories, getCategoryByID, postNewCategory, updateCategory, deleteCategory } from './routes/categories.js';
import { getAllExpenses, getExpenseById, getExpensesByCategoryID, postNewExpense, updateExpense, deleteExpense } from './routes/expenses.js';
export const prisma = new PrismaClient();

const fastify = Fastify({
  logger: true
});

fastify.register(cors, { 
  origin: true
});

// category routes
fastify.register(getAllCategories);
fastify.register(getCategoryByID);
fastify.register(postNewCategory);
fastify.register(updateCategory);
fastify.register(deleteCategory);

// expenses routes
fastify.register(getAllExpenses);
fastify.register(getExpensesByCategoryID);
fastify.register(getExpenseById);
fastify.register(postNewExpense);
fastify.register(updateExpense);
fastify.register(deleteExpense);

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
});