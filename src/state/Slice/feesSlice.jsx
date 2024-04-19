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
        }
    }
}
)
export const {addStudent, editStudent, deleteStudent} = feesSlice.actions;
export default feesSlice.reducer;