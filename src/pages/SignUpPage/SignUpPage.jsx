import React from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputForm from '../../components/InputForm/InputForm'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { useNavigate } from 'react-router'
import { useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined, EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
	const handleNavigateSignIn = () => {
		navigate('/sign-in')
	}
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng kí tài khoản mới!</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
            <div style={{ position: 'relative' }}>
              <span onClick={() => setIsShowPassword(!isShowConfirmPassword)}
                    style={{
                      zIndex: 10,
                      position: 'absolute',
                      top: '4px',
                      right: '8px'
                    }}>
                {isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )}
                </span>
        <InputForm placeholder ="password" style = {{ marginBottom:'10px' }} />
              </div>

              <div style={{ position: 'relative' }}>
                  <span style={{
                    zIndex: 10,
                    position: 'absolute',
                    top: '4px',
                    right: '8px'
                  }}>
                    {isShowConfirmPassword ? (
                      <EyeFilled />
                    ) : (
                      <EyeInvisibleFilled />
                    )}
                    </span>
              
                  <InputForm placeholder="confirm password" />
                </div>
            <ButtonComponent
              size={40}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 10px'
              }}
              textbutton={'Đăng ký'}
              styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
          <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="iamge-logo" height="203px" width="203px" />
          <h4>Mua sắm tại EatToLive</h4>
        </WrapperContainerRight>
      </div>
    </div >
  )
}

export default SignUpPage