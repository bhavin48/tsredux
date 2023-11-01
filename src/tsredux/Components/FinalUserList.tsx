
// ------------------------------- User List Done Add,Update , delete ------------



// import { useAppDispatch, useAppSelector } from "../../Store/hooks";
// import { IUser, addUser, deleteUserData, editUser, getUser, setSelectedUser, seteditSelectUser } from "../../Slice/UserSlice";
// import React, { useEffect, useState } from 'react'
// import { Button, Layout, Spin, Modal, Space, Form, Input, Upload, UploadProps, message } from 'antd';
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

// const { Header } = Layout;
// const UserList = () => {
//     // create Dispatch method and useSelect method
//     const dispatch = useAppDispatch()
//     // const user = useAppSelector(state => state.userData)
//     // console.log("user List " , user);  users

//     const [form] = Form.useForm();
//     const formRef = React.useRef(form);

//     const [userDataList, setUserDataList] = useState<IUser[] | null>([])
//     const [uploadFile, setUploadFile] = useState('')

//     const [fieldData, setFieldData] = useState([])
//     // console.log("fieldData ", fieldData);


//     // field Enable and doable
//     const [passwordShow, setPasswordShow] = useState(false);
//     const [modelTile, setModelTitle] = useState('')
//     const [editBtn, setEditBtn] = useState(false)
//     const [getId , setGetId] = useState('')

//     const user = useAppSelector(state => state.userData)
//     const dataList = user.users
//     const loadingD = user.loading
//     // console.log("user ", user);

//     console.log("user List ", dataList);
//     // console.log("Loading " , user.loading);

//     // loading State

//     // console.log("file Upload " , uploadFile);

//     const [loader, setLoader] = useState(loadingD);
//     const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     // console.log("loader state ", loader);


//     // const [form] = Form.useForm();
//     // const formRef = React.useRef(form);


//     const columnDefs: any = [
//         { headerName: "ID", field: "id", filter: "agTextColumnFilter", width: 100 },
//         {
//             headerName: "AVATAR", field: "avatar",
//             cellRenderer: (imageUrl: any) => {
//                 const imgSrc = imageUrl.value
//                 // console.log("imageUrl",imgSrc);
//                 return (
//                     <img src={imgSrc} alt='' style={{ width: "40%" }} className='mt-2' />
//                 )

//             },
//             width: 170,
//         },
//         { headerName: "FIRST NAME", field: "fname", filter: "agTextColumnFilter" },
//         { headerName: "LAST NAME", field: "lname", filter: "agTextColumnFilter" },
//         { headerName: "USER NAME", field: "username", filter: "agTextColumnFilter" },
//         {
//             headerName: "ACTION",
//             cellRenderer: (param: any) => {
//                 // console.log("param Edit " , param);
//                 return (
//                     <div>
//                         <Button
//                             onClick={() => editData(param.data)}
//                             type='primary'
//                             className='me-2'
//                         >Edit</Button>
//                         <Button
//                             onClick={() => deleteUser(param.data)}
//                             type="primary"

//                             danger>Delete</Button>
//                     </div>
//                 )
//             },
//             suppressSorting: true,
//             suppressMenu: true          // hide menu option
//         }
//     ]

//     const defaultColDef = {
//         sortable: true,
//         filter: true,
//         floatingFilter: true
//     }

//     const gridOptions = {
//         rowHeight: 70,
//         pagination: true,
//         paginationPageSize: 4,
//     }

//     // Add Model

//     const showAddDataModal = () => {
//         // formRef.current.resetFields();        
//         form.resetFields();
//         setPasswordShow(true)
//         setEditBtn(false)
//         setModelTitle("Add User")
//         showAddModal()
//     }

//     const showAddModal = () => {
//         // formRef.current.resetFields(); 
//         // form.setFieldsValue({});
//         setIsAddModalOpen(true);
//     };

//     const onFinish = (values: any) => {
//         const newVal = { ...values, avatar: "https://www.melivecode.com/users/1.png" }
//         // const newVal = { ...values, uploadFile}
//         console.log("success Add ", newVal);
//         dispatch(addUser(newVal))
//         formRef.current.resetFields(); // Reset form fields
//         setUploadFile('');
//         handleAddCancel();

//         // if (editBtn) {
//         //     const newVal = { 
//         //         ...values, 
//         //         password : "acdsf@123",
//         //         avatar: "https://www.melivecode.com/users/1.png"
//         //     }

//         //     console.log("success Edit ", newVal);
//         //     // dispatch(addUser(newVal))
//         //     // formRef.current.resetFields(); // Reset form fields
//         //     form.resetFields();
//         //     // setUploadFile('');
//         //     handleAddCancel();
//         // } else {
//         //     const newVal = { ...values, avatar: "https://www.melivecode.com/users/1.png"}
//         //     // const newVal = { ...values, uploadFile}
//         //     console.log("success Add ", newVal);
//         //     // dispatch(setSelectedUser(newVal))
//         //     dispatch(addUser(newVal))
//         //     // formRef.current.resetFields(); // Reset form fields
//         //     // setUploadFile('');
//         //     form.resetFields(); 
//         //     handleAddCancel();
//         // }

//     }


//     const onFinishFailed = (errorInfo: any) => {
//         console.log("add field", errorInfo);
//     }

//     const handleAddCancel = () => {
//         form.setFieldsValue({});
//         formRef.current.resetFields();
//         setIsAddModalOpen(false);
//         setIsEditModalOpen(false)
//         // formRef.current.resetFields();
//         // form.setFieldsValue({});
//         setUploadFile('');
//     }


//     // delete User 

//     const deleteUser = (data: any) => {
//         // console.log("delete User " , data.id);       
//         dispatch(deleteUserData(data.id))
//     }
//     // Edit User

//     const editData = (record: any) => {
//         // console.log("Edit Data record ", record.id);

//         const newRecord = {
//             ...record ,
//              password : "abc123"
//         }
//         setGetId(record.id)
//         // console.log("Edit Data record ", newRecord);
//         setPasswordShow(false)
//         setModelTitle("Edit User")
//         // dispatch(seteditSelectUser(record))
//         form.setFieldsValue(newRecord); 
//         setEditBtn(true)
//         setFieldData(newRecord)
//         // formRef.current.resetFields();
//         showAddModal();
//     }

//     const onEditFinish = (values : any) => {

//         const newValue  = {
//             ...values , id : getId
//         }
//         console.log("edit success " , newValue);
        
//         dispatch(editUser(newValue))
        
//         handleAddCancel();
//     }

//     const onEditFinishFaild = (errorInfo : any) =>{
//         console.log("Edit Error " , errorInfo);
        
//     }

//     useEffect(() => {
//         dispatch(getUser())
//         setUserDataList(dataList)
//     }, [loader])


//     return (
//         <div>
//             <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>USER</Header>

//             <div className='ms-2 mt-2' style={{ float: "left" }}>
//                 <Button type="primary" onClick={showAddDataModal}
//                 >
//                     <span className="material-symbols-outlined">
//                         person_add
//                     </span> Add
//                 </Button>
//             </div>
//             <div className="ag-theme-alpine mt-5 ms-2" style={{ width: "100%", textAlign: "left" }}>
//                 <Spin spinning={loader} tip="Loading...">
//                     <AgGridReact rowData={dataList}
//                         columnDefs={columnDefs}
//                         defaultColDef={defaultColDef}
//                         gridOptions={gridOptions}
//                         domLayout="autoHeight"

//                     ></AgGridReact>
//                 </Spin>
//             </div>

//             <Space>
//                 <div className=''>
//                     <Modal
//                         title={modelTile}
//                         centered={true}
//                         visible={isAddModalOpen}
//                         //  open={isAddModalOpen}
//                         onCancel={handleAddCancel}
//                         // onOk={handleAddOk}
//                         //  onCancel={handleAddCancel}
//                         footer={null}
//                     >
//                         <Form
//                             form={form}
//                             name="add Form"
//                             // initialValues={fieldData}
//                             // onFinish={onFinish}
//                             onFinish={editBtn ? onEditFinish : onFinish}
//                             onFinishFailed={editBtn ? onEditFinishFaild : onFinishFailed}
//                             autoComplete="off"
//                             // layout="vertical"
//                             style={{ overflow: "scroll", height: "300px" }}
//                             // {
//                             //     passwordShow  ? (initialValues={fieldData})
//                             //     : null
//                             // }

//                             // initialValues={fieldData}
//                             // initialValues={editBtn ? fieldData : undefined}
//                             // initialValues={editBtn ? fieldData : undefined}

//                         >

//                             <Form.Item
//                                 label="First Name"
//                                 name="fname"
//                                 rules={[{ required: true, message: 'Please input your First Name!' }]}
//                             >
//                                 <Input />
//                             </Form.Item>

//                             <Form.Item
//                                 label="Last Name"
//                                 name="lname"
//                                 rules={[{ required: true, message: 'Please input your Last Name!' }]}
//                             >
//                                 <Input />
//                             </Form.Item>
//                             <Form.Item
//                                 label="User Name"
//                                 name="username"
//                                 rules={[{ required: true, message: 'Please input your User Name!' }]}
//                             >
//                                 <Input />
//                             </Form.Item>

//                             {
//                                 passwordShow && passwordShow ? (<Form.Item
//                                     label="Passwrod"
//                                     name="password"
//                                     rules={[{ required: true, message: 'Please input your password!' }]}
//                                 >
//                                     <Input />
//                                 </Form.Item>) : (
//                                     <Form.Item
//                                         style={{ display: "none" }}
//                                         name="password"
//                                         rules={[{ required: true, message: 'Please input your password!' }]}
//                                     >
//                                         <Input disabled />
//                                     </Form.Item>
//                                 )

//                             }

//                             {/* <Form.Item
//                                 label="Passwrod"
//                                 name="password"
//                                 rules={[{ required: true, message: 'Please input your password!' }]}
//                             >
//                                 <Input />
//                             </Form.Item> */}
//                             <Form.Item
//                                 label="Email"
//                                 name="email"
//                                 rules={[{ required: true, message: 'Please input your Email!' }]}
//                             >
//                                 <Input />
//                             </Form.Item>
//                             {/* 
//                             <Form.Item label="Upload">
//                                 <Upload {...props}>
//                                     <Button icon={<UploadOutlined />}>Upload png only (Single File)</Button>
//                                 </Upload>
//                             </Form.Item> */}

//                             <Form.Item>
//                                 {
//                                     editBtn ?
//                                         (<Button type="primary" htmlType="submit">
//                                             Save
//                                         </Button>)
//                                         : (<Button type="primary" htmlType="submit">
//                                             Submit
//                                         </Button>)
//                                 }

//                                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                                     Cancel
//                                 </Button>
//                             </Form.Item>
//                         </Form>
//                     </Modal>
//                 </div>
//             </Space >
//         </div >
//     )
// }

// export default UserList






// -------------------------------- UserList Done Add,Update , delete ----------


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







// ===========================================================

// ------------------------------------------ Upload File Done Submit button enable and diable Done ----------------


// import { useAppDispatch, useAppSelector } from "../../Store/hooks";
// import { IUser, addUser, deleteUserData, editUser, getUser, setSelectedUser, seteditSelectUser } from "../../Slice/UserSlice";
// import React, { useEffect, useState } from 'react'
// import { Button, Layout, Spin, Modal, Space, Form, Input, Upload, UploadFile, UploadProps, message } from 'antd';
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
// import type { FormInstance } from 'antd';

// const { Header } = Layout;


// // Submit button Enable and Diable ------------------


// const SubmitButton = ({ form }: { form: FormInstance }) => {
//     const [submittable, setSubmittable] = React.useState(false);

//     // Watch all values
//     const values = Form.useWatch([], form);

//     React.useEffect(() => {
//         form.validateFields({ validateOnly: true }).then(
//             () => {
//                 setSubmittable(true);
//             },
//             () => {
//                 setSubmittable(false);
//             },
//         );
//     }, [values]);

//     return (
//         <Button type="primary" htmlType="submit" disabled={!submittable}>
//             Submit
//         </Button>
//     );
// };


// const UserList = () => {
//     // create Dispatch method and useSelect method
//     const dispatch = useAppDispatch()
//     // const user = useAppSelector(state => state.userData)
//     // console.log("user List " , user);  users

//     const [form] = Form.useForm();
//     const formRef = React.useRef(form);

//     const [userDataList, setUserDataList] = useState<IUser[] | null>([])
//     const [fileList, setFileList] = useState<UploadFile[]>([])
//     const [imageUrl, setImageUrl] = useState('')

//     // const [fieldData, setFieldData] = useState([])
//     // console.log("fieldData ", fieldData);


//     // field Enable and doable
//     const [passwordShow, setPasswordShow] = useState(false);
//     const [modelTile, setModelTitle] = useState('')
//     const [editBtn, setEditBtn] = useState(false)
//     const [getId, setGetId] = useState('')

//     const user = useAppSelector(state => state.userData)
//     const dataList = user.users
//     const loadingD = user.loading
//     // console.log("user ", user);

//     console.log("user List ", dataList);
//     // console.log("Loading " , user.loading);

//     // loading State

//     // console.log("file Upload " , uploadFile);

//     const [loader, setLoader] = useState(loadingD);
//     const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     const [submittable, setSubmittable] = useState(false);
//     // console.log("loader state ", loader);

//     // Watch all values 
//     const values = Form.useWatch([], form);
//     // const [form] = Form.useForm();
//     // const formRef = React.useRef(form);


//     const columnDefs: any = [
//         { headerName: "ID", field: "id", filter: "agTextColumnFilter", width: 100 },
//         {
//             headerName: "AVATAR", field: "avatar",
//             cellRenderer: (imageUrl: any) => {
//                 const imgSrc = imageUrl.value
//                 // console.log("imageUrl",imgSrc);
//                 return (
//                     <img src={imgSrc} alt='' style={{ width: "40%" }} className='mt-2' />
//                 )

//             },
//             width: 170,
//         },
//         { headerName: "FIRST NAME", field: "fname", filter: "agTextColumnFilter" },
//         { headerName: "LAST NAME", field: "lname", filter: "agTextColumnFilter" },
//         { headerName: "USER NAME", field: "username", filter: "agTextColumnFilter" },
//         {
//             headerName: "ACTION",
//             cellRenderer: (param: any) => {
//                 // console.log("param Edit " , param);
//                 return (
//                     <div>
//                         <Button
//                             onClick={() => editData(param.data)}
//                             type='primary'
//                             className='me-2'
//                         >Edit</Button>
//                         <Button
//                             onClick={() => deleteUser(param.data)}
//                             type="primary"

//                             danger>Delete</Button>
//                     </div>
//                 )
//             },
//             suppressSorting: true,
//             suppressMenu: true          // hide menu option
//         }
//     ]

//     const defaultColDef = {
//         sortable: true,
//         filter: true,
//         floatingFilter: true
//     }

//     const gridOptions = {
//         rowHeight: 70,
//         pagination: true,
//         paginationPageSize: 4,
//     }

//     // Add Model

//     const showAddDataModal = () => {
//         // formRef.current.resetFields();        
//         form.resetFields();
//         setPasswordShow(true)
//         setEditBtn(false)
//         setModelTitle("Add User")
//         showAddModal()
//     }

//     const showAddModal = () => {
//         // formRef.current.resetFields(); 
//         // form.setFieldsValue({});
//         setIsAddModalOpen(true);
//     };

//     const onFinish = (values: any) => {
//         //   console.log("values " , values);

//         let imgUrl = imageUrl == '' ? "https://www.melivecode.com/users/1.png" : imageUrl
//         // console.log("imgUrl " , imgUrl);

//         // const newVal = { 
//         //     ...values ,
//         //      avatar: "https://www.melivecode.com/users/1.png" 
//         // }

//         const newVal = {
//             ...values,
//             avatar: imgUrl
//         }
//         // const newVal = { ...values, uploadFile}
//         // console.log("success Add ", newVal);
//         dispatch(addUser(newVal))
//         formRef.current.resetFields(); // Reset form fields
//         // setUploadFile('');
//         handleAddCancel();

//     }


//     const onFinishFailed = (errorInfo: any) => {
//         console.log("add field", errorInfo);
//     }

//     const handleAddCancel = () => {
//         form.setFieldsValue({});
//         formRef.current.resetFields();
//         setIsAddModalOpen(false);
//         setIsEditModalOpen(false)
        
//         setFileList([]);
//         setImageUrl('');
//         // formRef.current.resetFields();
//         // form.setFieldsValue({});
//         // setUploadFile('');
//     }


//     // delete User 

//     const deleteUser = (data: any) => {
//         // console.log("delete User " , data.id);       
//         dispatch(deleteUserData(data.id))
//     }

//     // Edit User

//     const editData = (record: any) => {
//         // console.log("Edit Data record ", record.id);

//         const newRecord = {
//             ...record,
//             password: "abc123"
//         }
//         setGetId(record.id)
//         // console.log("Edit Data record ", newRecord);
//         setPasswordShow(false)
//         setModelTitle("Edit User")
//         // dispatch(seteditSelectUser(record))
//         form.setFieldsValue(newRecord);
//         setEditBtn(true)
//         // setFieldData(newRecord)
//         // formRef.current.resetFields();
//         showAddModal();
//     }

//     const onEditFinish = (values: any) => {

//         const newValue = {
//             ...values, id: getId
//         }
//         console.log("edit success ", newValue);

//         dispatch(editUser(newValue))

//         handleAddCancel();
//     }

//     const onEditFinishFaild = (errorInfo: any) => {
//         console.log("Edit Error ", errorInfo);

//     }

//     useEffect(() => {
//         dispatch(getUser())
//         setUserDataList(dataList)
//     }, [loader])

//     // Upload File

//     // console.log("imageUrl " , imageUrl);

//     // if(imageUrl == ''){
//     //     console.log("imageUrl if");
//     //     console.log("imageUrl if " , "https://www.melivecode.com/users/1.png");

//     // }
//     // else{
//     //     console.log("imageUrl else");
//     //      console.log("imageUrl else " , imageUrl);

//     // }

//     // const MAX_FILE_SIZE_MB = 1; // Maximum file size in megabytes

//     // const beforeUpload = (file : any) => {
//     //   const isFileTooLarge = file.size / 1024 / 1024 > MAX_FILE_SIZE_MB;
  
//     //   if (isFileTooLarge) {
//     //     // message.error(`File size must be less than ${MAX_FILE_SIZE_MB} MB.`);
//     //     console.log(`File size must be less than ${MAX_FILE_SIZE_MB} MB.`);      
//     //   }
//     //   return !isFileTooLarge;
//     // };

//     const handleUpload = (info: any) => {

//         let fileList = [...info.fileList];
        
//         // Limit to one file
//         fileList = fileList.slice(-1);

//         // Filter files by size (1 MB or less)
//         fileList = fileList.filter(file => file.size / 1024 / 1024 <= 1);
//         fileList.forEach(function (file, index) {
//             let reader = new FileReader();
//             reader.onload = (e: any) => {
//                 file.base64 = e.target.result;
//                 // console.log("file.base64 " , file.base64);
//                 // console.log("result " , e.target.result);

//                 setImageUrl(file.base64)

//             };
//             reader.readAsDataURL(info.file.originFileObj);
//             // console.log("info.file.originFileObj " , info.file.originFileObj);
//             //   showAddModal();

//         });
//         // this.setState({ fileList: fileList });
//         setFileList(fileList)
//     };



//     return (
//         <div>
//             <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>USER</Header>

//             <div className='ms-2 mt-2' style={{ float: "left" }}>
//                 <Button type="primary" onClick={showAddDataModal}
//                 >
//                     <span className="material-symbols-outlined">
//                         person_add
//                     </span> Add
//                 </Button>
//                 <div>
//                     {/* <img src={imageUrl} alt="image not show" /> */}
//                 </div>
//             </div>
//             <div className="ag-theme-alpine mt-5 ms-2" style={{ width: "100%", textAlign: "left" }}>
//                 <Spin spinning={loader} tip="Loading...">
//                     <AgGridReact rowData={dataList}
//                         columnDefs={columnDefs}
//                         defaultColDef={defaultColDef}
//                         gridOptions={gridOptions}
//                         domLayout="autoHeight"

//                     ></AgGridReact>
//                 </Spin>
//             </div>

//             <Space>
//                 <div className=''>
//                     <Modal
//                         title={modelTile}
//                         centered={true}
//                         visible={isAddModalOpen}

//                         onCancel={handleAddCancel}

//                         footer={null}
//                     >
//                         <Form
//                             form={form}
//                             name="validateOnly"
//                             // initialValues={fieldData}
//                             // onFinish={onFinish}
//                             onFinish={editBtn ? onEditFinish : onFinish}
//                             onFinishFailed={editBtn ? onEditFinishFaild : onFinishFailed}
//                             autoComplete="off"
//                             // layout="vertical"
//                             style={{ overflow: "scroll", height: "300px" }}
//                         // {
//                         //     passwordShow  ? (initialValues={fieldData})
//                         //     : null
//                         // }

//                         // initialValues={fieldData}
//                         // initialValues={editBtn ? fieldData : undefined}
//                         // initialValues={editBtn ? fieldData : undefined}

//                         >

//                             <Form.Item
//                                 label="First Name"
//                                 name="fname"
//                                 rules={[{ required: true, message: 'Please input your First Name!' }]}
//                             >
//                                 <Input />
//                             </Form.Item>

//                             <Form.Item
//                                 label="Last Name"
//                                 name="lname"
//                                 rules={[{ required: true, message: 'Please input your Last Name!' }]}
//                             >
//                                 <Input />
//                             </Form.Item>
//                             <Form.Item
//                                 label="User Name"
//                                 name="username"
//                                 rules={[{ required: true, message: 'Please input your User Name!' }]}
//                             >
//                                 <Input />
//                             </Form.Item>

//                             {
//                                 passwordShow && passwordShow ? (<Form.Item
//                                     label="Passwrod"
//                                     name="password"
//                                     rules={[{ required: true, message: 'Please input your password!' }]}
//                                 >
//                                     <Input />
//                                 </Form.Item>) : (
//                                     <Form.Item
//                                         style={{ display: "none" }}
//                                         name="password"
//                                         rules={[{ required: true, message: 'Please input your password!' }]}
//                                     >
//                                         <Input disabled />
//                                     </Form.Item>
//                                 )

//                             }

//                             {/* <Form.Item
//                                 label="Passwrod"
//                                 name="password"
//                                 rules={[{ required: true, message: 'Please input your password!' }]}
//                             >
//                                 <Input />
//                             </Form.Item> */}
//                             <Form.Item
//                                 label="Email"
//                                 name="email"
//                                 rules={[{ required: true, message: 'Please input your Email!' }]}
//                             >
//                                 <Input />
//                             </Form.Item>
//                             <Upload
//                                 listType="picture-card"
//                                 // listType={"text"}
//                                 multiple={true}
//                                 fileList={fileList}
//                                 // beforeUpload={beforeUpload}    // check upload image size
//                                 onChange={handleUpload}
//                             >
//                                 {fileList.length === 0 && (
//                                     <div>
//                                         <UploadOutlined />
//                                         <div style={{ marginTop: 8 }}>Upload</div>
//                                     </div>
//                                 )}
//                             </Upload>

//                             <Form.Item>
//                                 {
//                                     editBtn ?
//                                         (
//                                             <Button type="primary" htmlType="submit">
//                                                 Save
//                                             </Button>
//                                         )
//                                         : (
//                                             <SubmitButton form={form} />
//                                         )
//                                 }

//                                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                                     Cancel
//                                 </Button>
//                             </Form.Item>
//                         </Form>
//                     </Modal>
//                 </div>
//             </Space >
//         </div >
//     )
// }

// export default UserList



// ---------------------------- UserSlice.tsx ---------------------------------

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


