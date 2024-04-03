import { Row } from "antd";
import styled from "styled-components";

export const  WrapperHeader = styled(Row)`
     padding: 10px 120px;
     background-color: rgb(255, 51, 51);
     align-items: center;
     gap: 16px;
     flex-wrap: nowrap

     @media only screen and (max-width: 600px) {
          padding: 10px; // giảm padding trên các màn hình nhỏ
          flex-wrap: wrap; // cho phép các items chuyển xuống hàng mới

          
        }
`
     
export const WrapperTextHeader = styled.span`
     font-size: 40px;
     color: #fff;
     font-weight: bold;
     text-align: left;

     @media only screen and (max-width: 600px) {
          font-size: 25px;
          position: relative;
          right:100px;
        }
`
export const  WrapperHeaderAccount = styled.div`
    display:flex,
    align-items: center;
    color: #fff;
    font-size: 15px;
    gap: 10px;
`

export const WrapperTextHeader2 = styled.span`
     font-size: 15px;
     color: #fff;
     white-space: nowrap
`
