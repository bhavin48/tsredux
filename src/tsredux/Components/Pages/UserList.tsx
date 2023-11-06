
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { addUser, deleteUserData, editUser, getUser } from "../../Slice/UserSlice";
import React, { useEffect, useState } from 'react'
import '../../../Style.css'
import { Button, Layout, Spin, Modal, Space, Form, Input, Upload, UploadFile, Card } from 'antd';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { UploadOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';

const { Header } = Layout;

// Submit button Enable and Diable ------------------

const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    const values = Form.useWatch([], form);

    React.useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
            () => {
                setSubmittable(true);
            },
            () => {
                setSubmittable(false);
            },
        );
    }, [values, form]);

    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            Submit
        </Button>
    );
};


const UserList = () => {
    // create Dispatch method and useSelect method
    const dispatch = useAppDispatch()
    // const user = useAppSelector(state => state.userData)
    // console.log("user List " , user);  users

    const [form] = Form.useForm();
    const formRef = React.useRef(form);

    // const [userDataList, setUserDataList] = useState<IUser[] | null>([])
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const [imageUrl, setImageUrl] = useState('')

    // field Enable and doable
    const [passwordShow, setPasswordShow] = useState(false);
    const [modelTile, setModelTitle] = useState('')
    const [editBtn, setEditBtn] = useState(false)
    const [getId, setGetId] = useState('')

    const user = useAppSelector(state => state.userData)
    const dataList = user.users
    const loadingD = user.loading
    // console.log("user ", user);

    console.log("user List ", dataList);
    // console.log("Loading " , user.loading);

    // loading State

    // console.log("file Upload " , uploadFile);

    const [loader, setLoader] = useState(loadingD);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [userDetilasD, setUserDetailsD] = useState({
        fname: '',
        lname: '',
        username: '',
        avatar: ''
    })
    // const [submittable, setSubmittable] = useState(false);
    // console.log("loader state ", loader);

    const columnDefs: any = [
        { headerName: "ID", field: "id", filter: "agTextColumnFilter", width: 100 },
        {
            headerName: "AVATAR", field: "avatar",
            cellRenderer: (imageUrl: any) => {
                const imgSrc = imageUrl.value
                // console.log("imageUrl",imgSrc);
                return (
                    <img src={imgSrc} alt='' style={{ width: "40%" }} className='mt-2' />
                )

            },
            width: 170,
        },
        { headerName: "FIRST NAME", field: "fname", filter: "agTextColumnFilter" },
        { headerName: "LAST NAME", field: "lname", filter: "agTextColumnFilter" },
        { headerName: "USER NAME", field: "username", filter: "agTextColumnFilter" },
        {
            headerName: "ACTION",
            width: 250,
            cellRenderer: (param: any) => {
                // console.log("param Edit " , param);
                return (
                    <div>
                        <Button
                            onClick={() => editData(param.data)}
                            type='primary'
                            className='me-2'
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => deleteUser(param.data)}
                            type="primary"
                            danger
                        >Delete</Button>
                        <Button
                            onClick={() => detailsUser(param.data)}
                            type="primary"
                            className=" ms-2 me-2"
                        >Detials</Button>
                    </div>
                )
            },
            suppressSorting: true,
            suppressMenu: true          // hide menu option
        }
    ]

    const defaultColDef = {
        sortable: true,
        filter: true,      // floatingFilter: true,
        floatingFilter: true,
    }

    const gridOptions = {
        rowHeight: 70,
        pagination: true,
        paginationPageSize: 5,
    }

    // Add Model

    const showAddDataModal = () => {
        // formRef.current.resetFields();        
        form.resetFields();
        setPasswordShow(true)
        setEditBtn(false)
        setModelTitle("Add User")
        showAddModal()
    }

    const showAddModal = () => {
        setIsAddModalOpen(true);
    };

    const onFinish = (values: any) => {
        //   console.log("values " , values);

        let imgUrl = imageUrl === '' ? "https://www.melivecode.com/users/1.png" : imageUrl
        const newVal = {
            ...values,
            avatar: imgUrl
        }
        // const newVal = { ...values, uploadFile}
        // console.log("success Add ", newVal);
        dispatch(addUser(newVal))
        formRef.current.resetFields(); // Reset form fields
        // setUploadFile('');
        handleAddCancel();

    }


    const onFinishFailed = (errorInfo: any) => {
        console.log("add field", errorInfo);
    }

    const handleAddCancel = () => {
        form.setFieldsValue({});
        formRef.current.resetFields();
        setIsAddModalOpen(false);
        setFileList([]);
        setImageUrl('');
    }


    // delete User 

    const deleteUser = (data: any) => {
        // console.log("delete User " , data.id);       
        dispatch(deleteUserData(data.id))
    }

    // Edit User

    const editData = (record: any) => {
        // console.log("Edit Data record ", record.id);

        const newRecord = {
            ...record,
            password: "abc123"
        }
        setGetId(record.id)
        setPasswordShow(false)
        setModelTitle("Edit User")
        form.setFieldsValue(newRecord);
        setEditBtn(true)
        showAddModal();
    }

    const onEditFinish = (values: any) => {
        const newValue = {
            ...values, id: getId
        }
        console.log("edit success ", newValue);
        dispatch(editUser(newValue))
        handleAddCancel();
    }

    const onEditFinishFaild = (errorInfo: any) => {
        console.log("Edit Error ", errorInfo);
    }

    const detailsUser = (values: any) => {
        // console.log("User Details : ", values);
        setUserDetailsD(values)
        setIsDetailsModalOpen(true)
    }

    const handleDetailsCancel = () => {
        setIsDetailsModalOpen(false)
    }

    useEffect(() => {
        dispatch(getUser())
        // setUserDataList(dataList)
    }, [loader, dispatch])

    // Upload File

    const handleUpload = (info: any) => {

        let fileList = [...info.fileList];

        // Limit to one file
        fileList = fileList.slice(-1);

        // Filter files by size (1 MB or less)
        fileList = fileList.filter(file => file.size / 1024 / 1024 <= 1);
        fileList.forEach(function (file, index) {
            let reader = new FileReader();
            reader.onload = (e: any) => {
                file.base64 = e.target.result;
                // console.log("file.base64 " , file.base64);
                // console.log("result " , e.target.result);
                setImageUrl(file.base64)
            };
            reader.readAsDataURL(info.file.originFileObj);
            // console.log("info.file.originFileObj " , info.file.originFileObj);
        });
        // this.setState({ fileList: fileList });
        setFileList(fileList)
    };



    return (
        <div>
            <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>USER</Header>

            <div className='ms-2 mt-2' style={{ float: "left" }}>
                <Button type="primary" onClick={showAddDataModal}
                >
                    <span className="material-symbols-outlined">
                        person_add
                    </span> Add
                </Button>
                <div>
                    {/* <img src={imageUrl} alt="image not show" /> */}
                </div>
            </div>
            <div className="ag-theme-alpine mt-5 ms-2" style={{ textAlign: "left" }}>
                <Spin spinning={loader} tip="Loading...">
                    <AgGridReact rowData={dataList}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        gridOptions={gridOptions}
                        domLayout="autoHeight"

                    ></AgGridReact>
                </Spin>
            </div>

            <Space>
                <div className=''>
                    <Modal
                        title={modelTile}
                        centered={true}
                        visible={isAddModalOpen}

                        onCancel={handleAddCancel}

                        footer={null}
                    >
                        <Form
                            form={form}
                            name="validateOnly"
                            onFinish={editBtn ? onEditFinish : onFinish}
                            onFinishFailed={editBtn ? onEditFinishFaild : onFinishFailed}
                            autoComplete="off"
                            style={{ overflow: "scroll", height: "300px" }}
                        >
                            <Form.Item
                                label="First Name"
                                name="fname"
                                rules={[{ required: true, message: 'Please input your First Name!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Last Name"
                                name="lname"
                                rules={[{ required: true, message: 'Please input your Last Name!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="User Name"
                                name="username"
                                rules={[{ required: true, message: 'Please input your User Name!' }]}
                            >
                                <Input />
                            </Form.Item>

                            {
                                passwordShow && passwordShow ? (<Form.Item
                                    label="Passwrod"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input />
                                </Form.Item>) : (
                                    <Form.Item
                                        style={{ display: "none" }}
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input disabled />
                                    </Form.Item>
                                )

                            }
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your Email!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Upload
                                listType="picture-card"
                                multiple={true}
                                fileList={fileList}
                                onChange={handleUpload}
                            >
                                {fileList.length === 0 && (
                                    <div>
                                        <UploadOutlined />
                                        <div style={{ marginTop: 8 }}>Upload</div>
                                    </div>
                                )}
                            </Upload>
                            <Form.Item>
                                {
                                    editBtn ?
                                        (
                                            <Button type="primary" htmlType="submit">
                                                Save
                                            </Button>
                                        )
                                        : (
                                            <SubmitButton form={form} />
                                        )
                                }
                                <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
                                    Cancel
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>

                    {/* Details */}

                    <Modal
                        title="User Details"
                        open={isDetailsModalOpen}
                        onCancel={handleDetailsCancel}
                        footer={null}
                    >

                        <Card
                            hoverable
                            style={{ width: "50%" }}
                            cover={<img src={userDetilasD.avatar} alt="" />}
                            className="ms-5"
                        >
                            <Card.Meta
                                title={userDetilasD.fname}
                                description={userDetilasD.lname}
                            />
                        </Card>

                    </Modal>
                </div>
            </Space >
        </div >
    )
}
export default UserList