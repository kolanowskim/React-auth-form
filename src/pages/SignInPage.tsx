import styled from "styled-components";
import { Navigate } from "react-router-dom";
import Form from "../components/forms/Form";
import piggy from "../assets/Finances.svg";
import useAuthUser from "../hooks/useAuthUser";

const SignInPage = () => {
  const { authUser } = useAuthUser();
  if (authUser?.statusCode === 200) {
    return <Navigate to="/logged" replace={true} />;
  } else if (authUser?.statusCode === 500 || authUser?.statusCode === 401)
    return (
      <Container>
        <Wrapper>
          <Form />
          <ImagePiggy src={piggy} />
        </Wrapper>
        <FixedBackground />
      </Container>
    );

  return <div>LOADING</div>;
};

export default SignInPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  z-index: 1;
`;

const ImagePiggy = styled.img``;

const FixedBackground = styled.div`
  width: 70%;
  height: 100vh;
  background-color: #fff3f0;
  position: fixed;
  top: 0;
  right: 0;
`;
