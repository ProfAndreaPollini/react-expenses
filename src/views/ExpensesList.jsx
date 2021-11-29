import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ExpensesByCategory from '../components/ExpensesByCategory'
import { euroFormatter } from '../lib/formatter'
import { ExpensesContext } from '../provider/ExpensesProvider'

function Expense({expense}) {
    return (
        <li>
            <h2>{expense.description}</h2>
            <div>{euroFormatter(expense.amount)}</div>
        </li>
    )
}

function ExpensesList() {
    const {expenses,ExpensesService,expensesTotalByCategory} = useContext(ExpensesContext)
    return (
        <div>
            <h2>Speses totali: {euroFormatter(ExpensesService.getTotalExpenses())}</h2>

            <ExpensesByCategory/>
            <h3>Expenses List</h3>
            <Link to="/expenses/new">Add new expense</Link>
            <ul>
                {expenses.map((expense,pos) => <Expense key={pos} expense={expense}/>)}
            </ul>
            <pre>{ JSON.stringify(expensesTotalByCategory)}</pre>
        </div>
    )
}

export default ExpensesList
