import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, editStudent } from "../../state/Slice/feesSlice";
import { useNavigate, useParams } from "react-router-dom";

const FeesRedux = ()=> {
    const[name, setName] = useState("");
    const[amount, setAmount] = useState("");
    
    const dispatch = useDispatch();
    const {action, id} = useParams();
    const nav = useNavigate();
    const {students, isLoading} = useSelector((state)=>state.fees);
    let studentObj = students.find((item)=> {
        return item.id == id;
    })
    useEffect(()=>{
        setName(studentObj?.name);
        setAmount(studentObj?.amount);
    },[studentObj]);

    const handleSubmit = ()=> {
        if(action == "add")
        {
            const id = Math.random(9,999);
            let stuObj = {id: id, name:name, amount: amount};
            dispatch(addStudent(stuObj));
            
        }
        if(action == "edit"){
           let existingStudent = {...studentObj,name,amount};
           dispatch(editStudent(existingStudent));
        }
        handleReset();
        nav("/feesList");
       
        
    }
    const handleReset = ()=> {
        setName("");
        setAmount("");
    }
   
    
        
    
   
    return(
        <div>
            <div>Name:<input type = "text" value = {name} onChange = {(e)=>setName(e.target.value)}></input></div>
            <div>Amount:<input type = "number" value = {amount} onChange = {(e)=>setAmount(e.target.value)}></input></div>
            <div><button onClick={handleSubmit}>Submit</button></div>
        </div>
    )
}
export default FeesRedux;