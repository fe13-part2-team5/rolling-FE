import styled from "styled-components";

const pri_buttonFontStyle = (height, theme) => {
  if(height == "40px")    
    return theme.fonts['16r'];
  else
    return theme.fonts['18b'];  
}

const PrimaryButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '208px'};
  height: ${(props) => props.height || '56px'};
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  ${(props) => pri_buttonFontStyle(props.height, props.theme)}
  ${(props) => props.$disable ?
    `background-color: #CCCCCC;` :
    `background-color: #9935FF;

        &:hover {
          cursor: pointer;
          background-color: #861DEE;
        }

        &:active {
          background-color: #6E0AD1;
        }

        &:focus {
          background-color: #6E0AD1;
          border: 2px solid #5603A7;
        }`
  }
`;

export default PrimaryButtonWrapper;