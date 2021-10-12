import styled from 'styled-components';

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-position: center;
  border: none;
  cursor: pointer;
  justify-self: center;
  /* background-color: white; */
`;

export default IconButton;
