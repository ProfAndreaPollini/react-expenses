import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Expense from '../lib/Expense'

export const ExpensesContext = React.createContext()

function ExpensesProvider({ children }) {
    const [expenses, setExpenses] = React.useState([])
 
    

    useEffect(() => {
        setExpenses([new Expense({ description: 'Rent', amount: 1000, category: "casa" }), new Expense({ description: 'Coffee', amount: 2, category: "cibo" }), new Expense({ description: 'Food', amount: 10, category: "cibo" })])
    }, [])

    

    const addExpense = (expense) => {
        setExpenses([...expenses, expense])
    }

    const getTotalExpenses = () => {
        return expenses.reduce((acc, expense) => acc + expense.amount, 0)
    }

    function getCategories() {
        return expenses.reduce((acc, expense) => {
            if (!acc.includes(expense.category)) {
                acc.push(expense.category)
            }
            return acc

        }, [])
    }

    function getTotalExpensesByCategory  ()  {
        let expensesByCategory = {}
        getCategories().forEach(category => {
            expensesByCategory[category] = expenses.reduce((acc, expense) => acc + (expense.category === category ? expense.amount : 0), 0)
        })
        return expensesByCategory
    }


    const ExpensesService = {
        addExpense,
        getTotalExpenses,
        getTotalExpensesByCategory,
        getCategories
    }

    return (
        <ExpensesContext.Provider value={{
            expenses,
            ExpensesService
        }}>
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesProvider
