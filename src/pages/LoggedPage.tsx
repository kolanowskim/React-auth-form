import styled from "styled-components";
import { Navigate } from "react-router-dom";
import People from "../assets/People.svg";
import useAuthUser from "../hooks/useAuthUser";

const logOut = () => {
  document.cookie = `access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  window.location.reload();
};

const LoggedPage = () => {
  const { authUser } = useAuthUser();
  if (authUser?.statusCode === 200) {
    return (
      <Container>
        <Wrapper>
          <HeaderWrapper>
            <LogoHere>Logo Here</LogoHere>
            <HelloText>
              Hello<HelloTextBold>Test!</HelloTextBold>
            </HelloText>
            <Button onClick={() => logOut()}>SING OUT</Button>
          </HeaderWrapper>
          <ImagePeople src={People} />
        </Wrapper>
      </Container>
    );
  } else if (authUser?.statusCode === 500 || authUser?.statusCode === 401)
    return <Navigate to="/" replace={true} />;

  return <div>LOADING</div>;
};

export default LoggedPage;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff3f0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoHere = styled.h1`
  font-size: 36px;
  color: #f47458;
  font-weight: 750;
  margin: 70px 0 0 0;
`;

const HelloText = styled.h1`
  margin-top: 0px;
  font-size: 56px;
  display: flex;
  align-items: center;
  margin: 0;
`;

const HelloTextBold = styled.h1`
  font-size: 56px;
  font-weight: 900;
  margin-left: 12px;
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
  cursor: pointer;
`;

const ImagePeople = styled.img``;
