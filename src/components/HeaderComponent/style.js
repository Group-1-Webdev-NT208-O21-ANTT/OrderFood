import { Row } from "antd";
import styled from "styled-components";
import background3 from "../../assets/images/background3.jpg"
import backgroundjpg from "../../assets/images/backgroundjpg.jpg"
export const  WrapperHeader = styled(Row)`
     padding: 10px 120px;
     background-color: rgb(255, 51, 51); //red

     background-image: url(${backgroundjpg});
     // background-size: cover; /* Đảm bảo ảnh sẽ lấp đầy hoàn toàn phần nền */
     // background-position: center; /* Đảm bảo ảnh sẽ được căn giữa */
     // background-repeat: no-repeat; /* Không lặp lại ảnh */

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
     color: #FF0000;
     // text-color: "red";
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
