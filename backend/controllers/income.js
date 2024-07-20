const IncomeSchema = require("../models/IncomeModel")



exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date, userid} = req.body

    const income = IncomeSchema({
        title, amount, category, description, date, userid
    })

    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required'})
        }
        if(amount <=0 || !amount === 'number' ){
            return res.status(400).json({message: 'Amount must be positive number'})
        }

        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(income)
}

exports.getIncomes = async (req, res) => {
    try {
        const {userid} = req.query
        console.log(userid)
        const incomes = await IncomeSchema.find({userid:userid}).sort({createdAt: -1})
        res.status(200).json(incomes)
        console.log(incomes)
    } catch (error) {
        res.status(500).json({message :'Server Error'})
    }

}


exports.deleteIncome = async (req, res) => {

    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({message :'Income deleted.'})
    })
    .catch((err) => {
        res.status(500).json({message :'Server Error'})
    })
    
}