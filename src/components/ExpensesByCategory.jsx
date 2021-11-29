import React, { useContext, useEffect } from 'react'
import { euroFormatter } from '../lib/formatter'
import { ExpensesContext } from '../provider/ExpensesProvider'

import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function ExpensesByCategory() {
    
    const { expenses, ExpensesService } = useContext(ExpensesContext)
    const [expensesTotalByCategory, setExpensesTotalByCategory] = React.useState({})
    
    useEffect(() => {
        setExpensesTotalByCategory(ExpensesService.getTotalExpensesByCategory())
    }, [expenses])

    console.log(expensesTotalByCategory)
    const labels = Object.keys(expensesTotalByCategory)
    const values = labels.map(label => expensesTotalByCategory[label])

    console.log({ labels, datasets: [{ label: "xyz",data:values,backgroundColor: 'rgba(255, 99, 132, 0.5)', }] })

    return (
        <div>
            <h3>Spese per categoria</h3>
            <table>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Totale</th>
                    </tr>
                </thead>
                <tbody>
                    {expensesTotalByCategory && Object.keys(expensesTotalByCategory).map(category => {
                    console.log(category)
                        return (
                            <tr key={category}>
                                <td>{category}</td>
                                <td>{euroFormatter(expensesTotalByCategory[category])}</td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table> 
            {
              expensesTotalByCategory &&  <Bar data={{ labels, datasets: [{ label: "xyz", data: values, backgroundColor: 'rgba(255, 199, 132, 0.8)', }] }} />
            }
        </div>
    )
}

export default ExpensesByCategory
