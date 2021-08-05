import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import Button from './Button';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';


const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = (formdata) => {
    const { firstName, email, password } = formdata;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: firstName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                displayName: firstName,
                uid: userAuth.user.uid,
              })
            );
            history.push('/teslaaccount');
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <Container>
      <SignUpHeader>
        <SignUpLogo>
          <Link to='/'>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt=''
            />
          </Link>
        </SignUpLogo>
        <SignUpLanguage>
          <LanguageOutlinedIcon />
          <span>en-US</span>
        </SignUpLanguage>
      </SignUpHeader>

      <SignUpInfo>
        <h1>Create Account</h1>
        <Form onSubmit={handleSubmit(signUp)}>
          <label htmlFor='firstName'>
            <p>First Name</p>
            <input
              name='firstName'
              type='text'
              ref={register({ required: true })}
            />
            <span>
              {errors.firstName &&
                'Please enter a first name using letters only'}
            </span>
          </label>

          <label htmlFor='lastName'>
            <p>Last Name</p>
            <input
              name='lastName'
              type='text'
              ref={register({ required: true })}
            />
            <span>
              {errors.lastName && 'Please enter a last name using letters only'}
            </span>
          </label>

          <label htmlFor='email'>
            <p>Email Address</p>
            <input
              name='email'
              type='email'
              ref={register({ required: true })}
            />
            <span>{errors.email && 'Please enter a valid email address'}</span>
          </label>

          <label htmlFor='password'>
            <p>Password</p>
            <input
              name='password'
              type='password'
              ref={register({ required: true })}
            />
            <span>{errors.password && 'Password required'}</span>
          </label>
          <Button
            name='Create Account'
            type='submit'
            bgColor='#3E6AE1'
            hoverBgColor='#3457B1'
          />
        </Form>

        <SignUpDivider>
          <hr />
          <span>OR</span>
          <hr />
        </SignUpDivider>

        <Link to='/login'>
          <Button name='Sign in' secondary={true} />
        </Link>
      </SignUpInfo>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  height: 100vh;
`;

const SignUpHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: 5px;
`;

const SignUpLogo = styled.div`
  > a {
    img {
      object-fit: contain;
      flex: 1;
      width: 90px;
      margin-right: 100px;
    }
  }
`;

const SignUpLanguage = styled.div`
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

const SignUpInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  padding-bottom: 12vh;

  > h1 {
    color: var(--secondry-color);
    font-weight: 500;
    font-size: 34px;
    /* margin-left: -10px; */
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

const SignUpDivider = styled.div`
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
