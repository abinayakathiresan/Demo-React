import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../state/Slice/feesSlice";
import { useParams } from "react-router-dom";

const FeesRedux = ()=> {
    const [stuId, setId] = useState("");
    const[name, setName] = useState("");
    const[amount, setAmount] = useState("");
    
    const dispatch = useDispatch();
    const {action, id} = useParams();
    const {students, isLoading} = useSelector((state)=>state.fees);
    let studentObj = students.find((item)=> {
        return item.id == id;
    })
    useEffect(()=>{
        setId(studentObj.id);
        setName(studentObj.name);
        setAmount(studentObj.amount);
    },[studentObj]);

    const handleSubmit = ()=> {
        if(action == "add")
        {
            const id = Math.random(9,999);
            let stuObj = {id: id, name:name, amount: amount};
            dispatch(addStudent(stuObj));
            nav("/feesList");
        }
        else{
            let copyStudents = [...students];
            copyStudents =  copyStudents.map((item)=> {
                return item.id === id ? {...students, name: name, amount:amount} : item;
            })
            

        }
        handleReset();
        
    }
    const handleReset = ()=> {
        setId("");
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