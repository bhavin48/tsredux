
// // ------------- get User Done --------------


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export interface IUser {
//     // id: number;
//     // fname: string;
//     // lname: string;
//     // avatar: string;
//     // username: string;
//     // email: string;

//     loading: boolean
//     error: string | null,
//     users: [] | null
// }

// const initialState: IUser = {
//     users: [],
//     loading: false,
//     error: null,
// }

// export const getUser = createAsyncThunk(
//     "getUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const userData = await axios.get("https://www.melivecode.com/api/users")
//             console.log("api get user ", userData);
//             return userData.data

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// export const userDetails = createSlice({
//     name: "userDetails",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {

//         builder.addCase(getUser.pending, (state) => {
//             state.loading = true
//         })

//         builder.addCase(getUser.fulfilled, (state, action) => {
//             state.loading = false;
//             state.users = action.payload
//         })

//     }
// })

// export default userDetails.reducer   // createSlice name




// ------------------- 


// ------------- get User Check console api data --------------


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export interface IUser {
//     // id: number;
//     // fname: string;
//     // lname: string;
//     // avatar: string;
//     // username: string;
//     // email: string;

//     loading: boolean
//     error: string | null,
//     users: [] | null
// }

// const initialState: IUser = {
//     users: [],
//     loading: false,
//     error: null,
// }

// export const getUser = createAsyncThunk(
//     "getUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const userData = await axios.get("https://www.melivecode.com/api/users")
//             console.log("api get user ", userData);
//             // return userData.data

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// export const userDetails = createSlice({
//     name: "userDetails",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {

//         builder.addCase(getUser.pending, (state) => {
//             state.loading = true
//         })

//         builder.addCase(getUser.fulfilled, (state, action) => {
//             state.loading = false;
//             // state.users = action.payload
//         })

//     }
// })

// export default userDetails.reducer   // createSlice name



// ------------------------- Login User Done----------


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// export interface IUser {
//     // id: number;
//     // fname: string;
//     // lname: string;
//     // avatar: string;
//     // username: string;
//     // email: string;

//     isLogin: boolean
//     loading: boolean
//     error: string | null | undefined,
//     users: any[] | null
// }

// const initialState: IUser = {
//     isLogin: false,
//     users: null,
//     loading: false,
//     error: "",

// }

// // create Action Login

// export const LoginUser = createAsyncThunk(
//     "LoginUser",
//     async (data: any, { rejectWithValue }) => {
//         // console.log("Login data", data);

//         try {
//             const LoginApi = await axios.post("https://www.melivecode.com/api/login", data)
//             // console.log("LoginApi ", LoginApi);
//             const responseData = LoginApi.data; // Extract the data
//             console.log("LoginApi ", responseData);
//             return responseData
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Get User

// export const getUser = createAsyncThunk(
//     "getUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const userData = await axios.get("https://www.melivecode.com/api/users")
//             // console.log("api get user ", userData);
//             return userData.data

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// export const userDetails = createSlice({
//     name: "userDetails",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {

//         builder.addCase(LoginUser.pending, (state) => {
//             // console.log("Pending" , state);  
//             state.isLogin = false
//         })

//         builder.addCase(LoginUser.fulfilled, (state, action) => {
//             // console.log("Pending" , state);  
//             console.log("action Login", action.payload.accessToken);
//             const token =  action.payload.accessToken
//             // console.log("token " , token);
//             if(token){
//                 state.isLogin = true;
//                 localStorage.setItem("tokens" , token); 
//             }else{
//                 state.isLogin = false
//             }           
//         })

//         builder.addCase(LoginUser.rejected, (state, action) => {
//             state.isLogin = false
//             state.error = action.error.message
//             // state.isLogin = false
//             // console.log("action Login", action.payload);
//         })

//         // Get User
//         builder.addCase(getUser.pending, (state) => {
//             // console.log("Pending" , state);
//             state.loading = true;
//             state.error = null;
//         })

//         builder.addCase(getUser.fulfilled, (state, action) => {
//             // console.log("fulfilled" , state);
//             // console.log("action " , action.payload);

//             state.loading = false;
//             state.users = action.payload
//         })


//         builder.addCase(getUser.rejected, (state, action) => {
//             // console.log("rejected" , state);
//             state.loading = false;
//             state.error = action.error.message; // Use action.error instead of action.payload
//         });

//     }
// })

// export default userDetails.reducer   // createSlice name



// ---------------------- Add User Done ------------



// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// export interface IUser {
//     // id: number;
//     // fname: string;
//     // lname: string;
//     // avatar: string;
//     // username: string;
//     // email: string;

//     isLogin: boolean
//     loading: boolean
//     error: string | null | undefined,
//     users: any[] | null
// }

// const initialState: IUser = {
//     isLogin: false,
//     users: null,
//     loading: false,
//     error: "",

// }

// // create Action Login

// export const LoginUser = createAsyncThunk(
//     "LoginUser",
//     async (data: any, { rejectWithValue }) => {
//         // console.log("Login data", data);

//         try {
//             const LoginApi = await axios.post("https://www.melivecode.com/api/login", data)
//             // console.log("LoginApi ", LoginApi);
//             const responseData = LoginApi.data; // Extract the data
//             // console.log("LoginApi ", responseData);
//             return responseData
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Get User

// export const getUser = createAsyncThunk(
//     "getUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const userData = await axios.get("https://www.melivecode.com/api/users")
//             // console.log("api get user ", userData);
//             return userData.data

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Add User

// export const addUser : any = createAsyncThunk(
//     "AddUser",
//     async(data : any , {rejectWithValue}) => {
//         // console.log("data Add " , data);

//         try{
//             const addApi = await axios.post("https://www.melivecode.com/api/users/create",data)
//         console.log("addApi " , addApi.data.user);

//         return addApi.data.user
//         }catch(error){
//             return rejectWithValue(error)
//         }

//     }
// )

// export const userDetails = createSlice({
//     name: "userDetails",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {

//         builder.addCase(LoginUser.pending, (state) => {
//             // console.log("Pending" , state);  
//             state.isLogin = false
//         })

//         builder.addCase(LoginUser.fulfilled, (state, action) => {
//             // console.log("Pending" , state);  
//             console.log("action Login", action.payload.accessToken);
//             const token =  action.payload.accessToken
//             // console.log("token " , token);
//             if(token){
//                 state.isLogin = true;
//                 localStorage.setItem("tokens" , token); 
//             }else{
//                 state.isLogin = false
//             }           
//         })

//         builder.addCase(LoginUser.rejected, (state, action) => {
//             state.isLogin = false
//             state.error = action.error.message
//             // state.isLogin = false
//             // console.log("action Login", action.payload);
//         })

//         // Get User
//         builder.addCase(getUser.pending, (state) => {
//             // console.log("Pending" , state);
//             state.loading = true;
//             state.error = null;
//         })

//         builder.addCase(getUser.fulfilled, (state, action) => {
//             // console.log("fulfilled" , state);
//             // console.log("action " , action.payload);

//             state.loading = false;
//             state.users = action.payload
//         })


//         builder.addCase(getUser.rejected, (state, action) => {
//             // console.log("rejected" , state);
//             state.loading = false;
//             state.error = action.error.message; // Use action.error instead of action.payload
//         });

//         // add User

//         builder.addCase(addUser.pending , (state) => {
//             state.loading = true;

//         })

//         builder.addCase(addUser.fulfilled , (state , action) => {
//            state.loading = false;
//            state.users?.push(action.payload)
//         })

//         builder.addCase(addUser.rejected , (state ,action) =>{
//             state.loading = false;
//             state.error = action.error.message
//         })

//     }
// })

// export default userDetails.reducer   // createSlice name



// // -------------------------------- Delete User Done ----------

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// export interface IUser {
//     // id: number;
//     // fname: string;
//     // lname: string;
//     // avatar: string;
//     // username: string;
//     // email: string;

//     isLogin: boolean
//     loading: boolean
//     error: string | null | undefined,
//     users: any[] | null 
// }

// const initialState: IUser = {
//     isLogin: false,
//     users: [],
//     loading: false,
//     error: "",

// }

// // create Action Login

// export const LoginUser = createAsyncThunk(
//     "LoginUser",
//     async (data: any, { rejectWithValue }) => {
//         // console.log("Login data", data);

//         try {
//             const LoginApi = await axios.post("https://www.melivecode.com/api/login", data)
//             // console.log("LoginApi ", LoginApi);
//             const responseData = LoginApi.data; // Extract the data
//             // console.log("LoginApi ", responseData);
//             return responseData
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Get User

// export const getUser = createAsyncThunk(
//     "getUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const userData = await axios.get("https://www.melivecode.com/api/users")
//             // console.log("api get user ", userData);
//             return userData.data

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Add User

// export const addUser : any = createAsyncThunk(
//     "AddUser",
//     async(data : any , {rejectWithValue}) => {
//         // console.log("data Add " , data);

//         try{
//             const addApi = await axios.post("https://www.melivecode.com/api/users/create",data)
//         // console.log("addApi " , addApi.data.user);
//         return addApi.data.user
//         }catch(error){
//             return rejectWithValue(error)
//         }

//     }
// )
// // create
// export const deleteUserData : any = createAsyncThunk(
//     "deleteUserData",
//     async(dataId : any , {rejectWithValue}) =>{
//        const deleteAPi = await axios.delete("https://www.melivecode.com/api/users/delete",{
//         data : {id : dataId}
//        })

//        console.log("deleteAPi " ,deleteAPi);
//        return dataId
//     }
// )
// export const userDetails = createSlice({
//     name: "userDetails",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {

//         builder.addCase(LoginUser.pending, (state) => {
//             // console.log("Pending" , state);  
//             state.isLogin = false
//         })

//         builder.addCase(LoginUser.fulfilled, (state, action) => {
//             // console.log("Pending" , state);  
//             console.log("action Login", action.payload.accessToken);
//             const token =  action.payload.accessToken
//             // console.log("token " , token);
//             if(token){
//                 state.isLogin = true;
//                 localStorage.setItem("tokens" , token); 
//             }else{
//                 state.isLogin = false
//             }           
//         })

//         builder.addCase(LoginUser.rejected, (state, action) => {
//             state.isLogin = false
//             state.error = action.error.message
//             // state.isLogin = false
//             // console.log("action Login", action.payload);
//         })

//         // Get User
//         builder.addCase(getUser.pending, (state) => {
//             // console.log("Pending" , state);
//             state.loading = true;
//             state.error = null;
//         })

//         builder.addCase(getUser.fulfilled, (state, action) => {
//             // console.log("fulfilled" , state);
//             // console.log("action " , action.payload);

//             state.loading = false;
//             state.users = action.payload
//         })


//         builder.addCase(getUser.rejected, (state, action) => {
//             // console.log("rejected" , state);
//             state.loading = false;
//             state.error = action.error.message; // Use action.error instead of action.payload
//         });

//         // add User

//         builder.addCase(addUser.pending , (state) => {
//             state.loading = true;

//         })

//         builder.addCase(addUser.fulfilled , (state , action) => {
//            state.loading = false;
//            state.users?.push(action.payload)
//         })

//         builder.addCase(addUser.rejected , (state ,action) =>{
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Delete User

//         builder.addCase(deleteUserData.pending , (state) => {
//             state.loading = true
//         })

//         builder.addCase(deleteUserData.fulfilled , (state ,action) =>{
//             state.loading = false;
//             // console.log("id", action.payload);


//             if (state.users) {
//                 state.users = state.users.filter(user => user.id !== action.payload);
//             } else {
//                 state.users = null;
//             }

//         })

//         builder.addCase(deleteUserData.rejected , (state , action) => {
//             state.loading = false;
//             state.error = action.erroor.message
//         })

//     }
// })

// export default userDetails.reducer   // createSlice name




// // -------------------------------- Update Done ----------


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// export interface IUser {
//     // id: number;
//     // fname: string;
//     // lname: string;
//     // avatar: string;
//     // username: string;
//     // email: string;

//     isLogin: boolean
//     loading: boolean
//     error: string | null | undefined,
//     users: any[] | null
//     isuserSelect: any[];
//     isEditSelect: any
// }

// const initialState: IUser = {
//     isLogin: false,
//     users: [],
//     isuserSelect: [],
//     isEditSelect: {},
//     loading: false,
//     error: "",

// }

// // create Action Login

// export const LoginUser = createAsyncThunk(
//     "LoginUser",
//     async (data: any, { rejectWithValue }) => {
//         // console.log("Login data", data);
//         try {
//             const LoginApi = await axios.post("https://www.melivecode.com/api/login", data)
//             // console.log("LoginApi ", LoginApi);
//             const responseData = LoginApi.data; // Extract the data
//             // console.log("LoginApi ", responseData);
//             return responseData
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Get User

// export const getUser = createAsyncThunk(
//     "getUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const userData = await axios.get("https://www.melivecode.com/api/users")
//             // console.log("api get user ", userData);
//             return userData.data

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Add User

// export const addUser: any = createAsyncThunk(
//     "AddUser",
//     async (data: any, { rejectWithValue }) => {
//         // console.log("data Add " , data);
//         try {
//             const addApi = await axios.post("https://www.melivecode.com/api/users/create", data)
//             // console.log("addApi " , addApi.data.user);
//             return addApi.data.user
//         } catch (error) {
//             return rejectWithValue(error)
//         }

//     }
// )
// // create Action Delete User 

// export const deleteUserData: any = createAsyncThunk(
//     "deleteUserData",
//     async (dataId: any, { rejectWithValue }) => {
//         const deleteAPi = await axios.delete("https://www.melivecode.com/api/users/delete", {
//             data: { id: dataId }
//         })

//         console.log("deleteAPi ", deleteAPi);
//         return dataId
//     }
// )


// // Create Selected USer 

// // export const selectedUser = createAsyncThunk(
// //     "selectedUser",
// //     async(data : any) =>{
// //         return data
// //     }
// // )


// // create action Edit record

// export const editUser:any = createAsyncThunk(
//     "editUser",
//     async(dataUser : any , {rejectWithValue}) =>{
//         try{
//             const editApi = await axios.put("https://www.melivecode.com/api/users/update",dataUser)
//             //    console.log("editApi " , editApi.data.user); 
//             return editApi.data.user
//         }catch(error){
//             return rejectWithValue(error)
//         }
//     }
// )


// export const userDetails = createSlice({
//     name: "userDetails",
//     initialState,
//     reducers: {
//         setSelectedUser: (state, action) => {
//             state.isuserSelect = action.payload
//         },

//         seteditSelectUser: (state, action) => {
//             // console.log("edit select id " , action.payload.id);
//             //  state.isEditSelect = state.isuserSelect?.filter((elm : any) => elm.id === action.payload.id)
//             const selectedId = action.payload.id;
//             state.isEditSelect = state.isuserSelect.find((user) => user.id === selectedId);
//         }
//     },
//     extraReducers: (builder) => {

//         builder.addCase(LoginUser.pending, (state) => {
//             // console.log("Pending" , state);  
//             state.isLogin = false
//         })

//         builder.addCase(LoginUser.fulfilled, (state, action) => {
//             // console.log("Pending" , state);  
//             console.log("action Login", action.payload.accessToken);
//             const token = action.payload.accessToken
//             // console.log("token " , token);
//             if (token) {
//                 state.isLogin = true;
//                 localStorage.setItem("tokens", token);
//             } else {
//                 state.isLogin = false
//             }
//         })

//         builder.addCase(LoginUser.rejected, (state, action) => {
//             state.isLogin = false
//             state.error = action.error.message
//             // state.isLogin = false
//             // console.log("action Login", action.payload);
//         })

//         // Get User
//         builder.addCase(getUser.pending, (state) => {
//             // console.log("Pending" , state);
//             state.loading = true;
//             state.error = null;
//         })

//         builder.addCase(getUser.fulfilled, (state, action) => {
//             // console.log("fulfilled" , state);
//             // console.log("action " , action.payload);
//             state.loading = false;
//             state.users = action.payload
//         })


//         builder.addCase(getUser.rejected, (state, action) => {
//             // console.log("rejected" , state);
//             state.loading = false;
//             state.error = action.error.message; // Use action.error instead of action.payload
//         });

//         // add User

//         builder.addCase(addUser.pending, (state) => {
//             state.loading = true;

//         })

//         builder.addCase(addUser.fulfilled, (state, action) => {
//             state.loading = false;
//             console.log("add Store ", action.payload);
//             state.users?.push(action.payload)
//         })

//         builder.addCase(addUser.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Delete User

//         builder.addCase(deleteUserData.pending, (state) => {
//             state.loading = true
//         })

//         builder.addCase(deleteUserData.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("id", action.payload);


//             if (state.users) {
//                 state.users = state.users.filter(user => user.id !== action.payload);
//             } else {
//                 state.users = null;
//             }

//         })

//         builder.addCase(deleteUserData.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.erroor.message
//         })


//         // Selected User

//         // builder.addCase(selectedUser)

//         // Edit User

//         builder.addCase(editUser.pending , (state) =>{
//             state.loading = true;
//         })
//         builder.addCase(editUser.fulfilled , (state , action) => {
//             state.loading = false;
//             // console.log("Edit store " , action.payload);
//             // state.users = action.payload
//             console.log("action.payload.id " , action.payload.id);
            

//             // state.users = state.users?.map(elm =>elm.id === action.payload.id ? action.payload : elm)
//             state.users = (state.users ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);
//         })
//         builder.addCase(editUser.rejected , (state , action) =>{
//             state.loading = false;
//             state.error = action.error.message
//         })

//     }
// })

// export const { setSelectedUser, seteditSelectUser } = userDetails.actions;
// export default userDetails.reducer   // createSlice name




// ---------------------------------------------


// ===================================
// -------------------------------- Done Add , update , delete ----------


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// export interface IUser {
//     // id: number;
//     // fname: string;
//     // lname: string;
//     // avatar: string;
//     // username: string;
//     // email: string;

//     isLogin: boolean
//     loading: boolean
//     error: string | null | undefined,
//     users: any[] | null
//     isuserSelect: any[];
//     isEditSelect: any
// }

// const initialState: IUser = {
//     isLogin: false,
//     users: [],
//     isuserSelect: [],
//     isEditSelect: {},
//     loading: false,
//     error: "",

// }

// // create Action Login

// export const LoginUser = createAsyncThunk(
//     "LoginUser",
//     async (data: any, { rejectWithValue }) => {
//         // console.log("Login data", data);
//         try {
//             const LoginApi = await axios.post("https://www.melivecode.com/api/login", data)
//             // console.log("LoginApi ", LoginApi);
//             const responseData = LoginApi.data; // Extract the data
//             // console.log("LoginApi ", responseData);
//             return responseData
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Get User

// export const getUser = createAsyncThunk(
//     "getUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const userData = await axios.get("https://www.melivecode.com/api/users")
//             // console.log("api get user ", userData);
//             return userData.data

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Add User

// export const addUser: any = createAsyncThunk(
//     "AddUser",
//     async (data: any, { rejectWithValue }) => {
//         // console.log("data Add " , data);
//         try {
//             const addApi = await axios.post("https://www.melivecode.com/api/users/create", data)
//             // console.log("addApi " , addApi.data.user);
//             return addApi.data.user
//         } catch (error) {
//             return rejectWithValue(error)
//         }

//     }
// )
// // create Action Delete User 

// export const deleteUserData: any = createAsyncThunk(
//     "deleteUserData",
//     async (dataId: any, { rejectWithValue }) => {
//         const deleteAPi = await axios.delete("https://www.melivecode.com/api/users/delete", {
//             data: { id: dataId }
//         })

//         console.log("deleteAPi ", deleteAPi);
//         return dataId
//     }
// )


// // Create Selected USer 

// // export const selectedUser = createAsyncThunk(
// //     "selectedUser",
// //     async(data : any) =>{
// //         return data
// //     }
// // )


// // create action Edit record

// export const editUser:any = createAsyncThunk(
//     "editUser",
//     async(dataUser : any , {rejectWithValue}) =>{
//         try{
//             const editApi = await axios.put("https://www.melivecode.com/api/users/update",dataUser)
//             //    console.log("editApi " , editApi.data.user); 
//             return editApi.data.user
//         }catch(error){
//             return rejectWithValue(error)
//         }
//     }
// )


// export const userDetails = createSlice({
//     name: "userDetails",
//     initialState,
//     reducers: {
//         setSelectedUser: (state, action) => {
//             state.isuserSelect = action.payload
//         },

//         seteditSelectUser: (state, action) => {
//             // console.log("edit select id " , action.payload.id);
//             //  state.isEditSelect = state.isuserSelect?.filter((elm : any) => elm.id === action.payload.id)
//             const selectedId = action.payload.id;
//             state.isEditSelect = state.isuserSelect.find((user) => user.id === selectedId);
//         }
//     },
//     extraReducers: (builder) => {

//         builder.addCase(LoginUser.pending, (state) => {
//             // console.log("Pending" , state);  
//             state.isLogin = false
//         })

//         builder.addCase(LoginUser.fulfilled, (state, action) => {
//             // console.log("Pending" , state);  
//             // console.log("action Login", action.payload.accessToken);
//             // console.log("action User " , action.payload.user.fname);
            
//             const token = action.payload.accessToken
//             const loginUser = action.payload.user.fname
//             // console.log("token " , token);
//             if (token) {
//                 state.isLogin = true;
//                 localStorage.setItem("tokens", token);
//                 localStorage.setItem("LoginUser" , loginUser)
//             } else {
//                 state.isLogin = false
//             }
//         })

//         builder.addCase(LoginUser.rejected, (state, action) => {
//             state.isLogin = false
//             state.error = action.error.message
//             // state.isLogin = false
//             // console.log("action Login", action.payload);
//         })

//         // Get User
//         builder.addCase(getUser.pending, (state) => {
//             // console.log("Pending" , state);
//             state.loading = true;
//             state.error = null;
//         })

//         builder.addCase(getUser.fulfilled, (state, action) => {
//             // console.log("fulfilled" , state);
//             // console.log("action " , action.payload);
//             state.loading = false;
//             state.users = action.payload
//         })


//         builder.addCase(getUser.rejected, (state, action) => {
//             // console.log("rejected" , state);
//             state.loading = false;
//             state.error = action.error.message; // Use action.error instead of action.payload
//         });

//         // add User

//         builder.addCase(addUser.pending, (state) => {
//             state.loading = true;

//         })

//         builder.addCase(addUser.fulfilled, (state, action) => {
//             state.loading = false;
//             console.log("add Store ", action.payload);
//             state.users?.push(action.payload)
//         })

//         builder.addCase(addUser.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Delete User

//         builder.addCase(deleteUserData.pending, (state) => {
//             state.loading = true
//         })

//         builder.addCase(deleteUserData.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("id", action.payload);


//             if (state.users) {
//                 state.users = state.users.filter(user => user.id !== action.payload);
//             } else {
//                 state.users = null;
//             }

//         })

//         builder.addCase(deleteUserData.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.erroor.message
//         })


//         // Selected User

//         // builder.addCase(selectedUser)

//         // Edit User

//         builder.addCase(editUser.pending , (state) =>{
//             state.loading = true;
//         })
//         builder.addCase(editUser.fulfilled , (state , action) => {
//             state.loading = false;
//             // console.log("Edit store " , action.payload);
//             // state.users = action.payload
//             console.log("action.payload.id " , action.payload.id);
            

//             // state.users = state.users?.map(elm =>elm.id === action.payload.id ? action.payload : elm)
//             state.users = (state.users ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);
//         })
//         builder.addCase(editUser.rejected , (state , action) =>{
//             state.loading = false;
//             state.error = action.error.message
//         })

//     }
// })

// export const { setSelectedUser, seteditSelectUser } = userDetails.actions;
// export default userDetails.reducer   // createSlice name




// ------------------------------------ Submit Button Enable Disable --------------------


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export interface IUser {
    // id: number;
    // fname: string;
    // lname: string;
    // avatar: string;
    // username: string;
    // email: string;

    isLogin: boolean
    loading: boolean
    error: string | null | undefined,
    users: any[] | null
    isuserSelect: any[];
    isEditSelect: any
}

const initialState: IUser = {
    isLogin: false,
    users: [],
    isuserSelect: [],
    isEditSelect: {},
    loading: false,
    error: "",

}

// create Action Login

export const LoginUser = createAsyncThunk(
    "LoginUser",
    async (data: any, { rejectWithValue }) => {
        // console.log("Login data", data);
        try {
            const LoginApi = await axios.post("https://www.melivecode.com/api/login", data)
            // console.log("LoginApi ", LoginApi);
            const responseData = LoginApi.data; // Extract the data
            // console.log("LoginApi ", responseData);
            return responseData
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// create Action Get User

export const getUser = createAsyncThunk(
    "getUser",
    async (data, { rejectWithValue }) => {
        try {
            const userData = await axios.get("https://www.melivecode.com/api/users")
            // console.log("api get user ", userData);
            return userData.data

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// create Action Add User

export const addUser: any = createAsyncThunk(
    "AddUser",
    async (data: any, { rejectWithValue }) => {
        // console.log("data Add " , data);
        try {
            const addApi = await axios.post("https://www.melivecode.com/api/users/create", data)
            // console.log("addApi " , addApi.data.user);
            return addApi.data.user
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)
// create Action Delete User 

export const deleteUserData: any = createAsyncThunk(
    "deleteUserData",
    async (dataId: any, { rejectWithValue }) => {
        const deleteAPi = await axios.delete("https://www.melivecode.com/api/users/delete", {
            data: { id: dataId }
        })

        console.log("deleteAPi ", deleteAPi);
        return dataId
    }
)


// Create Selected USer 

// export const selectedUser = createAsyncThunk(
//     "selectedUser",
//     async(data : any) =>{
//         return data
//     }
// )


// create action Edit record

export const editUser:any = createAsyncThunk(
    "editUser",
    async(dataUser : any , {rejectWithValue}) =>{
        try{
            const editApi = await axios.put("https://www.melivecode.com/api/users/update",dataUser)
            //    console.log("editApi " , editApi.data.user); 
            return editApi.data.user
        }catch(error){
            return rejectWithValue(error)
        }
    }
)


export const userDetails = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.isuserSelect = action.payload
        },

        seteditSelectUser: (state, action) => {
            // console.log("edit select id " , action.payload.id);
            //  state.isEditSelect = state.isuserSelect?.filter((elm : any) => elm.id === action.payload.id)
            const selectedId = action.payload.id;
            state.isEditSelect = state.isuserSelect.find((user) => user.id === selectedId);
        }
    },
    extraReducers: (builder) => {

        builder.addCase(LoginUser.pending, (state) => {
            // console.log("Pending" , state);  
            state.isLogin = false
        })

        builder.addCase(LoginUser.fulfilled, (state, action) => {
            // console.log("Pending" , state);  
            // console.log("action Login", action.payload.accessToken);
            // console.log("action User " , action.payload.user.fname);
            
            const token = action.payload.accessToken
            const loginUser = action.payload.user.fname
            // console.log("token " , token);
            if (token) {
                state.isLogin = true;
                localStorage.setItem("tokens", token);
                localStorage.setItem("LoginUser" , loginUser)
            } else {
                state.isLogin = false
            }
        })

        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLogin = false
            state.error = action.error.message
            // state.isLogin = false
            // console.log("action Login", action.payload);
        })

        // Get User
        builder.addCase(getUser.pending, (state) => {
            // console.log("Pending" , state);
            state.loading = true;
            state.error = null;
        })

        builder.addCase(getUser.fulfilled, (state, action) => {
            // console.log("fulfilled" , state);
            // console.log("action " , action.payload);
            state.loading = false;
            state.users = action.payload
        })


        builder.addCase(getUser.rejected, (state, action) => {
            // console.log("rejected" , state);
            state.loading = false;
            state.error = action.error.message; // Use action.error instead of action.payload
        });

        // add User

        builder.addCase(addUser.pending, (state) => {
            state.loading = true;

        })

        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            console.log("add Store ", action.payload);
            state.users?.push(action.payload)
        })

        builder.addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })

        // Delete User

        builder.addCase(deleteUserData.pending, (state) => {
            state.loading = true
        })

        builder.addCase(deleteUserData.fulfilled, (state, action) => {
            state.loading = false;
            // console.log("id", action.payload);


            if (state.users) {
                state.users = state.users.filter(user => user.id !== action.payload);
            } else {
                state.users = null;
            }

        })

        builder.addCase(deleteUserData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.erroor.message
        })


        // Selected User

        // builder.addCase(selectedUser)

        // Edit User

        builder.addCase(editUser.pending , (state) =>{
            state.loading = true;
        })
        builder.addCase(editUser.fulfilled , (state , action) => {
            state.loading = false;
            // console.log("Edit store " , action.payload);
            // state.users = action.payload
            console.log("action.payload.id " , action.payload.id);
            

            // state.users = state.users?.map(elm =>elm.id === action.payload.id ? action.payload : elm)
            state.users = (state.users ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);
        })
        builder.addCase(editUser.rejected , (state , action) =>{
            state.loading = false;
            state.error = action.error.message
        })

    }
})

export const { setSelectedUser, seteditSelectUser } = userDetails.actions;
export default userDetails.reducer   // createSlice name
