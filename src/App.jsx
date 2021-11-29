import { Route, Routes } from "react-router-dom"
import ExpensesProvider from "./provider/ExpensesProvider"
import ExpenseCreate from "./views/ExpenseCreate"
import ExpensesList from "./views/ExpensesList"

function App() {

  return (
    <ExpensesProvider>
      <div>
        <h1>Expense Tracker</h1>
        <p>This is a simple expense tracker app</p>
        <Routes>
          <Route path="/" element={<ExpensesList />} />
          <Route path="/expenses/new" element={<ExpenseCreate />} />
        </Routes>
      </div>
    </ExpensesProvider>
  )
}

export default App
