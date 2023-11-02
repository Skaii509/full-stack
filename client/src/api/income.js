import axios from './axios'

export const getIncomesRequest   = ()           => axios.get('/incomes');
export const getIncomeRequest    = (id)         => axios.get(`/incomes/${id}`);
export const createIncomeRequest = (income)     => axios.post('/incomes', income);
export const updateIncomeRequest = (id, income) => axios.put(`/incomes/${id}`, income);
export const deleteIncomeRequest = (id)         => axios.delete(`/incomes/${id}`);