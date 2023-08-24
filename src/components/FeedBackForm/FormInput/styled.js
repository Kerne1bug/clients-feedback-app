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
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid var(--blue, #74CCD8);
  background: var(--white, #FFF);
  padding-left: 20px;
  box-sizing: border-box;
  color: black;

  /* Стили для textarea */
  ${({ isTextarea }) => isTextarea && css`
    resize: none;
    vertical-align: top;
    min-height: 130px;
    padding-top: 11.5px;
    border-radius: 20px;
    ${styled.inputFieldText}
  `}

  /* Стили для ошибки */
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
