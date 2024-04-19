import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export const Counter = ()=> {
    const[count, setCount] = useState(0);
    const[name, setName] = useState("");
    const[age, setage] = useState("");
    const nameRef = useRef();
    const ageRef = useRef();
    const[posts, setPosts] = useState([]);

    const incHandle = ()=>{
        setCount(count + 1);
    }
    const decHandle = ()=>{
        if(count>1){setCount(count - 1);}
    }
    const focusName = () => {
        nameRef.current.focus();
    }
    const focusAge = () => {
        ageRef.current.focus();
    }
    const loadPost = ()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
            const posts = response.data;
            setPosts(posts);
          });
    }
    useEffect(()=>{
        loadPost();
    },[]);
    return(
        <div>
            <div>Name:<input type = "text" ref = {nameRef} onChange = {(e)=> {setName(e.target.value)}} value = {name}></input></div>
            <div>Age:<input type = "text" ref = {ageRef} onChange = {(e)=> {setage(e.target.value)}} value = {age}></input></div>
            <div>Name:{name}</div>
            <div>Age:{age}</div>
            <div><button onClick = {focusName}>Focus Name</button></div>
            <div><button onClick = {focusAge}>Focus Age</button></div>
            <div>Counter:{count}</div>
            <div><button onClick = {incHandle}>Increment Count</button></div>
            <div><button onClick = {decHandle}>Decrement Count</button></div>
            <div>{posts && posts.map((item)=> {
                return <div><div>{item.id}</div>
                <div>{item.title}</div></div>
            })}</div>
        </div>
    )
}
export default Counter;