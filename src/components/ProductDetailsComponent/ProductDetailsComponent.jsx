import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/pho2.jpg";
import imageProductSmall from "../../assets/images/pho1.jpg";
import {
  WrapperAddressProduct,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", backgroundColor: "#fff", borderRadius:'4px' }}>
      <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight:'8px'}}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imagesmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imagesmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imagesmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imagesmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imagesmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imagesmall"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: '10px'}}>
        <WrapperStyleNameProduct>
          Phở nhà làm, vị ngon nhà làm, ăn xong muốn ăn nữa
        </WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <WrapperStyleTextSell> | Cách đây 3.0km </WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>40.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến</span>
          <span className="address"> Q.2, P.Bình Trưng Đông, Hồ Chí Minh</span>
          <span className="change-address"> Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: "10px 0 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <InputNumber
              min={1}
              max={10}
              defaultValue={3}
              onChange={onChange}
            />
            <button>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            textbutton={"Chọn mua"}
            styleTextButton={{
              color: "#fff",
            }}
          ></ButtonComponent>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13, 92, 182)",
              borderRadius: "4px",
            }}
            textbutton={"Mua trả sau"}
            styleTextButton={{ color: "rgb(13, 92, 182)", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
