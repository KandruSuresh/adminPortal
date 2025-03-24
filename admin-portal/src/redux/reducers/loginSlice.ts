import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const validateLogin = createAsyncThunk(
    'loginReducer',
    async (loginData) => {
        const response = await axios.get('https://login-f4533-default-rtdb.firebaseio.com/login.json');
        const data: { email: string; password: string }[] = response.data;
        return { data, loginData }
    }
)

const initialState = {
    loginStatus: ''
};

const loginSlice = createSlice({
    name: 'loginReducer',
    initialState,
    reducers: {
        logoutUser: (state, action) => {
            console.log('coming here')
            state.loginStatus = 'Failed';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(validateLogin.pending, (state) => {
            // state.isLoading = true
        })
        builder.addCase(validateLogin.fulfilled, (state, action) => {
            const { data, loginData } = action.payload;
            const dd = data.filter((item: any) => item?.email == loginData.email && item?.password == loginData.password);
            if (dd.length) {
                state.loginStatus = 'Success';
            } else {
                state.loginStatus = 'Failed';
            }

        })
        builder.addCase(validateLogin.rejected, (state, action) => {
            // state.isLoading = false
            // state.error = action.error.message
        })
    }
})

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
