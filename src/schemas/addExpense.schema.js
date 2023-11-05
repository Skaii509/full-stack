import {z} from 'zod'

export const addExpenseSchema = z.object({
    //TITLE
    title: z.string({
        required_error: 'Title is required'
    }),
    //AMOUNT
    amount: z.number({
        required_error: 'Amount is required'
    })
})