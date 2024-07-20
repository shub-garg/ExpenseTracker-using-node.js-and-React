const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense')
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { checkUser, register, login } = require('../controllers/user');

const router = require('express').Router()

router.post('/api/v1/add-income', addIncome)
    .get('/api/v1/get-incomes', getIncomes)
    .delete('/api/v1/delete-income/:id', deleteIncome)
    .post('/api/v1/add-expense', addExpense)
    .get('/api/v1/get-expenses', getExpenses)
    .delete('/api/v1/delete-expense/:id', deleteExpense)
    .post("/", checkUser)
    .post("/api/v1/register", register)
    .post("/api/v1/login", login);

module.exports = router