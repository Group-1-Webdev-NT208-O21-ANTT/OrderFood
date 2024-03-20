import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import comtam from "../../assets/images/comtam.webp";
import pho from "../../assets/images/pho.jpg";
import fastfood from "../../assets/images/fastfood.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";


const HomePage = () => {
  const arr = ["Thức ăn nhanh", "Cơm tấm", "Phở"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>

      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0 120px",
          height: "1000px",
          width: "100%",
        }}
      >
        <SliderComponent arrImages={[comtam, pho, fastfood]} />
        <WrapperProduct>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProduct>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <WrapperButtonMore
            textButton="Xem Them"
            type="outline"
            styleButton={{
              border: "1px solid rgb(11,116, 229)",
              color: "rgb(11,116,229)",
              width: "240px",
              height: "38px",
              borderRadius: "4px",
            }}
            styleTextButton={{ fontWeight: 500 }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
