
// import React, { useEffect, useState } from 'react'
// import { Col, Row, Layout, Button, Form, Input, Alert } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../Store/hooks';
// import { LoginUser } from '../../Slice/UserSlice';
// const { Header, Content, Footer } = Layout;
// const Login = () => {

//     const [isLoginUser, setIsLoginUser] = useState(false);

//     const navigate = useNavigate()
//     const dispatch = useAppDispatch()

//     const isLoginData = useAppSelector((state) => state)
//     const successLogin = isLoginData.userData.isLogin
//     // console.log("isLoginData" , isLoginData.userData.isLogin);
//     const token = localStorage.getItem("tokens")

//     const onFinish = async (values: any) => {   
//         try{
//             const addList = {
//                 ...values, expiresIn: 126000000
//             }
//             await  dispatch(LoginUser(addList))
//             if(successLogin){
//                 setIsLoginUser(true);
                
//             }else{
//                 setIsLoginUser(false);
//             }
//         }catch(error){
//             console.error('Login error:', error);
//             setIsLoginUser(false);
//         }
        
//     }

//     const onFinishFailed = (errorInfo: any) => {
//         console.log('Failed:', errorInfo);
//         setIsLoginUser(false)
//     };
//     useEffect(() => {
//         if (isLoginUser) {
//             navigate('/dashboard'); 
//         } else {
//             navigate('/'); 
//         }
//     }, [isLoginUser]);

//     return (
//         <div>
//             <Row gutter={16}>
//                 <Col className="gutter-row" span={8}></Col>
//                 <Col className="gutter-row" span={8}>
//                     <Layout>
//                         <Header style={{ color: "white" }}>Login</Header>
//                         <div className='mt-3'>

//                             <Form
//                                 initialValues={{ remember: true }}
//                                 onFinish={onFinish}
//                                 onFinishFailed={onFinishFailed}
//                                 autoComplete="off"

//                             >
//                                 <Form.Item
//                                     label="Username"
//                                     name="username"
//                                     rules={[{ required: true, message: 'Please input your username!' }]}
//                                 >
//                                     <Input />
//                                 </Form.Item>

//                                 <Form.Item
//                                     label="Password"
//                                     name="password"
//                                     rules={[{ required: true, message: 'Please input your password!' }]}
//                                 >
//                                     <Input.Password />
//                                 </Form.Item>

//                                 <Form.Item>
//                                     <Button type="primary" htmlType="submit">
//                                         Login
//                                     </Button>
//                                 </Form.Item>
//                             </Form>


//                         </div>
//                     </Layout>
//                 </Col>
//                 <Col className="gutter-row" span={8}></Col>
//             </Row>
//         </div>
//     )
// }

// export default Login


// =================

// // ----------------------------------------------------  First time Login Done ---------------

// import React, { useEffect, useState } from 'react'
// import { Col, Row, Layout, Button, Form, Input, Alert } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../Store/hooks';
// import { LoginUser } from '../../Slice/UserSlice';
// const { Header, Content, Footer } = Layout;
// const Login = () => {

//     const [isLoginUser, setIsLoginUser] = useState(false);

//     const navigate = useNavigate()
//     const dispatch = useAppDispatch()

//     const isLoginData = useAppSelector((state) => state.userData.isLogin)
//     // const successLogin = isLoginData.userData.isLogin
//     // console.log("isLoginData" , isLoginData.userData.isLogin);
//     // console.log("successLogin " , successLogin);
    
//     const token = localStorage.getItem("tokens")

//     const onFinish = async (values: any) => {   
//         try{
//             const addList = {
//                 ...values, expiresIn: 126000000
//             }
//             await  dispatch(LoginUser(addList)).then((res) => {
//                 if(res.payload.accessToken){
//                     navigate('/dashboard'); 
//                     setIsLoginUser(true);
                    
//                 }else{
//                     setIsLoginUser(false);
//                 }
//             })
//         }catch(error){
//             console.error('Login error:', error);
//             setIsLoginUser(false);
//         }
        
//     }

//     const onFinishFailed = (errorInfo: any) => {
//         console.log('Failed:', errorInfo);
//         setIsLoginUser(false)
//     };
//     // useEffect(() => {
//     //     if (isLoginUser) {
//     //         navigate('/dashboard'); 
//     //     } else {
//     //         navigate('/'); 
//     //     }
//     // }, [isLoginUser]);

//     return (
//         <div>
//             <Row gutter={16}>
//                 <Col className="gutter-row" span={8}></Col>
//                 <Col className="gutter-row" span={8}>
//                     <Layout>
//                         <Header style={{ color: "white" }}>Login</Header>
//                         <div className='mt-3'>

//                             <Form
//                                 initialValues={{ remember: true }}
//                                 onFinish={onFinish}
//                                 onFinishFailed={onFinishFailed}
//                                 autoComplete="off"

//                             >
//                                 <Form.Item
//                                     label="Username"
//                                     name="username"
//                                     rules={[{ required: true, message: 'Please input your username!' }]}
//                                 >
//                                     <Input />
//                                 </Form.Item>

//                                 <Form.Item
//                                     label="Password"
//                                     name="password"
//                                     rules={[{ required: true, message: 'Please input your password!' }]}
//                                 >
//                                     <Input.Password />
//                                 </Form.Item>

//                                 <Form.Item>
//                                     <Button type="primary" htmlType="submit">
//                                         Login
//                                     </Button>
//                                 </Form.Item>
//                             </Form>


//                         </div>
//                     </Layout>
//                 </Col>
//                 <Col className="gutter-row" span={8}></Col>
//             </Row>
//         </div>
//     )
// }

// export default Login


// --------------------------------------------



// ----------------------------------------------------  First time Login Done ---------------

import React, { useEffect, useState } from 'react'
import { Col, Row, Layout, Button, Form, Input, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { LoginUser } from '../../Slice/UserSlice';
const { Header, Content, Footer } = Layout;
const Login = () => {

    const [isLoginUser, setIsLoginUser] = useState(false);

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const isLoginData = useAppSelector((state) => state.userData.isLogin)
    // const successLogin = isLoginData.userData.isLogin
    // console.log("isLoginData" , isLoginData.userData.isLogin);
    // console.log("successLogin " , successLogin);
    
    const token = localStorage.getItem("tokens")

    const onFinish = async (values: any) => {   
        try{
            const addList = {
                ...values, expiresIn: 126000000
            }
            await  dispatch(LoginUser(addList)).then((res) => {
                if(res.payload.accessToken){
                    navigate('/dashboard'); 
                    setIsLoginUser(true);
                    
                }else{
                    setIsLoginUser(false);
                }
            })
        }catch(error){
            console.error('Login error:', error);
            setIsLoginUser(false);
        }
        
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        setIsLoginUser(false)
    };
    // useEffect(() => {
    //     if (isLoginUser) {
    //         navigate('/dashboard'); 
    //     } else {
    //         navigate('/'); 
    //     }
    // }, [isLoginUser]);

    return (
        <div>
            <Row gutter={16}>
                <Col className="gutter-row" span={8}></Col>
                <Col className="gutter-row" span={8}>
                    <Layout>
                        <Header style={{ color: "white" }}>Login</Header>
                        <div className='mt-3'>

                            <Form
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"

                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Login
                                    </Button>
                                </Form.Item>
                            </Form>


                        </div>
                    </Layout>
                </Col>
                <Col className="gutter-row" span={8}></Col>
            </Row>
        </div>
    )
}

export default Login

