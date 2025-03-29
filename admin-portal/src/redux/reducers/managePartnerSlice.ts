import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Partner {
    id: number;
    name: string;

}

const initialState: { partnersList: Partner[]; partnerSaved: Record<string, any> } = {
    // isLoading: false,
    partnersList: [],
    partnerSaved: {}
};

export const fetchPartnerData = createAsyncThunk('managePartner/fetchPartner', async () => {
    const response = await axios.get('https://manage-partner-default-rtdb.firebaseio.com/partner.json');
    return response.data
}
)

export const savePartnerData = createAsyncThunk('managePartner/savePartner', async (payload) => {
        const response = await axios.post('https://manage-partner-default-rtdb.firebaseio.com/partner.json', payload);
        return response.data
    }
)

const managePartnerSlice = createSlice({
    name: 'managePartner',
    initialState,
    reducers: {
        fetchPartner: (state, action) => {
            // state.partnersList.push(action.payload);
        },
        addPartner: (state, action) => {
            const partner = { id: Date.now(), name: action.payload.name }
            state.partnersList.push(partner);
        },
        removePartner: (state, action) => {
            state.partnersList = state.partnersList.filter(partner => partner.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPartnerData.pending, (state) => {
            // state.isLoading = true
        })
        builder.addCase(fetchPartnerData.fulfilled, (state, action) => {
            // state.isLoading = false
            state.partnersList = action.payload
        })
        builder.addCase(fetchPartnerData.rejected, (state, action) => {
            // state.isLoading = false
            // state.error = action.error.message
        })
        builder.addCase(savePartnerData.fulfilled, (state, action) => {
            state.partnerSaved = action.payload
        })
    }
})

export const { fetchPartner, addPartner, removePartner } = managePartnerSlice.actions;
export default managePartnerSlice.reducer;