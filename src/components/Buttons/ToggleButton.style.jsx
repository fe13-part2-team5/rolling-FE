import styled from "styled-components";

export const ColorButton = styled.button`
    ${({ theme }) => theme.flexLayout}
    width: ${(props) => props.width || '122px'};
    height: ${(props) => props.height || '40px'};
    border-radius: 6px;
    font-size: 16px;
    line-height: 26px;

    ${(props) => props.$isToggled ?
        `background-color: #F6F6F6;
        border: 0;
        color: #181818;
        font-weight: 400;` :
        `background-color: #FFFFFF;
        border:2px solid #9935FF;
        color: #861DEE;
        font-weight: 700;`};

    &:hover {
        cursor: pointer;
    }
`;

export const ImgButton = styled.button`
    ${({ theme }) => theme.flexLayout}
    width: ${(props) => props.width || '122px'};
    height: ${(props) => props.height || '40px'};
    border-radius: 6px;
    font-size: 16px;
    line-height: 26px;
    background-color: #CCCCCC;

    ${(props) => props.$isToggled ?
        `background-color: #FFFFFF;
        border:2px solid #9935FF;
        color: #861DEE;
        font-weight: 700;` :
        `background-color: #F6F6F6;
        border: 0;
        color: #181818;
        font-weight: 400;`};

    &:hover {
        cursor: pointer;
    }
`;

export const ToggleButtonWrapper = styled.div`
    display: flex;
`;