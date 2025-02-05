import styled from "styled-components";
import { AddIcon } from "../Icons";
import { theme } from "../../styles/theme";

const setOutLinedButtonFontStyle = (height, emoji, theme) => {
    const fontStyles = {
        "56px": theme.fonts["18b"],
        "40px": { ...theme.fonts["16r"], ...(emoji && { fontWeight: 500, lineHeight: "24px" }) },
        "36px": { ...theme.fonts["16r"], fontWeight: 500, lineHeight: "24px" },
        "28px": theme.fonts["14r"],
    };

    return fontStyles[height];
}

const setButtonGap = (height, emoji) => {
    if (!emoji) return "0;";

    switch (height) {
        case "56px": return "0;";
        case "40px": return "10px;";
        default: return "4px;";
    }
}

export const OutlinedButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${(props) => setButtonGap(props.height, props.$emoji)}
    width: ${(props) => props.width || '192px'};
    height: ${(props) => props.height || '56px'};
    padding: 14px 16px;
    border: 1px solid #CCCCCC;
    border-radius: 12px;    
    background-color: #FFFFFF;
    color: #181818;
    ${(props) => setOutLinedButtonFontStyle(props.height, props.$emoji, props.theme)}    
    ${(props) => props.$disable ?
        `background-color: #CCCCCC;
        color: #FFFFFF;` :
        `background-color: #FFFFFF;

        &:hover {
            cursor: pointer;
            background-color: #F6F6F6;
        }

        &:focus {
            background-color: #FFFFFF;
            border: 1px solid #555555;
        }`
    }
`;

export const returnEmoji = (emoji, height, disable) => {
    if (!emoji || height === "56px") return;

    const size = (height === "28px") ? "20px" : "24px";
    const color = disable ? theme.colors.white : theme.colors.black;

    return <AddIcon size={size} color={color} />;
}

export const OutlinedButtonText = styled.div``;