import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students:[{id:1, name:"abinaya", amount: 700}],
    isLoading: false
};

const feesSlice = createSlice({
    name : "fees", 
    initialState,
    reducers:{
        addStudent: (state, action)=> {
            let newStudent = action.payload;
            state.students.push(newStudent);
        },
        editStudent: (state, action) => {
            state.students = state.students.map((item)=> {
                return (item.id == action.payload.id ? action.payload : item);
            });
             
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter((item)=> {
                return item.id != action.payload.id;
            })
        }
    }
}
)
export const {addStudent, editStudent, deleteStudent} = feesSlice.actions;
export default feesSlice.reducer;