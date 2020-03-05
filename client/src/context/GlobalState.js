import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
import  axios from "axios";
const initialState = {
    transactions:[],
    loading:true,
    errors:null
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    
    async function getTransactions() {
        try {
            const res = await axios.get('/api/transactions')
            dispatch({
                type:'GET_TRANSACTIONS',
                payload:res.data.data
            })

        }catch (e) {
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:e.response.data.error
            })
        }
    }

    async  function delTransaction(id){
        try {
             await axios.delete(`/api/transactions/${id}`)
            dispatch({
                type:'DEL_TRANSACTION',
                payload:id
            })

        }catch (e) {
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:e.response.data.error
            })
        }
    }

    async function addTransaction(data){
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        try {
            const res = await axios.post(`/api/transactions`,data,config)
            dispatch({
                type:'ADD_TRANSACTION',
                payload:res.data.data
            })

        }catch (e) {
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:e.response.data.error
            })
        }
    }


    return <GlobalContext.Provider value={{
        transactions: state.transactions,
        loading: state.loading,
        errors: state.errors,
        getTransactions,
        delTransaction,
        addTransaction
    }}>{children}</GlobalContext.Provider>
}