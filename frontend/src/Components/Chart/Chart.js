import React from 'react'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext()

    // Sort the incomes and expenses by date
    const sortedIncomes = [...incomes].sort((a, b) => new Date(a.date) - new Date(b.date))
    const sortedExpenses = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date))

    const data = {
        labels: sortedIncomes.map((inc) => {
            const { date } = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: sortedIncomes.map((income) => income.amount),
                backgroundColor: 'green',
                borderColor: 'green',
                tension: 0.2
            },
            {
                label: 'Expenses',
                data: sortedExpenses.map((expense) => expense.amount),
                backgroundColor: 'red',
                borderColor: 'red',
                tension: 0.2
            }
        ]
    }

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`

export default Chart
