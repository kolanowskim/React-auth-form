import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.png";

const signIn = async (
  e: React.SyntheticEvent,
  navigate: Function,
  setToglMessage: Function,
  setToglErrorMessage: Function,
  disableMessages: Function
) => {
  e.preventDefault();
  disableMessages();
  const target = e.target as typeof e.target & {
    email: { value: string };
    password: { value: string };
  };
  const email = target.email?.value;
  const password = target.password?.value;

  const data = {
    username: email,
    password: password,
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/auth/login`,
      {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const responseJSON = await response.json();
    if (responseJSON.statusCode === 200) {
      navigate("/logged");
    } else if (responseJSON.statusCode === 401) {
      setToglMessage(true);
    }
  } catch (e) {
    console.log(e);
    setToglErrorMessage(true);
  }
};

const SignInForm = () => {
  const [toglMessage, setToglMessage] = useState(false);
  const [toglErrorMessage, setToglErrorMessage] = useState(false);
  const navigate = useNavigate();

  const disableMessages = () => {
    setToglMessage(false);
    setToglErrorMessage(false);
  };

  return (
    <Container
      onSubmit={(e) =>
        signIn(
          e,
          navigate,
          setToglMessage,
          setToglErrorMessage,
          disableMessages
        )
      }
    >
      <InputsWrapper>
        <InputWrapper>
          <InputP>Email</InputP>
          <Input
            name="email"
            type="email"
            required
            onFocus={() => disableMessages()}
          />
        </InputWrapper>
        <InputWrapper className="messageBelow">
          <PasswordTextWrapper>
            <InputP>Password</InputP>
            <PasswordForgotPassword>Forgot Password ?</PasswordForgotPassword>
          </PasswordTextWrapper>
          <Input
            name="password"
            type="password"
            required
            onFocus={() => disableMessages()}
          />
          <MessageBelow togl={toglMessage}>
            Incorrect email or password
          </MessageBelow>
          <MessageBelow togl={toglErrorMessage}>
            Something went wrong
          </MessageBelow>
        </InputWrapper>
      </InputsWrapper>

      <Button type="submit">
        SIGN IN <Arrow src={arrow} alt="arrow" />
      </Button>
    </Container>
  );
};

export default SignInForm;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputsWrapper = styled.div``;

const InputWrapper = styled.div`
  &.messageBelow {
    position: relative;
    z-index: 1;
  }
`;

const InputP = styled.p`
  margin-bottom: 5px;
`;

const Input = styled.input`
  background-color: #fff6f4;
  border: none;
  height: 46px;
  width: 478px;
  border-radius: 4px;
  position: relative;
  z-index: 1;
`;

const MessageBelow = styled.p<{ togl: boolean }>`
  z-index: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  color: red;
  top: ${(props) => (props.togl ? "80px" : "50px")};
  transition: 0.5s;
`;

const PasswordTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 478px;
`;

const PasswordForgotPassword = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

const Button = styled.button`
  background-color: #f47458;
  font-family: Poppins, sans-serif;
  color: white;
  border: none;
  border-radius: 23px;
  width: 150px;
  height: 46px;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
`;

const Arrow = styled.img`
  margin-left: 15px;
  margin-bottom: 3px;
`;
