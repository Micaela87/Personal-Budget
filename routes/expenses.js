import { prisma }  from '../index.js';
import { bodyExpensePostSchema, bodyExpensePutSchema, responseExpenseSchema } from '../schemas.js';

export const getAllExpenses = (fastify, options = {}, done) => {

    fastify.get('/expenses', async(req, res) => {

        try {

            const expenses = await prisma.expenses.findMany();
            res.status(200).send(expenses);

        } catch(error) {

            fastify.log.error(error);
            res.status(500).send({ ok: false, message: error.message });
            process.exit(1);
        }
    });

    done();
}

export const getExpensesByCategoryID = (fastify, options = {}, done) => {

    fastify.get('/expenses/category/:id', async (req, res) => {

        try {

            const { id } = req.params;

            const expenses = await prisma.expenses.findMany({
                where: { categoryId: Number(id) }
            });

            res.status(200).send(expenses);

        } catch(error) {

            fastify.log.error(error);
            res.status(500).send({ ok: false, message: error.message });
            process.exit(1);

        }
    });

    done();
}

export const getExpenseById = (fastify, options = {}, done) => {

    fastify.get('/expenses/:id', async (req, res) => {

        try {

            const { id } = req.params;

            const expense = await prisma.expenses.findUnique({
                where: { id: Number(id) }
            });

            res.status(200).send(expense);

        } catch(error) {

            fastify.log.error(error);
            res.status(500).send({ ok: false, message: error.message });
            process.exit(1);

        }

    });

    done();
}

export const postNewExpense = (fastify, options = {}, done) => {

    fastify.post('/expense', { handler: async (req, res) => {

        try {

            const bodyValidationFunction = req.getValidationFunction('body');
            const validationResult = bodyValidationFunction(req.body);
        
            const expense = await prisma.expenses.create({data: req.body});
        
            const responseSerializationFunction = res.getSerializationFunction(200);
            const serializedResponse = responseSerializationFunction({expense});
            
            res.status(200).send(serializedResponse);

        } catch(error) {

            fastify.log.error(error);
            res.status(500).send({ ok: false, message: error.message });
            process.exit(1);
        }

    }, schema: { body: bodyExpensePostSchema, response: { 200: responseExpenseSchema }}});

    done();
}

export const updateExpense = (fastify, options = {}, done) => {

    fastify.put('/expense/:id', { handler: async (req, res) => {

        try {

            const { id } = req.params;

            const bodyValidationFunction = req.getValidationFunction('body');
            const validationResult = bodyValidationFunction(req.body);
    
            const expense = await prisma.expenses.update({
                where: { id: Number(id) },
                data: req.body
            });
        
            const responseSerializationFunction = res.getSerializationFunction(200);
            const serializedResponse = responseSerializationFunction({expense});
        
            res.status(200).send(serializedResponse); 

        } catch(error) {

            fastify.log.error(error);
            res.status(500).send({ ok: false, message: error.message });
            process.exit(1);

        }

    }, schema: { body: bodyExpensePutSchema, response: { 200: responseExpenseSchema }}});

    done();

}

export const deleteExpense = (fastify, options = {}, done) => {

    fastify.delete('/expense/:id', async (req, res) => {

        try {

            const { id } = req.params;

            const expense = await prisma.expenses.delete({
                where: { id: Number(id) }
            });

            res.status(200).send({ ok: true });

        } catch(error) {

            fastify.log.error(error);
            res.status(500).send({ ok: false, message: error.message });
            process.exit(1);

        }
    });

    done();
}