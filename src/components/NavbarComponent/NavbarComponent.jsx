import React from "react";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";
import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
    const onChange = () => {
       
      };
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return (
            <div>
              <WrapperTextValue>{option}</WrapperTextValue>
            </div>
          );
        });
      case 'checkbox':
        return (
          <Checkbox.Group style={{ width: "100%", display: "flex",flexDirection: "column", gap: "12px" }} onChange={onChange} >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={option.value}>
                  {option.lable}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          console.log("check", option);
          return (
            <div style={{ display: "flex" }}>
              <Rate style={{ fontSize: "12px" }}  disabled defaultValue={option}/>
              <span>{`From ${option} star`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperTextPrice> {option}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };
  return (
    <div >
      
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Do an nhanh", "Com Tam", "Pho"])}
      </WrapperContent>
     
    </div>
  );
};

export default NavbarComponent;
