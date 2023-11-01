
// ------------------ Add Done ------------------

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'


// export interface IAttractions {
//     loading: boolean;
//     error: string | undefined;
//     attractions: any[]
// }

// const initialState: IAttractions = {
//     loading: false,
//     error: '',
//     attractions: []
// }


// // create Action get Attration

// export const getAttraction = createAsyncThunk(
//     "getAttraction",
//     async (data, { rejectWithValue }) => {
//         try {
//             const attrationApi = await axios.get("https://www.melivecode.com/api/attractions")
//             // console.log("get attrationApi", attrationApi.data);
//             return attrationApi.data
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Add Attration

// export const addAttration = createAsyncThunk(
//     "addAttration",
//     async(dataAttr : any , {rejectWithValue}) =>{
//         console.log("dataAttr " , dataAttr);

//         const token = localStorage.getItem("tokens")
//         // console.log("token " , token);

//        try{
//            const addAttratioApi = axios.post("https://www.melivecode.com/api/auth/attractions/create" , dataAttr ,{
//              headers : {   
//                 Authorization : `Bearer ${token}`
//              }
//            })

//            console.log("addAttratioApi " , addAttratioApi);

//            return addAttratioApi

//        }catch(error){
//         return rejectWithValue(error)
//        }
//     }
// )

// export const attractionsDetails = createSlice({
//     name: "attractionsDetails",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {

//         // Get Attration
//         builder.addCase(getAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(getAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("get Attration fullfuild "  , action.payload);
//             state.attractions = action.payload

//         })

//         builder.addCase(getAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Add Attration

//         builder.addCase(addAttration.pending , (state) =>{
//             state.loading = false
//         })

//         builder.addCase(addAttration.fulfilled , (state , action) =>{
//             state.loading = false;
//         })

//         builder.addCase(addAttration.rejected , (state , action) =>{
//             state.loading = false;
//             state.error = action.error.message
//         })
//     }
// })

// export default attractionsDetails.reducer



// // ----------------------------------- Done Add , update ,delete ------------


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'


// export interface IAttractions {
//     loading: boolean;
//     error: string | undefined;
//     attractions: any[];
//     isEditSelect: {}
// }

// const initialState: IAttractions = {
//     loading: false,
//     error: '',
//     attractions: [],
//     isEditSelect: {}
// }


// // create Action get Attration

// export const getAttraction = createAsyncThunk(
//     "getAttraction",
//     async (data, { rejectWithValue }) => {
//         try {
//             const attrationApi = await axios.get("https://www.melivecode.com/api/attractions")
//             // console.log("get attrationApi", attrationApi.data);
//             return attrationApi.data
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Add Attration

// export const addAttration = createAsyncThunk(
//     "addAttration",
//     async (dataAttr: any, { rejectWithValue }) => {
//         console.log("dataAttr ", dataAttr);

//         const token = localStorage.getItem("tokens")
//         // console.log("token " , token);

//         try {
//             const addAttratioApi = await axios.post("https://www.melivecode.com/api/auth/attractions/create", dataAttr, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })

//             console.log("addAttratioApi ", await addAttratioApi.data.attraction
//             );

//             return addAttratioApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Delete 

// export const deleteAttraction = createAsyncThunk(
//     "deleteAttraction",
//     async (userId: number, { rejectWithValue }) => {
//         // console.log("slice delete Id " , dataId);

//         try {

//             const token = localStorage.getItem("tokens")
//             await axios.delete("https://www.melivecode.com/api/auth/attractions/delete",
//                 {
//                     data: {
//                         id: userId,
//                     },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 })
//             return userId

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// export const updateAttraction = createAsyncThunk(
//     "updateAttraction",
//     async (updateUSer: any, { rejectWithValue }) => {
//         try {
//             const token = localStorage.getItem("tokens")
//             const updateApi = await axios.put("https://www.melivecode.com/api/auth/attractions/update", updateUSer, {
//                 headers: {
//                     Authorization: `Brearer ${token}`
//                 }
//             })

//             console.log("updateApi", updateApi.data.attraction);


//             return updateApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )
// export const attractionsDetails = createSlice({
//     name: "attractionsDetails",
//     initialState,
//     reducers: {
//         setEditAttrData: (state, action) => {
//             //    console.log("reducers Edit Data " , action.payload);
//             state.isEditSelect = action.payload
//         }
//     },
//     extraReducers: (builder) => {

//         // Get Attration
//         builder.addCase(getAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(getAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("get Attration fullfuild "  , action.payload);
//             state.attractions = action.payload

//         })

//         builder.addCase(getAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Add Attration

//         builder.addCase(addAttration.pending, (state) => {
//             state.loading = false
//         })

//         builder.addCase(addAttration.fulfilled, (state, action) => {
//             state.loading = false;
//             state.attractions = [...state.attractions, action.payload]
//         })

//         builder.addCase(addAttration.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // delete Attraction

//         builder.addCase(deleteAttraction.pending, (state) => {
//             state.loading = true;

//         })

//         builder.addCase(deleteAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("delete Store ", action.payload);

//             state.attractions = state.attractions.filter((eml) => eml.id !== action.payload)

//         })

//         builder.addCase(deleteAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//             console.log("delete Error ", action.error.message);

//         })

//         builder.addCase(updateAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(updateAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("update id ", action);
//             // state.attractions = (state.attractions).map(elm => elm.id === action.payload.id ? action.payload : elm)
//             state.attractions = (state.attractions ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);

//         })

//         builder.addCase(updateAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         })
//     }
// })

// export const { setEditAttrData } = attractionsDetails.actions
// export default attractionsDetails.reducer






// -----------------------------------  ------------


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { RootState } from '../Store/store';


// export interface IAttractions {
//     loading: boolean;
//     error: string | undefined;
//     attractions: any[];
//     isEditSelect: {};
//     filterAttraction: any[];
//     perPag: any;
//     pgNo: any
// }

// const initialState: IAttractions = {
//     loading: false,
//     error: '',
//     attractions: [],
//     isEditSelect: {},
//     filterAttraction: [],
//     perPag: null,
//     pgNo: null
// }


// // create Action get Attration

// export const getAttraction = createAsyncThunk(
//     "getAttraction",
//     async (data, { rejectWithValue }) => {
//         try {
//             const attrationApi = await axios.get("https://www.melivecode.com/api/attractions")
//             // console.log("get attrationApi", attrationApi.data);
//             return attrationApi.data
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Add Attration

// export const addAttration = createAsyncThunk(
//     "addAttration",
//     async (dataAttr: any, { rejectWithValue }) => {
//         console.log("dataAttr ", dataAttr);

//         const token = localStorage.getItem("tokens")
//         // console.log("token " , token);

//         try {
//             const addAttratioApi = await axios.post("https://www.melivecode.com/api/auth/attractions/create", dataAttr, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })

//             console.log("addAttratioApi ", await addAttratioApi.data.attraction
//             );

//             return addAttratioApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Delete 

// export const deleteAttraction = createAsyncThunk(
//     "deleteAttraction",
//     async (userId: number, { rejectWithValue }) => {
//         // console.log("slice delete Id " , dataId);

//         try {

//             const token = localStorage.getItem("tokens")
//             await axios.delete("https://www.melivecode.com/api/auth/attractions/delete",
//                 {
//                     data: {
//                         id: userId,
//                     },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 })
//             return userId

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// export const updateAttraction = createAsyncThunk(
//     "updateAttraction",
//     async (updateUSer: any, { rejectWithValue }) => {
//         try {
//             const token = localStorage.getItem("tokens")
//             const updateApi = await axios.put("https://www.melivecode.com/api/auth/attractions/update", updateUSer, {
//                 headers: {
//                     Authorization: `Brearer ${token}`
//                 }
//             })

//             console.log("updateApi", updateApi.data.attraction);


//             return updateApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// // Sorting

// export const perPg = createAsyncThunk(
//     "perPg",
//     async ({ perPageNoU, pageNo }: { perPageNoU: any; pageNo: any }, { rejectWithValue, getState }) => {
//         // const perpgNoApi = axios.get(``)
//         // console.log("perPageNoU " , perPageNoU);
//         // console.log(`perPageNoU is : ${perPageNoU} and pageNo is : ${pageNo}`);

//         const state = getState() as RootState

//         // if (perPageNoU === undefined && pageNo === undefined) {

//         //     return state.attractions;
//         //   }

//         try {

//             if (perPageNoU === undefined && pageNo === undefined) {
//                 // If both perPageNoU and pageNo are undefined, return the full list of attractions
//                 state.attractionsData.filterAttraction = []
//                 return (state: RootState) => state.attractionsData.attractions;
//               }


//             const per_pag = perPageNoU || 10;
//             const pg_no = pageNo || 1
//             console.log(`perPageNoU is : ${per_pag} and pageNo is : ${pg_no}`);

//             const PerPagNoApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pg_no}&per_page=${per_pag}`)

//             console.log("PerPagNoApi ", PerPagNoApi.data.data);

//             return PerPagNoApi.data.data


//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )
// export const attractionsDetails = createSlice({
//     name: "attractionsDetails",
//     initialState,
//     reducers: {
//         setEditAttrData: (state, action) => {
//             //    console.log("reducers Edit Data " , action.payload);
//             state.isEditSelect = action.payload
//         },

//         setPerPagNo: (state, action) => {
//             // console.log("per Page No reducer " , action.payload);
//             state.perPag = action.payload
//         },

//         setPageNo: (state, action) => {
//             state.pgNo = action.payload
//         }
//     },
//     extraReducers: (builder) => {

//         // Get Attration
//         builder.addCase(getAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(getAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("get Attration fullfuild "  , action.payload);
//             state.attractions = action.payload

//         })

//         builder.addCase(getAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Add Attration

//         builder.addCase(addAttration.pending, (state) => {
//             state.loading = false
//         })

//         builder.addCase(addAttration.fulfilled, (state, action) => {
//             state.loading = false;
//             state.attractions = [...state.attractions, action.payload]
//         })

//         builder.addCase(addAttration.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // delete Attraction

//         builder.addCase(deleteAttraction.pending, (state) => {
//             state.loading = true;

//         })

//         builder.addCase(deleteAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("delete Store ", action.payload);

//             state.attractions = state.attractions.filter((eml) => eml.id !== action.payload)

//         })

//         builder.addCase(deleteAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//             console.log("delete Error ", action.error.message);

//         })

//         builder.addCase(updateAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(updateAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("update id ", action);
//             // state.attractions = (state.attractions).map(elm => elm.id === action.payload.id ? action.payload : elm)
//             state.attractions = (state.attractions ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);

//         })

//         builder.addCase(updateAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         })

//         // Sorting

//         builder.addCase(perPg.pending, (state) => {

//         })

//         builder.addCase(perPg.fulfilled, (state, action) => {
//             // state.filterAttraction = action.payload
//             // console.log("per PAge Store " , action.payload);
//             state.filterAttraction = action.payload;
//             // state.attractions = action.payload ? action.payload : state.attractions

//             // state.attractions = state.filterAttraction.length ? action.payload : state.attractions

//             // state.filterAttraction = action.payload;
//             state.attractions = state.filterAttraction ? state.filterAttraction : state.attractions;

//         })
//     }
// })

// export const { setEditAttrData, setPerPagNo, setPageNo } = attractionsDetails.actions
// export default attractionsDetails.reducer




// --------------------------------------




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { RootState } from '../Store/store';


// export interface IAttractions {
//     loading: boolean;
//     error: string | undefined;
//     attractions: any[];
//     isEditSelect: {};
//     filterAttraction: any[];
//     perPag: any;
//     pgNo: any
// }

// const initialState: IAttractions = {
//     loading: false,
//     error: '',
//     attractions: [],
//     isEditSelect: {},
//     filterAttraction: [],
//     perPag: '',
//     pgNo: ''
// }


// // create Action get Attration

// export const getAttraction = createAsyncThunk(
//     "getAttraction",
//     async (data, { rejectWithValue }) => {
//         try {
//             const attrationApi = await axios.get("https://www.melivecode.com/api/attractions")
//             // console.log("get attrationApi", attrationApi.data);
//             return attrationApi.data
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Add Attration

// export const addAttration = createAsyncThunk(
//     "addAttration",
//     async (dataAttr: any, { rejectWithValue }) => {
//         console.log("dataAttr ", dataAttr);

//         const token = localStorage.getItem("tokens")
//         // console.log("token " , token);

//         try {
//             const addAttratioApi = await axios.post("https://www.melivecode.com/api/auth/attractions/create", dataAttr, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })

//             console.log("addAttratioApi ", await addAttratioApi.data.attraction
//             );

//             return addAttratioApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Delete 

// export const deleteAttraction = createAsyncThunk(
//     "deleteAttraction",
//     async (userId: number, { rejectWithValue }) => {
//         // console.log("slice delete Id " , dataId);

//         try {

//             const token = localStorage.getItem("tokens")
//             await axios.delete("https://www.melivecode.com/api/auth/attractions/delete",
//                 {
//                     data: {
//                         id: userId,
//                     },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 })
//             return userId

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// export const updateAttraction = createAsyncThunk(
//     "updateAttraction",
//     async (updateUSer: any, { rejectWithValue }) => {
//         try {
//             const token = localStorage.getItem("tokens")
//             const updateApi = await axios.put("https://www.melivecode.com/api/auth/attractions/update", updateUSer, {
//                 headers: {
//                     Authorization: `Brearer ${token}`
//                 }
//             })

//             console.log("updateApi", updateApi.data.attraction);


//             return updateApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// // Sorting

// export const perPg = createAsyncThunk(
//     "perPg",
//     async ({ perPageNoU, pageNo }: { perPageNoU: any; pageNo: any }, { rejectWithValue, getState }) => {
//         // const perpgNoApi = axios.get(``)
//         // console.log("perPageNoU " , perPageNoU);
//         // console.log(`perPageNoU is : ${perPageNoU} and pageNo is : ${pageNo}`);

//         const state = getState() as RootState
//         try {
//             const attrLenth = state.attractionsData.attractions.length
//             // let per_pag
//             // if (perPageNoU.length != 0) {
//             //     per_pag = perPageNoU
//             //     console.log("per_pag if", per_pag);
//             // } else {
//             //     per_pag = attrLenth
//             //     console.log("per_pag  ", attrLenth);
//             // }


//             //    console.log("attrLenth " , attrLenth);

//             //     const per_pag = perPageNoU || attrLenth;
//             // console.log("per_pag ", per_pag);
//             const per_pag = perPageNoU || 20
//             const pg_no = pageNo || 1
//             console.log(`perPageNoU is : ${per_pag} and pageNo is : ${pg_no}`);

//             const PerPagNoApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pg_no}&per_page=${per_pag}`)

//             console.log("PerPagNoApi ", PerPagNoApi.data.data);

//             if (PerPagNoApi === undefined) {
//                 return state.attractionsData.attractions
//             }

//             return PerPagNoApi.data.data


//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )
// export const attractionsDetails = createSlice({
//     name: "attractionsDetails",
//     initialState,
//     reducers: {
//         setEditAttrData: (state, action) => {
//             //    console.log("reducers Edit Data " , action.payload);
//             state.isEditSelect = action.payload
//         },

//         setPerPagNo: (state, action) => {
//             // console.log("per Page No reducer " , action.payload);
//             state.perPag = action.payload
//         },

//         setPageNo: (state, action) => {
//             state.pgNo = action.payload
//         }
//     },
//     extraReducers: (builder) => {

//         // Get Attration
//         builder.addCase(getAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(getAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("get Attration fullfuild "  , action.payload);
//             state.attractions = action.payload
//             state.filterAttraction = [null]

//         })

//         builder.addCase(getAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Add Attration

//         builder.addCase(addAttration.pending, (state) => {
//             state.loading = false
//         })

//         builder.addCase(addAttration.fulfilled, (state, action) => {
//             state.loading = false;
//             state.attractions = [...state.attractions, action.payload]
//         })

//         builder.addCase(addAttration.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // delete Attraction

//         builder.addCase(deleteAttraction.pending, (state) => {
//             state.loading = true;

//         })

//         builder.addCase(deleteAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("delete Store ", action.payload);

//             state.attractions = state.attractions.filter((eml) => eml.id !== action.payload)

//         })

//         builder.addCase(deleteAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//             console.log("delete Error ", action.error.message);

//         })

//         builder.addCase(updateAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(updateAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("update id ", action);
//             // state.attractions = (state.attractions).map(elm => elm.id === action.payload.id ? action.payload : elm)
//             state.attractions = (state.attractions ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);

//         })

//         builder.addCase(updateAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         })

//         // Sorting

//         builder.addCase(perPg.pending, (state) => {

//         })

//         builder.addCase(perPg.fulfilled, (state, action) => {
//             // state.filterAttraction = action.payload
//             // console.log("per PAge Store " , action.payload);
//             // state.filterAttraction = action.payload;
//             // state.attractions = action.payload ? action.payload : state.attractions

//             // state.attractions = state.filterAttraction.length ? action.payload : state.attractions

//             state.filterAttraction = action.payload;
//             // state.attractions = state.filterAttraction ? state.filterAttraction : state.attractions;
//             // state.filterAttraction = state.filterAttraction == null ? state.attractions : state.filterAttraction;
//             state.attractions = state.filterAttraction == null ? action.payload : state.attractions
//         })
//     }
// })

// export const { setEditAttrData, setPerPagNo, setPageNo } = attractionsDetails.actions
// export default attractionsDetails.reducer


// ------------------------------------  New Record ----------------


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { RootState } from '../Store/store';


// export interface IAttractions {
//     loading: boolean;
//     error: string | undefined;
//     attractions: any[];
//     isEditSelect: {};
//     filterAttraction: any[];
//     // perPag: any;
//     // pgNo: any;
//     filterPage: any[];
//     filterTxt: any[];
//     pgNo: number | null;
//     pagNoPer: number | null;
//     searchTxt: string;
// }

// const initialState: IAttractions = {
//     loading: false,
//     error: '',
//     attractions: [],
//     isEditSelect: {},
//     filterAttraction: [],
//     filterPage : [],
//     filterTxt : [],
//     pgNo : null,
//     pagNoPer : null,
//     searchTxt : ''
// }


// // create Action get Attration

// export const getAttraction = createAsyncThunk(
//     "getAttraction",
//     async (data, { rejectWithValue }) => {
//         try {
//             const attrationApi = await axios.get("https://www.melivecode.com/api/attractions")
//             // console.log("get attrationApi", attrationApi.data);
//             return attrationApi.data
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Add Attration

// export const addAttration = createAsyncThunk(
//     "addAttration",
//     async (dataAttr: any, { rejectWithValue }) => {
//         console.log("dataAttr ", dataAttr);

//         const token = localStorage.getItem("tokens")
//         // console.log("token " , token);

//         try {
//             const addAttratioApi = await axios.post("https://www.melivecode.com/api/auth/attractions/create", dataAttr, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })

//             console.log("addAttratioApi ", await addAttratioApi.data.attraction
//             );

//             return addAttratioApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Delete 

// export const deleteAttraction = createAsyncThunk(
//     "deleteAttraction",
//     async (userId: number, { rejectWithValue }) => {
//         // console.log("slice delete Id " , dataId);

//         try {

//             const token = localStorage.getItem("tokens")
//             await axios.delete("https://www.melivecode.com/api/auth/attractions/delete",
//                 {
//                     data: {
//                         id: userId,
//                     },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 })
//             return userId

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// export const updateAttraction = createAsyncThunk(
//     "updateAttraction",
//     async (updateUSer: any, { rejectWithValue }) => {
//         try {
//             const token = localStorage.getItem("tokens")
//             const updateApi = await axios.put("https://www.melivecode.com/api/auth/attractions/update", updateUSer, {
//                 headers: {
//                     Authorization: `Brearer ${token}`
//                 }
//             })

//             console.log("updateApi", updateApi.data.attraction);


//             return updateApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// // Sorting

// // export const perPg = createAsyncThunk(
// //     "perPg",
// //     async ({ perPageNoU, pageNo }: { perPageNoU: any; pageNo: any }, { rejectWithValue, getState }) => {


// //         const state = getState() as RootState

// //         try {

// //             if (perPageNoU === undefined && pageNo === undefined) {
// //                 // If both perPageNoU and pageNo are undefined, return the full list of attractions
// //                 state.attractionsData.filterAttraction = []
// //                 return (state: RootState) => state.attractionsData.attractions;
// //               }

// //             const per_pag = perPageNoU | state.attractionsData.attractions.length;
// //             const pg_no = pageNo || 1
// //             console.log(`perPageNoU is : ${per_pag} and pageNo is : ${pg_no}`);

// //             const PerPagNoApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pg_no}&per_page=${per_pag}`)

// //             console.log("PerPagNoApi ", PerPagNoApi.data.data);

// //             return PerPagNoApi.data.data


// //         } catch (error) {
// //             return rejectWithValue(error)
// //         }
// //     }
// // )


// export const paginationApi = createAsyncThunk(
//     'paginationApi',
//     async (state: RootState, { rejectWithValue }) => {
//       const { pgNo, pagNoPer, searchTxt } = state.attractionsData;
//       if (pgNo && pagNoPer) {
//         const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${pagNoPer}&sort_column=1`);
//         return pgApi.data.data;
//       } else if (pgNo) {
//         const perPage = 10;
//         const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${perPage}&sort_column=1`);
//         return pgApi.data.data;
//       } else if (pagNoPer) {
//         const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=1&per_page=${pagNoPer}&sort_column=1`);
//         return pgApi.data.data;
//       } else if (searchTxt) {
//         const txtApi = await axios.get(`https://www.melivecode.com/api/attractions?search=${searchTxt}`);
//         return txtApi.data;
//       }
//       return [];
//     }
//   );


// export const attractionsDetails = createSlice({
//     name: "attractionsDetails",
//     initialState,
//     reducers: {
//         setEditAttrData: (state, action) => {
//             //    console.log("reducers Edit Data " , action.payload);
//             state.isEditSelect = action.payload
//         },

//         setPgNo: (state, action) => {
//             state.pgNo = action.payload;
//           },
//           setPagNoPer: (state, action) => {
//             state.pagNoPer = action.payload;
//           },
//           setSearchTxt: (state, action) => {
//             state.searchTxt = action.payload;
//           },
//     },
//     extraReducers: (builder) => {

//         // Get Attration
//         builder.addCase(getAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(getAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("get Attration fullfuild "  , action.payload);
//             state.attractions = action.payload

//         })

//         builder.addCase(getAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Add Attration

//         builder.addCase(addAttration.pending, (state) => {
//             state.loading = false
//         })

//         builder.addCase(addAttration.fulfilled, (state, action) => {
//             state.loading = false;
//             state.attractions = [...state.attractions, action.payload]
//         })

//         builder.addCase(addAttration.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // delete Attraction

//         builder.addCase(deleteAttraction.pending, (state) => {
//             state.loading = true;

//         })

//         builder.addCase(deleteAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("delete Store ", action.payload);

//             state.attractions = state.attractions.filter((eml) => eml.id !== action.payload)

//         })

//         builder.addCase(deleteAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//             console.log("delete Error ", action.error.message);

//         })

//         builder.addCase(updateAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(updateAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("update id ", action);
//             // state.attractions = (state.attractions).map(elm => elm.id === action.payload.id ? action.payload : elm)
//             state.attractions = (state.attractions ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);

//         })

//         builder.addCase(updateAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         })

//         // Sorting

//         // builder.addCase(perPg.pending, (state) => {

//         // })

//         // builder.addCase(perPg.fulfilled, (state, action) => {

//         //     if (action.payload === undefined) {
//         //         state.attractions = state.attractions;
//         //       } else {
//         //         state.filterAttraction = action.payload;
//         //         state.attractions = action.payload;
//         //       }
//         // })

//         builder.addCase(paginationApi.fulfilled, (state, action) => {
//             state.filterPage = action.payload;
//           });


//     }
// })

// export const { setEditAttrData, setPgNo, setPagNoPer, setSearchTxt } = attractionsDetails.actions;
// export default attractionsDetails.reducer




// -------------------------   Done Pagination -----------------


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { RootState } from '../Store/store';

// export interface IAttractions {
//   loading: boolean;
//   error: string | undefined;
//   attractions: any[];
//   isEditSelect: {};
//   filterAttraction: any[];
//   pgNo: number | null;
//   pagNoPer: number | null;
//   searchTxt: string;
//   filterPage: any[];
// }

// const initialState: IAttractions = {
//   loading: false,
//   error: '',
//   attractions: [],
//   isEditSelect: {},
//   filterAttraction: [],
//   pgNo: null,
//   pagNoPer: null,
//   searchTxt: '',
//   filterPage: [],
// };

// export const getAttraction = createAsyncThunk(
//   'getAttraction',
//   async (data, { rejectWithValue }) => {
//     try {
//       const attractionApi = await axios.get('https://www.melivecode.com/api/attractions');
//       return attractionApi.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const addAttraction = createAsyncThunk(
//   'addAttraction',
//   async (dataAttr: any, { rejectWithValue }) => {
//     const token = localStorage.getItem('tokens');
//     try {
//       const addAttractionApi = await axios.post(
//         'https://www.melivecode.com/api/auth/attractions/create',
//         dataAttr,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       return addAttractionApi.data.attraction;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const deleteAttraction = createAsyncThunk(
//   'deleteAttraction',
//   async (userId: number, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem('tokens');
//       await axios.delete('https://www.melivecode.com/api/auth/attractions/delete', {
//         data: {
//           id: userId,
//         },
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return userId;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );


// export const updateAttraction = createAsyncThunk(
//     "updateAttraction",
//     async (updateUSer: any, { rejectWithValue }) => {
//         try {
//             const token = localStorage.getItem("tokens")
//             const updateApi = await axios.put("https://www.melivecode.com/api/auth/attractions/update", updateUSer, {
//                 headers: {
//                     Authorization: `Brearer ${token}`
//                 }
//             })

//             console.log("updateApi", updateApi.data.attraction);


//             return updateApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// export const paginationApi = createAsyncThunk(
//   'paginationApi',
//   async (data , { rejectWithValue , getState }) => {
//     const state = getState() as RootState
//     const { pgNo, pagNoPer, searchTxt } = state.attractionsData;
//     if (pgNo && pagNoPer) {
//       const pgApi = await axios.get(
//         `https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${pagNoPer}&sort_column=1`
//       );
//       return pgApi.data.data;
//     } else if (pgNo) {
//       const perPage = 10;
//       const pgApi = await axios.get(
//         `https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${perPage}&sort_column=1`
//       );
//       return pgApi.data.data;
//     } else if (pagNoPer) {
//       const pgApi = await axios.get(
//         `https://www.melivecode.com/api/attractions?page=1&per_page=${pagNoPer}&sort_column=1`
//       );
//       return pgApi.data.data;
//     } else if (searchTxt) {
//       const txtApi = await axios.get(`https://www.melivecode.com/api/attractions?search=${searchTxt}`);
//       return txtApi.data;
//     }
//     return [];
//   }
// );

// const attractionsDetails = createSlice({
//   name: 'attractionsDetails',
//   initialState,
//   reducers: {
//     setEditAttrData: (state, action) => {
//       state.isEditSelect = action.payload;
//     },
//     setPgNo: (state, action) => {
//       state.pgNo = action.payload;
//     },
//     setPagNoPer: (state, action) => {
//       state.pagNoPer = action.payload;
//     },
//     setSearchTxt: (state, action) => {
//       state.searchTxt = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getAttraction.pending, (state) => {
//       state.loading = true;
//     });

//     builder.addCase(getAttraction.fulfilled, (state, action) => {
//       state.loading = false;
//       state.filterPage = action.payload;
//     });

//     builder.addCase(getAttraction.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     });

//     builder.addCase(addAttraction.pending, (state) => {
//       state.loading = true;
//     });

//     builder.addCase(addAttraction.fulfilled, (state, action) => {
//       state.loading = false;
//       state.filterPage = [...state.filterPage, action.payload];
//     });

//     builder.addCase(addAttraction.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     });

//     builder.addCase(deleteAttraction.pending, (state) => {
//       state.loading = true;
//     });

//     builder.addCase(deleteAttraction.fulfilled, (state, action) => {
//       state.loading = false;
//       state.filterPage = state.filterPage.filter((elm) => elm.id !== action.payload);
//     });

//     builder.addCase(deleteAttraction.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     });

//     builder.addCase(updateAttraction.pending, (state) => {
//       state.loading = true;
//     });

//     builder.addCase(updateAttraction.fulfilled, (state, action) => {
//       state.loading = false;
//       state.filterPage = (state.filterPage ?? []).map((elm) => (elm.id === action.payload.id ? action.payload : elm));
//     });

//     builder.addCase(updateAttraction.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     });

//     builder.addCase(paginationApi.fulfilled, (state, action) => {
//       state.filterPage = action.payload;
//     });
//   },
// });

// export const { setEditAttrData, setPgNo, setPagNoPer, setSearchTxt } = attractionsDetails.actions;
// export default attractionsDetails.reducer;



// ---------------------------


// ================  Done Pagination ============================

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { RootState } from '../Store/store';


// export interface IAttractions {
//     loading: boolean;
//     error: string | undefined;
//     attractions: any[];
//     isEditSelect: {};
//     filterAttraction: any[];
//     // perPag: any;
//     // pgNo: any;
//     filterPage: any[];
//     filterTxt: any[];
//     pgNo: number | null;
//     pagNoPer: number | null;
//     searchTxt: string;
// }

// const initialState: IAttractions = {
//     loading: false,
//     error: '',
//     attractions: [],
//     isEditSelect: {},
//     filterAttraction: [],
//     filterPage : [],
//     filterTxt : [],
//     pgNo : null,
//     pagNoPer : null,
//     searchTxt : ''
// }


// // create Action get Attration

// export const getAttraction = createAsyncThunk(
//     "getAttraction",
//     async (data, { rejectWithValue }) => {
//         try {
//             const attrationApi = await axios.get("https://www.melivecode.com/api/attractions")
//             // console.log("get attrationApi", attrationApi.data);
//             return attrationApi.data
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Add Attration

// export const addAttration = createAsyncThunk(
//     "addAttration",
//     async (dataAttr: any, { rejectWithValue }) => {
//         console.log("dataAttr ", dataAttr);

//         const token = localStorage.getItem("tokens")
//         // console.log("token " , token);

//         try {
//             const addAttratioApi = await axios.post("https://www.melivecode.com/api/auth/attractions/create", dataAttr, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })

//             console.log("addAttratioApi ", await addAttratioApi.data.attraction
//             );

//             return addAttratioApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Delete 

// export const deleteAttraction = createAsyncThunk(
//     "deleteAttraction",
//     async (userId: number, { rejectWithValue }) => {
//         // console.log("slice delete Id " , dataId);

//         try {

//             const token = localStorage.getItem("tokens")
//             await axios.delete("https://www.melivecode.com/api/auth/attractions/delete",
//                 {
//                     data: {
//                         id: userId,
//                     },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 })
//             return userId

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// export const updateAttraction = createAsyncThunk(
//     "updateAttraction",
//     async (updateUSer: any, { rejectWithValue }) => {
//         try {
//             const token = localStorage.getItem("tokens")
//             const updateApi = await axios.put("https://www.melivecode.com/api/auth/attractions/update", updateUSer, {
//                 headers: {
//                     Authorization: `Brearer ${token}`
//                 }
//             })

//             console.log("updateApi", updateApi.data.attraction);


//             return updateApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// // Sorting



// export const paginationApi = createAsyncThunk(
//     'paginationApi',
//     async (data, { rejectWithValue , getState }) => {

//         const state = getState() as RootState
//       const { pgNo, pagNoPer, searchTxt } = state.attractionsData;
//       if (pgNo && pagNoPer) {
//         const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${pagNoPer}&sort_column=1`);
//         return pgApi.data.data;
//       } else if (pgNo) {
//         const perPage = 10;
//         const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${perPage}&sort_column=1`);
//         return pgApi.data.data;
//       } else if (pagNoPer) {
//         const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=1&per_page=${pagNoPer}&sort_column=1`);
//         return pgApi.data.data;
//       } else if (searchTxt) {
//         const txtApi = await axios.get(`https://www.melivecode.com/api/attractions?search=${searchTxt}`);
//         return txtApi.data;
//       }
//       return [];
//     }
//   );


// export const attractionsDetails = createSlice({
//     name: "attractionsDetails",
//     initialState,
//     reducers: {
//         setEditAttrData: (state, action) => {
//             //    console.log("reducers Edit Data " , action.payload);
//             state.isEditSelect = action.payload
//         },

//         setPgNo: (state, action) => {
//             state.pgNo = action.payload;
//           },
//           setPagNoPer: (state, action) => {
//             state.pagNoPer = action.payload;
//           },
//           setSearchTxt: (state, action) => {
//             state.searchTxt = action.payload;
//           },
//     },
//     extraReducers: (builder) => {

//         // Get Attration
//         builder.addCase(getAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(getAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("get Attration fullfuild "  , action.payload);
//             state.attractions = action.payload

//         })

//         builder.addCase(getAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Add Attration

//         builder.addCase(addAttration.pending, (state) => {
//             state.loading = false
//         })

//         builder.addCase(addAttration.fulfilled, (state, action) => {
//             state.loading = false;
//             state.attractions = [...state.attractions, action.payload]
//         })

//         builder.addCase(addAttration.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // delete Attraction

//         builder.addCase(deleteAttraction.pending, (state) => {
//             state.loading = true;

//         })

//         builder.addCase(deleteAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("delete Store ", action.payload);

//             state.attractions = state.attractions.filter((eml) => eml.id !== action.payload)

//         })

//         builder.addCase(deleteAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//             console.log("delete Error ", action.error.message);

//         })

//         builder.addCase(updateAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(updateAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("update id ", action);
//             // state.attractions = (state.attractions).map(elm => elm.id === action.payload.id ? action.payload : elm)
//             state.attractions = (state.attractions ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);

//         })

//         builder.addCase(updateAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         })

//         // Sorting


//         builder.addCase(paginationApi.fulfilled, (state, action) => {
//             state.filterPage = action.payload;
//           });


//     }
// })

// export const { setEditAttrData, setPgNo, setPagNoPer, setSearchTxt } = attractionsDetails.actions;
// export default attractionsDetails.reducer





// ------------------------------------------



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../Store/store';


export interface IAttractions {
    loading: boolean;
    error: string | undefined;
    attractions: any[];
    isEditSelect: {};
    filterAttraction: any[];
    // perPag: any;
    // pgNo: any;
    filterPage: any[];
    filterTxt: any[];
    pgNo: number | null;
    pagNoPer: number | null;
    searchTxt: string;
}

const initialState: IAttractions = {
    loading: false,
    error: '',
    attractions: [],
    isEditSelect: {},
    filterAttraction: [],
    filterPage : [],
    filterTxt : [],
    pgNo : null,
    pagNoPer : null,
    searchTxt : ''
}


// create Action get Attration

export const getAttraction = createAsyncThunk(
    "getAttraction",
    async (data, { rejectWithValue }) => {
        try {
            const attrationApi = await axios.get("https://www.melivecode.com/api/attractions")
            // console.log("get attrationApi", attrationApi.data);
            return attrationApi.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// create Add Attration

export const addAttration = createAsyncThunk(
    "addAttration",
    async (dataAttr: any, { rejectWithValue }) => {
        console.log("dataAttr ", dataAttr);

        const token = localStorage.getItem("tokens")
        // console.log("token " , token);

        try {
            const addAttratioApi = await axios.post("https://www.melivecode.com/api/auth/attractions/create", dataAttr, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log("addAttratioApi ", await addAttratioApi.data.attraction
            );

            return addAttratioApi.data.attraction
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// create Action Delete 

export const deleteAttraction = createAsyncThunk(
    "deleteAttraction",
    async (userId: number, { rejectWithValue }) => {
        // console.log("slice delete Id " , dataId);

        try {

            const token = localStorage.getItem("tokens")
            await axios.delete("https://www.melivecode.com/api/auth/attractions/delete",
                {
                    data: {
                        id: userId,
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
            return userId

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const updateAttraction = createAsyncThunk(
    "updateAttraction",
    async (updateUSer: any, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("tokens")
            const updateApi = await axios.put("https://www.melivecode.com/api/auth/attractions/update", updateUSer, {
                headers: {
                    Authorization: `Brearer ${token}`
                }
            })

            console.log("updateApi", updateApi.data.attraction);


            return updateApi.data.attraction
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


// Sorting



export const paginationApi = createAsyncThunk(
    'paginationApi',
    async (data, { rejectWithValue , getState }) => {

        const state = getState() as RootState
      const { pgNo, pagNoPer, searchTxt } = state.attractionsData;
      if (pgNo && pagNoPer) {
        const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${pagNoPer}&sort_column=1`);
        return pgApi.data.data;
      } else if (pgNo) {
        const perPage = 10;
        const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${perPage}&sort_column=1`);
        return pgApi.data.data;
      } else if (pagNoPer) {
        const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=1&per_page=${pagNoPer}&sort_column=1`);
        return pgApi.data.data;
      } else if (searchTxt) {
        const txtApi = await axios.get(`https://www.melivecode.com/api/attractions?search=${searchTxt}`);
        return txtApi.data;
      }
      return [];
    }
  );


export const attractionsDetails = createSlice({
    name: "attractionsDetails",
    initialState,
    reducers: {
        setEditAttrData: (state, action) => {
            //    console.log("reducers Edit Data " , action.payload);
            state.isEditSelect = action.payload
        },

        setPgNo: (state, action) => {
            state.pgNo = action.payload;
          },
          setPagNoPer: (state, action) => {
            state.pagNoPer = action.payload;
          },
          setSearchTxt: (state, action) => {
            state.searchTxt = action.payload;
          },
    },
    extraReducers: (builder) => {

        // Get Attration
        builder.addCase(getAttraction.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(getAttraction.fulfilled, (state, action) => {
            state.loading = false;
            // console.log("get Attration fullfuild "  , action.payload);
            state.attractions = action.payload

        })

        builder.addCase(getAttraction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })

        // Add Attration

        builder.addCase(addAttration.pending, (state) => {
            state.loading = false
        })

        builder.addCase(addAttration.fulfilled, (state, action) => {
            state.loading = false;
            state.attractions = [...state.attractions, action.payload]
        })

        builder.addCase(addAttration.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })

        // delete Attraction

        builder.addCase(deleteAttraction.pending, (state) => {
            state.loading = true;

        })

        builder.addCase(deleteAttraction.fulfilled, (state, action) => {
            state.loading = false;
            // console.log("delete Store ", action.payload);

            state.attractions = state.attractions.filter((eml) => eml.id !== action.payload)

        })

        builder.addCase(deleteAttraction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
            console.log("delete Error ", action.error.message);

        })

        builder.addCase(updateAttraction.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(updateAttraction.fulfilled, (state, action) => {
            state.loading = false;
            // console.log("update id ", action);
            // state.attractions = (state.attractions).map(elm => elm.id === action.payload.id ? action.payload : elm)
            state.attractions = (state.attractions ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);

        })

        builder.addCase(updateAttraction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        // Sorting
        builder.addCase(paginationApi.fulfilled, (state, action) => {
            state.filterPage = action.payload;
          });
    }
})

export const { setEditAttrData, setPgNo, setPagNoPer, setSearchTxt } = attractionsDetails.actions;
export default attractionsDetails.reducer

