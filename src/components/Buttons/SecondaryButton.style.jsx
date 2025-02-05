import styled from "styled-components";

const SecondaryButtonWrapper = styled.button`
  width: ${(props) => props.width || '122px'};
  height: ${(props) => props.height || '40px'};
  padding: 7px 16px;
  border: 1px solid #9935FF;
  border-radius: 6px;  
  ${(props) => props.theme.fonts['16r']}
  ${(props) => props.$disable ?
      `background-color: #CCCCCC;
       color: #FFFFFF;
       border: 1px solid #CCCCCC;` :
      `background-color: #FFFFFF;
       color: #861DEE;
       border: 1px solid #9935FF;

          &:hover {
            cursor: pointer;
            background-color: #F8F0FF;
            border: 1px solid #861DEE;
            color: #9935FF;
          }

          &:active {
            background-color: #F8F0FF;
            border: 1px solid #6E0AD1;
            color: #9935FF;
          }

          &:focus {
            background-color: #FFFFFF;
            border: 1px solid #6E0AD1;
            color: #9747FF;
          }`
    }
`;

export default SecondaryButtonWrapper;