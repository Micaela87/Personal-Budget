export const bodyPostSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      budget: { type: 'number' }
    },
    required: ['name', 'budget']
}

export const bodyPutSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        budget: { type: 'number' }
    }
}
  
export const responseSchema = {
    type: 'object',
    properties: {
      category: {
        type: 'object',
        properties: {
            id: { type: 'number' },
            name: { type: 'string' },
            budget: { type: 'number' }
        }
      }
    }
}