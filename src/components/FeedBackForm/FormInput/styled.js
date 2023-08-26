import styled, { css } from 'styled-components';

export const InputField = styled.input`
  /* Общие стили для input */
  color: var(--gray-3, #B7B8C5);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 526px;
  height: 42px;
  border-radius: 40px;
  border: 1px solid var(--blue, #74CCD8);
  background: var(--white, #FFF);
  padding-left: 20px;
  box-sizing: border-box;
  color: black;

  ${({ isError }) => isError && css`
    border: 1px solid red;
  `}
`;

export const TextareaField = styled.textarea`
resize: none;
padding-top: 10px;
box-sizing: border-box;
vertical-align: top;
min-height: 130px;
padding-left: 20px;
border-radius: 20px;
width: 526px;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
font-family: Noto Sans;
border: 1px solid var(--blue, #74CCD8);

${({ isError }) => isError && css`
  border: 1px solid red;
  `}
`;

export const Error = styled.div`
  height: 20px;
`;

export const ErrorActive = styled.div`
  display: flex;
  color: red;
  font-size: 12px;
  height: 20px;
  padding-left: 20px;
  letter-spacing: -0.5px;
`;
