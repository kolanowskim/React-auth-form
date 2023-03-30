import styled from "styled-components";
import LogoHere from "../LogoHere";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Form = ({ signUP = false }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <LogoHere />
        <WelcomeText>{signUP ? "" : "Welcome back !!!"}</WelcomeText>
        <SignText>Sign {signUP ? "up" : "in"} </SignText>
      </HeaderWrapper>
      {signUP ? <SignUpForm /> : <SignInForm />}
      <TextAccount>
        {signUP ? (
          <TextAccountWrapper>
            Have already an account?{" "}
            <TextOrangeLink to={`/`}>Sign in</TextOrangeLink>
          </TextAccountWrapper>
        ) : (
          <TextAccountWrapper>
            Don't have an account?{" "}
            <TextOrangeLink to={`/signUp`}>Sign up</TextOrangeLink>
          </TextAccountWrapper>
        )}
      </TextAccount>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  height: 747px;
  width: 598px;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
`;

const HeaderWrapper = styled.div`
  width: 478px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const WelcomeText = styled.p`
  font-size: 16px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: rgba(0, 0, 0, 0.5);
  margin-left: 5px;
  margin-top: 40px;
  height: 17px;
`;

const SignText = styled.h1`
  margin-top: 0px;
  font-size: 56px;
`;

const TextAccountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextAccount = styled.p`
  color: rgba(0, 0, 0, 0.2);
`;

const TextOrangeLink = styled(Link)`
  color: #f47458;
  margin-left: 5px;
  cursor: pointer;
  text-decoration: none;
`;
