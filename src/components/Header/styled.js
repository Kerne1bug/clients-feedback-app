import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  position: relative;
  width: 50%;
  height: auto;
`;

export const FormIcon = styled.img`
  position: absolute;
  z-index: 3;
  top: 436px;
  left: 538px;
`;

export const SemiCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(0%, -50%);
  background-color: #D6F4FA;
  width: 200%;
  height: 450%;
  border-radius: 100%;
  z-index: 1;
`;
