import styled from "styled-components";

export const Wrapper = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
    
    &.main-wrapper, &.section-wrap {
        ${({ theme }) => theme.flexLayout("column", "initial")};
    }

    &.section-wrap {
        gap: 30px;
        margin: 0 auto;
        margin-top: 60px;
    }

    &.txt-box-01, &.txt-box-02, &.txt-area {
        ${({ theme }) => theme.flexLayout("column", "initial", "initial")};
    }

    &.txt-box-01, &.txt-box-02 {
        gap: 16px;
    }

    &.txt-area {
        gap: 8px;
    }

    &.txt-box-01 {
        width: 324px;
        margin-left: 60px;
    }

    &.txt-box-02 {
        width: 348px;
    }

    &.img-box, &.buttonWrapper {
        ${({ theme }) => theme.flexLayout};
    }

    &.img-box {
        width: 720px;
        height: 204px;
    }

    &.fixed-right-img-box {
        margin-left: auto;
    }

    &.buttonWrapper {
        margin-top: 24px;
    }
`;

export const Content = styled.div`

    &.section {
        display: flex;
        width: 1200px;
        height: 324px;
        border-radius: 16px;
        background-color: #F6F8FF;
        padding-top: 60px;
    }

    &.reverse-section {
        ${({ theme }) => theme.flexLayout("row-reverse", "flex-end", "initial")}
    }

    &.img-01 {
        width: 640px;
        height: 172px;
        background-image: url('/src/assets/mainImg01.png');
        background-size: cover;
    }

    &.img-02 {
        width: 470px;
        height: 204px;
        background-image: url('/src/assets/mainImg02.png');
        background-size: cover;
    }
`;

export const Line = styled.div`
    position: sticky;
    top: 65px;
    width: 100%;
    border-top: 1px solid #EDEDED;
`;

export const Label = styled.div`
    ${({ theme }) => theme.flexLayout}
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