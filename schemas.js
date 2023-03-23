// category schemas
export const bodyCategoryPostSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      budget: { type: 'number' }
    },
    required: ['name', 'budget']
}

export const bodyCategoryPutSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        budget: { type: 'number' }
    }
}
  
export const responseCategorySchema = {
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

// expense schema
export const bodyExpensePostSchema = {
  type: 'object',
  properties: {
    quantity: { type: 'number' },
    categoryId: { type: 'number' }
  },
  required: ['quantity', 'categoryId']
}

export const bodyExpensePutSchema = {
  type: 'object',
  properties: {
      id: { type: 'number' },
      categoryId: { type: 'number' },
      quantity: { type: 'number' }
  }
}

export const responseExpenseSchema = {
  type: 'object',
  properties: {
    expense: {
      type: 'object',
      properties: {
          id: { type: 'number' },
          categoryId: { type: 'number' },
          quantity: { type: 'number' }
      }
    }
  }
}