import styled from 'styled-components';

export const CheckboxLabel = styled.label` color: var(--dark, #090F24);
font-family: Noto Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 155.023%;
margin: 0;
display: inline-block;
letter-spacing: -0.5px;
`;

export const CheckboxInput = styled.input` width: 14px;
height: 14px;
flex-shrink: 0;
margin: 0 9px 0 0;
`;

export const CheckboxText = styled.span` color: #090F24;
font-family: Noto Sans;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 155.023%;
`;

export const ErrorText = styled.div` color: red;
font-size: 14px;
margin-top: 5px;
`;

export const Error = styled.div` height: 20px;
`;

export const ErrorActive = styled.div` display: flex;
color: red;
font-size: 12px;
height: 20px;
padding-left: 20px;
letter-spacing: -0.5px;
`;
