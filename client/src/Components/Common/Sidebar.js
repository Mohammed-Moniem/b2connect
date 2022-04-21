import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DollarOutlined,
  PushpinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
import Routers from "./../../routes/index";

const { Sider } = Layout;
const { Item } = Menu;

const items = [
  {
    label: "IP Details",
    key: "1",
    icon: <PushpinOutlined />,
    path: "/",
  },
  {
    label: "Crypto & Fiat API",
    key: "2",
    icon: <DollarOutlined />,
    path: "crypto-and-fiat",
  },
  {
    label: "Movies API",
    key: "3",
    icon: <YoutubeOutlined />,
    path: "movies",
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout
      style={{
        height: "100%",
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        >
          {items.map((item) => (
            <Item key={item.key}>
              <Link to={item.path}>
                {item.icon} {collapsed ? "" : item.label}
              </Link>
            </Item>
          ))}
        </Menu>
      </Sider>
      <Content className="content">
        <Routers />
      </Content>
    </Layout>
  );
};

export default Sidebar;
