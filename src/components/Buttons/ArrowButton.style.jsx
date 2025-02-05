import styled from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";

export const ArrowButtonWrapper = styled.button`
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 50%;
    opacity : 0.9;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

export const returnArrowImg = (direction) => {
    if(direction === 'left')
        return <ArrowLeftIcon size="16px"/>;
    if(direction === 'right')
        return <ArrowRightIcon size="16px"/>;
}