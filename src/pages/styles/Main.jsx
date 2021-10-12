import styled from 'styled-components';

const Main = styled.main`
  background-color: #ffffff;
  width: 100vw;
  position: absolute;
  top: 55px;
  bottom: 55px;
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
