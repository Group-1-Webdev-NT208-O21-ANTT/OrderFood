import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import best from "../../assets/images/best.png";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 240 }}
      cover={
        <img
          alt="Pho"
          src="https://th.bing.com/th/id/OIP.Z02VfhlzGxymC4qdxvUpigHaF7?w=240&h=192&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7"
        />
      }
    >
      <img
        alt="BestSeller"
        src={best}
        style={{
          width: "50px",
          height: "50px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <StyleNameProduct>Phở nhà làm nhà ăn</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>5.0 </span>
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <WrapperStyleTextSell> | Cách đây 3.0 km</WrapperStyleTextSell>
        </span>
      </WrapperReportText>
      <WrapperPriceText>
        40.000 VNĐ <WrapperDiscountText>-60%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
    
  );
};

export default CardComponent;
