import React,{useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const TransactionItem = ({id,name,amount}) =>{
    const {delTransaction} = useContext(GlobalContext)

    const sign = amount > 0 ? '+':'-'
     return(
        <li className={amount >0? 'plus':'minus'}>
            {name} <span>{sign+'$'+Math.abs(amount)}</span><button onClick={() =>delTransaction(id)} className="delete-btn">x</button>
        </li>
    )
}