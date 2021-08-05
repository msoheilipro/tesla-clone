import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from './Button';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';


const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = (formdata) => {
    // console.log(formdata);
    const { email, password } = formdata;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            displayName: userAuth.user.displayName,
            uid: userAuth.user.uid,
          })
        );
        history.push('/teslaaccount');
      })

      .catch((error) => alert(error));
  };

  return (
    <Container>
      <LoginHeader>
        <LoginLogo>
          <Link to='/'>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt=''
            />
          </Link>
        </LoginLogo>
        <LoginLanguage>
          <LanguageOutlinedIcon />
          <span>en-US</span>
        </LoginLanguage>
      </LoginHeader>

      <LoginInfo>
        <h1>Sign In</h1>
        <Form onSubmit={handleSubmit(signIn)}>
          <label htmlFor='email'>
            <Modal>
              <p>Email Address</p>
              <PriorityHighIcon />
            </Modal>

            <input
              name='email'
              type='email'
              ref={register({ required: true })}
            />
            <span>{errors.email && 'Email required.'}</span>
          </label>

          <label htmlFor='password'>
            <p>Password</p>
            <input
              name='password'
              type='password'
              ref={register({ required: true, minLength: 6 })}
            />
            <span>
              {errors.password?.type === 'required' && 'Password required'}
              {errors.password?.type === 'minLength' &&
                'Password sould be at least 6 characters'}
            </span>
          </label>

          <Button name='Sign in' type='submit' />
        </Form>

        <ForgetSection>
          <div>
            <span>Forgot email?</span>
            <span></span>
            <span>Forgot password?</span>
          </div>
        </ForgetSection>

        <LoginDivider>
          <hr />
          <span>OR</span>
          <hr />
        </LoginDivider>

        <Link to='signup'>
          <Button name='Create Account' secondary={true} />
        </Link>
      </LoginInfo>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
`;

const LoginHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: 5px;
`;

const LoginLogo = styled.div`
  > a {
    img {
      object-fit: contain;
      flex: 1;
      width: 90px;
      margin-right: 100px;
    }
  }
`;

const LoginLanguage = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 50px;
  font-size: 15px;
  transition: all 0.2s;
  > span {
    color: var(--grey-color);
  }
  .MuiSvgIcon-root {
    color: var(--grey-color);
  }

  &:hover {
    background-color: hsla(0, 0%, 50.2%, 0.125);
  }
`;

const LoginInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  padding-top: 12vh;

  > h1 {
    color: var(--secondry-color);
    font-weight: 500;
    font-size: 34px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  > label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #5c5e62;
    font-weight: 500;
    font-size: 15px;
    line-height: 2;
    margin-bottom: 25px;

    > p {
      padding-left: 15px;
      font-size: 14px;
    }

    > input {
      width: 100%;
      background: #f4f4f4;
      padding: 10px 20px;
      color: var(--grey-color);
      font-weight: 600;
      font-size: 15px;
      outline: none;
      border: 1px solid #f4f4f4;
      border-radius: 50px;
      transition: all 0.2s;

      :focus {
        border: 1px solid #d6d6d6;
      }
    }

    span {
      font-size: 14px;
      padding-left: 15px;
      color: var(--error-color);
    }
  }
`;

const Modal = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  > p {
    padding-left: 15px;
    font-size: 14px;
  }

  .MuiSvgIcon-root {
    width: 20px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: var(--primary-color);
    border-radius: 50px;
    transform: rotate(180deg);
    cursor: pointer;
  }
`;

const ForgetSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 100%;
    text-align: center;
    span {
      font-size: 12px;
      color: var(--grey-color);
      border-bottom: 1px solid var(--grey-color);
      letter-spacing: 0.8px;
      &:hover {
        color: black;
        cursor: pointer;
        border-bottom: 2px solid black;
      }
    }

    span:nth-child(2) {
      height: 1px;
      border-right: 1px solid var(--grey-color);
      margin: 0 20px;
    }
  }
`;

const LoginDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;

  > hr {
    width: 45%;
    height: 0;
    opacity: 0.3;
  }
  > span {
    font-size: 14px;
    color: #5C5E62;
    margin: 0 4px;
  }
`;
