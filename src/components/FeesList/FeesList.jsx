import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../../state/Slice/feesSlice";

const FeesList= ()=> {
    const {students, isLoading} = useSelector((state)=>state.fees);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const editHandler = (item)=> {
        nav("/feesredux/edit/"+item.id);
    }
    const deleteHandler = (item)=> {
        if(confirm("Do you want to delete"))
        dispatch(deleteStudent(item));
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