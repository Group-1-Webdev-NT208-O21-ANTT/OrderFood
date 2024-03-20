import { Row } from "antd";
import styled from "styled-components";

export const  WrapperHeader = styled(Row)`
     padding: 10px 120px;
     background-color: rgb(255, 51, 51);
     align-items: center;
     gap: 16px;
     flex-wrap: nowrap
`
     
export const WrapperTextHeader = styled.span`
     font-size: 40px;
     color: #fff;
     font-weight: bold;
     text-align: left;
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