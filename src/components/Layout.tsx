import Nav from "components/Nav";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Layout = (props: any) => (
  <Wrapper>
    <Main className={props.className}>{props.children}</Main>
    <Nav />
  </Wrapper>
);

export default Layout;
