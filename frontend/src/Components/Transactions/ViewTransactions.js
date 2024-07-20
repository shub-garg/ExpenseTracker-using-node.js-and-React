// ViewTransactions.js

import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';

const ViewTransactions = () => {
  const { getIncomes, getExpenses, incomes, expenses } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  const handleRowClick = (item) => {
    alert(JSON.stringify(item, null, 2));
  };

  return (
    <ViewTransactionsStyled>
        <InnerLayout>
      <h2>Incomes</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map(income => (
            <tr key={income._id} onClick={() => handleRowClick(income)}>
              <td>{income.title}</td>
              <td>{income.amount}</td>
              <td>{income.category}</td>
              <td>{new Date(income.date).toLocaleDateString()}</td>
              <td>{income.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense._id} onClick={() => handleRowClick(expense)}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </InnerLayout>
    </ViewTransactionsStyled>
  );
}

const ViewTransactionsStyled = styled.div`

    h2{
    margin-bottom: 10px}

    th {
    background-color:blue;
    }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f1f1f1;
      cursor: pointer;
    }


  }
`;

export default ViewTransactions;
