import React, {useContext, useEffect} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {TransactionItem} from "./TransactionItem";


export const TransactionList = ()=> {
    const {transactions,getTransactions}= useContext(GlobalContext)

    useEffect(()=>{
        getTransactions()
    },[])
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions && transactions.map(elem =>(
                        <TransactionItem
                            key={elem._id}
                            id={elem._id}
                            name={elem.text}
                            amount={elem.amount}
                        />
                    ))
                }
            </ul>
        </>
    );
}

