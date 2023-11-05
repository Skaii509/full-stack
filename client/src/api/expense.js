import axios from './axios'

export const getExpensesRequest   = ()            => axios.get('/expenses');
export const getExpenseRequest    = (id)          => axios.get(`/expenses/${id}`);
export const createExpenseRequest = (expense)     => axios.post('/expenses', expense);
export const updateExpenseRequest = (id, expense) => axios.put(`/expenses/${id}`, expense);
export const deleteExpenseRequest = (id)          => axios.delete(`/expenses/${id}`);