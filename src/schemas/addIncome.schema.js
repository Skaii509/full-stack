import {z} from 'zod'

export const addIncomeSchema = z.object({
    //TITLE
    title: z.string({
        required_error: 'Title is required'
    }),
    //AMOUNT
    amount: z.string({
        required_error: 'Amount is required'
    })
})