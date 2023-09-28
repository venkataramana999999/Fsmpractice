
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import axios from './../Lib/apiCall';



const token:any ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjFfVGh1IFNlcCAyOCAyMDIzIDA3OjMyOjM3IEdNVCswMjAwIChDZW50cmFsIEV1cm9wZWFuIFN1bW1lciBUaW1lKSI.rzmDqK4Tc-LrK5xoycDsjr2UT-sQRHJ4FsUQVVB3XYY"

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
export const getUserHeader = createAsyncThunk("Usermanagement/getUserHeader",
  async () => {
    const response = await axios.get(`user/headers`, config)
    console.log(response)
    return {
      data: response.data.data
    }
  }
)

export const getUserdata = createAsyncThunk("Usermanagement/getUserdata",
  async (payload) => {
    const response = await axios.get(`user?name=&sortColumnName=&sortColumnType=desc&limit=10&page=1`, config)
    console.log(response)
    return {
      data: response.data
    }
  }
)


export const UserSlice = createSlice({
    name: 'Usermanagement',
    initialState: {
      userHeaderData: [],
      userData:[],
    //   RoleList: [],
    //   RoleListAdmin:[],
    //   addUserData :[]
    },
    reducers: { },
  extraReducers: (builder) => {
      builder
      .addCase(getUserHeader.fulfilled, (state, action) => {
        state.userHeaderData = action.payload.data.headers.concat({accessor: "actionButton", filter: "false", header: "Action", sortable: "false"})
      })
      .addCase(getUserdata.fulfilled, (state, action) => {
        state.userData = action.payload.data
      })
    //   .addCase(getRoleList.fulfilled, (state, action) => {
    //     state.RoleList = action.payload
    //   })
    //   .addCase(getRoleListAdmin.fulfilled, (state, action) => {
    //     state.RoleListAdmin = action.payload
    //   })
  }
})

export default UserSlice.reducer