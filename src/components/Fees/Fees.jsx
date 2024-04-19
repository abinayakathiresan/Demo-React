import React, { useState } from "react";

const Fees = ()=> {
    const [id, setId] = useState("");
    const[name, setName] = useState("");
    const[amount, setAmount] = useState("");
    const[students, setStudents] = useState("");

    const handleSubmit = ()=> {
        if(id == "")
        {
            const id = Math.random(9,999);
            let stuObj = {id: id, name:name, amount: amount};
            let newStudents = [...students];
            newStudents.push(stuObj);
            setStudents(newStudents);
        }
        else{
            let copyStudents = [...students];
            copyStudents =  copyStudents.map((item)=> {
                return item.id === id ? {...students, name: name, amount:amount} : item;
            })
            setStudents(copyStudents);

        }
        handleReset();
        
    }
    const handleReset = ()=> {
        setId("");
        setName("");
        setAmount("");
    }
    const editHandler = (item)=> {
       setId(item.id);
       setName(item.name);
       setAmount(item.amount);
    }
    const deleteHandler = (student)=> {
        let copyStudents = [...students];
            copyStudents =  copyStudents.filter((item)=> {
                return item.id !== student.id;
            })
            setStudents(copyStudents);
        
    }
   
    return(
        <div>
            <div>Name:<input type = "text" value = {name} onChange = {(e)=>setName(e.target.value)}></input></div>
            <div>Amount:<input type = "number" value = {amount} onChange = {(e)=>setAmount(e.target.value)}></input></div>
            <div><button onClick={handleSubmit}>Submit</button></div>
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
        </div>
    )
}
export default Fees;