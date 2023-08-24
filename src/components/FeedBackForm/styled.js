import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 0;
  background: var(--blue-2-light, #D6F4FA);
  width: 652px;
  z-index: 2;
`;

export const MainForm = styled.div`
  display: flex;
  column-gap: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
`;

export const FormIcon = styled.img`
  width: 36.727px;
`;

export const FormTitle = styled.h2`
  color: var(--dark, #090F24);
  text-align: center;
  margin: 0;
  font-family: Rubik;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 139.023%;
`;

export const FormSubtitle = styled.p`
  color: #1B5F6B;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24.804px;
  margin: 0;
  letter-spacing: -0.5px;
`;

export const FormNote = styled.p`
  color: #427781;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 155.023%;
  margin: 0;
`;

export const SendButton = styled.button`
  display: flex;
  width: 249px;
  height: 46px;
  padding: 13px 30px;
  margin: 14px 0 0 0;
  gap: 10px;
  border-radius: 30px;
  background: var(--blue, #74CCD8);
  box-shadow: 0px 2px 4px 0px rgba(51, 196, 223, 0.20);
  color: white;
  border: none;
`;

export const SendIcon = styled.img`
  width: 20px;
  color: var(--white, #FFF);
`;

export const SendText = styled.p`
  font-family: Noto Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  letter-spacing: -0.5px;
`;
