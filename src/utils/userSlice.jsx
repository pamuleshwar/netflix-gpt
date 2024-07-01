import { createSlice } from "@reduxjs/toolkit";

//create slice(small store)
const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        },
    },
})

//export actions
export const {addUser, removeUser} = userSlice.actions;

//export reducers
export default userSlice.reducer;