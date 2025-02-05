import styled from "styled-components";
import { PlusIcon } from "../Icons";
import { theme } from "../../styles/theme";

export const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border: 0;
    border-radius: 100px;
    ${(props) => props.$disable ?
        `background-color: #CCCCCC;` :
        `background-color: #555555;
    
        &:hover {
            cursor: pointer;
            background-color: #4A4A4A;
        }

        &:active {
            background-color: #3A3A3A;
        }

        &:focus {
            background-color: #3A3A3A;
            border: 1px solid #2B2B2B;
        }`
    }
`;

export const returnPlusIcon = () => {    
    return <PlusIcon color={theme.colors.white}/>;
}