import styled from 'styled-components';

const IngredientsContainer = styled.div`
  background-color: #161616f0;
  display: flex;
  justify-content: center;
  padding: 8px 6px;
  overflow: hidden;

  ul {
    background-color: #161616;
    display: flex;
    border: 1px solid #ffffff45;
    border-radius: 6px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-height: 32vh;
    overflow-y: scroll;
    list-style: none;
    padding: 8px;

    li {
      display: flex;
      border-bottom: 1px solid #ffffff45;
      border-left: 1px solid #ffffff45;
      margin: 4px 0px;
      border-radius: 6px;
      width: 100%;
      /* background-color: red; */
      span {
        color: #ffffffdf;
        font-size: 1.1rem;
        padding: 2px 8px;
      }

      span:nth-child(1) {
        /* background-color: blue; */
        width: 40%;
      }
      span:nth-child(2) {
        /* background-color: pink; */
        width: 60%;
      }
    }

    li:nth-child(1) {
      background-color: #ff8400;
      span {
        /* color: #000; */
        font-weight: 700;
      }
    }
  }
`;

export default IngredientsContainer;
