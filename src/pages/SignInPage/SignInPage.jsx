import React, { useEffect } from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputForm from '../../components/InputForm/InputForm'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { useState, useDispatch } from 'react';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
	const handleNavigateSignUp = () => {
		navigate('/sign-up')
	}
  
    return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tạo tài khoản</p>
          <InputForm placeholder="Nhập email"/>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            textbutton={"Đăng nhập"}
            styleTextButton={{
              color: "#fff",
            }}
          ></ButtonComponent>
          <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
          <p><WrapperTextLight onClick={handleNavigateSignUp}>Chưa có tài khoản?</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="imamge-logo" height="203px" width="203px" />
          <h4>Mua sắm tại EatToLive</h4>
        </WrapperContainerRight>
      </div>
    </div >
    )
}
export default SignInPage