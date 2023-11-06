
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Store/hooks'
import { addAttration, deleteAttraction, getAttraction, paginationApi, setEditAttrData, setPagNoPer, setPgNo, setSearchTxt, updateAttraction } from '../../Slice/AttractionsSlice'
import { Button, Layout, Spin, Modal, Form, Input } from 'antd';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';

const { Header } = Layout
const Attractions = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState('')
  const [editBtn, setEditBtn] = useState(false)
  // const [prPag, setPrPage] = useState('')
  // const [pagN, setPagN] = useState('')

  const dispatch = useAppDispatch()

  const [form] = Form.useForm()
  const formRef = React.useRef(form)


  const attrationList = useAppSelector(state => state.attractionsData)
  const attrationsDataList = attrationList.attractions
  const isLoading = attrationList.loading
  const filterPg = attrationList.filterPage

  const editSelectId: { id?: number } = useAppSelector(state => state.attractionsData.isEditSelect) || {};

  const columnDefs: any = [
    {
      headerName: "id", field: "id", filter: "agTextColumnFilter", width: 100
    },
    {
      headerName: "coverimage",
      cellRenderer: (param: any) => {
        const imgUrl = param.data?.coverimage
        //  console.log("imgUrl " , imgUrl);
        return (
          <img src={imgUrl} alt='' style={{ width: "30%" }} />
        )
      }
    },

    { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
    {
      headerName: "latitude", field: "latitude", filter: "agTextColumnFilter", width: 130
    },
    {
      headerName: "longitude", field: "longitude", filter: "agTextColumnFilter", width: 130
    },
    {
      headerName: "Details",
      field: "detail",
      width: 350,
      filter: "agTextColumnFilter",
      wrapText: true,
    },

    {
      headerName: "Action",
      cellRenderer: (param: any) => {
        return (
          <>
            <Button
              type='primary'
              onClick={() => editAttri(param.data)}
              className='me-2'
            >Edit</Button>
            <Button
              type='primary'
              onClick={() => deleteAttri(param.data)}
              danger
            >Delete</Button>
          </>
        )
      },
      suppressSorting: true,
      suppressMenu: true,
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
  };

  // Add Attration

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.setFieldsValue({})
    formRef.current.resetFields()
    // form.setFieldsValue({});
    setIsModalOpen(false);
  };

  const showAddModal = () => {
    setModelTitle("Add Attractions")
    setEditBtn(false)
    showModal();
  }

  const onAddFinish = (values: any) => {
    // console.log("success Add ", values);

    let latitudenum = parseFloat(values.latitude);
    // console.log(`${latitudenum}` + " is of type :" + typeof latitudenum);

    let longitudenum = parseFloat(values.longitude);
    const newValue = {
      ...values,
      latitude: latitudenum,
      longitude: longitudenum,
      coverimage: "https://www.melivecode.com/attractions/1.jpg"
    }

    console.log("success Add ", newValue);

    dispatch(addAttration(newValue))
    handleCancel()
  }

  const onAddFinishFailed = (errorInfo: any) => {
    console.log("Add Error ", errorInfo);

  }

  const editAttri = (values: any) => {
    // console.log("Edit Data ", values);


    setModelTitle("Edit Attractions")
    form.setFieldsValue(values)
    setEditBtn(true)

    dispatch(setEditAttrData(values))
    showModal()
  }

  const onEditFinish = (values: any) => {
    // console.log("Edit success ", values);

    let latitudenum = parseFloat(values.latitude);
    let longitudenum = parseFloat(values.longitude);

    const newVal = {
      ...values,
      latitude: latitudenum,
      longitude: longitudenum,
      id: editSelectId.id
    }
    // console.log("newVal " , newVal);

    dispatch(updateAttraction(newVal))
    handleCancel()
  }

  const onEditFinishFaild = (errorInfo: any) => {
    console.log("Edit Error ", errorInfo);
  }

  // Delete Attraction

  const deleteAttri = (values: any) => {
    // console.log("delete " , values.id);
    dispatch(deleteAttraction(values.id))
  }

  // Sorting and Filterting using Api

  const pageNoInput = (e: any) => { 
    dispatch(setPagNoPer(e.target.value));
    // setPerPage(e.target.value)
    dispatch(paginationApi());
  };
  const pageInput = (e: any) => {
    dispatch(setPgNo(e.target.value));
    dispatch(paginationApi());
  };

    const nameSearch = (e: any) => {
    dispatch(setSearchTxt(e.target.value));
    dispatch(paginationApi());
  };

  useEffect(() => {
    dispatch(getAttraction())

  }, [dispatch])

  return (
    <div>

      <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>Attractions/Places</Header>

      <div className='mt-2 ms-2' >
        <Button
          onClick={showAddModal}
          type="primary"
          style={{ float: "left" }}
        >
          Add
        </Button>
        <div className='mt-2'>
          <Input
            onChange={pageNoInput}
            placeholder='Enter Per Page No'
            className='mt-2 me-2'
            style={{ width: "20%" }}
          />

          <Input
           onChange={pageInput}
            placeholder='Enter Page No'
            className='mt-2 me-2'
            style={{ width: "20%" }}
          />

          <Input
           onChange={nameSearch}
            placeholder='Enter Name'
            className='mt-2'
            style={{ width: "20%" }}
          />
        </div>
      </div>

      <div className="ag-theme-alpine rowHoverColor mt-3 ms-2" style={{ textAlign: "left" }}>
        <Spin spinning={isLoading} tip="Loading...">
      
          <AgGridReact
            rowData={filterPg.length === 0 ? attrationsDataList : filterPg}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            domLayout="autoHeight"
          ></AgGridReact>

        </Spin>
      </div>

      <Modal
        title={modelTitle}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          onFinish={editBtn ? onEditFinish : onAddFinish}
          onFinishFailed={editBtn ? onEditFinishFaild : onAddFinishFailed}
          autoComplete="off"
        // layout="vertical"
        // style={{ overflow: "scroll", height: "300px" }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Latitude"
            name="latitude"
            rules={[{ required: true, message: 'Please input your Latitude!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Longitude"
            name="longitude"
            rules={[{ required: true, message: 'Please input your longitude!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Details"
            name="detail"
            rules={[{ required: true, message: 'Please input your Details!' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item>

            {
              editBtn && editBtn ? (
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              )
                :
                (
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                )
            }

            <Button type="primary" onClick={handleCancel} danger className='ms-2'>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Attractions


