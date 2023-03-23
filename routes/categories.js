import { bodyCategoryPutSchema, bodyCategoryPostSchema, responseCategorySchema } from '../schemas.js';
import { prisma } from '../index.js'

export const getAllCategories = (fastify, options = {}, done) => {
    fastify.get('/categories', async (req, res) => {

        try {
      
          const categories = await prisma.budgetCategories.findMany();
          res.send({ categories });
      
        } catch(error) {
      
          fastify.log.error(error);
          process.exit(1);
      
        }
        
    });

    done();
}

  
export const getCategoryByID = (fastify, options = {}, done) => {
    
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

    done();

}
  
export const postNewCategory = (fastify, options = {}, done) => {
    
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
  
    }, schema: { body: bodyCategoryPostSchema, response: { 200: responseCategorySchema }}});

    done();

}
  
export const updateCategory = (fastify, options = {}, done) => {
    
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
    
    }, schema: { body: bodyCategoryPutSchema, response: { 200: responseCategorySchema }}});

    done();

}
  
export const deleteCategory = (fastify, options = {}, done) => {
    
    fastify.delete('/category/:id', async (req, res) => {
  
        try {
    
            const category = await prisma.budgetCategories.delete({
                where: { id: Number(req.params.id) }
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