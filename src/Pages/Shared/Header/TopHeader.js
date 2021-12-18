// import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

const TopHeader = () => {
  // const { current } = this.state;
  return (
    // <Layout className="layout" theme="light">
    //   <Header>
    //     <div className="logo" />
    //     <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
    //       <Link to="/">
    //         <Menu.Item>Home</Menu.Item>
    //       </Link>
    //       <Link to="/about">
    //         <Menu.Item>About</Menu.Item>
    //       </Link>
    //       <Menu.Item>Home</Menu.Item>
    //       <Menu.Item>Home</Menu.Item>
    //       <Menu.Item>Home</Menu.Item>
    //       <Menu.Item>Home</Menu.Item>
    //       <Menu.Item>Home</Menu.Item>
    //     </Menu>
    //   </Header>
    // </Layout>
    <Menu
      // onClick={this.handleClick}
      // selectedKeys={[current]}
      mode="horizontal"
    >
      <NavLink to="/">
        {" "}
        <Menu.Item >Home</Menu.Item>
    </NavLink>
      <NavLink to="/about">
        {" "}
        <Menu.Item >About</Menu.Item>
      </NavLink>
     

      {/* <SubMenu
        key="SubMenu"
        // icon={<SettingOutlined />}
        title="Navigation Three - Submenu"
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu> */}
    </Menu>
  );
};

export default TopHeader;
