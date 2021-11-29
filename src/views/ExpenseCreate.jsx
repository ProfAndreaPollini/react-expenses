import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Expense from '../lib/Expense'
import { ExpensesContext } from '../provider/ExpensesProvider'
/**
 *
 *
 * @return {*} 
 */
function ExpenseCreate() {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")

    const { ExpensesService } = useContext(ExpensesContext)

    const navigate = useNavigate()
    

    function CreateExpense() {
        console.log("CreateExpense")
        const expense = new Expense({ description, amount, category, date })
        console.log(expense)
        ExpensesService.addExpense(expense)
        navigate("/")
    }

    function OnDescriptionChange(event) {
        setDescription(event.target.value)
    }

    function OnAmountChange(event) {
        setAmount(event.target.value)
    }

    function OnCategoryChange(event) {
        setCategory(event.target.value)
    }

    function OnDateChange(event) {
        setDate(event.target.value)
    }

    return (
        <>
            <h3>Nuova spesa</h3>

            <input type="text" placeholder="Descrizione" value={description} onChange={OnDescriptionChange} />
            <input type="text" placeholder="Importo" value={amount} onChange={OnAmountChange} />
            <input type="date" placeholder="Data" value={date} onChange={OnDateChange}/>
            <input type="text" placeholder="Categoria" value={category} onChange={OnCategoryChange}/>
            <button onClick={CreateExpense}>Aggiungi</button>
        </>
    )
}

export default ExpenseCreate
