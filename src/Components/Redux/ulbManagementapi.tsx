
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import axios from './../Lib/apiCall';



const token:any ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjFfVGh1IFNlcCAyOCAyMDIzIDA3OjMyOjM3IEdNVCswMjAwIChDZW50cmFsIEV1cm9wZWFuIFN1bW1lciBUaW1lKSI.rzmDqK4Tc-LrK5xoycDsjr2UT-sQRHJ4FsUQVVB3XYY"

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
export const getUlbHeader = createAsyncThunk("ULBmanagement/getUlbHeader",
  async () => {
    const response = await axios.get(`ulb/headers`, config)
    console.log(response)
    return {
      data: response.data.data
    }
  }
)

export const getULBdata = createAsyncThunk("ULBmanagement/getULBdata",
  async (payload) => {
    
    const response = await axios.get(`ulb?name=&sortColumnName=&sortColumnType=desc&limit=10&page=1`,config)
    console.log(response)
    return {
       data: response.data
    }
  }
)


const ULBSlice = createSlice({
  name: 'ULBmanagement',
  initialState: {
    ulbHeaderData: [],
    ulbData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUlbHeader.fulfilled, (state, action) => {
        state.ulbHeaderData = action.payload.data.headers.concat({
          accessor: 'actionButton',
          filter: 'false',
          header: 'Action',
          sortable: 'false',
        });
      })
      .addCase(getULBdata.fulfilled, (state, action) => {
        state.ulbData = action.payload.data; // Use the imported getULBdata API here
      });
  },
});

export default ULBSlice.reducer