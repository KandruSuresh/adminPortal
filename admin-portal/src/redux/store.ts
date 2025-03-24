import { configureStore, Tuple } from '@reduxjs/toolkit'
import managePartner from './reducers/managePartnerSlice';
import loginSlice from './reducers/loginSlice';

export const store = configureStore({ 
    reducer: {
        partners: managePartner,
        login: loginSlice
    } 
})