import { createContext, useContext, useState } from "react";
import { getIncomesRequest, getIncomeRequest, createIncomeRequest, deleteIncomeRequest, updateIncomeRequest } from "../api/income";
import { getExpensesRequest, getExpenseRequest, createExpenseRequest, deleteExpenseRequest, updateExpenseRequest } from "../api/expense";

const CalculatorDataContext = createContext();

export const useIncomes = () => {
    const context = useContext(CalculatorDataContext); 
    if (!context) throw new Error("useIncomes must be used within a IncomeProvider");
    return context;
};

export const useExpenses = () => {
    const context = useContext(CalculatorDataContext); 
    if (!context) throw new Error("useExpenses must be used within a ExpenseProvider");
    return context;
};

export function CalculatorDataProvider({children}) {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])

    //--------------INCOMES--------------//
    //GET ALL
    const getIncomes = async () => {
        try {
            const res = await getIncomesRequest()
            setIncomes(res.data)
           
        } catch (error) {
            console.error(error)
        }
    }

    //GET ONE
    const getIncome = async (id) => {
        try {
            const res = await getIncomeRequest(id)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    //CREATE
    const createIncome = async (income) => {
        try {
            await createIncomeRequest(income)
            getIncomes()
        } catch (error) {
            console.error(error)
        }
    }

    //DELETE
    const deleteIncome = async (id) => {
        try {
            await deleteIncomeRequest(id)
            getIncomes()
        } catch (error) {
            console.error(error)
        }
    }

    //EDIT
    const editIncome = async (id, income) => {
        try {
            updateIncomeRequest(id, income)
        } catch (error) {
            console.error(error)
        }
    }

    //--------------EXPENSES--------------//
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
            getExpenses()
        } catch (error) {
            console.error(error)
        }
    }

    //DELETE
    const deleteExpense = async (id) => {
        try {
            await deleteExpenseRequest(id)
            getExpenses()
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
        <CalculatorDataContext.Provider 
            value={{
                incomes,
                getIncomes,
                getIncome,
                createIncome,
                deleteIncome,
                editIncome,
                expenses,
                getExpenses,
                getExpense,
                createExpense,
                deleteExpense,
                editExpense,
            }}
        >
            {children}
        </CalculatorDataContext.Provider>
     );
}