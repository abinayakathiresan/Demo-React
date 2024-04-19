import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FeesList= ()=> {
    const {students, isLoading} = useSelector((state)=>state.fees);
    const nav = useNavigate();
    const editHandler = (item)=> {
        nav("/fees/edit"+item.id);
    }
    return(
        <div>{students && students.map((item)=> {
            return (
                <div className="row">
            <div>Name: {item.name}</div>
                <div>Amount:{item.amount}</div>
                
                <div><button onClick={()=>editHandler(item)}>Edit</button></div>
                <div><button onClick={()=>deleteHandler(item)}>Delete</button></div>
            </div>
            )
            
        })}</div>
    )
}
export default FeesList;