import { createContext, useContext, useState } from "react";
import { getExpensesRequest, getExpenseRequest, createExpenseRequest, deleteExpenseRequest, updateExpenseRequest } from "../api/expense";

const ExpenseContext = createContext();

export const useExpenses = () => {
    const context = useContext(ExpenseContext); 
    if (!context) throw new Error("useExpenses must be used within a ExpenseProvider");
    return context;
};

export function ExpenseProvider({children}) {
    const [expenses, setExpenses] = useState([])

    //GET ALL
    const getExpenses = async () => {
        try {
            const res = await getExpensesRequest()
            setExpenses(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    //GET ONE
    const getExpense = async (id) => {
        try {
            const res = await getExpenseRequest(id)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    //CREATE
    const createExpense = async (expense) => {
        try {
            await createExpenseRequest(expense)
            // getIncomes()
        } catch (error) {
            console.error(error)
        }
    }

    //DELETE
    const deleteExpense = async (id) => {
        try {
            await deleteExpenseRequest(id)
            // getIncomes()
        } catch (error) {
            console.error(error)
        }
    }

    //EDIT
    const editExpense = async (id, expense) => {
        try {
            updateExpenseRequest(id, expense)
        } catch (error) {
            console.error(error)
        }
    }

    return ( 
        <ExpenseContext.Provider 
            value={{
                expenses,
                getExpenses,
                getExpense,
                createExpense,
                deleteExpense,
                editExpense
            }}
        >
            {children}
        </ExpenseContext.Provider>
     );
}