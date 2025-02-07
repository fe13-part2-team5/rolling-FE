import styled from "styled-components";
import { DeletedIcon } from "../Icons";
import { theme } from "../../styles/theme";

export const DeleteButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    padding: 6px;  
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    ${(props) => props.$disable ?
      `background-color: #CCCCCC;` :
      `background-color: #FFFFFF;
    
      &:hover {
          cursor: pointer;
          background-color: #F6F6F6;
      }

      &:focus {
          border: 1px solid #555555;
          background-color: #FFFFFF;
      }`
    }
`;

export const returnDeletedIcon = (disable) => {
  const color = (disable ? theme.colors.white : theme.colors.black);
  return <DeletedIcon color={color} />
}