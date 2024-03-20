import { Badge, Col } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeader2,
} from "./style";
import {
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>EaToLive</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            placeholder="Tìm món ngon nào!"
            textButton="Tìm Kiếm"
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
          <WrapperHeaderAccount>
            <div>
              <div>
                <UserAddOutlined style={{ fontSize: "20px" }} />
                <WrapperTextHeader2>Đăng nhập/Đăng ký</WrapperTextHeader2>
                <div>
                  <UserOutlined style={{ fontSize: "20px" }} />
                  <WrapperTextHeader2>Tài Khoản</WrapperTextHeader2>
                </div>
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={8}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextHeader2>Giỏ Hàng</WrapperTextHeader2>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
