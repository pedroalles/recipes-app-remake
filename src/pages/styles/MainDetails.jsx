import styled from 'styled-components';

const Main = styled.main`
  background-color: #fff;
  width: 100vw;
  position: absolute;
  top: 55px;
  bottom: 0px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  .loadingRecipes {
    position: absolute;
    top: 30vh;
  }
`;

export default Main;
