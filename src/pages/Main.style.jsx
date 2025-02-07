import styled from "styled-components";

export const Wrapper = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
    
    &.main-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &.section-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin: 0 auto;
        margin-top: 60px;
        border: 1px solid red;
    }

    &.txt-box-01 {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 324px;
        margin-left: 60px;
    }

    &.txt-box-02 {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 324px;
    }

    &.txt-area {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &.buttonWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 24px;
    }
`;

export const Content = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};

    &.section {
        display: flex;
        width: 1200px;
        height: 324px;
        border: 1px solid blue;
        border-radius: 16px;
        background-color: #F6F8FF;
        padding-top: 60px;
    }

    &.reverse-section {
        flex-direction: row-reverse;
    }

    &.img {
        width: 720px;
        height: 204px;
        border: 1px solid yellow;
    }

    &.sample01 {
        margin-left: auto;
    }
`;

export const Line = styled.div`
    position: sticky;
    top: 65px;
    width: 100%;
    border-top: 1px solid #EDEDED;
`;

export const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 32px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.purple[600]};
    ${({ theme }) => theme.fonts['14b']}
    color: ${({ theme }) => theme.colors.white};
`;

export const H2 = styled.h2`
    ${({ theme }) => theme.fonts['24b']}
    color: ${({ theme }) => theme.colors.gray[900]};
`;

export const P = styled.p`
    ${({ theme }) => theme.fonts['18r']}
    color: ${({ theme }) => theme.colors.gray[500]};
`;