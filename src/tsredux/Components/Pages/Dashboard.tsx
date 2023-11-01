

import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Link, Outlet, useNavigate } from 'react-router-dom';

// import { Content } from 'antd/es/layout/layout';
// import { useStore } from '../../Hooks/useStore';

const { Sider } = Layout;

const Dashboard = () => {
  // const location = useLocation();

  const [isLoginUser , setIsLoginUser] = useState(localStorage.getItem('tokens'))

  const navigate = useNavigate()

  // const { indexStore: { store } } = useStore();
  function isLoggedIn() {
    return !!localStorage.getItem('tokens');     // ! -> convert boolean value
  }

  const logOutUser = () => {
    localStorage.removeItem("tokens")
    localStorage.removeItem("LoginUser")
    navigate("/")
  }

  // if user not login redirect login page
  if (!isLoggedIn()) {
    navigate('/');
    return null;
  }

  return (
    <Layout style={{ minHeight: '100vh', display: "flex" }}>
      <Sider theme="dark" style={{ width: '10%' }}>
        {/* <span style={{color : "white"}}>Login User : <UserOutlined /> {store.loginUserA}</span> */}
        <span style={{ color: "white" }} className='d-flex align-item-center mt-2'>Login User : <span className="material-symbols-outlined ms-2 me-2">
          account_circle
        </span>{localStorage.getItem("LoginUser")}</span>
        <Menu theme="dark" mode="inline" >

          <Menu.Item key="/dashboard">
            <Link to="/dashboard/user" style={{ textDecoration: 'none' }}>
              <UserOutlined style={{ fontSize: '22px' }} className="me-2" />Users
            </Link>
          </Menu.Item>
          <Menu.Item key="/attractions">
            <Link to="/dashboard/attractions" style={{ textDecoration: 'none' }}>
              <TeamOutlined style={{ fontSize: '22px' }} className="me-2" />Attractions/Places
            </Link>
          </Menu.Item>
          <Menu.Item key="/logout">
            <button
              onClick={() => logOutUser()}
              type='button'
              className='btn btn-primary'>logOut</button>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ width: "80%" }}>
        <Outlet />
      </Layout>

    </Layout>
  );
};

export default Dashboard;
