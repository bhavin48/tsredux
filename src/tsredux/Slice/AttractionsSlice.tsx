
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../Store/store';


export interface IAttractions {
    loading: boolean;
    error: string | undefined;
    attractions: any[];
    isEditSelect: {};
    filterAttraction: any[];
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
            // console.log("addAttratioApi ", await addAttratioApi.data.attraction);

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

