import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)

    const plusExpenses = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc,item) => (acc += item.amount),0).toFixed(2)

    const minusExpenses = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc,item) => (acc += item.amount),0).toFixed(2)



    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${plusExpenses}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(minusExpenses)}</p>
            </div>
        </div>
    )
}