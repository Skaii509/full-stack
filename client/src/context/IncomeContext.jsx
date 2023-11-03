import { createContext, useContext, useState } from "react";
import { getIncomesRequest, getIncomeRequest, createIncomeRequest, deleteIncomeRequest, updateIncomeRequest } from "../api/income";

const IncomeContext = createContext();

export const useIncomes = () => {
    const context = useContext(IncomeContext); 
    if (!context) throw new Error("useIncomes must be used within a IncomeProvider");
    return context;
};

export function IncomeProvider({children}) {
    const [incomes, setIncomes] = useState([])

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

    return ( 
        <IncomeContext.Provider 
            value={{
                incomes,
                getIncomes,
                getIncome,
                createIncome,
                deleteIncome,
                editIncome
            }}
        >
            {children}
        </IncomeContext.Provider>
     );
}