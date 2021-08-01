import React from 'react'
import { Layout as LayoutAnt, Menu } from 'antd';

const { Header, Content, Footer } = LayoutAnt;

const Layout = ({children}) => {
    return (
        <LayoutAnt>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Orders</Menu.Item>
            </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
        </LayoutAnt>
    )
}

export default Layout
